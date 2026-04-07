"use client";

import { useLanguage } from "@/lib/LanguageContext";

const gradients = ["from-emerald-800/30", "from-blue-800/30", "from-amber-800/30"];
const categoryIcons: Record<string, string> = {
  "No-Code": "⚡",
  Automatisation: "🔄",
  Automation: "🔄",
  Automação: "🔄",
  IA: "🤖",
  AI: "🤖",
  "IA & GPT": "🤖",
  "AI & GPT": "🤖",
};

export default function Blog() {
  const { t } = useLanguage();
  const b = t.blog;

  return (
    <section id="blog" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            {b.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            {b.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {b.subtitle}
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {b.items.map((article, i) => (
            <article
              key={i}
              className="group bg-[#1a3527] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${gradients[i]} to-[#1a3527] flex items-center justify-center`}
              >
                <span className="text-4xl opacity-40">
                  {categoryIcons[article.category] ?? "📝"}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                    {article.category}
                  </span>
                  <span className="text-white/40 text-xs">
                    {article.readTime} {b.readTimeSuffix}
                  </span>
                </div>

                <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs">{article.date}</span>
                  <a
                    href={article.slug ? `/blog/${article.slug}` : "#"}
                    className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-medium hover:gap-2.5 transition-all duration-200"
                  >
                    {b.read}
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
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] font-medium hover:bg-[#c9a84c]/10 transition-all duration-200"
          >
            {b.seeAll}
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
