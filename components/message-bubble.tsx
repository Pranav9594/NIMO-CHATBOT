"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Copy, Check, X, Pencil, RefreshCw } from "lucide-react"
import { MarkdownRenderer } from "./markdown-renderer"
import { NimoOrb } from "./nimo-orb"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface MessageBubbleProps {
  message: Message
  onEdit?: (messageId: string, newContent: string) => void
}

export function MessageBubble({ message, onEdit }: MessageBubbleProps) {
  const isUser = message.role === "user"
  const content = message.content || ""
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(content)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEditedContent(content))
    return () => window.cancelAnimationFrame(frame)
  }, [content])

  const handleSaveEdit = () => {
    const trimmed = editedContent.trim()
    if (trimmed && trimmed !== content && onEdit) {
      onEdit(message.id, trimmed)
      setIsEditing(false)
    } else if (trimmed === content) {
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => { setEditedContent(content); setIsEditing(false) }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") handleCancelEdit()
    else if (e.key === "Enter" && e.ctrlKey) handleSaveEdit()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true); setCopyError(false)
      window.setTimeout(() => setCopied(false), 2000)
    } catch { setCopyError(true) }
  }

  /* ── User bubble ── */
  if (isUser) {
    return (
      <div className="group flex flex-col items-end gap-1">
        <div
          className="max-w-[75%] px-4 py-3"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "16px 16px 4px 16px",
          }}
        >
          {isEditing ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Textarea
                value={editedContent}
                onChange={e => setEditedContent(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[60px] resize-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
                autoFocus
              />
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCancelEdit}
                  style={{ color: "var(--text-muted)" }}
                >
                  <X size={12} className="mr-1" />Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSaveEdit}
                  disabled={!editedContent.trim()}
                  style={{ background: "var(--accent-teal)", color: "#14161c" }}
                >
                  <Check size={12} className="mr-1" />Save
                </Button>
              </div>
              <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "right" }}>
                Ctrl+Enter · Esc
              </p>
            </div>
          ) : (
            <p style={{ fontSize: 14, lineHeight: 1.65, whiteSpace: "pre-wrap", color: "var(--text-primary)", margin: 0 }}>
              {content}
            </p>
          )}
        </div>
        {!isEditing && onEdit && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            aria-label="Edit message"
            className="flex items-center gap-1 rounded px-2 py-0.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
          >
            <Pencil size={11} />Edit
          </button>
        )}
      </div>
    )
  }

  /* ── AI message ── */
  return (
    <div className="group flex items-start gap-3">
      <div style={{ flexShrink: 0, marginTop: 3 }}>
        <NimoOrb size={24} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-primary)" }}>
          <MarkdownRenderer content={content} />
        </div>

        {content && (
          <div
            className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ marginTop: 8 }}
          >
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copyError ? "Copy failed" : copied ? "Copied" : "Copy message"}
              className="flex items-center gap-1 rounded-[6px] px-2 py-1 text-xs transition"
              style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "rgba(255,255,255,0.05)"
                el.style.color = "var(--text-primary)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "none"
                el.style.color = "var(--text-muted)"
              }}
            >
              {copyError
                ? <X size={12} style={{ color: "#ef4444" }} />
                : copied
                  ? <Check size={12} style={{ color: "var(--accent-teal)" }} />
                  : <Copy size={12} />
              }
              {copyError ? "Failed" : copied ? "Copied" : "Copy"}
            </button>

            <button
              type="button"
              aria-label="Regenerate response"
              className="flex items-center gap-1 rounded-[6px] px-2 py-1 text-xs transition"
              style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "rgba(255,255,255,0.05)"
                el.style.color = "var(--text-primary)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "none"
                el.style.color = "var(--text-muted)"
              }}
            >
              <RefreshCw size={12} />Regenerate
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
