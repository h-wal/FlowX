import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FlowX - AI Powered Automation</title>
        <meta
          name="description"
          content="FlowX is the open-source, AI-powered workflow automation tool. Build, scale, and automate with intelligence and style."
        />
      </Head>

      <main className="min-h-screen bg-black text-gray-100 font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-32 px-6">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,87,34,0.05)_25%,transparent_25%,transparent_75%,rgba(255,87,34,0.05)_75%,rgba(255,87,34,0.05))] bg-[length:40px_40px] animate-[pulse_10s_infinite]"></div>

          <div className="relative z-10 max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Automate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">AI</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
              FlowX is a next-gen open-source automation platform powered by AI. Connect apps, move data, and create intelligent workflows at scale.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/docs"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Get Started Free
              </a>
              <a
                href="https://github.com"
                className="px-8 py-4 rounded-2xl border border-orange-500 text-orange-400 font-semibold hover:bg-orange-600 hover:text-white transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Smarter Automation, Powered by AI
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-3xl bg-[#111] border border-orange-500/40 hover:border-orange-500/80 transition-all shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-2xl font-semibold mb-4 text-orange-400">AI Workflow Suggestions</h3>
                <p className="text-gray-300">Leverage AI to suggest optimal workflow structures and speed up automation building.</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#111] border border-orange-500/40 hover:border-orange-500/80 transition-all shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-2xl font-semibold mb-4 text-orange-400">100+ Integrations</h3>
                <p className="text-gray-300">Connect instantly with services like Slack, Notion, AWS, OpenAI, and more.</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#111] border border-orange-500/40 hover:border-orange-500/80 transition-all shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-2xl font-semibold mb-4 text-orange-400">Self-Hosted & Secure</h3>
                <p className="text-gray-300">Deploy anywhere with full control and security — Docker, Kubernetes, or bare metal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 px-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.4),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-6">Start Building AI-Powered Workflows</h2>
            <p className="mb-10 text-lg max-w-2xl mx-auto text-gray-200">
              Join the open-source community transforming automation with artificial intelligence.
            </p>
            <a
              href="/docs"
              className="px-10 py-5 rounded-2xl bg-black text-orange-400 border border-orange-500 font-semibold shadow hover:bg-[#111] hover:text-white hover:border-white transition"
            >
              Launch FlowX
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 text-center text-gray-400 bg-black border-t border-orange-600/40">
          <p>© {new Date().getFullYear()} FlowX. AI-Powered Open Source Automation.</p>
        </footer>
      </main>
    </>
  );
}
