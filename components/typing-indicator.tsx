import { Bot } from "lucide-react"

export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
        <Bot className="h-4 w-4 text-secondary-foreground" />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
        <div className="relative h-5 w-5">
          <div className="absolute inset-0 rounded-full border-2 border-muted-foreground/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
        </div>
        <span className="text-sm text-muted-foreground">Generating response...</span>
      </div>
    </div>
  )
}
