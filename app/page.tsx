'use client';

import React, { useState } from 'react';

export default function Home() {
  const [showClients, setShowClients] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070b14]/85 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/20">
              DP
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg block leading-none">
                DIGITAL PULSE
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">
                Creative & AI Hub
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#clients-box" className="hover:text-cyan-400 transition-colors">
              কারা সেবা নিবেন
            </a>
            <a href="#services-box" className="hover:text-cyan-400 transition-colors">
              সেবাসমূহ
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              লক্ষ্য ও অঙ্গীকার
            </a>
            <a
              href="https://www.facebook.com/digitalpulse.media.bd"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              Facebook ↗
            </a>
          </nav>

          <a
            href="https://wa.me/8801568477991"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-cyan-500/25 active:scale-95"
          >
            WhatsApp Message
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Top Tagline */}
        <div className="max-w-3xl mx-auto mt-8 px-4 text-center">
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs sm:text-sm text-cyan-200 shadow-inner">
            “সততা, সৃজনশীলতা ও প্রযুক্তির নিখুঁত সমন্বয়—আপনার ব্যবসায়িক সাফল্য নিশ্চিত করাই আমাদের মূল লক্ষ্য।”
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-5xl mx-auto px-4 pt-12 pb-10 text-center flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center py-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-normal text-center bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-md leading-tight">
              ডিজিটাল সমাধান এখন এক ক্লিকে
            </h1>
          </div>

          <div className="max-w-3xl mx-auto my-6 p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#0c1529]/80 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)] text-center">
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
              আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI) প্রযুক্তি এবং ক্রিয়েটিভ ডিজাইনের সমন্বয়ে আপনার ব্র্যান্ডকে দিন এক অনন্য রূপ। ভিডিও মেকিং ও ব্র্যান্ডিং থেকে শুরু করে ফুল-স্কেল ডিজিটাল সলিউশন—সবকিছুই পাবেন সর্বোচ্চ পেশাদারিত্বের সাথে।
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              <span className="font-bold text-cyan-400">✨ এক নজরে Digital Pulse:</span>{' '}
              বিজ্ঞাপন, আধুনিক Audio ও ভিডিও মেকিং, ক্রিয়েটিভ ব্র্যান্ডিং ডিজাইন, 2D/3D কার্টুন ও Animation ভিডিও—আপনার সব প্রয়োজনীয় ডিজিটাল সেবা এখন এক প্ল্যাটফর্মেই প্রস্তুত।
            </p>
          </div>
        </section>

        {/* 3. Dropdown Accordion Section: Amra Jader Jonno Kaj Kori */}
        <section id="clients-box" className="max-w-4xl mx-auto px-4 py-6">
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-[#0b1325]/90 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">আমরা যাদের জন্য কাজ করি</h2>
            <p className="text-gray-400 text-sm mb-6">
              যেকোনো উদ্দেশ্য অনুযায়ী স্পেশালাইজড কনটেন্ট ও ক্যাম্পেইন সার্ভিস
            </p>

            <button
              onClick={() => setShowClients(!showClients)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>👉</span>
              <span>{showClients ? 'তালিকা বন্ধ করতে এখানে ক্লিক করুন' : 'তালিকা ও বিস্তারিত দেখতে এখানে ক্লিক করুন'}</span>
              <span className={`transition-transform duration-300 ${showClients ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {showClients && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left transition-all duration-300">
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-bold text-cyan-300 mb-1">শিক্ষা প্রতিষ্ঠান</h3>
                  <p className="text-xs text-gray-400">স্কুল, কলেজ ও মাদ্রাসার ভর্তি ও প্রচার বিজ্ঞাপন</p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">🏢</div>
                  <h3 className="font-bold text-cyan-300 mb-1">কর্পোরেট ও অফিস</h3>
                  <p className="text-xs text-gray-400">সরকারি-বেসরকারি প্রতিষ্ঠানের অফিসিয়াল প্রোমো ভিডিও</p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">🏥</div>
                  <h3 className="font-bold text-cyan-300 mb-1">স্বাস্থ্য ও চিকিৎসা</h3>
                  <p className="text-xs text-gray-400">হাসপাতাল, ক্লিনিক ও ডক্টরস চেম্বারের ব্র্যান্ডিং</p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">🏡</div>
                  <h3 className="font-bold text-cyan-300 mb-1">রিয়েল এস্টেট</h3>
                  <p className="text-xs text-gray-400">ল্যান্ড ও ফ্ল্যাট বাই/সেল প্রমোশন ও ওয়াকথ্রু ভিডিও</p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">🎉</div>
                  <h3 className="font-bold text-cyan-300 mb-1">ইভেন্ট ও পারিবারিক</h3>
                  <p className="text-xs text-gray-400">বিয়ে বাড়ি, গায়ে হলুদ ও স্পেশাল ইভেন্ট ভিডিও</p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="text-2xl mb-2">📢</div>
                  <h3 className="font-bold text-cyan-300 mb-1">প্রচার ও ক্যাম্পেইন</h3>
                  <p className="text-xs text-gray-400">ধর্মীয় আয়োজন ও রাজনৈতিক প্রচারের ভিডিও-অডিও</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. Dropdown Accordion Section: Amader Sevasomuh */}
        <section id="services-box" className="max-w-4xl mx-auto px-4 py-6">
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-[#0b1325]/90 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">আমাদের সেবাসমূহ</h2>
            <p className="text-gray-400 text-sm mb-6">
              কাজের ধরণ অনুযায়ী ক্যাটাগরি সাজানো হয়েছে
            </p>

            <button
              onClick={() => setShowServices(!showServices)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>👉</span>
              <span>{showServices ? 'সেবা তালিকা বন্ধ করতে এখানে ক্লিক করুন' : 'আমাদের সেবাসমূহ দেখতে এখানে ক্লিক করুন'}</span>
              <span className={`transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {showServices && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left transition-all duration-300">
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Tech & AI</span>
                  <h3 className="font-bold text-white mt-2 mb-1">AI Website, Landing Page & App</h3>
                  <p className="text-xs text-gray-400 mb-3">রেডি ওয়েবসাইট, হাই-কনভার্টিং ল্যান্ডিং পেজ ও লাইটওয়েট অ্যাপস।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Media & Motion</span>
                  <h3 className="font-bold text-white mt-2 mb-1">Audio, Video & Animation</h3>
                  <p className="text-xs text-gray-400 mb-3">সোশ্যাল মিডিয়া রিলস, কার্টুন স্টোরি ও মোশন গ্রাফিক্স।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Design</span>
                  <h3 className="font-bold text-white mt-2 mb-1">Creative Branding & Merch</h3>
                  <p className="text-xs text-gray-400 mb-3">লোগো, ভিজিটিং কার্ড, ব্যানার, বিলবোর্ড ও টি-শার্ট ডিজাইন।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Publishing</span>
                  <h3 className="font-bold text-white mt-2 mb-1">AI E-Book & Content</h3>
                  <p className="text-xs text-gray-400 mb-3">কমপ্লিট ই-বুক রাইটিং, কভার ডিজাইন ও পাবলিশিং লেআউট।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Business Suite</span>
                  <h3 className="font-bold text-white mt-2 mb-1">Excel & Data Analytics</h3>
                  <p className="text-xs text-gray-400 mb-3">ডেটা ক্লিনিং, পিভট টেবিল ও অটোমেটেড কেপিআই ড্যাশবোর্ড।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Career Ready</span>
                  <h3 className="font-bold text-white mt-2 mb-1">CV & Resume Formatting</h3>
                  <p className="text-xs text-gray-400 mb-3">ইউরোপীয় স্ট্যান্ডার্ড ও ATS-ফ্রেন্ডলি প্রফেশনাল সিভি মেকিং।</p>
                  <a href="https://wa.me/8801568477991" className="text-xs text-cyan-400 font-semibold hover:underline">বিবরণ ও অর্ডার ➔</a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. Mission & Commitment */}
        <section id="about" className="max-w-4xl mx-auto px-4 py-10">
          <div className="p-8 sm:p-10 rounded-2xl border border-cyan-500/30 bg-[#0c1529]/80 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.12)]">
            <div className="inline-block px-3 py-1 rounded bg-cyan-950 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/30">
              FOUNDER & LEAD STRATEGIST
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
              Digital Pulse-এর লক্ষ্য ও অঙ্গীকার
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI), ক্রিয়েটিভ মিডিয়া প্রোডাকশন এবং প্রিসাইজ ডেটা ম্যানেজমেন্টের সমন্বয়ে আমরা ব্যক্তি ও ব্যবসায়ের জন্য কার্যকর ডিজিটাল উপস্থিতি গড়ে তুলি। প্রতিটি প্রোজেক্টে সর্বোচ্চ নিষ্ঠা, সঠিক সময়সীমা এবং মানসম্মত সমাধান নিশ্চিত করাই আমাদের প্রধান অঙ্গীকার।
            </p>
          </div>
        </section>

        {/* 6. Contact & Action Section */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-gradient-to-b from-[#0e1830] to-[#070b14] text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              আপনার প্রোজেক্ট নিয়ে আলোচনা করুন
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              বাজেট ফ্রেন্ডলি কোটেশন ও দ্রুত ডেলিভারির জন্য সরাসরি কথা বলুন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-sm sm:text-base font-medium">
              <a
                href="https://wa.me/8801568477991"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>📞</span>
                <span>8801568477991 (WhatsApp)</span>
              </a>

              <a
                href="mailto:mastermindai.25@gmail.com"
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>✉️</span>
                <span>mastermindai.25@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10 text-sm">
              <a
                href="https://www.facebook.com/digitalpulse.media.bd"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
              >
                Digital Pulse Facebook Official Page ↗
              </a>
              <span className="text-gray-500">•</span>
              <a
                href="#services-box"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
              >
                Detailed Service Overview ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="border-t border-white/10 py-6 px-4 text-center text-xs text-gray-500">
        <p>© 2026 Digital Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
}