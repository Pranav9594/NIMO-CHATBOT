## ✨ NIMO – Conversational AI Chatbot

NIMO is a modern, feature-rich AI chatbot built with Next.js, React, Tailwind, and the Vercel AI SDK. It offers fast real-time conversations powered by Groq’s LLaMA 3.3 70B model, wrapped in a smooth and polished dark UI.

🚀 Features
⚡ Core
Real-time responses powered by LLaMA 3.3 70B
Streaming output
Markdown rendering
Syntax highlighting with code copy button

💬 Chat Management

Local chat history
Multiple sessions (up to 20)
Restore previous chats
Clear current chat with confirmation
Delete individual sessions

🪐 User Experience
Animated comet background
Typing indicator
Auto scrolling
Fully responsive
Dark theme

🛠 Tech Stack
Next.js 15 (App Router)
React 19
Tailwind CSS 4
Vercel AI SDK v5
Groq (LLaMA 3.3 70B)
shadcn/ui
react-markdown + remark-gfm
react-syntax-highlighter

📁 Project Structure
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
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

📌 Prerequisites
Node.js 18+
npm / yarn / pnpm
📥 Installation

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
GROQ_API_KEY=your_groq_api_key_here


Start the dev server:
npm run dev


Open: http://localhost:3000

🔑 Environment Variables
Variable	Description	Required
GROQ_API_KEY	Groq API key	✅ Yes
📡 API Reference
POST /api/chat

Handles streaming chat completions.

Example:

{
  "messages": [
    {
      "role": "user",
      "parts": [{ "type": "text", "text": "Hello!" }]
    }
  ]
}

🎯 Customization
🤖 Change the AI Model
model: groq("llama-3.3-70b-versatile")

📝 Edit the System Prompt
const SYSTEM_PROMPT = `
You are NIMO, a friendly and helpful AI assistant...
`

🎨 Theme Customization
:root {
  --primary: 174 60% 45%;
  --background: 220 20% 10%;
}

📄 License

MIT License
