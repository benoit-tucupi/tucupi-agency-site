const products = [
  {
    name: "OpenImmo Pro",
    tagline: "CRM immobilier No-Code",
    description:
      "Une solution complète de gestion de biens, de contacts et de transactions pour les agences immobilières. Personnalisable, sans code.",
    badge: "SaaS",
    badgeColor: "bg-blue-500/20 text-blue-300",
    features: [
      "Gestion des mandats",
      "Suivi des visites",
      "Tunnel de conversion",
      "Rapports automatisés",
    ],
    link: "#",
    status: "Disponible",
  },
  {
    name: "My Campaign Manager",
    tagline: "Pilotez vos campagnes marketing",
    description:
      "Planifiez, lancez et analysez toutes vos campagnes marketing depuis une seule interface. Connecté à vos outils préférés.",
    badge: "SaaS",
    badgeColor: "bg-purple-500/20 text-purple-300",
    features: [
      "Calendrier éditorial",
      "Multi-canal (email, social)",
      "Analytics intégrés",
      "IA rédactionnelle",
    ],
    link: "#",
    status: "Beta",
  },
  {
    name: "Personal Agent",
    tagline: "Votre assistant IA personnel",
    description:
      "Un agent IA connecté à votre base de connaissances personnelle. Il répond à vos questions, rédige vos emails et automatise vos tâches.",
    badge: "AI",
    badgeColor: "bg-[#c9a84c]/20 text-[#c9a84c]",
    features: [
      "Mémoire longue durée",
      "Intégration email & calendrier",
      "Base de connaissances RAG",
      "API accessible",
    ],
    link: "#",
    status: "Bientôt",
  },
];

export default function Products() {
  return (
    <section id="produits" className="section-padding px-6 bg-[#0d1f15]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos produits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Des solutions prêtes à l&apos;emploi
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            En parallèle de nos missions clients, Tucupi Studio développe ses
            propres produits SaaS et outils IA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="relative bg-[#1a3527] rounded-2xl border border-white/10 overflow-hidden group hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0" />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${product.badgeColor} mb-3`}
                    >
                      {product.badge}
                    </span>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-[#c9a84c] text-sm font-medium mt-1">
                      {product.tagline}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${
                      product.status === "Disponible"
                        ? "border-green-500/40 text-green-400"
                        : product.status === "Beta"
                          ? "border-yellow-500/40 text-yellow-400"
                          : "border-white/20 text-white/50"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <svg
                        className="w-4 h-4 text-[#c9a84c] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  En savoir plus
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
          ))}
        </div>
      </div>
    </section>
  );
}
