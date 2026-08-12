---
section: tutos
title: Comment Ajouter un Favicon à Son Site
author: Diane
tags:
- Tutoriels
description: Ajoute ton favicon en 2 minutes avec les bons outils. Guide rapide et
  simple.
pubDate: '2026-01-17'
imgUrl: ../../assets/astro.jpeg
---

# Comment Ajouter un Favicon à Ton Site

Le favicon, c'est cette petite icône dans l'onglet du navigateur. Ça a l'air anodin, mais ça change la perception de ton professionnalisme. Fais-le, prend 2 minutes.

## Pourquoi un favicon ?

- Branding visible dans les onglets
- Bookmark plus reconnaissable
- Plus pro aux yeux des visiteurs
- Google l'utilise dans les résultats de recherche

## Comment créer ton favicon ?

### Étape 1 : Prépare ton logo

**Format :** PNG, JPG ou SVG

**Recommandations :**

- Minimum 512x512 pixels
- Fond simple ou transparent
- Design lisible même en petit
- Contraste suffisant

### Étape 2 : Génère les fichiers

**Utilise Favicon Generator (gratuit)** :

[Visiter Favicon Generator](https://realfavicongenerator.net/)

**Comment faire :**

1. Upload ton logo (PNG/JPG/SVG)
2. Configure les couleurs
3. Clique sur "Generate your Favicons and HTML code"
4. Télécharge le ZIP

**Pourquoi ce tool ?** Il génère tous les formats nécessaires (ICO, PNG, Apple touch icon, etc.) avec le code HTML prêt à copier.

### Étape 3 : Intègre dans ton site

**Si tu utilises un framework moderne (Astro, Next.js, etc.) :**

```html
<!-- Dans le <head> -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

**Si tu utilises un CMS (WordPress, Ghost) :**

1. Upload les fichiers dans le dossier racine (`public/` ou `root/`)
2. Copie le code HTML fourni par le générateur
3. Colle dans le `<head>` de ton site

**Si tu utilises WordPress :**

- Upload ton favicon via **Apparence > Personnaliser > Identité du site**
- WordPress gère tout automatiquement

## Alternatives gratuites

| Outil             | Prix    | Pour quoi ?         |
| ----------------- | ------- | ------------------- |
| Favicon Generator | Gratuit | Tous les formats    |
| Canva             | Gratuit | Design personnalisé |
| Icone PNG         | Gratuit | Icônes pré-faites   |
| Favicon.io        | Gratuit | Simple et rapide    |

## Les 3 erreurs à éviter

### 1. Image trop chargée

Ton logo a plein de détails ? Le favicon sera illisible.

**Solution :** Simplifie. 1-2 couleurs maximum. Design simple.

### 2. Image trop petite

Tu upload une image 32x32 ? Résolution pauvre.

**Solution :** Minimum 512x512. Le générateur redimensionne correctement.

### 3. Oublier de tester

Tu ajoutes le code mais tu ne testes pas.

**Solution :** Teste sur Chrome, Firefox, Safari, et mobile. Nettoie le cache si nécessaire.

## Vérification

Après installation, vérifie :

- [ ] L'icône s'affiche dans l'onglet du navigateur
- [ ] L'icône s'affiche dans les bookmarks
- [ ] L'icône s'affiche sur mobile
- [ ] L'icône s'affiche sur l'écran d'accueil (iOS/Android)

## Conclusion

C'est 2 minutes de travail pour un impact visuel immédiat. Ne saute pas cette étape.

---

Le branding, c'est les détails. Favicon, logo, couleurs, typographie. Tout doit être cohérent. Commence par le favicon.
