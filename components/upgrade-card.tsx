"use client"

import { Crown } from "lucide-react"

export function UpgradeCard() {
  return (
    <div
      className="upgrade-card relative overflow-hidden rounded-[16px] p-3"
      style={{ flexShrink: 0, marginTop: "auto" }}
    >
      {/* Teal glow top-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse at 0% 0%, rgba(79,209,197,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Decorative shard top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 48,
          height: 48,
          opacity: 0.06,
          background: "linear-gradient(135deg,#fff 0%,transparent 70%)",
          clipPath: "polygon(100% 0,0 0,100% 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">
        {/* Crown */}
        <div
          className="mb-2 flex items-center justify-center rounded-full"
          style={{
            width: 36,
            height: 36,
            background: "linear-gradient(135deg,rgba(79,209,197,0.28),rgba(59,130,196,0.28))",
          }}
        >
          <Crown size={16} strokeWidth={1.5} style={{ color: "var(--accent-teal)" }} />
        </div>

        <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 3 }}>
          Upgrade to Pro
        </p>
        <p style={{ fontSize: 9.5, color: "var(--text-muted)", lineHeight: 1.5, marginBottom: 8 }}>
          Get more tools, faster AI, and exclusive features
        </p>

        <div className="flex items-baseline gap-1" style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text-primary)" }}>$49</span>
          <span style={{ fontSize: 9, color: "var(--text-muted)" }}>/month</span>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-[8px] transition"
          style={{
            height: 30,
            background: "#fff",
            color: "#14161c",
            fontSize: 11,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#e9ecf2")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#fff")}
          aria-label="Upgrade to Pro"
        >
          <span>✦</span> Upgrade Now
        </button>
      </div>
    </div>
  )
}
