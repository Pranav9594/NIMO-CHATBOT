import { NimoOrb } from "./nimo-orb"

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <div style={{ flexShrink: 0, marginTop: 2 }}>
        <NimoOrb size={24} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="typing-dot"
            style={{
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent-teal)",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
