---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Tester La Vitesse De Votre Site Internet
author: Diane
description: 'Découvre Comment Tester La Vitesse De Votre Site Internet : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# VITESSE DE SITE : MESURE, COMPRENDS ET OPTIMISE

Un site lent, c'est des visiteurs qui partent. Google le confirme : au-dela de 3 secondes de chargement, 53% des visiteurs mobiles quittent la page. Et depuis 2021, les Core Web Vitals sont un facteur de classement SEO. Voici comment tester la vitesse de ton site, comprendre les metriques, et savoir quoi optimiser en priorite.

## Les outils de test (tous gratuits)

### 1. Google PageSpeed Insights -- Le standard

[PageSpeed Insights](https://pagespeed.web.dev/) est l'outil officiel de Google. C'est celui que tu dois utiliser en priorite parce que c'est sur ces metriques que Google juge ton site.

1. Va sur pagespeed.web.dev
2. Entre l'URL de ta page
3. Attends l'analyse (10-30 secondes)
4. Tu obtiens un score de 0 a 100 pour mobile ET desktop

**Ce que tu vois** :
- **Donnees de terrain** (Field Data) : les vraies performances mesurees sur les visiteurs reels via Chrome UX Report
- **Donnees de labo** (Lab Data) : un test simule dans des conditions controlees

**Les scores** : 0-49 = rouge (mauvais), 50-89 = orange (a ameliorer), 90-100 = vert (bon).

### 2. GTmetrix -- L'analyse detaillee

[GTmetrix](https://gtmetrix.com/) va plus loin que PageSpeed avec un diagramme en cascade (waterfall) qui montre chaque ressource chargee.

1. Va sur gtmetrix.com et cree un compte gratuit
2. Entre ton URL
3. Choisis le serveur de test le plus proche de tes visiteurs (Seattle ou Londres disponibles en gratuit)
4. Lance le test

**Ce que GTmetrix ajoute** :
- Le **waterfall chart** : tu vois exactement quelle ressource ralentit le chargement. Tu peux trier par taille, domaine ou temps de chargement
- La **taille totale de la page** et le nombre de requetes HTTP
- Un historique de tes tests pour suivre l'evolution (monitoring quotidien, hebdomadaire ou mensuel)
- Les **donnees CrUX** (Chrome User Experience Report) pour les donnees de terrain
- **Video playback** de ta page en train de charger
- **Systeme d'alertes** : sois prevenu quand un score baisse

**Prix (2025)** :
- **Basic (gratuit)** : 5 tests/mois pendant 3 mois, 2 localisations (Seattle, Londres), dashboard, tags et filtres, monitoring et alertes
- **PRO** : a partir de 12,50 USD/mois -- localisations supplementaires (Sao Paulo, Mumbai, Hong Kong, Sydney, Dallas), plus de tests, historique CrUX 6 mois, test de pages protegees par login

### 3. WebPageTest -- Le test avance

[WebPageTest](https://www.webpagetest.org/) est l'outil le plus complet. Tu peux tester depuis differentes localisations, differents navigateurs et differentes connexions (3G, 4G, fibre).

1. Va sur webpagetest.org
2. Entre ton URL
3. Choisis : localisation (Paris, New York...), navigateur (Chrome, Firefox), connexion (Cable, 3G lente...)
4. Lance le test -- ca prend 1-2 minutes

**Point fort** : le test "repeat view" qui montre la difference entre un premier chargement et un chargement avec cache.

### 4. SE Ranking -- Surveillance continue

[SE Ranking](https://seranking.com/free-tools/website-speed-test.html) propose un test de vitesse gratuit integre a sa suite SEO. Pratique si tu utilises deja l'outil pour ton referencement.

## Les metriques a comprendre

### Core Web Vitals (les 3 essentiels)

| Metrique | Ce qu'elle mesure | Bon | A ameliorer | Mauvais |
|----------|-------------------|-----|-------------|---------|
| **LCP** (Largest Contentful Paint) | Temps d'affichage du plus gros element visible | < 2.5s | 2.5-4s | > 4s |
| **INP** (Interaction to Next Paint) | Reactivite aux clics/taps | < 200ms | 200-500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | Stabilite visuelle (les elements bougent-ils ?) | < 0.1 | 0.1-0.25 | > 0.25 |

### Autres metriques importantes

- **TTFB** (Time to First Byte) : le temps que met le serveur a repondre. Si > 800ms, ton hebergement est trop lent
- **FCP** (First Contentful Paint) : quand le premier element s'affiche. Objectif : < 1.8s
- **Speed Index** : a quelle vitesse le contenu visible se remplit. Plus bas = mieux
- **Total Blocking Time** : combien de temps le JavaScript bloque le thread principal

## Comment interpreter les resultats

### Si ton LCP est mauvais (> 2.5s)
Les causes les plus frequentes :
- Images trop lourdes (pas compressees, pas en WebP/AVIF)
- Serveur lent (TTFB eleve)
- CSS ou JS qui bloque le rendu
- Pas de CDN

### Si ton CLS est mauvais (> 0.1)
- Images sans dimensions definies (width/height)
- Polices web qui provoquent un saut de texte au chargement
- Publicites ou embeds qui se chargent en retard et poussent le contenu

### Si ton INP est mauvais (> 200ms)
- Trop de JavaScript executee au clic
- Scripts tiers lourds (chat widgets, analytics, pixels publicitaires)
- Event handlers mal optimises

## Les optimisations prioritaires (par impact)

1. **Compresse tes images** -- passe en WebP ou AVIF, redimensionne a la taille d'affichage. Impact immediat sur le LCP
2. **Active un CDN** -- Cloudflare (gratuit) distribue ton site depuis des serveurs proches de tes visiteurs
3. **Minifie CSS et JS** -- supprime les espaces et commentaires. La plupart des frameworks le font automatiquement en production
4. **Lazy load les images** -- les images sous la ligne de flottaison ne se chargent que quand l'utilisateur scrolle
5. **Preconnecte les domaines tiers** -- ajoute `<link rel="preconnect">` pour Google Fonts, analytics, etc.
6. **Reduis les scripts tiers** -- chaque widget (chat, analytics, pixel pub) ajoute 50-200ms. Gardes-en le minimum

## Routine de test recommandee

| Frequence | Action | Outil |
|-----------|--------|-------|
| A chaque mise en prod | Test rapide des pages modifiees | PageSpeed Insights |
| 1x par semaine | Test complet des pages principales | GTmetrix |
| 1x par mois | Test approfondi multi-localisation | WebPageTest |
| En continu | Surveillance automatique | SE Ranking ou UptimeRobot |

## Ce qu'il faut retenir

Teste toujours en mobile d'abord (c'est la que les problemes apparaissent). Concentre-toi sur les Core Web Vitals : LCP < 2.5s, INP < 200ms, CLS < 0.1. Les images sont presque toujours la premiere chose a optimiser. Et un score PageSpeed de 100 n'est pas necessaire -- vise 80+ en mobile et assure-toi que l'experience utilisateur est fluide.
