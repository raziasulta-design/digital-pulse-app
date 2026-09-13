"use client";

import React, { useState } from "react";

// Digital Pulse Authentic Logo (Using the exact Base64 provided)
const ORIGINAL_LOGO = "data:image/jpeg;base64,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";

function BrandLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-full bg-white p-0.5 border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)] overflow-hidden ${className}`}>
      <img
        src={ORIGINAL_LOGO}
        alt="Digital Pulse Official Logo"
        className="w-full h-full object-contain"
      />
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

      {/* Header with Exact Original Logo */}
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

      {/* FOUNDER SECTION (With Exact Matching Logo) */}
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