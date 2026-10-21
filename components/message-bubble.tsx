"use client"

import type React from "react"
import { Pencil, Check, X, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { MarkdownRenderer } from "./markdown-renderer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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

  const handleCancelEdit = () => {
    setEditedContent(content)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      handleCancelEdit()
    } else if (e.key === "Enter" && e.ctrlKey) {
      handleSaveEdit()
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setCopyError(false)
      window.setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy message:", error)
      setCopyError(true)
    }
  }

  return (
    <div className={cn("flex gap-3 group", isUser ? "flex-row-reverse" : "flex-row")}>
      <div className="flex flex-col gap-1 max-w-[80%]">
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-sm",
            isUser ? "bg-primary text-primary-foreground" : "bg-card border border-border text-card-foreground",
          )}
        >
          {isEditing ? (
            <div className="flex flex-col gap-2">
              <Textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[60px] bg-background text-foreground border-border resize-none"
                autoFocus
                placeholder="Edit your message..."
              />
              <div className="flex gap-2 justify-end">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCancelEdit}
                  className="h-7 px-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveEdit} className="h-7 px-2" disabled={!editedContent.trim()}>
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Ctrl+Enter to save, Esc to cancel</p>
            </div>
          ) : isUser ? (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
          ) : (
            <>
              <MarkdownRenderer content={content} />
              {content && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  aria-label={copyError ? "Copy failed" : copied ? "Message copied" : "Copy message"}
                  className="mt-2 h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  {copyError ? (
                    <X className="mr-1 h-3.5 w-3.5 text-destructive" />
                  ) : copied ? (
                    <Check className="mr-1 h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="mr-1 h-3.5 w-3.5" />
                  )}
                  {copyError ? "Copy failed" : copied ? "Copied" : "Copy"}
                </Button>
              )}
            </>
          )}
        </div>

        {isUser && !isEditing && onEdit && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity self-end"
          >
            <Pencil className="h-3 w-3 mr-1" />
            Edit
          </Button>
        )}
      </div>
    </div>
  )
}
