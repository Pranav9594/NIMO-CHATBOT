"use client"

import type { UIMessage } from "ai"
import { Bot, User, Pencil, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { MarkdownRenderer } from "./markdown-renderer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface MessageBubbleProps {
  message: UIMessage
  onEdit?: (messageId: string, newContent: string) => void
}

function getMessageContent(message: UIMessage): string {
  if (message.parts && message.parts.length > 0) {
    return message.parts
      .filter((part) => part.type === "text")
      .map((part) => (part as { type: "text"; text: string }).text)
      .join("")
  }
  return (message as any).content || ""
}

export function MessageBubble({ message, onEdit }: MessageBubbleProps) {
  const isUser = message.role === "user"
  const content = getMessageContent(message)
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(content)

  const handleSaveEdit = () => {
    if (editedContent.trim() && onEdit) {
      onEdit(message.id, editedContent.trim())
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditedContent(content)
    setIsEditing(false)
  }

  return (
    <div className={cn("flex gap-3 group", isUser ? "flex-row-reverse" : "flex-row")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-primary" : "bg-secondary",
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Bot className="h-4 w-4 text-secondary-foreground" />
        )}
      </div>

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
                className="min-h-[60px] bg-background text-foreground border-border resize-none"
                autoFocus
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
                <Button size="sm" onClick={handleSaveEdit} className="h-7 px-2">
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          ) : isUser ? (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
          ) : (
            <MarkdownRenderer content={content} />
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
