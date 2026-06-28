---
section: blog
title: 'Svelte : Guide Complet'
author: Diane
tags:
- Tech
description: Le framework web qui disparaît du navigateur en 2026
pubDate: '2026-01-17'
imgUrl: ../../../assets/astro.jpeg
---

# Svelte : Le Framework Web qui Disparaît

Tu veux créer des apps web ultra-rapides sans te faire chier avec la complexité de React ou Vue ? Svelte est fait pour toi.

## C'est quoi Svelte ?

Svelte est un framework web qui compile ton code en vanilla JavaScript au build time. Pas de virtual DOM, pas de framework runtime.

**Pourquoi Svelte ?**

- **Ultra-rapide :** Pas de runtime framework dans le bundle
- **Simple :** Syntaxe naturelle, moins de boilerplate
- **Performant :** Code vanilla compilé, pas de virtual DOM
- **Petit :** Bundles 3x plus petits que React/Vue

**Réalité :** Svelte compile tes composants en vanilla JavaScript. Le framework disparaît au runtime.

## Les 3 avantages clés

### 1. Code compilé (pas de runtime)

Svelte compile tes composants en vanilla JS.

| Framework | Taille bundle | Runtime         |
| --------- | ------------- | --------------- |
| React     | 40-100KB      | Virtual DOM     |
| Vue       | 20-50KB       | Reactive system |
| Svelte    | 2-5KB         | Vanilla JS      |

**Conclusion :** Tes apps sont plus rapides, plus légères.

### 2. Syntaxe simple

Pas de JSX, pas de hooks complexes. Juste du JavaScript et HTML.

```svelte
<script>
  let count = 0

  function increment() {
    count += 1
  }
</script>

<button on:click={increment}>
  Clics: {count}
</button>

<style>
  button {
    font-size: 1em;
    padding: 0.5em 1em;
  }
</style>
```

**Avantages :**

- Scoped CSS (automatique)
- Pas de imports de React/Vue
- Less boilerplate
- Plus facile à apprendre

### 3. Reactivity par défaut

Pas de `useState`, pas de `reactive()`. Les variables sont réactives par défaut.

```svelte
<script>
  let name = 'World'
  let greeting = `Hello, ${name}`

  $: greeting = `Hello, ${name}`  // Le $: = reactive statement
</script>

<input bind:value={name} />
<p>{greeting}</p>
```

## Svelte vs SvelteKit

Svelte est le framework. SvelteKit est le framework "full-stack" pour apps.

| Critère       | Svelte        | SvelteKit       |
| ------------- | ------------- | --------------- |
| Usage         | UI components | Full-stack apps |
| Routing       | Manuel        | Automatique     |
| SSR/SSG       | Pas intégré   | Intégré         |
| API routes    | Pas intégré   | Intégré         |
| Data fetching | Manuel        | Intégré         |

**Réalité :** Pour une app moderne, utilise SvelteKit. Svelte seul = pour composants isolés.

## Quand utiliser Svelte ?

### ✅ Parfait pour

- Applications web légères
- Sites avec beaucoup d'interactivité
- Portfolios interactifs
- Jeux web simples
- Apps qui doivent être ultra-rapides

### ❌ Pas pour

- Blogs simples (Astro est mieux)
- Sites statiques (Astro est mieux)
- Équipes React (Next.js est mieux)

**Alternative :** Astro pour statique, Next.js pour React, Nuxt.js pour Vue.

## Comment démarrer

### Installation (SvelteKit)

```bash
npm create svelte@latest mon-app
```

**Questions :**

1. Skeleton project ? → Yes (le plus simple)
2. TypeScript ? → Yes (recommandé)
3. ESLint, Prettier ? → Yes
4. Testing ? → Vitest

### Structure de projet

```
my-svelte-app/
├── src/
│   ├── routes/          # Routes automatiques
│   ├── lib/            # Utilitaires
│   └── app.html        # Layout global
├── static/             # Assets statiques
└── svelte.config.js    # Configuration
```

### Créer une page

```svelte
<!-- src/routes/+page.svelte -->
<h1>Bienvenue sur SvelteKit</h1>
<p>C'est ultra-rapide.</p>

<script>
  let count = 0
</script>

<button on:click={() => count += 1}>
  Clics: {count}
</button>

<style>
  h1 {
    color: purple;
  }
</style>
```

## Fonctionnalités essentielles

### 1. Data loading (Load functions)

```svelte
<!-- src/routes/blog/+page.svelte -->
<script>
  let { data } = await load({ fetch })

  async function load({ fetch }) {
    const response = await fetch('https://api.example.com/posts')
    const posts = await response.json()
    return { posts }
  }
</script>

{#each data.posts as post}
  <h2>{post.title}</h2>
{/each}
```

### 2. Form handling

```svelte
<script>
  let name = ''
  let email = ''

  async function handleSubmit() {
    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ name, email })
    })
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={name} />
  <input type="email" bind:value={email} />
  <button type="submit">Submit</button>
</form>
```

### 3. Stores (State management)

```ts
// src/stores/counter.ts
import { writable } from "svelte/store";

export const count = writable(0);
```

```svelte
<!-- Utilisation -->
<script>
  import { count } from '$lib/stores/counter'
</script>

<h1>{$count}</h1>

<button on:click={() => count.update(n => n + 1)}>
  Increment
</button>
```

### 4. SSR vs CSR

```svelte
<!-- src/routes/+page.svelte -->
<script>
  // Server-side (SSR)
  export async function load({ fetch }) {
    const data = await fetch('/api/data')
    return { data }
  }

  // Client-side (CSR)
  let clientData

  onMount(async () => {
    clientData = await fetch('/api/client-data').then(r => r.json())
  })
</script>
```

## Hébergement et déploiement

### Meilleures options

| Plateforme | Prix       | Avantages          |
| ---------- | ---------- | ------------------ |
| Vercel     | 0-20€/mois | Zero config, CI/CD |
| Netlify    | 0-20€/mois | Functions, edge    |
| Cloudflare | 0-20€/mois | Edge, cache        |
| Surge.sh   | Gratuit    | Simple, rapide     |

**Générer statique :**

```bash
npm run build
# Le dossier 'build' est prêt pour le déploiement
```

## Comparaison Svelte vs React vs Vue

| Critère       | Svelte     | React       | Vue        |
| ------------- | ---------- | ----------- | ---------- |
| Taille bundle | 2-5KB      | 40-100KB    | 20-50KB    |
| Performance   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐ |
| Apprendissage | ⭐⭐⭐⭐⭐ | ⭐⭐⭐      | ⭐⭐⭐⭐   |
| Écosystème    | ⭐⭐⭐     | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ |
| Syntaxe       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐      | ⭐⭐⭐⭐   |
| Runtime       | Vanilla JS | Virtual DOM | Reactive   |

**Conclusion :** Svelte gagne sur performance et taille. React/Vue gagnent sur écosystème.

## Les 5 erreurs à éviter

### 1. Utiliser Svelte pour un blog simple

Tu veux un blog ? Prends Astro.

**Pourquoi ?** Svelte est overkill pour du contenu. Astro est plus simple et plus rapide.

### 2. Ignorer le scoped CSS

```svelte
<!-- ❌ Mauvais : CSS global -->
<style>
  h1 { color: red; }  /* Affecte TOUS les h1 */
</style>

<!-- ✅ Bon : Scoped CSS -->
<style>
  h1 { color: red; }  /* Seulement ce composant */
</style>
```

### 3. Négliger les stores

```svelte
<!-- ❌ Mauvais : Props drilling -->
<script>
  let name = 'World'
</script>

<ChildComponent {name} />
<GrandchildComponent {name} />

<!-- ✅ Bon : Stores -->
<script>
  import { name } from '$lib/stores'
</script>

<!-- N'importe où dans l'app -->
<AnotherComponent />
```

### 4. Utiliser Svelte au lieu de SvelteKit

Tu veux une app mais tu utilises juste Svelte ?

**Pourquoi ?** SvelteKit gère routing, SSR, API routes, etc. Ne réinvente pas la roue.

### 5. Ignorer le SEO

"Svelte est rapide, donc mon SEO est bon" → Oui, mais pas automatiquement.

```svelte
<script>
  import { page } from '$app/stores'

  $: title = 'Mon Page'
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <meta name="description" content="Description..." />
</svelte:head>
```

## Outils populaires

| Outil            | Usage                |
| ---------------- | -------------------- |
| SvelteKit        | Full-stack framework |
| Vitest           | Testing              |
| Svelte Store     | State management     |
| Skeleton UI      | Component library    |
| Skeleton         | Svelte UI kit        |
| Svelte-Navigator | Client-side routing  |

## Plan d'action : 1 semaine

### Jour 1 : Installation

- [ ] Installer SvelteKit (`npm create svelte@latest`)
- [ ] Explorer la structure du projet
- [ ] Créer une première page

### Jour 2 : Comprendre Svelte

- [ ] Apprendre la syntaxe Svelte
- [ ] Comprendre la reactivity
- [ ] Utiliser les stores

### Jour 3 : SvelteKit routing

- [ ] Comprendre le système de routes
- [ ] Créer des routes dynamiques
- [ ] Utiliser les layouts

### Jour 4 : Data fetching

- [ ] Apprendre les load functions
- [ ] Comprendre SSR vs CSR
- [ ] Créer des API routes

### Jour 5 : Forms et validation

- [ ] Gérer les forms
- [ ] Valider les inputs
- [ ] Gérer les erreurs

### Jour 6 : Optimisation

- [ ] Optimiser les images
- [ ] Configurer le cache
- [ ] Améliorer les Core Web Vitals

### Jour 7 : Déploiement

- [ ] Créer un compte Vercel/Netlify
- [ ] Connecter ton repo GitHub
- [ ] Lancer ton app en production

## En savoir plus

- [Next.js](/site/next) - Alternative framework React
- [Nuxt.js](/site/nuxt) - Alternative framework Vue
- [Astro](/site/astro) - Alternative pour sites statiques
- [React](/tech/react) - Framework React

---

Svelte n'est pas pour tout le monde. Mais si tu veux des apps ultra-rapides avec une syntaxe simple, c'est un excellent choix en 2026. Pas de runtime, juste du JavaScript compilé. C'est ça l'innovation.
