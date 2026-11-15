"use client"

import { NimoOrb } from "./nimo-orb"

export function WelcomeScreen() {
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

    </div>
  )
}
