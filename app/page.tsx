"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  priceEstimate: number;
  deliveryTime: string;
  description: string;
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "meta-ads",
    title: "Meta Ads & Social Growth",
    category: "Marketing",
    priceEstimate: 5000,
    deliveryTime: "২-৪ দিন",
    description: "টার্গেটেড ফেসবুক ও ইনস্টাগ্রাম ক্যাম্পেইন সেটআপ, অডিয়েন্স রিসার্চ এবং রিলস অ্যাড অপটিমাইজেশন।",
    deliverables: ["অ্যাডস সেটআপ & অডিট", "হাই-কনভার্টিং কপিরাইটিং", "উইকলি পারফরম্যান্স রিপোর্ট"]
  },
  {
    id: "ai-video",
    title: "AI Video & 3D Motion Intro",
    category: "Creative",
    priceEstimate: 3500,
    deliveryTime: "২৪-৪৮ ঘণ্টা",
    description: "সোশ্যাল মিডিয়ার জন্য আধুনিক এআই ভয়েসওভার, অ্যানিমেশন স্ক্রিপ্ট ও প্রমোশনাল মোশন গ্রাফিক্স।",
    deliverables: ["Full HD রিলস/ভিডিও", "কাস্টম ভয়েসওভার", "৩টি রিভিশন"]
  },
  {
    id: "brand-identity",
    title: "Corporate Brand Identity & UI",
    category: "Design",
    priceEstimate: 6000,
    deliveryTime: "৩-৫ দিন",
    description: "লোগো ডিজাইন, ভিজিটিং কার্ড, ব্র্যান্ড ব্যানার ও সোশ্যাল মিডিয়া কিট ডিজাইন।",
    deliverables: ["ভেক্টর সোর্স ফাইল", "মার্কেটিং ফ্লায়ার ও ব্যানার", "সোশ্যাল মিডিয়া টেমপ্লেট"]
  },
  {
    id: "data-ops",
    title: "Data Operations & Architecture",
    category: "Technology",
    priceEstimate: 8000,
    deliveryTime: "৫-৭ দিন",
    description: "এসকিউএল ডেটাবেজ কনফিগারেশন, ক্লিন ডাটা এন্ট্রি ভ্যালিডেশন এবং অটোমেশন পাইপলাইন।",
    deliverables: ["ডাটাবেজ স্কিমা ডিজাইন", "ভ্যালিডেশন স্ক্রিপ্ট", "অটোমেটেড ডেটা ব্যাকআপ"]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"services" | "calculator" | "submit">("services");
  
  // ক্যালকুলেটর স্টেট
  const [selectedServiceId, setSelectedServiceId] = useState<string>("meta-ads");
  const [isRushOrder, setIsRushOrder] = useState<boolean>(false);
  const [includeSourceFiles, setIncludeSourceFiles] = useState<boolean>(false);

  // ফর্ম সাবমিশন স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Meta Ads & Social Growth",
    requirements: ""
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  // ক্যালকুলেটর হিসাব
  const currentService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const calculatedTotal =
    currentService.priceEstimate +
    (isRushOrder ? 1500 : 0) +
    (includeSourceFiles ? 1000 : 0);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Meta Ads & Social Growth",
        requirements: ""
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans antialiased">
      {/* Top Header */}
      <header className="border-b border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/20">
              DP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-base">Digital Pulse</span>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-medium">
                  Client Hub
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">Digital Solutions & Operations Portal</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === "services"
                  ? "bg-blue-600 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              সার্ভিস সমূহ
            </button>
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === "calculator"
                  ? "bg-blue-600 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              বাজেট ক্যালকুলেটর
            </button>
            <button
              onClick={() => setActiveTab("submit")}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === "submit"
                  ? "bg-blue-600 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              রিকোয়েস্ট পাঠান
            </button>
          </div>

          {/* External Clean Action Button */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/60 px-3 py-1.5 rounded-lg transition"
          >
            <span>ফেসবুক পেজ ভিজিট</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 w-full flex-1">
        {/* TAB 1: SERVICES LISTING */}
        {activeTab === "services" && (
          <div>
            <div className="mb-8 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                ডিজিটাল ও বিজনেস সলিউশনস
              </h1>
              <p className="text-sm text-neutral-400 mt-1">
                আপনার ব্যবসাকে গ্রোথ ও প্রফেশনাল রূপ দিতে আমাদের নির্ধারিত সার্ভিস প্যাকেজসমূহ।
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", "Marketing", "Creative", "Design", "Technology"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    selectedCategory === cat
                      ? "bg-blue-600/20 border-blue-500/60 text-blue-400 font-semibold"
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  {cat === "All" ? "সবগুলো সার্ভিস" : cat}
                </button>
              ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-neutral-900/70 border border-neutral-800/90 rounded-2xl p-5 hover:border-neutral-700 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-950/60 border border-blue-900/60 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        ⏱ ডেলিভারি: {service.deliveryTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      <p className="text-[11px] font-semibold text-neutral-300">কী কী পাচ্ছেন:</p>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                          <span className="text-emerald-400 text-xs">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-medium">শুরু মাত্র</span>
                      <span className="text-base font-bold text-white">৳ {service.priceEstimate.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        setActiveTab("calculator");
                      }}
                      className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-xl transition shadow-sm"
                    >
                      বাজেট যাচাই করুন
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ESTIMATOR / CALCULATOR */}
        {activeTab === "calculator" && (
          <div className="max-w-xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-1">প্রজেক্ট বাজেট ক্যালকুলেটর</h2>
            <p className="text-xs text-neutral-400 mb-6">
              আপনার প্রয়োজনীয় সার্ভিস ও অপশন সিলেক্ট করে সরাসরি আনুমানিক খরচ বের করুন।
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1.5">সার্ভিস নির্বাচন করুন</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} (বেস প্রাইজ: ৳ {s.priceEstimate})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isRushOrder}
                      onChange={(e) => setIsRushOrder(e.target.checked)}
                      className="rounded bg-neutral-900 border-neutral-700 text-blue-600 focus:ring-0"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">দ্রুত ডেলিভারি (Rush Order)</span>
                      <span className="text-[11px] text-neutral-400">সাধারণ সময়ের অর্ধেক সময়ে ডেলিভারি</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400">+ ৳ ১,৫০০</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSourceFiles}
                      onChange={(e) => setIncludeSourceFiles(e.target.checked)}
                      className="rounded bg-neutral-900 border-neutral-700 text-blue-600 focus:ring-0"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">সম্পূর্ণ র' ও সোর্স ফাইল (Source Files)</span>
                      <span className="text-[11px] text-neutral-400">এডিটেবল ভেক্টর, ডাটাবেজ ব্যাকআপ বা প্রজেক্ট কোড</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400">+ ৳ ১,০০০</span>
                </label>
              </div>

              {/* Total Calculation Card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-950/40 to-neutral-950 border border-blue-900/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-blue-300 uppercase font-semibold tracking-wider block">
                    মোট আনুমানিক বাজেট
                  </span>
                  <span className="text-2xl font-black text-white">৳ {calculatedTotal.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    setFormData({ ...formData, service: currentService.title });
                    setActiveTab("submit");
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
                >
                  এই বাজেটে অর্ডার পাঠান →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECT BRIEF / SUBMISSION */}
        {activeTab === "submit" && (
          <div className="max-w-lg mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-1">প্রজেক্ট রিকোয়েস্ট পাঠান</h2>
            <p className="text-xs text-neutral-400 mb-6">
              আপনার কাজের বিবরণ লিখে সাবমিট করুন। আমাদের টিম সরাসরি আপনার সাথে যোগাযোগ করবে।
            </p>

            {submitted ? (
              <div className="p-6 text-center bg-emerald-950/40 border border-emerald-800/60 rounded-xl">
                <span className="text-3xl block mb-2">🎉</span>
                <h4 className="text-sm font-bold text-white mb-1">রিকোয়েস্ট সফলভাবে গৃহীত হয়েছে!</h4>
                <p className="text-xs text-emerald-300">
                  Digital Pulse টিম দ্রুত আপনার ফোন বা ইমেইলে যোগাযোগ করবে।
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">আপনার নাম *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="আপনার পুরো নাম লিখুন"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">ইমেইল *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">মোবাইল / হোয়াটসঅ্যাপ *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">সার্ভিস ক্যাটাগরি</label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">কাজের সংক্ষিপ্ত বিবরণ (Brief)</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="আপনার ব্যবসা বা প্রজেক্ট সম্পর্কে কী কী চাচ্ছেন সংক্ষেপে লিখুন..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-lg shadow-blue-600/20"
                >
                  রিকোয়েস্ট সাবমিট করুন
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Unified Footer */}
      <footer className="w-full border-t border-neutral-800/80 bg-neutral-950/80 py-4 text-center text-xs text-neutral-500">
        <p>© 2026 Digital Pulse (digitalpulse.studio). All rights reserved.</p>
      </footer>
    </main>
  );
}