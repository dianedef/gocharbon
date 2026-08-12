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
    "ia": "Intelligence Artificielle",
    "saas": "SaaS",
    "marketing": "Marketing"
  }
}; 