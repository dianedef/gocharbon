# GoCharbon — Tasks

### Audit: Parcours (2026-03-02)

**Fixed:**
- [x] Harmoniser le ton et le vocabulaire sur 42 fiches parcours (débutant + accompagnement).
- [x] Conserver la technicité utile avec explication contextuelle (ex: CTR, CPA, ROAS, CVR, MRR, churn).
- [x] Uniformiser les sections éditoriales de chaque fiche pour améliorer la lecture.
- [x] Harmoniser les intitulés des modules (`bases`) dans `src/data/parcoursData.ts`.
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
  - [x] script `scripts/audit_parcours_content.mjs`
  - [x] sortie machine `scripts/parcours_content_audit.json`
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
