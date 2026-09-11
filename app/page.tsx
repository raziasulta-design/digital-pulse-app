"use client";

import { useState, useMemo } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  type: "Post" | "Reel" | "Photo" | "Notice";
  date: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export default function Home() {
  // Search & Navigation States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"feed" | "services" | "analytics" | "contact">("feed");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New Post Form State
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostType, setNewPostType] = useState<"Post" | "Reel" | "Photo" | "Notice">("Post");
  const [newPostTags, setNewPostTags] = useState("");

  // Post Data / Facebook Archive
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Digital Pulse Platform Launch",
      content: "স্বাগতম Digital Pulse BD-তে! আমাদের অটোমেটেড ডিজিটাল ওয়ার্কফ্লো, সোশ্যাল মিডিয়া ইন্টিগ্রেশন এবং ক্লাউড ডাটাবেজ সিস্টেম এখন পুরোদমে লাইভ।",
      type: "Post",
      date: "Sep 11, 2026",
      likes: 128,
      comments: 34,
      shares: 15,
      tags: ["DigitalPulse", "Launch", "NextJS", "Supabase"],
    },
    {
      id: "2",
      title: "New Creative Visual Templates & 3D Logo Intro",
      content: "আমাদের ফেসবুক পেজে নতুন ব্যানার ডিজাইন, মোশন গ্রাফিক্স এবং রিলস টেমপ্লেট উন্মোচন করা হয়েছে। আপনার ব্র্যান্ডকে আরও আকর্ষণীয় করতে আমাদের সার্ভিসগুলো এক্সপ্লোর করুন।",
      type: "Reel",
      date: "Sep 09, 2026",
      likes: 210,
      comments: 48,
      shares: 39,
      tags: ["Reel", "Branding", "Creative", "Motion"],
    },
    {
      id: "3",
      title: "Automated Data Processing & Workflow Systems",
      content: "ডাটাবেজ ম্যানেজমেন্ট, রিয়েল-টাইম এপিআই সিঙ্ক এবং মেটা অটোমেশন নিয়ে নতুন সল্যুশন চালু হয়েছে। যেকোনো তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।",
      type: "Notice",
      date: "Sep 05, 2026",
      likes: 95,
      comments: 18,
      shares: 11,
      tags: ["DataSync", "Automation", "Database"],
    },
  ]);

  // Handle Adding New Post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const parsedTags = newPostTags
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter((t) => t.length > 0);

    const createdPost: Post = {
      id: Date.now().toString(),
      title: newPostTitle.trim() || "Digital Pulse Announcement",
      content: newPostContent,
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
    setNewPostTags("");
    setShowCreateModal(false);
    setActiveTab("feed");
  };

  // Instant Live Search Filter
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
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white font-black flex items-center justify-center text-sm shadow-lg">
              DP
            </div>
            <div>
              <span className="font-bold tracking-tight text-base sm:text-lg text-white block leading-tight">
                Digital Pulse
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">Official Portal & Feed</span>
            </div>
          </div>

          {/* Search Box in Navbar */}
          <div className="flex-1 max-w-xs sm:max-w-sm order-3 sm:order-2 w-full sm:w-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500 text-sm">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="পোস্ট, রিলস বা ট্যাগ সার্চ করুন..."
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

          {/* New Post Button */}
          <div className="order-2 sm:order-3 flex items-center gap-2">
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
            >
              <span>＋</span>
              <span>পোস্ট দিন</span>
            </button>
          </div>
        </div>

        {/* Tab Menus */}
        <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 mt-3 pt-2 border-t border-neutral-900 overflow-x-auto text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab("feed")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "feed"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            📱 FB Feeds ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "services"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            ⚡ Services
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "analytics"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            📊 Analytics
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "contact"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            ✉️ Contact
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* TAB 1: FEED & SEARCH RESULTS */}
        {activeTab === "feed" && (
          <div className="space-y-6">
            {/* Filter Badges */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                {["All", "Post", "Reel", "Notice"].map((type) => (
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
                  Search results for: <span className="text-white font-semibold">"{searchQuery}"</span> (
                  {filteredPosts.length} found)
                </span>
              )}
            </div>

            {/* Posts Feed Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/20">
                <p className="text-base text-neutral-300 font-medium">কোনো পোস্ট বা কনটেন্ট খুঁজে পাওয়া যায়নি!</p>
                <p className="text-xs text-neutral-500 mt-1">অন্য কোনো শব্দ লিখে সার্চ করে দেখুন অথবা নতুন পোস্ট যোগ করুন।</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                  }}
                  className="mt-4 px-4 py-1.5 rounded-lg bg-neutral-800 text-xs text-white hover:bg-neutral-700"
                >
                  ফিল্টার রিসেট করুন
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition flex flex-col justify-between space-y-3 shadow-sm"
                  >
                    <div>
                      {/* Post Header */}
                      <div className="flex items-center justify-between mb-2.5">
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

                      {/* Post Title & Content */}
                      <h3 className="text-sm font-semibold text-white mb-1.5">{post.title}</h3>
                      <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">{post.content}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            onClick={() => setSearchQuery(tag)}
                            className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-blue-400 hover:text-white cursor-pointer transition"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Engagement Counts */}
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400">
                      <span>👍 {post.likes} Likes</span>
                      <span>💬 {post.comments} Comments</span>
                      <span>🔄 {post.shares} Shares</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SERVICES */}
        {activeTab === "services" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Digital Pulse Services</h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              আমাদের প্ল্যাটফর্মের মাধ্যমে যে সার্ভিসগুলো সরাসরি প্রদান করা হয়:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🚀</span>
                <h4 className="font-semibold text-white">Social Workflow Automation</h4>
                <p className="text-xs text-neutral-400">ফেসবুক ও সোশ্যাল মিডিয়া কনটেন্ট অটোমেশন এবং ডাটাবেজ ব্যাকআপ।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🎨</span>
                <h4 className="font-semibold text-white">Creative Media & Branding</h4>
                <p className="text-xs text-neutral-400">ব্যানার ডিজাইন, প্রমোশনাল ৩ডি অ্যানিমেশন এবং ভিজ্যুয়াল প্যাকেজ।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">⚡</span>
                <h4 className="font-semibold text-white">Cloud Web Applications</h4>
                <p className="text-xs text-neutral-400">Next.js এবং Supabase দ্বারা পরিচালিত দ্রুতগতির নিরাপদ পোর্টাল।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ANALYTICS */}
        {activeTab === "analytics" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Live System Telemetry</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">System Status</span>
                <div className="text-2xl font-bold text-emerald-400">99.98% Active</div>
                <p className="text-[11px] text-neutral-500">Vercel Production Edge</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Total Saved Content</span>
                <div className="text-2xl font-bold text-white">{posts.length} Items</div>
                <p className="text-[11px] text-neutral-500">Archived in Feed</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Response Latency</span>
                <div className="text-2xl font-bold text-blue-400">18 ms</div>
                <p className="text-[11px] text-neutral-500">Instant query delivery</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT */}
        {activeTab === "contact" && (
          <div className="max-w-xl mx-auto p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 text-center">
            <h3 className="text-xl font-bold text-white">যোগাযোগ ও সাপোর্ট</h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Digital Pulse BD সম্পর্কে যেকোনো অনুসন্ধান বা তথ্যের জন্য সরাসরি যোগাযোগ করুন:
            </p>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs sm:text-sm">
              <p>🏢 <strong>Organization:</strong> Digital Pulse BD</p>
              <p>✉️ <strong>Official Email:</strong> mastermindai.25@gmail.com</p>
              <p>🌐 <strong>Platform:</strong> Next.js & Supabase Powered</p>
            </div>
          </div>
        )}
      </section>

      {/* CREATE NEW POST MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white">নতুন পোস্ট / রিলস যোগ করুন</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-neutral-400 hover:text-white text-lg p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3 text-left">
              <div>
                <label className="text-xs text-neutral-300 block mb-1">পোস্ট টাইটেল</label>
                <input
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder="যেমন: নতুন রিলস বা প্রজেক্ট আপডেট..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-300 block mb-1">কন্টেন্ট / পোস্টের বিবরণ *</label>
                <textarea
                  rows={4}
                  required
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="ফেসবুক পোস্টের টেক্সট বা ক্যাপশন লিখুন..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-neutral-300 block mb-1">কনটেন্ট ধরন</label>
                  <select
                    value={newPostType}
                    onChange={(e) => setNewPostType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Post">Post (স্ট্যাটাস)</option>
                    <option value="Reel">Reel (ভিডিও)</option>
                    <option value="Photo">Photo (ছবি)</option>
                    <option value="Notice">Notice (নোটিশ)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-neutral-300 block mb-1">ট্যাগ (কমা দিয়ে লিখুন)</label>
                  <input
                    type="text"
                    value={newPostTags}
                    onChange={(e) => setNewPostTags(e.target.value)}
                    placeholder="Branding, Motion, Update"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                  </input>
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

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 py-4 text-center text-xs text-neutral-500">
        © 2026 Digital Pulse BD. All rights reserved.
      </footer>
    </main>
  );
}