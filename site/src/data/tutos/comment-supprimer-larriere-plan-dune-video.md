---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Supprimer L'Arrière Plan D'Une Vidéo
author: Diane
description: 'Découvre Comment Supprimer L''Arrière Plan D''Une Vidéo : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Supprimer l'Arriere-Plan d'Une Video

## FOND VERT SANS FOND VERT : LA TECHNIQUE QUI CHANGE TOUT

Tu veux un fond propre pour tes videos sans investir dans un studio ? Que ce soit pour incruster un decor, un fond de couleur ou un environnement virtuel, la suppression d'arriere-plan est devenue accessible a tous grace a l'IA.

---

## Les Deux Approches

### Avec fond vert (Chroma Key)

La methode classique. Tu filmes devant un tissu vert (ou bleu) et tu retires cette couleur en post-production. C'est la plus propre et la plus fiable.

### Sans fond vert (IA)

Les outils recents detectent automatiquement les personnes et separent l'arriere-plan sans fond vert. Moins precis mais beaucoup plus pratique.

---

## Methode 1 : Fond Vert + OBS (Gratuit, Temps Reel)

Si tu fais du streaming ou des visioconferences :

1. Installe un fond vert derriere toi (tissu, panneau ou peinture murale)
2. Eclaire le fond vert **uniformement** (pas d'ombre, pas de pli)
3. Ouvre OBS Studio
4. Fais un clic droit sur ta source video > **Filtres**
5. Ajoute un filtre **Chroma Key**
6. Selectionne la couleur (vert par defaut)
7. Ajuste les curseurs **Similarity** et **Smoothness** jusqu'a ce que le fond disparaisse proprement
8. Ajoute une source image ou video en dessous pour ton nouveau fond

### Reglages OBS recommandes

- Similarity : 400-450
- Smoothness : 60-80
- Key Color Spill Reduction : 100
- Opacity : 100

---

## Methode 2 : DaVinci Resolve (Gratuit)

### Avec fond vert

1. Place ton clip sur la timeline
2. Va dans l'onglet **Color**
3. Ouvre le **Qualifier** (icone pipette)
4. Passe en mode **3D Qualifier** pour une selection plus precise
5. Clique sur le fond vert dans le viewer
6. Ajuste les curseurs de tolerance pour capturer toute la nuance de vert
7. Active l'**inversion** du masque (tu veux garder le sujet, pas le fond)
8. Le fond devient transparent. Ajoute ton nouveau fond sur une piste video en dessous.

### Sans fond vert (DaVinci Resolve Studio uniquement)

La version Studio inclut le **Magic Mask** :

1. Onglet Color > panneau Magic Mask
2. Selectionne "Person" et peins sur le sujet
3. DaVinci detecte et suit automatiquement la personne
4. Inverse le masque pour isoler l'arriere-plan
5. Supprime ou remplace le fond

---

## Methode 3 : Unscreen / Alternatives (En Ligne)

**Important : le site original Unscreen (unscreen.com) a ferme en decembre 2025.** Plusieurs alternatives ont pris le relais :

### unscreen.io (successeur non-officiel)

1. Va sur unscreen.io
2. Version gratuite : traitement dans le navigateur, jusqu'a 1080p, pas de limite de temps, mais export WebM uniquement, pas de son, bitrate limite
3. Plans payants : a partir de 0,99 USD/mois (100 credits). 1 credit = 1 seconde en mode Portrait, 4 credits = 1 seconde en mode Studio Quality. Le plan 1000 credits a 9,90 USD/mois couvre ~16 min en Portrait ou ~4 min en Studio Quality
4. Jusqu'a 4K, tous les formats d'export (MP4, MOV, WebM, GIF), son inclus

### Unscreen Pro (unscreen.pro)

1. Version gratuite : apercu uniquement
2. Plus a 4,99 USD/mois (500 credits, jusqu'a 1080p)
3. Pro a 99 USD/mois (10 000 credits, jusqu'a 4K, tous formats)

### Canva Pro

Canva Pro (12,99 USD/mois) inclut desormais un outil de suppression d'arriere-plan video en un clic. Export en MP4 jusqu'a 1080p. Tres simple mais moins precis pour les details fins (cheveux).

---

## Methode 4 : CapCut (Mobile et Desktop)

1. Importe ta video dans CapCut
2. Selectionne le clip et va dans **Retirer l'arriere-plan** (ou "Remove Background")
3. CapCut utilise l'IA pour detecter le sujet
4. Le fond est supprime automatiquement
5. Ajoute un fond de couleur, une image ou une video en dessous

Tres pratique pour les Reels et TikToks tournes au telephone.

---

## Methode 5 : Premiere Pro + After Effects

### Premiere Pro seul

1. Selectionne le clip > **Effets > Incrustation Ultra**
2. Utilise la pipette pour selectionner la couleur du fond vert
3. Ajuste les reglages de tolerance
4. Place un fond sur la piste en dessous

### After Effects (plus precis)

1. Importe le clip
2. Applique l'effet **Keylight (1.2)**
3. Pipette sur le fond vert
4. Ajuste Screen Gain et Screen Balance
5. Utilise **Roto Brush** pour corriger les zones problematiques (cheveux, bords)
6. Le rendu sera plus propre qu'avec Premiere seul

---

## Conseils Pour un Fond Vert Reussi

### Eclairage

- **Eclaire le fond vert separement** du sujet. Deux lumieres sur le fond, une ou deux sur le sujet.
- Le fond doit etre eclaire de maniere **uniforme**. Pas de hotspot, pas d'ombre.
- Le sujet doit etre a **minimum 1,5 metre** du fond vert pour eviter le "spill" (reflet vert sur la peau).

### Le tissu

- Tissu non brillant, sans pli. Un fond vert en papier ou en tissu tendu est ideal.
- Le vert chroma standard est le **vert 00b140** (Chroma Key Green).
- Si ton sujet porte du vert, utilise un fond bleu a la place.

### Camera

- Evite le motion blur excessif (augmente ta vitesse d'obturation)
- Filme en haute resolution (4K si possible) pour des bords plus nets
- Desactive la compression agressive de la camera

---

## Comparatif

| Outil | Fond vert requis | Qualite | Prix | Facilite |
|-------|-----------------|---------|------|----------|
| OBS | Oui (ou IA basique) | Bonne | Gratuit | Facile |
| DaVinci Resolve | Oui (ou Studio pour Magic Mask) | Excellente | Gratuit / 295 USD (Studio) | Moyen |
| unscreen.io | Non | Correcte a bonne | Gratuit (limite) / 9,90 USD/mois | Tres facile |
| CapCut | Non | Bonne | Gratuit | Facile |
| Canva Pro | Non | Bonne | 12,99 USD/mois | Tres facile |
| After Effects | Oui | Excellente | ~23 USD/mois (plan annuel) | Avance |

---

## Erreurs Courantes

- Fond vert mal eclaire (ombres = mauvais keying)
- Sujet trop proche du fond vert (spill vert sur la peau et les vetements)
- Porter des vetements verts devant un fond vert
- Oublier de traiter les cheveux (la zone la plus difficile a keyer)
- Compression video trop forte qui detruit les nuances de vert

---

## Ressources

- [Video : Montage Video IA - Les 5 outils que nous recommandons](https://youtu.be/aLMFZ2gwOFQ?t=353)
- [OBS Studio](https://obsproject.com/) (gratuit, open source)
- [unscreen.io](https://www.unscreen.io/) (successeur d'Unscreen, gratuit en navigateur / payant pour export pro)
- [Unscreen Pro](https://unscreen.pro/) (alternative, a partir de 4,99 USD/mois)
- [CapCut](https://www.capcut.com/) (gratuit, desktop et mobile)
- [Runway ML](https://runwayml.com/) : suppression de fond video avancee via IA (a partir de 12 USD/mois)

> **Note** : le site original unscreen.com a ferme en decembre 2025. Les liens ci-dessus sont les alternatives recommandees.
