# NIMO - Conversational AI Chatbot

A modern, feature-rich AI chatbot built with Next.js, React, and the Vercel AI SDK. NIMO provides a sleek conversational interface powered by Groq's LLaMA 3.3 70B model.

![NIMO Chatbot](https://via.placeholder.com/800x400?text=NIMO+Chatbot)

## Features

### Core Features
- **Real-time AI Conversations**: Powered by Groq's LLaMA 3.3 70B model for fast, intelligent responses
- **Streaming Responses**: See AI responses as they're generated in real-time
- **Markdown Support**: Full markdown rendering including code blocks with syntax highlighting
- **Code Copy Button**: One-click copy for code snippets

### Chat Management
- **Chat History**: Automatically saves conversations to local storage
- **Multiple Sessions**: Manage up to 20 saved chat sessions
- **New Chat**: Start fresh conversations while preserving history
- **Clear Chat**: Delete current chat with confirmation dialog
- **Restore Sessions**: Load previous conversations from history
- **Delete History**: Remove individual sessions with confirmation

### User Experience
- **Animated Background**: Beautiful comet/shooting star animation
- **Typing Indicator**: Visual feedback while AI is generating responses
- **Auto-scroll**: Automatically scrolls to latest messages
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Theme**: Easy on the eyes with a space-themed dark interface

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **AI SDK**: Vercel AI SDK v5
- **AI Provider**: Groq (LLaMA 3.3 70B)
- **Components**: shadcn/ui
- **Markdown**: react-markdown with remark-gfm
- **Syntax Highlighting**: react-syntax-highlighter

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── chat-header.tsx           # Header with controls
│   ├── chat-input.tsx            # Message input
│   ├── chat-interface.tsx        # Main chat container
│   ├── chat-messages.tsx         # Messages list
│   ├── comet-background.tsx      # Animated background
│   ├── markdown-renderer.tsx     # Markdown display
│   ├── message-bubble.tsx        # Individual message
│   ├── typing-indicator.tsx      # Loading indicator
│   └── welcome-screen.tsx        # Initial screen
└── README.md
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/nimo-chatbot.git
cd nimo-chatbot
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
# Create a .env.local file
GROQ_API_KEY=your_groq_api_key_here
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key | Yes |

## API Reference

### POST /api/chat

Handles chat completions with the AI model.

**Request Body:**
\`\`\`json
{
  "messages": [
    {
      "role": "user",
      "parts": [{ "type": "text", "text": "Hello!" }]
    }
  ]
}
\`\`\`

**Response:** Server-Sent Events stream with AI response chunks.

## Customization

### Changing the AI Model

Edit `app/api/chat/route.ts`:
\`\`\`typescript
const result = streamText({
  model: groq("llama-3.3-70b-versatile"), // Change model here
  system: SYSTEM_PROMPT,
  messages: convertedMessages,
})
\`\`\`

### Modifying the System Prompt

The system prompt is defined in `app/api/chat/route.ts`:
\`\`\`typescript
const SYSTEM_PROMPT = `You are NIMO, a friendly and helpful AI assistant...`
\`\`\`

### Customizing the Theme

Edit the CSS variables in `app/globals.css`:
\`\`\`css
:root {
  --primary: 174 60% 45%;
  --background: 220 20% 10%;
  /* ... */
}
\`\`\`

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Built with care by [Your Name]

---

**NIMO** - Your friendly AI companion
