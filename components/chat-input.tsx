"use client"

import * as React from "react"
import type { FormEvent } from "react"
import {
  Sparkles,
  Plus,
  Mic,
  MicOff,
  Send,
  Loader2,
  FileText,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

export interface ChatAttachment {
  name: string
  text: string
}

interface ChatInputProps {
  input: string
  isLoading: boolean
  onInputChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  attachments: ChatAttachment[]
  onAttachmentsChange: (attachments: ChatAttachment[]) => void
}

interface SpeechRecognitionEventLike extends Event {
  resultIndex: number
  results: { [i: number]: { [i: number]: { transcript: string } }; length: number }
}
interface SpeechRecognitionLike {
  continuous: boolean; interimResults: boolean; lang: string
  onresult: ((e: SpeechRecognitionEventLike) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start(): void; stop(): void
}
interface SpeechRecognitionCtor { new(): SpeechRecognitionLike }

function getSpeechRecognition(): SpeechRecognitionCtor | null {
  const w = window as Window & {
    SpeechRecognition?: SpeechRecognitionCtor
    webkitSpeechRecognition?: SpeechRecognitionCtor
  }
  return w.SpeechRecognition || w.webkitSpeechRecognition || null
}

const READABLE = new Set([".txt",".md",".markdown",".csv",".json",".html",".xml",".js",".jsx",".ts",".tsx",".css",".py"])

export function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
  attachments,
  onAttachmentsChange,
}: ChatInputProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const recognitionRef = React.useRef<SpeechRecognitionLike | null>(null)
  const inputRef = React.useRef(input)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const [isRecording, setIsRecording] = React.useState(false)
  const [recordingError, setRecordingError] = React.useState("")

  React.useEffect(() => { inputRef.current = input }, [input])
  React.useEffect(() => () => recognitionRef.current?.stop(), [])

  // Auto-grow textarea
  React.useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`
  }, [input])

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    e.target.value = ""
    if (!files.length) return
    const next: ChatAttachment[] = []
    for (const file of files) {
      if (file.size > 1_000_000) { setRecordingError(`${file.name} is too large (max 1 MB).`); continue }
      const ext = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`
      if (!READABLE.has(ext)) { setRecordingError(`${file.name} is not a supported text file.`); continue }
      try { next.push({ name: file.name, text: await file.text() }) } catch { setRecordingError(`Could not read ${file.name}.`) }
    }
    onAttachmentsChange([...attachments, ...next])
  }

  const toggleRecording = () => {
    if (isRecording) { recognitionRef.current?.stop(); setIsRecording(false); return }
    const SR = getSpeechRecognition()
    if (!SR) { setRecordingError("Voice typing is not supported in this browser."); return }
    setRecordingError("")
    const rec = new SR()
    rec.continuous = true; rec.interimResults = false; rec.lang = navigator.language
    rec.onresult = ev => {
      const t = ev.results[ev.resultIndex][0].transcript
      const cur = inputRef.current
      const next = `${cur}${cur && !cur.endsWith(" ") ? " " : ""}${t}`
      inputRef.current = next; onInputChange(next)
    }
    rec.onerror = () => { setRecordingError("Microphone access denied."); setIsRecording(false) }
    rec.onend = () => setIsRecording(false)
    recognitionRef.current = rec; rec.start(); setIsRecording(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if ((input.trim() || attachments.length > 0) && !isLoading) {
        e.currentTarget.form?.requestSubmit()
      }
    }
  }

  const isEmpty = !input.trim() && attachments.length === 0

  return (
    <div className="mx-auto w-full" style={{ maxWidth: 770 }}>
      <form onSubmit={onSubmit}>
        {/* Attachment chips */}
        {attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {attachments.map(a => (
              <div
                key={a.name}
                className="flex items-center gap-1.5 rounded-[8px] px-2 py-1 text-xs"
                style={{
                  background: "rgba(79,209,197,0.1)",
                  border: "1px solid rgba(79,209,197,0.25)",
                  color: "var(--text-secondary)",
                }}
              >
                <FileText size={12} />
                <span className="max-w-[12rem] truncate">{a.name}</span>
                <button
                  type="button"
                  onClick={() => onAttachmentsChange(attachments.filter(i => i.name !== a.name))}
                  aria-label={`Remove ${a.name}`}
                  style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 1 }}
                >
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Composer card */}
        <div
          className="composer-wrap transition"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
            borderRadius: "var(--radius-card)",
            padding: "14px 16px",
            minHeight: 138,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Row 1 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Sparkles
              size={18}
              strokeWidth={1.5}
              className="sparkle-icon"
              style={{ marginTop: 2, flexShrink: 0 }}
              aria-hidden="true"
            />
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => { inputRef.current = e.target.value; onInputChange(e.target.value) }}
              onKeyDown={handleKeyDown}
              placeholder={isLoading ? "Waiting for response…" : "Ask me anything…"}
              rows={1}
              disabled={isLoading}
              aria-label="Message input"
              className={cn(
                "flex-1 resize-none bg-transparent focus:outline-none",
                isLoading && "opacity-50 cursor-not-allowed",
              )}
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--text-primary)",
                minHeight: 44,
                maxHeight: 128,
                width: "100%",
              }}
            />
          </div>

          {/* Row 2: toolbar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".txt,.md,.markdown,.csv,.json,.html,.xml,.js,.jsx,.ts,.tsx,.css,.py"
                onChange={handleFiles}
                className="hidden"
              />
              {/* + attach */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                aria-label="Attach file"
                title="Attach file"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "background 150ms, color 150ms",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(255,255,255,0.1)"
                  el.style.color = "var(--text-primary)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(255,255,255,0.05)"
                  el.style.color = "var(--text-secondary)"
                }}
              >
                <Plus size={16} strokeWidth={1.5} />
              </button>

            </div>

            {/* Right */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <button
                type="button"
                onClick={toggleRecording}
                disabled={isLoading}
                aria-label={isRecording ? "Stop voice input" : "Start voice input"}
                className={cn("pill", isRecording && "active")}
                style={isRecording ? { borderColor: "rgba(239,68,68,0.5)", color: "#ef4444" } : {}}
              >
                {isRecording ? <MicOff size={13} strokeWidth={1.5} /> : <Mic size={13} strokeWidth={1.5} />}
                <span className="hidden sm:inline">{isRecording ? "Stop" : "Voice"}</span>
              </button>

              <button
                type="submit"
                disabled={isEmpty || isLoading}
                aria-label={isLoading ? "Sending…" : "Send message"}
                className="send-btn"
              >
                {isLoading
                  ? <Loader2 size={18} strokeWidth={1.5} className="animate-spin" style={{ color: "#14161c" }} />
                  : <Send size={18} strokeWidth={1.5} style={{ color: "#14161c" }} />
                }
              </button>
            </div>
          </div>
        </div>

        {recordingError && (
          <p className="mt-2 text-center text-xs" style={{ color: "#ef4444" }}>
            {recordingError}
          </p>
        )}
      </form>
    </div>
  )
}
