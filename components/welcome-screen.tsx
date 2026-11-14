"use client"

import { Image, Video, Terminal, ArrowUpRight } from "lucide-react"
import { NimoOrb } from "./nimo-orb"

interface WelcomeScreenProps {
  onSuggestion?: (text: string) => void
}

const CARDS = [
  {
    icon: Image,
    title: "Image Generator",
    description: "Turn ideas into stunning visuals in seconds.",
    prompt: "Generate an image of ",
    stagger: "card-stagger-1",
  },
  {
    icon: Video,
    title: "Video Generator",
    description: "Create cinematic videos from simple prompts.",
    prompt: "Create a video concept for ",
    stagger: "card-stagger-2",
  },
  {
    icon: Terminal,
    title: "Dev Assistant",
    description: "Accelerate development with intelligent assistance.",
    prompt: "Help me write code for ",
    stagger: "card-stagger-3",
  },
]

export function WelcomeScreen({ onSuggestion }: WelcomeScreenProps) {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center px-4 py-10 text-center"
      style={{ minHeight: "calc(100vh - 220px)" }}
    >
      {/* Hero */}
      <div className="flex flex-col items-center">
        <div className="fade-up fade-up-1">
          <NimoOrb hero />
        </div>

        <p
          className="fade-up fade-up-2"
          style={{
            marginTop: 18,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(242,244,248,0.72)",
          }}
        >
          Welcome Back
        </p>

        <h2
          className="fade-up fade-up-3"
          style={{
            marginTop: 7,
            fontSize: "clamp(22px,4vw,30px)",
            fontWeight: 500,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            maxWidth: 440,
          }}
        >
          Bring your ideas to life today
        </h2>
      </div>

      {/* Suggestion cards */}
      <div
        className="mt-8 w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 18,
          maxWidth: 770,
        }}
      >
        {CARDS.map(card => {
          const Icon = card.icon
          return (
            <button
              key={card.title}
              type="button"
              onClick={() => onSuggestion?.(card.prompt)}
              className={`suggestion-card ${card.stagger} rounded-[16px] p-4 text-left`}
              aria-label={`Start: ${card.title}`}
              style={{ cursor: "pointer", minHeight: 130, background: "none" }}
            >
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} style={{ color: "var(--text-secondary)" }} />
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="arrow-icon"
                  style={{ color: "var(--text-secondary)", flexShrink: 0 }}
                />
              </div>

              {/* Bottom text */}
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
