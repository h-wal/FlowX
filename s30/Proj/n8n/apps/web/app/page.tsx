import Link from "next/link";
import { TestLoginButton } from "./components/TestLoginButton";

export const metadata = {
  title: "Harvation — Automate with clarity",
  description:
    "Harvation is the open-source, AI-powered workflow automation platform. Build, scale, and automate with intelligence and style.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-zinc-100 antialiased">
      {/* Subtle grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6 max-w-6xl mx-auto">
        <span className="text-xl font-semibold tracking-tight text-zinc-100">
          Harvation
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/auth/signin"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm font-medium px-4 py-2 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 sm:pt-28 sm:pb-40">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-500/90 mb-6">
            Workflow automation, reimagined
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-zinc-100 leading-[1.05] mb-8">
            Automate with{" "}
            <span className="text-amber-400/95">clarity</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Harvation connects your tools and data with AI-powered workflows.
            Build once, run everywhere — open source and under your control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-500 text-zinc-900 font-medium hover:bg-amber-400 transition-colors"
            >
              Start free
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-600 text-zinc-300 font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Open dashboard
            </Link>
            <TestLoginButton />
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            Test account: test@gmail.com / test
          </p>
        </div>
        {/* Soft glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Features — minimal grid */}
      <section className="relative z-10 py-24 px-6 border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest uppercase text-zinc-500 text-center mb-14">
            Why Harvation
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="group">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-5 text-amber-400/90 group-hover:border-amber-500/30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">AI-native</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Suggestions and smart nodes so you ship workflows faster.
              </p>
            </div>
            <div className="group">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-5 text-amber-400/90 group-hover:border-amber-500/30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Integrations</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Connect Slack, Notion, APIs, and more with a single click.
              </p>
            </div>
            <div className="group">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-5 text-amber-400/90 group-hover:border-amber-500/30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Self-host ready</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Run on your infra. Full control, no lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6 border-t border-zinc-800/80">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 mb-4">
            Ready to automate?
          </h2>
          <p className="text-zinc-500 mb-10">
            Join teams building smarter workflows with Harvation.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-500 text-zinc-900 font-medium hover:bg-amber-400 transition-colors"
          >
            Create account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} Harvation</span>
          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <Link href="/auth/signin" className="hover:text-zinc-300 transition-colors">
              Sign in
            </Link>
            <Link href="/auth/signup" className="hover:text-zinc-300 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
