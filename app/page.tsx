export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Digital Pulse Platform Active
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Welcome to Digital Pulse
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Your centralized hub for operations, client onboarding, and automated digital workflows powered by Next.js and Supabase.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-colors">
            View Analytics
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left">
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
            <h3 className="font-semibold text-white">Fast Setup</h3>
            <p className="text-sm text-neutral-400">Integrated database and hosting directly via Vercel and Supabase.</p>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
            <h3 className="font-semibold text-white">Automated Sync</h3>
            <p className="text-sm text-neutral-400">Real-time data feeds, activity logs, and seamless workflow execution.</p>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
            <h3 className="font-semibold text-white">Client Portal</h3>
            <p className="text-sm text-neutral-400">Dedicated dashboard for team members and platform administrators.</p>
          </div>
        </div>
      </div>
    </main>
  );
}