export const CANONICAL_ARCHETYPES = [
  'service',
  'content',
  'ecommerce',
  'formation',
  'saas',
] as const;

export type CanonicalArchetype = (typeof CANONICAL_ARCHETYPES)[number];

export const PROFILE_SLUGS = [
  'affiliation',
  'agence',
  'ai-automation',
  'ai-content-creator',
  'amazon-fba',
  'app-developer',
  'blogging',
  'chatbot-developer',
  'closing',
  'coaching',
  'community-builder',
  'consulting',
  'content-creator',
  'copywriter',
  'data-entry-specialist',
  'design-graphique',
  'dropshipping',
  'ecommerce',
  'elearning-creator',
  'email-marketer',
  'entraineur-ia',
  'formation',
  'freelance',
  'infoproduits',
  'lead-generation',
  'livecommerce',
  'newsletter',
  'notion-expert',
  'online-tutor',
  'pet-sitter',
  'podcast',
  'print-on-demand',
  'prompt-engineer',
  'saas',
  'seo-consultant',
  'setter',
  'social-media-ads-manager',
  'social-media-manager',
  'stock-photography',
  'testeur-utilisateur',
  'translation-services',
  'virtual-assistant',
  'voiceover-artist',
  'web-scraping-expert',
  'youtube',
] as const;

export type ProfileSlug = (typeof PROFILE_SLUGS)[number];

export type EntryLevel = 'accessible' | 'intermediate' | 'advanced';

export type ProfileCluster =
  | 'general-service'
  | 'consulting'
  | 'sales'
  | 'operations'
  | 'marketing-execution'
  | 'tech-service'
  | 'side-income-service'
  | 'creator-core'
  | 'editorial-media'
  | 'creator-monetization'
  | 'creator-assets'
  | 'education-core'
  | 'coaching'
  | 'infoproducts'
  | 'general-commerce'
  | 'commerce-execution'
  | 'software-product'
  | 'hybrid-commerce-content';

export interface ProfileTaxonomyEntry {
  profileSlug: ProfileSlug;
  title: string;
  primaryArchetype: CanonicalArchetype;
  secondaryArchetype?: CanonicalArchetype;
  cluster: ProfileCluster;
  parentProfileSlug?: ProfileSlug;
  quizEligibleAsPrimary: boolean;
  isPivotProfile: boolean;
  isSideHustleFriendly: boolean;
  entryLevel: EntryLevel;
  notes?: string;
}

export interface ArchetypeDefinition {
  id: CanonicalArchetype;
  label: string;
  description: string;
  pivotProfileSlug: ProfileSlug;
  featuredProfileSlugs: ProfileSlug[];
}

export const ARCHETYPE_DEFINITIONS: Record<CanonicalArchetype, ArchetypeDefinition> = {
  service: {
    id: 'service',
    label: 'Freelance / Services',
    description: 'Tu vends une compétence, une mission ou un résultat concret à des clients.',
    pivotProfileSlug: 'freelance',
    featuredProfileSlugs: ['copywriter', 'virtual-assistant', 'testeur-utilisateur', 'seo-consultant'],
  },
  content: {
    id: 'content',
    label: 'Contenu / Audience',
    description: 'Tu construis une audience et tu la monétises avec du contenu, des partenariats ou des offres.',
    pivotProfileSlug: 'content-creator',
    featuredProfileSlugs: ['youtube', 'newsletter', 'blogging', 'affiliation'],
  },
  ecommerce: {
    id: 'ecommerce',
    label: 'E-commerce',
    description: 'Tu vends des produits et tu pilotes acquisition, conversion, marge et logistique.',
    pivotProfileSlug: 'ecommerce',
    featuredProfileSlugs: ['dropshipping', 'print-on-demand', 'amazon-fba', 'livecommerce'],
  },
  formation: {
    id: 'formation',
    label: 'Formation / Transmission',
    description: 'Tu monétises un savoir structuré, sous forme de formation, accompagnement ou programme.',
    pivotProfileSlug: 'formation',
    featuredProfileSlugs: ['coaching', 'elearning-creator', 'online-tutor', 'infoproduits'],
  },
  saas: {
    id: 'saas',
    label: 'SaaS / Produit logiciel',
    description: 'Tu construis un produit logiciel utile et le vends en abonnement ou en accès récurrent.',
    pivotProfileSlug: 'saas',
    featuredProfileSlugs: ['saas', 'ai-automation', 'chatbot-developer', 'app-developer'],
  },
};

export const PROFILE_TAXONOMY: Record<ProfileSlug, ProfileTaxonomyEntry> = {
  affiliation: {
    profileSlug: 'affiliation',
    title: 'Affiliation',
    primaryArchetype: 'content',
    cluster: 'creator-monetization',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  agence: {
    profileSlug: 'agence',
    title: 'Agence',
    primaryArchetype: 'service',
    cluster: 'consulting',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'advanced',
  },
  'ai-automation': {
    profileSlug: 'ai-automation',
    title: 'Automatisation IA',
    primaryArchetype: 'service',
    secondaryArchetype: 'saas',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'ai-content-creator': {
    profileSlug: 'ai-content-creator',
    title: 'Créateur de contenu IA',
    primaryArchetype: 'content',
    cluster: 'creator-core',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'amazon-fba': {
    profileSlug: 'amazon-fba',
    title: 'Amazon FBA',
    primaryArchetype: 'ecommerce',
    cluster: 'commerce-execution',
    parentProfileSlug: 'ecommerce',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'intermediate',
  },
  'app-developer': {
    profileSlug: 'app-developer',
    title: "Développeur d'applications",
    primaryArchetype: 'service',
    secondaryArchetype: 'saas',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'advanced',
  },
  blogging: {
    profileSlug: 'blogging',
    title: 'Blogging',
    primaryArchetype: 'content',
    cluster: 'editorial-media',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'chatbot-developer': {
    profileSlug: 'chatbot-developer',
    title: 'Développeur chatbot',
    primaryArchetype: 'service',
    secondaryArchetype: 'saas',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  closing: {
    profileSlug: 'closing',
    title: 'Closing',
    primaryArchetype: 'service',
    cluster: 'sales',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  coaching: {
    profileSlug: 'coaching',
    title: 'Coaching',
    primaryArchetype: 'formation',
    secondaryArchetype: 'service',
    cluster: 'coaching',
    parentProfileSlug: 'formation',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'community-builder': {
    profileSlug: 'community-builder',
    title: 'Community Builder',
    primaryArchetype: 'content',
    secondaryArchetype: 'service',
    cluster: 'creator-core',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  consulting: {
    profileSlug: 'consulting',
    title: 'Consulting',
    primaryArchetype: 'service',
    secondaryArchetype: 'formation',
    cluster: 'consulting',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'advanced',
  },
  'content-creator': {
    profileSlug: 'content-creator',
    title: 'Créateur de contenu',
    primaryArchetype: 'content',
    cluster: 'creator-core',
    quizEligibleAsPrimary: true,
    isPivotProfile: true,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  copywriter: {
    profileSlug: 'copywriter',
    title: 'Copywriter',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'data-entry-specialist': {
    profileSlug: 'data-entry-specialist',
    title: 'Opérateur de saisie',
    primaryArchetype: 'service',
    cluster: 'operations',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'design-graphique': {
    profileSlug: 'design-graphique',
    title: 'Design graphique',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  dropshipping: {
    profileSlug: 'dropshipping',
    title: 'Dropshipping',
    primaryArchetype: 'ecommerce',
    cluster: 'commerce-execution',
    parentProfileSlug: 'ecommerce',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'accessible',
  },
  ecommerce: {
    profileSlug: 'ecommerce',
    title: 'E-commerce',
    primaryArchetype: 'ecommerce',
    cluster: 'general-commerce',
    quizEligibleAsPrimary: true,
    isPivotProfile: true,
    isSideHustleFriendly: false,
    entryLevel: 'intermediate',
  },
  'elearning-creator': {
    profileSlug: 'elearning-creator',
    title: 'Créateur de formation en ligne',
    primaryArchetype: 'formation',
    secondaryArchetype: 'content',
    cluster: 'education-core',
    parentProfileSlug: 'formation',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'email-marketer': {
    profileSlug: 'email-marketer',
    title: 'Email marketer',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'entraineur-ia': {
    profileSlug: 'entraineur-ia',
    title: 'Entraîneur IA',
    primaryArchetype: 'service',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  formation: {
    profileSlug: 'formation',
    title: 'Formation',
    primaryArchetype: 'formation',
    cluster: 'education-core',
    quizEligibleAsPrimary: true,
    isPivotProfile: true,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  freelance: {
    profileSlug: 'freelance',
    title: 'Freelance',
    primaryArchetype: 'service',
    cluster: 'general-service',
    quizEligibleAsPrimary: true,
    isPivotProfile: true,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  infoproduits: {
    profileSlug: 'infoproduits',
    title: 'Infoproduits',
    primaryArchetype: 'formation',
    secondaryArchetype: 'content',
    cluster: 'infoproducts',
    parentProfileSlug: 'formation',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'lead-generation': {
    profileSlug: 'lead-generation',
    title: 'Génération de leads',
    primaryArchetype: 'service',
    cluster: 'sales',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  livecommerce: {
    profileSlug: 'livecommerce',
    title: 'Live Commerce',
    primaryArchetype: 'ecommerce',
    secondaryArchetype: 'content',
    cluster: 'hybrid-commerce-content',
    parentProfileSlug: 'ecommerce',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
    notes: "Voie hybride. Utile éditorialement, mais ne doit plus être traité comme résultat principal du quiz.",
  },
  newsletter: {
    profileSlug: 'newsletter',
    title: 'Newsletter',
    primaryArchetype: 'content',
    cluster: 'editorial-media',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'notion-expert': {
    profileSlug: 'notion-expert',
    title: 'Expert Notion',
    primaryArchetype: 'service',
    secondaryArchetype: 'formation',
    cluster: 'operations',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  'online-tutor': {
    profileSlug: 'online-tutor',
    title: 'Tuteur en ligne',
    primaryArchetype: 'formation',
    secondaryArchetype: 'service',
    cluster: 'education-core',
    parentProfileSlug: 'formation',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'pet-sitter': {
    profileSlug: 'pet-sitter',
    title: "Garde d'animaux",
    primaryArchetype: 'service',
    cluster: 'side-income-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  podcast: {
    profileSlug: 'podcast',
    title: 'Podcast',
    primaryArchetype: 'content',
    cluster: 'editorial-media',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'print-on-demand': {
    profileSlug: 'print-on-demand',
    title: 'Print on Demand',
    primaryArchetype: 'ecommerce',
    cluster: 'commerce-execution',
    parentProfileSlug: 'ecommerce',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'prompt-engineer': {
    profileSlug: 'prompt-engineer',
    title: 'Prompt engineer',
    primaryArchetype: 'service',
    secondaryArchetype: 'saas',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  saas: {
    profileSlug: 'saas',
    title: 'SaaS',
    primaryArchetype: 'saas',
    cluster: 'software-product',
    quizEligibleAsPrimary: true,
    isPivotProfile: true,
    isSideHustleFriendly: false,
    entryLevel: 'advanced',
  },
  'seo-consultant': {
    profileSlug: 'seo-consultant',
    title: 'Consultant SEO',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'intermediate',
  },
  setter: {
    profileSlug: 'setter',
    title: 'Setter',
    primaryArchetype: 'service',
    cluster: 'sales',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'social-media-ads-manager': {
    profileSlug: 'social-media-ads-manager',
    title: 'Gestionnaire de publicités social media',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'intermediate',
  },
  'social-media-manager': {
    profileSlug: 'social-media-manager',
    title: 'Gestionnaire des réseaux sociaux',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'stock-photography': {
    profileSlug: 'stock-photography',
    title: 'Photographie de stock',
    primaryArchetype: 'content',
    cluster: 'creator-assets',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'testeur-utilisateur': {
    profileSlug: 'testeur-utilisateur',
    title: 'Testeur utilisateur',
    primaryArchetype: 'service',
    cluster: 'side-income-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
    notes: "Sous-profil d'entrée de gamme. Porte d'entrée vers le freelance/service, pas résultat principal de quiz.",
  },
  'translation-services': {
    profileSlug: 'translation-services',
    title: 'Services de traduction',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'virtual-assistant': {
    profileSlug: 'virtual-assistant',
    title: 'Assistant virtuel',
    primaryArchetype: 'service',
    cluster: 'operations',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'voiceover-artist': {
    profileSlug: 'voiceover-artist',
    title: 'Artiste voix off',
    primaryArchetype: 'service',
    secondaryArchetype: 'content',
    cluster: 'marketing-execution',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
  'web-scraping-expert': {
    profileSlug: 'web-scraping-expert',
    title: 'Expert scraping web',
    primaryArchetype: 'service',
    secondaryArchetype: 'saas',
    cluster: 'tech-service',
    parentProfileSlug: 'freelance',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: false,
    entryLevel: 'advanced',
  },
  youtube: {
    profileSlug: 'youtube',
    title: 'YouTube',
    primaryArchetype: 'content',
    cluster: 'creator-core',
    parentProfileSlug: 'content-creator',
    quizEligibleAsPrimary: false,
    isPivotProfile: false,
    isSideHustleFriendly: true,
    entryLevel: 'accessible',
  },
};

export function getArchetypeDefinition(archetype: CanonicalArchetype): ArchetypeDefinition {
  return ARCHETYPE_DEFINITIONS[archetype];
}

export function getProfileTaxonomy(profileSlug: ProfileSlug): ProfileTaxonomyEntry {
  return PROFILE_TAXONOMY[profileSlug];
}

export function getProfilesByArchetype(archetype: CanonicalArchetype): ProfileTaxonomyEntry[] {
  return PROFILE_SLUGS.map((slug) => PROFILE_TAXONOMY[slug]).filter(
    (entry) => entry.primaryArchetype === archetype
  );
}

export function getPivotProfileForArchetype(archetype: CanonicalArchetype): ProfileTaxonomyEntry {
  return PROFILE_TAXONOMY[ARCHETYPE_DEFINITIONS[archetype].pivotProfileSlug];
}

export function getFeaturedProfilesForArchetype(archetype: CanonicalArchetype): ProfileTaxonomyEntry[] {
  return ARCHETYPE_DEFINITIONS[archetype].featuredProfileSlugs.map(
    (slug) => PROFILE_TAXONOMY[slug]
  );
}

export function getChildProfiles(parentProfileSlug: ProfileSlug): ProfileTaxonomyEntry[] {
  return PROFILE_SLUGS.map((slug) => PROFILE_TAXONOMY[slug]).filter(
    (entry) => entry.parentProfileSlug === parentProfileSlug
  );
}
