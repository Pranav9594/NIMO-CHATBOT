/**
 * Image generation via OpenRouter → Gemini image models.
 * Requires OPENROUTER_API_KEY in .env.local with credits loaded.
 *
 * Models tried in order (cheapest first):
 *   google/gemini-3.1-flash-lite-image  — cheapest
 *   google/gemini-2.5-flash-image       — good quality
 *   google/gemini-3.1-flash-image       — higher quality
 *   google/gemini-3-pro-image           — best quality
 */

const MODELS = [
  "google/gemini-3.1-flash-lite-image",
  "google/gemini-2.5-flash-image",
  "google/gemini-3.1-flash-image",
  "google/gemini-3-pro-image",
]

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return Response.json({ error: "OpenRouter API key not configured. Add OPENROUTER_API_KEY to .env.local." }, { status: 500 })
    }
    if (!prompt?.trim()) {
      return Response.json({ error: "Prompt is required." }, { status: 400 })
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

        // No credits → surface clear message immediately
        if (response.status === 402) {
          return Response.json(
            {
              error: "Your OpenRouter account has no credits. Add credits at openrouter.ai/settings/credits to enable image generation.",
              noCredits: true,
            },
            { status: 402 },
          )
        }

        // Model not found → try next
        if (response.status === 404 || response.status === 400) continue

        // Any other error → surface immediately
        return Response.json({ error: `Image generation failed: ${errMsg}` }, { status: response.status })
      }

      const img = result.data?.[0]

      if (img?.b64_json) {
        return Response.json({
          imageData: img.b64_json,
          mimeType: "image/png",
          caption: null,
          model,
        })
      }

      // Some models return a URL instead of b64
      if (img?.url) {
        return Response.json({
          imageUrl: img.url,
          mimeType: "image/png",
          caption: null,
          model,
        })
      }

      lastError = "No image in response"
    }

    return Response.json({ error: `All image models failed. Last error: ${lastError}` }, { status: 500 })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error("Image route error:", msg)
    return Response.json({ error: msg }, { status: 500 })
  }
}
