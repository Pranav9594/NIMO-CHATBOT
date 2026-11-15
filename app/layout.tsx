import type React from "react"
import type { Metadata, Viewport } from "next"
import { Mulish } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "NIMO - AI Assistant",
  description: "A clean, interactive AI-powered chatbot",
  generator: "v0.app",
  icons: {
    icon: "/nimo-logo.png",
    apple: "/nimo-logo.png",
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
      <body className={`antialiased ${mulish.className}`} style={{ fontFamily: "'Mulish','Inter',system-ui,sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
