interface Message {
  role: "user" | "assistant"
  content: string
}

import { errorResponse, getClientAddress, isRateLimited, rateLimitResponse, requestId } from "@/lib/api-security"

const MAX_MESSAGES = 50
const MAX_MESSAGE_LENGTH = 12_000

const SYSTEM_PROMPT = `You are NIMO, a friendly and helpful general-purpose AI chatbot. Have natural conversations, answer questions, explain ideas, help with planning, writing, learning, and everyday tasks. Adapt your tone to the user's request and communicate clearly using Markdown when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Keep responses focused and avoid unnecessary verbosity
- Explain unfamiliar topics clearly and use practical examples when useful
- If the user asks for code, provide accurate code blocks with language specification
- Format lists, headers, and emphasis using proper Markdown syntax`

export async function POST(req: Request) {
  const id = requestId()
  try {
    if (isRateLimited(`chat:${getClientAddress(req)}`)) return rateLimitResponse()

    const body = await req.json()
    const messages = body?.messages
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

    if (!apiKey) {
      const message =
        "Gemini API key missing — please set GOOGLE_GENERATIVE_AI_API_KEY in .env.local to enable real completions."
      console.error(message)
      const readable = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(message)}\n`))
          controller.close()
        },
      })
      return new Response(readable, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    }

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > MAX_MESSAGES ||
      messages.some(
        (message): message is Message =>
          !message ||
          (message.role !== "user" && message.role !== "assistant") ||
          typeof message.content !== "string" ||
          message.content.length === 0 ||
          message.content.length > MAX_MESSAGE_LENGTH,
      )
    ) {
      return new Response("No messages provided", { status: 400 })
    }

    const conversation = messages
      .map((message) => `${message.role === "user" ? "User" : "NIMO"}: ${message.content}`)
      .join("\n\n")
    const prompt = `${SYSTEM_PROMPT}\n\nConversation:\n${conversation}\n\nNIMO:`
    const configuredModel = process.env.GEMINI_MODEL || "gemini-flash-lite-latest"
    const models = [...new Set([configuredModel, "gemini-flash-lite-latest"])]
    let response: Response | null = null

    for (const model of models) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/interactions?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model, input: prompt, store: false }),
        },
      )

      if (response.ok) break

      const errorText = await response.text()
      console.error(`Gemini API error for ${model}:`, response.status, errorText)
      if (response.status !== 429 && response.status < 500) break
    }

    if (!response || !response.ok) {
      return new Response("Gemini is temporarily unavailable. Please try again in a moment.", {
        status: 503,
      })
    }

    const result = (await response.json()) as {
      steps?: Array<{ type?: string; content?: Array<{ type?: string; text?: string }> }>
    }
    const assistantText =
      result.steps
        ?.filter((step) => step.type === "model_output")
        .flatMap((step) => step.content ?? [])
        .filter((part) => part.type === "text")
        .map((part) => part.text ?? "")
        .join("") || "Gemini returned an empty response."

    const readable = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(assistantText)}\n`))
        controller.close()
      },
    })
    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  } catch (error) {
    console.error(`[${id}] Chat API error:`, error instanceof Error ? error.message : String(error))
    return errorResponse("Unable to process the request.", 500, id)
  }
}
