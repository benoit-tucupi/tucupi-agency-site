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
