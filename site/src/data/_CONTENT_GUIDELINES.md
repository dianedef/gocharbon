---
title: "Content Guidelines GOCHARBON"
author: Diane
tags: ['Tutoriels']
description: Guide de rédaction pour les articles de blog compatibles Astro
pubDate: 2024-01-01
imgUrl: ../assets/astro.jpeg
---

# Content Guidelines - GOCHARBON

## Concept GoCharbon

GoCharbon est une plateforme francophone dédiée aux entrepreneurs, freelances et créateurs de contenu qui cherchent à optimiser leur boîte à outils numériques. Nous nous spécialisons dans:

- **Lifetime Deals**: Offres à vie sur les logiciels SaaS
- **Alternatives aux marketplaces**: AppSumo, PitchGround, DealMirror, etc.
- **Outils pour entrepreneurs**: Marketing, productivité, création de contenu
- **Ressources et formations**: PDF, prompts, templates

Notre mission: aider les entrepreneurs à économiser des milliers d'euros en identifiant les meilleures offres de logiciels à vie et alternatives aux plateformes mainstream.

## Client Idéal

**Persona**: Entrepreneur·e, freelance, créateur·rice de contenu, ou petite entreprise

**Profil**:

- Âge: 25-45 ans
- Recherche des outils performants à prix réduit
- Conscient des coûts récurrents des SaaS
- Francophone (principalement France, Belgique, Suisse, Québec)
- Actif·ve sur les réseaux sociaux et les communautés en ligne
- Open-source et alternatives aux géants tech

**Besoins**:

- Trouver des deals et offres à vie sur les logiciels
- Comparer les marketplaces (AppSumo vs alternatives)
- Découvrir des outils français et européens
- Économiser sur les coûts d'outils numériques
- Éviter les arnaques et les produits "mort-nés"

**Douleurs**:

- Abonnements SaaS qui s'accumulent
- Plateformes comme AppSumo avec des produits qui disparaissent
- Marketing agressif et promesses exagérées
- Manque de transparence sur la fiabilité des fondateurs

## Format des Articles

### Structure Générale

```markdown
---
frontmatter
---

[Introduction avec hook]

[H2 Section principale]
Contenu informatif avec exemples concrets

[H2 Sous-section]
Détails spécifiques avec liens et ressources

[Conclusion]
Résumé avec appel à l'action subtil
```

### Frontmatter (Obligatoire)

```yaml
---
title: "Titre accrocheur et optimisé SEO (60-70 caractères)"
pubDate: JJ/MM/AAAA
author: "Diane"
tags:
  - Tag principal
  - Tag secondaire
  - Tag tertiaire
imgUrl: "../../assets/nom-image.webp"
description: "Description concise (150-160 caractères) optimisée SEO"
layout: "../../layouts/BlogPost.astro"
---
```

### Règles Frontmatter

- **title**: Titre optimisé SEO, incluant le mot-clé principal. Style accrocheur mais professionnel.
- **pubDate**: Format français JJ/MM/AAAA
- **author**: Toujours "Diane"
- **tags**: 2-5 tags pertinents, en PascalCase ou minuscules. Tags communs: `Lifetime Deals`, `SaaS`, `Alternatives`, `Marketing`, `Productivité`
- **imgUrl**: Chemin relatif depuis src/content/blog, préférence .webp pour la performance
- **description**: Meta description optimisée SEO, 150-160 caractères, incluant le mot-clé
- **layout**: Toujours `'../../layouts/BlogPost.astro'`

## Images

### Format des images dans le contenu

```markdown
![|150](nom-image.webp)
```

- Tailles recommandées: `|150` (petit), `|200` (moyen), `|300` (grand)
- Format: WebP prioritaire, PNG/JPG fallback
- Nom des fichiers: descriptif avec tirets (ex: `alternative-appsumo-viededingue.webp`)
- Placement: Après chaque section H2 principale

### Emplacement des fichiers

Les images doivent être placées dans `src/content/blog/assets/` ou `public/assets/`

## Tone et Style

### Le Ton GoCharbon : Direct et No Bullshit

C'est ce qui nous différencie des autres. Comme sur notre page d'accueil, on va droit au but sans bullshit :

- **Pas de blabla inutile** : On explique clairement, sans jargon technique ou phrases à rallonge.
- **Honnête jusqu'au bout** : Quand ça marche, on le dit. Quand c'est de la merde, on le dit aussi. Pas de promotion déguisée.
- **Pragmatique** : Juste l'essentiel, du concret, des trucs que tu peux appliquer le jour même.
- **Parlé comme un ami** : Pas le ton "prof" ou "guru". On t'explique comme si tu avais 12 ans, sans te prendre la tête.
- **Anti-promesses impossibles** : Pas de "tu vas gagner 10k€ en 30 jours". On reste réaliste.

**Exemples de phrases dans le ton GoCharbon :**

- "Si ça marche en 2026, tu le sauras. Si c'est de la merde, on te le dira aussi."
- "Arrête de te compliquer la vie."
- "C'est pas du patriotisme bisounours, c'est du bon sens économique."
- "Soyons honnêtes : la plupart des Français galèrent en anglais."
- "Pas de bullshit, que des outils qu'on utilise vraiment ou qu'on recommanderait à nos potes."

### Ton

- **Conversationnel**: Utilisation du "tu" pour créer une connexion
- **Authentique**: Expérience personnelle, avis honnêtes
- **Expert**: Démontrer une connaissance approfondie du sujet
- **Constructif**: Critiques équilibrées avec solutions
- **Français naturel**: Langage vivant, pas robotique

### Style d'écriture

1. **Phrases courtes et dynamiques**

   - Bon: "J'achète sur AppSumo depuis des années et mon avis est très positif."
   - Éviter: "Ayant effectué des achats sur la plateforme AppSumo depuis une période considérable, je tiens à exprimer..."

2. **Vocabulaire accessible mais professionnel**

   - Utiliser des termes techniques avec contexte
   - Expliquer les acronymes au premier usage

3. **Structure visuelle**

   - Paragraphes de 2-4 phrases max
   - Utiliser des listes à puces pour les points clés
   - Mettre en gras les informations importantes

4. **Liens internes et externes**
   - Liens vers vos propres articles en texte ancres descriptives
   - Liens vers les ressources mentionnées (marketplaces, outils)
   - Liens affiliés là où pertinent et naturel

### À éviter

- Superlatifs excessifs ("le meilleur", "incroyable")
- Promesses irréalistes ("tu vas gagner 10 000€")
- Contenu promotionnel trop agressif
- Anglicismes non nécessaires
- Phrases passives
- Le blabla corporatif ("aligner les synergies", "optimiser l'expérience utilisateur" sans dire comment)
- La langue de bois ("c'est un excellent produit" quand c'est médiocre)
- Les promesses vides ("change ta vie en 2 semaines")
- Le ton guru/prof ("voici comment tu dois faire" sans contexte)
- Les introductions interminables (3 paragraphes avant d'arriver au sujet)

## Contenu

### Introduction

- **Hook captivant**: Question, statistique, ou affirmation surprenante
- **Contexte rapide**: Pourquoi ce sujet est important maintenant
- **Promesse**: Ce que le lecteur va apprendre/gagner

### Corps de l'article

- **H2**: Sections principales avec mots-clés SEO
- **H3**: Sous-sections pour détailler
- **Exemples concrets**: Cas d'utilisation, expériences personnelles
- **Données factuelles**: Statistiques, prix, dates, conditions

### Conclusion

- **Résumé des points clés**
- **Recommandation finale**
- **Appel à l'action subtil**: explorer les alternatives, partager son expérience

## SEO

### Mots-clés

- Intégrer le mot-clé principal dans:
  - Title frontmatter
  - Description frontmatter
  - Premier paragraphe
  - Au moins un H2
  - URL du fichier (slug)

### Structure

- 1 H1 (le title)
- 2-6 H2
- 3-10 H3
- Pas de sauts de niveaux (H1 → H3)

### Longueur

- Articles de fond: 1500-3000 mots
- Articles guides: 1000-2000 mots
- Articles listes: 1200-2500 mots

## Liens

### Liens internes

Format markdown standard:

```markdown
[mon avis global sur cette marketplace est très positif](https://gocharbon.com/cest-quoi-appsumo/)
```

- Ancres descriptives (pas "cliquez ici")
- 2-5 liens par article selon la longueur

### Liens externes

```markdown
[Vie De Dingue s'inspire d'AppSumo pour vendre des offres à vie](https://gocharbon.com/viededingue)
```

- Ouvrir dans un nouvel onglet si hors de GoCharbon
- Vérifier la pertinence et la qualité du lien

## Checklist avant publication

- [ ] Frontmatter complet et valide
- [ ] Title optimisé SEO (60-70 car.)
- [ ] Description optimisée SEO (150-160 car.)
- [ ] Date au format JJ/MM/AAAA
- [ ] Tags pertinents (2-5)
- [ ] Image d'illustration en .webp avec chemin correct
- [ ] Introduction avec hook direct (pas de blabla)
- [ ] 2+ sections H2 avec contenu structuré
- [ ] Paragraphes courts (2-4 phrases)
- [ ] Liens internes et externes fonctionnels
- [ ] Ton conversationnel, authentique et direct
- [ ] Honnêteté totale (on dit quand ça marche, quand c'est de la merde)
- [ ] Pas de langue de bois ni de jargon inutile
- [ ] Conclusion avec résumé
- [ ] Orthographe et grammaire vérifiées
- [ ] Aucun "tu vas" excessif ou promesses irréalistes
- [ ] Ton "no bullshit" : on va droit au but, sans blabla

## Exemple d'article

Voir `alternatives-appsumo.md` pour un exemple complet d'article conforme à ces guidelines.

## Notes Astro

- Les fichiers sont placés dans `src/content/blog/`
- Layout utilisé: `layouts/BlogPost.astro`
- Images optimisées avec la composante Image d'Astro
- Le frontmatter est validé automatiquement par Astro
