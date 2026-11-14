/**
 * Video generation via Veo (Gemini API key route).
 * Requires billing to be enabled on the Google AI Studio project.
 *
 * POST /api/video  { prompt: string }
 *   → { operationName: string }
 *   → { error: string, requiresBilling: true }  if Veo not available
 *
 * GET  /api/video?op=operations/xxx...
 *   → { done: false }
 *   → { done: true, videoUri: string, mimeType: string }
 *   → { done: true, error: string }
 */

import { errorResponse, getClientAddress, isRateLimited, rateLimitResponse, requestId } from "@/lib/api-security"

const BASE = "https://generativelanguage.googleapis.com/v1beta"

// Try models in priority order
const VEO_MODELS = [
  "veo-3.0-generate-preview",
  "veo-2.0-generate-001",
  "veo-001",
]

export async function POST(req: Request) {
  const id = requestId()
  try {
    if (isRateLimited(`video:${getClientAddress(req)}`)) return rateLimitResponse()

    const body = await req.json()
    const prompt = body?.prompt
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

    if (!apiKey) return Response.json({ error: "API key not configured." }, { status: 500 })
    if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 4_000) {
      return Response.json({ error: "Prompt is required and must be 4,000 characters or fewer." }, { status: 400 })
    }

    for (const model of VEO_MODELS) {
      const response = await fetch(
        `${BASE}/models/${model}:predictLongRunning?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            instances: [{ prompt: prompt.trim() }],
            parameters: { aspectRatio: "16:9", durationSeconds: 8 },
          }),
        },
      )

      if (!response.ok) {
        const errText = await response.text()
        console.error(`Veo model ${model} error:`, response.status, errText)

        if (response.status === 404 || response.status === 400) continue

        if (response.status === 403) {
          return Response.json(
            {
              error: "Video generation requires billing to be enabled on your Google AI Studio project. Enable billing at console.cloud.google.com, then try again.",
              requiresBilling: true,
            },
            { status: 403 },
          )
        }

        console.error(`Veo request failed (${response.status}):`, errText)
        return errorResponse("Video generation failed. Please try again.", 502, id)
      }

      const result = await response.json()
      const operationName: string = result?.name ?? ""
      if (!operationName) {
        return Response.json({ error: "No operation returned from Veo API." }, { status: 500 })
      }
      return Response.json({ operationName })
    }

    // All models returned 404 → Veo not available on this key
    return Response.json(
      {
        error: "Veo video generation is not available on your current API key. This feature requires a Google AI Studio key with billing enabled and Veo access. Visit aistudio.google.com to upgrade.",
        requiresBilling: true,
      },
      { status: 404 },
    )
  } catch (error) {
    console.error("Video POST error:", error instanceof Error ? error.message : String(error))
    return errorResponse("Video generation failed. Please try again.", 500, id)
  }
}

export async function GET(req: Request) {
  const id = requestId()
  try {
    if (isRateLimited(`video-poll:${getClientAddress(req)}`)) return rateLimitResponse()

    const { searchParams } = new URL(req.url)
    const op = searchParams.get("op")
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

    if (!apiKey) return Response.json({ error: "API key not configured." }, { status: 500 })
    if (!op || !/^operations\/[A-Za-z0-9._-]+$/.test(op)) {
      return Response.json({ error: "Invalid operation." }, { status: 400 })
    }

    const response = await fetch(
      `${BASE}/${op}?key=${encodeURIComponent(apiKey)}`,
      { headers: { "Content-Type": "application/json" } },
    )

    if (!response.ok) {
      console.error(`Veo poll failed (${response.status}):`, await response.text())
      return errorResponse("Video status check failed.", 502, id)
    }

    const result = await response.json()

    if (!result.done) return Response.json({ done: false })

    if (result.error) {
      return Response.json({ done: true, error: result.error.message ?? "Video generation failed." })
    }

    const videos: Array<{ uri?: string; mimeType?: string }> =
      result?.response?.generateVideoResponse?.generatedSamples ?? []

    const video = videos[0]
    if (!video?.uri) {
      return Response.json({ done: true, error: "No video URI in response." })
    }

    return Response.json({ done: true, videoUri: video.uri, mimeType: video.mimeType ?? "video/mp4" })
  } catch (error) {
    console.error("Video GET error:", error instanceof Error ? error.message : String(error))
    return errorResponse("Video status check failed.", 500, id)
  }
}
