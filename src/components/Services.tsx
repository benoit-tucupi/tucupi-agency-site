"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { ReactNode } from "react";

const icons: ReactNode[] = [
  <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
