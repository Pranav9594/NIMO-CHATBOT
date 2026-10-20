"use client"

import type React from "react"
import type { FormEvent } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ChatInputProps {
  input: string
  isLoading: boolean
  onInputChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function ChatInput({ input, isLoading, onInputChange, onSubmit }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        const form = e.currentTarget.form
        if (form) {
          form.requestSubmit()
        }
      }
    }
  }

  return (
    <div className="border-t border-orange-300/10 bg-[#160e08]/80 p-4 backdrop-blur-md">
      <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
        <div className="flex items-end gap-3 rounded-2xl border border-orange-300/20 bg-[#291509]/80 p-2 shadow-[0_0_35px_rgba(214,83,23,0.08)] focus-within:border-orange-400/55 focus-within:ring-2 focus-within:ring-orange-400/10">
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
            rows={1}
            className={cn(
              "max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2 text-sm",
              "placeholder:text-orange-100/35 focus:outline-none",
              isLoading && "opacity-50 cursor-not-allowed",
            )}
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 shrink-0 rounded-xl bg-orange-500 text-orange-950 hover:bg-orange-400"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">{isLoading ? "Sending..." : "Send message"}</span>
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {isLoading ? "Generating response..." : "Press Enter to send, Shift+Enter for new line"}
        </p>
      </form>
    </div>
  )
}
