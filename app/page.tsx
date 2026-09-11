"use client";

import { useState } from "react";

interface Post {
  id: string;
  content: string;
  type: "Post" | "Reel" | "Photo";
  date: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "dashboard">("home");
  const [activeTab, setActiveTab] = useState<"social" | "overview">("social");

  const [formData, setFormData] = useState({
    name: "Digital Pulse BD",
    email: "mastermindai.25@gmail.com",
    project: "Digital Pulse Portal",
  });

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      content: "Welcome to the official Digital Pulse feed! Automated system connected with Next.js & Supabase.",
      type: "Post",
      date: "Sep 11, 2026",
      likes: 85,
      comments: 20,
      shares: 8,
    },
    {
      id: "2",
      content: "New creative assets and branding tools now synced. Check out the latest updates on our portal!",
      type: "Reel",
      date: "Sep 09, 2026",
      likes: 140,
      comments: 32,
      shares: 25,
    },
  ]);

  const [newPostText, setNewPostText] = useState("");
  const [newPostType, setNewPostType] = useState<"Post" | "Reel" | "Photo">("Post");

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setView("dashboard");
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      content: newPostText,
      type: newPostType,
      date: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white text-black font-black flex items-center justify-center text-sm shadow-md">
            DP
          </div>
          <span className="font-bold tracking-wide text-base sm:text-lg text-white">Digital Pulse</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400">
            v2.5
          </span>
        </div>

        {/* Desktop Navbar Menus */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
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

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {view === "dashboard" ? (
            <button
              onClick={() => setView("home")}
              className="text-xs px-3 py-1.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
            >
              Back to Home
            </button>
          ) : (
            <>
              <button
                onClick={() => setView("dashboard")}
                className="text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition"
              >
                Feed Portal
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="text-xs px-3 py-1.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition"
              >
                Get Started
              </button>
            </>
          )}

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full border-b border-neutral-800 bg-neutral-900/95 px-6 py-4 flex flex-col gap-3 text-sm text-neutral-300">
          <button onClick={() => scrollToSection("services")} className="text-left py-1 hover:text-white">
            Services
          </button>
          <button onClick={() => scrollToSection("analytics")} className="text-left py-1 hover:text-white">
            Analytics
          </button>
          <button onClick={() => scrollToSection("features")} className="text-left py-1 hover:text-white">
            Features
          </button>
          <button onClick={() => scrollToSection("docs")} className="text-left py-1 hover:text-white">
            Docs
          </button>
        </div>
      )}

      {/* Home View */}
      {view === "home" ? (
        <div className="flex-1 flex flex-col items-center">
          <section className="w-full max-w-4xl text-center space-y-6 px-6 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Digital Pulse Platform Active
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Welcome to Digital Pulse
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Centralized hub for operations, client onboarding, and Facebook feed archiving powered by Next.js and Supabase.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setView("dashboard")}
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition shadow-lg text-sm"
              >
                Open Social Portal →
              </button>
              <button
                onClick={() => scrollToSection("analytics")}
                className="px-6 py-3 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition flex items-center gap-2 text-sm"
              >
                <span className="text-emerald-400">📊</span> View Analytics
              </button>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-neutral-200">Core Architecture</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Social Sync Hub</h4>
                <p className="text-xs sm:text-sm text-neutral-400">Auto stream and archive your Facebook posts, reels, and photos.</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Automated Pipelines</h4>
                <p className="text-xs sm:text-sm text-neutral-400">Cloud workflows save every post directly into Supabase.</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <h4 className="font-semibold text-white">Dedicated Portal</h4>
                <p className="text-xs sm:text-sm text-neutral-400">Control center for admins to manage feeds and platform metrics.</p>
              </div>
            </div>
          </section>

          {/* Analytics */}
          <section id="analytics" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-200">Live Telemetry</h3>
                <p className="text-xs sm:text-sm text-neutral-400">Real-time infrastructure and sync status.</p>
              </div>
              <button
                onClick={() => setView("dashboard")}
                className="text-xs px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-300"
              >
                Full Dashboard ↗
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Uptime</p>
                <div className="text-3xl font-black text-white mt-1">99.98%</div>
                <span className="text-xs text-emerald-400">Operational</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Saved Posts</p>
                <div className="text-3xl font-black text-white mt-1">{posts.length}</div>
                <span className="text-xs text-neutral-400">Archived in database</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xs text-neutral-400 uppercase font-medium">Sync Latency</p>
                <div className="text-3xl font-black text-white mt-1">18ms</div>
                <span className="text-xs text-emerald-400">Edge Verified</span>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-neutral-200">Services</h3>
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 text-xs sm:text-sm text-neutral-400 space-y-2">
              <p>• Automated Facebook Page Content Archiving</p>
              <p>• Supabase Real-time Database Synchronization</p>
              <p>• Vercel Global Edge Cloud Deployments</p>
            </div>
          </section>

          {/* Docs */}
          <section id="docs" className="w-full max-w-5xl px-6 py-12 border-t border-neutral-900 mb-10">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-200">Documentation & Support</h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              For administrative access and configuration inquiries, contact:{" "}
              <a href="mailto:mastermindai.25@gmail.com" className="text-white underline">
                mastermindai.25@gmail.com
              </a>
            </p>
          </section>
        </div>
      ) : (
        /* Dashboard / Feed View */
        <section className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 mb-1">
                <span>●</span> Connected: {formData.name}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Social Operations Hub</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("social")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                  activeTab === "social"
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white"
                }`}
              >
                Facebook Feed & Archive
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                  activeTab === "overview"
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white"
                }`}
              >
                System Metrics
              </button>
            </div>
          </div>

          {activeTab === "social" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-400">Sync Status</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">Digital Pulse Page</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Facebook posts, videos, and status updates are preserved here in real time.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-4">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>Archive New Post</span>
                    <span className="text-[10px] text-neutral-500">Instant Save</span>
                  </h4>
                  <form onSubmit={handleAddPost} className="space-y-3">
                    <textarea
                      rows={3}
                      value={newPostText}
                      onChange={(e) => setNewPostText(e.target.value)}
                      placeholder="Type or paste your Facebook post text here..."
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 transition resize-none"
                    />
                    <div className="flex gap-2">
                      {(["Post", "Reel", "Photo"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setNewPostType(type)}
                          className={`flex-1 py-1 rounded text-xs border transition ${
                            newPostType === type
                              ? "bg-neutral-800 border-neutral-600 text-white font-semibold"
                              : "border-neutral-800 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md"
                    >
                      Save to Feed Archive
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-neutral-200">
                    Archived Feed <span className="text-xs text-neutral-500 font-normal">({posts.length} entries)</span>
                  </h3>
                  <span className="text-xs text-neutral-400">Auto-refresh synced</span>
                </div>

                <div className="space-y-3">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                            f
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">Digital Pulse</span>
                            <span className="text-[10px] text-neutral-400">{post.date}</span>
                          </div>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300">
                          {post.type}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-200 leading-relaxed">{post.content}</p>

                      <div className="flex items-center gap-6 pt-2 border-t border-neutral-800/60 text-xs text-neutral-400">
                        <span>👍 {post.likes} Likes</span>
                        <span>💬 {post.comments} Comments</span>
                        <span>🔄 {post.shares} Shares</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
                  <p className="text-xs text-neutral-400 uppercase font-medium">Uptime</p>
                  <div className="text-3xl font-black text-white">99.98%</div>
                  <span className="text-xs text-emerald-400 font-medium">✓ Operational</span>
                </div>
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
                  <p className="text-xs text-neutral-400 uppercase font-medium">Database Records</p>
                  <div className="text-3xl font-black text-white">{posts.length}</div>
                  <span className="text-xs text-neutral-400">Supabase Ready</span>
                </div>
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-2">
                  <p className="text-xs text-neutral-400 uppercase font-medium">Pipeline Response</p>
                  <div className="text-3xl font-black text-white">18ms</div>
                  <span className="text-xs text-emerald-400">Real-time Stream</span>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-5 text-left">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Fast-Track Setup</span>
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