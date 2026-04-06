"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Nouveau message de contact :", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="section-padding px-6 bg-[#0d1f15]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Parlons de votre{" "}
              <span className="text-[#c9a84c]">projet</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Vous avez une idée, un problème à résoudre ou simplement envie
              d&apos;explorer ce que le No-Code et l&apos;IA peuvent faire pour vous ?
              Écrivez-nous, on répond sous 24h.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@tucupi.studio",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Adresse",
                  value: "Issy-les-Moulineaux, 92130",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Disponibilité",
                  value: "Lun–Ven, 9h–19h",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                    {item.icon}
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
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-white/60 mb-6">
                  Merci pour votre message. Nous vous répondrons sous 24h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#c9a84c] text-sm font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jean@entreprise.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Votre projet
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, vos besoins, votre contexte..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2318] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#c9a84c] text-[#0f2318] font-bold text-base hover:bg-[#dfc077] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
                >
                  Envoyer le message
                </button>
                <p className="text-center text-white/40 text-xs">
                  Réponse garantie sous 24h ouvrées
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
