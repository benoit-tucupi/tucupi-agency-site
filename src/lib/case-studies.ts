import { Locale } from "./translations";

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  intro: string;
  metrics: { value: string; label: string }[];
  sections: { title: string; body: string[] }[];
  deliverables?: { group: string; items: string[] }[];
  quote?: { text: string; author: string };
  tags: string[];
};

export const caseStudies: Record<Locale, Record<string, CaseStudy>> = {
  fr: {
    fordrug: {
      slug: "fordrug",
      client: "FOR Drug Consulting",
      category: "Automatisation & IA · Pharmacovigilance",
      headline: "Passer d'Excel à une plateforme de veille intelligente — en contexte GxP",
      intro:
        "FOR Drug Consulting, CRO spécialisé en pharmacovigilance, gérait sa surveillance de littérature scientifique à la main, produit par produit, chaque semaine. L'enjeu : automatiser un processus critique, conforme aux exigences réglementaires, sans sacrifier la traçabilité ni la qualité des données.",
      metrics: [
        { value: "−80%", label: "de temps de traitement par cycle de veille" },
        { value: "1 300+", label: "articles traités automatiquement par cycle" },
        { value: "100%", label: "traçable — conforme aux exigences GxP / PV" },
      ],
      sections: [
        {
          title: "Contexte & problème",
          body: [
            "Chaque semaine, les chargés de pharmacovigilance de FDC devaient extraire manuellement les résultats des alertes PubMed, les copier-coller dans Excel, identifier le pays du premier auteur, évaluer la pertinence de chaque article, et produire un rapport de synthèse — produit par produit, client par client.",
            "Un cycle complet représentait plusieurs heures de travail répétitif par produit, avec des risques d'erreurs humaines sur des données à enjeux réglementaires directs.",
            "Le vrai défi : automatiser un processus métier exigeant, sur un périmètre multi-clients et multi-produits, dans un environnement où la traçabilité, l'auditabilité et la conformité GxP ne sont pas négociables.",
          ],
        },
        {
          title: "Ce qui a été construit",
          body: [
            "Une plateforme complète — Y-Sentry — reposant sur trois couches complémentaires : collecte & classification automatisée, orchestration & gestion de l'état, reporting conforme & restitution automatisée.",
            "Y-Sentry repose intégralement sur des outils no-code et low-code — Bubble.io pour l'interface et la logique métier, n8n pour les workflows d'automatisation, OpenAI pour la classification. Zéro serveur custom, zéro backend maison.",
          ],
        },
        {
          title: "Pourquoi c'est possible sans équipe tech dédiée",
          body: [
            "Ce qui a rendu ce projet possible en quelques semaines, c'est une architecture pensée pour le métier d'abord : chaque brique technique répond à un besoin opérationnel précis — pas l'inverse.",
            "Et parce que les outils sont visuels et maintenables, FDC reste autonome pour faire évoluer la plateforme sans dépendre d'un prestataire technique à chaque évolution.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Collecte & classification automatisée",
          items: [
            "Interrogation automatique des APIs PubMed (esearch, efetch)",
            "Parsing XML et extraction des métadonnées (auteurs, affiliations, pays)",
            "Classification IA (OpenAI) : cas de PV, correspondance pays de commercialisation",
            "Déduplication automatique des articles sur critère PMID",
          ],
        },
        {
          group: "Orchestration & gestion de l'état",
          items: [
            "Architecture hybride Bubble.io + n8n (microservices de traitement)",
            "Pagination par lots de 100 articles pour absorber les grands volumes",
            "Suivi d'avancement par veille, par produit, par client",
            "Gestion multi-clients et multi-produits depuis une interface unique",
          ],
        },
        {
          group: "Reporting conforme & restitution automatisée",
          items: [
            "Génération de rapports PDF structurés via template Mustache (PDF.co)",
            "Email de synthèse hebdomadaire avec KPIs par produit",
            "Priorisation des articles : cas PV + pays → cas PV seul → pays seul → hors périmètre",
            "Documentation utilisateur alignée sur le mode opératoire GxP (MOD OP 038)",
          ],
        },
      ],
      quote: {
        text: "Ce qui mobilisait plusieurs heures de travail manuel par cycle — extraction, copier-coller, analyse pays, rédaction de synthèse — se déclenche aujourd'hui en un clic, de façon traçable et conforme.",
        author: "Synthèse du projet · FOR Drug Consulting · Y-Sentry",
      },
      tags: ["Automatisation", "No-code", "IA générative", "Pharmacovigilance", "Conformité GxP", "PubMed", "Reporting automatisé"],
    },
    legalplace: {
      slug: "legalplace",
      client: "LegalPlace / ComptaPlace",
      category: "Automatisation & IA",
      headline: "Transformer un métier comptable en moteur automatisé — en 4 semaines",
      intro:
        "LegalPlace voulait moderniser sa plateforme comptable pour les experts-comptables. L'enjeu : réduire drastiquement le travail manuel, accélérer la production de documents, et offrir une valeur nouvelle aux clients finaux — sans repartir de zéro.",
      metrics: [
        { value: "~4 sem.", label: "Du brief au déploiement en production" },
        { value: "10+", label: "Types de documents comptables automatisés" },
        { value: "3", label: "Briques majeures livrées : documents, interface partagée, IA" },
      ],
      sections: [
        {
          title: "Contexte & problème",
          body: [
            "Les collaborateurs comptables de LegalPlace passaient un temps considérable à produire manuellement des documents de synthèse pour leurs clients : plaquettes de présentation, bilans, liasses fiscales, journaux comptables… Des tâches répétitives, chronophages, et sources d'erreurs.",
            "En parallèle, les clients finaux n'avaient pas de visibilité directe sur leur situation comptable, et les échanges de données entre le client et le collab se faisaient sans outil structuré.",
          ],
        },
        {
          title: "Ce qui a été construit",
          body: [
            "Trois chantiers menés en parallèle sur quatre semaines : la génération automatique de documents comptables, une interface de saisie partagée client/collab, et un chatbot IA à valeur comptable réelle.",
            "L'interface partagée permet au client de renseigner ses données directement, éliminant les allers-retours par email et libérant un temps de saisie significatif côté comptable.",
            "Le chatbot IA analyse les données comptables réelles du client et l'aide à identifier des axes d'optimisation qu'il n'aurait pas détectés seul — pas un FAQ générique, mais un conseiller contextualisé basé sur les chiffres du dossier.",
          ],
        },
        {
          title: "Pourquoi c'est possible en 4 semaines",
          body: [
            "La clé réside dans l'association d'outils d'automatisation modernes (workflows, connecteurs API, no-code) et d'une approche structurée : on ne réinvente pas chaque brique, on les assemble avec précision autour des données métier existantes.",
            "Ce type de projet illustre ce que l'IA et l'automatisation permettent concrètement : non pas remplacer une équipe, mais démultiplier sa capacité — en supprimant la friction là où elle coûte le plus.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Documents générés automatiquement",
          items: [
            "Plaquette financière de présentation",
            "Compte de bilan & compte de résultat",
            "Balance générale & grand livre",
            "Journal comptable",
            "Tableau des immobilisations",
            "Bilan imagé, programme & feuilles de travail",
          ],
        },
      ],
      quote: {
        text: "Ce qui prenait des heures de saisie et de mise en forme peut désormais se générer en un clic. Et le client reçoit en prime un conseiller IA qui connaît ses chiffres.",
        author: "Synthèse du projet · LegalPlace / ComptaPlace",
      },
      tags: ["Automatisation", "No-code", "IA générative", "Legaltech", "Génération de documents", "Comptabilité"],
    },

    qlower: {
      slug: "qlower",
      client: "Qlower",
      category: "Produit & Automatisation",
      headline: "De 1 600 € à 600 000 € de CA — industrialiser la fiscalité immobilière",
      intro:
        "Qlower voulait s'imposer comme un acteur incontournable de la fiscalité immobilière. En tant que responsable des équipes tech, design et data, j'ai piloté trois chantiers stratégiques qui ont transformé le produit et multiplié le chiffre d'affaires par 375.",
      metrics: [
        { value: "×375", label: "Croissance du CA : 1 600 € → 600 000 € annuel" },
        { value: "90%", label: "Du processus de déclaration fiscale automatisé" },
        { value: "×40", label: "Capacité de traitement par collaborateur" },
      ],
      sections: [
        {
          title: "Identifier le product-market fit",
          body: [
            "Exploration approfondie des segments utilisateurs (B2C, B2B) et des propositions de valeur : gestion locative, formalités administratives, déclaration fiscale. Tests continus avec des bêta-testeurs B2B pour valider et affiner les hypothèses.",
            "Résultat : création du segment B2B stratégique, passant de 1 600 € à 600 000 € de CA annuel, réparti équitablement entre B2B et B2C.",
          ],
        },
        {
          title: "Industrialiser les processus",
          body: [
            "Automatisation de 90% du processus de déclaration fiscale, réduisant le coût unitaire d'une liasse de 94%. Mise en place de workflows scalables, augmentant par 40 le nombre de dossiers traitables par personne.",
            "Impact : scalabilité atteinte tout en améliorant la qualité comptable et le time-to-delivery.",
          ],
        },
        {
          title: "Redéployer les ressources",
          body: [
            "Développement de produits d'upsell et création de nouveaux simulateurs fiscaux. Réinvention des parcours utilisateurs pour améliorer l'expérience client et générer de la valeur ajoutée.",
            "Impact : évolution du panier moyen annuel de 120 € à 350 €.",
          ],
        },
      ],
      quote: {
        text: "Ces initiatives ont permis de positionner Qlower comme un acteur incontournable de la fiscalité immobilière, ouvrant la voie à une solution toujours plus complète, automatisée et centrée sur les besoins des utilisateurs.",
        author: "Bilan du projet · Qlower",
      },
      tags: ["Fiscalité immobilière", "Product Management", "Automatisation", "B2B", "Proptech", "No-Code"],
    },
  },

  en: {
    fordrug: {
      slug: "fordrug",
      client: "FOR Drug Consulting",
      category: "Automation & AI · Pharmacovigilance",
      headline: "From Excel to an intelligent monitoring platform — in a GxP environment",
      intro:
        "FOR Drug Consulting, a CRO specializing in pharmacovigilance, managed its scientific literature monitoring manually, product by product, every week. The challenge: automate a critical process compliant with regulatory requirements, without sacrificing traceability or data quality.",
      metrics: [
        { value: "−80%", label: "processing time per monitoring cycle" },
        { value: "1,300+", label: "articles processed automatically per cycle" },
        { value: "100%", label: "traceable — compliant with GxP / PV requirements" },
      ],
      sections: [
        {
          title: "Context & problem",
          body: [
            "Every week, FDC's pharmacovigilance officers had to manually extract PubMed alert results, copy-paste them into Excel, identify the first author's country, assess each article's relevance, and produce a summary report — product by product, client by client.",
            "A full cycle represented several hours of repetitive work per product, with risks of human errors on data with direct regulatory implications.",
            "The real challenge: automate a demanding business process, across a multi-client and multi-product scope, in an environment where traceability, auditability and GxP compliance are non-negotiable.",
          ],
        },
        {
          title: "What was built",
          body: [
            "A complete platform — Y-Sentry — built on three complementary layers: automated collection & classification, orchestration & state management, compliant reporting & automated output.",
            "Y-Sentry relies entirely on no-code and low-code tools — Bubble.io for the interface and business logic, n8n for automation workflows, OpenAI for classification. Zero custom servers, zero in-house backend.",
          ],
        },
        {
          title: "Why it's possible without a dedicated tech team",
          body: [
            "What made this project possible in a matter of weeks is an architecture designed around the business first: each technical building block answers a precise operational need — not the other way around.",
            "And because the tools are visual and maintainable, FDC remains autonomous to evolve the platform without depending on a technical vendor for every update.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Automated collection & classification",
          items: [
            "Automatic querying of PubMed APIs (esearch, efetch)",
            "XML parsing and metadata extraction (authors, affiliations, countries)",
            "AI classification (OpenAI): PV cases, marketing country matching",
            "Automatic deduplication of articles based on PMID",
          ],
        },
        {
          group: "Orchestration & state management",
          items: [
            "Hybrid architecture: Bubble.io (orchestration) + n8n (processing microservices)",
            "Batch pagination of 100 articles to handle large volumes",
            "Progress tracking per cycle, per product, per client",
            "Multi-client and multi-product management from a single interface",
          ],
        },
        {
          group: "Compliant reporting & automated output",
          items: [
            "Structured PDF report generation via Mustache template (PDF.co)",
            "Weekly summary email with KPIs per product",
            "Article prioritization: PV case + country → PV case only → country only → out of scope",
            "User documentation aligned with GxP operating procedure (MOD OP 038)",
          ],
        },
      ],
      quote: {
        text: "What used to take several hours of manual work per cycle — extraction, copy-pasting, country analysis, summary writing — now triggers with one click, in a traceable and compliant way.",
        author: "Project summary · FOR Drug Consulting · Y-Sentry",
      },
      tags: ["Automation", "No-code", "Generative AI", "Pharmacovigilance", "GxP compliance", "PubMed", "Automated reporting"],
    },
    legalplace: {
      slug: "legalplace",
      client: "LegalPlace / ComptaPlace",
      category: "Automation & AI",
      headline: "Turning accounting into an automated engine — in 4 weeks",
      intro:
        "LegalPlace wanted to modernize its accounting platform for chartered accountants. The challenge: drastically reduce manual work, speed up document production, and deliver new value to end clients — without starting from scratch.",
      metrics: [
        { value: "~4 wks", label: "From brief to production deployment" },
        { value: "10+", label: "Accounting document types automated" },
        { value: "3", label: "Major modules delivered: documents, shared interface, AI" },
      ],
      sections: [
        {
          title: "Context & problem",
          body: [
            "LegalPlace's accounting staff spent considerable time manually producing summary documents for their clients: presentation decks, balance sheets, tax filings, accounting ledgers... Repetitive, time-consuming tasks prone to errors.",
            "At the same time, end clients had no direct visibility into their accounting situation, and data exchanges between client and accountant happened without any structured tool.",
          ],
        },
        {
          title: "What was built",
          body: [
            "Three workstreams run in parallel over four weeks: automatic accounting document generation, a shared client/accountant data entry interface, and a genuinely useful AI chatbot.",
            "The shared interface allows clients to enter their data directly, eliminating email back-and-forths and freeing up significant data entry time on the accountant side.",
            "The AI chatbot analyzes the client's real accounting data and helps identify optimization opportunities they wouldn't have spotted alone — not a generic FAQ, but a contextualized advisor based on the actual file figures.",
          ],
        },
        {
          title: "Why it's possible in 4 weeks",
          body: [
            "The key lies in combining modern automation tools (workflows, API connectors, no-code) with a structured approach: we don't reinvent each building block, we assemble them precisely around existing business data.",
            "This type of project illustrates what AI and automation concretely enable: not replacing a team, but multiplying its capacity — by removing friction where it costs the most.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Automatically generated documents",
          items: [
            "Financial presentation deck",
            "Balance sheet & income statement",
            "General ledger & trial balance",
            "Accounting journal",
            "Fixed assets schedule",
            "Visual balance sheet, program & working papers",
          ],
        },
      ],
      quote: {
        text: "What used to take hours of data entry and formatting can now be generated in one click. And the client gets an AI advisor that knows their numbers.",
        author: "Project summary · LegalPlace / ComptaPlace",
      },
      tags: ["Automation", "No-code", "Generative AI", "Legaltech", "Document generation", "Accounting"],
    },

    qlower: {
      slug: "qlower",
      client: "Qlower",
      category: "Product & Automation",
      headline: "From €1,600 to €600,000 ARR — industrializing real estate taxation",
      intro:
        "Qlower wanted to become a key player in real estate taxation. As head of tech, design and data teams, I led three strategic workstreams that transformed the product and multiplied revenue by 375x.",
      metrics: [
        { value: "×375", label: "Revenue growth: €1,600 → €600,000 ARR" },
        { value: "90%", label: "Of the tax filing process automated" },
        { value: "×40", label: "Processing capacity per team member" },
      ],
      sections: [
        {
          title: "Finding product-market fit",
          body: [
            "In-depth exploration of user segments (B2C, B2B) and value propositions: rental management, administrative formalities, tax filing. Continuous testing with B2B beta users to validate and refine hypotheses.",
            "Result: creation of the strategic B2B segment, growing from €1,600 to €600,000 ARR, split evenly between B2B and B2C.",
          ],
        },
        {
          title: "Industrializing processes",
          body: [
            "Automated 90% of the tax filing process, reducing the unit cost per filing by 94%. Implemented scalable workflows, increasing the number of files processable per person by 40x.",
            "Impact: scalability achieved while improving accounting quality and time-to-delivery.",
          ],
        },
        {
          title: "Redeploying resources",
          body: [
            "Developed upsell products and created new tax simulators. Reimagined user journeys to improve the client experience and generate added value.",
            "Impact: average annual basket grew from €120 to €350.",
          ],
        },
      ],
      quote: {
        text: "These initiatives positioned Qlower as a key player in real estate taxation, paving the way for an ever more complete, automated, and user-centric solution.",
        author: "Project summary · Qlower",
      },
      tags: ["Real estate tax", "Product Management", "Automation", "B2B", "Proptech", "No-Code"],
    },
  },

  "pt-BR": {
    fordrug: {
      slug: "fordrug",
      client: "FOR Drug Consulting",
      category: "Automação & IA · Farmacovigilância",
      headline: "Do Excel a uma plataforma de monitoramento inteligente — em ambiente GxP",
      intro:
        "A FOR Drug Consulting, uma CRO especializada em farmacovigilância, gerenciava o monitoramento de literatura científica manualmente, produto por produto, toda semana. O desafio: automatizar um processo crítico conforme as exigências regulatórias, sem sacrificar a rastreabilidade nem a qualidade dos dados.",
      metrics: [
        { value: "−80%", label: "no tempo de processamento por ciclo de monitoramento" },
        { value: "1.300+", label: "artigos processados automaticamente por ciclo" },
        { value: "100%", label: "rastreável — conforme exigências GxP / PV" },
      ],
      sections: [
        {
          title: "Contexto & problema",
          body: [
            "Toda semana, os responsáveis de farmacovigilância da FDC precisavam extrair manualmente os resultados dos alertas PubMed, copiar e colar no Excel, identificar o país do primeiro autor, avaliar a relevância de cada artigo e produzir um relatório de síntese — produto por produto, cliente por cliente.",
            "Um ciclo completo representava várias horas de trabalho repetitivo por produto, com riscos de erros humanos em dados com implicações regulatórias diretas.",
            "O verdadeiro desafio: automatizar um processo de negócio exigente, em um escopo multi-cliente e multi-produto, em um ambiente onde rastreabilidade, auditabilidade e conformidade GxP não são negociáveis.",
          ],
        },
        {
          title: "O que foi construído",
          body: [
            "Uma plataforma completa — Y-Sentry — baseada em três camadas complementares: coleta & classificação automatizada, orquestração & gerenciamento de estado, relatórios conformes & restituição automatizada.",
            "Y-Sentry se baseia inteiramente em ferramentas no-code e low-code — Bubble.io para interface e lógica de negócio, n8n para workflows de automação, OpenAI para classificação. Zero servidores customizados, zero backend próprio.",
          ],
        },
        {
          title: "Por que é possível sem equipe técnica dedicada",
          body: [
            "O que tornou este projeto possível em poucas semanas é uma arquitetura pensada para o negócio primeiro: cada bloco técnico responde a uma necessidade operacional precisa — não o contrário.",
            "E como as ferramentas são visuais e manuteníveis, a FDC permanece autônoma para evoluir a plataforma sem depender de um fornecedor técnico a cada atualização.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Coleta & classificação automatizada",
          items: [
            "Consulta automática às APIs PubMed (esearch, efetch)",
            "Parsing XML e extração de metadados (autores, afiliações, países)",
            "Classificação por IA (OpenAI): casos de PV, correspondência de países de comercialização",
            "Deduplicação automática de artigos com base no PMID",
          ],
        },
        {
          group: "Orquestração & gerenciamento de estado",
          items: [
            "Arquitetura híbrida Bubble.io + n8n (microsserviços de processamento)",
            "Paginação em lotes de 100 artigos para absorver grandes volumes",
            "Acompanhamento de progresso por ciclo, por produto, por cliente",
            "Gestão multi-cliente e multi-produto a partir de uma única interface",
          ],
        },
        {
          group: "Relatórios conformes & restituição automatizada",
          items: [
            "Geração de relatórios PDF estruturados via template Mustache (PDF.co)",
            "E-mail de síntese semanal com KPIs por produto",
            "Priorização de artigos: caso PV + país → caso PV só → país só → fora do escopo",
            "Documentação do usuário alinhada ao procedimento operacional GxP (MOD OP 038)",
          ],
        },
      ],
      quote: {
        text: "O que demandava várias horas de trabalho manual por ciclo — extração, copiar e colar, análise de país, redação de síntese — hoje se aciona com um clique, de forma rastreável e conforme.",
        author: "Resumo do projeto · FOR Drug Consulting · Y-Sentry",
      },
      tags: ["Automação", "No-code", "IA generativa", "Farmacovigilância", "Conformidade GxP", "PubMed", "Relatórios automatizados"],
    },
    legalplace: {
      slug: "legalplace",
      client: "LegalPlace / ComptaPlace",
      category: "Automação & IA",
      headline: "Transformar a contabilidade em um motor automatizado — em 4 semanas",
      intro:
        "A LegalPlace queria modernizar sua plataforma contábil para contadores. O desafio: reduzir drasticamente o trabalho manual, acelerar a produção de documentos e oferecer novo valor aos clientes finais — sem começar do zero.",
      metrics: [
        { value: "~4 sem.", label: "Do briefing ao deploy em produção" },
        { value: "10+", label: "Tipos de documentos contábeis automatizados" },
        { value: "3", label: "Módulos entregues: documentos, interface compartilhada, IA" },
      ],
      sections: [
        {
          title: "Contexto & problema",
          body: [
            "Os colaboradores contábeis da LegalPlace passavam um tempo considerável produzindo manualmente documentos de síntese para seus clientes: apresentações financeiras, balanços, declarações fiscais, livros contábeis... Tarefas repetitivas, demoradas e propensas a erros.",
            "Ao mesmo tempo, os clientes finais não tinham visibilidade direta sobre sua situação contábil, e as trocas de dados entre cliente e contador aconteciam sem nenhuma ferramenta estruturada.",
          ],
        },
        {
          title: "O que foi construído",
          body: [
            "Três frentes de trabalho em paralelo ao longo de quatro semanas: geração automática de documentos contábeis, interface de entrada de dados compartilhada cliente/contador e um chatbot de IA com valor contábil real.",
            "A interface compartilhada permite ao cliente inserir seus dados diretamente, eliminando as trocas de e-mail e liberando tempo significativo de digitação do lado do contador.",
            "O chatbot de IA analisa os dados contábeis reais do cliente e o ajuda a identificar oportunidades de otimização que ele não teria detectado sozinho — não um FAQ genérico, mas um consultor contextualizado com base nos números reais do processo.",
          ],
        },
        {
          title: "Por que é possível em 4 semanas",
          body: [
            "A chave está na combinação de ferramentas modernas de automação (workflows, conectores de API, no-code) com uma abordagem estruturada: não reinventamos cada bloco, os montamos com precisão em torno dos dados de negócio existentes.",
            "Este tipo de projeto ilustra o que a IA e a automação permitem concretamente: não substituir uma equipe, mas multiplicar sua capacidade — eliminando o atrito onde ele custa mais.",
          ],
        },
      ],
      deliverables: [
        {
          group: "Documentos gerados automaticamente",
          items: [
            "Apresentação financeira",
            "Balanço patrimonial & DRE",
            "Balancete geral & livro-razão",
            "Diário contábil",
            "Tabela de imobilizações",
            "Balanço visual, programa & papéis de trabalho",
          ],
        },
      ],
      quote: {
        text: "O que levava horas de digitação e formatação agora pode ser gerado com um clique. E o cliente ainda recebe um consultor de IA que conhece seus números.",
        author: "Resumo do projeto · LegalPlace / ComptaPlace",
      },
      tags: ["Automação", "No-code", "IA generativa", "Legaltech", "Geração de documentos", "Contabilidade"],
    },

    qlower: {
      slug: "qlower",
      client: "Qlower",
      category: "Produto & Automação",
      headline: "De €1.600 a €600.000 de faturamento — industrializando a fiscalidade imobiliária",
      intro:
        "A Qlower queria se tornar um player indispensável na fiscalidade imobiliária. Como responsável pelas equipes de tech, design e dados, liderei três frentes estratégicas que transformaram o produto e multiplicaram o faturamento por 375x.",
      metrics: [
        { value: "×375", label: "Crescimento do faturamento: €1.600 → €600.000/ano" },
        { value: "90%", label: "Do processo de declaração fiscal automatizado" },
        { value: "×40", label: "Capacidade de processamento por colaborador" },
      ],
      sections: [
        {
          title: "Encontrar o product-market fit",
          body: [
            "Exploração aprofundada dos segmentos de usuários (B2C, B2B) e das propostas de valor: gestão de aluguéis, formalidades administrativas, declaração fiscal. Testes contínuos com beta-testadores B2B para validar e refinar as hipóteses.",
            "Resultado: criação do segmento estratégico B2B, crescendo de €1.600 para €600.000 de faturamento anual, dividido igualmente entre B2B e B2C.",
          ],
        },
        {
          title: "Industrializar os processos",
          body: [
            "Automação de 90% do processo de declaração fiscal, reduzindo o custo unitário por declaração em 94%. Implementação de workflows escaláveis, aumentando em 40x o número de processos tratáveis por pessoa.",
            "Impacto: escalabilidade alcançada enquanto se melhorava a qualidade contábil e o time-to-delivery.",
          ],
        },
        {
          title: "Realocar os recursos",
          body: [
            "Desenvolvimento de produtos de upsell e criação de novos simuladores fiscais. Reinvenção das jornadas do usuário para melhorar a experiência do cliente e gerar valor agregado.",
            "Impacto: ticket médio anual cresceu de €120 para €350.",
          ],
        },
      ],
      quote: {
        text: "Essas iniciativas posicionaram a Qlower como um player indispensável na fiscalidade imobiliária, abrindo caminho para uma solução cada vez mais completa, automatizada e centrada nas necessidades dos usuários.",
        author: "Resumo do projeto · Qlower",
      },
      tags: ["Fiscalidade imobiliária", "Product Management", "Automação", "B2B", "Proptech", "No-Code"],
    },
  },
};
