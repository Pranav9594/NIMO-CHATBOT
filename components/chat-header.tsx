"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Trash2, History, X, Plus, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ChatSession {
  id: string
  title: string
  timestamp: number
  messages: any[]
}

interface ChatHeaderProps {
  onClear: () => void
  hasMessages: boolean
  chatSessions: ChatSession[]
  onLoadSession: (session: ChatSession) => void
  onDeleteSession: (id: string) => void
  onNewChat: () => void
}

export function ChatHeader({
  onClear,
  hasMessages,
  chatSessions,
  onLoadSession,
  onDeleteSession,
  onNewChat,
}: ChatHeaderProps) {
  const [showClearDialog, setShowClearDialog] = useState(false)
  const [showHistoryDialog, setShowHistoryDialog] = useState(false)
  const [showDeleteHistoryDialog, setShowDeleteHistoryDialog] = useState(false)
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null)

  const handleClearClick = () => {
    setShowClearDialog(true)
  }

  const handleConfirmClear = () => {
    onClear()
    setShowClearDialog(false)
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleDeleteHistoryClick = (e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation()
    setSessionToDelete(sessionId)
    setShowDeleteHistoryDialog(true)
  }

  const handleConfirmDeleteHistory = () => {
    if (sessionToDelete) {
      onDeleteSession(sessionToDelete)
      setSessionToDelete(null)
    }
    setShowDeleteHistoryDialog(false)
  }

  return (
    <>
      <header className="mx-4 mt-4 flex items-center justify-between rounded-full border border-orange-300/15 bg-[#1d1009]/75 px-4 py-2.5 backdrop-blur-md md:mx-8 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-800 shadow-[0_0_22px_rgba(245,100,24,0.45)]">
            <Bot className="h-4 w-4 text-[#241006]" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-[0.2em] text-orange-50">NIMO</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] text-orange-100/55 md:flex">
          <span className="text-orange-100">Workspace</span>
          <span>Capabilities</span>
          <span>Pricing</span>
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={onNewChat} className="text-muted-foreground hover:text-foreground">
            <Plus className="mr-2 h-4 w-4" />
            New Chat
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHistoryDialog(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <History className="mr-2 h-4 w-4" />
            History
          </Button>

          {hasMessages && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearClick}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          )}
          <Button size="sm" onClick={onNewChat} className="hidden rounded-full bg-orange-500 px-4 text-[11px] font-semibold uppercase tracking-wider text-orange-950 hover:bg-orange-400 sm:flex">
            Start fresh <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </header>

      <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Clear Chat</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this chat? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowClearDialog(false)}>
              No, Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmClear}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showHistoryDialog} onOpenChange={setShowHistoryDialog}>
        <DialogContent className="sm:max-w-lg max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Chat History</DialogTitle>
            <DialogDescription>View and restore your previous conversations</DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[50vh] space-y-2 py-4">
            {chatSessions.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No chat history yet. Start a conversation!</p>
            ) : (
              chatSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer group"
                  onClick={() => {
                    onLoadSession(session)
                    setShowHistoryDialog(false)
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{session.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(session.timestamp)} · {session.messages.length} messages
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                    onClick={(e) => handleDeleteHistoryClick(e, session.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDeleteHistoryDialog} onOpenChange={setShowDeleteHistoryDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete History</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this history? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowDeleteHistoryDialog(false)}>
              No, Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDeleteHistory}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
