"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="my-3 overflow-hidden"
      style={{
        background: "#12141a",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 16px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--text-muted)" }}>{language}</span>
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            borderRadius: 6,
            padding: "3px 8px",
            fontSize: 11,
            color: copied ? "var(--accent-teal)" : "var(--text-muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "color 150ms",
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        style={{
          overflowX: "auto",
          padding: "16px",
          margin: 0,
          background: "#12141a",
        }}
      >
        <code style={{ fontFamily: "monospace", fontSize: 13, color: "#e2e8f0" }}>{code}</code>
      </pre>
    </div>
  )
}
