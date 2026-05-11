# TASKS.md - Tâches en cours et à venir

## Fait

- [x] Créer CLAUDE.md (onboarding technique pour Claude Code)
- [x] Créer BUSINESS.md (personas, objectifs, stratégie, funnel, revenus)
- [x] Créer NAMES.md (12+ noms de marque candidats avec analyse SEO)
- [x] Ajouter personas supplémentaires (7 au total)
- [x] Ajouter CHARBON et CHARBON 2.0 aux candidats de noms
- [x] Installer uv/uvx et configurer MCP domain-availability
- [x] **Vérifier tous les domaines avec MCP** : 14 marques × 7 TLDs = 98 domaines vérifiés
- [x] **Décision finale nom de marque** : CHARBON
- [x] **Domaine principal** : gocharbon.com (disponible et sécurisé)
- [x] **Rebrand complet du site** :
  - [x] 238 articles markdown (author: "Diane")
  - [x] Composants (BaseNavigation, BaseFooter, BaseHead, MobileSocials)
  - [x] Pages (index, blog, quiz, apps→La Mine, bonjour, tag/*)
  - [x] Config (astro.config.mjs, .flox/env.json)
  - [x] Documentation (CLAUDE.md, BRANDING.md, TASKS.md)
  - [x] URLs sociales (@charbon partout)
  - [x] RSS feed (gocharbon.com)

---

## En cours / À faire immédiatement

### Domaines & Légal

- [ ] **Acheter les domaines** : gocharbon.com, gocharbon.fr (+ charbon.co en défensif si budget)
- [ ] **Recherche INPI** : vérifier que "Charbon" n'est pas déposé comme marque dans les classes pertinentes (classe 35 : publicité/business, classe 41 : éducation/formation, classe 42 : services informatiques) → https://data.inpi.fr
- [ ] **Créer les comptes sociaux** : @charbon sur X/Twitter, Instagram, LinkedIn, YouTube, TikTok (ou variantes disponibles)

### Contenu & Site

- [ ] Finaliser le quiz business (architecture dans quiz.md, implémentation Vue dans src/components/vue/Quiz.vue)
- [ ] Atteindre 500 articles (actuellement ~290)
- [ ] Mettre en place le tracking analytics (quiz complétions, taux de clic affiliation)
- [ ] Créer les profils business pour le quiz (ecommerce.md, saas.md, freelance.md, etc. dans src/data/biz/)
- [ ] Newsletter : setup + lead magnet "10 outils français indispensables"

### Branding & Design

- [ ] Créer nouveau logo CHARBON
- [ ] Valider la palette de couleurs (19 couleurs officielles dans BRANDING.md / uno.config.ts)
- [ ] Vérifier cohérence dark mode sur toutes les pages
- [ ] Footer avec tags principaux cliquables + newsletter signup + liens légaux

### Business & Monétisation

- [ ] Identifier 5-10 SaaS français pour partenariats d'affiliation (Brevo, Lemlist, Tolt, etc.)
- [ ] Mettre en place les liens affiliés avec disclaimers transparents
- [ ] Planifier le guide premium ("De 0 à MRR" ou "Stack solopreneur")

---

## Plus tard

- [ ] Communauté Discord
- [ ] Comparateur d'outils interactif (annuaire SaaS francophone)
- [ ] Podcast / chaîne YouTube
- [ ] Deals exclusifs négociés avec SaaS français
- [ ] Programme d'affiliation propre (lecteurs = ambassadeurs)

---

## Fichiers de référence

| Fichier | Contenu |
|---------|---------|
| `CLAUDE.md` | Onboarding technique Claude Code |
| `BUSINESS.md` | Personas, objectifs, stratégie, funnel |
| `NAMES.md` | Résultats vérification domaines + décision finale |
| `BRANDING.md` | Guidelines visuelles, ton, copywriting |
| `src/data/CONTENT_GUIDELINES.md` | Règles éditoriales pour les articles |
| `.cursorrules` | Règles rédactionnelles pour Cursor IDE |
| `quiz.md` | Architecture du quiz business |
| `.mcp.json` | Config MCP domain-availability |

---

## Résumé Rebrand

| Élément | Ancien | Nouveau |
|---------|--------|---------|
| Nom de marque | Web'Indé | CHARBON |
| Domaine | webinde.fr | gocharbon.com |
| Auteur articles | Diane Web'Indé | Diane |
| Page Apps | Apps'Indé | La Mine |
| Format titre | Web'Indé \| Titre | CHARBON \| Titre |
| Handles sociaux | @webindefr | @charbon |

---

*Dernière mise à jour : 28 janvier 2026*
