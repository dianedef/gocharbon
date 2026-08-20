# GoCharbon — Tasks

🔴 [gocharbon] task: Rendre canonique et mesurable le funnel orientation → parcours → première action | status: in_progress | area: cross-surface-activation | id: gocharbon-canonical-activation-funnel | spec: shipglows_data/workflow/specs/gocharbon-canonical-activation-funnel.md | priority_basis: bloque les investissements quiz, parcours et micro-apprentissage tant que les responsabilités, destinations publiques et signaux de valeur se contredisent | pilot: service-to-freelance | next: readiness-review

- [x] sf-deps audit remediation run (2026-05-24)
  - status: done
  - area: deps
  - findings: 0 critical / 0 high / 0 moderate / 0 low
  - action: applied non-major fixes (`astro@6.3.7`, override `unstorage>h3` -> `^1.15.10`) to remove all current advisories
🟢 [gocharbon] task: sf-deps remediation | status: done | area: deps | id: gocharbon-deps-2026-05-24
🟢 [gocharbon] task: sf-deps audit 2026-06-12 | status: done | area: deps | id: gocharbon-deps-2026-06-12
🟡 [gocharbon] task: defer gamification dependency provenance cleanup until later | status: todo | area: deps | id: gocharbon-deps-gamification-provenance | note: site is stable; keep pinned GitHub tarball for now and revisit GitHub Packages publication plus permissive license proof later
🟢 [gocharbon] task: align Astro version docs and package metadata | status: done | area: deps | id: gocharbon-deps-astro-doc-drift
🟢 [gocharbon] task: fix `.npmrc` compatibility warning around `minimum-release-age` | status: done | area: deps | id: gocharbon-deps-npmrc-warning
- [x] gocharbon: design-system authority hardening
  - status: implemented-and-technically-verified
  - area: design
  - scope: website + Flutter quiz app
  - action: shared component authority delivered in commit `185bd8c9`; technical checks pass
  - remaining-proof: automated Browser evidence for light/dark, desktop/mobile and keyboard focus
  - linked_specs:
    - shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md
    - shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md
- [x] sf-deps migration run (2026-05-25): major lane bump (`eslint@10.4.0`, `satori@0.26.0`, `vue@3.5.34`) completed; audit clean. Remaining: `eslint-plugin-jsx-a11y@6.10.2` peer mismatch with ESLint 10.
🟡 [gocharbon] task: Handoff contenu OpenPostern pour fiche outil ou comparatif: surveiller les risques de ses fournisseurs SaaS sans RSSI | status: todo | area: content-tools-saas-security | source: veille utilisateur https://betalist.com/startups/openpostern et https://openpostern.com/ 2026-06-10
🟠 [gocharbon_quiz] task: Concevoir et valider une boucle de micro-apprentissage issue des contenus GoCharbon | status: todo | area: app-quiz-learning-loop | id: gocharbon-quiz-bookster-learning-loop | scope: micro-leçon courte, rappel actif, explication immédiate, progression légère et recommandation GoCharbon | constraints: conserver l'entrée anonyme et le format court; exclure LMS complet, blocage d'apps, loterie et gamification punitive | source: inspiration Bookster https://bookster.ai/en/en/home et https://grabltd.com/products/bookster consultée le 2026-08-11 | next: cadrer un MVP mesurable et son test sur un seul thème GoCharbon


---

<!-- central-shipglowz-data-retirement: imported projects/gocharbon/TASKS.md -->

## Legacy Imported From Central ShipFlow Data

The following content was preserved from `/home/claude/shipglows_data/projects/gocharbon/TASKS.md` during central repository retirement. Treat it as historical backlog/context unless an item is promoted into the active section above.

# GoCharbon — Tasks

### Priorités actuelles (2026-04-18)

- [x] 🔴 Réduire le lancement `parcours` à 5 fiches pilotes (`freelance`, `tests-utilisateurs-remuneres`, `e-commerce`, `createur-contenu`, `formation`) pour concentrer la première distribution Google.
- [x] 🔴 Supprimer une première vague de 19 tutos EN/mixte clairement inutiles avant ouverture Search Console.
- [x] 🔴 Continuer le sweep du contenu anglais inutile encore live hors première vague de suppression — suppression complémentaire de 166 contenus EN/mixtes, scan résiduel = 0 fichier détecté.
- [x] 🔴 Canonicaliser `parcours` pour ne garder qu'une seule URL indexable par fiche — retrait des 29 variantes EN/FR du build et du maillage interne.
- [x] 🟡 Remapper les 9 liens internes restants après le sweep EN pour garder un maillage FR cohérent.
- [x] 🟠 Verrouiller le périmètre indexable du lancement `parcours` en code (homepage + `/parcours` + fiches + pages légales indexables; le reste en `noindex, follow`, avec filtre sitemap aligné).
- [x] 🟠 Sortir réellement du build les sections hors lancement (`blog`, `outils`, `tutos`, `quiz`, `progression`, `bio`, `methodologie`, `api`, `feed`) avec un mode de build `parcours-only` et purge post-build du `dist`.
- [x] 🟡 Vérifier le rendu final du build de lancement — OK (`dist` limité à homepage, `/parcours`, 5 fiches parcours pilotes, pages légales, `404`, `robots.txt` et sitemap; liens internes hors périmètre neutralisés dans les fiches parcours).
- [x] 🟡 Stabiliser le build après réécriture massive (compatibilité `pubDate` string/Date + correction d’erreurs frontmatter invalides).
- [x] 🟡 Retirer les fichiers de coordination de lot non suivis (`BUILD.md`, `CONTENT_TRIAGE.md`) pour réduire le bruit d’exploitation.
- [x] 🟠 Réécrire en profondeur l’ensemble du lot `outils` prioritaire (`business/crm`, `ecommerce`, `formation`, `tech/ia`, `marketing/autres`) pour un niveau rédactionnel publiable.
- [ ] 🔴 Relire à la main les 5 parcours pilotes et corriger tout ce qui n'est pas carré, efficace, fidèle ou légitime.
- [ ] 🔴 Polisher le design et la perception qualité sur la homepage, `/parcours` et les 5 fiches pilotes.
- [ ] 🟠 Remplacer les visuels faibles, placeholders ou signaux cheap encore visibles sur le périmètre pilote.
- [ ] 🟠 Ouvrir la propriété Search Console et soumettre le sitemap limité une fois les 5 parcours pilotes validés.
- [ ] 🟡 Étendre ensuite progressivement la surface indexable `parcours` fiche par fiche, après relecture et validation manuelle.
- [x] 🟡 Sortir les 94 fichiers `to_decide/` du build Astro en les gardant hors de `site/src/data` et `site/src/content` — confirmé, ils ne bloquent plus l'indexation.
- [ ] 🟠 Remplacer l'image placeholder `astro.jpeg` sur les fiches encore exposées.
- [ ] 🟠 Réécrire les descriptions génériques d'outils et autres métadonnées faibles sur les fiches encore exposées.

### Audit: Deps (2026-04-27)

- [x] ✅ Chantier `dependency security stabilization` terminé (`/sf-start`, 2026-04-27).
- [x] 🔴 Corriger les advisories `pnpm audit` sans upgrade majeur automatique: critic/high passés de `1/19` à `0/0`; reste `8 moderate` + `3 low` (majoritairement chaîne Astro 5, à traiter via `/sf-migrate astro@6`).
- [x] 🟠 Résoudre la dérive de gestionnaire: `package-lock.json` supprimé, `site/pnpm-lock.yaml` conservé source de vérité.
- [x] 🟠 Ajouter une automatisation de mises à jour dépendances (`dependabot` ou `renovate`) couvrant npm/pnpm et GitHub Actions, avec revue humaine pour les majors.
- [x] 🟠 Trancher le risque licence: `astro-breadcrumbs@3.3.3` retiré et remplacé par un fil d'Ariane local.
- [x] 🟡 Épingler la version runtime Node (`engines`, `.nvmrc` ou `.node-version`) et aligner CI/déploiement.
- [x] 🟡 Vérifier puis supprimer ou reclasser les dépendances directes probablement inutilisées: `@vitejs/plugin-vue`, `@eliancodes/brutal-ui`, `gsap` supprimées.
- [x] 🟡 Documenter la provenance/licence de `@diane-winflowz/gamification` et surveiller le tarball GitHub direct sans checksum SRI classique (doc + alias de build ajoutés).
- [x] 🟡 Remplacer ou assumer `lucide-astro`, signalé deprecated par `pnpm outdated` (assumé temporairement; migration non-bloquante vers `@lucide/astro` à planifier).
- [x] 🟡 Nettoyer la configuration active: `site/astro.config.mjs` confirmée active, `astro.config.ts` supprimé.

### Audit: OpenAI Freshness (2026-04-27)

- [x] ✅ Chantier `OpenAI freshness audit GoCharbon` terminé (`/sf-start` + `/sf-verify` + `/sf-end`) : lot A/B validé, traçabilité spec à jour, prêt au ship.

### Audit: SEO (2026-04-07)

**Done (code-level — pass 1):**
- [x] Ajout `<h1>` sur blog.astro, outils.astro, tutos.astro
- [x] Fix `og:type` → `article` pour les articles (BaseHead.astro)
- [x] Ajout schéma JSON-LD `WebSite` sur la homepage (BaseHead.astro)
- [x] Fix meta description vide sur bonjour.astro
- [x] Fix meta description trop courte sur outils.astro (20→155 chars)
- [x] Fix accents manquants sur 6 pages (parcours, tag, outils/category, outils/subcategory, progression)
- [x] Ajout `noindex` sur gamification.astro (doublon de progression)
- [x] Ajout OG image + twitter card sur bio.astro
- [x] Amélioration des titres sur blog.astro, tutos.astro

**Done (code-level — pass 2):**
- [x] Preload des polices gouvernees Chakra Petch, Oxanium et Sanchez (LocalFont.astro)
- [x] Ajout schéma `SoftwareApplication` JSON-LD sur les fiches outils (Post.astro)
- [x] Fix accents manquants sur parcours.astro (20+ corrections : catégorie, départ, spécialisation, débutant, etc.)
- [x] Fix accents manquants sur outils.astro (catégorie, sous-catégorie, entrées)
- [x] Fix accents manquants sur outils/[category].astro (catégorie, rangés, plutôt, catégories)
- [x] Fix accents manquants sur outils/[category]/[subcategory].astro (sous-catégorie, à)
- [x] Fix accents manquants sur bio.astro (Française, idée, sérieux, média, Productivité, exécution, français)
- [x] Fix titres incorrects : peachie.md "Contenu" → "Peachie", gowinston.md "Contenu" → "Winston AI"
- [x] Draft 13 pages en doublon (Thruuu, Switchy, Semnaut, Praiz, Cosmic Data, Captain Contrat, Magniv Pro, INFast, Incwo, Youtube, Comment Réussir Sur Youtube, Crowdfunding, Tugan Bara, Économie des Idées)
- [x] Build OK : 2534 → 2521 pages (13 doublons retirés)

**Remaining (contenu):**
- [ ] 🔴 Remplacer l'image placeholder `astro.jpeg` sur ~2300 fichiers — toutes les OG sociales sont identiques
- [ ] 🔴 Traiter ~145 fichiers thin content (frontmatter seul, aucun body)
- [ ] 🟠 Réécrire ~100+ descriptions génériques d'outils ("Découvre X : outil français…")
- [ ] 🟡 bio.astro charge Google Fonts en externe au lieu des polices locales

### Cluster Hébergement + Skill fiche-outil (2026-03-28/29)

**Done:**
- [x] Créer le skill `gocharbon-fiche-outil` (`skills/gocharbon-fiche-outil/SKILL.md`) — 6 phases : recherche, doublons, pertinence, placement, rédaction, qualification locale
- [x] Créer la slash command `.claude/commands/gocharbon-fiche-outil.md`
- [x] Fiche LivePepper (`outils/ecommerce/livepepper.md`) — commande en ligne restauration, Sophia Antipolis, `france`/`partiel`/`partiel`
- [x] Fiche Scaleway (`outils/tech/hebergement/scaleway.md`) — cloud FR groupe Iliad, `france`/`fort`/`fort`
- [x] Fiche OVHcloud (`outils/tech/hebergement/ovhcloud.md`) — leader européen cloud, Roubaix, `france`/`fort`/`fort`
- [x] Fiche Infomaniak (`outils/tech/hebergement/infomaniak.md`) — cloud éthique suisse, Genève, `union-europeenne`/`partiel`/`fort`
- [x] Fiche Gandi (`outils/tech/hebergement/gandi.md`) — registrar historique FR, racheté Your.Online NL 2023, `france`/`partiel`/`partiel`
- [x] Fiche LWS (`outils/tech/hebergement/lws.md`) — mutualisé low-cost FR, `france`/`fort`/`partiel`
- [x] Fiche PlanetHoster (`outils/tech/hebergement/planethoster.md`) — francophone premium Québec, `hors-UE`/`partiel`/`partiel`
- [x] Fiche IONOS (`outils/tech/hebergement/ionos.md`) — filiale FR United Internet DE, `union-europeenne`/`partiel`/`partiel`
- [x] Fiche Clever Cloud (`outils/tech/hebergement/clever-cloud.md`) — PaaS souverain Nantes, `france`/`fort`/`fort`
- [x] Fiche WP Serveur (`outils/tech/hebergement/wp-serveur.md`) — WordPress managé FR Nîmes, `france`/`fort`/`fort`
- [x] Fiche Upsun (`outils/tech/hebergement/upsun.md`) — PaaS ex Platform.sh Paris, `france`/`fort`/`partiel`
- [x] Page pilier `hebergeurs-francais.md` — comparatif 17 hébergeurs par cas d'usage (mutualisé, WordPress, cloud, PaaS, registrar, stockage, CDN)
- [x] Enrichissement o2switch (squelette → fiche complète, découverte rachat Your.Online NL 2022)
- [x] Enrichissement Leviia (squelette → fiche complète, levée 3M€ Xavier Niel, ISO 27001 + HDS)
- [x] Enrichissement Be Cloud (squelette → fiche complète, intégrateur Microsoft, données Azure)
- [x] Enrichissement Ex2 (squelette → fiche complète, canadien écolo)
- [x] Nettoyage : 4 fichiers passés en draft (quel-hebergeur-web, ksuite, alternatives-open-source, comment-creer-un-site-daffiliation)
- [x] Mise à jour du pilier avec les 7 nouvelles fiches + sections PaaS et registrars

**Remaining:**
- [ ] Qualifier les 4 fiches hébergement anciennes sans champs de patriotisme (Copilhost, Faaaster, Fasterize, Oodrive)
- [ ] Considérer P2 : Scalingo, Ikoula, Alwaysdata, Nuxit, EasyHoster

### Centralisation branding + routes (2026-03-26)

**Done:**
- [x] Ajouter une source de vérité branding (`site/src/config/site.ts`) pour le nom du site, le domaine, les URLs absolues et les métadonnées globales
- [x] Ajouter une source de vérité des routes internes (`site/src/config/routes.ts`) pour les chemins récurrents (`/quiz`, `/parcours`, `/outils`, `/blog`, etc.)
- [x] Rebrancher les composants globaux (SEO, navigation, footer, feed, bio, CTA, quiz, pages piliers) sur ces configurations
- [x] Valider techniquement le refactor via `npm run build:no-outils`

### Refonte taxonomie outils (2026-03-25)

**Done:**
- [x] Séparer la navigation principale des fiches outils des tags éditoriaux globaux
- [x] Ajouter la taxonomie outil dédiée (`toolCategoryPrimary`, `toolSubcategoryPrimary`, `toolFacets`) au schéma de contenu et aux types
- [x] Afficher les outils avec `catégorie + sous-catégorie + facettes` sur les cartes et dans les pages détail
- [x] Ajouter des pages de navigation dédiées `/outils/[category]` et `/outils/[category]/[subcategory]`
- [x] Rendre les contenus liés des outils cohérents avec la taxonomie outil
- [x] Borner `/tag/outils` au scope `outils`
- [x] Mettre à jour la méthodologie pour parler de taxonomie outil plutôt que de "tags outils"
- [x] Migrer les fiches outils directes du lot `communication/*` vers `toolCategoryPrimary` / `toolSubcategoryPrimary`
- [x] Migrer les fiches outils directes du lot `ecommerce/*` vers `toolCategoryPrimary` / `toolSubcategoryPrimary`
- [x] Migrer les fiches outils directes du lot `productivite/*` vers `toolCategoryPrimary` / `toolSubcategoryPrimary`
- [x] Migrer les fiches outils directes du lot `creation/*` vers `toolCategoryPrimary` / `toolSubcategoryPrimary`
- [x] Migrer les fiches outils directes du lot `formation/*` vers `toolCategoryPrimary` / `toolSubcategoryPrimary`
- [x] Migrer `business/helloasso.md` avec une taxonomie canonique explicite
- [x] Migrer une large vague de fiches évidentes dans `marketing/autres`
- [x] Migrer les fiches outils évidentes du sous-ensemble `marketing/autres` commençant par `n` à `z`
- [x] Valider techniquement le refactor (installation des dépendances, build Astro complet)

**Remaining:**
- [ ] Finir la migration des fiches outils prioritaires hors fallback dossier en remplissant `toolCategoryPrimary`, `toolSubcategoryPrimary` et `toolFacets`
- [ ] Nettoyer les tags legacy redondants sur les fiches outils
- [ ] Remplacer le filtre outils basé sur les tags globaux par une UI dédiée à la taxonomie outil
- [ ] Définir quelles sous-catégories outils restent indexables selon le volume réel
- [ ] Trier les cas ambigus restants de `marketing/autres` laissés volontairement en classement prudent ou hors migration

### Cluster Copywriting (2026-03-23)

**Done:**
- [x] Créer `site/src/data/marketing/copywriting/` (14 articles, ~25 400 mots)
- [x] Pillar page + 4 spokes P0 (frameworks, niveaux-conscience, big-idea, titres-accroches)
- [x] 6 spokes P1 (storytelling-vente, email-sequences, croyances, fascinations, offres-irresistibles, landing-pages)
- [x] 3 spokes P2 (direct-response, polarisation, open-loops)
- [x] Tag "Copywriting" ajouté dans tagHierarchy.ts (4 subtags)
- [x] Maillage interne cross-cluster (6 articles existants modifiés)

**Remaining:**
- [x] Réécrire `outils/marketing/autres/la-methode-tugan-bara-pour-un-revenu-exponentiel.md` — portrait complet de Tugan Bara (parcours, méthode, formations, analyse critique)
- [x] Réécrire `outils/marketing/autres/tugan-bara-et-les-rx-la-verite-choquante-enfin.md` — avis honnête sur les RX (contenu, prix, pour/contre, alternatives)
- [ ] Réécrire `outils/marketing/autres/le-copywriting-qui-hypnotise-transformez-vos.md` — actuellement un brouillon YouTube/Gorgias
- [ ] Supprimer `outils/creation/autres/direct-response-marketing-predateur.md` — remplacé par `marketing/copywriting/direct-response.md`
- [ ] Réécrire ou supprimer `outils/creation/autres/maitrisez-lart-de-la-persuasion-faites-dire-oui-a.md` — juste des liens YouTube
- [ ] Passe éditoriale manuelle sur les 14 articles du cluster (voix Diane, exemples, qualité)
- [x] Vérifier le build Astro — 2496 pages, build OK (2026-03-27)

### Audit: Parcours (2026-03-02)

**Fixed:**
- [x] Harmoniser le ton et le vocabulaire sur 42 fiches parcours (débutant + accompagnement).
- [x] Conserver la technicité utile avec explication contextuelle (ex: CTR, CPA, ROAS, CVR, MRR, churn).
- [x] Uniformiser les sections éditoriales de chaque fiche pour améliorer la lecture.
- [x] Harmoniser les intitulés des modules (`bases`) dans `site/src/data/parcoursData.ts`.
- [x] Vérifier les liens actifs parcours (étapes + liens utiles): **0 lien cassé**.
- [x] Corriger les liens cassés détectés:
  - [x] `/tutos/construire-un-calendrier-editorial-qui` -> `/tutos/comment-construire-un-calendrier-editorial-qui`
  - [x] `/tutos/creer-un-pdf-remplissalbe` -> `/tutos/comment-creer-un-pdf-remplissalbe`

**Remaining:**
- [ ] Produire les contenus backlog référencés dans `Idées de contenus pour aller plus loin` (126 liens).
- [x] Définir une grille "page complète" (profondeur, exemples, actionnabilité, SEO) et auditer chaque lien actif.
- [ ] Faire une passe éditoriale manuelle "haute qualité" sur les fiches prioritaires trafic/conversion.

### Audit: Contenus référencés (2026-03-02)

**Fixed:**
- [x] Réécriture complète des 9 contenus actifs les plus faibles (clarté + complétude + actionnabilité).
- [x] Harmonisation du ton: débutant, concret, avec technicité expliquée.
- [x] Vérification post-corrections:
  - [x] contenus actifs faibles `< 180 mots` -> **0**
  - [x] liens internes cassés sur ces 9 contenus -> **0**
- [x] Mise en place d'un audit automatisé parcours:
  - [x] script `site/scripts/audit_parcours_content.mjs`
  - [x] sortie machine `site/scripts/parcours_content_audit.json`
  - [x] grille `PARCOURS_QUALITY_RUBRIC.md`
  - [x] rapport `PARCOURS_CONTENT_AUDIT.md`

**Remaining:**
- [x] Nettoyer les contenus actifs avec artefacts éditoriaux (`TODO`, notes brutes, \"à faire\") encore présents.
- [ ] Mettre en place un score qualité automatique par contenu (structure + longueur + lisibilité + CTA).

### Audit: Contenus référencés (2026-03-03)

**Fixed:**
- [x] Réécriture des 11 contenus initialement fragiles (liens actifs parcours).
- [x] Renforcement des contenus moyens restants (maillage interne + sous-structure) pour atteindre `>= 80`.
- [x] Passe premium conversion sur 5 pages pivot (`biz/index`, `marketing/fondamentaux`, `seo/fondamentaux/bases-seo`, `marketing/analytics/kpis`, `marketing/tunnel/proramme-beta`).
- [x] Vérification post-corrections:
  - [x] liens actifs cassés -> **0**
  - [x] contenus fragiles -> **0**
  - [x] contenus moyens -> **0**
  - [x] contenus solides -> **126**

**Remaining:**
- [x] Nettoyer les 3 contenus avec artefacts éditoriaux restants (signalés par l'audit).

### Backlog clusters — Apps francophones fun & loisir pro (recherche 2026-04-10)

Stratégie : publier progressivement, ne pas tout sortir d'un coup. Commencer par le cluster le plus rentable SEO.

**Cluster 1 — QVT / Bien-être au travail** ← prioritaire
- [ ] Fiches : Supermood, Zest, Eurécia (module QVT), Bloom at Work, TA Nutrition
- [ ] Article pilier : *Les apps françaises pour prendre soin du bien-être de tes équipes (sans faire semblant)*

**Cluster 2 — Sport & challenge connecté en entreprise** ← différenciant, peu de concurrents
- [ ] Fiches : SquadEasy, Spart, United Heroes, Treko, Kiplin, Teamupp
- [ ] Article pilier : *Les apps françaises pour lancer des challenges sportifs dans ton entreprise*

**Cluster 3 — Animation réunions & engagement à distance**
- [ ] Fiches : Klaxoon, Beekast, OuiLive, Wannup
- [ ] Article pilier : *Les outils français pour animer tes réunions et engager tes équipes à distance*

**Cluster 4 — Team building & activités** ← FunBooker déjà fait
- [ ] Fiches : SnapEvent, Hunting Town, Châteauform'
- [ ] Article pilier : *Les meilleures plateformes françaises pour organiser un team building sans agence*

**Cluster 5 — Avantages salariés & CSE** ← Captain Wallet déjà fait
- [ ] Fiches : Swile, Benefiz
- [ ] Article pilier : *Les plateformes françaises pour gérer les avantages salariés et fidéliser tes équipes*

### Idées articles — Cluster IA

- [ ] **Peut-on faire confiance à une IA pour négocier à ta place ?** — Angle entrepreneur : quand déléguer une négo à un agent IA, quand garder la main ? Les IA coopèrent-elles ou trahissent-elles ? Source : [The Model's Dilemma](https://www.modelsdilemma.ai/) (reproduction de l'expérience d'Axelrod 1984 avec des LLMs modernes).

### Idées articles — Purpose & Mindset (extraits de archived-purpose-notes.md)

- [ ] **Transformer un problème perso en business mondial** — Airbnb (Chesky & Gebbia : problème de loyer → matelas gonflables → plateforme mondiale), Tom's Shoes (Mycoskie : enfants sans chaussures → one for one model). Angle : le purpose naît d'un problème vécu, pas d'une étude de marché.
- [ ] **Value skew : faire UNE chose mieux que la concurrence** — Concept Fastlane : skew multiple attributes pour se différencier. Angle pratique pour solopreneurs qui cherchent leur avantage compétitif.
- [ ] **"Either way, a train is coming" — Métaphore du train et urgence entrepreneuriale** — Tu es enchaîné à des rails, un train arrive. Tu ne lis pas un livre sur les trains du 19e siècle — tu cherches la clé. Problem clair = action claire. Angle : arrêter de se préparer, commencer à agir.
- [ ] **Passion non rentable = addiction malsaine** — Les 2 collectionneurs de jeux vidéo au vide-grenier : l'un consomme, l'autre partage et monétise. Angle : documenter son aventure plutôt que jouer l'expert. Affiliation comme premier levier.
- [ ] **Documenter son aventure vs jouer l'expert** — Spin-off du précédent ou article autonome. Pourquoi le "build in public" fonctionne mieux que le positionnement expert quand on débute. Exemples GoalSumo, MJ DeMarco.

### Idées contenu — Master Mindmaps écosystème français

- [ ] **Créer des "master mindmaps" visuelles de l'écosystème business/outils français** — Inspiration : [Building a SaaS (Miro)](https://miro.com/app/board/uXjVMiRMzrc=/) — une mindmap géante qui cartographie tout l'écosystème pour construire un SaaS. Décliner le concept pour GoCharbon : une mindmap par grande verticale (ex. "Lancer un restaurant en France", "Stack e-commerce français", "Outils du freelance français", "Écosystème SaaS made in France"). Chaque nœud pointe vers la fiche outil GoCharbon correspondante. Format : pages interactives sur le site (Vue island ou image SVG cliquable) + version téléchargeable. Double intérêt : contenu linkbait/partageable + maillage interne massif vers les fiches outils existantes.

### Audit: Code (2026-02-28)

**Fixed:**
- [x] 🔴 Remove ~45 console.log lines in production (static-responses.ts)
- [x] 🔴 Remove copy protection blocking accessibility (Default.astro)
- [x] 🔴 Add mobile hamburger menu — no navigation on mobile (BaseNavigation.astro)
- [x] 🔴 Fix "ElianCodes" branding reference in social links (BaseNavigation.astro)
- [x] 🟠 Remove `data-tags={JSON.stringify()}` dead code from PostGrid (PostGrid.astro)
- [x] 🟠 Remove `transition:name` from listing cards — 3 per card × 2000+ posts (PostSummaryCard.astro)
- [x] 🟠 Switch `client:load` to `client:visible` on tag pages ([tag].astro, [tag]/[page].astro)
- [x] 🟠 Add recent posts section to homepage (index.astro)
- [x] 🟠 Add `<label>` to newsletter email input (index.astro)
- [x] 🟡 Fix robots.txt — remove deprecated `Host:` directive
- [x] 🟡 Improve image alt tags — use description instead of title (PostSummaryCard.astro, Post.astro)
- [x] 🟡 dist reduced from 637 MB to 553 MB (84 MB / 13% saved)

**Remaining:**
- [x] 🟡 Page confidentialité créée à `/confidentialite` avec bouton opt-out PostHog — 2026-03-10
- [ ] 🟡 Compléter CGU et mentions légales — placeholders toujours vides, requis par la loi française
- [ ] 🟡 Optimize tagHierarchy serialization — full object passed as prop to every tag page
- [ ] 🟡 `trailingSlash: 'ignore'` in astro.config.ts — should be `'never'` per CLAUDE.md
- [x] sf-deps blocker cleanup (2026-05-25): removed `eslint-plugin-jsx-a11y` to resolve ESLint 10 peer mismatch and finish migration pass.
- [x] sf-deps modernize run (2026-05-25): migrated deprecated `lucide-astro` to `@lucide/astro@1.16.0` and kept imports updated.
