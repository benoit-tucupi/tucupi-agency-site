"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { ReactNode } from "react";

const icons: ReactNode[] = [
  // IA — sparkles
  <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  // Application — window/layout
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>,
  // Automatisation — arrows cycle
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
];

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            {s.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            {s.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {s.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {s.items.map((service, i) => (
            <div
              key={i}
              className="group relative bg-[#1a3527] rounded-2xl p-8 border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#c9a84c] mb-5">{icons[i]}</div>
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-[#c9a84c] text-sm font-medium mb-4">
                {service.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
