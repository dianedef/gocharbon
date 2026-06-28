# Fonction pour créer un fichier Markdown avec le frontmatter de base
function Create-MdFile {
    param (
        [string]$FilePath,
        [string]$Title,
        [string]$Description
    )
    
    $content = @"
---
title: $Title
description: $Description
--- 

# $Title

Contenu à venir...
"@
    
    New-Item -Path $FilePath -Force -ItemType File
    Set-Content -Path $FilePath -Value $content -Encoding UTF8
}

# Création de la structure de base
$folders = @(
    "src/content/docs/introduction",
    "src/content/docs/modeles-affaires",
    "src/content/docs/strategies",
    "src/content/docs/outils",
    "src/content/docs/financement",
    "src/content/docs/marketing",
    "src/content/docs/gestion",
    "src/content/docs/ressources-humaines",
    "src/content/docs/technologie",
    "src/content/docs/plateformes",
    "src/content/docs/clients",
    "src/content/docs/planification",
    "src/content/docs/aspects-juridiques",
    "src/content/docs/developpement-personnel",
    "src/content/docs/innovation",
    "src/content/docs/responsabilite-sociale",
    "src/content/docs/reseautage",
    "src/content/docs/evaluation-performance",
    "src/content/docs/internationalisation",
    "src/content/docs/gestion-crise"
)

foreach ($folder in $folders) {
    New-Item -Path $folder -ItemType Directory -Force
}

# Création de l'index principal
$indexContent = @"
---
title: Business en ligne - Encyclopédie de référence
description: Ressource complète sur le business en ligne et l'entrepreneuriat
template: splash
hero:
  tagline: La référence francophone sur le business en ligne et l'entrepreneuriat
  actions:
    - text: Commencer ici
      link: /introduction/definitions
      icon: right-arrow
      variant: primary
---

## Bienvenue sur notre encyclopédie du business en ligne

Cette ressource complète vise à fournir une compréhension approfondie du business en ligne, ses modèles, ses enjeux et les meilleures pratiques pour réussir en tant qu'entrepreneur.
"@

New-Item -Path "src/content/docs/index.mdx" -Force -ItemType File
Set-Content -Path "src/content/docs/index.mdx" -Value $indexContent -Encoding UTF8

# Introduction
Create-MdFile "src/content/docs/introduction/definitions.md" "Définitions et concepts" "Comprendre les différentes définitions et concepts liés au business en ligne"
Create-MdFile "src/content/docs/introduction/histoire.md" "Histoire du business en ligne" "Évolution historique du business en ligne et de l'entrepreneuriat"

# Modèles d'affaires
Create-MdFile "src/content/docs/modeles-affaires/ecommerce.md" "E-commerce" "Comprendre et identifier les modèles d'e-commerce"
Create-MdFile "src/content/docs/modeles-affaires/affiliation.md" "Marketing d'affiliation" "Formes et impacts du marketing d'affiliation"
Create-MdFile "src/content/docs/modeles-affaires/startups.md" "Startups" "Analyse des startups et de leur fonctionnement"
Create-MdFile "src/content/docs/modeles-affaires/services-en-ligne.md" "Services en ligne" "Comprendre les services en ligne et leurs modèles économiques"

# Stratégies
Create-MdFile "src/content/docs/strategies/marketing.md" "Stratégies de marketing" "Techniques de marketing pour le business en ligne"
Create-MdFile "src/content/docs/strategies/croissance.md" "Stratégies de croissance" "Approches pour faire croître votre entreprise en ligne"
Create-MdFile "src/content/docs/strategies/expansion.md" "Stratégies d'expansion" "Comment étendre votre business à l'international"

# Outils
Create-MdFile "src/content/docs/outils/plateformes.md" "Plateformes de vente" "Comparaison des différentes plateformes de vente en ligne"
Create-MdFile "src/content/docs/outils/logiciels.md" "Logiciels de gestion" "Outils logiciels pour gérer votre business en ligne"
Create-MdFile "src/content/docs/outils/analytics.md" "Outils d'analyse" "Utilisation des outils d'analyse pour optimiser votre business"

# Financement
Create-MdFile "src/content/docs/financement/levée-de-fonds.md" "Levée de fonds" "Stratégies pour lever des fonds pour votre entreprise"
Create-MdFile "src/content/docs/financement/subventions.md" "Subventions et aides" "Opportunités de subventions pour les entrepreneurs"
Create-MdFile "src/content/docs/financement/crowdfunding.md" "Crowdfunding" "Utilisation du crowdfunding pour financer votre projet"

# Marketing
Create-MdFile "src/content/docs/marketing/seo.md" "SEO" "Optimisation pour les moteurs de recherche"
Create-MdFile "src/content/docs/marketing/reseaux-sociaux.md" "Marketing sur les réseaux sociaux" "Utilisation des réseaux sociaux pour promouvoir votre business"
Create-MdFile "src/content/docs/marketing/content-marketing.md" "Content Marketing" "Stratégies de marketing de contenu pour attirer des clients"

# Gestion
Create-MdFile "src/content/docs/gestion/gestion-de-projet.md" "Gestion de projet" "Principes de gestion de projet pour les entrepreneurs"
Create-MdFile "src/content/docs/gestion/finances.md" "Gestion financière" "Gestion des finances d'une entreprise en ligne"
Create-MdFile "src/content/docs/gestion/risques.md" "Gestion des risques" "Identifier et gérer les risques dans le business en ligne"

# Ressources humaines
Create-MdFile "src/content/docs/ressources-humaines/recrutement.md" "Recrutement" "Stratégies de recrutement pour les startups"
Create-MdFile "src/content/docs/ressources-humaines/management.md" "Management" "Techniques de management pour les équipes à distance"
Create-MdFile "src/content/docs/ressources-humaines/culture.md" "Culture d'entreprise" "Créer une culture d'entreprise positive"

# Technologie
Create-MdFile "src/content/docs/technologie/ecommerce-tech.md" "Technologies d'e-commerce" "Technologies clés pour le e-commerce"
Create-MdFile "src/content/docs/technologie/innovation.md" "Innovation technologique" "Rôle de l'innovation dans le business en ligne"

# Plateformes
Create-MdFile "src/content/docs/plateformes/marketplaces.md" "Marketplaces" "Utilisation des marketplaces pour vendre vos produits"
Create-MdFile "src/content/docs/plateformes/saas.md" "SaaS" "Modèles SaaS et leur application dans le business en ligne"

# Clients
Create-MdFile "src/content/docs/clients/experience-client.md" "Expérience client" "Améliorer l'expérience client dans le business en ligne"
Create-MdFile "src/content/docs/clients/retention.md" "Fidélisation" "Stratégies pour fidéliser vos clients"

# Planification
Create-MdFile "src/content/docs/planification/business-plan.md" "Élaboration d'un business plan" "Comment rédiger un business plan efficace"
Create-MdFile "src/content/docs/planification/analyse-marche.md" "Analyse de marché" "Études de marché et analyse de la concurrence"

# Aspects juridiques
Create-MdFile "src/content/docs/aspects-juridiques/types-structures.md" "Types de structures juridiques" "Différences entre SARL, SAS, auto-entrepreneur, etc."
Create-MdFile "src/content/docs/aspects-juridiques/propriete-intellectuelle.md" "Propriété intellectuelle" "Brevets, marques, droits d'auteur."

# Développement personnel
Create-MdFile "src/content/docs/developpement-personnel/competences.md" "Compétences entrepreneuriales" "Compétences clés pour réussir en tant qu'entrepreneur"
Create-MdFile "src/content/docs/developpement-personnel/leadership.md" "Leadership et gestion d'équipe" "Techniques pour diriger efficacement une équipe."

# Innovation
Create-MdFile "src/content/docs/innovation/tendances.md" "Tendances du marché" "Suivre les tendances et innover."
Create-MdFile "src/content/docs/innovation/transformation-numerique.md" "Transformation numérique" "Impact de la technologie sur les modèles d'affaires."

# Responsabilité sociale
Create-MdFile "src/content/docs/responsabilite-sociale/entrepreneuriat-social.md" "Entrepreneuriat social" "Comment créer un impact social positif."
Create-MdFile "src/content/docs/responsabilite-sociale/ethique.md" "Éthique des affaires" "Pratiques éthiques dans le business."

# Réseautage
Create-MdFile "src/content/docs/reseautage/importance.md" "Importance du réseautage" "Comment construire un réseau professionnel."
Create-MdFile "src/content/docs/reseautage/partenariats.md" "Partenariats stratégiques" "Collaborations pour la croissance."

# Évaluation et performance
Create-MdFile "src/content/docs/evaluation-performance/indicateurs.md" "Indicateurs de performance" "Mesurer le succès d'une entreprise."
Create-MdFile "src/content/docs/evaluation-performance/feedback.md" "Feedback et amélioration continue" "Importance du retour d'information."

# Internationalisation
Create-MdFile "src/content/docs/internationalisation/expansion.md" "Expansion à l'international" "Stratégies pour entrer sur de nouveaux marchés."
Create-MdFile "src/content/docs/internationalisation/culture.md" "Culture d'entreprise à l'international" "Adapter son business à différentes cultures."

# Gestion de crise
Create-MdFile "src/content/docs/gestion-crise/strategies.md" "Stratégies de gestion de crise" "Comment faire face à des situations imprévues."
Create-MdFile "src/content/docs/gestion-crise/resilience.md" "Résilience d'entreprise" "Construire une entreprise résiliente."

Write-Host "Structure du site créée avec succès!"