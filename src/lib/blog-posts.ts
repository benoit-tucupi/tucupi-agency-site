export type BlogSection = {
  title?: string;
  body: string[];
  callout?: string;
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: Record<string, BlogPost> = {
  "integrer-ia-entreprise": {
    slug: "integrer-ia-entreprise",
    title: "Comment intégrer l'IA dans votre entreprise : le guide concret pour les dirigeants",
    excerpt:
      "L'IA n'est plus réservée aux grands groupes. Mais par où commencer, concrètement, quand on dirige une PME ? Ce guide pratique vous donne une méthode claire — sans jargon, sans investissement démesuré.",
    category: "IA",
    date: "1 avril 2025",
    readTime: "8 min",
    sections: [
      {
        body: [
          "L'intelligence artificielle n'est plus réservée aux grandes entreprises ou aux groupes du CAC 40. En 2025, les PME ont accès aux mêmes technologies — à une fraction du coût et sans équipe de data scientists. Pourtant, beaucoup de dirigeants restent dans l'expectative. Pas par manque d'intérêt, mais parce que la question « par où commencer ? » reste sans réponse claire.",
          "Cet article est un guide pratique et sans jargon. L'objectif : vous aider à identifier où l'IA peut créer de la valeur dans votre organisation, et comment passer à l'action sans prise de risque excessive.",
        ],
      },
      {
        title: "Ne pas penser « IA » — penser « problème »",
        body: [
          "La première erreur que commettent la plupart des entreprises : chercher où « mettre de l'IA » plutôt que de chercher quels problèmes méritent une solution. L'IA n'est pas une fin en soi. C'est un outil. Et comme tout outil, elle n'est utile que si elle résout un problème réel.",
          "Avant de regarder les technologies disponibles, posez-vous ces trois questions : Quelles tâches consomment le plus de temps dans mon organisation ? Quels processus sont sources d'erreurs récurrentes ? Où mes équipes perdent-elles de la valeur au profit de tâches administratives ou répétitives ?",
        ],
        callout: "Les réponses à ces trois questions sont votre carte au trésor. Ce sont elles qui déterminent où l'IA créera le plus de valeur — pas les dernières tendances tech.",
      },
      {
        title: "Les 4 cas d'usage les plus courants en PME",
        body: [
          "À partir de nombreux projets accompagnés, voici les quatre cas d'usage où l'IA délivre le plus rapidement de la valeur dans une PME :",
        ],
        list: [
          "Traitement de documents — Factures, contrats, formulaires, e-mails entrants... L'IA lit, extrait et structure l'information en quelques secondes, là où un collaborateur prendrait plusieurs minutes. Le gain est immédiat et mesurable.",
          "Assistance à la rédaction — Offres commerciales, e-mails de relance, fiches produits, comptes-rendus de réunion... Avec les bons paramètres, l'IA génère des premiers jets de qualité que vos équipes n'ont plus qu'à valider.",
          "Support client et FAQ interne — Un assistant IA connecté à votre documentation peut répondre à 80% des questions récurrentes de vos clients ou collaborateurs, 24h/24, sans mobiliser personne.",
          "Aide à la décision — Analyser des données de vente, identifier des tendances, détecter des anomalies dans vos chiffres... L'IA fournit des synthèses intelligentes là où vous passiez des heures sur des tableaux Excel.",
        ],
      },
      {
        title: "Par où commencer concrètement",
        body: [
          "Pas de grand projet de transformation. Pas de consultant externe pendant 6 mois. Voici la méthode que nous recommandons systématiquement.",
          "Étape 1 — Choisissez un seul processus. Identifiez celui où la douleur est la plus forte et le volume suffisamment élevé pour justifier un investissement. Un seul. Commencer par plusieurs est la garantie de ne rien terminer.",
          "Étape 2 — Mesurez le « avant ». Combien de temps ce processus prend-il aujourd'hui ? Combien d'erreurs génère-t-il ? Sans mesure de départ, vous ne pourrez pas démontrer la valeur de ce que vous avez construit.",
          "Étape 3 — Construisez un prototype en 2 semaines. Avec les outils actuels (n8n, Make, OpenAI API, Airtable), il est possible de construire une première version fonctionnelle en moins de deux semaines. Ce prototype n'a pas besoin d'être parfait — il doit produire un apprentissage.",
          "Étape 4 — Mesurez, ajustez, étendez. Si le prototype démontre de la valeur, vous l'améliorez et l'étendez. Sinon, vous avez appris quelque chose d'important à faible coût.",
        ],
      },
      {
        title: "Ce que ça change pour les équipes",
        body: [
          "L'une des craintes les plus fréquentes chez les dirigeants : est-ce que l'IA va remplacer mes collaborateurs ? La réponse honnête : non, dans la grande majorité des cas en PME.",
          "Ce que l'IA remplace, c'est la partie la moins intéressante du travail — les copier-coller, les saisies répétitives, les reformulations de documents standards. Ce qu'elle libère, c'est du temps pour les tâches à haute valeur ajoutée : la relation client, la résolution de problèmes complexes, la créativité.",
        ],
        callout: "Les équipes qui adoptent ces outils ne font pas moins de travail. Elles font un travail différent — et généralement plus satisfaisant.",
      },
      {
        title: "Les erreurs à éviter",
        body: [
          "Vouloir tout automatiser d'un coup. L'IA mal intégrée peut créer plus de problèmes qu'elle n'en résout. Allez-y étape par étape, processus par processus.",
          "Ignorer la qualité des données. L'IA n'est pas magique. Si vos données d'entrée sont mauvaises, vos sorties le seront aussi. Avant d'intégrer l'IA, interrogez la qualité de ce que vous lui donnez à traiter.",
          "Ne pas former les équipes. Même le meilleur outil est inutile si personne ne sait s'en servir. Prévoyez un temps d'appropriation — et valorisez ceux qui s'investissent dans cette transition.",
        ],
      },
      {
        title: "En résumé",
        body: [
          "L'IA en PME n'est pas un chantier de transformation à 500 000 euros. C'est une série de petits projets, bien choisis, qui s'accumulent pour changer concrètement la façon dont votre entreprise fonctionne. Le meilleur moment pour commencer, c'était l'an dernier. Le deuxième meilleur moment, c'est maintenant.",
        ],
      },
    ],
  },

  "automatisation-3-cas-concrets": {
    slug: "automatisation-3-cas-concrets",
    title: "Automatisation en entreprise : 3 cas concrets qui ont libéré des dizaines d'heures par semaine",
    excerpt:
      "« Automatiser ses processus » : l'expression est dans toutes les bouches, mais elle reste souvent abstraite. Voici trois cas réels, trois contextes différents, un même résultat : des heures libérées et des équipes qui travaillent enfin sur ce qui compte.",
    category: "Automatisation",
    date: "15 mars 2025",
    readTime: "7 min",
    sections: [
      {
        body: [
          "L'automatisation des processus métier, c'est concret ou c'est du buzzword ? Pour répondre à cette question, rien de mieux que des exemples réels. Voici trois cas que nous avons accompagnés — trois entreprises, trois problèmes différents, et dans chaque cas, un avant/après mesurable.",
          "Ce qui frappe à chaque fois, c'est que le problème était connu depuis des mois, parfois des années. Mais « on faisait comme ça depuis toujours ». L'automatisation n'a pas révolutionné leur façon de travailler — elle a juste supprimé ce qui les empêchait de bien travailler.",
        ],
      },
      {
        title: "Cas n°1 — Le cabinet comptable qui générait ses rapports clients à la main",
        body: [
          "Un cabinet de 12 collaborateurs produisait chaque mois des rapports de suivi pour une cinquantaine de clients PME : bilan simplifié, tableaux de trésorerie, indicateurs de performance. Chaque rapport était construit manuellement dans Excel, mis en page dans Word, puis envoyé par e-mail.",
          "Temps moyen par rapport : 45 minutes. Soit plus de 37 heures de travail mensuel, mobilisant deux collaborateurs seniors sur des tâches sans valeur ajoutée.",
          "Ce qui a été automatisé : un workflow connecte l'outil comptable du cabinet (via API) à un générateur de rapports. Chaque mois, à date fixe, les données sont extraites automatiquement, injectées dans un template structuré, et le rapport finalisé est envoyé directement au client.",
        ],
        callout: "Résultat : 37 heures par mois réduites à 3 heures de vérification humaine. Les collaborateurs ont retrouvé du temps pour le conseil — leur vraie valeur ajoutée. Les clients reçoivent leurs rapports plus vite et dans un format plus cohérent.",
      },
      {
        title: "Cas n°2 — L'agence commerciale qui oubliait ses relances",
        body: [
          "Une PME de 25 personnes dans la distribution BtoB. Ses commerciaux géraient leur suivi dans un CRM, mais les relances se faisaient à la main, quand ils y pensaient. Résultat : des opportunités perdues faute de suivi, et une forte disparité entre les commerciaux les plus rigoureux et les autres.",
          "Ce qui a été mis en place : un système de relances automatiques basé sur le statut des opportunités dans le CRM. Quand un devis n'a pas reçu de réponse sous 5 jours, un e-mail personnalisé est envoyé automatiquement depuis l'adresse du commercial. À J+10, une tâche de rappel est créée dans son agenda. À J+20 sans réponse, le manager est notifié.",
          "L'ensemble du workflow a été construit avec Make, connecté au CRM existant. Aucun changement d'outil pour les commerciaux — juste des automatisations ajoutées par-dessus.",
        ],
        callout: "Résultat : taux de relance passé de 40% à 100% des opportunités. Taux de transformation en hausse de 15% sur les 3 premiers mois. Effet inattendu : les disputes internes sur « qui devait relancer qui » ont disparu — le système décide.",
      },
      {
        title: "Cas n°3 — La PME industrielle qui passait ses lundis à traiter des e-mails fournisseurs",
        body: [
          "Un directeur des achats d'une PME industrielle de 60 personnes recevait chaque semaine entre 80 et 120 e-mails fournisseurs : confirmations de commandes, avis d'expédition, factures, demandes de délai... Tout était traité manuellement, copié dans un tableau Excel, et transmis aux équipes concernées.",
          "Le lundi matin représentait systématiquement 4 à 5 heures de tri et saisie — avant même de commencer le vrai travail de la semaine.",
          "Ce qui a été automatisé : un agent IA connecté à la boîte e-mail analyse chaque message entrant, identifie son type (commande, expédition, facture, autre), extrait les informations clés (numéro de commande, date, montant, fournisseur), et les injecte directement dans le bon outil selon le type. Les e-mails qui ne rentrent pas dans ces catégories sont mis en attente avec un résumé pour le directeur.",
        ],
        callout: "Résultat : le lundi matin est passé de 5 heures à 45 minutes. Le directeur ne traite plus que les cas ambigus — environ 15% des e-mails. Les 85% restants sont gérés sans intervention humaine.",
      },
      {
        title: "Ce que ces trois cas ont en commun",
        body: [
          "À chaque fois, le problème était connu et vécu comme une fatalité. La solution n'a pas nécessité de refonte du système d'information. Les outils existants ont été conservés — on a simplement ajouté des automatisations par-dessus. Et le retour sur investissement a été visible dès le premier mois.",
          "C'est ça, l'automatisation bien faite : non pas tout révolutionner, mais identifier les frictions les plus coûteuses et les supprimer chirurgicalement.",
        ],
      },
      {
        title: "Par où commencer dans votre entreprise ?",
        body: [
          "Prenez une feuille et notez les tâches répétitives qui agacent le plus vos équipes. Celles dont tout le monde sait qu'elles « pourraient être faites par un ordinateur ». Ce sont ces tâches-là qui sont les meilleures candidates à l'automatisation.",
          "En règle générale : si une tâche suit toujours les mêmes étapes, traite les mêmes types de données, et ne nécessite pas de jugement humain particulier — elle peut probablement être automatisée. Et souvent, beaucoup plus facilement et rapidement que vous ne le pensez.",
        ],
      },
    ],
  },

  "nocode-outils-pme": {
    slug: "nocode-outils-pme",
    title: "No-code : comment les PME créent leurs outils métier sans équipe tech ni budget colossal",
    excerpt:
      "Vous avez besoin d'un outil interne qui n'existe pas, ou qui coûte trop cher ? Le no-code a démocratisé la création d'applications sur mesure. Ce qui coûtait 80 000 € il y a cinq ans en coûte aujourd'hui 5 000 à 10 000. Voici comment.",
    category: "No-Code",
    date: "28 mars 2025",
    readTime: "6 min",
    sections: [
      {
        body: [
          "Vous avez besoin d'un outil interne qui n'existe pas sur le marché. Ou qui existe, mais à 500 euros par mois avec 80% de fonctionnalités inutiles. Ou qui nécessiterait une intégration sur mesure à 50 000 euros.",
          "Il y a quelques années, la seule réponse était : développement logiciel. Aujourd'hui, il y en a une autre — et elle change la donne pour les PME.",
        ],
      },
      {
        title: "Le vrai coût du développement traditionnel",
        body: [
          "Développer une application sur mesure, ça coûte combien ? La réponse honnête : entre 30 000 et 150 000 euros pour une première version. Et ça prend entre 6 et 18 mois.",
          "À ce prix s'ajoutent la maintenance, les évolutions, et la dépendance à un prestataire qui seul comprend le code. Sans lui, vous ne pouvez rien changer.",
          "Pour une PME avec un besoin métier précis et un budget raisonnable, ce modèle n'a souvent aucun sens économique. C'est là que le no-code change tout.",
        ],
      },
      {
        title: "Ce que le no-code permet vraiment",
        body: [
          "Le no-code regroupe les plateformes qui permettent de créer des applications sans écrire de code. Webflow pour les sites, Bubble pour les applications web, Glide pour le mobile, Softr pour les portails clients, Airtable pour les bases de données avec interface...",
          "Ce n'est pas « faire du bricolage ». Les applications no-code peuvent gérer des volumes importants, s'intégrer à vos outils existants via API, et être maintenues sans dépendre d'un développeur.",
        ],
        list: [
          "Construire une première version fonctionnelle en 2 à 4 semaines",
          "Modifier l'application vous-même sans passer par un prestataire",
          "Réduire les coûts initiaux de 70 à 90% par rapport au développement classique",
          "Tester et itérer rapidement en fonction des retours terrain",
        ],
      },
      {
        title: "Trois outils métier construits en no-code",
        body: [
          "Voici trois exemples concrets — trois PME, trois besoins différents, trois solutions no-code.",
        ],
      },
      {
        title: "Un portail de suivi client pour un cabinet de conseil",
        body: [
          "Ce cabinet avait besoin d'un espace en ligne où chaque client pouvait suivre l'avancement de sa mission, accéder aux livrables, et échanger des documents. Les échanges se faisaient par e-mail, en désordre, avec des pièces jointes perdues et des versions qui se multipliaient.",
          "Solution construite avec Softr connecté à Airtable. Budget : 4 000 euros. Délai : 3 semaines. Résultat : 90% des échanges documentaires se font désormais sur cette plateforme. Le cabinet a gagné en professionnalisme perçu par ses clients — et ses collaborateurs ont arrêté de chercher des fichiers.",
        ],
      },
      {
        title: "Une app mobile de gestion des interventions terrain",
        body: [
          "Une PME de maintenance industrielle : les techniciens saisissaient leurs rapports d'intervention sur papier, puis quelqu'un les retapait au bureau. Entre le terrain et la facturation, il s'écoulait parfois 3 jours.",
          "Avec Glide, une application mobile a été créée en 4 semaines. Les techniciens remplissent leur rapport sur leur téléphone, les données arrivent directement dans Airtable, et les factures sont générées automatiquement. Budget : 6 000 euros. Économie estimée : 15 heures de saisie par semaine.",
        ],
      },
      {
        title: "Un outil de qualification des leads pour une équipe commerciale",
        body: [
          "Une startup B2B recevait beaucoup d'inbound mais passait trop de temps à qualifier les leads manuellement. Un formulaire intelligent connecté à Airtable avec un score de qualification automatique a été mis en place. En dessous d'un certain score : séquence email automatisée. Au-dessus : assignation à un commercial avec toutes les informations déjà renseignées.",
          "Budget : 3 500 euros. Délai : 2 semaines. Le temps de qualification est passé de 20 minutes par lead à moins de 2 minutes.",
        ],
      },
      {
        title: "Choisir le bon outil no-code",
        body: [
          "Il n'y a pas un seul outil no-code mais un écosystème. Voici une grille de lecture simple pour s'y repérer :",
        ],
        list: [
          "Site vitrine → Webflow, Framer",
          "Application web complexe → Bubble",
          "Portail client / extranet → Softr",
          "Application mobile terrain → Glide",
          "Base de données + interface → Airtable",
          "Automatisations entre outils → n8n, Make",
        ],
      },
      {
        title: "Les limites à connaître",
        body: [
          "Le no-code n'est pas la solution à tout. Il y a des cas où le développement traditionnel reste plus adapté : applications nécessitant des performances très élevées (millions d'utilisateurs), logiques métier extrêmement complexes, besoins de sécurité très stricts (bancaire, médical), ou projets où la propriété du code est un actif stratégique.",
          "Pour tous les autres cas — et c'est l'immense majorité des besoins d'une PME — le no-code est une option sérieuse à évaluer avant de signer un bon de commande de développement.",
        ],
        callout: "Règle pratique : si votre besoin peut être décrit en une page et que vous n'attendez pas des millions d'utilisateurs, le no-code peut probablement vous livrer 90% de la valeur à 10% du coût.",
      },
      {
        title: "En résumé",
        body: [
          "Le no-code a démocratisé l'accès à la création d'outils digitaux. Ce qui coûtait 80 000 euros il y a cinq ans en coûte aujourd'hui 5 000 à 10 000. Ce qui prenait 12 mois prend maintenant 3 à 6 semaines.",
          "Pour les PME, c'est une révolution silencieuse. Celles qui l'ont adoptée gagnent en vélocité, en autonomie et en économies. Celles qui ne l'ont pas encore fait prennent du retard — souvent sans le savoir.",
        ],
      },
    ],
  },
};
