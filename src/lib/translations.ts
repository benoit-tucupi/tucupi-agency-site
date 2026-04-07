export type Locale = 'fr' | 'en' | 'pt-BR';

export const translations = {
  fr: {
    header: {
      nav: {
        services: 'Services',
        produits: 'Produits',
        realisations: 'Réalisations',
        temoignages: 'Témoignages',
        blog: 'Blog',
        contact: 'Contact',
      },
      cta: 'Parlons projet',
    },
    hero: {
      badge: 'No-Code · Automatisation · Intelligence Artificielle',
      h1a: 'Transformez vos idées en',
      h1b: 'produits digitaux',
      h1c: 'sans coder',
      subtitle:
        "Tucupi Studio conçoit vos MVPs, automatise vos processus métier et intègre l'IA dans vos outils — livré en semaines, pas en mois.",
      cta1: 'Parlons de votre projet',
      cta2: 'Découvrir nos services',
      stats: [
        { value: '20+', label: 'Projets livrés' },
        { value: '3 sem.', label: 'Délai moyen' },
        { value: '100%', label: 'Clients satisfaits' },
      ],
      scroll: 'Défiler',
    },
    services: {
      eyebrow: 'Ce que nous faisons',
      title: 'Nos services',
      subtitle:
        'Trois expertises complémentaires pour accélérer votre transformation digitale, sans écrire une ligne de code.',
      items: [
        {
          title: 'No-Code MVP',
          subtitle: "De l'idée au produit en 3 semaines",
          description:
            "Nous construisons votre MVP avec les meilleurs outils No-Code (Webflow, Bubble, Glide, Notion). Validez votre marché rapidement sans investissement technique massif.",
          features: ['Webflow / Bubble', 'Base de données Airtable', 'Paiements Stripe', 'Déploiement inclus'],
        },
        {
          title: 'Automatisations n8n',
          subtitle: 'Éliminez les tâches répétitives',
          description:
            "Concevez des workflows intelligents avec n8n, Make ou Zapier. Synchronisez vos outils, automatisez votre CRM, vos emails et vos rapports.",
          features: ['n8n self-hosted', 'Make / Zapier', 'Webhooks & API', 'Monitoring 24/7'],
        },
        {
          title: 'Intégrations GPT & Airtable',
          subtitle: "L'IA au cœur de vos process",
          description:
            "Intégrez GPT-4, Claude ou Mistral directement dans vos workflows Airtable. Génération de contenu, analyse de données, assistants IA sur mesure.",
          features: ['GPT-4 / Claude API', 'Airtable + IA', 'Chatbots custom', 'RAG & bases de connaissances'],
        },
      ],
    },
    products: {
      eyebrow: 'Nos produits',
      title: "Des solutions prêtes à l'emploi",
      subtitle:
        "En parallèle de nos missions clients, Tucupi Studio développe ses propres produits SaaS et outils IA.",
      learnMore: 'En savoir plus',
      items: [
        {
          name: 'OpenImmo Pro',
          tagline: 'CRM immobilier No-Code',
          description:
            "Une solution complète de gestion de biens, de contacts et de transactions pour les agences immobilières. Personnalisable, sans code.",
          badge: 'SaaS',
          status: 'Disponible',
          features: ['Gestion des mandats', 'Suivi des visites', 'Tunnel de conversion', 'Rapports automatisés'],
        },
        {
          name: 'My Campaign Manager',
          tagline: 'Pilotez vos campagnes marketing',
          description:
            "Planifiez, lancez et analysez toutes vos campagnes marketing depuis une seule interface. Connecté à vos outils préférés.",
          badge: 'SaaS',
          status: 'Beta',
          features: ['Calendrier éditorial', 'Multi-canal (email, social)', 'Analytics intégrés', 'IA rédactionnelle'],
        },
        {
          name: 'Personal Agent',
          tagline: 'Votre assistant IA personnel',
          description:
            "Un agent IA connecté à votre base de connaissances personnelle. Il répond à vos questions, rédige vos emails et automatise vos tâches.",
          badge: 'AI',
          status: 'Bientôt',
          features: ['Mémoire longue durée', 'Intégration email & calendrier', 'Base de connaissances RAG', 'API accessible'],
        },
      ],
    },
    realisations: {
      eyebrow: 'Portfolio',
      title: 'Nos réalisations',
      subtitle: 'Des projets concrets avec des résultats mesurables. Chaque client mérite une solution sur mesure.',
      resultLabel: 'Résultat',
      readCase: "Lire l'étude de cas",
      seeAll: 'Voir tous les projets',
      items: [
        {
          title: 'Plateforme de veille intelligente — FOR Drug Consulting',
          client: 'FOR Drug Consulting — Paris',
          category: 'Automatisation & IA',
          description:
            "Automatisation complète de la surveillance de littérature scientifique PubMed pour un CRO en pharmacovigilance : collecte, classification IA, déduplication et rapports PDF conformes GxP — sans équipe tech dédiée.",
          result: '−80% de temps de traitement par cycle de veille',
        },
        {
          title: 'Automatisation comptable & IA — LegalPlace',
          client: 'LegalPlace / ComptaPlace — Paris',
          category: 'Automatisation & IA',
          description:
            "Génération automatique de 10+ documents comptables (bilans, liasses, journaux), interface de saisie partagée client/collab, et chatbot IA contextualisé sur les données financières réelles du dossier.",
          result: '4 semaines du brief au déploiement',
        },
        {
          title: 'Product-Market Fit & industrialisation fiscale — Qlower',
          client: 'Qlower — Paris',
          category: 'Produit & Automatisation',
          description:
            "Direction des équipes tech, design et data pour transformer une startup de fiscalité immobilière : création du segment B2B, automatisation de 90% du processus de déclaration fiscale (−94% de coût unitaire), et x40 sur la capacité de traitement par collaborateur.",
          result: '1 600 € → 600 000 € de CA annuel',
        },
        {
          title: "De l'idée aux premiers clients — Alegria",
          client: 'Alegria — Paris',
          category: 'Lean Startup & IA',
          description:
            "Accompagnement de porteurs de projets tech en phase précoce : clarification stratégique, structuration des hypothèses lean, prototypage no-code, et accélération par l'IA pour aller du concept aux premiers signaux marché en quelques semaines.",
          result: "De l'idée aux premiers clients en < 4 semaines",
        },
      ],
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Ce que disent nos clients',
      subtitle: 'La satisfaction de nos clients est notre meilleure carte de visite.',
      items: [
        {
          name: 'Sophie Marchand',
          role: 'Fondatrice',
          company: 'Studio Lotus',
          avatar: 'SM',
          content:
            "Tucupi Studio a transformé notre façon de gérer les réservations. En deux semaines, nous avions une plateforme professionnelle qui a multiplié nos inscriptions par 4. L'équipe est réactive, créative et vraiment à l'écoute.",
        },
        {
          name: 'Pierre Lefebvre',
          role: 'Directeur Associé',
          company: 'Conseil RH Partners',
          avatar: 'PL',
          content:
            "Les automatisations mises en place ont complètement changé notre quotidien. Plus de saisie manuelle, plus d'oublis de relance. Nos consultants peuvent enfin se concentrer sur la valeur ajoutée plutôt que sur l'administratif.",
        },
        {
          name: 'Amélie Dubois',
          role: 'CEO',
          company: 'Maison Clarté',
          avatar: 'AD',
          content:
            "L'intégration de l'assistant IA a dépassé toutes nos attentes. Notre taux de satisfaction client a grimpé de 20 points. Tucupi Studio maîtrise parfaitement ces technologies et sait les adapter aux besoins réels des entreprises.",
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: "L'agence qui livre vite ",
      titleHighlight: 'et bien',
      p1: "Fondé en 2024 à Issy-les-Moulineaux, Tucupi Studio est né d'une conviction simple : les PME et startups méritent des outils digitaux performants sans attendre 18 mois et sans dépenser des centaines de milliers d'euros.",
      p2: "Notre approche No-Code & IA nous permet de construire des solutions solides en quelques semaines. Nous combinons la rapidité du No-Code avec la puissance de l'intelligence artificielle pour créer des produits qui font vraiment la différence.",
      p3: "Basés au cœur du Grand Paris, nous intervenons sur tout le territoire français et accompagnons également des clients à l'international.",
      badges: ['📍 Issy-les-Moulineaux, France', '🗓 Fondé en 2024', '🌍 France & International'],
      values: [
        { icon: '⚡', title: 'Vélocité', desc: 'Livraison en semaines, pas en mois. Chaque jour compte.' },
        { icon: '🎯', title: 'Pragmatisme', desc: "Nous choisissons toujours l'outil le plus adapté, pas le plus complexe." },
        { icon: '🤝', title: 'Transparence', desc: 'Suivi en temps réel, communication directe, zéro jargon.' },
        { icon: '🌱', title: 'Croissance', desc: 'Nos solutions évoluent avec vous. Aucune dette technique.' },
      ],
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Ressources & insights',
      subtitle: "Nos retours d'expérience, tutoriels et réflexions sur le No-Code et l'IA en entreprise.",
      readTimeSuffix: 'de lecture',
      read: 'Lire',
      seeAll: 'Tous les articles',
      items: [
        {
          title: "No-Code vs Code : quand choisir l'un ou l'autre pour votre MVP ?",
          excerpt:
            "Vous avez une idée de produit et vous vous demandez si le No-Code peut vraiment suffire. On démêle les critères de choix pour ne pas se tromper dès le départ.",
          category: 'No-Code',
          date: '28 mars 2025',
          readTime: '6 min',
        },
        {
          title: 'n8n vs Make vs Zapier : le comparatif honnête pour les PME',
          excerpt:
            "Trois outils d'automatisation, trois philosophies différentes. Après avoir utilisé les trois sur des projets clients réels, voici notre verdict sans langue de bois.",
          category: 'Automatisation',
          date: '15 mars 2025',
          readTime: '8 min',
        },
        {
          title: "Comment intégrer GPT-4 dans votre Airtable en moins d'une heure",
          excerpt:
            "Tutoriel pas à pas pour connecter l'API OpenAI à votre base Airtable et automatiser la génération de contenu, l'analyse de texte et la catégorisation.",
          category: 'IA & GPT',
          date: '5 mars 2025',
          readTime: '10 min',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre ',
      titleHighlight: 'projet',
      subtitle:
        "Vous avez une idée, un problème à résoudre ou simplement envie d'explorer ce que le No-Code et l'IA peuvent faire pour vous ? Écrivez-nous, on répond sous 24h.",
      details: {
        email: { label: 'Email', value: 'hello@tucupi.studio' },
        address: { label: 'Adresse', value: 'Issy-les-Moulineaux, 92130' },
        availability: { label: 'Disponibilité', value: 'Lun–Ven, 9h–19h' },
      },
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Jean Dupont',
        email: 'Email professionnel',
        emailPlaceholder: 'jean@entreprise.com',
        message: 'Votre projet',
        messagePlaceholder: 'Décrivez votre projet, vos besoins, votre contexte...',
        submit: 'Envoyer le message',
        guarantee: 'Réponse garantie sous 24h ouvrées',
      },
      success: {
        title: 'Message envoyé !',
        subtitle: 'Merci pour votre message. Nous vous répondrons sous 24h.',
        again: 'Envoyer un autre message',
      },
    },
    footer: {
      description:
        'Agence No-Code & IA basée à Issy-les-Moulineaux. Nous transformons vos idées en produits digitaux performants.',
      sections: [
        {
          label: 'Services',
          links: [
            { label: 'MVP No-Code', href: '#services' },
            { label: 'Automatisations n8n', href: '#services' },
            { label: 'Intégrations GPT', href: '#services' },
          ],
        },
        {
          label: 'Produits',
          links: [
            { label: 'OpenImmo Pro', href: '#produits' },
            { label: 'My Campaign Manager', href: '#produits' },
            { label: 'Personal Agent', href: '#produits' },
          ],
        },
        {
          label: 'Ressources',
          links: [
            { label: 'Blog', href: '#blog' },
            { label: 'Réalisations', href: '#realisations' },
            { label: 'À propos', href: '#apropos' },
          ],
        },
      ],
      copyright: '© 2025 Tucupi Studio. Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },

  en: {
    header: {
      nav: {
        services: 'Services',
        produits: 'Products',
        realisations: 'Portfolio',
        temoignages: 'Testimonials',
        blog: 'Blog',
        contact: 'Contact',
      },
      cta: "Let's talk",
    },
    hero: {
      badge: 'No-Code · Automation · Artificial Intelligence',
      h1a: 'Turn your ideas into',
      h1b: 'digital products',
      h1c: 'without coding',
      subtitle:
        'Tucupi Studio builds your MVPs, automates your business processes and integrates AI into your tools — delivered in weeks, not months.',
      cta1: 'Discuss your project',
      cta2: 'Explore our services',
      stats: [
        { value: '20+', label: 'Projects delivered' },
        { value: '3 wks', label: 'Average delivery' },
        { value: '100%', label: 'Happy clients' },
      ],
      scroll: 'Scroll',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Our services',
      subtitle:
        'Three complementary areas of expertise to accelerate your digital transformation — no code required.',
      items: [
        {
          title: 'No-Code MVP',
          subtitle: 'From idea to product in 3 weeks',
          description:
            'We build your MVP using the best No-Code tools (Webflow, Bubble, Glide, Notion). Validate your market quickly without a massive technical investment.',
          features: ['Webflow / Bubble', 'Airtable database', 'Stripe payments', 'Deployment included'],
        },
        {
          title: 'n8n Automations',
          subtitle: 'Eliminate repetitive tasks',
          description:
            'Design intelligent workflows with n8n, Make or Zapier. Sync your tools, automate your CRM, emails and reports.',
          features: ['Self-hosted n8n', 'Make / Zapier', 'Webhooks & API', '24/7 Monitoring'],
        },
        {
          title: 'GPT & Airtable Integrations',
          subtitle: 'AI at the core of your processes',
          description:
            'Integrate GPT-4, Claude or Mistral directly into your Airtable workflows. Content generation, data analysis, custom AI assistants.',
          features: ['GPT-4 / Claude API', 'Airtable + AI', 'Custom chatbots', 'RAG & knowledge bases'],
        },
      ],
    },
    products: {
      eyebrow: 'Our products',
      title: 'Ready-to-use solutions',
      subtitle:
        'Alongside our client projects, Tucupi Studio develops its own SaaS products and AI tools.',
      learnMore: 'Learn more',
      items: [
        {
          name: 'OpenImmo Pro',
          tagline: 'No-Code Real Estate CRM',
          description:
            'A complete solution for managing properties, contacts and transactions for real estate agencies. Fully customizable, no code needed.',
          badge: 'SaaS',
          status: 'Available',
          features: ['Mandate management', 'Visit tracking', 'Conversion funnel', 'Automated reports'],
        },
        {
          name: 'My Campaign Manager',
          tagline: 'Manage your marketing campaigns',
          description:
            'Plan, launch and analyze all your marketing campaigns from a single interface. Connected to your favorite tools.',
          badge: 'SaaS',
          status: 'Beta',
          features: ['Editorial calendar', 'Multi-channel (email, social)', 'Built-in analytics', 'AI copywriting'],
        },
        {
          name: 'Personal Agent',
          tagline: 'Your personal AI assistant',
          description:
            'An AI agent connected to your personal knowledge base. It answers your questions, drafts your emails and automates your tasks.',
          badge: 'AI',
          status: 'Coming soon',
          features: ['Long-term memory', 'Email & calendar integration', 'RAG knowledge base', 'API access'],
        },
      ],
    },
    realisations: {
      eyebrow: 'Portfolio',
      title: 'Our work',
      subtitle: 'Concrete projects with measurable results. Every client deserves a tailored solution.',
      resultLabel: 'Result',
      readCase: 'Read the case study',
      seeAll: 'See all projects',
      items: [
        {
          title: 'Intelligent Literature Monitoring Platform — FOR Drug Consulting',
          client: 'FOR Drug Consulting — Paris',
          category: 'Automation & AI',
          description:
            "Full automation of PubMed scientific literature monitoring for a pharmacovigilance CRO: collection, AI classification, deduplication and GxP-compliant PDF reports — without a dedicated tech team.",
          result: '−80% processing time per monitoring cycle',
        },
        {
          title: 'Accounting Automation & AI — LegalPlace',
          client: 'LegalPlace / ComptaPlace — Paris',
          category: 'Automation & AI',
          description:
            'Automated generation of 10+ accounting documents (balance sheets, tax filings, ledgers), a shared client/accountant data entry interface, and an AI chatbot contextualized on the client\'s real financial data.',
          result: '4 weeks from brief to production',
        },
        {
          title: 'Product-Market Fit & Tax Automation — Qlower',
          client: 'Qlower — Paris',
          category: 'Product & Automation',
          description:
            'Led tech, design and data teams to transform a real estate tax startup: created the B2B segment, automated 90% of the tax filing process (−94% unit cost), and achieved 40x processing capacity per team member.',
          result: '€1,600 → €600,000 ARR',
        },
        {
          title: 'From Idea to First Clients — Alegria',
          client: 'Alegria — Paris',
          category: 'Lean Startup & AI',
          description:
            'Early-stage tech startup coaching: strategic framing, lean hypothesis structuring, no-code prototyping, and AI acceleration to go from concept to first market signals in just a few weeks.',
          result: 'From idea to first clients in < 4 weeks',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      subtitle: 'Client satisfaction is our best business card.',
      items: [
        {
          name: 'Sophie Marchand',
          role: 'Founder',
          company: 'Studio Lotus',
          avatar: 'SM',
          content:
            'Tucupi Studio transformed the way we manage bookings. Within two weeks, we had a professional platform that multiplied our sign-ups by 4. The team is responsive, creative and truly attentive.',
        },
        {
          name: 'Pierre Lefebvre',
          role: 'Managing Director',
          company: 'Conseil RH Partners',
          avatar: 'PL',
          content:
            'The automations put in place completely changed our daily workflow. No more manual entry, no more missed follow-ups. Our consultants can finally focus on value-added work rather than admin.',
        },
        {
          name: 'Amélie Dubois',
          role: 'CEO',
          company: 'Maison Clarté',
          avatar: 'AD',
          content:
            'The AI assistant integration exceeded all our expectations. Our customer satisfaction rate jumped 20 points. Tucupi Studio has a perfect grasp of these technologies and knows how to adapt them to real business needs.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'The agency that delivers fast ',
      titleHighlight: 'and right',
      p1: 'Founded in 2024 in Issy-les-Moulineaux, Tucupi Studio was born from a simple conviction: SMEs and startups deserve powerful digital tools without waiting 18 months or spending hundreds of thousands of euros.',
      p2: 'Our No-Code & AI approach lets us build solid solutions in a matter of weeks. We combine the speed of No-Code with the power of artificial intelligence to create products that truly make a difference.',
      p3: 'Based in the heart of Greater Paris, we operate throughout France and also work with international clients.',
      badges: ['📍 Issy-les-Moulineaux, France', '🗓 Founded in 2024', '🌍 France & International'],
      values: [
        { icon: '⚡', title: 'Velocity', desc: 'Delivered in weeks, not months. Every day counts.' },
        { icon: '🎯', title: 'Pragmatism', desc: 'We always pick the most suitable tool, not the most complex one.' },
        { icon: '🤝', title: 'Transparency', desc: 'Real-time tracking, direct communication, zero jargon.' },
        { icon: '🌱', title: 'Growth', desc: 'Our solutions scale with you. Zero technical debt.' },
      ],
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Resources & insights',
      subtitle: 'Our experience, tutorials and thoughts on No-Code and AI in business.',
      readTimeSuffix: 'read',
      read: 'Read',
      seeAll: 'All articles',
      items: [
        {
          title: 'No-Code vs Code: when to choose which for your MVP?',
          excerpt:
            "You have a product idea and you're wondering if No-Code can really cut it. We break down the decision criteria so you don't get it wrong from the start.",
          category: 'No-Code',
          date: 'March 28, 2025',
          readTime: '6 min',
        },
        {
          title: 'n8n vs Make vs Zapier: an honest comparison for SMEs',
          excerpt:
            'Three automation tools, three different philosophies. After using all three on real client projects, here is our unvarnished verdict.',
          category: 'Automation',
          date: 'March 15, 2025',
          readTime: '8 min',
        },
        {
          title: 'How to integrate GPT-4 into your Airtable in under an hour',
          excerpt:
            'Step-by-step tutorial to connect the OpenAI API to your Airtable base and automate content generation, text analysis and categorization.',
          category: 'AI & GPT',
          date: 'March 5, 2025',
          readTime: '10 min',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your ",
      titleHighlight: 'project',
      subtitle:
        "Got an idea, a problem to solve, or just want to explore what No-Code and AI can do for you? Write to us and we'll reply within 24h.",
      details: {
        email: { label: 'Email', value: 'hello@tucupi.studio' },
        address: { label: 'Address', value: 'Issy-les-Moulineaux, 92130' },
        availability: { label: 'Availability', value: 'Mon–Fri, 9am–7pm' },
      },
      form: {
        name: 'Full name',
        namePlaceholder: 'John Smith',
        email: 'Professional email',
        emailPlaceholder: 'john@company.com',
        message: 'Your project',
        messagePlaceholder: 'Describe your project, needs and context...',
        submit: 'Send message',
        guarantee: 'Reply guaranteed within 24 business hours',
      },
      success: {
        title: 'Message sent!',
        subtitle: 'Thank you for your message. We will reply within 24h.',
        again: 'Send another message',
      },
    },
    footer: {
      description:
        'No-Code & AI agency based in Issy-les-Moulineaux. We turn your ideas into high-performance digital products.',
      sections: [
        {
          label: 'Services',
          links: [
            { label: 'No-Code MVP', href: '#services' },
            { label: 'n8n Automations', href: '#services' },
            { label: 'GPT Integrations', href: '#services' },
          ],
        },
        {
          label: 'Products',
          links: [
            { label: 'OpenImmo Pro', href: '#produits' },
            { label: 'My Campaign Manager', href: '#produits' },
            { label: 'Personal Agent', href: '#produits' },
          ],
        },
        {
          label: 'Resources',
          links: [
            { label: 'Blog', href: '#blog' },
            { label: 'Portfolio', href: '#realisations' },
            { label: 'About', href: '#apropos' },
          ],
        },
      ],
      copyright: '© 2025 Tucupi Studio. All rights reserved.',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
    },
  },

  'pt-BR': {
    header: {
      nav: {
        services: 'Serviços',
        produits: 'Produtos',
        realisations: 'Portfólio',
        temoignages: 'Depoimentos',
        blog: 'Blog',
        contact: 'Contato',
      },
      cta: 'Fale conosco',
    },
    hero: {
      badge: 'No-Code · Automação · Inteligência Artificial',
      h1a: 'Transforme suas ideias em',
      h1b: 'produtos digitais',
      h1c: 'sem programar',
      subtitle:
        'A Tucupi Studio cria seus MVPs, automatiza seus processos e integra IA nas suas ferramentas — entregue em semanas, não meses.',
      cta1: 'Fale sobre seu projeto',
      cta2: 'Conheça nossos serviços',
      stats: [
        { value: '20+', label: 'Projetos entregues' },
        { value: '3 sem.', label: 'Prazo médio' },
        { value: '100%', label: 'Clientes satisfeitos' },
      ],
      scroll: 'Rolar',
    },
    services: {
      eyebrow: 'O que fazemos',
      title: 'Nossos serviços',
      subtitle:
        'Três expertises complementares para acelerar sua transformação digital, sem escrever uma linha de código.',
      items: [
        {
          title: 'MVP No-Code',
          subtitle: 'Da ideia ao produto em 3 semanas',
          description:
            'Construímos seu MVP com as melhores ferramentas No-Code (Webflow, Bubble, Glide, Notion). Valide seu mercado rapidamente sem investimento técnico massivo.',
          features: ['Webflow / Bubble', 'Base de dados Airtable', 'Pagamentos Stripe', 'Deploy incluído'],
        },
        {
          title: 'Automações n8n',
          subtitle: 'Elimine tarefas repetitivas',
          description:
            'Crie workflows inteligentes com n8n, Make ou Zapier. Sincronize suas ferramentas, automatize seu CRM, e-mails e relatórios.',
          features: ['n8n self-hosted', 'Make / Zapier', 'Webhooks & API', 'Monitoramento 24/7'],
        },
        {
          title: 'Integrações GPT & Airtable',
          subtitle: 'IA no centro dos seus processos',
          description:
            'Integre GPT-4, Claude ou Mistral diretamente nos seus workflows do Airtable. Geração de conteúdo, análise de dados, assistentes de IA sob medida.',
          features: ['GPT-4 / Claude API', 'Airtable + IA', 'Chatbots customizados', 'RAG & bases de conhecimento'],
        },
      ],
    },
    products: {
      eyebrow: 'Nossos produtos',
      title: 'Soluções prontas para usar',
      subtitle:
        'Paralelamente aos projetos de clientes, a Tucupi Studio desenvolve seus próprios produtos SaaS e ferramentas de IA.',
      learnMore: 'Saiba mais',
      items: [
        {
          name: 'OpenImmo Pro',
          tagline: 'CRM Imobiliário No-Code',
          description:
            'Uma solução completa de gestão de imóveis, contatos e transações para imobiliárias. Totalmente personalizável, sem código.',
          badge: 'SaaS',
          status: 'Disponível',
          features: ['Gestão de mandatos', 'Acompanhamento de visitas', 'Funil de conversão', 'Relatórios automatizados'],
        },
        {
          name: 'My Campaign Manager',
          tagline: 'Gerencie suas campanhas de marketing',
          description:
            'Planeje, lance e analise todas as suas campanhas de marketing em uma única interface. Conectado às suas ferramentas favoritas.',
          badge: 'SaaS',
          status: 'Beta',
          features: ['Calendário editorial', 'Multi-canal (e-mail, social)', 'Analytics integrados', 'Redação com IA'],
        },
        {
          name: 'Personal Agent',
          tagline: 'Seu assistente de IA pessoal',
          description:
            'Um agente de IA conectado à sua base de conhecimento pessoal. Responde suas perguntas, redige seus e-mails e automatiza suas tarefas.',
          badge: 'AI',
          status: 'Em breve',
          features: ['Memória de longo prazo', 'Integração e-mail & agenda', 'Base de conhecimento RAG', 'API acessível'],
        },
      ],
    },
    realisations: {
      eyebrow: 'Portfólio',
      title: 'Nossas realizações',
      subtitle: 'Projetos concretos com resultados mensuráveis. Cada cliente merece uma solução sob medida.',
      resultLabel: 'Resultado',
      readCase: 'Ler o estudo de caso',
      seeAll: 'Ver todos os projetos',
      items: [
        {
          title: 'Plataforma de Monitoramento Inteligente — FOR Drug Consulting',
          client: 'FOR Drug Consulting — Paris',
          category: 'Automação & IA',
          description:
            "Automação completa do monitoramento de literatura científica PubMed para uma CRO de farmacovigilância: coleta, classificação por IA, deduplicação e relatórios PDF conformes com GxP — sem equipe técnica dedicada.",
          result: '−80% no tempo de processamento por ciclo de monitoramento',
        },
        {
          title: 'Automação Contábil & IA — LegalPlace',
          client: 'LegalPlace / ComptaPlace — Paris',
          category: 'Automação & IA',
          description:
            'Geração automática de 10+ documentos contábeis (balanços, declarações fiscais, livros-razão), interface de entrada de dados compartilhada entre cliente e contador, e chatbot de IA contextualizado nos dados financeiros reais do cliente.',
          result: '4 semanas do briefing ao deploy',
        },
        {
          title: 'Product-Market Fit & Automação Fiscal — Qlower',
          client: 'Qlower — Paris',
          category: 'Produto & Automação',
          description:
            'Liderança das equipes de tech, design e dados para transformar uma startup de fiscalidade imobiliária: criação do segmento B2B, automação de 90% do processo de declaração fiscal (−94% no custo unitário) e capacidade de processamento 40x maior por colaborador.',
          result: '€1.600 → €600.000 de faturamento anual',
        },
        {
          title: 'Da Ideia aos Primeiros Clientes — Alegria',
          client: 'Alegria — Paris',
          category: 'Lean Startup & IA',
          description:
            'Acompanhamento de fundadores de startups tech em fase inicial: clarificação estratégica, estruturação de hipóteses lean, prototipagem no-code e aceleração por IA para ir do conceito aos primeiros sinais de mercado em poucas semanas.',
          result: 'Da ideia aos primeiros clientes em < 4 semanas',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Depoimentos',
      title: 'O que nossos clientes dizem',
      subtitle: 'A satisfação dos nossos clientes é nosso melhor cartão de visitas.',
      items: [
        {
          name: 'Sophie Marchand',
          role: 'Fundadora',
          company: 'Studio Lotus',
          avatar: 'SM',
          content:
            'A Tucupi Studio transformou a forma como gerenciamos as reservas. Em duas semanas, tínhamos uma plataforma profissional que multiplicou nossas inscrições por 4. A equipe é responsiva, criativa e realmente atenta às nossas necessidades.',
        },
        {
          name: 'Pierre Lefebvre',
          role: 'Diretor Associado',
          company: 'Conseil RH Partners',
          avatar: 'PL',
          content:
            'As automações implementadas mudaram completamente nossa rotina. Chega de entrada manual de dados, chega de follow-ups esquecidos. Nossos consultores podem finalmente focar no que agrega valor, em vez de tarefas administrativas.',
        },
        {
          name: 'Amélie Dubois',
          role: 'CEO',
          company: 'Maison Clarté',
          avatar: 'AD',
          content:
            'A integração do assistente de IA superou todas as nossas expectativas. Nossa taxa de satisfação do cliente subiu 20 pontos. A Tucupi Studio domina perfeitamente essas tecnologias e sabe adaptá-las às necessidades reais das empresas.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre nós',
      title: 'A agência que entrega rápido ',
      titleHighlight: 'e bem',
      p1: 'Fundada em 2024 em Issy-les-Moulineaux, a Tucupi Studio nasceu de uma convicção simples: PMEs e startups merecem ferramentas digitais de alto desempenho sem esperar 18 meses nem gastar centenas de milhares de euros.',
      p2: 'Nossa abordagem No-Code & IA nos permite criar soluções sólidas em poucas semanas. Combinamos a velocidade do No-Code com o poder da inteligência artificial para criar produtos que realmente fazem a diferença.',
      p3: 'Sediados no coração da Grande Paris, atuamos em todo o território francês e também atendemos clientes internacionais.',
      badges: ['📍 Issy-les-Moulineaux, França', '🗓 Fundada em 2024', '🌍 França & Internacional'],
      values: [
        { icon: '⚡', title: 'Velocidade', desc: 'Entrega em semanas, não meses. Cada dia conta.' },
        { icon: '🎯', title: 'Pragmatismo', desc: 'Escolhemos sempre a ferramenta mais adequada, não a mais complexa.' },
        { icon: '🤝', title: 'Transparência', desc: 'Acompanhamento em tempo real, comunicação direta, zero jargão.' },
        { icon: '🌱', title: 'Crescimento', desc: 'Nossas soluções evoluem com você. Nenhuma dívida técnica.' },
      ],
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Recursos & insights',
      subtitle: 'Nossas experiências, tutoriais e reflexões sobre No-Code e IA nos negócios.',
      readTimeSuffix: 'de leitura',
      read: 'Ler',
      seeAll: 'Todos os artigos',
      items: [
        {
          title: 'No-Code vs Código: quando escolher um ou outro para seu MVP?',
          excerpt:
            'Você tem uma ideia de produto e se pergunta se o No-Code realmente basta. Desvendamos os critérios de escolha para não errar desde o início.',
          category: 'No-Code',
          date: '28 de março de 2025',
          readTime: '6 min',
        },
        {
          title: 'n8n vs Make vs Zapier: a comparação honesta para PMEs',
          excerpt:
            'Três ferramentas de automação, três filosofias diferentes. Depois de usar as três em projetos reais de clientes, aqui está nosso veredicto sem rodeios.',
          category: 'Automação',
          date: '15 de março de 2025',
          readTime: '8 min',
        },
        {
          title: 'Como integrar GPT-4 no seu Airtable em menos de uma hora',
          excerpt:
            'Tutorial passo a passo para conectar a API da OpenAI à sua base no Airtable e automatizar geração de conteúdo, análise de texto e categorização.',
          category: 'IA & GPT',
          date: '5 de março de 2025',
          readTime: '10 min',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Fale sobre o seu ',
      titleHighlight: 'projeto',
      subtitle:
        'Tem uma ideia, um problema a resolver ou só quer explorar o que o No-Code e a IA podem fazer por você? Escreva para nós e respondemos em até 24h.',
      details: {
        email: { label: 'E-mail', value: 'hello@tucupi.studio' },
        address: { label: 'Endereço', value: 'Issy-les-Moulineaux, 92130' },
        availability: { label: 'Disponibilidade', value: 'Seg–Sex, 9h–19h' },
      },
      form: {
        name: 'Nome completo',
        namePlaceholder: 'João Silva',
        email: 'E-mail profissional',
        emailPlaceholder: 'joao@empresa.com',
        message: 'Seu projeto',
        messagePlaceholder: 'Descreva seu projeto, suas necessidades e contexto...',
        submit: 'Enviar mensagem',
        guarantee: 'Resposta garantida em até 24h úteis',
      },
      success: {
        title: 'Mensagem enviada!',
        subtitle: 'Obrigado pela sua mensagem. Responderemos em até 24h.',
        again: 'Enviar outra mensagem',
      },
    },
    footer: {
      description:
        'Agência No-Code & IA sediada em Issy-les-Moulineaux. Transformamos suas ideias em produtos digitais de alta performance.',
      sections: [
        {
          label: 'Serviços',
          links: [
            { label: 'MVP No-Code', href: '#services' },
            { label: 'Automações n8n', href: '#services' },
            { label: 'Integrações GPT', href: '#services' },
          ],
        },
        {
          label: 'Produtos',
          links: [
            { label: 'OpenImmo Pro', href: '#produits' },
            { label: 'My Campaign Manager', href: '#produits' },
            { label: 'Personal Agent', href: '#produits' },
          ],
        },
        {
          label: 'Recursos',
          links: [
            { label: 'Blog', href: '#blog' },
            { label: 'Portfólio', href: '#realisations' },
            { label: 'Sobre nós', href: '#apropos' },
          ],
        },
      ],
      copyright: '© 2025 Tucupi Studio. Todos os direitos reservados.',
      legal: 'Avisos legais',
      privacy: 'Política de privacidade',
    },
  },
} as const;
