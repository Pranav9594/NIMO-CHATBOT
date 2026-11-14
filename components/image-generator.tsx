"use client"

import { useState } from "react"
import { Sparkles, Download, RefreshCw, Image as ImageIcon } from "lucide-react"

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ imageData: string | null; imageUrl?: string; mimeType: string; caption?: string | null } | null>(null)
  const [error, setError] = useState("")

  const [noCredits, setNoCredits] = useState(false)

  const generate = async () => {
    if (!prompt.trim() || isLoading) return
    setIsLoading(true)
    setError("")
    setNoCredits(false)
    setResult(null)
    try {
      const res = await fetch("/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error ?? "Image generation failed.")
        if (data.noCredits) setNoCredits(true)
      } else if (data.imageUrl) {
        // URL-based response
        setResult({ imageData: null, imageUrl: data.imageUrl, mimeType: data.mimeType, caption: data.caption })
      } else {
        setResult(data)
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); generate() }
  }

  const downloadImage = () => {
    if (!result) return
    const link = document.createElement("a")
    link.href = result.imageData
      ? `data:${result.mimeType};base64,${result.imageData}`
      : (result.imageUrl ?? "")
    link.download = `nimo-image-${Date.now()}.png`
    link.click()
  }

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
            <ImageIcon size={18} strokeWidth={1.5} style={{ color: "var(--accent-teal)" }} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>Image Generator</h1>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: 44 }}>
          Turn your words into stunning visuals using Gemini 2.0 Flash.
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
            placeholder="Describe the image you want to create…"
            rows={3}
            disabled={isLoading}
            aria-label="Image prompt"
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
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          {result && (
            <button
              type="button"
              onClick={() => { setResult(null); setPrompt("") }}
              className="pill"
              aria-label="Start over"
            >
              <RefreshCw size={11} strokeWidth={1.5} />New image
            </button>
          )}
          <button
            type="button"
            onClick={generate}
            disabled={!prompt.trim() || isLoading}
            className="send-btn"
            aria-label={isLoading ? "Generating…" : "Generate image"}
            style={{ width: "auto", borderRadius: 10, padding: "0 18px", fontSize: 13, fontWeight: 600 }}
          >
            {isLoading ? "Generating…" : "Generate ✦"}
          </button>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "40px 0" }}>
          <div style={{ position: "relative", width: 56, height: 56 }}>
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
          </div>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Creating your image…</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          style={{
            background: noCredits ? "rgba(79,209,197,0.06)" : "rgba(239,68,68,0.08)",
            border: `1px solid ${noCredits ? "rgba(79,209,197,0.25)" : "rgba(239,68,68,0.25)"}`,
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          {noCredits ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Credits required</p>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Your OpenRouter account has no credits. Add a small amount (e.g. $5) to start generating images.
              </p>
              <a
                href="https://openrouter.ai/settings/credits"
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
                style={{ width: "fit-content", textDecoration: "none", color: "var(--accent-teal)", borderColor: "rgba(79,209,197,0.4)" }}
              >
                Add credits on OpenRouter ↗
              </a>
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#ef4444" }}>{error}</p>
          )}
        </div>
      )}

      {/* Result */}
      {result && (
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.imageData ? `data:${result.mimeType};base64,${result.imageData}` : result.imageUrl}
            alt={prompt}
            style={{ width: "100%", display: "block" }}
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
            <p style={{ fontSize: 12, color: "var(--text-muted)", flex: 1, marginRight: 12 }}>
              {result.caption ?? prompt}
            </p>
            <button
              type="button"
              onClick={downloadImage}
              className="pill"
              aria-label="Download image"
            >
              <Download size={11} strokeWidth={1.5} />Download
            </button>
          </div>
        </div>
      )}

      {/* Suggestions */}
      {!result && !isLoading && (
        <div>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>Try these prompts →</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "A serene lake at sunrise with mountains reflected in the water, digital art",
              "Futuristic city skyline at dusk, neon lights, cyberpunk style",
              "A cozy café interior with warm lighting, watercolor painting",
              "An astronaut floating in space, surrounded by colorful nebulae",
            ].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setPrompt(s)}
                className="pill"
                style={{ fontSize: 11, height: 28 }}
              >
                {s.length > 50 ? s.slice(0, 50) + "…" : s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
