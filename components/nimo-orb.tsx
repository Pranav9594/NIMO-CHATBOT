"use client"

interface NimoOrbProps {
  size?: number
  className?: string
  hero?: boolean
}

/**
 * NIMO glass-orb — teal/green/blue glossy sphere built from
 * layered CSS radial-gradients + a specular highlight div.
 */
export function NimoOrb({ size = 24, className = "", hero = false }: NimoOrbProps) {
  const s = hero ? 72 : size

  return (
    <div
      className={`${hero ? "orb-float" : ""} ${className}`}
      style={{
        width: s,
        height: s,
        borderRadius: "50%",
        position: "relative",
        flexShrink: 0,
        filter: hero
          ? "drop-shadow(0 0 22px rgba(79,209,197,0.55)) drop-shadow(0 0 8px rgba(79,209,197,0.4))"
          : "drop-shadow(0 0 5px rgba(79,209,197,0.45))",
      }}
      aria-hidden="true"
    >
      {/* Base sphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 32%,
            #8ef0e6 0%,
            #4fd1c5 18%,
            #35b8aa 32%,
            #2a90a8 50%,
            #174a7a 72%,
            #0b1c38 100%
          )`,
        }}
      />
      {/* Dark core */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 65% 72%, rgba(4,8,22,0.62) 0%, transparent 54%)",
        }}
      />
      {/* Top-left specular highlight */}
      <div
        style={{
          position: "absolute",
          top: "7%",
          left: "11%",
          width: "46%",
          height: "38%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at 42% 36%,
            rgba(255,255,255,0.78) 0%,
            rgba(255,255,255,0.14) 55%,
            transparent 100%
          )`,
          transform: "rotate(-18deg)",
        }}
      />
      {/* Rim light bottom-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 76% 76%, rgba(90,209,230,0.26) 0%, transparent 44%)",
        }}
      />
    </div>
  )
}
