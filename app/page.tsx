"use client";

import React, { useState } from "react";

// Digital Pulse Authentic 3D Ribbon & Golden Typography Emblem
function BrandLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-[0_0_15px_rgba(234,179,8,0.45)]">
        <defs>
          {/* Metallic Gold Gradient for Ring & Typography */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="25%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#ca8a04" />
            <stop offset="75%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>

          {/* Left Ribbon (Magenta to Deep Blue) */}
          <linearGradient id="leftLoop" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="85%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Right Ribbon (Cyan to Violet Loop) */}
          <linearGradient id="rightLoop" x1="80%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="35%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>

          {/* Center Fold Shadow for 3D Depth */}
          <linearGradient id="innerShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Metallic Ring */}
        <circle cx="130" cy="130" r="118" fill="#ffffff" stroke="url(#goldMetallic)" strokeWidth="10" />
        <circle cx="130" cy="130" r="110" fill="none" stroke="#ca8a04" strokeWidth="1.5" opacity="0.5" />

        {/* 3D Infinity Ribbon (Exact Stylized DP Shape) */}
        <g transform="translate(15, 8)">
          {/* Back cyan curve */}
          <path
            d="M 115 58 C 145 32 178 50 178 82 C 178 114 146 128 115 98"
            fill="none"
            stroke="url(#rightLoop)"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Front magenta/purple loop */}
          <path
            d="M 115 98 C 85 128 52 118 52 82 C 52 48 85 34 115 62"
            fill="none"
            stroke="url(#leftLoop)"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Interlocking Overlap & Lower Stem */}
          <path
            d="M 52 82 V 126 C 52 144 72 152 92 140 C 108 130 115 112 115 95"
            fill="none"
            stroke="url(#leftLoop)"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 3D Depth Shadow overlay */}
          <path
            d="M 102 70 C 110 78 116 88 116 98"
            fill="none"
            stroke="url(#innerShadow)"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </g>

        {/* Crisp Golden Typography (Matching Original Font & Letter Spacing) */}
        <text
          x="130"
          y="188"
          textAnchor="middle"
          fill="url(#goldMetallic)"
          fontSize="23"
          fontWeight="900"
          letterSpacing="4"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          DIGITAL
        </text>
        <text
          x="130"
          y="214"
          textAnchor="middle"
          fill="url(#goldMetallic)"
          fontSize="20"
          fontWeight="900"
          letterSpacing="6"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          PULSE
        </text>
      </svg>
    </div>
  );
}

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
    <main className="relative min-h-screen bg-[#060b13] text-slate-100 font-sans overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/25 blur-[120px] rounded-full"></div>
        <div className="absolute top-[45%] -left-40 w-[500px] h-[500px] bg-cyan-600/15 blur-[140px] rounded-full"></div>
        <div className="absolute top-[70%] -right-40 w-[600px] h-[500px] bg-blue-700/20 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#060b13]/90 backdrop-blur-xl border-b border-cyan-900/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo className="w-14 h-14" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                DIGITAL PULSE
              </span>
              <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">
                Creative & AI Hub
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm font-black text-slate-200">
            <a href="#clients-box" className="hover:text-cyan-400 transition">কারা সেবা নিবেন</a>
            <a href="#services-box" className="hover:text-cyan-400 transition">সেবাসমূহ</a>
            <a href="#about" className="hover:text-cyan-400 transition">পরিচিতি</a>
            <a 
              href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline transition"
            >
              পোর্টফোলিও ডক ↗
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">যোগাযোগ</a>
          </nav>
          
          <a
            href="https://wa.me/8801568477991"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-black tracking-wide rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition transform active:scale-95"
          >
            WhatsApp Message
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-14 pb-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-block p-5 sm:p-6 rounded-2xl bg-[#09111e]/90 border border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-xl">
          <p className="text-sm sm:text-base font-black text-white italic tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            “পরিশ্রম ও সততা দিয়ে করা কাজই সফলতার মূল চাবিকাঠি—আমরা প্রতিটি কাজে সর্বোচ্চ মান ও নিষ্ঠা নিশ্চিত করি।”
          </p>
        </div>

        <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
          ডিজিটাল সমাধান এখন <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
            এক ছাদের নিচে এক ক্লিকে
          </span>
        </h1>

        <div className="mt-6 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#09111e]/90 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-xl text-white text-sm sm:text-base font-bold leading-relaxed">
          <span className="text-cyan-300 font-black text-base mr-1">✨ এক নজরে:</span> প্রচার বিজ্ঞাপন, আধুনিক ভিডিও মেকিং, এআই ওয়েবসাইট, ক্রিয়েটিভ ব্র্যান্ডিং ডিজাইন থেকে শুরু করে নিখুঁত এক্সেল ডেটা সমাধান—আপনার সব প্রয়োজনীয় ডিজিটাল সেবা এখন এক প্ল্যাটফর্মেই প্রস্তুত।
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition transform active:scale-95"
          >
            সার্ভিস ল্যান্ডিং পেজ / ডক দেখুন ↗
          </a>
        </div>

        <div className="mt-10 relative mx-auto max-w-3xl rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.15)] group">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
            alt="Digital Creative Workspace"
            className="w-full h-52 sm:h-72 object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-[#060b13]/40 to-transparent flex items-end p-6">
            <span className="text-xs font-black px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg backdrop-blur-md">
              স্মার্ট ডিজাইন ও এআই প্রযুক্তি
            </span>
          </div>
        </div>
      </section>

      {/* BOX 1: কারা সেবা নিবেন */}
      <section id="clients-box" className="relative z-10 px-6 py-6 max-w-5xl mx-auto">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#0b1322]/95 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">আমরা যাদের জন্য কাজ করি</h2>
            <p className="text-slate-300 text-sm font-bold mt-2">যেকোনো উদ্দেশ্য অনুযায়ী স্পেশালাইজড কনটেন্ট ও ক্যাম্পেইন সার্ভিস</p>
            
            <button
              onClick={() => setShowClients(!showClients)}
              className="mt-6 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              <span>{showClients ? "তালিকা বন্ধ করতে এখানে ক্লিক করুন" : "👉 তালিকা ও বিস্তারিত দেখতে এখানে ক্লিক করুন"}</span>
              <span className="text-base font-black">{showClients ? "▲" : "▼"}</span>
            </button>
          </div>

          {showClients && (
            <div className="mt-8 pt-8 border-t border-cyan-900/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
              {clientCategories.map((cat, index) => (
                <div key={index} className="p-5 rounded-2xl bg-[#09111e]/90 border border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-base font-black text-white">{cat.name}</h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">{cat.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BOX 2: আমাদের সেবাসমূহ */}
      <section id="services-box" className="relative z-10 px-6 py-6 max-w-5xl mx-auto">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#0b1322]/95 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">আমাদের সেবাসমূহ</h2>
            <p className="text-slate-300 text-sm font-bold mt-2">কাজের ধরণ অনুযায়ী ক্যাটাগরি সাজানো হয়েছে</p>

            <button
              onClick={() => setShowServices(!showServices)}
              className="mt-6 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              <span>{showServices ? "সেবা তালিকা বন্ধ করতে এখানে ক্লিক করুন" : "👉 সেবাসমূহ দেখতে এখানে ক্লিক করুন"}</span>
              <span className="text-base font-black">{showServices ? "▲" : "▼"}</span>
            </button>
          </div>

          {showServices && (
            <div className="mt-8 pt-8 border-t border-blue-900/40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
              {serviceCategories.map((service, index) => {
                const isOpen = activeService === index;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveService(isOpen ? null : index)}
                    className={`p-5 rounded-2xl border transition duration-300 cursor-pointer flex flex-col justify-between ${
                      isOpen
                        ? "bg-[#0c182c] border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                        : "bg-[#09111e]/90 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <span className="text-[11px] font-black px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-white mb-1">{service.title}</h3>
                      <p className="text-xs text-slate-300 font-medium">{service.summary}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs font-black text-cyan-400">
                        <span>{isOpen ? "▲ বিবরণ বন্ধ করুন" : "বিবরণ ও অর্ডার ➔"}</span>
                      </div>

                      {isOpen && (
                        <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                          <p className="text-[11px] font-black text-cyan-200">সার্ভিস অন্তর্ভুক্ত:</p>
                          <ul className="space-y-1">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start text-xs text-slate-200 font-medium">
                                <span className="text-cyan-400 mr-2 font-black">✔</span>
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
                            className="mt-3 inline-block w-full py-2.5 text-center text-xs font-black rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-cyan-500/30 transition"
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

      {/* FOUNDER SECTION (Clean Glowing Bluish Box with Accurate DP Emblem) */}
      <section id="about" className="relative z-10 px-6 py-6 max-w-5xl mx-auto">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#0b1322]/95 border border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.2)] backdrop-blur-xl flex flex-col md:flex-row items-center gap-6">
          <BrandLogo className="w-24 h-24 sm:w-28 sm:h-28" />
          <div className="text-center md:text-left flex-1">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950 border border-cyan-400/50 text-xs font-black text-cyan-300 uppercase tracking-widest mb-2 shadow-sm">
              Founder & Lead Strategist
            </div>
            <h3 className="text-2xl font-black text-white tracking-wide drop-shadow-md">Digital Pulse-এর লক্ষ্য ও অঙ্গীকার</h3>
            <p className="mt-3 text-sm sm:text-base text-white font-bold leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI), ক্রিয়েটিভ মিডিয়া প্রোডাকশন এবং প্রিসাইজ ডেটা ম্যানেজমেন্টের সমন্বয়ে আমরা ব্যক্তি ও ব্যবসায়ের জন্য কার্যকর ডিজিটাল উপস্থিতি গড়ে তুলি। প্রতিটি প্রোজেক্টে সর্বোচ্চ নিষ্ঠা, সঠিক সময়সীমা এবং মানসম্মত সমাধান নিশ্চিত করাই আমাদের প্রধান অঙ্গীকার।
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative z-10 mt-12 px-6 py-16 border-t border-cyan-950/40 bg-[#04080e]/95 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-white">আপনার প্রোজেক্ট নিয়ে আলোচনা করুন</h2>
          <p className="text-slate-300 text-sm font-bold mt-2 mb-6">
            বাজেট ফ্রেন্ডলি কোটেশন ও দ্রুত ডেলিভারির জন্য সরাসরি কথা বলুন।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
            <a
              href="https://wa.me/8801568477991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              📞 8801568477991 (WhatsApp)
            </a>
            <a
              href="mailto:mastermindai.25@gmail.com"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold transition flex items-center justify-center gap-2 shadow-md"
            >
              ✉️ mastermindai.25@gmail.com
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold">
            <a
              href="https://www.facebook.com/digitalpulse.media.bd/directory_links" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Digital Pulse Facebook Official Page ↗
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-300 transition"
            >
              Detailed Service Overview ↗
            </a>
          </div>

          <p className="mt-10 text-xs font-medium text-slate-500">
            © 2026 Digital Pulse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 