interface Message {
  role: "user" | "assistant"
  content: string
}

const SYSTEM_PROMPT = `You are NIMO, a friendly and helpful general-purpose AI chatbot. Have natural conversations, answer questions, explain ideas, help with planning, writing, learning, and everyday tasks. Adapt your tone to the user's request and communicate clearly using Markdown when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Keep responses focused and avoid unnecessary verbosity
- Explain unfamiliar topics clearly and use practical examples when useful
- If the user asks for code, provide accurate code blocks with language specification
- Format lists, headers, and emphasis using proper Markdown syntax`

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY
    if (!apiKey) {
      const errMsg =
        "The GOOGLE_GENERATIVE_AI_API_KEY environment variable is missing. Set it in .env.local to enable Gemini completions."
      console.error(errMsg)

      const fallbackText =
        "Gemini API key missing — please set GOOGLE_GENERATIVE_AI_API_KEY in .env.local to enable real completions."

      const readable = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(fallbackText)}\n`))
          controller.close()
        },
      })

      return new Response(readable, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    }

    if (!messages || messages.length === 0) {
      return new Response("No messages provided", { status: 400 })
    }

    const conversation = messages
      .map((message) => `${message.role === "user" ? "User" : "NIMO"}: ${message.content}`)
      .join("\n\n")
    const prompt = `${SYSTEM_PROMPT}\n\nConversation:\n${conversation}\n\nNIMO:`
    const models = ["gemini-3.6-flash", "gemini-3-flash-preview", "gemini-3.5-flash"]
    let response: Response | null = null
    let lastError = "Gemini is temporarily unavailable."

    for (const model of models) {
      for (let attempt = 0; attempt < 2; attempt += 1) {
        const candidateResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/interactions?key=${encodeURIComponent(apiKey)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model,
              input: prompt,
              store: false,
            }),
          },
        )

        if (candidateResponse.ok) {
          response = candidateResponse
          break
        }

        lastError = await candidateResponse.text()
        console.error(`Gemini API error for ${model}:`, candidateResponse.status, lastError)

        if ((candidateResponse.status === 429 || candidateResponse.status === 503) && attempt === 0) {
          await new Promise((resolve) => setTimeout(resolve, 800))
          continue
        }

        break
      }

      if (response) break
    }

    if (!response) {
      return new Response(
        "Gemini is temporarily busy. Please wait a moment and try again.",
        { status: 503 },
      )
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
        .join("") || lastError || "Gemini returned an empty response."

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
    const message = error instanceof Error ? error.message : String(error)
    console.error("Chat API error:", message)
    return new Response(message, { status: 500 })
  }
}
