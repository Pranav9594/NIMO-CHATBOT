"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import {
  MoreHorizontal,
  Plus,
  Trash2,
  Pencil,
  Pin,
  Search,
  Image,
  Video,
  X,
} from "lucide-react"
import { NimoOrb } from "./nimo-orb"
import { TopBar } from "./top-bar"
import { ChatMessages } from "./chat-messages"
import { ChatInput, type ChatAttachment } from "./chat-input"
import { WelcomeScreen } from "./welcome-screen"
import { ImageGenerator } from "./image-generator"
import { VideoGenerator } from "./video-generator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
  pinned?: boolean
  archived?: boolean
}

const FEATURE_ITEMS = [
  { icon: Image, label: "Images", key: "images" },
  { icon: Video, label: "Videos", key: "videos" },
] as const

type FeatureKey = typeof FEATURE_ITEMS[number]["key"]

export function ChatInterface() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [attachments, setAttachments] = useState<ChatAttachment[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [openSessionMenu, setOpenSessionMenu] = useState<string | null>(null)
  const [activeFeature, setActiveFeature] = useState<FeatureKey | null>(null)
  const [showClearDialog, setShowClearDialog] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  /* ── Hydration ── */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const ss = localStorage.getItem(SESSIONS_KEY)
        if (ss) { const p = JSON.parse(ss); if (Array.isArray(p)) setChatSessions(p) }
        const ms = localStorage.getItem(STORAGE_KEY)
        if (ms) { const p = JSON.parse(ms); if (Array.isArray(p) && p.length > 0) setMessages(p) }
      } catch {}
      setIsHydrated(true)
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isHydrated && messages.length > 0) localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages, isHydrated])

  useEffect(() => {
    if (isHydrated) localStorage.setItem(SESSIONS_KEY, JSON.stringify(chatSessions))
  }, [chatSessions, isHydrated])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  useEffect(() => {
    if (!openSessionMenu) return
    const close = (e: PointerEvent) => {
      if (e.target instanceof Element && !e.target.closest("[data-session-menu]"))
        setOpenSessionMenu(null)
    }
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenSessionMenu(null) }
    document.addEventListener("pointerdown", close)
    document.addEventListener("keydown", esc)
    return () => {
      document.removeEventListener("pointerdown", close)
      document.removeEventListener("keydown", esc)
    }
  }, [openSessionMenu])

  /* ── Helpers ── */
  const getTitle = (ml: Message[]) => {
    const first = ml.find(m => m.role === "user")
    const text = first?.content || "Chat"
    return text.length > 50 ? text.slice(0, 50) + "…" : text
  }

  const saveCurrentAsSession = useCallback(() => {
    if (messages.length > 0) {
      const ns: ChatSession = {
        id: currentSessionId || Date.now().toString(),
        title: getTitle(messages),
        timestamp: Date.now(),
        messages,
      }
      setChatSessions(prev => [ns, ...prev.filter(s => s.id !== currentSessionId)].slice(0, 20))
    }
  }, [messages, currentSessionId])

  /* ── Messaging ── */
  const sendMessage = useCallback(async (userMessage: string, msgAttachments: ChatAttachment[] = []) => {
    if (!userMessage.trim() || isLoading) return
    const ctx = msgAttachments.map(a => `\n\n[Attached: ${a.name}]\n${a.text}`).join("")
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: `${userMessage.trim()}${ctx}` }
    const list = [...messages, userMsg]
    setMessages(prev => [...prev, userMsg])
    setIsLoading(true)
    const aId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: aId, role: "assistant", content: "" }])
    try {
      abortControllerRef.current = new AbortController()
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: list.map(m => ({ role: m.role, content: m.content })) }),
        signal: abortControllerRef.current.signal,
      })
      if (!res.ok) {
        const body = await res.text().catch(() => "")
        if (res.status === 402) {
          setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: body } : m))
          return
        }
        throw new Error(`HTTP ${res.status}`)
      }
      const reader = res.body?.getReader()
      const dec = new TextDecoder()
      if (!reader) throw new Error("No reader")
      let full = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        for (const line of dec.decode(value, { stream: true }).split("\n")) {
          if (line.startsWith("0:")) {
            try { full += JSON.parse(line.slice(2)); setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: full } : m)) } catch {}
          }
        }
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: "Sorry, I encountered an error. Please try again." } : m))
      }
    } finally {
      setIsLoading(false)
      abortControllerRef.current = null
    }
  }, [messages, isLoading])

  /* ── Session management ── */
  const handleNewChat = () => {
    saveCurrentAsSession()
    setMessages([])
    setCurrentSessionId(null)
    setActiveFeature(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleLoadSession = (session: ChatSession) => {
    if (messages.length > 0 && currentSessionId !== session.id) saveCurrentAsSession()
    setMessages(session.messages)
    setCurrentSessionId(session.id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session.messages))
    setIsMobileSidebarOpen(false)
  }

  const handleDeleteSession = (id: string) => {
    setChatSessions(prev => prev.filter(s => s.id !== id))
    if (currentSessionId === id) { setMessages([]); setCurrentSessionId(null) }
  }

  const handleRenameSession = (session: ChatSession) => {
    const title = window.prompt("Rename chat", session.title)?.trim()
    if (title) setChatSessions(prev => prev.map(s => s.id === session.id ? { ...s, title } : s))
    setOpenSessionMenu(null)
  }

  const handleTogglePin = (session: ChatSession) => {
    setChatSessions(prev => prev.map(s => s.id === session.id ? { ...s, pinned: !s.pinned } : s))
    setOpenSessionMenu(null)
  }

  const handleEditMessage = (messageId: string, newContent: string) => {
    if (isLoading) return
    const idx = messages.findIndex(m => m.id === messageId)
    if (idx === -1) return
    setMessages(messages.slice(0, idx))
    setTimeout(() => sendMessage(newContent), 50)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ((!inputValue.trim() && attachments.length === 0) || isLoading) return
    const msg = inputValue.trim() || "Please analyse the attached document."
    const atts = attachments
    setInputValue("")
    setAttachments([])
    sendMessage(msg, atts)
  }

  /* ── Loading ── */
  if (!isHydrated) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          background: "var(--bg-app)",
        }}
      >
        <div style={{ position: "relative", width: 48, height: 48 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "4px solid rgba(255,255,255,0.1)" }} />
          <div
            className="animate-spin"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "4px solid transparent",
              borderTopColor: "var(--accent-teal)",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>NIMO</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Loading your chat…</span>
        </div>
      </div>
    )
  }

  const sortedSessions = chatSessions
    .filter(s => !s.archived)
    .sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned))

  /* ── Sidebar inner ── */
  const renderSidebarContent = ({ collapsed }: { collapsed: boolean }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 0,
      }}
    >
      {/* Logo row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          marginBottom: 16,
          flexShrink: 0,
        }}
      >
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <NimoOrb size={24} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "var(--accent-teal)" }}>N</span>IMO
            </span>
          </div>
        )}
        <button
          type="button"
          aria-label="Search"
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "background 150ms, color 150ms",
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "rgba(255,255,255,0.05)"
            el.style.color = "var(--text-primary)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "transparent"
            el.style.color = "var(--text-secondary)"
          }}
        >
          <Search size={15} strokeWidth={1.5} />
        </button>
      </div>

      {/* New Chat */}
      <button
        type="button"
        onClick={handleNewChat}
        className="new-chat-btn"
        style={{
          height: 36,
          borderRadius: "var(--radius-btn)",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          gap: 8,
          paddingLeft: collapsed ? 0 : 12,
          paddingRight: collapsed ? 0 : 12,
          marginBottom: 20,
          flexShrink: 0,
        }}
        aria-label="New Chat"
        title="New Chat"
      >
        <Plus size={14} strokeWidth={1.5} style={{ color: "var(--accent-teal)", flexShrink: 0 }} />
        {!collapsed && (
          <span style={{ fontSize: 12.5, fontWeight: 500, color: "var(--text-primary)" }}>New Chat</span>
        )}
      </button>

      {/* FEATURES label */}
      {!collapsed && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 10,
            flexShrink: 0,
          }}
        >
          Features
        </div>
      )}

      {/* Feature nav */}
      <nav aria-label="Features" style={{ flexShrink: 0 }}>
        {FEATURE_ITEMS.map(item => {
          const Icon = item.icon
          const isActive = activeFeature === item.key
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveFeature(isActive ? null : item.key)}
              title={item.label}
              aria-label={item.label}
              className={isActive ? "nav-active-item" : ""}
              style={{
                width: "100%",
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? 0 : 10,
                padding: collapsed ? 0 : `0 ${isActive ? 14 : 10}px`,
                marginBottom: 2,
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 500,
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 150ms, color 150ms",
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(255,255,255,0.05)"
                  el.style.color = "var(--text-primary)"
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "transparent"
                  el.style.color = "var(--text-secondary)"
                }
              }}
            >
              <Icon size={16} strokeWidth={1.5} style={{ flexShrink: 0 }} />
              {!collapsed && item.label}
            </button>
          )
        })}
      </nav>

      {/* Divider */}
      <div
        style={{
          margin: "20px auto",
          width: collapsed ? "60%" : "40%",
          height: 1,
          background: "var(--border-subtle)",
          flexShrink: 0,
        }}
      />

      {/* YOUR CHATS label */}
      {!collapsed && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 10,
            flexShrink: 0,
          }}
        >
          Your Chats
        </div>
      )}

      {/* Chat list */}
      <div
        className="chat-scroll"
        style={{ flex: 1, overflowY: "auto", minHeight: 0 }}
      >
        {sortedSessions.length === 0
          ? (!collapsed && (
            <p style={{ fontSize: 11, color: "var(--text-muted)", padding: "6px 4px" }}>
              No chats yet. Start a conversation!
            </p>
          ))
          : sortedSessions.map(session => (
            <div
              key={session.id}
              data-session-menu
              role="button"
              tabIndex={0}
              onClick={() => handleLoadSession(session)}
              onKeyDown={e => e.key === "Enter" && handleLoadSession(session)}
              className="group"
              style={{
                height: 28,
                display: "flex",
                alignItems: "center",
                gap: collapsed ? 0 : 7,
                padding: collapsed ? 0 : "0 8px",
                justifyContent: collapsed ? "center" : "flex-start",
                marginBottom: 1,
                borderRadius: 8,
                cursor: "pointer",
                position: "relative",
                transition: "background 150ms",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "rgba(255,255,255,0.05)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "transparent"
              }}
            >
              {collapsed ? (
                <span
                  title={session.title}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: session.pinned ? "var(--accent-teal)" : "rgba(255,255,255,0.3)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
              ) : (
                <>
                  {session.pinned
                    ? <Pin size={10} strokeWidth={1.5} style={{ color: "var(--accent-teal)", flexShrink: 0 }} />
                    : <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0, display: "inline-block" }} />
                  }
                  <span
                    style={{
                      flex: 1,
                      fontSize: 11.5,
                      color: "var(--text-muted)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                    }}
                  >
                    {session.title}
                  </span>
                  <button
                    type="button"
                    aria-label={`Options for ${session.title}`}
                    onClick={e => {
                      e.stopPropagation()
                      setOpenSessionMenu(openSessionMenu === session.id ? null : session.id)
                    }}
                    style={{
                      marginLeft: "auto",
                      flexShrink: 0,
                      borderRadius: 4,
                      padding: 2,
                      color: "var(--text-muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      opacity: 0,
                      transition: "opacity 150ms",
                    }}
                    className="group-hover:opacity-100"
                  >
                    <MoreHorizontal size={13} strokeWidth={1.5} />
                  </button>
                  {openSessionMenu === session.id && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 30,
                        zIndex: 50,
                        width: 176,
                        background: "#23262e",
                        border: "1px solid var(--border-strong)",
                        borderRadius: 12,
                        padding: 4,
                        boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleRenameSession(session)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "7px 12px",
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "none",
                          border: "none",
                          borderRadius: 8,
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "none")}
                      >
                        <Pencil size={12} />Rename
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTogglePin(session)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "7px 12px",
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          background: "none",
                          border: "none",
                          borderRadius: 8,
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "none")}
                      >
                        <Pin size={12} />{session.pinned ? "Unpin" : "Pin"}
                      </button>
                      <button
                        type="button"
                        onClick={() => { handleDeleteSession(session.id); setOpenSessionMenu(null) }}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "7px 12px",
                          fontSize: 12,
                          color: "#ef4444",
                          background: "none",
                          border: "none",
                          borderRadius: 8,
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.1)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "none")}
                      >
                        <Trash2 size={12} />Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        }
      </div>


    </div>
  )

  /* ── Render ── */
  return (
    <>
      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(0,0,0,0.6)",
          }}
        />
      )}

      {/* Mobile slide-over sidebar */}
      <aside
        aria-label="Navigation sidebar"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 50,
          width: 260,
          background: "var(--bg-sidebar)",
          padding: "16px 14px",
          borderRadius: "0 24px 24px 0",
          transform: isMobileSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 300ms cubic-bezier(.2,.8,.2,1)",
          display: "flex",
          flexDirection: "column",
        }}
        className="lg:hidden"
      >
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setIsMobileSidebarOpen(false)}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <X size={15} />
        </button>
        {renderSidebarContent({ collapsed: false })}
      </aside>

      {/* App shell */}
      <div
        style={{
          height: "100vh",
          padding: "12px",
          background: "var(--bg-app)",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            overflow: "hidden",
            background: "var(--bg-shell)",
            borderRadius: "var(--radius-shell)",
            border: "2px solid #0c0d11",
            boxShadow: "var(--shadow-shell)",
            gap: 10,
          }}
        >
          {/* Desktop sidebar */}
          <aside
            className="sidebar-animate hidden lg:flex"
            aria-label="Navigation sidebar"
            style={{
              width: isSidebarCollapsed ? 72 : 240,
              minWidth: isSidebarCollapsed ? 72 : 220,
              maxWidth: 260,
              background: "var(--bg-sidebar)",
              borderRadius: "24px 0 0 24px",
              padding: "16px 14px",
              flexShrink: 0,
              overflow: "hidden",
              transition: "width 220ms cubic-bezier(.2,.8,.2,1), min-width 220ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {renderSidebarContent({ collapsed: isSidebarCollapsed })}
          </aside>

          {/* Main panel */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              background: "var(--bg-main)",
              borderRadius: "var(--radius-panel)",
            }}
          >
            {/* Top glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "45%",
                background: "var(--glow-top)",
                pointerEvents: "none",
                zIndex: 0,
                borderRadius: "inherit",
              }}
            />
            {/* Noise */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Top bar */}
            <TopBar
              onToggleSidebar={() => setIsSidebarCollapsed(c => !c)}
              isSidebarCollapsed={isSidebarCollapsed}
              onMobileMenuOpen={() => setIsMobileSidebarOpen(true)}
              onNewChat={handleNewChat}
              onClear={() => setShowClearDialog(true)}
              hasMessages={messages.length > 0}
            />

            {/* Scrollable content */}
            <div
              className="chat-scroll"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
              style={{
                flex: 1,
                overflowY: "auto",
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {activeFeature === "images" ? (
                <div style={{ padding: "0 24px" }}>
                  <ImageGenerator />
                </div>
              ) : activeFeature === "videos" ? (
                <div style={{ padding: "0 24px" }}>
                  <VideoGenerator />
                </div>
              ) : messages.length === 0 ? (
                <WelcomeScreen
                  onSuggestion={text => {
                    setInputValue(text)
                    sendMessage(text)
                  }}
                />
              ) : (
                <div
                  style={{
                    maxWidth: 770,
                    width: "100%",
                    margin: "0 auto",
                    padding: "24px 24px 0",
                  }}
                >
                  <ChatMessages
                    messages={messages}
                    isLoading={isLoading}
                    onEditMessage={handleEditMessage}
                  />
                  <div ref={messagesEndRef} style={{ height: 1 }} />
                </div>
              )}
            </div>

            {/* Composer — hidden in image/video mode */}
            {activeFeature !== "images" && activeFeature !== "videos" && (
            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "16px 24px 24px",
                flexShrink: 0,
              }}
            >
              <ChatInput
                input={inputValue}
                isLoading={isLoading}
                onInputChange={setInputValue}
                onSubmit={onFormSubmit}
                attachments={attachments}
                onAttachmentsChange={setAttachments}
              />
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Clear dialog */}
      <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <DialogContent
          className="sm:max-w-md"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            color: "var(--text-primary)",
          }}
        >
          <DialogHeader>
            <DialogTitle>Clear Chat</DialogTitle>
            <DialogDescription style={{ color: "var(--text-muted)" }}>
              The conversation will be saved to history. Start fresh?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowClearDialog(false)}
              style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => { handleNewChat(); setShowClearDialog(false) }}
              style={{ background: "#ef4444", color: "#fff", border: "none" }}
            >
              Clear
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
