"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, Download, RefreshCw, Video as VideoIcon, Clock } from "lucide-react"

type State =
  | { phase: "idle" }
  | { phase: "submitting" }
  | { phase: "polling"; operationName: string; elapsed: number }
  | { phase: "done"; videoUri: string; mimeType: string }
  | { phase: "error"; message: string; requiresBilling?: boolean }

export function VideoGenerator() {
  const [prompt, setPrompt] = useState("")
  const [state, setState] = useState<State>({ phase: "idle" })
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const elapsedRef = useRef(0)

  // Clear polling on unmount
  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current) }, [])

  const startPolling = (operationName: string) => {
    elapsedRef.current = 0
    setState({ phase: "polling", operationName, elapsed: 0 })

    pollRef.current = setInterval(async () => {
      elapsedRef.current += 5
      setState(prev =>
        prev.phase === "polling"
          ? { ...prev, elapsed: elapsedRef.current }
          : prev,
      )

      // Timeout after 5 minutes
      if (elapsedRef.current > 300) {
        clearInterval(pollRef.current!)
        setState({ phase: "error", message: "Video generation timed out. Please try again." })
        return
      }

      try {
        const res = await fetch(`/api/video?op=${encodeURIComponent(operationName)}`)
        const data = await res.json()

        if (data.error) {
          clearInterval(pollRef.current!)
          setState({ phase: "error", message: data.error })
          return
        }

        if (data.done) {
          clearInterval(pollRef.current!)
          if (data.videoUri) {
            setState({ phase: "done", videoUri: data.videoUri, mimeType: data.mimeType ?? "video/mp4" })
          } else {
            setState({ phase: "error", message: "No video returned." })
          }
        }
      } catch {
        // Keep polling on network glitches
      }
    }, 5000)
  }

  const generate = async () => {
    if (!prompt.trim() || state.phase === "submitting" || state.phase === "polling") return
    if (pollRef.current) clearInterval(pollRef.current)
    setState({ phase: "submitting" })

    try {
      const res = await fetch("/api/video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()

      if (!res.ok || data.error) {
        setState({ phase: "error", message: data.error ?? "Failed to start video generation.", requiresBilling: data.requiresBilling })
        return
      }

      startPolling(data.operationName)
    } catch {
      setState({ phase: "error", message: "Network error. Please try again." })
    }
  }

  const reset = () => {
    if (pollRef.current) clearInterval(pollRef.current)
    setState({ phase: "idle" })
    setPrompt("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); generate() }
  }

  const isWorking = state.phase === "submitting" || state.phase === "polling"

  return (
    <div className="mx-auto flex w-full max-w-[770px] flex-col gap-6 py-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(79,209,197,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <VideoIcon size={18} strokeWidth={1.5} style={{ color: "var(--accent-teal)" }} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>Video Generator</h1>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: 44 }}>
          Generate cinematic 8-second videos using Google Veo 3.
        </p>
      </div>

      {/* Prompt card */}
      <div
        className="composer-wrap transition"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-card)",
          borderRadius: "var(--radius-card)",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <Sparkles size={18} strokeWidth={1.5} className="sparkle-icon" style={{ marginTop: 3, flexShrink: 0 }} aria-hidden />
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe the video you want to create… (e.g. 'A drone shot of a coastal village at golden hour')"
            rows={3}
            disabled={isWorking}
            aria-label="Video prompt"
            style={{
              flex: 1,
              resize: "none",
              background: "transparent",
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--text-primary)",
              border: "none",
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
            Generation takes 1–3 minutes · 8 seconds · 16:9 · 1080p
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {(state.phase === "done" || state.phase === "error") && (
              <button type="button" onClick={reset} className="pill" aria-label="Start over">
                <RefreshCw size={11} strokeWidth={1.5} />New video
              </button>
            )}
            <button
              type="button"
              onClick={generate}
              disabled={!prompt.trim() || isWorking}
              className="send-btn"
              aria-label={isWorking ? "Generating…" : "Generate video"}
              style={{ width: "auto", borderRadius: 10, padding: "0 18px", fontSize: 13, fontWeight: 600 }}
            >
              {isWorking ? "Generating…" : "Generate ✦"}
            </button>
          </div>
        </div>
      </div>

      {/* Working state */}
      {isWorking && (
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-card)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ position: "relative", width: 64, height: 64 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid rgba(79,209,197,0.15)" }} />
            <div
              className="animate-spin"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "3px solid transparent",
                borderTopColor: "var(--accent-teal)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VideoIcon size={22} strokeWidth={1.5} style={{ color: "var(--accent-teal)" }} />
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
              {state.phase === "submitting" ? "Submitting to Veo…" : "Generating your video…"}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {state.phase === "polling"
                ? `This usually takes 1–3 minutes. Elapsed: ${state.elapsed}s`
                : "Starting the generation job…"}
            </p>
          </div>

          {state.phase === "polling" && (
            <div
              style={{
                width: "100%",
                maxWidth: 300,
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, var(--accent-teal), var(--accent-cyan))",
                  borderRadius: 999,
                  width: `${Math.min((state.elapsed / 180) * 100, 95)}%`,
                  transition: "width 5s linear",
                }}
              />
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Clock size={12} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
              Veo generates high-quality videos — good things take time
            </span>
          </div>
        </div>
      )}

      {/* Error */}
      {state.phase === "error" && (
        <div
          style={{
            background: state.requiresBilling ? "rgba(79,209,197,0.06)" : "rgba(239,68,68,0.08)",
            border: `1px solid ${state.requiresBilling ? "rgba(79,209,197,0.25)" : "rgba(239,68,68,0.25)"}`,
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          {state.requiresBilling ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Veo access required</p>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {state.message}
              </p>
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
                style={{ width: "fit-content", textDecoration: "none", color: "var(--accent-teal)", borderColor: "rgba(79,209,197,0.4)" }}
              >
                Open Google AI Studio ↗
              </a>
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#ef4444" }}>{state.message}</p>
          )}
        </div>
      )}

      {/* Result */}
      {state.phase === "done" && (
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
          }}
        >
          <video
            src={state.videoUri}
            controls
            autoPlay
            loop
            style={{ width: "100%", display: "block", background: "#000" }}
          />
          <div
            style={{
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <p style={{ fontSize: 12, color: "var(--text-muted)", flex: 1, marginRight: 12 }}>{prompt}</p>
            <a
              href={state.videoUri}
              download="nimo-video.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="pill"
              aria-label="Download video"
              style={{ textDecoration: "none" }}
            >
              <Download size={11} strokeWidth={1.5} />Download
            </a>
          </div>
        </div>
      )}

      {/* Suggestions */}
      {state.phase === "idle" && (
        <div>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>Try these prompts →</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "A drone shot of a coastal village at golden hour",
              "Timelapse of storm clouds rolling over mountain peaks",
              "An underwater scene with colorful coral and tropical fish",
              "A busy Tokyo street at night with neon reflections on wet pavement",
            ].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setPrompt(s)}
                className="pill"
                style={{ fontSize: 11, height: 28 }}
              >
                {s.length > 55 ? s.slice(0, 55) + "…" : s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
