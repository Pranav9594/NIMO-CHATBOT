import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NIMO - AI Assistant",
  description: "A clean, interactive AI-powered chatbot",
  generator: "v0.app",
  icons: {
    icon: "/nimo-favicon.png",
    apple: "/nimo-favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#14161c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Mulish','Inter',system-ui,sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
