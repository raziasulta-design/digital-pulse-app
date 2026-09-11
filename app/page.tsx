"use client";

import { useState, useMemo } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  link: string;
  type: "Post" | "Reel" | "Photo" | "Notice";
  date: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"feed" | "services" | "analytics" | "contact">("feed");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form inputs
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostLink, setNewPostLink] = useState("");
  const [newPostType, setNewPostType] = useState<"Post" | "Reel" | "Photo" | "Notice">("Reel");
  const [newPostTags, setNewPostTags] = useState("");

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "নতুন গ্রাহক পেতে আপনার পাশে ডিজিটাল পালস!",
      content: "আপনার ব্যবসা কি প্রতিদিন নতুন গ্রাহক হারাচ্ছে? আধুনিক যুগে প্রতিযোগিতায় টিকে থাকতে প্রয়োজন সঠিক ও আকর্ষণীয় প্রচার। ডিজিটাল পালস আছে আপনার পাশে!",
      link: "https://www.facebook.com/reel/4327027084181104",
      type: "Reel",
      date: "Just now",
      likes: 18,
      comments: 6,
      shares: 4,
      tags: ["DigitalPulse", "BusinessPromotion", "VideoAdvertising", "Reel"],
    },
    {
      id: "2",
      title: "Digital Pulse Platform Launch",
      content: "স্বাগতম Digital Pulse BD-তে! আমাদের অটোমেটেড ডিজিটাল ওয়ার্কফ্লো, সোশ্যাল মিডিয়া ইন্টিগ্রেশন এবং ক্লাউড ডাটাবেজ সিস্টেম এখন পুরোদমে লাইভ।",
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
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white font-black flex items-center justify-center text-sm shadow-lg">
              DP
            </div>
            <div>
              <span className="font-bold tracking-tight text-base sm:text-lg text-white block leading-tight">
                Digital Pulse BD
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">Official Media & Portal Hub</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs sm:max-w-sm order-3 sm:order-2 w-full sm:w-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500 text-sm">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="পোস্ট, রিলস বা ট্যাগ খুঁজুন..."
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

          {/* Action Button */}
          <div className="order-2 sm:order-3 flex items-center gap-2">
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
            >
              <span>＋</span>
              <span>পোস্ট বা রিল দিন</span>
            </button>
          </div>
        </div>

        {/* Tab Menus */}
        <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 mt-3 pt-2 border-t border-neutral-900 overflow-x-auto text-xs sm:text-sm">
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
            onClick={() => setActiveTab("analytics")}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === "analytics" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            📊 Analytics
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

      {/* Main Content Body */}
      <section className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
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

            {/* Posts Grid with Facebook Launch Buttons */}
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

                  {/* Direct Launch Button */}
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

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Digital Pulse Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🎨</span>
                <h4 className="font-semibold text-white">Creative Branding & Flyers</h4>
                <p className="text-xs text-neutral-400">লোগো, ভিজিটিং কার্ড, ব্যানার ডিজাইন এবং সোশ্যাল প্রমোশন।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">🎬</span>
                <h4 className="font-semibold text-white">Video Ads & Reels</h4>
                <p className="text-xs text-neutral-400">ব্যবসায়িক ভিডিও বিজ্ঞাপন, ৩ডি অ্যানিমেশন ও রিলস প্রোডাকশন।</p>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-2">
                <span className="text-xl">⚡</span>
                <h4 className="font-semibold text-white">Cloud Platforms & Sync</h4>
                <p className="text-xs text-neutral-400">অটোমেটেড ডাটাবেজ ইন্টিগ্রেশন এবং ক্লাউড আর্কিটেকচার।</p>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Platform Telemetry</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Total Media Archived</span>
                <div className="text-2xl font-bold text-white">{posts.length} Posts & Reels</div>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Platform Status</span>
                <div className="text-2xl font-bold text-emerald-400">99.98% Active</div>
              </div>
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1">
                <span className="text-xs text-neutral-400 uppercase">Redirect Latency</span>
                <div className="text-2xl font-bold text-blue-400">Direct Facebook URL</div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="max-w-xl mx-auto p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 text-center">
            <h3 className="text-xl font-bold text-white">যোগাযোগ করুন</h3>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs sm:text-sm">
              <p>🏢 <strong>Brand:</strong> Digital Pulse BD</p>
              <p>✉️ <strong>Email:</strong> mastermindai.25@gmail.com</p>
              <p>🌐 <strong>Portal:</strong> Next.js & Supabase Powered</p>
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
                  placeholder="আপনার পোস্টের বিস্তারিত লেখা বা বিবরণ লিখুন..."
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

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 py-4 text-center text-xs text-neutral-500">
        © 2026 Digital Pulse BD. All rights reserved.
      </footer>
    </main>
  );
}