# Changelog

## 2026-03-13

### Added
- Profil business **Live Commerce** — 6ème profil dans le quiz d'orientation (`livecommerce`)
- Article éducatif complet `biz/e-commerce/live-commerce.md` — chiffres marché ($22 Mds NA+EU), 8+ plateformes détaillées, modèle économique, guide pratique, tendances 2026
- Page profil quiz `biz/profils/livecommerce.md` — description, prérequis, personnalité idéale, étapes, exemples
- Scoring `livecommerce` dans quiz avancé (25 questions) et quiz rapide (8 questions)
- Liens internes croisés depuis live-commerce.md vers ~15 sections du site
- Page `/progression` avec composant `GamificationBar.vue`
- Composant `ParcoursCallToAction.astro`

### Changed
- Quiz Vue component (`Quiz.vue`) — support 6 profils (ajout type `livecommerce` dans ProfileKey, scores, emptyQuizData)
- Pages quiz (`quiz-rapide.astro`, `quiz-avance.astro`) — mapping vers nouveau profil livecommerce
- `parcoursSlugs.ts` — ajout slug `livecommerce` → `live-commerce`
- Profil e-commerce (`biz/profils/ecommerce.md`) — ajout live commerce en alternative + lien dans étape 5
- Profil content-creator (`biz/profils/content-creator.md`) — ajout live commerce en alternative
- `biz/e-commerce/plateformes.md` et `index.md` — liens vers live-commerce.md
- Description résultat e-commerce dans quiz — clarification "derrière l'écran" vs live commerce
- `live-commerce.md` enrichi avec couverture plateformes étendue : Facebook Live, Instagram, YouTube Shopping, plateformes chinoises (Taobao/Douyin/Kuaishou), solutions B2B (Bambuser, Caast, Firework, Livescale, Sprii) + tableau comparatif
- Navigation : « Parcours » en première position, ajout lien « Progression »
- Refonte page d'accueil (`index.astro`)
- `Post.astro` — améliorations layout articles

## 2026-03-10

### Analytics & Confidentialité
- PostHog injecté dans `Default.astro` (production uniquement, clé `phc_XNW...`)
- Page `/confidentialite` complétée avec bouton opt-out PostHog fonctionnel

## 2026-03-03

### Parcours: qualité contenus référencés (suite)
- Réécriture complète de 11 contenus actifs initialement fragiles (liés depuis les parcours).
- Passe de renforcement sur 25 contenus (les 10 réécrits puis les 15 moyens restants) pour atteindre un score qualité `>= 80`:
  - ajout de sections `Ressources pour aller plus loin`
  - ajout de sous-structures `###` pour améliorer la lisibilité
  - ajout de maillage interne utile entre tutos/marketing.

### Audit: statut actuel
- Audit machine régénéré via `node scripts/audit_parcours_content.mjs`.
- Résultat:
  - liens actifs cassés: **0**
  - contenus fragiles: **0**
  - contenus moyens: **0**
  - contenus solides: **126**

### Documentation
- Mise à jour de `PARCOURS_CONTENT_AUDIT.md` avec:
  - nouveaux chiffres d'audit
  - liste des dernières finitions éditoriales
  - suivi des axes de correction maintenus.

### Finitions éditoriales (artefacts)
- Nettoyage des 3 derniers contenus signalés par l'audit (`editorial_note`):
  - `src/data/biz/profils/elearning-creator.md`
  - `src/data/marketing/tunnel/atelier.md`
  - `src/data/tutos/comment-creer-un-serveur-de-preprod.md`
- Vérification post-correction: `artifact_flags = 0` sur les contenus actifs parcours.

### Passe premium conversion (pages pivot)
- Réécriture orientée conversion et pédagogie de 5 pages à fort impact:
  - `src/data/biz/index.md`
  - `src/data/marketing/fondamentaux.md`
  - `src/data/seo/fondamentaux/bases-seo.md`
  - `src/data/marketing/analytics/kpis.md`
  - `src/data/marketing/tunnel/proramme-beta.md`
- Objectif: langage plus accessible, plan d'action plus direct, CTA et KPI plus clairs.
- Validation post-passe:
  - liens actifs cassés: **0**
  - contenus fragiles: **0**
  - contenus moyens: **0**
  - contenus solides: **126**

## 2026-03-02

### Parcours: UX + contenu
- Harmonisation du langage sur 42 fiches parcours (`src/content/parcours/*.md`).
- Ton simplifié et amical pour débutants, avec conservation des termes techniques importants quand utiles (SEO + pédagogie).
- Structure éditoriale alignée sur toutes les fiches:
  - `Ton objectif`
  - `En clair (version simple)`
  - `Idées d'offres à tester`
  - `Ton plan simple sur 7 jours`
  - `Les chiffres utiles à suivre`
  - `Pièges à éviter`
  - `À la fin, tu dois avoir`
  - `Liens utiles pour avancer`
  - `Idées de contenus pour aller plus loin`

### Parcours: cohérence vocabulaire modules
- Renommage des modules/étapes pour cohérence "bases" dans `src/data/parcoursData.ts`:
  - `Les bases du business en ligne`
  - `Les bases pour trouver des clients`
  - `Les bases du SEO`
  - `Bases communes`

### Liens: vérification et corrections
- Audit des liens actifs parcours (étapes + liens utiles): **0 lien cassé** après correction.
- Corrections appliquées:
  - `/tutos/construire-un-calendrier-editorial-qui` -> `/tutos/comment-construire-un-calendrier-editorial-qui`
  - `/tutos/creer-un-pdf-remplissalbe` -> `/tutos/comment-creer-un-pdf-remplissalbe`
- Note: les liens non existants restants sont dans `Idées de contenus pour aller plus loin` (backlog éditorial volontaire).

### Contenus référencés: qualité & complétude
- Réécriture complète de 9 contenus faibles référencés par les parcours:
  - `src/data/outils/business/autres/crm.md`
  - `src/data/tutos/implementer-un-gestionnaire-de-relations-clients.md`
  - `src/data/tutos/comment-importer-des-produits-amazon-dans.md`
  - `src/data/tutos/deployer-un-serveur.md`
  - `src/data/tutos/envoyer-email-a-partir-de-wordpress.md`
  - `src/data/marketing/email/strategie.md`
  - `src/data/marketing/email/automation.md`
  - `src/data/marketing/ads/google.md`
  - `src/data/outils/creation/index.md`
- Résultat audit après réécriture (contenus actifs référencés): `THIN_LT180 = 0`.
- Vérification des liens internes sur ces 9 fichiers: `TARGET_FILES_BROKEN_LINKS = 0`.

### QA continu parcours
- Ajout d'un audit automatisé des contenus actifs parcours:
  - `scripts/audit_parcours_content.mjs`
  - sortie JSON: `scripts/parcours_content_audit.json`
  - rapport lisible: `PARCOURS_CONTENT_AUDIT.md`
  - grille: `PARCOURS_QUALITY_RUBRIC.md`
- Ajout de la commande npm:
  - `npm run audit:parcours`
