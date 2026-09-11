"use client";

import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState<"home" | "dashboard">("home");
  const [formData, setFormData] = useState({
    name: "Digital Pulse BD",
    email: "mastermindai.25@gmail.com",
    project: "Digital Pulse Portal",
  });

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setView("dashboard");
  };

  const scrollToSection = (id: string) => {
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between scroll-smooth">
      {/* Top Navbar with all Menus */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white text-black font-black flex items-center justify-center text-sm shadow-md">
            DP
          </div>
          <span className="font-bold tracking-wide text-lg text-white">Digital Pulse</span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400">
            v2.4
          </span>
        </div>

        {/* Navigation Menus */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <button onClick={() => scrollToSection("services")} className="hover:text-white transition">
            Services
          </button>
          <button onClick={() => scrollToSection("analytics")} className="hover:text-white transition">
            Analytics
          </button>
          <button onClick={() => scrollToSection("features")} className="hover:text-white transition">
            Features
          </button>
          <button onClick={() => scrollToSection("docs")} className="hover:text-white transition">
            Docs
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {view === "dashboard" ? (
            <button
              onClick={() => setView("home")}
              className="text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
            >
              Back to Home
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowModal(true)}
                className="text-xs sm:text-sm text-neutral-400 hover:text-white transition px-2 py-1"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="text-xs sm:text-sm px-3.5 py-1.5 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Page View */}
      {view === "home" ? (
        <div className="flex-1 flex flex-col items-center">
          {/* Hero Section */}
          <section className="w-full max-w-4xl text-center space-y-6 px-6 py-20">
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
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition shadow-lg"
              >
                Get Started →
              </button>
              <button
                onClick={() => scrollToSection("analytics")}
                className="px-6 py-3 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition flex items-center gap-2"
              >
                <span className="text-emerald-400">📊</span> View Analytics
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <h3 className="text-xl font-bold mb-6 text-neutral-200">Core Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Fast Setup</h4>
                <p className="text-sm text-neutral-400">Integrated database and hosting directly via Vercel and Supabase.</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Automated Sync</h4>
                <p className="text-sm text-neutral-400">Real-time data feeds, activity logs, and seamless workflow execution.</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Client Portal</h4>
                <p className="text-sm text-neutral-400">Dedicated dashboard for team members and platform administrators.</p>
              </div>
            </div>
          </section>

          {/* Analytics Section */}
          <section id="analytics" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-200">Live Analytics</h3>
                <p className="text-sm text-neutral-400">Real-time telemetry and infrastructure performance.</p>
              </div>
              <button
                onClick={() => setView("dashboard")}
                className="text-xs px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-300"
              >
                Open Full Dashboard ↗
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Uptime</p>
                <div className="text-3xl font-black text-white mt-1">99.98%</div>
                <span className="text-xs text-emerald-400">System Healthy</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Daily Queries</p>
                <div className="text-3xl font-black text-white mt-1">42.8k</div>
                <span className="text-xs text-neutral-400">Across all endpoints</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Avg Latency</p>
                <div className="text-3xl font-black text-white mt-1">18ms</div>
                <span className="text-xs text-emerald-400">Edge verified</span>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <h3 className="text-xl font-bold mb-4 text-neutral-200">Services</h3>
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 text-sm text-neutral-400 space-y-2">
              <p>• Automated CRM & Client Lifecycle Integration</p>
              <p>• Cloud Database Sync & Authentication via Supabase</p>
              <p>• Edge Performance Hosting & Deployments via Vercel</p>
            </div>
          </section>

          {/* Docs Section */}
          <section id="docs" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900 mb-10">
            <h3 className="text-xl font-bold mb-4 text-neutral-200">Documentation</h3>
            <p className="text-sm text-neutral-400">
              Need technical documentation or help setting up? Contact administrator at{" "}
              <a href="mailto:mastermindai.25@gmail.com" className="text-white underline">
                mastermindai.25@gmail.com
              </a>.
            </p>
          </section>
        </div>
      ) : (
        /* Full Dashboard View */
        <section className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Active Workspace</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">{formData.project}</h2>
              <p className="text-sm text-neutral-400">Managed by {formData.name} ({formData.email})</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition"
            >
              Edit Portal Settings
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
              <p className="text-xs text-neutral-400 uppercase font-medium">System Uptime</p>
              <div className="text-3xl font-black text-white">99.98%</div>
              <span className="inline-block text-xs text-emerald-400 font-medium">✓ Operational</span>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
              <p className="text-xs text-neutral-400 uppercase font-medium">Active Pipelines</p>
              <div className="text-3xl font-black text-white">12</div>
              <span className="inline-block text-xs text-neutral-400">Next.js + Supabase Sync</span>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
              <p className="text-xs text-neutral-400 uppercase font-medium">Live Queries / Sec</p>
              <div className="text-3xl font-black text-white">1,420</div>
              <span className="inline-block text-xs text-emerald-400">Avg response: 18ms</span>
            </div>
          </div>
        </section>
      )}

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-5 text-left">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Fast-Track Setup</span>
                <h3 className="text-2xl font-bold text-white mt-1">Client Onboarding Portal</h3>
                <p className="text-xs text-neutral-400">Configure your Digital Pulse workspace.</p>
              </div>
              <button onClick={() => setShowModal(false)} className="text-neutral-400 hover:text-white text-lg p-1">
                ✕
              </button>
            </div>

            <form onSubmit={handleLaunch} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">Full Name or Brand</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">Project Name</label>
                <input
                  type="text"
                  required
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition text-sm mt-2 cursor-pointer shadow-lg"
              >
                Complete Setup & Launch
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 py-6 text-center text-xs text-neutral-600">
        © 2026 Digital Pulse. All rights reserved.
      </footer>
    </main>
  );
}