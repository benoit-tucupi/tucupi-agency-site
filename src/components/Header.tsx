"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Produits", href: "#produits" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f2318]/95 backdrop-blur-sm border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#c9a84c] tracking-tight">
            Tucupi
          </span>
          <span className="text-2xl font-light text-white tracking-tight">
            Studio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-[#c9a84c] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#c9a84c] text-[#0f2318] font-semibold text-sm hover:bg-[#dfc077] transition-colors duration-200"
        >
          Parlons projet
        </a>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f2318] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#c9a84c] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#c9a84c] text-[#0f2318] font-semibold text-sm"
          >
            Parlons projet
          </a>
        </div>
      )}
    </header>
  );
}
