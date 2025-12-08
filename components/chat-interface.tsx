"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { WelcomeScreen } from "./welcome-screen"

const STORAGE_KEY = "nimo-chat-history"
const SESSIONS_KEY = "nimo-chat-sessions"

interface ChatSession {
  id: string
  title: string
  timestamp: number
  messages: any[]
}

export function ChatInterface() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    const savedSessions = localStorage.getItem(SESSIONS_KEY)
    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions)
        if (Array.isArray(parsed)) {
          setChatSessions(parsed)
        }
      } catch (e) {
        console.error("Failed to parse saved sessions:", e)
      }
    }

    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
        }
      } catch (e) {
        console.error("Failed to parse saved messages:", e)
      }
    }
    setIsHydrated(true)
  }, [setMessages])

  useEffect(() => {
    if (isHydrated && messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(SESSIONS_KEY, JSON.stringify(chatSessions))
    }
  }, [chatSessions, isHydrated])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  const handleClearChat = () => {
    if (messages.length > 0) {
      const firstUserMessage = messages.find((m) => m.role === "user")
      const title = firstUserMessage
        ? (firstUserMessage.parts?.[0]?.type === "text" ? firstUserMessage.parts[0].text.slice(0, 50) : "Chat") +
          (firstUserMessage.parts?.[0]?.text?.length > 50 ? "..." : "")
        : "Chat"

      const newSession: ChatSession = {
        id: Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }

      setChatSessions((prev) => [newSession, ...prev].slice(0, 20))
    }

    setMessages([])
    setCurrentSessionId(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleLoadSession = (session: ChatSession) => {
    if (messages.length > 0 && currentSessionId !== session.id) {
      const firstUserMessage = messages.find((m) => m.role === "user")
      const title = firstUserMessage
        ? (firstUserMessage.parts?.[0]?.type === "text" ? firstUserMessage.parts[0].text.slice(0, 50) : "Chat") +
          (firstUserMessage.parts?.[0]?.text?.length > 50 ? "..." : "")
        : "Chat"

      const newSession: ChatSession = {
        id: currentSessionId || Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }

      setChatSessions((prev) => {
        const filtered = prev.filter((s) => s.id !== currentSessionId)
        return [newSession, ...filtered].slice(0, 20)
      })
    }

    setMessages(session.messages)
    setCurrentSessionId(session.id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session.messages))
  }

  const handleDeleteSession = (id: string) => {
    setChatSessions((prev) => prev.filter((s) => s.id !== id))
  }

  const handleNewChat = () => {
    if (messages.length > 0) {
      const firstUserMessage = messages.find((m) => m.role === "user")
      const title = firstUserMessage
        ? (firstUserMessage.parts?.[0]?.type === "text" ? firstUserMessage.parts[0].text.slice(0, 50) : "Chat") +
          (firstUserMessage.parts?.[0]?.text?.length > 50 ? "..." : "")
        : "Chat"

      const newSession: ChatSession = {
        id: currentSessionId || Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }

      setChatSessions((prev) => {
        const filtered = prev.filter((s) => s.id !== currentSessionId)
        return [newSession, ...filtered].slice(0, 20)
      })
    }

    setMessages([])
    setCurrentSessionId(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    sendMessage({ text: inputValue.trim() })
    setInputValue("")
  }

  const onInputChange = (value: string) => {
    setInputValue(value)
  }

  if (!isHydrated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex gap-1">
          <div className="typing-dot h-2 w-2 rounded-full bg-primary" />
          <div className="typing-dot h-2 w-2 rounded-full bg-primary" />
          <div className="typing-dot h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col">
      <ChatHeader
        onClear={handleClearChat}
        hasMessages={messages.length > 0}
        chatSessions={chatSessions}
        onLoadSession={handleLoadSession}
        onDeleteSession={handleDeleteSession}
        onNewChat={handleNewChat}
      />

      <div className="chat-scroll flex-1 overflow-y-auto px-4 py-6 md:px-6">
        {messages.length === 0 ? <WelcomeScreen /> : <ChatMessages messages={messages} isLoading={isLoading} />}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput input={inputValue} isLoading={isLoading} onInputChange={onInputChange} onSubmit={onFormSubmit} />
    </div>
  )
}
