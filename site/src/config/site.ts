export const SITE = {
  name: "GoCharbon",
  nameUpper: "GOCHARBON",
  url: "https://gocharbon.com",
  feedPath: "/feed.xml",
  locale: "fr_FR",
  copyrightName: "GoCharbon",
  publisherType: "Organization",
  social: {
    youtube: "https://www.youtube.com/@charbon",
    x: "https://x.com/charbon",
    instagram: "https://www.instagram.com/charbon",
    linkedin: "https://www.linkedin.com/company/charbon",
    facebook: "https://www.facebook.com/charbon",
  },
  descriptions: {
    default:
      "Le guide de survie digital pour entrepreneurs francophones. On va au charbon.",
    footer:
      "Le guide de survie digital pour entrepreneurs francophones : choisir vite, décider mieux, avancer proprement.",
  },
} as const;

export function getSiteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

export function formatDocumentTitle(title?: string) {
  if (!title) {
    return SITE.nameUpper;
  }

  const normalizedTitle = title.toLowerCase();
  const normalizedBrand = SITE.name.toLowerCase();

  if (normalizedTitle.includes(normalizedBrand)) {
    return title;
  }

  return `${title} | ${SITE.nameUpper}`;
}
