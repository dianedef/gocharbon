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
          'Gestion de projet': { label: 'Gestion de projet' },
          'Risques': { label: 'Risques' },
          'Organisation': { label: 'Organisation' }
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
          'Éthique': { label: 'Éthique' },
          'Innovation': { label: 'Innovation' },
          'Développement Durable': { label: 'Développement Durable' }
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
      copywriting: {
        label: 'Copywriting',
        subtags: {
          'Frameworks': { label: 'Frameworks' },
          'Persuasion': { label: 'Persuasion' },
          'Email Copy': { label: 'Email Copy' },
          'Direct Response': { label: 'Direct Response' }
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
      contentmarketing: {
        label: 'Content Marketing',
        subtags: {
          'Blog': { label: 'Blog' },
          'Newsletter': { label: 'Newsletter' },
          'Storytelling': { label: 'Storytelling' },
          'Lead Magnet': { label: 'Lead Magnet' }
        }
      },
      reseauxsociaux: {
        label: 'Réseaux Sociaux',
        subtags: {
          'Instagram': { label: 'Instagram' },
          'LinkedIn': { label: 'LinkedIn' },
          'TikTok': { label: 'TikTok' },
          'Twitter': { label: 'Twitter' },
          'Facebook': { label: 'Facebook' },
          'YouTube': { label: 'YouTube' }
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
          'Objectifs': { label: 'Objectifs' },
          'Planification': { label: 'Planification' }
        }
      },
      mental: {
        label: 'Mental',
        subtags: {
          'Mental': { label: 'Mental' },
          'Mindset': { label: 'Mindset' },
          'Décision': { label: 'Décision' },
          'Motivation': { label: 'Motivation' }
        }
      },
      connaissances: {
        label: 'Connaissances',
        subtags: {
          'Connaissance': { label: 'Connaissance' },
          'Influence': { label: 'Influence' },
          'Rétention': { label: 'Retention' }
        }
      },
      methodes: {
        label: 'Méthodes',
        subtags: {
          'GTD': { label: 'GTD' },
          'Pomodoro': { label: 'Pomodoro' },
          'Time Blocking': { label: 'Time Blocking' }
        }
      }
    }
  },
  tutoriels: {
    label: 'Tutoriels',
    subtags: {
      guides: {
        label: 'Guides Pratiques',
        subtags: {
          'Débutant': { label: 'Débutant' },
          'Avancé': { label: 'Avancé' },
          'Pas à Pas': { label: 'Pas à Pas' }
        }
      }
    }
  },
  outils: {
    label: 'Outils Français',
    subtags: {
      marketing: {
        label: 'Marketing',
        subtags: {
          'Email': { label: 'Email Marketing' },
          'Social Media': { label: 'Réseaux Sociaux' },
          'SEO': { label: 'SEO' },
          'Analytics': { label: 'Analytics' },
          'Affiliation': { label: 'Affiliation' }
        }
      },
      business: {
        label: 'Business',
        subtags: {
          'CRM': { label: 'CRM' },
          'Facturation': { label: 'Facturation' },
          'Comptabilité': { label: 'Comptabilité' },
          'Légal': { label: 'Légal' },
          'RH': { label: 'Ressources Humaines' }
        }
      },
      productivite: {
        label: 'Productivité',
        subtags: {
          'Gestion Projet': { label: 'Gestion de Projet' },
          'Collaboration': { label: 'Collaboration' },
          'Automatisation': { label: 'Automatisation' },
          'Bureautique': { label: 'Bureautique' }
        }
      },
      creation: {
        label: 'Création',
        subtags: {
          'Design': { label: 'Design' },
          'Vidéo': { label: 'Vidéo' },
          'Audio': { label: 'Audio' },
          'Rédaction': { label: 'Rédaction' }
        }
      },
      ecommerce: {
        label: 'E-commerce',
        subtags: {
          'CMS': { label: 'CMS E-commerce' },
          'Paiement': { label: 'Paiement' },
          'Logistique': { label: 'Logistique' }
        }
      },
      tech: {
        label: 'Tech',
        subtags: {
          'Hébergement': { label: 'Hébergement' },
          'IA': { label: 'Intelligence Artificielle' },
          'Dev': { label: 'Développement' },
          'Sécurité': { label: 'Sécurité' }
        }
      },
      communication: {
        label: 'Communication',
        subtags: {
          'Chatbot': { label: 'Chatbot' },
          'Visio': { label: 'Visioconférence' }
        }
      },
      formation: {
        label: 'Formation',
        subtags: {
          'LMS': { label: 'LMS' },
          'E-learning': { label: 'E-learning' }
        }
      }
    }
  }
}; 
