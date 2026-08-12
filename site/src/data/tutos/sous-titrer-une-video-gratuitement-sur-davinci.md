---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Sous Titrer Une Vidéo Gratuitement Sur Davinci
author: Diane
description: 'Découvre Sous Titrer Une Vidéo Gratuitement Sur Davinci : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Sous-Titrer Une Video Gratuitement Sur DaVinci Resolve

## SOUS-TITRES DANS DAVINCI : LE GUIDE COMPLET ETAPE PAR ETAPE

DaVinci Resolve est gratuit et gere parfaitement les sous-titres. Pas besoin de payer un abonnement mensuel. Voici exactement comment faire, que tu aies deja un fichier SRT ou que tu partes de zero.

---

## Methode 1 : Creer Les Sous-Titres Manuellement

### Ajouter une piste de sous-titres

1. Ouvre ton projet dans DaVinci Resolve
2. Passe en onglet **Edit**
3. Fais un clic droit dans la zone des pistes (a gauche de la timeline)
4. Selectionne **Add Subtitle Track**
5. Une nouvelle piste "Subtitle" apparait au-dessus de tes pistes video

### Creer les sous-titres un par un

1. Place la tete de lecture au debut de la premiere phrase
2. Fais un clic droit sur la piste Subtitle > **Add Subtitle**
3. Un bloc de sous-titre apparait. Double-clique dessus pour l'editer.
4. Tape ton texte dans l'**Inspector** (panneau a droite)
5. Ajuste la duree du bloc en tirant ses bords sur la timeline
6. Repete pour chaque phrase/segment

### Personnaliser l'apparence

Dans l'Inspector, tu peux modifier :

- **Font** : choisis une police lisible (sans serif recommande)
- **Size** : 48-64 pour YouTube, plus grand pour les Reels
- **Color** : blanc avec un contour noir pour une lisibilite maximale
- **Background** : active un fond semi-transparent si besoin
- **Position** : Y Position pour deplacer les sous-titres vers le haut ou le bas
- **Outline** : 2-4 pixels en noir pour le contour

---

## Methode 2 : Importer Un Fichier SRT

Si tu as deja un fichier SRT (genere par un autre outil) :

1. Assure-toi d'avoir une piste Subtitle sur ta timeline
2. Va dans **File > Import > Subtitle**
3. Selectionne ton fichier .srt
4. Les sous-titres apparaissent automatiquement, synchronises avec le timecode
5. Verifie la synchronisation et ajuste si necessaire

### Ou trouver un fichier SRT gratuitement ?

- **YouTube Studio** : televerse ta video, recupere la transcription auto, telecharge en SRT
- **CapCut** : transcription auto gratuite, exporte en SRT
- **Whisper (OpenAI)** : modele open source de transcription, extremement precis. Disponible sur github.com/openai/whisper. Le modele "large-v3" (sorti fin 2023) est le plus precis pour le francais. Tu peux l'utiliser en ligne de commande (`pip install openai-whisper` puis `whisper video.mp4 --model large-v3 --language fr`) ou via des interfaces graphiques comme MacWhisper (Mac), Buzz (Windows/Mac/Linux, gratuit), ou Subtitle Edit (gratuit, open source).
- **faster-whisper** : une implementation optimisee de Whisper qui est 4x plus rapide avec moins de RAM. Ideal si tu traites beaucoup de videos. Disponible sur GitHub (github.com/SYSTRAN/faster-whisper).

---

## Methode 3 : Transcription Automatique (DaVinci Resolve Studio)

Si tu as la version Studio (295 USD / 295 EUR, achat unique a vie) :

1. Place ton clip sur la timeline
2. Va dans **Timeline > Create Subtitles from Audio**
3. Selectionne la langue (francais)
4. DaVinci transcrit automatiquement l'audio
5. Les sous-titres sont places directement sur la piste Subtitle
6. Relis et corrige les erreurs

Note : cette fonction n'est **pas disponible** dans la version gratuite.

---

## Methode 4 : Script Gratuit Pour Auto-Subtitles

Un plugin communautaire permet d'obtenir des sous-titres automatiques dans la version gratuite :

1. Telecharge le script "Auto Subtitles for DaVinci Resolve" (voir les ressources)
2. Installe-le dans le dossier Scripts de DaVinci (sur Mac : `/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts/Utility/`, sur Windows : `%APPDATA%\Blackmagic Design\DaVinci Resolve\Support\Fusion\Scripts\Utility\`)
3. Lance le script depuis **Workspace > Scripts**
4. Le script utilise l'API Whisper (gratuit) pour transcrire l'audio
5. Les sous-titres sont automatiquement places sur la timeline

C'est la meilleure solution gratuite pour automatiser le sous-titrage dans DaVinci.

### Nouveaute DaVinci Resolve 19

DaVinci Resolve 19 a ajoute un mode **Transcribe** dans l'onglet Edit. Meme dans la version gratuite, tu peux desormais afficher la transcription de tes clips et naviguer dans la timeline par le texte. La transcription automatique complete (pour generer les sous-titres) reste reservee a la version Studio, mais le mode Transcribe facilite grandement le montage texte-base.

---

## Exporter Avec Les Sous-Titres

### Sous-titres incrustes (Burn-in)

Les sous-titres sont graves directement dans la video. Impossible a desactiver.

1. Va dans l'onglet **Deliver**
2. Configure ton format d'export (MP4/H.264 recommande)
3. Dans les reglages de rendu, assure-toi que **Burn in Subtitles** est coche
4. Lance le rendu

C'est ce que tu veux pour les reseaux sociaux (Instagram, TikTok, LinkedIn).

### Exporter le fichier SRT separement

Si tu veux des sous-titres desactivables (YouTube, Vimeo) :

1. Va dans l'onglet **Deliver**
2. Dans le menu, va dans **File > Export > Subtitle**
3. Choisis le format **SRT**
4. Sauvegarde le fichier
5. Televerse ce fichier SRT dans YouTube Studio ou Vimeo avec ta video

---

## Astuces Pour des Sous-Titres Propres

### Decoupage

- **1 a 2 lignes maximum** par bloc de sous-titre
- **Maximum 42 caracteres par ligne**
- Decoupe par groupes de sens (fin de phrase, virgule) pas en plein milieu d'un mot
- Duree minimum : 1 seconde. Maximum : 7 secondes.

### Raccourcis utiles

- **Ctrl+B** : couper un bloc de sous-titre a la position de la tete de lecture
- **T** : passer en mode trim pour ajuster facilement les bords
- **Alt + fleches** : deplacer un sous-titre frame par frame

### Style recommande pour YouTube

- Police : Open Sans ou Roboto
- Taille : 56
- Couleur : blanc (#FFFFFF)
- Contour : 3px noir
- Position : bas de l'ecran, centre
- Pas de fond (ou fond noir a 50 % d'opacite si la video est tres claire)

---

## Erreurs Courantes

- Sous-titres qui se chevauchent (toujours laisser 2-3 frames entre deux blocs)
- Texte trop petit pour etre lu sur mobile
- Oublier d'activer "Burn in Subtitles" a l'export (les sous-titres disparaissent)
- Ne pas relire la transcription automatique (les erreurs passent vite)
- Sous-titres qui apparaissent trop tot ou trop tard par rapport a la parole

---

## Workflow Recommande

1. Monte ta video completement avant d'ajouter les sous-titres
2. Genere un SRT avec Whisper ou YouTube Studio (gratuit)
3. Importe le SRT dans DaVinci
4. Corrige les erreurs de transcription
5. Ajuste le timing si necessaire
6. Personnalise le style
7. Exporte en burn-in pour les reseaux, en SRT separe pour YouTube

---

## Ressources

- [Auto Subtitles for DaVinci Resolve (Free)](https://www.youtube.com/watch?v=Q-Ud4ZAWH6o)
- [DaVinci Resolve - telecharge gratuitement](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Whisper (OpenAI)](https://github.com/openai/whisper) : modele open source de transcription, gratuit. Modele large-v3 recommande pour le francais.
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) : implementation 4x plus rapide de Whisper
- [Buzz](https://buzzcaptions.com/) : interface graphique gratuite pour Whisper (Windows/Mac/Linux)
- [Subtitle Edit](https://www.nikse.dk/subtitleedit) : editeur de sous-titres open source, 200+ formats
