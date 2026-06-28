---
section: blog
title: 'Next.js : Guide Complet'
author: Diane
tags:
- Tech
description: Le framework React pour applications web en production en 2026
pubDate: '2026-01-17'
imgUrl: ../../../assets/astro.jpeg
---

# Next.js : Le Framework React Production-Ready

Tu veux créer une application web avec React sans te faire chier avec Webpack, SSR, et la configuration ? Next.js est fait pour toi.

## C'est quoi Next.js ?

Next.js est un framework React qui gère tout ce qu'il faut pour une app en production : routing, SSR, SSG, API routes, optimisation, etc.

**Pourquoi Next.js ?**

- **Ready for production :** Routing, SSR, SSG, API routes out of the box
- **Performance :** Optimisation automatique des images, fonts, et bundles
- **SEO :** Server-side rendering pour un SEO parfait
- **Vercel :** Déploiement en 1 clic sur Vercel

**Réalité :** C'est le standard pour les apps React en production. Discord, TikTok, Twitch utilisent Next.js.

## Les 3 avantages clés

### 1. Routing automatique

Pas de configuration de routing. Crée un fichier, c'est une route.

```
pages/
├── index.js           → /
├── about.js           → /about
├── blog/
│   ├── index.js       → /blog
│   └── [slug].js      → /blog/mon-article
└── api/
    └── users.js       → /api/users
```

**Avantages :**

- Dynamic routes (`[slug].js`, `[id].js`)
- Catch-all routes (`[...slug].js`)
- Middleware pour auth et redirections

### 2. Server-Side Rendering (SSR)

Le serveur envoie du HTML prêt, pas du JavaScript vide.

```javascript
export async function getServerSideProps() {
  const data = await fetch("https://api.example.com/data");
  return {
    props: { data }, // Passé au composant
  };
}
```

**Avantages :**

- SEO parfait (Google voit le contenu)
- Premier chargement ultra-rapide
- Cache serveur pour les pages fréquentes

### 3. Static Site Generation (SSG)

Génère des pages statiques au build time.

```javascript
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts }, // Généré au build
    revalidate: 60, // ISR : régénère toutes les 60s
  };
}
```

**Avantages :**

- Ultra-rapide (pas de serveur pour chaque requête)
- CDN-ready
- Coût d'hébergement minimal

## Quand utiliser Next.js ?

### ✅ Parfait pour

- Applications web (SaaS, CRM, dashboard)
- E-commerce avec inventaire dynamique
- Sites avec authentification
- Apps avec API routes
- Sites hybrides (partie statique + partie dynamique)

### ❌ Pas pour

- Blogs simples (Astro est mieux)
- Landing pages statiques (Carrd est mieux)
- Portfolios simples (Astro est mieux)

**Alternative :** Astro pour le contenu statique, Next.js pour les apps.

## Comment démarrer

### Installation

```bash
npx create-next-app@latest
```

**Questions :**

1. TypeScript ? → Yes (recommandé)
2. ESLint ? → Yes
3. Tailwind CSS ? → Yes (recommandé)
4. App Router ou Pages Router ? → App Router (nouveau standard)

### Structure de projet (App Router)

```
my-next-app/
├── app/
│   ├── layout.tsx      # Layout global
│   ├── page.tsx        # Page d'accueil (/)
│   ├── about/
│   │   └── page.tsx    # Page /about
│   ├── blog/
│   │   ├── page.tsx    # Page /blog
│   │   └── [slug]/     # Route dynamique
│   │       └── page.tsx
│   └── api/            # API routes
│       └── users/
│           └── route.ts
├── public/             # Assets statiques
├── components/         # Composants
└── styles/             # Styles globaux
```

### Créer une page

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur Next.js</h1>
      <p>C'est une app React en production.</p>
    </main>
  );
}
```

## Fonctionnalités essentielles

### 1. Image Optimization

Optimise automatiquement les images.

```tsx
import Image from "next/image";

<Image
  src="/hero.webp"
  alt="Hero"
  width={800}
  height={400}
  priority // Pour les images above-the-fold
/>;
```

**Avantages :**

- Conversion automatique en WebP/AVIF
- Lazy loading
- Responsive images
- Préfetch automatique

### 2. Font Optimization

Optimise les polices (self-hosting automatique).

```tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return <html className={inter.className}>{children}</html>;
}
```

### 3. API Routes

Crée des API backend dans ton frontend.

```tsx
// app/api/users/route.ts
export async function GET() {
  const users = await getUsers();
  return Response.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await createUser(data);
  return Response.json(user);
}
```

### 4. Server Actions

Appelle des fonctions serveur directement depuis le client (nouveau).

```tsx
"use server";

import { revalidatePath } from "next/cache";

export async function updatePost(formData: FormData) {
  const title = formData.get("title");
  await db.posts.update({ title });
  revalidatePath("/blog"); // Rafraîchit la page
}
```

## Hébergement et déploiement

### Meilleures options

| Plateforme  | Prix       | Avantages        |
| ----------- | ---------- | ---------------- |
| Vercel      | 0-20€/mois | Zero config, CDN |
| Netlify     | 0-20€/mois | Functions, edge  |
| Cloudflare  | 0-20€/mois | Edge, cache      |
| AWS Amplify | 0-50€/mois | Full stack AWS   |

**Commande de déploiement (Vercel) :**

```bash
npm run build
vercel deploy
```

## Comparaison Next.js vs Create React App

| Critère      | Next.js          | Create React App         |
| ------------ | ---------------- | ------------------------ |
| Performance  | ⭐⭐⭐⭐⭐       | ⭐⭐⭐                   |
| SEO          | SSR → ⭐⭐⭐⭐⭐ | SPA → ⭐⭐               |
| Routing      | Automatique      | React Router (manuel)    |
| API routes   | Intégré          | Externe (Express, etc.)  |
| Image optim  | Automatique      | Manuelle                 |
| Build        | Rapide (SWC)     | Lent (Webpack)           |
| Tailwind CSS | Support natif    | Configuration nécessaire |

**Conclusion :** En 2026, plus personne n'utilise CRA. Next.js est le standard.

## Les 5 erreurs à éviter

### 1. Utiliser Next.js pour un blog simple

Tu veux un blog ? Prends Astro.

**Pourquoi ?** Next.js est overkill pour du contenu. Astro est plus simple et plus rapide.

### 2. Tout mettre dans `getServerSideProps`

```tsx
// ❌ Mauvais : SSR pour du contenu statique
export async function getServerSideProps() {
  const data = await fetchStaticData();
  return { props: { data } };
}

// ✅ Bon : SSG pour le contenu statique
export async function getStaticProps() {
  const data = await fetchStaticData();
  return { props: { data } };
}
```

### 3. Ignorer les images optimisées

```tsx
// ❌ Mauvais : Image standard <img>
<img src="/large.jpg" alt="Large" />

// ✅ Bon : Image Next.js optimisée
<Image
  src="/large.jpg"
  alt="Large"
  width={800}
  height={400}
  placeholder="blur"
/>
```

### 4. Ne pas utiliser le cache

Next.js a un cache puissant. Utilise-le.

```tsx
// Revalidation automatique (ISR)
export const revalidate = 3600; // 1 heure

export default async function Page() {
  const data = await fetchData(); // Cache pendant 1h
  return <div>{data}</div>;
}
```

### 5. Ignorer les App Router

Tu continues avec le Pages Router ? Migrer.

**Pourquoi ?** App Router est le futur. Nouvelles features (Server Actions, Streaming, etc.) uniquement là.

## Outils populaires

| Outil          | Usage             |
| -------------- | ----------------- |
| Prisma         | ORM pour database |
| Clerk          | Authentification  |
| Resend         | Email sending     |
| Stripe         | Paiements         |
| Drizzle        | ORM léger         |
| TanStack Query | Data fetching     |
| Zustand        | State management  |

## Plan d'action : 1 semaine

### Jour 1 : Installation

- [ ] Installer Next.js (`npx create-next-app`)
- [ ] Explorer la structure du projet
- [ ] Créer une première page

### Jour 2 : Comprendre le routing

- [ ] Apprendre le App Router
- [ ] Créer des routes dynamiques
- [ ] Utiliser le Layout

### Jour 3 : SSR et SSG

- [ ] Comprendre `getServerSideProps` (Pages) ou `async/await` (App)
- [ ] Comprendre `getStaticProps` (Pages) ou `revalidate` (App)
- [ ] Choisir entre SSR et SSG

### Jour 4 : API et Backend

- [ ] Créer des API routes
- [ ] Intégrer une base de données
- [ ] Utiliser Server Actions

### Jour 5 : Optimisation

- [ ] Optimiser les images
- [ ] Optimiser les fonts
- [ ] Améliorer les Core Web Vitals

### Jour 6 : Auth et Sécurité

- [ ] Intégrer l'authentification
- [ ] Sécuriser les API routes
- [ ] Gérer les sessions

### Jour 7 : Déploiement

- [ ] Créer un compte Vercel
- [ ] Connecter ton repo GitHub
- [ ] Lancer ton app en production

## En savoir plus

- [Astro](/site/astro) - Alternative pour sites statiques
- [React](/tech/react) - Framework React
- [Nuxt.js](/site/nuxt) - Alternative framework Vue
- [WordPress](/site/wordpress) - Alternative CMS traditionnel

---

Next.js n'est pas pour tout le monde. Mais si tu fais une app web en production, c'est le meilleur choix en 2026. SSR, SSG, API routes, tout est là. Pas de configuration, juste du code.
