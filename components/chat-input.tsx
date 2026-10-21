"use client"

import * as React from "react"
import type { ChangeEvent, FormEvent } from "react"
import { FileText, Loader2, Mic, MicOff, Paperclip, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  results: {
    [index: number]: {
      [index: number]: { transcript: string }
    }
    length: number
  }
}

interface SpeechRecognitionLike {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionLike
}

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  const browserWindow = window as Window & {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }
  return browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition || null
}

const readableFileTypes = new Set([
  ".txt",
  ".md",
  ".markdown",
  ".csv",
  ".json",
  ".html",
  ".xml",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".py",
])

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
  const [isRecording, setIsRecording] = React.useState(false)
  const [recordingError, setRecordingError] = React.useState("")

  React.useEffect(() => {
    inputRef.current = input
  }, [input])

  React.useEffect(() => {
    return () => recognitionRef.current?.stop()
  }, [])

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    event.target.value = ""
    if (files.length === 0) return

    const nextAttachments: ChatAttachment[] = []
    for (const file of files) {
      if (file.size > 1_000_000) {
        setRecordingError(`${file.name} is too large. Documents must be smaller than 1 MB.`)
        continue
      }
      const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`
      if (!readableFileTypes.has(extension)) {
        setRecordingError(`${file.name} is not a readable text document. Use TXT, MD, CSV, JSON, HTML, or source files.`)
        continue
      }

      try {
        nextAttachments.push({ name: file.name, text: await file.text() })
      } catch (error) {
        console.error(`Could not read ${file.name}:`, error)
        setRecordingError(`Could not read ${file.name}.`)
      }
    }
    onAttachmentsChange([...attachments, ...nextAttachments])
  }

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop()
      setIsRecording(false)
      return
    }

    const SpeechRecognition = getSpeechRecognition()
    if (!SpeechRecognition) {
      setRecordingError("Voice typing is not supported in this browser. Try Chrome or Edge.")
      return
    }

    setRecordingError("")
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = navigator.language
    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
      const currentInput = inputRef.current
      const nextInput = `${currentInput}${currentInput && !currentInput.endsWith(" ") ? " " : ""}${transcript}`
      inputRef.current = nextInput
      onInputChange(nextInput)
    }
    recognition.onerror = () => {
      setRecordingError("Microphone access was denied or voice typing failed.")
      setIsRecording(false)
    }
    recognition.onend = () => setIsRecording(false)
    recognitionRef.current = recognition
    recognition.start()
    setIsRecording(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if ((input.trim() || attachments.length > 0) && !isLoading) {
        const form = e.currentTarget.form
        if (form) {
          form.requestSubmit()
        }
      }
    }
  }

  return (
    <div className="border-t border-orange-300/10 bg-[#160e08]/80 p-4 backdrop-blur-md">
      <form onSubmit={onSubmit} className="mx-auto w-full max-w-5xl">
        <div className="flex items-end gap-2 rounded-2xl border border-orange-300/20 bg-[#291509]/80 p-2 shadow-[0_0_35px_rgba(214,83,23,0.08)] focus-within:border-orange-400/55 focus-within:ring-2 focus-within:ring-orange-400/10">
          <input ref={fileInputRef} type="file" multiple accept=".txt,.md,.markdown,.csv,.json,.html,.xml,.js,.jsx,.ts,.tsx,.css,.py" onChange={handleFiles} className="hidden" />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="h-10 w-10 shrink-0 rounded-xl text-orange-200/70 hover:bg-orange-500/15 hover:text-orange-200"
            title="Attach document"
          >
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Attach document</span>
          </Button>
          <textarea
            value={input}
            onChange={(e) => {
              inputRef.current = e.target.value
              onInputChange(e.target.value)
            }}
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
            type="button"
            size="icon"
            variant="ghost"
            onClick={toggleRecording}
            disabled={isLoading}
            className={cn("h-10 w-10 shrink-0 rounded-xl text-orange-200/70 hover:bg-orange-500/15 hover:text-orange-200", isRecording && "bg-red-500/20 text-red-300")}
            title={isRecording ? "Stop voice typing" : "Start voice typing"}
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            <span className="sr-only">{isRecording ? "Stop voice typing" : "Start voice typing"}</span>
          </Button>
          <Button
            type="submit"
            size="icon"
            disabled={(!input.trim() && attachments.length === 0) || isLoading}
            className="h-10 w-10 shrink-0 rounded-xl bg-orange-500 text-orange-950 hover:bg-orange-400"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">{isLoading ? "Sending..." : "Send message"}</span>
          </Button>
        </div>
        {attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {attachments.map((attachment) => (
              <div key={attachment.name} className="flex items-center gap-1.5 rounded-lg border border-orange-300/20 bg-orange-500/10 px-2 py-1 text-xs text-orange-100/80">
                <FileText className="h-3.5 w-3.5" />
                <span className="max-w-48 truncate">{attachment.name}</span>
                <button type="button" onClick={() => onAttachmentsChange(attachments.filter((item) => item.name !== attachment.name))} className="text-orange-200/60 hover:text-orange-100" aria-label={`Remove ${attachment.name}`}>
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
        {recordingError && <p className="mt-2 text-center text-xs text-red-300">{recordingError}</p>}
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {isLoading ? "Generating response..." : "Press Enter to send, Shift+Enter for new line"}
        </p>
      </form>
    </div>
  )
}
