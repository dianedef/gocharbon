---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: S'Organiser Sur Da Vinci
author: Diane
description: 'Découvre S''Organiser Sur Da Vinci : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# S'Organiser Sur DaVinci Resolve

## ORGANISATION : LE SECRET DES MONTEURS EFFICACES

Un projet mal organise dans DaVinci, c'est des heures perdues a chercher le bon fichier. Que tu montes une video YouTube ou un projet client, une bonne organisation te fait gagner un temps fou. Voici le systeme complet.

---

## 1. Structurer Le Media Pool Avec Des Bins

Les Bins sont les dossiers de DaVinci. Utilise-les pour tout classer.

### Creer des Bins

1. Dans le **Media Pool**, fais un clic droit > **New Bin**
2. Nomme-le de maniere claire

### Structure recommandee

```
Projet YouTube/
  01_Footage/          (tes rushes video bruts)
  02_Audio/            (musique, voix off, effets sonores)
  03_Graphics/         (logos, images, overlays)
  04_SFX/              (effets sonores)
  05_Exports/          (versions exportees)
  06_Selects/          (les meilleurs plans que tu vas utiliser)
```

Numerote tes bins (01, 02, 03...) pour qu'ils restent dans l'ordre voulu. DaVinci trie par defaut par ordre alphabetique.

---

## 2. Smart Bins : Le Tri Automatique

Les Smart Bins trient automatiquement tes fichiers selon des criteres que tu definis. C'est comme des dossiers intelligents.

### Creer un Smart Bin

1. Clic droit dans le Media Pool > **New Smart Bin**
2. Definis les criteres de filtrage :
   - **Media Type** : Video, Audio, Still Image
   - **Resolution** : filtre par resolution (4K, 1080p...)
   - **Date Created** : par date de tournage
   - **Clip Name contains** : mots-cles dans le nom du fichier
   - **Duration** : plus court ou plus long qu'une duree donnee

### Exemples de Smart Bins utiles

- **"Videos 4K"** : Media Type = Video + Resolution > 3840
- **"B-Roll"** : Clip Name contains "broll" ou "plan_coupe"
- **"Clips courts"** : Duration < 10 secondes

Les Smart Bins se mettent a jour automatiquement quand tu importes de nouveaux fichiers.

---

## 3. Couleurs et Drapeaux (Clip Colors & Flags)

### Clip Colors

Attribue une couleur a tes clips pour les identifier visuellement sur la timeline.

1. Selectionne un clip dans le Media Pool ou sur la timeline
2. Clic droit > **Clip Color** > Choisis une couleur

### Systeme de couleurs recommande

| Couleur | Usage |
|---------|-------|
| Bleu | Plans face camera principaux |
| Vert | B-roll / plans de coupe |
| Orange | Musique et ambiance |
| Rouge | A refaire / probleme technique |
| Violet | Graphiques et overlays |
| Jaune | A verifier / en attente de validation |

### Flags (Drapeaux)

Les flags marquent les clips avec un statut. Utile pour le tri avant montage.

1. Selectionne un clip
2. Clic droit > **Flag** > choisis une couleur de flag
3. Tu peux ensuite filtrer par flag dans le Media Pool

---

## 4. Markers : Annoter Ta Timeline

Les markers sont des points de repere sur ta timeline ou sur tes clips.

### Ajouter un marker

1. Place la tete de lecture a l'endroit voulu
2. Appuie sur **M** pour ajouter un marker
3. Double-clique sur le marker pour le nommer et choisir une couleur
4. Tu peux aussi ajouter des notes dans le champ description

### Types de markers

- **Timeline markers** : places sur la timeline, visibles de tous les clips
- **Clip markers** : attaches a un clip, ils se deplacent avec le clip

### Systeme de markers recommande

| Couleur | Signification |
|---------|--------------|
| Rouge | Probleme a corriger |
| Vert | Valide / approuve |
| Bleu | Ajouter de la musique ici |
| Jaune | Ajouter un effet / transition |
| Orange | Ajouter un graphique / texte |

---

## 5. Power Bins : Tes Elements Reutilisables

Les Power Bins sont des bins partages entre tous tes projets. Parfait pour les elements que tu reutilises souvent.

### Activer les Power Bins

1. Va dans **View > Show Power Bins** dans le Media Pool
2. Un nouveau dossier "Power Bins" apparait

### Quoi mettre dans les Power Bins

- Ton **logo** et ses variantes
- Tes **intros et outros** de chaine
- Ta **musique libre de droits** preferee
- Tes **presets de titres** et overlays
- Des **effets sonores** recurrents (whoosh, ding, transition)
- Tes **LUTs** favorites

Ca evite de reimporter ces fichiers dans chaque projet.

---

## 6. Nommer Ses Timelines

Ne garde pas "Timeline 1". Nomme tes timelines clairement.

### Systeme de nommage

```
v1_rough_cut        (premier montage brut)
v2_fine_cut         (montage affine)
v3_color_sound      (etalonnage et son faits)
v4_final            (version finale)
v4_final_EXPORT     (celle qui a ete exportee)
```

Pour dupliquer une timeline : clic droit > **Duplicate Timeline**. Tu gardes un historique de chaque version.

---

## 7. Organiser Les Pistes

### Nommer les pistes

Double-clique sur le nom de la piste (V1, V2, A1...) pour la renommer :

- V1 : Face cam
- V2 : B-Roll
- V3 : Overlays / Textes
- A1 : Voix
- A2 : Musique
- A3 : SFX

### Verrouiller les pistes

Clique sur le **cadenas** a gauche de la piste pour la verrouiller. Ca evite de deplacer accidentellement un element.

### Desactiver les pistes

Clique sur le bouton **Mute** (pour l'audio) ou **Disable** (pour la video) pour masquer temporairement une piste.

---

## 8. Raccourcis Pour Aller Plus Vite

| Raccourci | Action |
|-----------|--------|
| M | Ajouter un marker |
| B | Blade (couper) |
| A | Mode selection |
| T | Mode trim |
| Ctrl+Z | Annuler |
| Ctrl+S | Sauvegarder |
| J / K / L | Lecture arriere / Pause / Lecture avant |
| JJ / LL | Vitesse x2, x4, x8 |
| I / O | Point d'entree / Point de sortie |
| Shift+1 | Onglet Media |
| Shift+2 | Onglet Cut |
| Shift+3 | Onglet Edit |

---

## 9. Workflow Complet Pour un Projet YouTube

1. **Creer le projet** avec un nom clair (ex: "2024-03-25_tuto-davinci")
2. **Creer les Bins** selon la structure recommandee
3. **Importer les fichiers** dans les bons bins via l'onglet Media
4. **Trier** les rushes : flag les bons plans, colorie par type
5. **Creer la timeline** "v1_rough_cut"
6. **Monter** en placant d'abord la voix, puis le B-roll, puis les graphiques
7. **Marquer** les points a corriger avec des markers rouges
8. **Dupliquer** la timeline et affiner dans "v2_fine_cut"
9. **Etalonnage** dans l'onglet Color
10. **Son** dans l'onglet Fairlight
11. **Export** dans l'onglet Deliver

---

## 10. Nouveautes Organisation dans DaVinci Resolve 19

DaVinci Resolve 19 a ajoute plusieurs fonctionnalites qui ameliorent l'organisation :

- **Fixed Playhead on Timeline** (Edit tab) : la tete de lecture reste au centre de l'ecran et c'est la timeline qui deplace. Tres utile pour garder le focus pendant le montage (avant, cette option n'existait que dans l'onglet Cut).
- **Precise Trim Editor dans la Preview** : double-clique entre deux clips pour ajuster frame par frame directement dans la fenetre de preview.
- **Transcribe Mode Editing** : affiche la transcription des clips et permet de monter par le texte. Tres pratique pour les interviews et les tetes parlantes.
- **Detection des interlocuteurs** dans la transcription : chaque personne est identifiee et peut etre nommee, facilitant le tri de longues interviews multi-personnes.

---

## Erreurs Courantes

- Tout mettre en vrac dans le Media Pool sans bins (ingerable au-dela de 20 fichiers)
- Ne pas nommer les timelines (tu te retrouves avec "Timeline 1" a "Timeline 14" sans savoir laquelle est la bonne)
- Oublier les Power Bins et reimporter les memes elements dans chaque projet
- Ne pas utiliser les couleurs de clips (tout se ressemble sur la timeline)
- Sauvegarder le projet uniquement dans la base de donnees locale (fais des backups reguliers via File > Export Project)

---

## Ressources

- [Les couleurs, les drapeaux, les markers - Tuto DaVinci Resolve](https://www.youtube.com/watch?v=3qFcSZhW9Z0)
- [DaVinci Resolve - telecharge gratuitement](https://www.blackmagicdesign.com/products/davinciresolve/)
- [DaVinci Resolve 19 - toutes les nouveautes](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew) (100+ fonctionnalites ajoutees)
