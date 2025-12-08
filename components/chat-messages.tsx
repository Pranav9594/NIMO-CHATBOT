"use client"

import type { UIMessage } from "ai"
import { MessageBubble } from "./message-bubble"
import { TypingIndicator } from "./typing-indicator"

interface ChatMessagesProps {
  messages: UIMessage[]
  isLoading: boolean
  onEditMessage?: (messageId: string, newContent: string) => void
}

export function ChatMessages({ messages, isLoading, onEditMessage }: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} onEdit={onEditMessage} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  )
}
