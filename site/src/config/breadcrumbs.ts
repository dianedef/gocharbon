import type { BreadcrumbsOptions } from "astro-breadcrumbs";

export const breadcrumbsConfig: BreadcrumbsOptions = {
  indexText: "",
  homeText: "",
  ariaCurrent: "page",
  truncated: true,
  customLabels: {
    "tech": "Technologie",
    "business": "Business",
    "apps": "Applications",
    "tutos": "Tutoriels",
    "parcours": "Parcours",
    "ia": "Intelligence Artificielle",
    "saas": "SaaS",
    "marketing": "Marketing"
  }
}; 
