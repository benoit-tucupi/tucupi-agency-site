"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { caseStudies } from "@/lib/case-studies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();

  const study = caseStudies[locale]?.[slug];

  if (!study) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-white/50">Page introuvable.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <a
            href="/#realisations"
            className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#c9a84c] transition-colors duration-200 mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Réalisations
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                {study.category}
              </span>
              <span className="text-white/40 text-sm">{study.client}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {study.headline}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{study.intro}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-[#1a3527] rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-[#c9a84c] mb-2">{m.value}</div>
                <div className="text-white/60 text-sm leading-snug">{m.label}</div>
              </div>
            ))}
          </div>

          <hr className="border-white/10 mb-10" />

          {/* Sections */}
          {study.sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {section.title}
              </h2>
              {section.body.map((para, i) => (
                <p key={i} className="text-white/70 leading-relaxed mb-4 text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Deliverables */}
          {study.deliverables?.map((group) => (
            <div key={group.group} className="mb-10">
              <h3 className="text-sm font-semibold text-white mb-4">{group.group}</h3>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 bg-[#1a3527] border border-white/10 rounded-xl px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-1.5" />
                    <span className="text-white/70 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quote */}
          {study.quote && (
            <blockquote className="my-12 bg-[#1a3527] rounded-2xl p-8 border border-white/10 relative">
              <span className="absolute top-4 left-6 text-5xl text-[#c9a84c]/30 font-serif leading-none">"</span>
              <p className="text-xl font-light italic leading-relaxed text-white mt-4 mb-4">
                {study.quote.text}
              </p>
              <footer className="text-xs text-white/40 uppercase tracking-widest">
                {study.quote.author}
              </footer>
            </blockquote>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-16">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="border-white/10 mb-10" />

          {/* CTA */}
          <div className="text-center">
            <p className="text-white/60 mb-6">Un projet similaire en tête ?</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0f2318] font-bold hover:bg-[#dfc077] transition-all duration-200"
            >
              Parlons-en
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
