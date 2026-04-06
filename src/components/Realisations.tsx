"use client";

import { useLanguage } from "@/lib/LanguageContext";

const colors = [
  "from-orange-900/40 to-transparent",
  "from-purple-900/40 to-transparent",
  "from-cyan-900/40 to-transparent",
];

const tags = [
  ["Bubble.io", "n8n", "OpenAI", "Pharmacovigilance"],
  ["n8n", "GPT-4", "No-Code", "Legaltech"],
  ["Fiscalité immobilière", "Automatisation", "B2B", "Proptech"],
];

const slugs = ["fordrug", "legalplace", "qlower"];

export default function Realisations() {
  const { t } = useLanguage();
  const r = t.realisations;

  return (
    <section id="realisations" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            {r.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            {r.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {r.subtitle}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {r.items.map((project, i) => (
            <div
              key={i}
              className="group relative bg-[#1a3527] rounded-2xl border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${colors[i]} opacity-30`}
              />
              <div className="relative p-8 grid md:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                      {project.category}
                    </span>
                    <span className="text-white/40 text-sm">
                      {project.client}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags[i].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/realisations/${slugs[i]}`}
                    className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    {r.readCase}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="md:text-right">
                  <div className="inline-flex flex-col items-start md:items-end">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {r.resultLabel}
                    </span>
                    <span className="text-lg font-bold text-[#c9a84c]">
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] font-medium hover:bg-[#c9a84c]/10 transition-all duration-200"
          >
            {r.seeAll}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
