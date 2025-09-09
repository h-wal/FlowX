import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FlowX - Open Source Automation</title>
        <meta
          name="description"
          content="FlowX is an open-source workflow automation tool, a self-hosted alternative to n8n. Build, scale, and automate without limits."
        />
      </Head>

      <main className="min-h-screen bg-black text-gray-100">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-[linear-gradient(to_bottom_right,#1a1a1a,#000)]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,85,0,0.1)_25%,transparent_25%,transparent_75%,rgba(255,85,0,0.1)_75%,rgba(255,85,0,0.1))] bg-[length:40px_40px]"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Automate Anything. <span className="text-orange-500">Open Source</span>.
            </h1>
            <p className="text-lg max-w-2xl mb-8 text-gray-300">
              FlowX is the next-gen workflow automation tool. Connect apps, move
              data, and orchestrate tasks with full control.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/docs"
                className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600"
              >
                Get Started
              </a>
              <a
                href="https://github.com"
                className="px-6 py-3 rounded-2xl border border-red-500 text-red-500 font-semibold hover:bg-red-600 hover:text-white transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
              Why Choose FlowX?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl shadow bg-[#111] border border-red-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Visual Workflow Builder</h3>
                <p className="text-gray-300">Create automations using an intuitive drag & drop editor.</p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-[#111] border border-red-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">100+ Integrations</h3>
                <p className="text-gray-300">Connect with popular services like Slack, Notion, AWS, and more.</p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-[#111] border border-red-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Self-Hosted Freedom</h3>
                <p className="text-gray-300">Deploy anywhere: Docker, Kubernetes, or bare metal. Your data, your rules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Start Automating Today</h2>
          <p className="mb-8 text-lg max-w-xl mx-auto text-gray-200">
            Join developers and teams building powerful automations without
            limits.
          </p>
          <a
            href="/docs"
            className="px-8 py-4 rounded-2xl bg-black text-orange-500 font-semibold shadow hover:bg-gray-900 border border-orange-500"
          >
            Get Started Free
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-gray-400 bg-black border-t border-red-600">
          <p>© {new Date().getFullYear()} FlowX. Open Source Automation.</p>
        </footer>
      </main>
    </>
  );
}