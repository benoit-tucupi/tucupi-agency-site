"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [
  <svg key="email" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="address" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="time" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;

  const details = [
    { ...c.details.email },
    { ...c.details.address },
    { ...c.details.availability },
  ];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setError(true);
    }
  }

  return (
    <section id="contact" className="section-padding px-6 bg-[#0d1f15]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              {c.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              {c.title}
              <span className="text-[#c9a84c]">{c.titleHighlight}</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              {c.subtitle}
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {details.map((item, i) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                    {icons[i]}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-white/90 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#1a3527] rounded-2xl p-8 border border-white/10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{c.success.title}</h3>
                <p className="text-white/60 mb-6">{c.success.subtitle}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#c9a84c] text-sm font-medium hover:underline"
                >
                  {c.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    {c.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={c.form.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    {c.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={c.form.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={c.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#c9a84c] text-[#0f2318] font-bold text-base hover:bg-[#dfc077] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "..." : c.form.submit}
                </button>
                {error && (
                  <p className="text-center text-red-400 text-xs">
                    Une erreur est survenue, veuillez réessayer.
                  </p>
                )}
                <p className="text-center text-white/40 text-xs">
                  {c.form.guarantee}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
