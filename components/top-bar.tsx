"use client"

import { useState } from "react"
import { SlidersHorizontal, ChevronDown, Menu } from "lucide-react"

interface TopBarProps {
  onToggleSidebar: () => void
  isSidebarCollapsed: boolean
  onMobileMenuOpen: () => void
  onNewChat: () => void
  onClear: () => void
  hasMessages: boolean
}

export function TopBar({
  onToggleSidebar,
  isSidebarCollapsed,
  onMobileMenuOpen,
}: TopBarProps) {
  const [activeNav, setActiveNav] = useState<"dashboard" | "settings" | "help">("dashboard")

  return (
    <header
      className="relative z-10 flex flex-shrink-0 items-center justify-between"
      style={{
        height: 64,
        padding: "0 24px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Desktop collapse toggle */}
        <button
          type="button"
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={onToggleSidebar}
          className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full transition"
          style={{ color: "var(--text-secondary)", background: "transparent", border: "none", cursor: "pointer" }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "rgba(255,255,255,0.05)"
            el.style.color = "var(--text-primary)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "transparent"
            el.style.color = "var(--text-secondary)"
          }}
        >
          <Menu size={16} strokeWidth={1.5} />
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMobileMenuOpen}
          className="flex lg:hidden h-8 w-8 items-center justify-center rounded-full transition"
          style={{ color: "var(--text-secondary)", background: "transparent", border: "none", cursor: "pointer" }}
        >
          <Menu size={16} strokeWidth={1.5} />
        </button>

        {/* Model selector pill */}
        <button type="button" className="pill" aria-label="Select model" style={{ backdropFilter: "blur(8px)" }}>
          <SlidersHorizontal size={12} strokeWidth={1.5} />
          <span>NIMO v1</span>
          <ChevronDown size={11} strokeWidth={1.5} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Nav links */}
        <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-4">
          {(["dashboard", "settings", "help"] as const).map(key => {
            const labels = { dashboard: "Dashboard", settings: "Settings", help: "Help & Support" }
            const isActive = activeNav === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveNav(key)}
                className={isActive ? "topbar-active" : ""}
                style={{
                  fontSize: 12.5,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "inherit",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"
                }}
              >
                {labels[key]}
              </button>
            )
          })}
        </nav>

        {/* Avatar */}
        <button
          type="button"
          aria-label="User menu — Pranav, Free plan"
          title="Pranav · Free"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.15)",
            background: "linear-gradient(135deg,#2d9ea8,#3b82c4)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "inherit",
            cursor: "pointer",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          P
        </button>
      </div>
    </header>
  )
}
