"use client"

import Image from "next/image"

interface NimoOrbProps {
  size?: number
  className?: string
  hero?: boolean
}

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
      <Image
        src="/nimo-logo.png"
        alt=""
        width={s}
        height={s}
        priority={hero}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          filter: "brightness(1.2) saturate(1.45) contrast(1.08)",
        }}
      />
    </div>
  )
}
