## NIMO – Conversational AI Chatbot

### NIMO is a modern, feature-packed AI chatbot built with Next.js, React, Tailwind, and the Vercel AI SDK. It delivers a smooth conversational experience powered by Groq’s LLaMA 3.3 70B model, complete with real-time streaming, markdown rendering, chat history, and a sleek dark UI.

🚀 Features
Core

Real-time conversations powered by LLaMA 3.3 70B

Fast streaming responses

Markdown support with syntax highlighting

Copy button for code blocks

Chat Management

Chat history stored locally

Create and switch between multiple sessions

Restore any of the last 20 conversations

Clear individual chats with confirmation

Delete specific sessions from history

User Experience

Animated comet background

Typing indicator while the model is generating

Auto-scroll for new messages

Fully responsive on desktop and mobile

Dark theme with a clean space-inspired feel

🛠 Tech Stack

Framework: Next.js 15 (App Router)

Frontend: React 19

Styling: Tailwind CSS 4

AI SDK: Vercel AI SDK v5

AI Provider: Groq (LLaMA 3.3 70B)

UI Components: shadcn/ui

Markdown: react-markdown + remark-gfm

Syntax Highlighting: react-syntax-highlighter

📁 Project Structure
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # AI chat API endpoint
│   ├── globals.css             # Global styles & theme
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── chat-header.tsx
│   ├── chat-input.tsx
│   ├── chat-interface.tsx
│   ├── chat-messages.tsx
│   ├── comet-background.tsx
│   ├── markdown-renderer.tsx
│   ├── message-bubble.tsx
│   ├── typing-indicator.tsx
│   └── welcome-screen.tsx
│
└── README.md

⚙️ Getting Started
Prerequisites

Node.js 18+

npm / yarn / pnpm

Installation

Clone the repository:

git clone https://github.com/yourusername/nimo-chatbot.git
cd nimo-chatbot


Install dependencies:

npm install
# or
yarn install
# or
pnpm install


Add your environment variables:

Create a .env.local file:

GROQ_API_KEY=your_groq_api_key_here


Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open your browser at:
http://localhost:3000

🔑 Environment Variables
Variable	Description	Required
GROQ_API_KEY	Groq API key	Yes
📡 API Reference
POST /api/chat

Handles chat completions and streams the response.

Request Body:

{
  "messages": [
    {
      "role": "user",
      "parts": [
        { "type": "text", "text": "Hello!" }
      ]
    }
  ]
}


The endpoint returns a Server-Sent Events stream with response chunks.

🎯 Customization
Change the AI Model

app/api/chat/route.ts

const result = streamText({
  model: groq("llama-3.3-70b-versatile"), // Change model here
  system: SYSTEM_PROMPT,
  messages: convertedMessages
})

Edit the System Prompt
const SYSTEM_PROMPT = `
You are NIMO, a friendly and helpful AI assistant...
`

Customize the Theme

Modify variables in app/globals.css:

:root {
  --primary: 174 60% 45%;
  --background: 220 20% 10%;
}

📄 License

MIT License. You’re free to use this project for personal and commercial work.
