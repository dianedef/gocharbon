---
section: blog
title: 'Nuxt.js : Guide Complet'
author: Diane
tags:
- Tech
description: Le framework Vue.js pour applications web en production en 2026
pubDate: '2026-01-17'
imgUrl: ../../../assets/astro.jpeg
---

# Nuxt.js : Le Framework Vue.js Production-Ready

Tu aimes Vue.js mais tu veux un framework qui gère tout comme Next.js le fait pour React ? Nuxt.js est fait pour toi.

## C'est quoi Nuxt.js ?

Nuxt.js est un framework Vue.js qui gère routing, SSR, SSG, API routes, et tout ce qu'il faut pour une app en production.

**Pourquoi Nuxt.js ?**

- **Vue ecosystem :** Si tu connais Vue, c'est naturel
- **Convention over configuration :** Zéro configuration
- **SEO :** Server-side rendering intégré
- **Modules :** Écosystème de 100+ modules

**Réalité :** Nuxt.js à Vue.js, c'est comme Next.js à React. Le standard pour les apps Vue en production.

## Les 3 avantages clés

### 1. Routing automatique

Pas de configuration. Crée un fichier, c'est une route.

```
pages/
├── index.vue          → /
├── about.vue          → /about
├── blog/
│   ├── index.vue      → /blog
│   └── [slug].vue     → /blog/mon-article
└── api/
    └── users.vue     → /api/users
```

**Avantages :**

- Dynamic routes (`[slug].vue`, `[id].vue`)
- Nested routes (layouts)
- Middleware pour auth et redirections

### 2. Server-Side Rendering (SSR)

Le serveur envoie du HTML prêt, pas du JavaScript vide.

```vue
<script setup>
const { data: posts } = await useFetch("/api/posts");
</script>

<template>
  <div>
    <h1>Blog</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
    </div>
  </div>
</template>
```

**Avantages :**

- SEO parfait
- Premier chargement ultra-rapide
- Hydration automatique

### 3. Modules puissants

Des modules pour tout.

| Module              | Usage               |
| ------------------- | ------------------- |
| @nuxtjs/tailwindcss | Tailwind CSS        |
| @nuxtjs/supabase    | Supabase (auth, db) |
| @pinia/nuxt         | State management    |
| @nuxtjs/strapi      | Headless CMS        |
| @nuxt/image         | Image optimization  |

## Quand utiliser Nuxt.js ?

### ✅ Parfait pour

- Applications web (SaaS, CRM)
- E-commerce avec inventory dynamique
- Sites avec authentification
- Apps qui utilisent déjà Vue.js
- Sites hybrides (statique + dynamique)

### ❌ Pas pour

- Blogs simples (Astro est mieux)
- Landing pages statiques (Carrd est mieux)
- Applications React (Next.js est mieux)

**Alternative :** Next.js pour React, Astro pour statique, Nuxt.js pour Vue.

## Comment démarrer

### Installation

```bash
npx nuxi@latest init mon-app
```

**Questions :**

1. Package manager ? → npm/yarn/pnpm
2. UI framework ? → None/Vuetify/Element Plus
3. TypeScript ? → Yes (recommandé)
4. Git init ? → Yes

### Structure de projet

```
my-nuxt-app/
├── nuxt.config.ts    # Configuration
├── pages/            # Routes automatiques
├── components/       # Composants
├── layouts/          # Layouts
├── server/           # Server routes
├── public/           # Assets statiques
└── middleware/       # Middleware
```

### Créer une page

```vue
<template>
  <div>
    <h1>Bienvenue sur Nuxt.js</h1>
    <p>C'est une app Vue en production.</p>
  </div>
</template>

<script setup>
// Composition API
useHead({
  title: "Mon App Nuxt",
  meta: [{ name: "description", content: "Mon super app" }],
});
</script>
```

## Fonctionnalités essentielles

### 1. Data fetching

```vue
<script setup>
// useFetch (composable, reactive)
const { data, error, pending } = await useFetch("/api/posts");

// useAsyncData (avec clé custom)
const { data } = await useAsyncData("posts", () => $fetch("/api/posts"));

// $fetch (server-side)
const posts = await $fetch("/api/posts");
</script>
```

### 2. API Routes

```vue
// server/api/hello.get.ts export default defineEventHandler(() => { return {
message: 'Hello from Nuxt API!' } }) // Avec params //
server/api/users/[id].get.ts export default defineEventHandler(event => { const
id = getRouterParam(event, 'id') return { userId: id } })
```

### 3. Server Middleware

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");
  if (!token.value) {
    return navigateTo("/login");
  }
});
```

### 4. Image optimization

```vue
<script setup>
// nuxt.config.ts
modules: ["@nuxt/image"];
</script>

<template>
  <NuxtImg src="/hero.webp" alt="Hero" width="800" format="webp" />
</template>
```

## Hébergement et déploiement

### Meilleures options

| Plateforme | Prix       | Avantages          |
| ---------- | ---------- | ------------------ |
| Vercel     | 0-20€/mois | Zero config, CI/CD |
| Netlify    | 0-20€/mois | Functions, edge    |
| Cloudflare | 0-20€/mois | Edge, cache        |
| Railway    | 5-50€/mois | Full stack         |

**Générer statique :**

```bash
npm run generate
# Le dossier 'output' est prêt pour le déploiement
```

## Comparaison Nuxt.js vs Vue.js

| Critère          | Nuxt.js          | Vue.js (Vite)             |
| ---------------- | ---------------- | ------------------------- |
| Routing          | Automatique      | Vue Router (manuel)       |
| SSR              | Intégré          | À configurer              |
| SEO              | SSR → ⭐⭐⭐⭐⭐ | SPA → ⭐⭐                |
| API routes       | Intégré          | Express/Fastify (externe) |
| Build            | Nitro (rapide)   | Vite (rapide)             |
| Image optim      | @nuxt/image      | Manuelle                  |
| State management | Pinia (intégré)  | Pinia (manuel)            |

**Conclusion :** En 2026, si tu fais une app avec Vue.js, prends Nuxt.js.

## Les 5 erreurs à éviter

### 1. Utiliser Nuxt pour un blog simple

Tu veux un blog ? Prends Astro ou Ghost.

**Pourquoi ?** Nuxt est overkill pour du contenu. Astro est plus simple et plus rapide.

### 2. Ignorer la composition API

```vue
<!-- ❌ Mauvais : Options API -->
<script>
export default {
  data() {
    return { count: 0 };
  },
};
</script>

<!-- ✅ Bon : Composition API -->
<script setup>
const count = ref(0);
</script>
```

### 3. Tout mettre dans SSR

```vue
<!-- ❌ Mauvais : SSR pour du contenu statique -->
<script setup>
const data = await useFetch("/static-data");
</script>

<!-- ✅ Bon : Hybride (SSG + SSR) -->
<script setup>
const { data } = await useAsyncData(
  "static",
  () => $fetch("/static-data"),
  { server: false }, // Client-side only
);
</script>
```

### 4. Négliger le cache

Nuxt a un cache puissant. Utilise-le.

```ts
// nuxt.config.ts
routeRules: {
  '/': { isr: 60 },      // ISR : 60 secondes
  '/blog': { isr: 3600 }, // ISR : 1 heure
  '/static/**': { isr: true } // Cache infini
}
```

### 5. Ignorer le SEO

"Nuxt gère le SEO" → Oui, mais pas automatiquement.

```vue
<script setup>
useHead({
  title: "Mon Page",
  meta: [
    { name: "description", content: "Description..." },
    { property: "og:title", content: "Mon Page" },
    { property: "og:image", content: "/image.jpg" },
  ],
});
</script>
```

## Outils populaires

| Outil        | Usage                           |
| ------------ | ------------------------------- |
| Pinia        | State management                |
| Supabase     | Backend as a service (auth, db) |
| Prisma       | ORM pour database               |
| Strapi       | Headless CMS                    |
| Nuxt Image   | Image optimization              |
| Nuxt Content | Content collections             |

## Plan d'action : 1 semaine

### Jour 1 : Installation

- [ ] Installer Nuxt.js (`npx nuxi@latest init`)
- [ ] Explorer la structure du projet
- [ ] Créer une première page

### Jour 2 : Comprendre le routing

- [ ] Apprendre le système de routes
- [ ] Créer des routes dynamiques
- [ ] Utiliser les layouts

### Jour 3 : Data fetching

- [ ] Apprendre useFetch et useAsyncData
- [ ] Comprendre SSR vs CSR
- [ ] Créer des API routes

### Jour 4 : Composables

- [ ] Comprendre les composables Nuxt
- [ ] Créer tes propres composables
- [ ] Utiliser Pinia pour le state

### Jour 5 : Optimisation

- [ ] Optimiser les images (@nuxt/image)
- [ ] Configurer le cache (routeRules)
- [ ] Améliorer les Core Web Vitals

### Jour 6 : Modules

- [ ] Installer Tailwind CSS
- [ ] Intégrer Supabase (auth, db)
- [ ] Utiliser @nuxt/content

### Jour 7 : Déploiement

- [ ] Créer un compte Vercel/Netlify
- [ ] Connecter ton repo GitHub
- [ ] Lancer ton app en production

## En savoir plus

- [Next.js](/site/next) - Alternative framework React
- [Astro](/site/astro) - Alternative pour sites statiques
- [Vue.js](/tech/vue) - Framework Vue.js
- [WordPress](/site/wordpress) - Alternative CMS traditionnel

---

Nuxt.js n'est pas pour tout le monde. Mais si tu fais une app avec Vue.js en production, c'est le meilleur choix en 2026. SSR, SSG, API routes, tout est là. Pas de configuration, juste du code Vue.
