---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Thumbnail Sur Da Vinci
author: Diane
description: 'Découvre Thumbnail Sur Da Vinci : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Creer Des Thumbnails YouTube Avec DaVinci Resolve

## MINIATURES : PAS BESOIN DE PHOTOSHOP

Tu utilises deja DaVinci Resolve pour ton montage ? Alors tu peux creer tes miniatures YouTube directement dedans, sans ouvrir un autre logiciel. L'onglet Fusion est suffisamment puissant pour ca.

---

## Pourquoi Creer Ses Thumbnails Dans DaVinci ?

- **Gratuit** : pas besoin de Photoshop ou Canva Pro
- **Coherence** : ta miniature est creee a partir d'un vrai frame de ta video
- **Puissant** : Fusion permet du compositing avance (detourage, ombres, effets)
- **Tout au meme endroit** : tu restes dans DaVinci pour le montage ET la miniature

---

## Etape 1 : Choisir Le Bon Frame

1. Lis ta video sur la timeline
2. Trouve un frame ou ton expression est forte, energique ou intrigante
3. Regles d'or pour un bon frame :
   - **Expression faciale claire** (surprise, joie, determination)
   - **Bonne luminosite** (pas trop sombre)
   - **Pas de flou de mouvement** (augmente ta vitesse d'obturation a 1/200 pendant le tournage si tu sais que tu vas extraire un frame)
4. Place la tete de lecture sur ce frame

---

## Etape 2 : Exporter Le Frame de Base

### Methode rapide

1. Place la tete de lecture sur le frame voulu
2. Dans le viewer, fais un clic droit > **Grab Still**
3. Retrouve le still dans la **Gallery** (onglet Color)
4. Clic droit sur le still > **Export** > PNG ou JPEG

### Methode via Deliver

1. Marque un point In et Out sur le frame unique (I et O sur le meme frame)
2. Va dans l'onglet **Deliver**
3. Choisis le format **JPEG** ou **PNG**
4. Resolution : **1920x1080** minimum (YouTube recommande 1280x720 mais 1080p est mieux)
5. Lance le rendu

---

## Etape 3 : Creer La Miniature Dans Fusion

### Acceder a Fusion

1. Selectionne le clip contenant ton frame
2. Place la tete de lecture sur le bon frame
3. Clique sur l'onglet **Fusion** (la baguette magique en bas)

### Detourer le sujet

1. Ajoute un node **Polygon** (ou **Delta Keyer** si tu as un fond uni)
2. Dessine un masque autour de toi (ou de ton sujet principal)
3. Affine le contour avec les parametres **Soft Edge** pour un bord propre
4. Si tu as la version Studio, utilise **Magic Mask** : selectionne "Person" et c'est automatique

### Ajouter un fond

1. Ajoute un node **Background**
2. Choisis une couleur vive (jaune, rouge, bleu... les couleurs qui claquent sur YouTube)
3. Connecte-le en entree du node **Merge** en dessous de ton sujet detoure
4. Tu peux aussi utiliser un **gradient** : node Background > type Linear Gradient

### Ajouter du texte

1. Ajoute un node **Text+**
2. Tape ton titre (court, 3-5 mots maximum)
3. Parametres recommandes :
   - Police : Impact, Bebas Neue, Montserrat Bold
   - Taille : grande (le texte doit etre lisible en miniature sur mobile)
   - Couleur : blanc ou jaune
   - Contour (Border) : noir, 3-5 pixels
   - Ombre portee : legere ombre noire pour le detacher du fond
4. Positionne le texte dans une zone libre de l'image

### Ajouter des effets

- **Ombre portee sur le sujet** : duplique le masque du sujet, remplis en noir, decale-le et floute-le
- **Zoom/Agrandissement** : utilise un node Transform pour agrandir le sujet (remplit mieux le cadre)
- **Glow/Eclat** : ajoute un node Glow sur le sujet pour le faire ressortir
- **Fleches, emojis, elements** : importe des PNG avec transparence et positionne-les avec des nodes Merge

---

## Etape 4 : Exporter La Miniature

1. Ajoute un node **Saver** en fin de chaine dans Fusion
2. Configure : format PNG ou JPEG, resolution 1920x1080 (ou 1280x720 minimum)
3. Choisis le chemin de sauvegarde
4. Fais un rendu du frame unique (Render > Start Render)

Alternative : reviens sur l'onglet Edit, fais un Grab Still depuis le viewer avec les effets Fusion visibles.

---

## Les Regles d'Or d'une Bonne Miniature

### Design

- **Maximum 3-5 mots** de texte (lisible meme en petit sur mobile)
- **Visage en gros plan** avec une expression forte
- **Contraste eleve** : sujet clair sur fond sombre, ou l'inverse
- **Couleurs vives** : jaune, rouge, bleu, vert... ca attire l'oeil dans le feed
- **Pas de bordure noire** autour (ca reduit l'espace utile)

### Ce qui marche sur YouTube

- Le visage occupe au moins 30-40 % de la miniature
- Le texte est place a l'oppose du visage (equilibre visuel)
- 3 elements maximum : visage + texte + 1 element graphique
- Evite de surcharger : si c'est illisible en petit, c'est rate

### Format technique (specifications YouTube)

- Resolution : 1280x720 minimum, 1920x1080 recommande
- Ratio : 16:9 (obligatoire)
- Taille fichier : moins de 2 Mo
- Format : JPEG, PNG, GIF ou BMP
- Note : YouTube affiche les miniatures en differentes tailles selon le contexte (resultat de recherche, suggestions, page d'accueil). Teste toujours ta miniature a petite taille (120x67 pixels) pour verifier qu'elle reste lisible.

---

## Comparaison Avec Les Autres Outils

| Outil | Prix | Detourage auto | Facilite | Qualite |
|-------|------|----------------|----------|---------|
| DaVinci Fusion | Gratuit (Magic Mask auto dans Studio a 295 USD) | Manuel (Studio = auto) | Moyen | Excellente |
| Canva | Gratuit (limite) / Pro 12,99 USD/mois | Oui | Facile | Bonne |
| Photoshop | ~23 USD/mois (plan annuel Adobe) | Oui (IA generative) | Moyen | Excellente |
| GIMP | Gratuit (open source) | Manuel | Difficile | Bonne |
| Photopea | Gratuit (en ligne, clone Photoshop) | Semi-auto | Moyen | Tres bonne |

DaVinci est le meilleur choix si tu veux tout faire dans un seul logiciel gratuit. Photopea (photopea.com) est aussi une excellente alternative gratuite en ligne qui fonctionne comme Photoshop directement dans ton navigateur.

---

## Erreurs Courantes

- Texte trop petit (teste toujours ta miniature en taille reduite)
- Trop de texte (5 mots max, serieusement)
- Miniature qui ne donne pas envie de cliquer (pas d'emotion, pas de curiosite)
- Utiliser le meme style que tout le monde dans ta niche (demarque-toi)
- Oublier de detourer proprement le sujet (bords flous = amateur)

---

---

## Astuce : Creer un Template de Miniature Reutilisable

Pour gagner du temps sur tes prochaines videos :

1. Cree une composition Fusion avec tous tes elements (fond, texte, masque sujet, effets)
2. Sauvegarde-la comme **Macro** dans Fusion (clic droit sur le groupe de nodes > Create Macro)
3. Range la Macro dans tes Power Bins
4. Pour chaque nouvelle video, il te suffit de changer le frame source et le texte

Tu obtiens une identite visuelle coherente sur toutes tes miniatures en quelques minutes.

---

## Ressources

- [How to Create YouTube Thumbnails in DaVinci Resolve for FREE!](https://www.youtube.com/watch?v=YO3mzKUP3uU)
- [DaVinci Resolve - telecharge gratuitement](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Google Fonts](https://fonts.google.com/) : polices gratuites (Montserrat, Bebas Neue, Inter, Poppins)
- [Photopea](https://www.photopea.com/) : alternative gratuite a Photoshop en ligne (si tu preferes un workflow image classique)
