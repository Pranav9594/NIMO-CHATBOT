"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { Bot, FileCode2, FolderKanban, Menu, MessageSquare, PanelLeftClose, PanelLeftOpen, Plus, Settings2, Sparkles } from "lucide-react"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput, type ChatAttachment } from "./chat-input"
import { WelcomeScreen } from "./welcome-screen"

const STORAGE_KEY = "nimo-chat-history"
const SESSIONS_KEY = "nimo-chat-sessions"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatSession {
  id: string
  title: string
  timestamp: number
  messages: Message[]
}

export function ChatInterface() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [attachments, setAttachments] = useState<ChatAttachment[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
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
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

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

  const getSessionTitle = (messageList: Message[]): string => {
    const firstUserMessage = messageList.find((m) => m.role === "user")
    if (!firstUserMessage) return "Chat"
    const text = firstUserMessage.content || ""
    if (!text) return "Chat"
    return text.length > 50 ? text.slice(0, 50) + "..." : text
  }

  const sendMessage = useCallback(
    async (userMessage: string, messageAttachments: ChatAttachment[] = []) => {
      if (!userMessage.trim() || isLoading) return

      const attachmentContext = messageAttachments
        .map((attachment) => `\n\n[Attached document: ${attachment.name}]\n${attachment.text}`)
        .join("")
      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: `${userMessage.trim()}${attachmentContext}`,
      }

      // Build a local message list to avoid relying on possibly-stale state
      const messageList = [...messages, userMsg]
      setMessages((prev) => [...prev, userMsg])
      setIsLoading(true)

      const assistantId = (Date.now() + 1).toString()
      const assistantMsg: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
      }
      setMessages((prev) => [...prev, assistantMsg])

      try {
        abortControllerRef.current = new AbortController()

        await new Promise((resolve) => setTimeout(resolve, 1500))

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: messageList.map((m) => ({ role: m.role, content: m.content })),
          }),
          signal: abortControllerRef.current.signal,
        })

        if (!response.ok) {
          // include response body (if any) for better error visibility
          let bodyText = ""
          try {
            bodyText = await response.text()
          } catch {}
          throw new Error(`HTTP error! status: ${response.status}${bodyText ? ` - ${bodyText}` : ""}`)
        }

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()

        if (!reader) {
          throw new Error("No reader available")
        }

        let fullContent = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const text = JSON.parse(line.slice(2))
                fullContent += text
                setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: fullContent } : m)))
              } catch {
                // Skip invalid JSON
              }
            }
          }
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          // Request was aborted, do nothing
        } else {
          console.error("Error sending message:", error)
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: "Sorry, I encountered an error. Please try again." } : m,
            ),
          )
        }
      } finally {
        setIsLoading(false)
        abortControllerRef.current = null
      }
    },
    [messages, isLoading],
  )

  const handleClearChat = () => {
    if (messages.length > 0) {
      const title = getSessionTitle(messages)
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
      const title = getSessionTitle(messages)
      const newSession: ChatSession = {
        id: currentSessionId || messages[0]?.id || "session",
        title,
        timestamp: messages.length,
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
      const title = getSessionTitle(messages)
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

  const handleEditMessage = (messageId: string, newContent: string) => {
    if (isLoading) return

    const messageIndex = messages.findIndex((m) => m.id === messageId)
    if (messageIndex === -1) return

    const messagesBeforeEdit = messages.slice(0, messageIndex)
    setMessages(messagesBeforeEdit)

    setTimeout(() => {
      sendMessage(newContent)
    }, 50)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ((!inputValue.trim() && attachments.length === 0) || isLoading) return

    const message = inputValue.trim() || "Please analyze the attached document."
    const messageAttachments = attachments
    setInputValue("")
    setAttachments([])
    sendMessage(message, messageAttachments)
  }

  const onInputChange = (value: string) => {
    setInputValue(value)
  }

  if (!isHydrated) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold text-foreground">NIMO</span>
          <span className="text-sm text-muted-foreground">Loading your chat...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-screen w-full max-w-[1600px]">
      <aside
        className={`hidden shrink-0 flex-col border-r border-orange-300/10 bg-[#120b07]/90 py-5 transition-[width] duration-200 md:flex ${
          isSidebarCollapsed ? "w-[72px] px-2" : "w-72 px-3"
        }`}
      >
        <div className={`mb-6 flex items-center ${isSidebarCollapsed ? "justify-center" : "justify-between px-3"}`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-300 via-orange-500 to-orange-800">
            <Bot className="h-5 w-5 text-[#241006]" />
          </div>
          {!isSidebarCollapsed && <span className="text-xl font-semibold tracking-tight text-orange-50">NIMO</span>}
          <button
            type="button"
            onClick={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
            className="rounded-lg p-2 text-orange-100/55 transition hover:bg-orange-400/10 hover:text-orange-50"
            title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        <button
          type="button"
          onClick={handleNewChat}
          className={`mb-3 flex h-11 items-center rounded-xl bg-orange-500 text-sm font-semibold text-orange-950 transition hover:bg-orange-400 ${
            isSidebarCollapsed ? "justify-center px-0" : "gap-3 px-4"
          }`}
          title="New chat"
        >
          <Plus className="h-5 w-5" />
          {!isSidebarCollapsed && "New chat"}
        </button>

        <div className="space-y-1 text-sm text-orange-100/65">
          <div className={`flex items-center rounded-lg py-2.5 text-orange-100/85 ${isSidebarCollapsed ? "justify-center" : "gap-3 px-3"}`} title="Chats">
            <MessageSquare className="h-4 w-4" />
            {!isSidebarCollapsed && "Chats"}
          </div>
          <div className={`flex items-center rounded-lg py-2.5 hover:bg-orange-400/10 ${isSidebarCollapsed ? "justify-center" : "gap-3 px-3"}`} title="Projects">
            <FolderKanban className="h-4 w-4" />
            {!isSidebarCollapsed && "Projects"}
          </div>
          <div className={`flex items-center rounded-lg py-2.5 hover:bg-orange-400/10 ${isSidebarCollapsed ? "justify-center" : "gap-3 px-3"}`} title="Artifacts">
            <FileCode2 className="h-4 w-4" />
            {!isSidebarCollapsed && "Artifacts"}
          </div>
        </div>

        <div className="mt-8 flex min-h-0 flex-1 flex-col">
          {!isSidebarCollapsed && (
            <div className="mb-3 flex items-center justify-between px-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-100/35">
              Recent chats
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          )}
          <div className="chat-scroll space-y-1 overflow-y-auto">
            {isSidebarCollapsed ? (
              <div className="flex flex-col items-center gap-3 pt-2">
                <Menu className="h-4 w-4 text-orange-100/35" />
                {chatSessions.slice(0, 5).map((session) => (
                  <button
                    type="button"
                    key={session.id}
                    onClick={() => handleLoadSession(session)}
                    className="h-2 w-2 rounded-full bg-orange-400/60 transition hover:scale-125 hover:bg-orange-300"
                    title={session.title}
                    aria-label={`Open chat: ${session.title}`}
                  />
                ))}
              </div>
            ) : chatSessions.length === 0 ? (
              <p className="px-3 py-4 text-xs leading-5 text-orange-100/35">Your conversations will appear here.</p>
            ) : (
              chatSessions.map((session) => (
                <button
                  type="button"
                  key={session.id}
                  onClick={() => handleLoadSession(session)}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-orange-100/60 transition hover:bg-orange-400/10 hover:text-orange-50"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/60" />
                  <span className="truncate">{session.title}</span>
                </button>
              ))
            )}
          </div>
        </div>

        <div className={`mt-4 flex items-center border-t border-orange-300/10 pt-4 text-sm text-orange-100/60 ${isSidebarCollapsed ? "justify-center" : "justify-between px-3"}`}>
          {!isSidebarCollapsed && <span>Pranav · Free</span>}
          <Settings2 className="h-4 w-4" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <ChatHeader
          onClear={handleClearChat}
          hasMessages={messages.length > 0}
          chatSessions={chatSessions}
          onLoadSession={handleLoadSession}
          onDeleteSession={handleDeleteSession}
          onNewChat={handleNewChat}
        />

        <div className="chat-scroll flex-1 overflow-y-auto px-4 py-6 sm:px-8 md:px-12">
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <ChatMessages messages={messages} isLoading={isLoading} onEditMessage={handleEditMessage} />
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput
          input={inputValue}
          isLoading={isLoading}
          onInputChange={onInputChange}
          onSubmit={onFormSubmit}
          attachments={attachments}
          onAttachmentsChange={setAttachments}
        />
      </div>
    </div>
  )
}
