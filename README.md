NIMO – Conversational AI Chatbot

A modern conversational AI chatbot built with Next.js, React, and the Vercel AI SDK. NIMO offers a smooth, fast, and interactive chatting experience powered by Groq’s LLaMA 3.3 70B model.

Features
Core

Real-time AI conversations using Groq’s LLaMA 3.3 70B

Streaming responses that appear as they're generated

Full markdown rendering with syntax highlighting for code

One-click copy button for code snippets

Chat Management

Automatic chat history stored in local storage

Up to 20 preserved chat sessions

Start new chats anytime

Clear current chat with a confirmation prompt

Restore previous chat sessions

Delete individual sessions with confirmation

User Experience

Comet-style animated background

Typing indicator while AI generates responses

Auto-scroll to latest messages

Responsive layout for desktop and mobile

Dark theme with a space-inspired look

Tech Stack

Framework: Next.js 15 (App Router)

Frontend: React 19

Styling: Tailwind CSS 4

SDK: Vercel AI SDK v5

AI Provider: Groq (LLaMA 3.3 70B)

UI Components: shadcn/ui

Markdown: react-markdown + remark-gfm

Code Highlighting: react-syntax-highlighter

Project Structure
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts            # AI chat API endpoint
│   ├── globals.css                 # Global styles & theme
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── chat-header.tsx             # Header and controls
│   ├── chat-input.tsx              # Input box
│   ├── chat-interface.tsx          # Chat container
│   ├── chat-messages.tsx           # Message list
│   ├── comet-background.tsx        # Animated background
│   ├── markdown-renderer.tsx       # Markdown display
│   ├── message-bubble.tsx          # Individual message bubble
│   ├── typing-indicator.tsx        # Loading indicator
│   └── welcome-screen.tsx          # Initial landing screen
└── README.md

Getting Started
Prerequisites

Node.js 18 or later

npm, yarn, or pnpm

Installation

Clone the repo:

git clone https://github.com/yourusername/nimo-chatbot.git
cd nimo-chatbot


Install dependencies:

npm install
# or
yarn install
# or
pnpm install


Add your environment variables
Create .env.local:

GROQ_API_KEY=your_groq_api_key_here


Start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000 in your browser.

Environment Variables
Variable	Description	Required
GROQ_API_KEY	Groq API key	Yes
API Reference
POST /api/chat

Handles AI chat completions.

Request Body

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


Response
A Server-Sent Events stream containing chunks of the AI’s response.

Customization
Change the AI Model

In app/api/chat/route.ts:

const result = streamText({
  model: groq("llama-3.3-70b-versatile"), // Update model here
  system: SYSTEM_PROMPT,
  messages: convertedMessages,
})

Modify the System Prompt

Located in route.ts:

const SYSTEM_PROMPT = `
You are NIMO, a friendly and helpful AI assistant...
`

Customize the Theme

Edit CSS variables in app/globals.css:

:root {
  --primary: 174 60% 45%;
  --background: 220 20% 10%;
}

License

MIT License. Free for personal and commercial use.
