"use client";

import { useState } from "react";

interface PostItem {
  id: string;
  title: string;
  link: string;
  type: "Reel" | "Video" | "Photo" | "Post" | "Story";
  date: string;
  badgeColor: string;
}

export default function Home() {
  // Feed list with direct Facebook links
  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: "1",
      title: "Digital Pulse Brand Reveal & Workflow Intro",
      link: "https://www.facebook.com/reel/4327027084181104",
      type: "Reel",
      date: "Just now",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    },
    {
      id: "2",
      title: "Digital Pulse BD Official Page & Community",
      link: "https://www.facebook.com",
      type: "Post",
      date: "Sep 11, 2026",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
  ]);

  // Form states
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState<"Reel" | "Video" | "Photo" | "Post" | "Story">("Reel");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!link.trim()) return;

    let detectedType = type;
    if (link.includes("/reel/")) detectedType = "Reel";
    else if (link.includes("/videos/")) detectedType = "Video";
    else if (link.includes("/stories/")) detectedType = "Story";

    const badgeColors = {
      Reel: "bg-pink-500/10 text-pink-400 border-pink-500/30",
      Video: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      Photo: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      Post: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      Story: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    };

    const newEntry: PostItem = {
      id: Date.now().toString(),
      title: title.trim() || `${detectedType} from Digital Pulse BD`,
      link: link.trim(),
      type: detectedType,
      date: "Just now",
      badgeColor: badgeColors[detectedType],
    };

    setPosts([newEntry, ...posts]);
    setTitle("");
    setLink("");
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between selection:bg-blue-600">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 py-3.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 flex items-center justify-center font-black text-sm shadow-md">
              DP
            </div>
            <div>
              <h1 className="font-bold text-base sm:text-lg text-white leading-tight">Digital Pulse</h1>
              <p className="text-[11px] text-blue-400 font-medium">Facebook Media & Reel Portal</p>
            </div>
          </div>

          <div className="relative w-44 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reels or posts..."
              className="w-full pl-3 pr-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Intro */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-[11px] text-neutral-300">
            Official Facebook Content Archive
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Digital Pulse Media Hub</h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            যেকোনো রিল, ভিডিও বা ছবির ওপর ক্লিক করলেই সরাসরি ফেসবুক পেজে ওপেন হয়ে যাবে।
          </p>
        </div>

        {/* Input Form Box */}
        <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 shadow-xl max-w-2xl mx-auto space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center justify-between">
            <span>নতুন লিংক যোগ করুন (Add Facebook Link)</span>
            <span className="text-[11px] text-emerald-400">Instant Redirect</span>
          </h3>

          <form onSubmit={handleAddLink} className="space-y-3">
            <div>
              <label className="text-xs text-neutral-300 block mb-1">ক্যাপশন / শিরোনাম (ঐচ্ছিক)</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="যেমন: নতুন রিলস বা ব্যানার আপডেট..."
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-xs text-neutral-300 block mb-1">ফেসবুক লিংক পেস্ট করুন *</label>
              <input
                type="url"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://www.facebook.com/reel/... বা পোস্টের লিংক"
                className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="flex items-center justify-between pt-1 gap-2 flex-wrap">
              <div className="flex gap-1.5 text-xs">
                {(["Reel", "Video", "Photo", "Post", "Story"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition ${
                      type === t
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition active:scale-95"
              >
                + লিংক সেভ করুন
              </button>
            </div>
          </form>
        </div>

        {/* Media Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-neutral-200">
              সব কনটেন্ট ({filteredPosts.length})
            </h3>
            <span className="text-xs text-neutral-500">ক্লিক করলেই ফেসবুকে খুলবে</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70 transition flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        f
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block leading-none">Digital Pulse BD</span>
                        <span className="text-[10px] text-neutral-500">{post.date}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${post.badgeColor}`}>
                      {post.type}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition">
                    {post.title}
                  </h4>

                  <p className="text-[11px] text-neutral-400 truncate bg-neutral-950 px-2.5 py-1.5 rounded-md border border-neutral-800 font-mono">
                    {post.link}
                  </p>
                </div>

                {/* Direct Facebook Action Button */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition group-hover:shadow-blue-600/20"
                >
                  <span>
                    {post.type === "Reel" && "▶ Watch Reel"}
                    {post.type === "Video" && "▶ Play Video"}
                    {post.type === "Photo" && "🖼 View Photo"}
                    {post.type === "Story" && "⏱ View Story"}
                    {post.type === "Post" && "📄 Open Post"}
                  </span>
                  <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 py-4 text-center text-xs text-neutral-600">
        © 2026 Digital Pulse BD. All rights reserved.
      </footer>
    </main>
  );
}