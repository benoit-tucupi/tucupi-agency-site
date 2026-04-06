"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section id="temoignages" className="section-padding px-6 bg-[#0d1f15]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            {tm.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            {tm.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {tm.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tm.items.map((item) => (
            <div
              key={item.name}
              className="bg-[#1a3527] rounded-2xl p-8 border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#c9a84c]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/75 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{item.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] font-bold text-sm">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-white/50 text-xs">
                    {item.role} · {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
