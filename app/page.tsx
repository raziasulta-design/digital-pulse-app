"use client";

import React, { useState } from "react";

export default function DigitalPulseHome() {
  const [showClients, setShowClients] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const clientCategories = [
    { name: "শিক্ষা প্রতিষ্ঠান", desc: "স্কুল, কলেজ ও মাদ্রাসার ভর্তি ও প্রচার বিজ্ঞাপন", icon: "🎓" },
    { name: "কর্পোরেট ও অফিস", desc: "সরকারি-বেসরকারি প্রতিষ্ঠানের অফিসিয়াল প্রোমো ভিডিও", icon: "🏢" },
    { name: "স্বাস্থ্য ও চিকিৎসা", desc: "হাসপাতাল, ক্লিনিক ও ডক্টরস চেম্বারের ব্র্যান্ডিং", icon: "🏥" },
    { name: "রিয়েল এস্টেট", desc: "ল্যান্ড ও ফ্ল্যাট বাই/সেল প্রমোশন ও ওয়াকথ্রু ভিডিও", icon: "🏡" },
    { name: "ইভেন্ট ও পারিবারিক", desc: "বিয়ে বাড়ি, গায়ে হলুদ ও স্পেশাল ইভেন্ট ভিডিও", icon: "🎉" },
    { name: "প্রচার ও ক্যাম্পেইন", desc: "ধর্মীয় আয়োজন ও রাজনৈতিক প্রচারের ভিডিও-অডিও", icon: "📢" }
  ];

  const serviceCategories = [
    {
      id: 1,
      title: "AI Website, Landing Page & App Build",
      badge: "Tech & AI",
      icon: "💻",
      summary: "রেডি ওয়েবসাইট, হাই-কনভার্টিং ল্যান্ডিং পেজ ও লাইটওয়েট অ্যাপস।",
      items: [
        "মডার্ন রেসপনসিভ ওয়েবসাইট ডিজাইন ও দ্রুত লাইভ লঞ্চ",
        "প্রোডাক্ট ও সার্ভিসের জন্য হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি",
        "Pickaxe ও আধুনিক AI টুল দিয়ে নো-কোড অ্যাপস ও ফর্ম বিল্ড",
        "ইন্টেলিজেন্ট AI Agent ও বিজনেস চ্যাটবট ইন্টিগ্রেশন"
      ]
    },
    {
      id: 2,
      title: "Audio, Video & Animation Creation",
      badge: "Media & Motion",
      icon: "🎬",
      summary: "সোশ্যাল মিডিয়া রিলস, কার্টুন স্টোরি ও মোশন গ্রাফিক্স।",
      items: [
        "TikTok, Reels ও YouTube-এর জন্য হাই-রিটেনশন শর্ট ভিডিও",
        "কাস্টম ২ডি/৩ডি কার্টুন ও ক্যারেক্টার অ্যানিমেশন ভিডিও",
        "ইমেজ-টু-ভিডিও স্লাইডশো ও প্রোডাক্ট প্রোমো অ্যাড",
        "প্রফেশনাল ভয়েস-ওভার সিঙ্ক ও অডিও এনহ্যান্সমেন্ট"
      ]
    },
    {
      id: 3,
      title: "Creative Branding, Print & Merch",
      badge: "Design",
      icon: "🎨",
      summary: "লোগো, ভিজিটিং কার্ড, ব্যানার, বিলবোর্ড ও ইউনিফর্ম ডিজাইন।",
      items: [
        "প্রফেশনাল ইউনিক লোগো ও ব্র্যান্ড আইডেন্টিটি",
        "প্রিন্ট-রেডি বিজনেস কার্ড ও অফিস স্টেশনারি",
        "সোশ্যাল মিডিয়া ব্যানার, ফ্লায়ার ও হাই-রেজোলিউশন বিলবোর্ড",
        "কর্পোরেট ইউনিফর্ম, টি-শার্ট ও মার্চেন্ডাইজ ডিজাইন"
      ]
    },
    {
      id: 4,
      title: "AI E-Book & Digital Content Generation",
      badge: "Publishing",
      icon: "📚",
      summary: "কমপ্লিট ই-বুক রাইটিং, কভার ডিজাইন ও পাবলিশিং লেআউট।",
      items: [
        "AI-সহযোগিতায় প্রফেশনাল ই-বুক কনটেন্ট তৈরি",
        "আকর্ষণীয় বুক কভার ডিজাইন ও PDF লেআউট",
        "ডিজিটাল মার্কেটিং কপি ও সোশ্যাল মিডিয়া পোস্ট প্যাকেজ",
        "ক্রিয়েটিভ ডিজাইন আইডিয়া ও মুড বোর্ড তৈরি"
      ]
    },
    {
      id: 5,
      title: "Advanced Excel & Data Analytics",
      badge: "Business Suite",
      icon: "📊",
      summary: "ডেটা ক্লিনিং, পিভট টেবিল ও অটোমেটেড কেপিআই ড্যাশবোর্ড।",
      items: [
        "জটিল ডেটাসেট ক্লিনিং, ভ্যালিডেশন ও সাজানো",
        "Advanced Formulas (XLOOKUP, Nested IFs, Dynamic Arrays)",
        "অটোমেটেড ইন্টারেক্টিভ KPI ও ম্যানেজমেন্ট সামারি রিপোর্ট",
        "ব্যবসায়িক লাভ-ক্ষতি ও পারফরম্যান্স ভিজ্যুয়ালাইজেশন"
      ]
    },
    {
      id: 6,
      title: "CV & Europass Resume Formatting",
      badge: "Career Ready",
      icon: "📄",
      summary: "ইউরোপীয় স্ট্যান্ডার্ড ও ATS-ফ্রেন্ডলি প্রফেশনাল সিভি মেকিং।",
      items: [
        "ইউরোপীয় জবের জন্য সার্টিফাইড Europass CV ফরম্যাট",
        "মডার্ন এক্সিকিউটিভ ও ফ্রেশার প্রফেশনাল রেজুমে",
        "টার্গেটেড মোটিভেশন / কভার লেটার ড্রাফটিং",
        "আন্তর্জাতিক চাকরির জন্য ATS কি-ওয়ার্ড অপটিমাইজেশন"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Dynamic Background Mesh Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-25 z-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-wider text-emerald-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            DIGITAL PULSE
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#clients-box" className="hover:text-emerald-400 transition">কারা সেবা নিবেন</a>
            <a href="#services-box" className="hover:text-emerald-400 transition">সেবাসমূহ</a>
            <a 
              href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline transition"
            >
              পোর্টফোলিও ডক ↗
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">যোগাযোগ</a>
          </nav>
          <a
            href="https://wa.me/8801568477991"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition"
          >
            WhatsApp Message
          </a>
        </div>
      </header>

      {/* Hero Section with Inspirational Quote & High-tech Banner */}
      <section className="relative z-10 px-6 pt-16 pb-12 max-w-5xl mx-auto text-center">
        {/* Inspirational Quote Card */}
        <div className="mb-8 inline-block p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900/60 to-emerald-950/50 border border-emerald-500/20 shadow-xl backdrop-blur-sm">
          <p className="text-sm sm:text-base font-medium text-emerald-300 italic">
            “পরিশ্রম ও সততা দিয়ে করা কাজই সফলতার মূল চাবিকাঠি—আমরা প্রতিটি কাজে সর্বোচ্চ মান ও নিষ্ঠা নিশ্চিত করি।”
          </p>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          ডিজিটাল সমাধান এখন <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            এক ছাদের নিচে এক ক্লিকে
          </span>
        </h1>

        {/* Summary Card */}
        <div className="mt-6 max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed">
          ✨ <span className="font-semibold text-white">এক নজরে:</span> প্রচার বিজ্ঞাপন, আধুনিক ভিডিও মেকিং, এআই ওয়েবসাইট, ক্রিয়েটিভ ব্র্যান্ডিং ডিজাইন থেকে শুরু করে নিখুঁত এক্সেল ডেটা সমাধান—আপনার সব প্রয়োজনীয় ডিজিটাল সেবা এখন এক প্ল্যাটফর্মেই প্রস্তুত।
        </div>

        {/* Dynamic Showcase Image */}
        <div className="mt-8 relative mx-auto max-w-3xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
            alt="Digital Creative Workspace"
            className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/80 text-white backdrop-blur-md">
              স্মার্ট ডিজাইন ও এআই প্রযুক্তি
            </span>
          </div>
        </div>
      </section>

      {/* BOX 1: কারা সেবা নিবেন (Master Box) */}
      <section id="clients-box" className="relative z-10 px-6 py-8 max-w-5xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">আমরা যাদের জন্য কাজ করি</h2>
            <p className="text-slate-400 text-sm mt-2">যেকোনো উদ্দেশ্য অনুযায়ী স্পেশালাইজড কনটেন্ট ও ক্যাম্পেইন সার্ভিস</p>
            
            {/* Master Button */}
            <button
              onClick={() => setShowClients(!showClients)}
              className="mt-6 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 mx-auto"
            >
              <span>{showClients ? "তালিকা বন্ধ করতে এখানে ক্লিক করুন" : "👉 তালিকা ও বিস্তারিত দেখতে এখানে ক্লিক করুন"}</span>
              <span className="text-base">{showClients ? "▲" : "▼"}</span>
            </button>
          </div>

          {/* Collapsible 6 Cards */}
          {showClients && (
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
              {clientCategories.map((cat, index) => (
                <div key={index} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition flex flex-col justify-between">
                  <div>
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BOX 2: আমাদের সেবাসমূহ (Master Box) */}
      <section id="services-box" className="relative z-10 px-6 py-8 max-w-5xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">আমাদের সেবাসমূহ</h2>
            <p className="text-slate-400 text-sm mt-2">কাজের ধরণ অনুযায়ী ক্যাটাগরি সাজানো হয়েছে</p>

            {/* Master Button */}
            <button
              onClick={() => setShowServices(!showServices)}
              className="mt-6 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 mx-auto"
            >
              <span>{showServices ? "সেবা তালিকা বন্ধ করতে এখানে ক্লিক করুন" : "👉 সেবাসমূহ দেখতে এখানে ক্লিক করুন"}</span>
              <span className="text-base">{showServices ? "▲" : "▼"}</span>
            </button>
          </div>

          {/* Collapsible 6 Service Cards */}
          {showServices && (
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
              {serviceCategories.map((service, index) => {
                const isOpen = activeService === index;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveService(isOpen ? null : index)}
                    className={`p-5 rounded-2xl border transition duration-200 cursor-pointer flex flex-col justify-between ${
                      isOpen
                        ? "bg-slate-950 border-emerald-400 shadow-md shadow-emerald-500/10"
                        : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-xs text-slate-400">{service.summary}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                        <span>{isOpen ? "▲ বিবরণ বন্ধ করুন" : "বিবরণ ও অর্ডার ➔"}</span>
                      </div>

                      {isOpen && (
                        <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2">
                          <p className="text-[11px] font-semibold text-slate-300">সার্ভিস অন্তর্ভুক্ত:</p>
                          <ul className="space-y-1">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start text-xs text-slate-300">
                                <span className="text-emerald-400 mr-2">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://wa.me/8801568477991?text=${encodeURIComponent(
                              `আমি এই সেবাটি সম্পর্কে জানতে ও অর্ডার করতে আগ্রহী: ${service.title}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 inline-block w-full py-2 text-center text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
                          >
                            এই সার্ভিসের জন্য অর্ডার দিন 💬
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative z-10 mt-12 px-6 py-16 border-t border-slate-800 bg-slate-950 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white">আপনার প্রোজেক্ট নিয়ে আলোচনা করুন</h2>
          <p className="text-slate-400 text-sm mt-2 mb-6">
            বাজেট ফ্রেন্ডলি কোটেশন ও দ্রুত ডেলিভারির জন্য সরাসরি কথা বলুন।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
            <a
              href="https://wa.me/8801568477991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              📞 8801568477991 (WhatsApp)
            </a>
            <a
              href="mailto:mastermindai.25@gmail.com"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white transition flex items-center justify-center gap-2"
            >
              ✉️ mastermindai.25@gmail.com
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
            <a
              href="https://www.facebook.com/digitalpulse.media.bd/directory_links" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Digital Pulse Facebook Official Page ↗
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Detailed Service Overview ↗
            </a>
          </div>

          <p className="mt-10 text-xs text-slate-600">
            © 2026 Digital Pulse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}