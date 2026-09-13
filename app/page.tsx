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

  const services = [
    {
      title: "Audio, Video & Animation Creation",
      tag: "High Impact",
      summary: "সোশ্যাল মিডিয়া বিজ্ঞাপন, রিলস, কার্টুন ও অ্যানিমেশন ভিডিও।",
      details: "আমরা তৈরি করি প্রফেশনাল শর্ট প্রোমো, কার্টুন স্টোরি, ২ডি/৩ডি ক্যারেক্টার অ্যানিমেশন, ভয়েস-ওভার সিঙ্ক এবং সাউন্ড ডিজাইন যা ফেসবুক ও ইউটিউবে দ্রুত মানুষের নজর কাড়ে।"
    },
    {
      title: "Creative Branding & Print Design",
      tag: "Brand Identity",
      summary: "লোগো, ভিজিটিং কার্ড, ব্যানার, ফ্লায়ার ও বিলবোর্ড ডিজাইন।",
      details: "ডিজিটাল সোশ্যাল মিডিয়া পোস্টার থেকে শুরু করে প্রিন্ট-রেডি হাই-রেজোলিউশন বিলবোর্ড, কর্পোরেট টি-শার্ট ও ইউনিফর্ম ডিজাইন—আপনার ব্র্যান্ডকে প্রফেশনাল লুক দিতে শতভাগ প্রিন্ট কোয়ালিটি নিশ্চিত করি।"
    },
    {
      title: "Advanced Excel & Data Analytics",
      tag: "Business Efficiency",
      summary: "ডেটা ক্লিনিং, পিভট টেবিল ও অটোমেটেড কেপিআই ড্যাশবোর্ড।",
      details: "ব্যবসার জটিল হিসাব-নিকাশ সহজ করতে ডায়নামিক এক্সেল ড্যাশবোর্ড, পিভট টেবিল, অটোমেটেড সামারি রিপোর্ট ও ম্যানেজমেন্ট ইনসাইট তৈরি।"
    },
    {
      title: "CV & Europass Resume Formatting",
      tag: "Career Ready",
      summary: "ইউরোপীয় স্ট্যান্ডার্ড ও ATS-ফ্রেন্ডলি প্রফেশনাল সিভি।",
      details: "ইউরোপের জব ও স্কলারশিপের জন্য সার্টিফাইড Europass CV ফরম্যাটিং, এক্সিকিউটিভ কভার লেটার ও লিঙ্কডইন অপটিমাইজেশন।"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-wider text-emerald-400">
            DIGITAL PULSE
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#clients" className="hover:text-emerald-400 transition">কারা সেবা নিবেন</a>
            <a href="#services" className="hover:text-emerald-400 transition">সার্ভিসসমূহ</a>
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

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          প্রফেশনাল ডিজিটাল মিডিয়া ও ব্র্যান্ডিং সলিউশন
        </span>
        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          আপনার প্রতিষ্ঠান ও প্রচারের জন্য আধুনিক <br className="hidden sm:inline" />
          <span className="text-emerald-400">ভিডিও, ডিজাইন ও ডেটা সমাধান</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          প্রতিষ্ঠানিক প্রচার, রাজনৈতিক ক্যাম্পেইন কিংবা পারসোনাল ব্র্যান্ডিং—আপনার প্রয়োজন অনুযায়ী বাজেট-বান্ধব এবং মানসম্মত সেবা।
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://gemini.google.com/share/7be544ff547c?skid=6177ea94-e945-4e0c-ab1a-7ee7a6f8764f"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold text-white transition"
          >
            সার্ভিস ল্যান্ডিং পেজ / ডক দেখুন ↗
          </a>
        </div>
      </section>

      {/* Target Audiences / Client Categories */}
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

      {/* Services Section with Interactive Details */}
      <section id="services" className="px-6 py-16 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">আমাদের প্রধান সেবাসমূহ</h2>
          <p className="text-slate-400 text-sm mt-2">বিস্তারিত জানতে যেকোনো সার্ভিসের ওপর ক্লিক করুন</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(selectedService === idx ? null : idx)}
              className={`p-6 rounded-2xl border transition cursor-pointer ${
                selectedService === idx
                  ? "bg-slate-800/80 border-emerald-500"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-emerald-400">
                  {item.tag}
                </span>
                <span className="text-xs text-slate-500">
                  {selectedService === idx ? "সংক্ষিপ্ত করুন ▲" : "বিস্তারিত জানুন ▼"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{item.summary}</p>

              {selectedService === idx && (
                <div className="mt-4 pt-4 border-t border-slate-700/60 text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg">
                  {item.details}
                  <div className="mt-3 font-semibold text-emerald-400">
                    💡 বাজেট: প্রোজেক্টের দৈর্ঘ্য ও ডিজাইন অনুযায়ী কাস্টমাইজড কোটেশন প্রদান করা হয়।
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="px-6 py-16 border-t border-slate-800 bg-slate-900/40 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white">আপনার প্রোজেক্ট নিয়ে কথা বলুন</h2>
          <p className="text-slate-400 text-sm mt-2 mb-6">
            বাজেট ফ্রেন্ডলি প্রাইস ও দ্রুত ডেলিভারির জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।
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