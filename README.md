# ✨ NIMO – Conversational AI Chatbot
<img width="1445" height="831" alt="<img width="1917" height="840" alt="image" src="https://github.com/user-attachments/assets/53f5c9b8-b301-4035-af2d-c45e4daea175" />
" />

### NIMO is a modern, feature-rich AI chatbot built with Next.js, React, Tailwind, and Gemini. It offers natural conversations for questions, ideas, writing, learning, planning, and everyday tasks in a smooth and polished dark UI.

### 🚀 Features
⚡ Core
- Real-time responses powered by LLaMA 3.3 70B
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
GEMINI_MODEL=gemini-3.8-flash
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
| GEMINI_MODEL | Gemini model used for faster responses | No       |

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

In `route.ts`:

```ts
model: groq("llama-3.3-70b-versatile")
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
