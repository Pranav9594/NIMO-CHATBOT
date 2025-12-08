import { Bot } from "lucide-react"

export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
        <Bot className="h-4 w-4 text-secondary-foreground" />
      </div>

      <div className="flex items-center gap-1 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
        <div className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
        <div className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
        <div className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
      </div>
    </div>
  )
}
