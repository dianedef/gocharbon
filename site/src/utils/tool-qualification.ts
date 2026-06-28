export type QualificationLocale =
  | "france"
  | "union-europeenne"
  | "hors-union-europeenne"
  | "indetermine";

export type QualificationStrength =
  | "fort"
  | "partiel"
  | "faible"
  | "indetermine";

export type DataHostingZone =
  | "france"
  | "union-europeenne"
  | "hors-union-europeenne"
  | "multi-region"
  | "inconnu";

export interface ToolQualification {
  qualificationLocale?: QualificationLocale;
  ancrageEconomique?: QualificationStrength;
  niveauResponsabilite?: QualificationStrength;
  paysSiege?: string;
  paysFiscal?: string;
  paysFondateurs?: string[];
  hebergementDonnees?: DataHostingZone;
  societeMere?: string;
  sourcesVerification?: string[];
  notesQualification?: string;
  methodologieVersion?: string;
  metadataEnrichedAt?: string | null;
}

export interface EngagementBadge {
  label: string;
  shortLabel: string;
  tone: "fort" | "solide" | "modere" | "faible" | "pending";
  score: number;
  maxScore: number;
  rationale: string;
  isPending: boolean;
}

export const qualificationLocaleLabels: Record<QualificationLocale, string> = {
  france: "France",
  "union-europeenne": "Union européenne",
  "hors-union-europeenne": "Hors Union européenne",
  indetermine: "Indéterminé",
};

export const qualificationStrengthLabels: Record<QualificationStrength, string> = {
  fort: "Fort",
  partiel: "Partiel",
  faible: "Faible",
  indetermine: "Indéterminé",
};

export const dataHostingLabels: Record<DataHostingZone, string> = {
  france: "France",
  "union-europeenne": "Union européenne",
  "hors-union-europeenne": "Hors Union européenne",
  "multi-region": "Multi-région",
  inconnu: "Inconnu",
};

export function hasToolQualification(
  value?: ToolQualification | null,
): value is ToolQualification {
  if (!value) {
    return false;
  }

  return Boolean(
    value.qualificationLocale ||
      value.ancrageEconomique ||
      value.niveauResponsabilite ||
      value.paysSiege ||
      value.paysFiscal ||
      value.paysFondateurs?.length ||
      value.hebergementDonnees ||
      value.societeMere ||
      value.sourcesVerification?.length ||
      value.notesQualification,
  );
}

function normalizeCountry(value?: string): string {
  if (!value) {
    return "";
  }

  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-zA-Z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function isFrance(value?: string): boolean {
  const normalized = normalizeCountry(value);
  return [
    "france",
    "fr",
    "francais",
    "francaise",
    "french",
    "republique francaise",
  ].includes(normalized);
}

function isEuropeanCountry(value?: string): boolean {
  const normalized = normalizeCountry(value);
  return [
    "france",
    "belgique",
    "belgium",
    "espagne",
    "spain",
    "italie",
    "italy",
    "allemagne",
    "germany",
    "portugal",
    "pays-bas",
    "netherlands",
    "irlande",
    "ireland",
    "luxembourg",
    "autriche",
    "austria",
    "suede",
    "sweden",
    "danemark",
    "denmark",
    "finlande",
    "finland",
    "estonie",
    "estonia",
    "lettonie",
    "latvia",
    "lituanie",
    "lithuania",
    "pologne",
    "poland",
    "republique tcheque",
    "czech republic",
    "slovaquie",
    "slovakia",
    "slovenie",
    "slovenia",
    "croatie",
    "croatia",
    "roumanie",
    "romania",
    "bulgarie",
    "bulgaria",
    "grece",
    "greece",
    "chypre",
    "cyprus",
    "malte",
    "malta",
    "hongrie",
    "hungary",
  ].includes(normalized);
}

export function computeEngagementBadge(
  qualification?: ToolQualification | null,
): EngagementBadge {
  const maxScore = 20;

  if (!hasToolQualification(qualification)) {
    return {
      label: "Engagement français en cours d’évaluation",
      shortLabel: "Évaluation en cours",
      tone: "pending",
      score: 0,
      maxScore,
      rationale: "Métadonnées insuffisantes pour calculer un niveau fiable.",
      isPending: true,
    };
  }

  let score = 0;

  switch (qualification.qualificationLocale) {
    case "france":
      score += 6;
      break;
    case "union-europeenne":
      score += 3;
      break;
    case "hors-union-europeenne":
      score += 0;
      break;
    case "indetermine":
    default:
      break;
  }

  switch (qualification.ancrageEconomique) {
    case "fort":
      score += 5;
      break;
    case "partiel":
      score += 3;
      break;
    case "faible":
    case "indetermine":
    default:
      break;
  }

  switch (qualification.niveauResponsabilite) {
    case "fort":
      score += 5;
      break;
    case "partiel":
      score += 3;
      break;
    case "faible":
    case "indetermine":
    default:
      break;
  }

  if (isFrance(qualification.paysFiscal)) {
    score += 2;
  } else if (isEuropeanCountry(qualification.paysFiscal)) {
    score += 1;
  }

  switch (qualification.hebergementDonnees) {
    case "france":
    case "union-europeenne":
    case "multi-region":
      score += 1;
      break;
    case "hors-union-europeenne":
    case "inconnu":
    default:
      break;
  }

  if ((qualification.sourcesVerification?.length ?? 0) >= 2) {
    score += 1;
  }

  if (score >= 16) {
    return {
      label: "Engagement français fort",
      shortLabel: "Engagement fort",
      tone: "fort",
      score,
      maxScore,
      rationale: "Ancrage français documenté et cohérence élevée entre structure, responsabilité et preuves.",
      isPending: false,
    };
  }

  if (score >= 11) {
    return {
      label: "Engagement français solide",
      shortLabel: "Engagement solide",
      tone: "solide",
      score,
      maxScore,
      rationale: "Ancrage local crédible, avec quelques zones encore partielles ou mixtes.",
      isPending: false,
    };
  }

  if (score >= 6) {
    return {
      label: "Engagement français modéré",
      shortLabel: "Engagement modéré",
      tone: "modere",
      score,
      maxScore,
      rationale: "Présence locale visible, mais preuves ou cohérence encore limitées.",
      isPending: false,
    };
  }

  return {
    label: "Engagement français faible",
    shortLabel: "Engagement faible",
    tone: "faible",
    score,
    maxScore,
    rationale: "Peu d’éléments probants en faveur d’un ancrage français fort.",
    isPending: false,
  };
}
