import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070b14]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Branding */}
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              সেবাসমূহ
            </a>
            <a href="#trust" className="hover:text-cyan-400 transition-colors">
              কেন আমরা?
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              লক্ষ্য ও অঙ্গীকার
            </a>
            <a
              href="https://docs.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              পোর্টফোলিও ডক ↗
            </a>
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-cyan-500/25 active:scale-95"
          >
            WhatsApp Message
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Top Banner Quote */}
        <div className="max-w-3xl mx-auto mt-10 px-4 text-center">
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs sm:text-sm text-cyan-200 shadow-inner">
            “সততা, সৃজনশীলতা ও প্রযুক্তির নিখুঁত সমন্বয়—আপনার ব্যবসায়িক সাফল্য নিশ্চিত করাই আমাদের মূল লক্ষ্য।”
          </div>
        </div>

        {/* 3. Hero Section */}
        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            ডিজিটাল সমাধান এখন এক ক্লিকে
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-light">
            আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI) প্রযুক্তি এবং ক্রিয়েটিভ ডিজাইনের সমন্বয়ে আপনার ব্র্যান্ডকে দিন এক অনন্য রূপ। ভিডিও মেকিং ও ব্র্যান্ডিং থেকে শুরু করে ফুল-স্কেল ডিজিটাল সলিউশন—সবকিছুই পাবেন সর্বোচ্চ পেশাদারিত্বের সাথে।
          </p>

          {/* Highlights Box */}
          <div className="max-w-3xl mx-auto mb-10 p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm shadow-xl">
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              <span className="font-bold text-cyan-400">✨ এক নজরে Digital Pulse:</span>{' '}
              বিজ্ঞাপন, আধুনিক Audio ও ভিডিও মেকিং, ক্রিয়েটিভ ব্র্যান্ডিং ডিজাইন, 2D/3D কার্টুন ও Animation ভিডিও—আপনার সব প্রয়োজনীয় ডিজিটাল সেবা এখন এক প্ল্যাটফর্মেই প্রস্তুত।
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
            >
              সার্ভিস ল্যান্ডিং পেজ / ডক দেখুন ↗
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              সরাসরি যোগাযোগ করুন
            </a>
          </div>
        </section>

        {/* 4. Why Clients Trust Us (Trust & Reliability Badges) */}
        <section id="trust" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">কেন ক্লায়েন্টরা আমাদের ওপর ভরসা রাখেন?</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              আমরা কেবল সেবা প্রদান করি না, ক্লায়েন্টের প্রতিটি বিনিয়োগের পূর্ণ মূল্য ও ব্যবসায়িক রিটার্ন নিশ্চিত করি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-cyan-300">১০০% কোয়ালিটি গ্যারান্টি</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                প্রতিটি কাজ ড্রাফট থেকে ফাইনাল ডেলিভারি পর্যন্ত নিখুঁতভাবে রিভিশন ও প্রুফরিড করে সরবরাহ করা হয়।
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 transition-all">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-lg mb-2 text-cyan-300">অন-টাইম ডেলিভারি</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                ব্যবসায়ে সময়ের মূল্য সবচেয়ে বেশি। আমরা প্রতিজ্ঞাবদ্ধ নির্দিষ্ট ডেডলাইনের ভেতর প্রজেক্ট ডেলিভারি দিতে।
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 transition-all">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-lg mb-2 text-cyan-300">আধুনিক AI প্রযুক্তি</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                সর্বাধুনিক কৃত্রিম বুদ্ধিমত্তা ও ক্রিয়েটিভ হিউম্যান ডিজাইনের মেলবন্ধনে বাজেট-ফ্রেন্ডলি সেরা কাজ।
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2 text-cyan-300">সার্বক্ষণিক সাপোর্ট</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                সহজ যোগাযোগ, দ্রুত রেসপন্স এবং ক্লায়েন্টের শতভাগ সন্তুষ্টি নিশ্চিত না হওয়া পর্যন্ত সাপোর্ট।
              </p>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">আমাদের বিশেষায়িত সেবাসমূহ</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              আপনার ব্যবসার শুরু থেকে প্রমোশন পর্যন্ত যা যা প্রয়োজন, সবই প্রস্তুত রয়েছে আমাদের কাছে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
              <div className="text-cyan-400 font-bold text-xl mb-4 flex items-center gap-2">
                <span>🎨</span> ক্রিয়েটিভ গ্রাফিক্স ও প্রিন্ট ডিজাইন
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                আপনার ব্যবসায়ের নিজস্ব ব্র্যান্ড ভ্যালু তৈরিতে প্রফেশনাল ও নজরকাড়া ডিজাইন সমাধান।
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> ইউনিক লোগো ও ব্র্যান্ড আইডেন্টিটি
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> ভিজিটিং কার্ড (Visiting Card) ডিজাইন
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> ব্যানার, পোস্টার ও বিলবোর্ড ডিজাইন
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> মার্কেটিং ফ্লায়ার (Flyer) ও টি-শার্ট ডিজাইন
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
              <div className="text-cyan-400 font-bold text-xl mb-4 flex items-center gap-2">
                <span>🎬</span> অডিও, ভিডিও মেকিং ও অ্যানিমেশন
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                সোশ্যাল মিডিয়া ও ডিজিটাল বিজ্ঞাপনের জন্য হাই-কোয়ালিটি ভিডিও ও অ্যানিমেশন প্রোডাকশন।
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> কমার্শিয়াল ও সোশ্যাল মিডিয়া বিজ্ঞাপন ভিডিও
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> স্টুডিও-কোয়ালিটি আধুনিক Audio ও ভয়েসওভার
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> 2D / 3D Cartoon ও অ্যানিমেশন ভিডিও
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> সোশ্যাল মিডিয়া রিলস ও শর্টস কনটেন্ট
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Mission & Commitment */}
        <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-transparent">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white">
              Digital Pulse-এর লক্ষ্য ও অঙ্গীকার
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              “আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI), ক্রিয়েটিভ মিডিয়া প্রোডাকশন এবং প্রিসাইজ টেকনোলজির সমন্বয়ে আমরা ব্যক্তি ও ব্যবসায়ের জন্য কার্যকর ডিজিটাল উপস্থিতি গড়ে তুলি। প্রতিটি প্রোজেক্টে সর্বোচ্চ নিষ্ঠা, সঠিক সময়সীমা এবং আন্তর্জাতিক মানের সেবা প্রদান করাই আমাদের প্রধান অঙ্গীকার।”
            </p>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Digital Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
}