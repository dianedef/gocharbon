---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Rendre Site Conforme Handicapé
author: Diane
description: 'Découvre Rendre Site Conforme Handicapé : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# ACCESSIBILITE WEB : RENDS TON SITE UTILISABLE PAR TOUS

En France, 12 millions de personnes vivent avec un handicap. Un site inaccessible, c'est 15-20% de ton audience potentielle que tu exclus. Et depuis 2023, la loi impose des obligations d'accessibilite a de plus en plus d'entreprises. Voici comment rendre ton site conforme, etape par etape.

## Ce que dit la loi en France

### Le RGAA (Referentiel General d'Amelioration de l'Accessibilite)

Le RGAA est le referentiel francais base sur les WCAG (Web Content Accessibility Guidelines) du W3C. La version actuelle est le **RGAA 4.1.2** (mise a jour en 2022, toujours en vigueur en 2025). Il definit **106 tests precis** repartis en 13 thematiques.

**Qui est concerne ?**
- Les sites publics (administrations, collectivites) : obligatoire depuis 2012 (loi n2005-102)
- Les entreprises privees avec un CA > 250 millions EUR : obligatoire depuis 2023
- **A partir du 28 juin 2025** : le European Accessibility Act (EAA) entre en vigueur et elargit massivement les obligations. **Tous les services de e-commerce** et services numeriques prives doivent se conformer aux normes d'accessibilite (norme EN 301 549). Cela concerne les sites marchands, les applis mobiles, les terminaux de paiement, les services bancaires en ligne, etc.
- En France, l'EAA vient renforcer les obligations existantes du RGAA. Les entreprises privees de toute taille vendant des produits ou services en ligne sont concernees

**Sanctions** : jusqu'a 50 000 EUR d'amende par an pour les sites publics non conformes. Pour le prive, les recours juridiques se multiplient. **En novembre 2025**, les premieres plaintes EAA ont ete deposees en France contre des enseignes de la grande distribution (Auchan, Carrefour, E.Leclerc, Picard) par des associations de droits des personnes handicapees (ApiDV et Droit Pluriel), via des procedures d'urgence (refere).

**Chiffre cle** : en 2025, seulement 3,4% des sites des grandes entreprises francaises sont conformes aux normes d'accessibilite.

### Les niveaux WCAG

Le RGAA est aligne sur les **WCAG 2.1** (et les WCAG 2.2 publiees en octobre 2023 sont de plus en plus referencees) :

- **Niveau A** : le minimum vital (textes alternatifs, navigation clavier, pas de contenu clignotant)
- **Niveau AA** : le standard recommande et exige par le RGAA (contrastes suffisants, texte redimensionnable, sous-titres video)
- **Niveau AAA** : l'excellence (langue des signes, audio-description, navigation simplifiee)

**Nouveautes WCAG 2.2** (2023) : 9 nouveaux criteres de succes dont :
- Focus visible ameliore (2.4.11) : le focus doit avoir un contraste minimum de 3:1
- Taille minimale des cibles (2.5.8) : les elements cliquables doivent faire au moins 24x24 CSS pixels
- Aide coherente (3.2.6) : les mecanismes d'aide doivent apparaitre au meme endroit sur toutes les pages
- Authentification accessible (3.3.8) : pas de test cognitif obligatoire pour se connecter

Le RGAA exige le **niveau AA**.

## Etape 1 : Audite ton site

Avant de corriger, il faut savoir ce qui ne va pas.

### Outils automatiques (gratuits)

**WAVE** -- [wave.webaim.org](https://wave.webaim.org/)
1. Entre l'URL de ta page
2. WAVE affiche les erreurs directement sur ta page avec des icones colorees
3. Rouge = erreur critique, jaune = alerte a verifier

**Lighthouse (Chrome)**
1. Ouvre ta page dans Chrome
2. F12 > onglet Lighthouse
3. Coche "Accessibility" et lance l'audit
4. Score de 0 a 100 avec des recommandations precises

**axe DevTools** (extension Chrome)
1. Installe l'extension [axe DevTools](https://www.deque.com/axe/devtools/)
2. Ouvre les DevTools (F12) > onglet axe
3. Scanne la page -- l'outil classe les problemes par severite

**Disability Simulator** -- [disabilitysimulator.com](https://www.disabilitysimulator.com/)
Simule differents handicaps visuels (daltonisme, basse vision, tunnel vision) sur ta page. Tres utile pour comprendre l'experience reelle de tes utilisateurs.

### Limites des outils automatiques

Les outils automatiques detectent environ **30-40% des problemes**. Le reste necessite un test manuel : navigation au clavier, test avec un lecteur d'ecran (NVDA sur Windows, VoiceOver sur Mac), verification du sens des textes alternatifs.

## Etape 2 : Les quick wins (impact immediat)

### 1. Textes alternatifs sur les images

Chaque image doit avoir un attribut `alt` qui decrit ce que l'image montre :

```html
<!-- Mauvais -->
<img src="photo.jpg">
<img src="photo.jpg" alt="image">

<!-- Bon -->
<img src="photo.jpg" alt="Graphique montrant l'evolution du CA sur 12 mois">

<!-- Image decorative (pas besoin de description) -->
<img src="decoration.jpg" alt="">
```

### 2. Contrastes de couleurs

Le ratio minimum est de **4.5:1** pour le texte normal et **3:1** pour le texte large (> 18px ou 14px gras).

Teste tes combinaisons avec [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### 3. Structure des titres

Les titres doivent suivre une hierarchie logique : H1 > H2 > H3. Pas de H3 sans H2 au-dessus. Un seul H1 par page.

### 4. Navigation au clavier

Verifie que tu peux :
- Naviguer entre les elements avec **Tab**
- Voir clairement quel element est selectionne (focus visible)
- Activer les boutons et liens avec **Entree** ou **Espace**
- Ne pas rester "piege" dans un element (modal, menu deroulant)

### 5. Liens explicites

```html
<!-- Mauvais -->
<a href="/prix">Cliquez ici</a>

<!-- Bon -->
<a href="/prix">Voir nos tarifs</a>
```

### 6. Formulaires accessibles

Chaque champ doit avoir un `<label>` associe :

```html
<label for="email">Adresse email</label>
<input type="email" id="email" name="email">
```

Les messages d'erreur doivent etre clairs et associes au champ concerne.

## Etape 3 : Les actions structurelles

### Sous-titres sur les videos
Toute video avec de la parole doit avoir des sous-titres. YouTube les genere automatiquement, mais verifie-les -- la qualite automatique n'est pas toujours suffisante.

### Langue de la page
Declare la langue dans le HTML : `<html lang="fr">`. Ca permet aux lecteurs d'ecran de prononcer le contenu correctement.

### Landmarks ARIA
Utilise les balises semantiques HTML5 : `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`. Elles permettent aux utilisateurs de lecteurs d'ecran de naviguer rapidement entre les sections.

### Declaration d'accessibilite
La loi impose de publier une declaration d'accessibilite sur ton site. Elle doit mentionner : le niveau de conformite vise, les parties non conformes, un moyen de contact pour signaler un probleme.

## Checklist rapide

- [ ] Toutes les images ont un texte alternatif pertinent
- [ ] Les contrastes respectent le ratio 4.5:1
- [ ] La hierarchie des titres est logique (H1 > H2 > H3)
- [ ] Le site est navigable au clavier
- [ ] Les liens ont un texte descriptif
- [ ] Les formulaires ont des labels associes
- [ ] Les videos ont des sous-titres
- [ ] La langue est declaree dans le HTML
- [ ] Un lien "aller au contenu" est present en haut de page
- [ ] La declaration d'accessibilite est publiee

## Ce qu'il faut retenir

L'accessibilite n'est pas un projet ponctuel, c'est un reflexe a integrer a chaque creation de page. Commence par un audit WAVE + Lighthouse, corrige les quick wins (alt, contrastes, titres, clavier), puis progresse vers le niveau AA complet. Un site accessible est aussi un site mieux structure, mieux reference, et plus agreable pour tout le monde.
