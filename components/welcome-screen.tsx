import { MessageSquare, Globe, Sparkles, ArrowDownRight } from "lucide-react"

export function WelcomeScreen() {
  return (
    <div className="warm-glow flex h-full flex-col items-center justify-center rounded-[2rem] px-4 py-12 text-center">
      <div className="mb-6 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-orange-200/80">
        <Sparkles className="mr-2 inline h-3.5 w-3.5 text-orange-400" />
        Your intelligent workspace
      </div>

      <h2 className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-orange-50 md:text-7xl">
        Think clearly.
        <br />
        <span className="bg-gradient-to-r from-orange-100 via-orange-400 to-orange-700 bg-clip-text text-transparent">Build boldly.</span>
      </h2>
      <p className="mb-10 mt-6 max-w-md text-sm leading-6 text-orange-100/55">
        NIMO helps you explore ideas, get clear answers, and move forward with confidence.
      </p>

      <div className="grid w-full max-w-2xl gap-3 text-left md:grid-cols-2">
        <div className="orange-card rounded-2xl p-5 transition-all duration-300">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400/15">
              <Globe className="h-4 w-4 text-orange-300" />
            </div>
            <ArrowDownRight className="h-4 w-4 text-orange-300/60" />
          </div>
          <h3 className="mb-1 text-sm font-semibold text-orange-50">Ask anything</h3>
          <p className="text-xs leading-5 text-orange-100/50">Get thoughtful answers, explanations, and ideas for whatever is on your mind.</p>
        </div>

        <div className="orange-card rounded-2xl p-5 transition-all duration-300">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400/15">
              <MessageSquare className="h-4 w-4 text-orange-300" />
            </div>
            <ArrowDownRight className="h-4 w-4 text-orange-300/60" />
          </div>
          <h3 className="mb-1 text-sm font-semibold text-orange-50">Have a conversation</h3>
          <p className="text-xs leading-5 text-orange-100/50">Brainstorm, write, learn, plan, or simply chat with your AI companion.</p>
        </div>
      </div>
    </div>
  )
}
