const values = [
  {
    icon: "⚡",
    title: "Vélocité",
    desc: "Livraison en semaines, pas en mois. Chaque jour compte.",
  },
  {
    icon: "🎯",
    title: "Pragmatisme",
    desc: "Nous choisissons toujours l'outil le plus adapté, pas le plus complexe.",
  },
  {
    icon: "🤝",
    title: "Transparence",
    desc: "Suivi en temps réel, communication directe, zéro jargon.",
  },
  {
    icon: "🌱",
    title: "Croissance",
    desc: "Nos solutions évoluent avec vous. Aucune dette technique.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              L&apos;agence qui livre vite{" "}
              <span className="text-[#c9a84c]">et bien</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Fondé en 2024 à Issy-les-Moulineaux, Tucupi Studio est né d&apos;une
              conviction simple : les PME et startups méritent des outils
              digitaux performants sans attendre 18 mois et sans dépenser des
              centaines de milliers d&apos;euros.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Notre approche No-Code & IA nous permet de construire des
              solutions solides en quelques semaines. Nous combinons la rapidité
              du No-Code avec la puissance de l&apos;intelligence artificielle pour
              créer des produits qui font vraiment la différence.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Basés au cœur du Grand Paris, nous intervenons sur tout le
              territoire français et accompagnons également des clients à
              l&apos;international.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-[#1a3527] border border-white/10 text-sm">
                📍 Issy-les-Moulineaux, France
              </div>
              <div className="px-4 py-2 rounded-full bg-[#1a3527] border border-white/10 text-sm">
                🗓 Fondé en 2024
              </div>
              <div className="px-4 py-2 rounded-full bg-[#1a3527] border border-white/10 text-sm">
                🌍 France & International
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((v) => (
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
