export const quizData = {
  questions: [
    {
      id: 1,
      text: "Quel est ton niveau actuel en business en ligne ?",
      options: [
        {
          text: "Je pars de zéro",
          icon: "🌱",
          points: { content: 2, service: 1, formation: 1 },
        },
        {
          text: "J'ai déjà testé quelques projets",
          icon: "🧪",
          points: { service: 2, content: 1, ecommerce: 1 },
        },
        {
          text: "J'ai déjà vendu en ligne",
          icon: "💸",
          points: { ecommerce: 3, service: 2, formation: 1 },
        },
        {
          text: "J'ai déjà un système qui tourne",
          icon: "⚙️",
          points: { saas: 3, ecommerce: 1, formation: 1 },
        },
      ],
    },
    {
      id: 2,
      text: "Quelles compétences maîtrises-tu le mieux ?",
      options: [
        {
          text: "Vente, persuasion, relation client",
          icon: "🤝",
          points: { service: 4, ecommerce: 2, formation: 1 },
        },
        {
          text: "Code, no-code, automatisation",
          icon: "💻",
          points: { saas: 3, service: 1 },
        },
        {
          text: "Création de contenu, storytelling",
          icon: "🎬",
          points: { content: 4, formation: 1, ecommerce: 1 },
        },
        {
          text: "Pédagogie, structuration de savoir",
          icon: "🎓",
          points: { formation: 3, content: 1, service: 1 },
        },
      ],
    },
    {
      id: 16,
      text: "As-tu une passion ou un talent que tu veux monétiser ?",
      options: [
        {
          text: "Oui, une passion forte (musique, sport, cuisine, etc.)",
          icon: "🔥",
          points: { content: 4, formation: 2, ecommerce: 1 },
        },
        {
          text: "Oui, un talent créatif (musique, dessin, vidéo, écriture)",
          icon: "🎨",
          points: { content: 3, formation: 2, service: 1 },
        },
        {
          text: "Oui, une expertise technique/analytique",
          icon: "🧠",
          points: { service: 2, saas: 2, formation: 1 },
        },
        {
          text: "Pas vraiment, je préfère partir d'une opportunité de marché",
          icon: "📊",
          points: { ecommerce: 3, saas: 2, service: 1 },
        },
      ],
    },
    {
      id: 17,
      text: "As-tu déjà une expertise métier monétisable ?",
      options: [
        {
          text: "Oui, mon métier actuel est directement vendable en freelance",
          icon: "💼",
          points: { service: 3, formation: 2, content: 1 },
        },
        {
          text: "Oui, mais je dois mieux structurer mon offre",
          icon: "🧱",
          points: { service: 2, formation: 2, content: 1 },
        },
        {
          text: "Partiellement, j'ai des bases mais pas encore une offre claire",
          icon: "🛠️",
          points: { service: 2, content: 1, ecommerce: 1 },
        },
        {
          text: "Non, je veux construire une compétence à partir de zéro",
          icon: "🌱",
          points: { content: 2, saas: 1, ecommerce: 2, formation: 1 },
        },
      ],
    },
    {
      id: 3,
      text: "Quel budget peux-tu investir pour démarrer ?",
      options: [
        {
          text: "0€ à 100€",
          icon: "🪙",
          points: { content: 3, service: 2, formation: 1 },
        },
        {
          text: "100€ à 500€",
          icon: "💶",
          points: { service: 2, formation: 2, ecommerce: 1, content: 1 },
        },
        {
          text: "500€ à 2 000€",
          icon: "📈",
          points: { ecommerce: 3, formation: 1, content: 1 },
        },
        {
          text: "2 000€ et plus",
          icon: "🏦",
          points: { saas: 2, ecommerce: 2, content: 1 },
        },
      ],
    },
    {
      id: 4,
      text: "Combien de temps peux-tu consacrer chaque semaine ?",
      options: [
        {
          text: "5 à 8h",
          icon: "⏱️",
          points: { content: 2, formation: 1, service: 1 },
        },
        {
          text: "10 à 15h",
          icon: "📅",
          points: { service: 2, content: 3, formation: 1 },
        },
        {
          text: "20 à 30h",
          icon: "🚀",
          points: { ecommerce: 3, service: 2, saas: 1 },
        },
        {
          text: "Temps plein",
          icon: "🔥",
          points: { saas: 3, ecommerce: 2, formation: 1 },
        },
      ],
    },
    {
      id: 5,
      text: "Quel niveau d'anglais as-tu pour travailler en ligne ?",
      options: [
        {
          text: "Débutant",
          icon: "🇫🇷",
          points: { service: 2, formation: 2, ecommerce: 1 },
        },
        {
          text: "Intermédiaire",
          icon: "🗣️",
          points: { ecommerce: 2, content: 2, service: 1 },
        },
        {
          text: "Avancé",
          icon: "🌍",
          points: { saas: 2, content: 2, ecommerce: 1 },
        },
        {
          text: "Bilingue",
          icon: "🌐",
          points: { saas: 3, content: 2, service: 1 },
        },
      ],
    },
    {
      id: 6,
      text: "Ton rapport au risque financier est plutôt...",
      options: [
        {
          text: "Prudent, je limite les risques",
          icon: "🛡️",
          points: { service: 2, formation: 2, content: 1 },
        },
        {
          text: "Mesuré, je teste petit puis j'accélère",
          icon: "📊",
          points: { ecommerce: 2, content: 3, service: 1 },
        },
        {
          text: "Agressif, je peux investir fort",
          icon: "⚡",
          points: { saas: 2, ecommerce: 2, content: 1 },
        },
        {
          text: "Je prends des risques si le potentiel est énorme",
          icon: "🎯",
          points: { saas: 3, ecommerce: 1, formation: 1 },
        },
      ],
    },
    {
      id: 7,
      text: "Comment préfères-tu travailler au quotidien ?",
      options: [
        {
          text: "Indépendant, en autonomie totale",
          icon: "🧭",
          points: { content: 2, service: 2, saas: 1 },
        },
        {
          text: "Avec des clients en direct",
          icon: "👥",
          points: { service: 4, formation: 1 },
        },
        {
          text: "Autour d'un produit structuré",
          icon: "🧱",
          points: { saas: 2, ecommerce: 2, formation: 1 },
        },
        {
          text: "En construisant une audience",
          icon: "📣",
          points: { content: 4, formation: 2 },
        },
      ],
    },
    {
      id: 8,
      text: "Quel délai te semble acceptable pour des revenus solides ?",
      options: [
        {
          text: "Moins de 3 mois",
          icon: "🏁",
          points: { service: 4, ecommerce: 1 },
        },
        {
          text: "3 à 6 mois",
          icon: "📌",
          points: { ecommerce: 2, service: 2, content: 1 },
        },
        {
          text: "6 à 12 mois",
          icon: "🧠",
          points: { formation: 2, content: 2, ecommerce: 1 },
        },
        {
          text: "12 mois et plus si le potentiel est fort",
          icon: "🏗️",
          points: { saas: 3, content: 1 },
        },
      ],
    },
    {
      id: 9,
      text: "Ton objectif principal ressemble le plus à...",
      options: [
        {
          text: "Générer un complément de revenu fiable",
          icon: "💼",
          points: { service: 2, content: 2, formation: 1 },
        },
        {
          text: "Créer un vrai actif scalable",
          icon: "📈",
          points: { saas: 3, ecommerce: 2, content: 1 },
        },
        {
          text: "Monétiser mon expertise personnelle",
          icon: "🧠",
          points: { formation: 3, service: 2, content: 1 },
        },
        {
          text: "Construire une marque visible",
          icon: "🔥",
          points: { content: 4, ecommerce: 1, formation: 1 },
        },
      ],
    },
    {
      id: 10,
      text: "Quel type de revenu te motive le plus ?",
      options: [
        {
          text: "Prestations et missions facturées",
          icon: "🧾",
          points: { service: 3, formation: 1 },
        },
        {
          text: "Abonnements récurrents",
          icon: "🔁",
          points: { saas: 3, content: 1, formation: 1 },
        },
        {
          text: "Vente de produits (physiques ou digitaux)",
          icon: "🛍️",
          points: { ecommerce: 4, formation: 1 },
        },
        {
          text: "Revenus mixtes et diversifiés",
          icon: "🧩",
          points: { content: 3, formation: 2, ecommerce: 1 },
        },
      ],
    },
    {
      id: 11,
      text: "Ton niveau de confort avec la technique est...",
      options: [
        {
          text: "Faible, je veux du simple",
          icon: "🙂",
          points: { service: 2, formation: 2, content: 2 },
        },
        {
          text: "Correct avec des outils no-code",
          icon: "🧰",
          points: { ecommerce: 2, content: 3, formation: 1 },
        },
        {
          text: "Bon, je peux gérer des stacks complètes",
          icon: "🖥️",
          points: { saas: 3, ecommerce: 1, service: 1 },
        },
        {
          text: "Excellent, j'aime résoudre des problèmes complexes",
          icon: "🧬",
          points: { saas: 3, service: 1 },
        },
      ],
    },
    {
      id: 12,
      text: "Quelle activité te donne le plus d'énergie ?",
      options: [
        {
          text: "Négocier et convaincre",
          icon: "🗣️",
          points: { service: 4, ecommerce: 2 },
        },
        {
          text: "Créer des systèmes et optimiser",
          icon: "⚙️",
          points: { saas: 3, ecommerce: 1 },
        },
        {
          text: "Publier, expliquer, raconter",
          icon: "🎥",
          points: { content: 4, formation: 1 },
        },
        {
          text: "Former et faire progresser les autres",
          icon: "📚",
          points: { formation: 3, service: 1, content: 1 },
        },
      ],
    },
    {
      id: 13,
      text: "Quelle contrainte est la plus forte aujourd'hui ?",
      options: [
        {
          text: "Manque de temps",
          icon: "⌛",
          points: { content: 2, formation: 1, service: 1 },
        },
        {
          text: "Manque de budget",
          icon: "💳",
          points: { service: 2, content: 3, formation: 1 },
        },
        {
          text: "Manque de clarté stratégique",
          icon: "🧭",
          points: { formation: 2, service: 2, content: 1 },
        },
        {
          text: "Manque de compétences techniques",
          icon: "🔧",
          points: { service: 2, formation: 2, content: 2 },
        },
      ],
    },
    {
      id: 14,
      text: "Quel niveau de liberté veux-tu d'ici 12 mois ?",
      options: [
        {
          text: "Pouvoir choisir mes clients et mes horaires",
          icon: "🕒",
          points: { service: 3, formation: 1 },
        },
        {
          text: "Avoir des revenus plus automatisés",
          icon: "🤖",
          points: { saas: 2, content: 2, ecommerce: 1 },
        },
        {
          text: "Développer une marque personnelle forte",
          icon: "⭐",
          points: { content: 4, formation: 2 },
        },
        {
          text: "Construire une machine de vente",
          icon: "🏪",
          points: { ecommerce: 3, saas: 1 },
        },
      ],
    },
    {
      id: 15,
      text: "Quel scénario te ressemble le plus ?",
      options: [
        {
          text: "Je vends mon expertise en mission premium",
          icon: "🎯",
          points: { service: 3, formation: 1 },
        },
        {
          text: "Je crée un logiciel qui résout un vrai problème",
          icon: "🧠",
          points: { saas: 3, service: 1 },
        },
        {
          text: "Je développe une audience et je la monétise",
          icon: "📣",
          points: { content: 3, formation: 2 },
        },
        {
          text: "Je lance une offre produit et j'optimise les marges",
          icon: "🛒",
          points: { ecommerce: 3, content: 1 },
        },
      ],
    },
    // --- Personnalité ---
    {
      id: 18,
      text: "Dans un événement networking, tu es plutôt...",
      options: [
        {
          text: "J'adore, je parle à tout le monde",
          icon: "🎉",
          points: { service: 4, content: 1, formation: 1 },
        },
        {
          text: "Je préfère les conversations profondes en petit comité",
          icon: "🤫",
          points: { formation: 2, content: 2 },
        },
        {
          text: "À l'aise mais j'ai besoin de recharger après",
          icon: "🔋",
          points: { content: 2, service: 1, ecommerce: 1 },
        },
        {
          text: "Je préfère les interactions en ligne",
          icon: "💬",
          points: { saas: 2, content: 2, ecommerce: 1 },
        },
      ],
    },
    {
      id: 19,
      text: "Tes proches diraient que ta plus grande force, c'est...",
      options: [
        {
          text: "Ta capacité à convaincre et embarquer les gens",
          icon: "🎤",
          points: { service: 4, ecommerce: 1, formation: 1 },
        },
        {
          text: "Ta créativité et ton originalité",
          icon: "🎨",
          points: { content: 4, ecommerce: 1 },
        },
        {
          text: "Ta rigueur et ton sens de l'organisation",
          icon: "📐",
          points: { saas: 2, ecommerce: 2 },
        },
        {
          text: "Ta patience et ta pédagogie",
          icon: "🌿",
          points: { formation: 3, content: 1 },
        },
      ],
    },
    {
      id: 20,
      text: "Ce qui te frustre le plus dans ton quotidien, c'est...",
      options: [
        {
          text: "Les tâches répétitives qui pourraient être automatisées",
          icon: "🔄",
          points: { saas: 3, ecommerce: 1 },
        },
        {
          text: "Ne pas avoir assez de visibilité pour mes idées",
          icon: "👁️",
          points: { content: 4, formation: 1 },
        },
        {
          text: "Travailler sur des projets qui ne m'appartiennent pas",
          icon: "🔗",
          points: { ecommerce: 2, service: 2, saas: 1 },
        },
        {
          text: "Sentir que mon expertise n'est pas valorisée",
          icon: "💎",
          points: { formation: 3, service: 2 },
        },
      ],
    },
    {
      id: 21,
      text: "Quand tu procrastines, tu fais plutôt quoi ?",
      options: [
        {
          text: "Je scrolle des vidéos / contenus inspirants",
          icon: "📱",
          points: { content: 4, formation: 1 },
        },
        {
          text: "Je bidouille des outils, j'explore des outils",
          icon: "🔧",
          points: { saas: 3, ecommerce: 1 },
        },
        {
          text: "Je discute avec des gens, j'aide quelqu'un",
          icon: "☕",
          points: { service: 4, formation: 2 },
        },
        {
          text: "Je fais du shopping en ligne, je compare des produits",
          icon: "🛍️",
          points: { ecommerce: 4, content: 1 },
        },
      ],
    },
    {
      id: 22,
      text: "Dans un projet de groupe, tu prends naturellement le rôle de...",
      options: [
        {
          text: "Leader : tu organises et tu décides",
          icon: "👑",
          points: { ecommerce: 2, service: 2, saas: 1 },
        },
        {
          text: "Créatif : tu as les idées et les angles",
          icon: "💡",
          points: { content: 4, ecommerce: 1 },
        },
        {
          text: "Expert : on te consulte pour ton savoir",
          icon: "🎓",
          points: { formation: 3, saas: 1, service: 1 },
        },
        {
          text: "Exécutant fiable : tu livres, tu produis",
          icon: "⚒️",
          points: { service: 2, ecommerce: 2, saas: 1 },
        },
      ],
    },
    {
      id: 23,
      text: "Face à un échec, ta réaction typique c'est...",
      options: [
        {
          text: "J'analyse froidement ce qui a foiré",
          icon: "🔬",
          points: { saas: 2, ecommerce: 2, service: 1 },
        },
        {
          text: "J'en parle autour de moi pour avoir des retours",
          icon: "🗣️",
          points: { service: 2, formation: 2, content: 2 },
        },
        {
          text: "Je pivote vite vers autre chose",
          icon: "🔀",
          points: { content: 2, ecommerce: 3, service: 1 },
        },
        {
          text: "Je persévère, j'ai confiance dans ma vision long terme",
          icon: "🏔️",
          points: { saas: 3, formation: 1, content: 1 },
        },
      ],
    },
    {
      id: 24,
      text: "Si l'argent n'était pas un problème, tu passerais ton temps à...",
      options: [
        {
          text: "Créer du contenu et raconter des histoires",
          icon: "🎬",
          points: { content: 4, formation: 1 },
        },
        {
          text: "Construire des systèmes et résoudre des problèmes",
          icon: "⚙️",
          points: { saas: 3 },
        },
        {
          text: "Aider les gens à progresser",
          icon: "🤲",
          points: { formation: 3, service: 1 },
        },
        {
          text: "Monter des projets et lancer des trucs",
          icon: "🚀",
          points: { ecommerce: 3, service: 2, saas: 1 },
        },
      ],
    },
    {
      id: 25,
      text: "Dans tes relations, on te reproche parfois de...",
      options: [
        {
          text: "Trop vouloir tout contrôler",
          icon: "🎛️",
          points: { saas: 2, ecommerce: 2 },
        },
        {
          text: "Être trop dans ta bulle créative",
          icon: "🫧",
          points: { content: 3, saas: 1 },
        },
        {
          text: "Trop t'investir pour les autres",
          icon: "💛",
          points: { service: 2, formation: 2, content: 1 },
        },
        {
          text: "Être impatient, toujours vouloir avancer",
          icon: "⏩",
          points: { ecommerce: 3, service: 2, saas: 1 },
        },
      ],
    },
  ],
  results: {
    ecommerce: {
      title: "E-commerce / Boutique en Ligne",
      icon: "🛒",
      description:
        "Tu as un profil orienté offre, vente et optimisation. Le e-commerce est pertinent si tu veux construire une machine commerciale avec des leviers concrets (offre, acquisition, conversion). Tu gères ton business derrière l'écran : fiches produits, pubs, SEO, logistique.",
      strengths: [
        "Capacité à transformer rapidement une idée en offre vendable",
        "Bonne compatibilité avec la publicité et l'acquisition multicanale",
        "Potentiel de croissance élevé si tu maîtrises les marges",
        "Approche orientée test, data et amélioration continue",
        "Possible de commencer petit puis scaler progressivement",
      ],
    },
    saas: {
      title: "SaaS (Logiciel en Service)",
      icon: "💻",
      description:
        "Ton profil est très compatible avec la création de produit digital scalable. Le SaaS est idéal si tu veux bâtir un actif long terme avec revenus récurrents.",
      strengths: [
        "Fort potentiel de revenus récurrents et prévisibles",
        "Excellent fit pour un profil technique et orienté système",
        "Scalabilité élevée avec des coûts marginaux faibles",
        "Possibilité de créer une vraie barrière à l'entrée",
        "Création d'un actif revendable à terme",
      ],
    },
    content: {
      title: "Création de Contenu / Média",
      icon: "📱",
      description:
        "Tu as un profil audience-first. Le contenu est ton levier principal si tu veux bâtir une marque personnelle forte et monétiser via plusieurs canaux.",
      strengths: [
        "Démarrage rapide avec un budget limité",
        "Multiples sources de monétisation (affiliation, offres, sponsoring)",
        "Effet cumulatif puissant avec la régularité",
        "Très bon levier pour créer la confiance et l'autorité",
        "Permet d'ouvrir ensuite vers formation, service ou produit",
      ],
    },
    service: {
      title: "Services en Ligne (Freelance / Agence)",
      icon: "🎯",
      description:
        "Ton profil est orienté exécution et résultats rapides. Le service est le meilleur choix pour générer du cash-flow rapidement à partir de compétences existantes. Si tu veux une porte d'entrée plus légère, les tests utilisateurs rémunérés peuvent aussi être une bonne première marche.",
      strengths: [
        "Monétisation rapide sans gros capital initial",
        "Validation directe de ton positionnement sur le marché",
        "Montée en gamme possible via offres premium",
        "Fort contrôle de ta relation client et de ton pricing",
        "Base solide pour évoluer ensuite vers formation ou produit",
        "Alternative plus simple possible avec le crowdtesting si tu veux commencer petit",
      ],
    },
    formation: {
      title: "Formation en Ligne / Coaching",
      icon: "🎓",
      description:
        "Ton profil montre une forte capacité à structurer et transmettre. La formation est idéale si tu veux monétiser ton expertise avec des offres à forte valeur perçue.",
      strengths: [
        "Excellente valorisation de ton savoir et de ton expérience",
        "Positionnement d'autorité dans une niche précise",
        "Possibilité de mixer formation, coaching et communauté",
        "Scalabilité progressive avec des formats digitaux",
        "Création d'un actif pédagogique durable",
      ],
    },
  },
};
