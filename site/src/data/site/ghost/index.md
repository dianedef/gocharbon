---
section: blog
title: 'Ghost : Guide Complet'
author: Diane
tags:
- Tech
description: Le CMS moderne pour les blogs et créateurs de contenu en 2026
pubDate: '2026-01-17'
imgUrl: ../../../assets/astro.jpeg
---

# Ghost : Le CMS Moderne pour Blogueurs

Tu veux un blog ultra-rapide sans te faire chier avec les plugins WordPress ? Ghost est fait pour toi.

## C'est quoi Ghost ?

Ghost est un CMS spécialisé pour les blogs et les créateurs de contenu. Publier, monétiser, et construire une audience.

**Pourquoi Ghost ?**

- **Ultra-rapide :** Sites statiques par défaut
- **Simple :** Pas de plugins, juste du contenu
- **Monétisation :** Abonnements, memberships intégrés
- **Moderne :** Node.js, pas PHP comme WordPress

**Réalité :** Ghost est comme Medium mais hébergé sur ton propre domaine.

## Les 3 avantages clés

### 1. Performance par défaut

Ghost génère des sites statiques.

| Métrique        | Ghost   | WordPress  | Astro   |
| --------------- | ------- | ---------- | ------- |
| Lighthouse perf | 95-100  | 40-70      | 95-100  |
| LCP             | < 1s    | 2-4s       | < 1s    |
| TTFB            | < 200ms | 500-1000ms | < 200ms |
| Bundle JS       | 5-10KB  | 100-500KB  | 0-10KB  |

**Conclusion :** Ghost est ultra-rapide, sans configuration.

### 2. Monétisation intégrée

Pas besoin de plugins payants pour vendre.

**Fonctionnalités :**

- Abonnements mensuels/annuels
- Memberships (accès VIP)
- Newsletters payantes
- Paiements Stripe intégré
- Gestion des abonnés

**Réalité :** WordPress a besoin de WooCommerce + Paid Memberships Pro + Stripe plugin. Ghost a tout intégré.

### 3. Interface moderne

Admin propre, pas le bordel de WordPress.

**Ce que tu peux faire :**

- Écrire des articles avec l'éditeur moderne
- Gérer les abonnés
- Analyser les stats
- Configurer le SEO
- Personnaliser le design

## Quand utiliser Ghost ?

### ✅ Parfait pour

- Blogs personnels
- Créateurs de contenu
- Newsletters payantes
- Sites membership
- E-learning

### ❌ Pas pour

- E-commerce (Shopify est mieux)
- Apps web (Next.js est mieux)
- Sites d'entreprise complexes (WordPress est mieux)

**Alternative :** Astro pour les blogs gratuits, WordPress pour les sites d'entreprise.

## Comment démarrer

### Installation

**Option 1 : Ghost(Pro) (Recommandé)**

- 0-199€/mois
- Hébergement géré
- Support inclus
- Déploiement en 5 minutes

**Option 2 : Self-hosted**

```bash
# Sur ton serveur
ghost install
# Configure ton domain, SSL, etc.
```

**Option 3 : DigitalOcean (1-click)**

- 5-40€/mois
- Ghost pré-installé
- Simple, mais tu gères le serveur

### Structure de Ghost

Ghost n'a pas de structure complexe comme WordPress.

```
ghost-admin/
├── Posts            # Tes articles
├── Pages            # Tes pages statiques
├── Tags             # Catégories
├── Members          # Abonnés
└── Settings         # Configuration
```

### Créer un article

1. Clique sur "New post"
2. Écris ton titre
3. Écris ton contenu
4. Ajoute une image
5. Configure le SEO (title, meta description)
6. Publish

**Réalité :** Pas de plugins, pas de configurations complexes. Juste du contenu.

## Fonctionnalités essentielles

### 1. Éditeur moderne

L'éditeur de Ghost est basé sur le block editor (comme WordPress Gutenberg, mais plus propre).

**Fonctionnalités :**

- Blocs de contenu (texte, image, embed, etc.)
- Drag & drop
- Formatage markdown
- Prévisualisation en temps réel

### 2. SEO intégré

Pas besoin de Yoast SEO.

**Ce qui est inclus :**

- Meta titles et descriptions
- Open Graph tags
- Twitter cards
- Structured data
- Sitemap XML automatique

### 3. Memberships

Crée une communauté payante.

```yaml
# Configuration des membres
- Free members (inscrits pour newsletter)
- Paid members (abonnés payants)
- VIP members (accès exclusif)
```

**Ce que tu peux faire :**

- Créer des articles privés (seulement pour membres)
- Envoyer des newsletters gratuites ou payantes
- Gérer les abonnements

### 4. Newsletters

Ghost est aussi un outil de newsletter.

**Fonctionnalités :**

- Envoi automatique quand tu publishes
- Segmentation (free vs paid members)
- Templates de newsletters
- Analytics d'ouverture/clics

## Thèmes et Design

### Thèmes Ghost

Ghost a un système de thèmes simple.

| Thème    | Prix    | Style         |
| -------- | ------- | ------------- |
| Casper   | Gratuit | Minimaliste   |
| Dawn     | Gratuit | Moderne       |
| London   | 29€     | Typographique |
| Liebling | 49€     | Magazine      |

**Installation :**

```bash
# Via Ghost-CLI
ghost install <theme-name>

# Via admin interface
Upload .zip theme file
```

### Custom CSS

Tu peux customiser le thème sans toucher au code.

```css
/* Ghost admin → Settings → Design → Site-wide */
:root {
  --primary-color: #663399;
  --font-family: "Inter", sans-serif;
}
```

## Hébergement et Coûts

### Option 1 : Ghost(Pro)

| Plan       | Prix      | Fonctionnalités         |
| ---------- | --------- | ----------------------- |
| Starter    | 0€/mois   | 1 blog, 500 membres     |
| Pro        | 9€/mois   | 3 blogs, 5000 membres   |
| Business   | 25€/mois  | 10 blogs, 50000 membres |
| Enterprise | 199€/mois | Illimité, support 24/7  |

**Avantages :**

- Hébergement géré
- Updates automatiques
- Support inclus
- CDN intégré
- SSL gratuit

### Option 2 : Self-hosted

| Hébergeur     | Prix       | Difficulté |
| ------------- | ---------- | ---------- |
| DigitalOcean  | 5-40€/mois | Moyenne    |
| VPS           | 5-50€/mois | Haute      |
| AWS Lightsail | 5-80€/mois | Haute      |

**Coûts totaux :**

- VPS : 5-40€/mois
- Domaine : 10-15€/an
- SSL (Let's Encrypt) : Gratuit
- Stripe fees : 2.9% + 0.30€ par transaction

## Comparaison Ghost vs WordPress

| Critère      | Ghost              | WordPress            |
| ------------ | ------------------ | -------------------- |
| Performance  | ⭐⭐⭐⭐⭐         | ⭐⭐                 |
| Facilité     | ⭐⭐⭐⭐⭐         | ⭐⭐⭐⭐             |
| SEO          | ⭐⭐⭐⭐⭐         | ⭐⭐⭐ (avec plugin) |
| Monétisation | Intégré ⭐⭐⭐⭐⭐ | Plugins ⭐⭐⭐       |
| Plugins      | 0-50 (thèmes)      | 60K+ plugins         |
| Coût         | 0-199€/mois        | 0-200€/mois          |
| Écosystème   | ⭐⭐⭐             | ⭐⭐⭐⭐⭐           |
| Maintenance  | Faible             | Élevée               |

**Conclusion :** Si tu veux un blog/blog payant → Ghost. Si tu veux un site d'entreprise complexe → WordPress.

## Les 5 erreurs à éviter

### 1. Utiliser Ghost pour un e-commerce

"Ghost peut vendre des abonnements, donc je peux faire de l'e-commerce" → Non.

**Pourquoi ?** Ghost est fait pour le contenu digital (abonnements, memberships). Pour vendre des produits physiques, prends Shopify.

### 2. Self-hoster sans compétences techniques

"Je vais héberger Ghost sur mon VPS à 5€/mois" → Tu vas galérer.

**Réalité :** Si tu ne connais pas Linux, Node.js, SSL, et le serveur management, prends Ghost(Pro). Ça vaut le coût.

### 3. Ignorer le SEO

"Ghost est rapide, donc mon SEO est bon" → Oui, mais pas automatiquement.

**Checklist SEO :**

- Title optimisé (60-70 caractères)
- Meta description (150-160 caractères)
- Alt text pour les images
- Tags pertinents
- URL propre (pas de paramètres)

### 4. Sur-customiser le thème

Ghost est simple. Reste simple.

```css
/* ❌ Mauvais : Customiser tout */
h1, h2, h3, p, li, a { ... } /* 1000 lignes de CSS */

/* ✅ Bon : Customiser juste l'essentiel */
:root {
  --primary-color: #663399;
}
```

### 5. Négliger les newsletters

Ghost est puissant pour les newsletters. Utilise-le.

**Stratégie :**

- Newsletter gratuite pour attirer des abonnés
- Newsletter premium (payante) pour les membres
- Email automatique quand tu publishes un article

## Plan d'action : 1 semaine

### Jour 1 : Installation

- [ ] Créer un compte Ghost(Pro) (recommandé)
- [ ] Configurer ton domain
- [ ] Configurer SSL (automatique sur Ghost Pro)

### Jour 2 : Design

- [ ] Choisir un thème (Casper est gratuit)
- [ ] Customiser les couleurs
- [ ] Configurer le logo et favicon

### Jour 3 : Contenu

- [ ] Créer 5-10 articles
- [ ] Configurer les tags
- [ ] Optimiser le SEO de chaque article

### Jour 4 : Monétisation

- [ ] Configurer Stripe
- [ ] Créer un plan d'abonnement
- [ ] Configurer les memberships

### Jour 5 : Newsletters

- [ ] Configurer les templates de newsletter
- [ ] Créer une newsletter de bienvenue
- [ ] Activer les emails automatiques

### Jour 6 : Analytics

- [ ] Intégrer Google Analytics
- [ ] Configurer les goals (newsletter signup, subscription)
- [ ] Analyser les premiers résultats

### Jour 7 : Lancement

- [ ] Faire un dernier review
- [ ] Lancer ton blog
- [ ] Partager sur les réseaux sociaux

## En savoir plus

- [WordPress](/site/wordpress) - Alternative CMS traditionnel
- [Astro](/site/astro) - Alternative pour sites statiques
- [Next.js](/site/next) - Alternative pour applications
- [Shopify](/site/shopify) - Alternative e-commerce

---

Ghost n'est pas pour tout le monde. Mais si tu veux un blog moderne avec monétisation intégrée, c'est le meilleur choix en 2026. Pas de plugins, pas de configuration complexe, juste du contenu.
