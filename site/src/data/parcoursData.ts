export type LearningLevel = 'debutant' | 'intermediaire' | 'avance';

export interface PathStep {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'guide' | 'tuto' | 'quiz' | 'action';
}

export interface PathModule {
  id: string;
  title: string;
  objective: string;
  steps: PathStep[];
}

export interface LearningPath {
  id: string;
  profileSlug: string;
  profileTitle: string;
  category: string;
  level: LearningLevel;
  estimatedDuration: string;
  outcome: string;
  modules: PathModule[];
}

const FOUNDATION_STEPS: PathStep[] = [
  {
    id: 'orientation-rapide',
    title: 'Quiz Rapide (2 min)',
    description: 'Identifier une direction initiale selon ton profil.',
    href: '/quiz-rapide',
    type: 'quiz',
  },
  {
    id: 'orientation-avance',
    title: 'Quiz Avancé',
    description: 'Confirmer la direction avec plus de précision.',
    href: '/quiz-avance',
    type: 'quiz',
  },
  {
    id: 'bases-business',
    title: 'Les bases du business en ligne',
    description: 'Comprendre le modèle, tester l’idée et passer à l’action.',
    href: '/biz',
    type: 'guide',
  },
  {
    id: 'bases-marketing',
    title: 'Les bases pour trouver des clients',
    description: 'Message, visibilité et passage à l’action.',
    href: '/marketing/fondamentaux',
    type: 'guide',
  },
  {
    id: 'bases-seo',
    title: 'Les bases du SEO',
    description: "Poser des bases SEO qui apportent des visites dans le temps.",
    href: '/seo/fondamentaux/bases-seo',
    type: 'guide',
  },
];

function toProfileLabel(profileSlug: string): string {
  return profileSlug
    .split('-')
    .map((part) => (part.length ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

function categoryAngle(category: string): string {
  switch (category) {
    case 'marketing':
      return 'idée claire, offre simple et canaux pour trouver des clients';
    case 'ecommerce':
      return 'offre claire, page de vente et passage à l’achat';
    case 'tech':
      return 'problème utile, produit simple et test avec de vraies personnes';
    case 'content':
      return 'sujets utiles, audience fidèle et revenus';
    case 'formation':
      return 'programme clair, promesse d’apprentissage et ventes';
    case 'service':
      return 'offre de service, prospection et travail bien rendu';
    default:
      return 'offre, clients, action';
  }
}

const FALLBACK_LINKS_BY_CATEGORY: Record<string, string[]> = {
  marketing: ["/marketing/fondamentaux", "/seo/fondamentaux/bases-seo", "/outils/marketing"],
  service: ["/biz/freelance", "/marketing/social/selling", "/outils/business/autres/crm"],
  tech: ["/biz/saas", "/tech/ia/guides", "/outils/tech"],
  content: ["/marketing/content-marketing", "/contenu/youtube/accelerer-youtube", "/outils/creation"],
  ecommerce: ["/biz/e-commerce", "/marketing/ads", "/outils/ecommerce"],
  formation: ["/biz/profils/formation", "/marketing/tunnel/atelier", "/outils/formation"],
  general: ["/biz", "/marketing/fondamentaux", "/outils"],
};

const PROFILE_SPECIALIZATION_LINKS: Record<string, string[]> = {
  affiliation: ["/tutos/creer-un-programme-affilie", "/tutos/comment-gerer-les-liens-daffiliation-au-niveau-seo", "/seo/fondamentaux/bases-seo"],
  agence: ["/biz/freelance", "/tutos/trouver-des-prospects-qualifies-pour-votre-agence", "/tutos/implementer-un-gestionnaire-de-relations-clients"],
  "ai-automation": ["/tutos/comment-faire-de-lautomatisation-marketing", "/tutos/comment-faire-de-lautomatisation-pour-grossir-son", "/tech/ia/guides"],
  "ai-content-creator": ["/tutos/detecter-un-contenu-genere-par-ia", "/tutos/comment-generer-des-videos-en-masse", "/marketing/content-marketing"],
  "amazon-fba": ["/biz/e-commerce", "/tutos/generez-vos-descriptions-de-fiches-produits-en", "/marketing/ads/google"],
  "app-developer": ["/biz/saas", "/tutos/deployer-un-serveur", "/tutos/comment-creer-un-serveur-de-preprod"],
  blogging: ["/tutos/creer-un-blog-gratuitement", "/tutos/comment-creer-un-topic-cluster", "/seo/fondamentaux/bases-seo"],
  "chatbot-developer": ["/tutos/chatbot-whatsapp", "/tutos/creer-chatbot-messenger", "/tutos/creer-un-custom-gpt-gratuitement"],
  closing: ["/marketing/social/selling", "/tutos/comment-faire-de-la-prospection-sur-les-reseaux", "/tutos/recuperer-les-clients-de-vos-concurrents-linkedin"],
  coaching: ["/biz/profils/formation", "/marketing/client/experience-client", "/marketing/tunnel/atelier"],
  "community-builder": ["/marketing/social/community", "/marketing/social/strategie", "/tutos/comment-organiser-un-concours-sur-les-reseaux"],
  consulting: ["/performance/plan/analyse-marche", "/performance/plan/business-plan", "/marketing/client/experience-client"],
  "content-creator": ["/marketing/content-marketing", "/tutos/comment-construire-un-calendrier-editorial-qui", "/tutos/generer-des-carousels-pour-tous-les-reseaux"],
  copywriter: ["/marketing/email/strategie", "/marketing/content-marketing", "/tutos/comment-ecrire-un-script-youtube-captivant"],
  "data-entry-specialist": ["/tutos/enrichir-une-liste-avec-des-numeros-de-telephones", "/tutos/extraction-leads-google-maps", "/tutos/construire-un-tableau-de-bord-personnalise-sur"],
  "design-graphique": ["/tutos/comment-faire-des-vignettes-youtube-miniatures", "/tutos/comment-generer-automatiquement-les-images", "/outils/creation"],
  dropshipping: ["/biz/e-commerce", "/tutos/shopify-store-qui-font-des-millions", "/marketing/ads/meta"],
  ecommerce: ["/biz/e-commerce", "/tutos/comment-importer-des-produits-amazon-dans", "/marketing/ads/meta"],
  "elearning-creator": ["/tutos/creer-une-formation-en-ligne", "/tutos/comment-creer-un-quiz-qui-convertit", "/marketing/email/automation"],
  "email-marketer": ["/marketing/email/strategie", "/marketing/email/automation", "/tutos/ameliorer-sa-deliverabilite"],
  formation: ["/biz/profils/formation", "/tutos/creer-une-formation-en-ligne", "/marketing/tunnel/atelier"],
  freelance: ["/biz/freelance", "/tutos/trouver-des-prospects-qualifies-pour-votre-agence", "/tutos/comment-se-faire-payer-par-ses-clients"],
  infoproduits: ["/tutos/comment-auto-editer-son-propre-livre-en-ligne", "/marketing/tunnel/atelier", "/marketing/email/strategie"],
  "lead-generation": ["/tutos/extraction-leads-google-maps", "/tutos/creer-une-1ere-campagne-de-cold-emailing", "/outils/business/autres/crm"],
  newsletter: ["/marketing/email/strategie", "/tutos/comment-creer-une-liste-email-pour-de-la", "/tutos/envoyer-email-a-partir-de-wordpress"],
  "notion-expert": ["/tutos/comment-creer-saas-avec-espace-membre-avec-notion", "/tutos/comment-creer-un-pdf-remplissalbe", "/marketing/tunnel/atelier"],
  "online-tutor": ["/tutos/creer-une-formation-en-ligne", "/marketing/tunnel/atelier", "/tutos/comment-creer-un-quiz-qui-convertit"],
  "pet-sitter": ["/marketing/fondamentaux", "/tutos/creer-sa-page-de-resa-google-calendar", "/tutos/recolter-les-avis-de-ses-clients-en-video"],
  podcast: ["/marketing/content-marketing", "/tutos/convertir-un-audio-en-texte-mp3-mp4-vers-word-txt", "/tutos/comment-avoir-un-son-parfait-sur-tes-videos-pour"],
  "print-on-demand": ["/biz/e-commerce", "/tutos/comment-generer-automatiquement-les-images", "/marketing/ads/meta"],
  "prompt-engineer": ["/tutos/creer-un-custom-gpt-gratuitement", "/tutos/how-to-train-your-own-prompt-on-your-custom-style", "/tech/ia/guides"],
  saas: ["/biz/saas", "/tutos/comment-creer-saas-avec-espace-membre-avec-notion", "/marketing/analytics/kpis"],
  "seo-consultant": ["/seo/fondamentaux/bases-seo", "/tutos/comment-se-classer-en-premier-sur-google", "/tutos/trouver-les-mots-clefs-de-ses-concurrents"],
  setter: ["/marketing/social/selling", "/tutos/comment-faire-de-la-prospection-sur-les-reseaux", "/tutos/recuperer-les-clients-de-vos-concurrents-linkedin"],
  "social-media-ads-manager": ["/marketing/ads/meta", "/marketing/ads/google", "/tutos/espionner-les-pubs-de-vos-concurrents-sur-fb-yt"],
  "social-media-manager": ["/marketing/social/strategie", "/marketing/social/community", "/tutos/comment-organiser-un-concours-sur-les-reseaux"],
  "stock-photography": ["/tutos/comment-generer-des-images-en-lots", "/tutos/comment-retirer-un-objet-ou-une-personne-dune", "/outils/creation"],
  "translation-services": ["/marketing/content-marketing", "/tutos/traduire-wordpress-en-2-minutes", "/tutos/comment-envoyer-des-emails-avec-wordpress"],
  "virtual-assistant": ["/tutos/creer-un-crm-personnalise", "/tutos/comment-gerer-tous-ses-leads-au-meme-endroit", "/tutos/creer-une-facture-en-5-minutes"],
  "voiceover-artist": ["/tutos/faire-une-dictee-vocale", "/tutos/comment-retirer-les-silences-et-humm-de-vos-videos", "/tutos/comment-avoir-un-son-parfait-sur-tes-videos-pour"],
  "web-scraping-expert": ["/tutos/quelle-api-pour-scraper-google-maps", "/tutos/extraction-leads-google-maps", "/tutos/surveiller-les-prix-ou-autre-info-sur-le-web"],
  youtube: ["/contenu/youtube/accelerer-youtube", "/tutos/comment-optimiser-ses-video-youtube", "/tutos/comment-activer-les-pubs-sur-sa-chaine-youtube"],
};

function resolveSpecializationLinks(profileSlug: string, category: string): string[] {
  const byProfile = PROFILE_SPECIALIZATION_LINKS[profileSlug];
  if (byProfile && byProfile.length >= 3) return byProfile;
  return FALLBACK_LINKS_BY_CATEGORY[category] ?? FALLBACK_LINKS_BY_CATEGORY.general;
}

function specializationModule(profileSlug: string, category: string): PathModule {
  const label = toProfileLabel(profileSlug);
  const angle = categoryAngle(category);
  const links = resolveSpecializationLinks(profileSlug, category);

  return {
    id: 'specialisation',
    title: 'Approfondir ton activité',
    objective: `Lancer ${label} avec un plan simple: ${angle}.`,
    steps: [
      {
        id: 'profil-principal',
        title: `Fiche profil ${label}`,
        description: `Comprendre le modèle ${label}, les prérequis et le plan de lancement.`,
        href: '/biz/profils/' + profileSlug,
        type: 'guide',
      },
      {
        id: 'specialisation-1',
        title: `Base du métier ${label}`,
        description: `Poser une base claire pour ${label}.`,
        href: links[0],
        type: 'guide',
      },
      {
        id: 'specialisation-2',
        title: `Trouver des clients & bien servir ${label}`,
        description: `Améliorer la prospection, le service rendu et la qualité pour ${label}.`,
        href: links[1],
        type: 'guide',
      },
      {
        id: 'specialisation-3',
        title: `Outils utiles ${label}`,
        description: `Choisir les outils les plus utiles pour ${label}.`,
        href: links[2],
        type: 'tuto',
      },
    ],
  };
}

function executionModule(profileSlug: string): PathModule {
  const label = toProfileLabel(profileSlug);

  return {
    id: 'execution',
    title: 'Plan 7 jours',
    objective: `Passer à l’action en 7 jours pour valider ton offre ${label} dans la vraie vie.`,
    steps: [
      {
        id: 'offre',
        title: `Créer ton offre ${label}`,
        description: `Choisir pour qui tu aides, ce que tu proposes et à quel prix pour ${label}.`,
        href: '/marketing/tunnel/proramme-beta',
        type: 'action',
      },
      {
        id: 'acquisition',
        title: `Trouver tes premiers clients ${label}`,
        description: `Activer un canal simple pour trouver tes premiers clients pour ${label}.`,
        href: '/marketing/tunnel/atelier',
        type: 'action',
      },
      {
        id: 'pilotage',
        title: `Suivre et améliorer ${label}`,
        description: `Regarder les chiffres utiles et ajuster vite pour ${label}.`,
        href: '/marketing/analytics/kpis',
        type: 'action',
      },
      {
        id: 'apps',
        title: `Installer la stack ${label}`,
        description: 'Choisir les outils selon ton niveau et budget.',
        href: '/apps',
        type: 'tuto',
      },
    ],
  };
}

export const learningPaths: LearningPath[] = [
  {
    id: 'affiliation',
    profileSlug: 'affiliation',
    profileTitle: "Marketing d'Affiliation",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('affiliation', 'marketing'),
      executionModule('affiliation'),
    ],
  },
  {
    id: 'agence',
    profileSlug: 'agence',
    profileTitle: "Agence Digitale",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('agence', 'service'),
      executionModule('agence'),
    ],
  },
  {
    id: 'ai-automation',
    profileSlug: 'ai-automation',
    profileTitle: "AI Automation Agency",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('ai-automation', 'tech'),
      executionModule('ai-automation'),
    ],
  },
  {
    id: 'ai-content-creator',
    profileSlug: 'ai-content-creator',
    profileTitle: "AI Content Creator",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('ai-content-creator', 'content'),
      executionModule('ai-content-creator'),
    ],
  },
  {
    id: 'amazon-fba',
    profileSlug: 'amazon-fba',
    profileTitle: "Amazon FBA",
    category: 'ecommerce',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('amazon-fba', 'ecommerce'),
      executionModule('amazon-fba'),
    ],
  },
  {
    id: 'app-developer',
    profileSlug: 'app-developer',
    profileTitle: "App Developer / Développeur d'applications mobiles",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('app-developer', 'tech'),
      executionModule('app-developer'),
    ],
  },
  {
    id: 'blogging',
    profileSlug: 'blogging',
    profileTitle: "Blogging / Site de Contenu",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('blogging', 'content'),
      executionModule('blogging'),
    ],
  },
  {
    id: 'chatbot-developer',
    profileSlug: 'chatbot-developer',
    profileTitle: "Chatbot Developer (No-Code)",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('chatbot-developer', 'tech'),
      executionModule('chatbot-developer'),
    ],
  },
  {
    id: 'closing',
    profileSlug: 'closing',
    profileTitle: "Closer / Sales Closer",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('closing', 'service'),
      executionModule('closing'),
    ],
  },
  {
    id: 'coaching',
    profileSlug: 'coaching',
    profileTitle: "Coaching en Ligne",
    category: 'formation',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('coaching', 'formation'),
      executionModule('coaching'),
    ],
  },
  {
    id: 'community-builder',
    profileSlug: 'community-builder',
    profileTitle: "Community Builder / Gestionnaire de Communauté",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('community-builder', 'content'),
      executionModule('community-builder'),
    ],
  },
  {
    id: 'consulting',
    profileSlug: 'consulting',
    profileTitle: "Consulting / Conseil Stratégique",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('consulting', 'service'),
      executionModule('consulting'),
    ],
  },
  {
    id: 'content-creator',
    profileSlug: 'content-creator',
    profileTitle: "Créateur de Contenu",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('content-creator', 'content'),
      executionModule('content-creator'),
    ],
  },
  {
    id: 'copywriter',
    profileSlug: 'copywriter',
    profileTitle: "Copywriter / Rédacteur Publicitaire",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('copywriter', 'marketing'),
      executionModule('copywriter'),
    ],
  },
  {
    id: 'data-entry-specialist',
    profileSlug: 'data-entry-specialist',
    profileTitle: "Data Entry Specialist / Spécialiste Saisie de Données",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('data-entry-specialist', 'service'),
      executionModule('data-entry-specialist'),
    ],
  },
  {
    id: 'design-graphique',
    profileSlug: 'design-graphique',
    profileTitle: "Designer Graphique Freelance",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('design-graphique', 'marketing'),
      executionModule('design-graphique'),
    ],
  },
  {
    id: 'dropshipping',
    profileSlug: 'dropshipping',
    profileTitle: "Dropshipping",
    category: 'ecommerce',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('dropshipping', 'ecommerce'),
      executionModule('dropshipping'),
    ],
  },
  {
    id: 'ecommerce',
    profileSlug: 'ecommerce',
    profileTitle: "E-commerce / Boutique en ligne",
    category: 'ecommerce',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('ecommerce', 'ecommerce'),
      executionModule('ecommerce'),
    ],
  },
  {
    id: 'elearning-creator',
    profileSlug: 'elearning-creator',
    profileTitle: "E-learning Creator / Créateur de Formations en Ligne",
    category: 'formation',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('elearning-creator', 'formation'),
      executionModule('elearning-creator'),
    ],
  },
  {
    id: 'email-marketer',
    profileSlug: 'email-marketer',
    profileTitle: "Email Marketer / Spécialiste Marketing par Email",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('email-marketer', 'marketing'),
      executionModule('email-marketer'),
    ],
  },
  {
    id: 'formation',
    profileSlug: 'formation',
    profileTitle: "Formation en Ligne",
    category: 'formation',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('formation', 'formation'),
      executionModule('formation'),
    ],
  },
  {
    id: 'freelance',
    profileSlug: 'freelance',
    profileTitle: "Freelance / Services en Ligne",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('freelance', 'service'),
      executionModule('freelance'),
    ],
  },
  {
    id: 'infoproduits',
    profileSlug: 'infoproduits',
    profileTitle: "Infoproduits / Produits Digitaux",
    category: 'formation',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('infoproduits', 'formation'),
      executionModule('infoproduits'),
    ],
  },
  {
    id: 'lead-generation',
    profileSlug: 'lead-generation',
    profileTitle: "Lead Generation Specialist / Spécialiste en Génération de Leads",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('lead-generation', 'marketing'),
      executionModule('lead-generation'),
    ],
  },
  {
    id: 'newsletter',
    profileSlug: 'newsletter',
    profileTitle: "Newsletter / Email Business",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('newsletter', 'content'),
      executionModule('newsletter'),
    ],
  },
  {
    id: 'notion-expert',
    profileSlug: 'notion-expert',
    profileTitle: "Notion Expert / Spécialiste Notion",
    category: 'formation',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('notion-expert', 'formation'),
      executionModule('notion-expert'),
    ],
  },
  {
    id: 'online-tutor',
    profileSlug: 'online-tutor',
    profileTitle: "Online Tutor / Enseignant en Ligne",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('online-tutor', 'service'),
      executionModule('online-tutor'),
    ],
  },
  {
    id: 'pet-sitter',
    profileSlug: 'pet-sitter',
    profileTitle: "Pet Sitter (Garde d'animaux)",
    category: 'general',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('pet-sitter', 'general'),
      executionModule('pet-sitter'),
    ],
  },
  {
    id: 'podcast',
    profileSlug: 'podcast',
    profileTitle: "Podcast",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('podcast', 'content'),
      executionModule('podcast'),
    ],
  },
  {
    id: 'print-on-demand',
    profileSlug: 'print-on-demand',
    profileTitle: "Print-on-Demand (POD)",
    category: 'ecommerce',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('print-on-demand', 'ecommerce'),
      executionModule('print-on-demand'),
    ],
  },
  {
    id: 'prompt-engineer',
    profileSlug: 'prompt-engineer',
    profileTitle: "Prompt Engineer / Consultant IA",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('prompt-engineer', 'tech'),
      executionModule('prompt-engineer'),
    ],
  },
  {
    id: 'saas',
    profileSlug: 'saas',
    profileTitle: "SaaS (Logiciel en Service)",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('saas', 'tech'),
      executionModule('saas'),
    ],
  },
  {
    id: 'seo-consultant',
    profileSlug: 'seo-consultant',
    profileTitle: "SEO Consultant / Consultant en Référencement Naturel",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('seo-consultant', 'marketing'),
      executionModule('seo-consultant'),
    ],
  },
  {
    id: 'setter',
    profileSlug: 'setter',
    profileTitle: "Setter / Appointment Setter",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('setter', 'service'),
      executionModule('setter'),
    ],
  },
  {
    id: 'social-media-ads-manager',
    profileSlug: 'social-media-ads-manager',
    profileTitle: "Social Media Ads Manager / Gestionnaire de Publicités Réseaux Sociaux",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('social-media-ads-manager', 'marketing'),
      executionModule('social-media-ads-manager'),
    ],
  },
  {
    id: 'social-media-manager',
    profileSlug: 'social-media-manager',
    profileTitle: "Social Media Manager",
    category: 'marketing',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('social-media-manager', 'marketing'),
      executionModule('social-media-manager'),
    ],
  },
  {
    id: 'stock-photography',
    profileSlug: 'stock-photography',
    profileTitle: "Stock Photography / Photographie et Vidéos Stock",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('stock-photography', 'content'),
      executionModule('stock-photography'),
    ],
  },
  {
    id: 'translation-services',
    profileSlug: 'translation-services',
    profileTitle: "Translation Services / Services de Traduction",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('translation-services', 'service'),
      executionModule('translation-services'),
    ],
  },
  {
    id: 'virtual-assistant',
    profileSlug: 'virtual-assistant',
    profileTitle: "Virtual Assistant / Assistant Virtuel Spécialisé",
    category: 'service',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('virtual-assistant', 'service'),
      executionModule('virtual-assistant'),
    ],
  },
  {
    id: 'voiceover-artist',
    profileSlug: 'voiceover-artist',
    profileTitle: "Voiceover Artist / Comédien de Doublage",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('voiceover-artist', 'content'),
      executionModule('voiceover-artist'),
    ],
  },
  {
    id: 'web-scraping-expert',
    profileSlug: 'web-scraping-expert',
    profileTitle: "Web Scraping Expert / Expert en Web Scraping",
    category: 'tech',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('web-scraping-expert', 'tech'),
      executionModule('web-scraping-expert'),
    ],
  },
  {
    id: 'youtube',
    profileSlug: 'youtube',
    profileTitle: "YouTubeur",
    category: 'content',
    level: 'debutant',
    estimatedDuration: "3 à 8 heures + 1 à 7 jours d'application",
    outcome: 'Lancer une offre concrète et obtenir des signaux de marché.',
    modules: [
      {
        id: 'fondations',
        title: 'Bases communes',
        objective: 'Comprendre les bases et apprendre à trouver ses premiers clients.',
        steps: FOUNDATION_STEPS,
      },
      specializationModule('youtube', 'content'),
      executionModule('youtube'),
    ],
  }
];

export const learningPathById: Record<string, LearningPath> = Object.fromEntries(
  learningPaths.map((path) => [path.id, path])
);
