import React from "react";

export default function HomePage() {
  const serviceCategories = [
    {
      title: "Social Media & Dynamic Video",
      desc: "উচ্চ এনগেজমেন্টের জন্য আধুনিক ভিডিও কনটেন্ট ও মোশন ডিজাইন।",
      badge: "Popular",
      items: [
        "Reels, TikTok & Short-form Promo Videos",
        "Image-to-Video Slideshows & Dynamic Ads",
        "Custom 2D/3D Cartoon & Animation Story Videos",
        "Professional Audio & AI Voiceover Syncing",
      ],
    },
    {
      title: "Creative Design & Print Branding",
      desc: "অনলাইন এবং অফলাইন উভয় প্ল্যাটফর্মের জন্য ইউনিক ও প্রফেশনাল ব্র্যান্ডিং।",
      badge: "High Demand",
      items: [
        "Professional Logo & Brand Identity",
        "Visiting Cards / Business Cards & Letterheads",
        "Flyers, Brochures, Banners & Billboard Designs",
        "Custom T-shirt & Corporate Uniform/Merchandise Design",
      ],
    },
    {
      title: "Advanced Excel & Data Analytics",
      desc: "জটিল ডেটাকে সহজে সিদ্ধান্ত নেওয়ার মতো ভিজ্যুয়াল রিপোর্টে রূপান্তর।",
      badge: "Business",
      items: [
        "Data Cleaning, Formatting & Deduplication",
        "Pivot Tables, XLOOKUP, Nested Formulas",
        "Interactive KPI Dashboards & Performance Visuals",
        "Automated Summary Reporting & Management Insights",
      ],
    },
    {
      title: "CV & Professional Career Assets",
      desc: "আন্তর্জাতিক স্ট্যান্ডার্ড ও ATS-ফ্রেন্ডলি জব অ্যাপ্লিকেশন প্যাকেজ।",
      badge: "Global",
      items: [
        "Europe Specially: Certified Europass CV Formatting",
        "Modern Executive CVs for All Professions",
        "Targeted Motivation Letters & Cover Letters",
        "LinkedIn Profile Optimization",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Available for Freelance & Contract Projects
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
          Creative Design, Media &{" "}
          <span className="text-emerald-400">Smart Data Solutions</span>
        </h1>
        <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          ব্যবসা প্রতিষ্ঠান, কনটেন্ট ক্রিয়েটর ও পেশাজীবীদের জন্য আধুনিক গ্রাফিক্স,
          হাই-রিটেনশন ভিডিও এবং নিখুঁত এক্সেল ডেটা সলিউশন।
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-slate-300"
                    >
                      <span className="text-emerald-400 mr-2.5 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Future Scope: Data Operations & REDCap Pipeline (Hidden for Future Scaling)
            =============================================================================
            <div className="mt-12 p-8 rounded-2xl bg-slate-900 border border-dashed border-slate-700">
              <h3 className="text-xl font-bold">Data Operations & Electronic Data Capture</h3>
              <p className="text-sm text-slate-400">SQL Server administration, REDCap workflows, multi-tier QC pipelines.</p>
            </div>
            ============================================================================= */}
      </section>
    </main>
  );
}