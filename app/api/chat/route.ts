import { createGroq } from "@ai-sdk/groq"
import { streamText } from "ai"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

const SYSTEM_PROMPT = `You are NIMO, a concise and helpful AI coding assistant. You communicate clearly and use Markdown formatting when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Use code blocks with language specification for any code examples
- Keep responses focused and avoid unnecessary verbosity
- When explaining code, be clear and educational
- Format lists, headers, and emphasis using proper Markdown syntax`

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    if (!messages || messages.length === 0) {
      return new Response("No messages provided", { status: 400 })
    }

    const { textStream } = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    })

    // Create a ReadableStream from the textStream
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of textStream) {
          // Format as data stream format: 0:"text"\n
          controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(chunk)}\n`))
        }
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
