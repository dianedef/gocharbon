/**
 * Tag Hierarchy Configuration
 * 
 * Defines the complete taxonomy of blog post tags in a 3-level hierarchy:
 * 1. Main tags (business, marketing, tech, etc.) - Top-level categories
 * 2. Subtags (entrepreneuriat, finance, etc.) - Mid-level subcategories
 * 3. Sub-subtags (startup, validation, etc.) - Specific topics
 * 
 * STRUCTURE:
 * - Each level has a human-readable "label" for UI display
 * - Optional "subtags" object for child tags
 * - Used by filtering logic, UI components, and route generation
 * 
 * BUSINESS LOGIC:
 * - When a subtag is selected, its parent is implicitly included
 * - Tag normalization handles accent/case variations
 * - This structure drives the FilterTags component UI
 * 
 * MAINTENANCE:
 * - Add new tags here to make them available site-wide
 * - Keep labels concise for UI display
 * - Organize logically to help users find content
 * 
 * @module tagHierarchy
 */

import type { TagCategory, TagHierarchy } from '../utils/types/tags';

/**
 * Complete tag taxonomy for the blog
 * 
 * This object is the single source of truth for all tags.
 * Changes here propagate to: filtering, navigation, API routes, etc.
 */
export const tagHierarchy: TagHierarchy = {
  business: {
    label: 'Business',
    subtags: {
      entrepreneuriat: {
        label: 'Entrepreneuriat',
        subtags: {
          'Startup': { label: 'Startup' },
          'Vision': { label: 'Vision' },
          'Validation': { label: 'Validation' },
          'Succès': { label: 'Succès' },
          'Croissance': { label: 'Croissance' }
        }
      },
      finance: {
        label: 'Finance',
        subtags: {
          'Financement': { label: 'Financement' },
          'Investissement': { label: 'Investissement' },
          'Comptabilité': { label: 'Comptabilité' },
          'Prix': { label: 'Prix' },
          'Crowdfunding': { label: 'Crowdfunding' },
          'Subventions': { label: 'Subventions' }
        }
      },
      gestion: {
        label: 'Gestion',
        subtags: {
          'Management': { label: 'Management' },
          'Ressources Humaines': { label: 'RH' },
          'Gestion': { label: 'Gestion' },
          'Risques': { label: 'Risques' }
        }
      },
      ecommerce: {
        label: 'E-commerce',
        subtags: {
          'Marketplace': { label: 'Marketplace' },
          'Business en Ligne': { label: 'Business en Ligne' }
        }
      },
      revenus: {
        label: 'Revenus',
        subtags: {
          'Revenu Passif': { label: 'Revenu Passif' },
          'Monétisation': { label: 'Monétisation' },
          'Freelancing': { label: 'Freelancing' },
          'Affiliation': { label: 'Affiliation' }
        }
      },
      strategie: {
        label: 'Stratégie',
        subtags: {
          'International': { label: 'International' },
          'Expansion': { label: 'Expansion' },
          'Partenariats': { label: 'Partenariats' },
          'Concurrence': { label: 'Concurrence' },
          'RSE': { label: 'RSE' },
          'Innovation': { label: 'Innovation' },
        }
      }
    }
  },
  marketing: {
    label: 'Marketing',
    subtags: {
      vente: {
        label: 'Vente',
        subtags: {
          'Social Selling': { label: 'Social Selling' },
          'Personnalisation': { label: 'Personnalisation' },
          'Acquisition': { label: 'Acquisition' }
        }
      },
      publicite: {
        label: 'Publicité',
        subtags: {
          'Google Ads': { label: 'Google Ads' },
          'Facebook Ads': { label: 'Facebook Ads' },
          'Instagram Ads': { label: 'Instagram Ads' },
          'LinkedIn Ads': { label: 'LinkedIn Ads' }
        }
      },
      analytics: {
        label: 'Analytics'
      }
    }
  },
  tech: {
    label: 'Tech',
    subtags: {
      developpement: {
        label: 'Développement',
        subtags: {
          'Web': { label: 'Web' },
          'WebDev': { label: 'WebDev' },
          'Architecture': { label: 'Architecture' },
          'Programmation': { label: 'Programmation' },
          'Création de Site Web': { label: 'Création de Site Web' }
        }
      },
      frameworks: {
        label: 'Frameworks',
        subtags: {
          'React': { label: 'React' },
          'Vue': { label: 'Vue' },
          'Next.js': { label: 'Next.js' },
          'Nuxt.js': { label: 'Nuxt.js' },
          'Svelte': { label: 'Svelte' },
          'Astro': { label: 'Astro' }
        }
      },
      cms: {
        label: 'CMS',
        subtags: {
          'WordPress': { label: 'WordPress' },
          'WooCommerce': { label: 'WooCommerce' },
          'Drupal': { label: 'Drupal' },
          'Ghost': { label: 'Ghost' },
          'Joomla': { label: 'Joomla' },
          'Magento': { label: 'Magento' },
          'PrestaShop': { label: 'PrestaShop' },
          'Shopify': { label: 'Shopify' }
        }
      },
      securite: {
        label: 'Sécurité',
        subtags: {
          'Cybersécurité': { label: 'Cybersécurité' },
          'VPN': { label: 'VPN' },
          'Protection': { label: 'Protection' }
        }
      },
      outils: {
        label: 'Outils',
        subtags: {
          'Apps': { label: 'Applications' },
          'IA': { label: 'Intelligence Artificielle' },
          'Scraping': { label: 'Scraping' },
          'Audio': { label: 'Audio' },
          'Matériel': { label: 'Matériel' },
          'Données': { label: 'Data' },
          'NLP': { label: 'NLP' },
          'Automatisation': { label: 'Automatisation' },
          'Logiciel': { label: 'Logiciel' },
          'SaaS': { label: 'SaaS' },
          'Technologie': { label: 'Technologie' }
        }
      },
      performance: {
        label: 'Performance',
        subtags: {
          'Vitesse': { label: 'Vitesse' }
        }
      }
    }
  },
  contenu: {
    label: 'Contenu',
    subtags: {
      creation: {
        label: 'Création',
        subtags: {
          'Rédaction': { label: 'Rédaction' },
          'Digital': { label: 'Digital' }
        }
      },
      plateformes: {
        label: 'Plateformes',
        subtags: {
          'YouTube': { label: 'YouTube' },
          'Plateformes': { label: 'Autres Plateformes' },
          'Filtres': { label: 'Filtres' }
        }
      }
    }
  },
  seo: {
    label: 'SEO',
    subtags: {
      technique: {
        label: 'Technique',
        subtags: {
          'Technique': { label: 'Technique' }
        }
      },
      liens: {
        label: 'Liens',
        subtags: {
          'Backlinks': { label: 'Backlinks' },
          'Netlinking': { label: 'Netlinking' },
          'Liens': { label: 'Liens' },
          'Désaveu': { label: 'Désaveu' },
          'Maillage Interne': { label: 'Maillage Interne' }
        }
      },
      local: {
        label: 'Local',
        subtags: {
          'Local': { label: 'Local' },
          'Google Business': { label: 'Google Business' }
        }
      },
      semantique: {
        label: 'Sémantique',
        subtags: {
          'Sémantique': { label: 'Sémantique' },
          'Cocon Sémantique': { label: 'Cocon Sémantique' }
        }
      },
      qualite: {
        label: 'Qualité',
        subtags: {
          'E-A-T': { label: 'E-A-T' },
          'YMYL': { label: 'YMYL' },
          'Audit': { label: 'Audit' }
        }
      }
    }
  },
  productivite: {
    label: 'Productivité',
    subtags: {
      objectifs: {
        label: 'Objectifs',
        subtags: {
          'Objectifs': { label: 'Objectifs' }
        }
      },
      mental: {
        label: 'Mental',
        subtags: {
          'Mental': { label: 'Mental' },
          'Mindset': { label: 'Mindset' },
          'Décision': { label: 'Décision' }
        }
      },
      connaissances: {
        label: 'Connaissances',
        subtags: {
          'Connaissance': { label: 'Connaissance' },
          'Influence': { label: 'Influence' },
          'Rétention': { label: 'Retention' }
        }
      }
    }
  }
}; 