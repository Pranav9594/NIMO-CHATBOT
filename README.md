# ✨ NIMO – Conversational AI Chatbot
[<img width="1907" height="868" alt="Screenshot 2026-11-15 004959" src="https://github.com/user-attachments/assets/eb5b559c-f15b-415d-96e0-795be1c91855" />
](https://nt6vk9qb-3000.inc1.devtunnels.ms/)

### NIMO is a modern, feature-rich AI chatbot built with Next.js, React, Tailwind, and Gemini. It offers natural conversations for questions, ideas, writing, learning, planning, and everyday tasks in a smooth and polished dark UI.

### 🚀 Features
⚡ Core
- Real-time responses powered by Gemini
- Streaming output
- Markdown rendering
- Syntax highlighting with code copy button
---
### 💬 Chat Management
- Local chat history
- Multiple sessions (up to 20)
- Restore previous chats
- Clear current chat with confirmation
- Delete individual sessions
---
### 🪐 User Experience
- Animated shooting-star background
- Typing indicator
- Voice typing from the chat composer
- Text document attachments (TXT, Markdown, CSV, JSON, HTML, XML, and source files)
- Auto scrolling
- Fully responsive
- Dark theme
---
### 🛠 Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Vercel AI SDK v5
- Groq (LLaMA 3.3 70B)
- shadcn/ui
- react-markdown + remark-gfm
- react-syntax-highlighter
---
Here’s a cleaner, more polished version of your project README section. It keeps everything simple, structured, and easy to follow.

---

# 📦 Project Structure

```
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
│   ├── markdown-renderer.tsx
│   ├── message-bubble.tsx
│   ├── typing-indicator.tsx
│   └── welcome-screen.tsx
│
└── README.md
```

---

# ⚙️ Getting Started

## 📌 Prerequisites

* Node.js 18 or higher
* npm, yarn, or pnpm

---

## 📥 Installation

Clone the repository:

```
git clone https://github.com/Pranav9594/NIMO-CHATBOT.git
cd NIMO-CHATBOT
```

Install dependencies:

```
npm install
```

or

```
yarn install
```

or

```
pnpm install
```

Add your environment variable in `.env.local`:

```
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
# Optional: use a different Gemini model
GEMINI_MODEL=gemini-flash-lite-latest
```

Start the development server:

```
npm run dev
```

Open the app in your browser:
[http://localhost:3000](http://localhost:3000)

---

# 🔑 Environment Variables

| Variable     | Description  | Required |
| ------------ | ------------ | -------- |
| GOOGLE_GENERATIVE_AI_API_KEY | Google Gemini API key | Yes      |
| GEMINI_MODEL | Gemini model used for responses | No       |
| OPENROUTER_API_KEY | OpenRouter key for image generation | No |

Copy `.env.example` to `.env.local` and replace the placeholders locally. Never commit `.env.local` or real credentials.

## Privacy and security

Chat messages and generated session history are stored in the browser's local storage on the current device. They are sent to the configured AI provider only when you submit a chat, image, or video request. Do not enter confidential information unless you have reviewed the provider's terms and retention policies.

Use the clear-chat and delete-session controls to remove locally stored conversations. Clearing browser site data also removes the remaining local history. The app does not currently provide accounts or server-side personal-data storage.

If a real credential was ever committed, rotate it immediately even after removing it, because Git history can retain old values.

---

# 📡 API Reference

### **POST** `/api/chat`

Handles streaming chat messages.

Example request:

```json
{
  "messages": [
    {
      "role": "user",
      "parts": [{ "type": "text", "text": "Hello!" }]
    }
  ]
}
```

---

# 🎯 Customization

## 🤖 Change the AI Model

Set `GEMINI_MODEL` in `.env.local`:

```ts
GEMINI_MODEL=gemini-flash-lite-latest
```

## 📝 Edit the System Prompt

Inside your API route:

```ts
const SYSTEM_PROMPT = `
You are NIMO, a friendly and helpful AI assistant...
`
```

## 🎨 Theme Customization

Modify global theme variables:

```css
:root {
  --primary: 174 60% 45%;
  --background: 220 20% 10%;
}
```

---

# 🤝 Contributing

Pull requests are welcome! Feel free to open an issue or submit a PR.

---

# 📄 License

This project is open-source and available under the MIT License.

---

> Built with ❤️ by [Pranav](https://github.com/Pranav9594)
