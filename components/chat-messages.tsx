"use client"

import type { UIMessage } from "ai"
import { MessageBubble } from "./message-bubble"
import { TypingIndicator } from "./typing-indicator"

interface ChatMessagesProps {
  messages: UIMessage[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  )
}
