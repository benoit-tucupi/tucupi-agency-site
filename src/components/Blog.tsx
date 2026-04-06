const articles = [
  {
    title: "No-Code vs Code : quand choisir l'un ou l'autre pour votre MVP ?",
    excerpt:
      "Vous avez une idée de produit et vous vous demandez si le No-Code peut vraiment suffire. On démêle les critères de choix pour ne pas se tromper dès le départ.",
    category: "No-Code",
    date: "28 mars 2025",
    readTime: "6 min",
    gradient: "from-green-800/30",
  },
  {
    title: "n8n vs Make vs Zapier : le comparatif honnête pour les PME",
    excerpt:
      "Trois outils d'automatisation, trois philosophies différentes. Après avoir utilisé les trois sur des projets clients réels, voici notre verdict sans langue de bois.",
    category: "Automatisation",
    date: "15 mars 2025",
    readTime: "8 min",
    gradient: "from-blue-800/30",
  },
  {
    title: "Comment intégrer GPT-4 dans votre Airtable en moins d'une heure",
    excerpt:
      "Tutoriel pas à pas pour connecter l'API OpenAI à votre base Airtable et automatiser la génération de contenu, l'analyse de texte et la catégorisation.",
    category: "IA & GPT",
    date: "5 mars 2025",
    readTime: "10 min",
    gradient: "from-amber-800/30",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Ressources & insights
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Nos retours d&apos;expérience, tutoriels et réflexions sur le No-Code et
            l&apos;IA en entreprise.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-[#1a3527] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${article.gradient} to-[#1a3527] flex items-center justify-center`}
              >
                <span className="text-4xl opacity-40">
                  {article.category === "No-Code"
                    ? "⚡"
                    : article.category === "Automatisation"
                      ? "🔄"
                      : "🤖"}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                    {article.category}
                  </span>
                  <span className="text-white/40 text-xs">{article.readTime} de lecture</span>
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
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-medium hover:gap-2.5 transition-all duration-200"
                  >
                    Lire
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
            Tous les articles
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
