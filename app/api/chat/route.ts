import { streamText, convertToModelMessages, type UIMessage } from "ai"
import { createGroq } from "@ai-sdk/groq"

const groq = createGroq({
  apiKey: "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",
})

const SYSTEM_PROMPT = `You are NIMO, a concise and helpful AI coding assistant. You communicate clearly and use Markdown formatting when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Use code blocks with language specification for any code examples
- Keep responses focused and avoid unnecessary verbosity
- When explaining code, be clear and educational
- Format lists, headers, and emphasis using proper Markdown syntax`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: SYSTEM_PROMPT,
    messages: prompt,
  })

  return result.toUIMessageStreamResponse()
}
