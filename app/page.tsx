"use client";

import React, { useState } from "react";

export default function DigitalPulseHome() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const clientCategories = [
    { name: "শিক্ষা প্রতিষ্ঠান", desc: "স্কুল, কলেজ ও মাদ্রাসার ভর্তি ও প্রচার বিজ্ঞাপন", icon: "🎓" },
    { name: "কর্পোরেট ও অফিস", desc: "সরকারি-বেসরকারি প্রতিষ্ঠানের অফিসিয়াল প্রোমো ভিডিও", icon: "🏢" },
    { name: "স্বাস্থ্য ও চিকিৎসা", desc: "হাসপাতাল, ক্লিনিক ও ডক্টরস চেম্বারের ব্র্যান্ডিং ও বিজ্ঞাপন", icon: "🏥" },
    { name: "রিয়েল এস্টেট", desc: "ল্যান্ড ও ফ্ল্যাট বাই/সেল প্রমোশন ও ওয়াকথ্রু ভিডিও", icon: "🏡" },
    { name: "ইভেন্ট ও পারিবারিক", desc: "বিয়ে বাড়ি, গায়ে হলুদ ও স্পেশাল ইভেন্ট অডিও-ভিজ্যুয়াল", icon: "🎉" },
    { name: "প্রচার ও ক্যাম্পেইন", desc: "ইসলামিক/ধর্মীয় আয়োজন ও রাজনৈতিক প্রচারের ভিডিও-অডিও", icon: "📢" }
  ];

  const serviceCategories = [
    {
      id: 1,
      title: "AI Website, Landing Page & App Build",
      badge: "Tech & AI",
      icon: "💻",
      summary: "রেডি ওয়েবসাইট, হাই-কনভার্টিং ল্যান্ডিং পেজ ও নো-কোড লাইটওয়েট অ্যাপস।",
      items: [
        "মডার্ন রেসপনসিভ ওয়েবসাইট ডিজাইন ও দ্রুত লাইভ লঞ্চ",
        "প্রোডাক্ট ও সার্ভিসের জন্য হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি",
        "Pickaxe ও আধুনিক AI টুল দিয়ে কাস্টম নো-কোড অ্যাপস ও ফর্ম বিল্ড",
        "ইন্টেলিজেন্ট AI Agent ও বিজনেস চ্যাটবট ইন্টিগ্রেশন"
      ]
    },
    {
      id: 2,
      title: "Audio, Video & Animation Creation",
      badge: "Media & Motion",
      icon: "🎬",
      summary: "সোশ্যাল মিডিয়া রিলস, কার্টুন স্টোরি, প্রোমো বিজ্ঞাপন ও অ্যানিমেশন।",
      items: [
        "TikTok, Reels ও YouTube-এর জন্য হাই-রিটেনশন শর্ট ভিডিও",
        "কাস্টম ২ডি/৩ডি কার্টুন ও ক্যারেক্টার অ্যানিমেশন ভিডিও",
        "ইমেজ-টু-ভিডিও স্লাইডশো ও ডায়নামিক প্রোডাক্ট প্রোমো",
        "প্রফেশনাল ভয়েস-ওভার সিঙ্ক ও AI অডিও এনহ্যান্সমেন্ট"
      ]
    },
    {
      id: 3,
      title: "Creative Branding, Print & Merch",
      badge: "Design",
      icon: "🎨",
      summary: "লোগো, ভিজিটিং কার্ড, ফ্লায়ার, ব্যানার, বিলবোর্ড ও টি-শার্ট ডিজাইন।",
      items: [
        "প্রফেশনাল ইউনিক লোগো ও কমপ্লিট ব্র্যান্ড আইডেন্টিটি",
        "প্রিন্ট-রেডি বিজনেস কার্ড, লেটারহেড ও অফিস স্টেশনারি",
        "সোশ্যাল মিডিয়া ব্যানার, ফ্লায়ার ও হাই-রেজোলিউশন বিলবোর্ড",
        "কর্পোরেট ইউনিফর্ম, টি-শার্ট ও মার্চেন্ডাইজ ডিজাইন"
      ]
    },
    {
      id: 4,
      title: "AI E-Book & Digital Content Generation",
      badge: "Publishing",
      icon: "📚",
      summary: "কমপ্লিট ই-বুক রাইটিং, ফরম্যাটিং ও ডিজিটাল মার্কেটিং অ্যাসেটস।",
      items: [
        "AI-সহযোগিতায় প্রফেশনাল ই-বুক কনটেন্ট রিসার্চ ও রাইটিং",
        "আকর্ষণীয় বুক কভার ডিজাইন ও রিডার-ফ্রেন্ডলি PDF লেআউট",
        "ডিজিটাল মার্কেটিং কপি ও সোশ্যাল মিডিয়া কনটেন্ট প্যাকেজ",
        "ক্রিয়েটিভ ডিজাইন আইডিয়া ও ভিজ্যুয়াল মুড বোর্ড তৈরি"
      ]
    },
    {
      id: 5,
      title: "Advanced Excel & Data Analytics",
      badge: "Business Suite",
      icon: "📊",
      summary: "ডেটা ক্লিনিং, পিভট টেবিল ও অটোমেটেড ড্যাশবোর্ড রিপোর্টিং।",
      items: [
        "জটিল ডেটাসেট ক্লিনিং, ভ্যালিডেশন ও ফরম্যাটিং",
        "Advanced Formulas (XLOOKUP, INDEX/MATCH, Nested IFs)",
        "অটোমেটেড ইন্টারেক্টিভ KPI ও ম্যানেজমেন্ট সামারি ড্যাশবোর্ড",
        "ব্যবসার লাভ-ক্ষতি ও পারফরম্যান্স ভিজ্যুয়াল অ্যানালাইসিস"
      ]
    },
    {
      id: 6,
      title: "CV & Europass Resume Formatting",
      badge: "Career Ready",
      icon: "📄",
      summary: "ইউরোপীয় স্ট্যান্ডার্ড ও ATS-ফ্রেন্ডলি প্রফেশনাল সিভি মেকিং।",
      items: [
        "ইউরোপীয় জব ও স্কলারশিপের জন্য সার্টিফাইড Europass CV ফরম্যাট",
        "দেশি-বিদেশি জবের জন্য মডার্ন এক্সিকিউটিভ ও ফ্রেশার রেজুমে",
        "জব ডেসক্রিপশন অনুযায়ী টার্গেটেড মোটিভেশন / কভার লেটার",
        "আন্তর্জাতিক আবেদনের জন্য ATS কি-ওয়ার্ড অপটিমাইজেশন"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-wider text-emerald-400">
            DIGITAL PULSE
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#clients" className="hover:text-emerald-400 transition">কারা সেবা নিবেন</a>
            <a href="#services" className="hover:text-emerald-400 transition">সেবাসমূহ</a>
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
            className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
          >
            WhatsApp Message
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          আধুনিক ডিজিটাল, এআই ও ডেটা সলিউশন হাব
        </span>
        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          ডিজিটাল সমাধান এক ক্লিকে — <br className="hidden sm:inline" />
          <span className="text-emerald-400">ভিডিও, এআই ওয়েব, ব্র্যান্ডিং ও অ্যানালিটিক্স</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          প্রতিষ্ঠানিক প্রচার, রাজনৈতিক প্রচারণা কিংবা পারসোনাল ক্যারিয়ার—যেকোনো কাজের জন্য আপনার নির্ভরযোগ্য ও দ্রুত পার্টনার।
        </p>
      </section>

      {/* Target Audiences */}
      <section id="clients" className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">আমরা যাদের জন্য কাজ করি</h2>
          <p className="text-slate-400 text-sm mt-2">যেকোনো উদ্দেশ্য অনুযায়ী স্পেশালাইজড কনটেন্ট ও ক্যাম্পেইন সার্ভিস</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clientCategories.map((cat, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Dashboard Services Section */}
      <section id="services" className="px-6 py-16 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">আমাদের সেবাসমূহ</h2>
          <p className="text-slate-400 text-sm mt-2">কাজের ধরণ অনুযায়ী ক্যাটাগরি সাজানো হয়েছে</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service, index) => {
            const isOpen = selectedService === index;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(isOpen ? null : index)}
                className={`p-6 rounded-2xl border transition duration-200 cursor-pointer flex flex-col justify-between ${
                  isOpen
                    ? "bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{service.summary}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/70">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                    <span>
                      {isOpen
                        ? "▲ সেবা তালিকা বন্ধ করুন"
                        : "👉 সেবা সমূহ দেখতে এখানে ক্লিক করুন ⬇"}
                    </span>
                    <span>{isOpen ? "▲" : "➔"}</span>
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-2">
                      <p className="text-[11px] font-semibold text-slate-300">যা যা পাচ্ছেন:</p>
                      <ul className="space-y-1.5">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-300">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3">
                        <a
                          href={`https://wa.me/8801568477991?text=${encodeURIComponent(
                            `Hello, I am interested in your service: ${service.title}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block w-full py-2 text-center text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
                        >
                          এই সেবা নিতে মেসেজ দিন 💬
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-16 border-t border-slate-800 bg-slate-900/40 text-center">
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
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition flex items-center justify-center gap-2"
            >
              📞 8801568477991 (WhatsApp)
            </a>
            <a
              href="mailto:mastermindai.25@gmail.com"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition flex items-center justify-center gap-2"
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