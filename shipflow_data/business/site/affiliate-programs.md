---
artifact: affiliate_program_registry
metadata_schema_version: "1.0"
artifact_version: "0.1.0"
project: "gocharbon"
created: "2026-05-11"
updated: "2026-05-11"
status: draft
source_skill: sf-docs
scope: affiliate-programs
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
docs_impact: "yes"
security_impact: "yes"
monetization_surfaces:
  - "site/src/data/outils"
  - "site/src/pages/outils.astro"
  - "site/src/pages/[...slug].astro"
  - "site/src/content/parcours"
  - "newsletter future"
disclosure_policy: "Tout lien affilié ou placement rémunéré doit être signalé clairement avant ou autour du lien, avec une justification éditoriale indépendante."
secrets_policy: "Ne jamais stocker dans ce fichier de token, identifiant de dashboard, lien privé d'administration, coordonnées bancaires, informations fiscales, contrat privé ou contact personnel de partenaire."
program_statuses:
  - candidat
  - présent à auditer
  - actif
  - en pause
  - rejeté
target_projects:
  - gocharbon
evidence:
  - "shipflow_data/business/business.md"
  - "shipflow_data/product/site/product.md"
  - "shipflow_data/gtm/site/gtm.md"
  - "shipflow_data/branding/branding.md"
  - "shipflow_data/technical/site/README.md"
  - "shipflow_data/editorial/site/content-map.md"
  - "shipflow_data/research/site/SPEC-roadmap.md"
  - "site/src/content.config.ts"
  - "scripts/migrate_outils.py"
  - "site/src/data/outils/productivite/pcloud.md"
  - "site/src/data/outils/formation/coacheasy.md"
  - "site/src/data/outils/tech/ia/noota.md"
  - "site/src/data/outils/tech/ia/sendshort.md"
  - "site/src/data/outils/tech/ia/autres/merciapp.md"
  - "site/src/data/outils/tech/ia/autres/novalya.md"
depends_on:
  - "shipflow_data/business/business.md"
  - "shipflow_data/product/site/product.md"
  - "shipflow_data/gtm/site/gtm.md"
  - "shipflow_data/branding/branding.md"
  - "shipflow_data/technical/site/README.md"
  - "shipflow_data/editorial/site/content-map.md"
supersedes: []
next_review: "2026-08-11"
next_step: "/sf-docs audit shipflow_data/business/site/affiliate-programs.md"
---

# Registre affiliation — GoCharbon

## Rôle

Ce registre gouverne les programmes d'affiliation, les liens rémunérés, les partenariats et les placements sponsorisés utilisés par GoCharbon.

Il ne remplace pas :

- les fiches outils dans `site/src/data/outils` ;
- les champs de qualification locale (`qualificationLocale`, `ancrageEconomique`, `niveauResponsabilite`, `sourcesVerification`) ;
- les preuves officielles à vérifier avant publication ;
- un outil de stockage sécurisé pour secrets, contrats, fiscalité ou paiement.

## Doctrine

- La confiance lecteur passe avant la commission.
- Un outil recommandé doit rester recommandable même sans affiliation.
- L'affiliation doit être visible, compréhensible et placée près du lien concerné.
- Les placements sponsorisés doivent être distingués des recommandations éditoriales.
- Les alternatives françaises ou européennes passent en premier quand elles font le job.
- Un outil étranger peut être recommandé si c'est le meilleur choix réel pour le lecteur, mais son origine doit rester claire.
- Les montants, taux de commission, durées de cookie et conditions doivent être vérifiés sur source officielle avant d'être publiés.
- Les programmes non vérifiés restent `à vérifier`, même si une ancienne fiche contient déjà un lien.

## Disclosure public

Formulation de base à adapter selon le contexte :

> Disclaimer : ce lien est un lien affilié. Si tu t'inscris via ce lien, je touche une petite commission. Ça ne change rien pour toi, mais ça m'aide à faire tourner le site. Je recommande cet outil parce qu'il est pertinent dans ce cas précis.

Règles :

- Ne pas cacher le disclaimer dans un footer éloigné.
- Ne pas laisser croire qu'un outil est gratuit si le revenu dépend d'un achat ou d'un abonnement.
- Ne pas utiliser de wording qui transforme une commission en preuve de qualité.
- Ajouter les limites de l'outil dans la même page quand elles sont importantes pour la décision.

## Données interdites dans ce fichier

Ne jamais stocker ici :

- tokens API, tokens dashboard, clés de tracking privées ;
- coordonnées bancaires, informations fiscales, RIB, TVA, documents KYC ;
- contrats privés, taux confidentiels, clauses non publiques ;
- emails personnels ou numéros de téléphone de partenaires ;
- liens d'administration non publics.

Les informations sensibles doivent rester dans un coffre de secrets ou un outil contractuel dédié. Ce registre garde uniquement le cadrage éditorial et les preuves publiques.

## Statuts

| Statut | Sens | Action attendue |
|---|---|---|
| `candidat` | Programme cité dans la stratégie ou plausible pour l'audience. | Vérifier source officielle et fit éditorial avant usage. |
| `présent à auditer` | Un lien ou une page existe déjà dans le contenu. | Vérifier disclosure, source, tracking et pertinence. |
| `actif` | Programme vérifié, disclosure prête, lien public acceptable. | Surveiller conditions et performance. |
| `en pause` | Programme existant mais non utilisable temporairement. | Ne pas publier de nouveau lien. |
| `rejeté` | Programme incompatible avec la doctrine. | Ne pas recommander sauf changement documenté. |

## Registre initial

| Programme | Type | Statut | Preuve projet | Règle éditoriale |
|---|---|---|---|---|
| AppSumo | Lifetime deals / marketplace SaaS | `candidat` | `shipflow_data/business/business.md` | Utile pour les freelances équipés, mais toujours vérifier la survie produit, les limites du deal et les alternatives françaises. |
| Vie De Dingue | Deals / écosystème francophone | `candidat` | `shipflow_data/business/business.md` | Intéressant si l'offre aide vraiment les indépendants francophones ; ne pas recommander pour la commission seule. |
| Brevo | Emailing / CRM français | `candidat` | `shipflow_data/business/business.md` | Candidat naturel quand l'usage emailing est réel ; vérifier programme, conditions et fit avec alternatives. |
| Lemlist | Prospection / outbound | `candidat` | `shipflow_data/business/business.md` | À réserver aux cas où le lecteur a déjà une offre et une cible claire ; ne pas vendre comme raccourci magique. |
| Tolt | Plateforme affiliation SaaS | `candidat` | `shipflow_data/business/business.md` | À traiter comme infrastructure partenaire possible, pas comme recommandation grand public sans cas d'usage précis. |
| pCloud | Stockage cloud | `présent à auditer` | `site/src/data/outils/productivite/pcloud.md` contient `u_affi` | Vérifier disclosure visible, conformité avec la qualification hors UE et absence de claim souveraineté exagéré. |
| Coacheasy | Plateforme coaching | `présent à auditer` | `site/src/data/outils/formation/coacheasy.md` contient `u_site` et `u_affi` affiliés | Vérifier l'offre, le programme et les limites avant amplification publique. |
| MerciApp | Correcteur français | `présent à auditer` | `site/src/data/outils/tech/ia/autres/merciapp.md` contient `u_affi` et une source affiliation | Vérifier le programme officiel et ajouter les sources de qualification locale si la fiche devient prioritaire. |
| Novalya | Outil entrepreneur | `présent à auditer` | `site/src/data/outils/tech/ia/autres/novalya.md` contient `u_affi` | Fiche pauvre : ne pas pousser sans réécriture, preuve produit et disclosure. |
| Noota | Transcription réunion | `présent à auditer` | `site/src/data/outils/tech/ia/noota.md` contient `u_affiAdmin` | Programme repéré, lien public affilié absent ; vérifier source officielle et fit audience. |
| Sendshort | Création vidéo courte | `présent à auditer` | `site/src/data/outils/tech/ia/sendshort.md` contient `u_affiAdmin` | Ne recommander qu'avec un cas créateur clair et limites anti-promesse virale. |


https://scalify.com/affiliate/ 30% recurring
https://www.pcloud.com/fr/cloud-storage-pricing-plans.html?period=lifetime

## Gate avant publication

Avant d'ajouter ou promouvoir un lien affilié :

1. Vérifier la page officielle du programme et ses conditions publiques.
2. Vérifier que la fiche outil respecte le schéma Astro dans `site/src/content.config.ts`.
3. Ajouter ou compléter `sourcesVerification` quand l'information touche la qualification locale.
4. Ajouter un disclaimer visible près du lien ou du bloc de recommandation.
5. Vérifier que le contenu explique pourquoi l'outil est recommandé malgré le biais de commission.
6. Refuser le programme si les conditions poussent à masquer le lien, exagérer les résultats ou recommander un mauvais produit.

## À clarifier

- Quelle surface doit porter le disclaimer global : fiche outil, layout article, bloc de recommandation, footer, ou combinaison de ces surfaces ?
- Faut-il un champ de frontmatter dédié à la disclosure, ou le rendu peut-il le déduire de `u_affi` ?
- Quels programmes deviennent prioritaires après audit : SaaS français, lifetime deals, outils IA, plateformes formation, ou infrastructure affiliation ?
