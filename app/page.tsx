import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <main style={{ background: "var(--bg-app)", minHeight: "100vh", width: "100%" }}>
      <ChatInterface />
    </main>
  )
}
