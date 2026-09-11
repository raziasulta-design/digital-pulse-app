"use client";

import { useState, useMemo } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  link: string;
  type: "Reel" | "Post" | "Photo" | "Notice";
  date: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"landing" | "feed" | "app" | "services" | "contact">("landing");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form State
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostLink, setNewPostLink] = useState("");
  const [newPostType, setNewPostType] = useState<"Reel" | "Post" | "Photo" | "Notice">("Reel");
  const [newPostTags, setNewPostTags] = useState("");

  // Facebook Feed & Reel Archive
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "নতুন গ্রাহক পেতে আপনার পাশে ডিজিটাল পালস!",
      content: "আপনার ব্যবসা কি প্রতিদিন নতুন গ্রাহক হারাচ্ছে? আধুনিক যুগে প্রতিযোগিতায় টিকে থাকতে প্রয়োজন সঠিক ও আকর্ষণীয় প্রচার। ডিজিটাল পালস আছে আপনার পাশে!",
      link: "https://www.facebook.com/reel/4327027084181104",
      type: "Reel",
      date: "Just now",
      likes: 24,
      comments: 7,
      shares: 5,
      tags: ["DigitalPulse", "BusinessPromotion", "VideoAdvertising", "Reel"],
    },
    {
      id: "2",
      title: "Digital Pulse BD Platform & Web App Launch",
      content: "স্বাগতম Digital Pulse BD-তে! আমাদের অটোমেটেড ডিজিটাল ওয়ার্কফ্লো, সোশ্যাল মিডিয়া ইন্টিগ্রেশন এবং ক্লাউড ডাটাবেজ সিস্টেম এখন লাইভ।",
      link: "https://www.facebook.com",
      type: "Post",
      date: "Sep 11, 2026",
      likes: 128,
      comments: 34,
      shares: 15,
      tags: ["DigitalPulse", "Launch", "NextJS", "Supabase"],
    },
    {
      id: "3",
      title: "New Creative Visual Templates & 3D Logo Intro",
      content: "আমাদের ফেসবুক পেজে নতুন ব্যানার ডিজাইন, মোশন গ্রাফিক্স এবং রিলস টেমপ্লেট উন্মোচন করা হয়েছে। আপনার ব্র্যান্ডকে আরও আকর্ষণীয় করতে এক্সপ্লোর করুন।",
      link: "https://www.facebook.com/reel/4327027084181104",
      type: "Reel",
      date: "Sep 09, 2026",
      likes: 210,
      comments: 48,
      shares: 39,
      tags: ["Reel", "Branding", "Creative", "Motion"],
    },
  ]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const parsedTags = newPostTags
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter((t) => t.length > 0);

    const createdPost: Post = {
      id: Date.now().toString(),
      title: newPostTitle.trim() || "Digital Pulse Update",
      content: newPostContent,
      link: newPostLink.trim() || "https://www.facebook.com",
      type: newPostType,
      date: "Just now",
      likes: 1,
      comments: 0,
      shares: 0,
      tags: parsedTags.length > 0 ? parsedTags : ["DigitalPulse"],
    };

    setPosts([createdPost, ...posts]);
    setNewPostTitle("");
    setNewPostContent("");
    setNewPostLink("");
    setNewPostTags("");
    setShowCreateModal(false);
    setActiveTab("feed");
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.type.toLowerCase().includes(query);

      const matchesType = selectedType === "All" || post.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [posts, searchQuery, selectedType]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between">
      {/* Universal Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white font-black flex items-center justify-center text-sm shadow-lg">
              DP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-base sm:text-lg text-white leading-tight">
                  Digital Pulse
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 text-emerald-400 font-mono">
                  digitalpulse.studio
                </span>
              </div>
              <span className="text-[10px] text-neutral-400">All-in-One Studio & Operations Portal</span>
            </div>
          </div>

          {/* Instant Search Bar */}
          <div className="flex-1 max-w-xs sm:max-w-sm order-3 sm:order-2 w-full sm:w-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500 text-sm">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="রিলস, পোস্ট বা কনটেন্ট সার্চ করুন..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-2.5 flex items-center text-neutral-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Direct Outbound Links & Action */}
          <div className="order-2 sm:order-3 flex items-center gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <span className="h-4 w-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">f</span>
              <span>FB Page ↗</span>
            </a>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-1 shadow-md active:scale-95 cursor-pointer"
            >
              <span>＋</span>
              <span>নতুন পোস্ট/রিল</span>
            </button>
          </div>
        </div>

        {/* Global Navigation Tabs */}
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 sm:gap-2 mt-3 pt-2 border-t border-neutral-900 overflow-x-auto text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab("landing")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "landing" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            🌐 Studio Landing Page
          </button>
          <button
            onClick={() => setActiveTab("feed")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "feed" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            📱 FB Feeds ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "services" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            ⚡ Services
          </button>
          <button
            onClick={() => setActiveTab("app")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "app" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            💻 Operations App
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "contact" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            ✉️ Contact
          </button>
        </div>
      </header>

      {/* Dynamic Content Body */}
      <section className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* TAB 1: STUDIO LANDING PAGE VIEW */}
        {activeTab === "landing" && (
          <div className="space-y-12 py-4">
            {/* Hero Section */}
            <div className="text-center space-y-5 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official Web Platform: digitalpulse.studio
              </div>

              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Welcome to Digital Pulse Studio
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
                আপনার ব্যবসা ও ব্র্যান্ডকে এক অনন্য উচ্চতায় পৌঁছে দিতে আধুনিক প্রযুক্তি ও নান্দনিক ডিজাইনের সম্পূর্ণ সল্যুশন।
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab("feed")}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition text-xs sm:text-sm shadow-lg shadow-blue-600/20"
                >
                  📱 Explore FB Feed & Reels
                </button>
                <button
                  onClick={() => setActiveTab("app")}
                  className="px-6 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold transition text-xs sm:text-sm"
                >
                  ⚙️ Open App Dashboard
                </button>
              </div>
            </div>

            {/* Studio Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                  🎨
                </div>
                <h3 className="font-bold text-white text-base">Creative Studio</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  ডিজিটাল মার্কেটিং ব্যানার, লোগো ডিজাইন, ভিজিটিং কার্ড এবং প্রমোশনাল ভিজ্যুয়াল আর্ট।
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-pink-600/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-lg">
                  🎬
                </div>
                <h3 className="font-bold text-white text-base">Reels & Video Ads</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  সোশ্যাল মিডিয়ার জন্য হাই-কনভার্টিং রিলস, ৩ডি মোশন ইন্ট্রো এবং আকর্ষণীয় ভিডিও বিজ্ঞাপন।
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <h3 className="font-bold text-white text-base">Digital Pulse App</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  ফেসবুক পেজের কনটেন্ট অটো-আর্কাইভ, লাইভ সার্চ এবং ক্লাউড ডাটাবেজ ইন্টিগ্রেশন।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FB FEEDS & REELS ARCHIVE */}
        {activeTab === "feed" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                {["All", "Reel", "Post", "Notice"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full border transition ${
                      selectedType === type
                        ? "bg-blue-600 border-blue-500 text-white font-medium"
                        : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {searchQuery && (
                <span className="text-xs text-neutral-400">
                  Search results for: <span className="text-white font-semibold">"{searchQuery}"</span>
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          f
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white leading-tight">Digital Pulse BD</h4>
                          <span className="text-[10px] text-neutral-400">{post.date}</span>
                        </div>
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300 font-medium">
                        {post.type}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white leading-snug">{post.title}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">{post.content}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          onClick={() => setSearchQuery(tag)}
                          className="text-[10px] px-2 py-0.5 rounded bg-neutral-800/80 text-blue-400 hover:text-white cursor-pointer transition border border-neutral-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800/80 space-y-2.5">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md active:scale-98"
                    >
                      <span>
                        {post.type === "Reel" && "▶ Watch Reel on Facebook"}
                        {post.type === "Photo" && "🖼 View Photo on Facebook"}
                        {post.type === "Notice" && "📄 Open Notice on Facebook"}
                        {post.type === "Post" && "↗ Open on Facebook"}
                      </span>
                    </a>

                    <div className="flex items-center justify-between text-[11px] text-neutral-400 px-1">
                      <span>👍 {post.likes} Likes</span>
                      <span>💬 {post.comments} Comments</span>
                      <span>🔄 {post.shares} Shares</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES */}
        {activeTab === "services" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Digital Pulse Services</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                ডিজিটাল প্ল্যাটফর্মে আপনার ব্র্যান্ডকে এগিয়ে নেওয়ার পূর্ণাঙ্গ প্যাকেজ:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🎨</span>
                <h4 className="font-semibold text-white">Creative Branding & Flyers</h4>
                <p className="text-xs text-neutral-400">লোগো, ভিজিটিং কার্ড, সোশ্যাল ব্যানার ডিজাইন ও কর্পোরেট প্রমোশন।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🎬</span>
                <h4 className="font-semibold text-white">Video Ads & Reels Production</h4>
                <p className="text-xs text-neutral-400">ব্যবসায়িক ভিডিও বিজ্ঞাপন, ৩ডি অ্যানিমেশন ও রিলস কনটেন্ট।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">⚡</span>
                <h4 className="font-semibold text-white">Cloud App & Data Sync</h4>
                <p className="text-xs text-neutral-400">Next.js এবং Supabase দ্বারা পরিচালিত সুরক্ষিত ড্যাশবোর্ড ও ক্লাউড ডাটাবেজ।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: APP OPERATIONS PORTAL */}
        {activeTab === "app" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <h3 className="text-xl font-bold text-white">Digital Pulse Operations App</h3>
                <p className="text-xs text-neutral-400">System Telemetry & Live Cloud Pipelines</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                ● Live on Vercel Edge
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">System Uptime</span>
                <div className="text-3xl font-black text-white">99.98%</div>
                <span className="text-xs text-emerald-400">Operational</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Archived Media</span>
                <div className="text-3xl font-black text-white">{posts.length} Items</div>
                <span className="text-xs text-blue-400">Database Synced</span>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Latency</span>
                <div className="text-3xl font-black text-white">18ms</div>
                <span className="text-xs text-emerald-400">Next.js Edge</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CONTACT */}
        {activeTab === "contact" && (
          <div className="max-w-xl mx-auto p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 text-center">
            <h3 className="text-xl font-bold text-white">Digital Pulse BD যোগাযোগ</h3>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2.5 text-xs sm:text-sm">
              <p>🏢 <strong>Brand:</strong> Digital Pulse BD</p>
              <p>🌐 <strong>Studio Domain:</strong> digitalpulse.studio</p>
              <p>✉️ <strong>Email:</strong> mastermindai.25@gmail.com</p>
              <p>📱 <strong>Platform:</strong> Next.js, Tailwind CSS & Supabase</p>
            </div>
          </div>
        )}
      </section>

      {/* CREATE POST MODAL WITH LINK INPUT */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white">নতুন পোস্ট বা রিলস যোগ করুন</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-neutral-400 hover:text-white text-lg p-1">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3 text-left">
              <div>
                <label className="text-xs text-neutral-300 block mb-1">পোস্ট বা রিলের শিরোনাম</label>
                <input
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder="যেমন: নতুন গ্রাহক পেতে আপনার পাশে ডিজিটাল পালস!"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-300 block mb-1">ফেসবুক রিল বা ভিডিওর লিঙ্ক *</label>
                <input
                  type="url"
                  required
                  value={newPostLink}
                  onChange={(e) => setNewPostLink(e.target.value)}
                  placeholder="https://www.facebook.com/reel/4327027084181104"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-300 block mb-1">বিবরণ / ক্যাপশন *</label>
                <textarea
                  rows={4}
                  required
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="আপনার পোস্টের বিস্তারিত বিবরণ লিখুন..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-neutral-300 block mb-1">কনটেন্টের ধরণ</label>
                  <select
                    value={newPostType}
                    onChange={(e) => setNewPostType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Reel">Reel (ভিডিও)</option>
                    <option value="Post">Post (স্ট্যাটাস)</option>
                    <option value="Photo">Photo (ছবি)</option>
                    <option value="Notice">Notice (নোটিশ)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-neutral-300 block mb-1">হ্যাশট্যাগ (কমা দিয়ে লিখুন)</label>
                  <input
                    type="text"
                    value={newPostTags}
                    onChange={(e) => setNewPostTags(e.target.value)}
                    placeholder="DigitalPulse, Reel, Marketing"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs hover:bg-neutral-700"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg"
                >
                  ফিডে সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Unified Footer */}
      <footer className="w-full border-t border-neutral-900 py-4 text-center text-xs text-neutral-500">
        © 2026 Digital Pulse (digitalpulse.studio). All rights reserved.
      </footer>
    </main>
  );
}