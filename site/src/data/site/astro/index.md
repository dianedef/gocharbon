---
section: blog
title: 'Astro : Guide Complet'
author: Diane
tags:
- Tech
description: Le framework web ultra-rapide pour les sites de contenu en 2026
pubDate: '2026-01-17'
imgUrl: ../../../assets/astro.jpeg
---

# Astro : Le Framework Web Ultra-Rapide

Tu veux créer un site web ultra-rapide sans te faire chier avec la complexité de Next.js ? Astro est fait pour toi.

## C'est quoi Astro ?

Astro est un framework web moderne qui génère des sites statiques par défaut. Il est rapide, simple, et performant.

**Pourquoi Astro ?**

- **Vitesse :** Sites statiques = ultra-rapides par défaut
- **Simplicité :** Pas de build step complexe, pas de configuration
- **Performance :** Zero JS par défaut, JavaScript uniquement quand nécessaire
- **Flexible :** Fonctionne avec React, Vue, Svelte, Preact, etc.

**Réalité :** Si ton site est 90% de contenu et 10% d'interactivité, Astro est le meilleur choix.

## Les 3 avantages clés

### 1. Performance par défaut

Astro envoie du HTML, pas du JavaScript. Ça change tout.

| Métrique         | Astro  | Next.js SSR | WordPress |
| ---------------- | ------ | ----------- | --------- |
| Taille bundle JS | 0-10KB | 50-200KB    | 100-500KB |
| Lighthouse perf  | 95-100 | 80-95       | 40-70     |
| LCP              | < 1s   | 1-2s        | 2-4s      |

**Conclusion :** Tu ne peux pas faire plus rapide qu'Astro pour du contenu statique.

### 2. "Islands Architecture"

Astro charge le JavaScript uniquement là où c'est nécessaire.

**Comment ça marche :**

```astro
---
// Le contenu statique (0 JS)
const title = "Mon super site"
---

<h1>{title}</h1>

<p>Ceci est du contenu statique ultra-rapide.</p>

<!-- Interactivité seulement ici -->
<InteractiveComponent client:load />
```

**Réalité :** 99% de tes pages n'ont pas besoin de JavaScript. Astro le comprend.

### 3. Framework-agnostic

Tu peux utiliser n'importe quel framework dans les "islands".

| Framework | Usage dans Astro                |
| --------- | ------------------------------- |
| React     | `client:load`, `client:visible` |
| Vue       | `@astrojs/vue`                  |
| Svelte    | `@astrojs/svelte`               |
| Preact    | `@astrojs/preact`               |

**Réalité :** Tu peux migrer progressivement depuis React ou Vue vers Astro.

## Quand utiliser Astro ?

### ✅ Parfait pour

- Blogs et portfolios
- Landing pages
- Documentation
- Sites marketing
- E-commerce headless

### ❌ Pas pour

- Applications web complexes (CRUD, realtime)
- Authentification complexe
- API-heavy applications
- Dashboards avec beaucoup d'interactivité

**Alternative :** Next.js ou Nuxt.js pour les apps complexes.

## Comment démarrer

### Installation

```bash
npm create astro@latest
```

**Questions :**

1. Quel template ? → Blog, Portfolio, Minimal
2. TypeScript ? → Yes (recommandé)
3. Intégrations ? → Preact, Vue, Svelte (optionnel)

### Structure de projet

```
my-astro-project/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── layouts/       # Layouts (Header, Footer, etc.)
│   ├── pages/         # Routes automatiquement générées
│   └── content/       # Collections (pour blogs)
├── public/           # Assets statiques
├── astro.config.mjs  # Configuration
└── package.json
```

### Créer une page

```astro
---
// src/pages/index.astro
---
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Mon site Astro</title>
  </head>
  <body>
    <h1>Bienvenue sur Astro</h1>
    <p>C'est ultra-rapide.</p>
  </body>
</html>
```

**Réalité :** Pas de `ReactDOM.render()`, pas de `createRoot`. Juste du HTML.

## Intégrations essentielles

### 1. Content Collections

Pour gérer ton blog ou docs sans CMS.

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

{posts.map(post => (
  <a href={`/blog/${post.slug}`}>
    <h2>{post.data.title}</h2>
  </a>
))}
```

### 2. Image Optimization

Optimise automatiquement les images.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/hero.webp';
---

<Image src={myImage} alt="Hero" width={800} format="webp" />
```

### 3. RSS

Génère automatiquement un flux RSS.

```js
// astro.config.mjs
import rss from "@astrojs/rss";

export default defineConfig({
  site: "https://monsite.com",
  integrations: [
    rss({
      title: "Mon Blog",
      description: "Mes articles",
      customData: "<language>fr</language>",
    }),
  ],
});
```

## Hébergement et déploiement

### Meilleures options

| Plateforme   | Prix       | Avantages           |
| ------------ | ---------- | ------------------- |
| Vercel       | 0-20€/mois | Zero config, CI/CD  |
| Netlify      | 0-20€/mois | Forms, functions    |
| Cloudflare   | 0-20€/mois | Edge, cache         |
| GitHub Pages | Gratuit    | Simple, GitHub sync |

**Commande de déploiement :**

```bash
npm run build
# Le dossier 'dist' est prêt pour le déploiement
```

## Outils populaires

| Intégration        | Usage                     |
| ------------------ | ------------------------- |
| @astrojs/react     | Utiliser React dans Astro |
| @astrojs/vue       | Utiliser Vue dans Astro   |
| @astrojs/tailwind  | Utiliser Tailwind CSS     |
| @astrojs/sitemap   | Générer un sitemap XML    |
| @astrojs/partytown | Third-party scripts       |

## Comparaison avec Next.js

| Critère       | Astro         | Next.js      |
| ------------- | ------------- | ------------ |
| Performance   | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐     |
| Complexité    | Faible        | Haute        |
| Apprendissage | 1-2 jours     | 1-2 semaines |
| Static export | Par défaut    | Possible     |
| SSR           | Via adapter   | Par défaut   |
| API routes    | Via functions | Par défaut   |
| Communauté    | Grandissante  | Énorme       |

**Conclusion :** Si tu fais du contenu statique → Astro. Si tu fais une app → Next.js.

## Les 5 erreurs à éviter

### 1. Utiliser Astro pour une application complexe

Tu veux une app avec auth, realtime, dashboard complexe ? Next.js.

**Pourquoi ?** Astro est optimisé pour le contenu, pas les apps complexes.

### 2. Charger trop de JS dans les "islands"

```astro
<!-- ❌ Mauvais : Tout est interactif -->
<Header client:load />
<Hero client:load />
<Content client:load />
<Footer client:load />

<!-- ✅ Bon : Seul le nécessaire est interactif -->
<Header />
<Hero />
<InteractiveMap client:load />
<Footer />
```

### 3. Ignorer les Content Collections

Tu gères ton blog avec un CMS externe ? Pas besoin.

**Réalité :** Content Collections sont plus simples, plus rapides, et gratuits.

### 4. Utiliser l'architecture Next.js avec Astro

```astro
<!-- ❌ Mauvais : Tu fais du React avec Astro -->
<div>
  {useState.map(item => (
    <p>{item}</p>
  ))}
</div>

<!-- ✅ Bon : Tu utilises le templating Astro -->
<ul>
  {posts.map(post => <li>{post.data.title}</li>)}
</ul>
```

### 5. Négliger le SEO

"Astro est rapide, donc mon SEO est bon" → Oui, mais pas automatiquement.

**SEO checklist :**

- Meta title et description
- Open Graph et Twitter cards
- Sitemap XML
- Structured data (schema.org)
- Alt text pour les images

## Plan d'action : 1 semaine

### Jour 1 : Installation

- [ ] Installer Astro (`npm create astro@latest`)
- [ ] Explorer la structure du projet
- [ ] Créer une première page

### Jour 2 : Comprendre les bases

- [ ] Apprendre les layouts et composants
- [ ] Comprendre les collections de contenu
- [ ] Créer un blog simple

### Jour 3 : Styliser

- [ ] Installer Tailwind ou SASS
- [ ] Créer un design responsive
- [ ] Optimiser les images

### Jour 4 : Intégrations

- [ ] Ajouter React pour des composants interactifs
- [ ] Configurer le RSS
- [ ] Générer le sitemap

### Jour 5 : Optimisation

- [ ] Optimiser les Core Web Vitals
- [ ] Tester Lighthouse
- [ ] Vérifier le SEO

### Jour 6 : Déploiement

- [ ] Créer un compte Vercel/Netlify
- [ ] Connecter ton repo GitHub
- [ ] Lancer ton site en production

### Jour 7 : Contenu

- [ ] Écrire 5 articles
- [ ] Optimiser pour SEO
- [ ] Lancer ton site

## En savoir plus

- [Next.js](/site/next) - Alternative pour applications web
- [Vue/Nuxt](/site/nuxt) - Alternative framework Vue
- [WordPress](/site/wordpress) - Alternative CMS traditionnel
- [Tech](/tech) - Architecture et développement web

---

Astro n'est pas un framework pour tout le monde. Mais si tu fais du contenu, c'est le meilleur choix en 2026. Vitesse, simplicité, performance. Pas de bullshit, juste du HTML rapide.
