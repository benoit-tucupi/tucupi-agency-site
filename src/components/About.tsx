"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="apropos" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              {a.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              {a.title}
              <span className="text-[#c9a84c]">{a.titleHighlight}</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">{a.p1}</p>
            <p className="text-white/70 leading-relaxed mb-4">{a.p2}</p>
            <p className="text-white/70 leading-relaxed mb-8">{a.p3}</p>

            <div className="flex flex-wrap gap-3">
              {a.badges.map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-full bg-[#1a3527] border border-white/10 text-sm"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-5">
            {a.values.map((v) => (
              <div
                key={v.title}
                className="bg-[#1a3527] rounded-2xl p-6 border border-white/10 hover:border-[#c9a84c]/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
