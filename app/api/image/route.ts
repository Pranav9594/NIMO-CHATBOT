import { errorResponse, getClientAddress, isRateLimited, rateLimitResponse, requestId } from "@/lib/api-security"

/**
 * Image generation via OpenRouter → Gemini image models.
 * Requires OPENROUTER_API_KEY in .env.local with credits loaded.
 */

const MODELS = [
  "google/gemini-3.1-flash-lite-image",
  "google/gemini-2.5-flash-image",
  "google/gemini-3.1-flash-image",
  "google/gemini-3-pro-image",
]

export async function POST(req: Request) {
  const id = requestId()
  try {
    if (isRateLimited(`image:${getClientAddress(req)}`)) return rateLimitResponse()

    const body = await req.json()
    const prompt = body?.prompt
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return Response.json({ error: "OpenRouter API key not configured." }, { status: 500 })
    }
    if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 4_000) {
      return Response.json({ error: "Prompt is required and must be 4,000 characters or fewer." }, { status: 400 })
    }

    let lastError = ""

    for (const model of MODELS) {
      const response = await fetch("https://openrouter.ai/api/v1/images/generations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "NIMO",
        },
        body: JSON.stringify({
          model,
          prompt: prompt.trim(),
          n: 1,
          size: "1024x1024",
          response_format: "b64_json",
        }),
      })

      const result = await response.json()

      if (!response.ok || result.error) {
        const errMsg = result.error?.message ?? `HTTP ${response.status}`
        console.error(`Image model ${model} error:`, errMsg)
        lastError = errMsg

        if (response.status === 402) {
          return Response.json(
            { error: "Image generation is temporarily unavailable because the provider account has no credits.", noCredits: true },
            { status: 402 },
          )
        }

        if (response.status === 404 || response.status === 400) continue
        return Response.json({ error: "Image generation failed. Please try again." }, { status: 502 })
      }

      const img = result.data?.[0]

      if (img?.b64_json) {
        return Response.json({ imageData: img.b64_json, mimeType: "image/png", caption: null, model })
      }

      if (img?.url) {
        return Response.json({ imageUrl: img.url, mimeType: "image/png", caption: null, model })
      }

      lastError = "No image in response"
    }

    console.error("All image models failed:", lastError)
    return errorResponse("Image generation failed. Please try again.", 502, id)
  } catch (error) {
    console.error(`[${id}] Image route error:`, error instanceof Error ? error.message : String(error))
    return errorResponse("Image generation failed. Please try again.", 500, id)
  }
}
