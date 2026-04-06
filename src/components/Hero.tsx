export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
          No-Code · Automatisation · Intelligence Artificielle
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Transformez vos idées en{" "}
          <span className="text-[#c9a84c]">produits digitaux</span>{" "}
          <br className="hidden md:block" />
          sans coder
        </h1>

        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Tucupi Studio conçoit vos MVPs, automatise vos processus métier et
          intègre l&apos;IA dans vos outils — livré en semaines, pas en mois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a84c] text-[#0f2318] font-bold text-lg hover:bg-[#dfc077] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
          >
            Parlons de votre projet
            <svg
              className="w-5 h-5"
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
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:border-[#c9a84c]/60 hover:text-[#c9a84c] transition-all duration-200"
          >
            Découvrir nos services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "20+", label: "Projets livrés" },
            { value: "3 sem.", label: "Délai moyen" },
            { value: "100%", label: "Clients satisfaits" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#c9a84c]">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span>Défiler</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
