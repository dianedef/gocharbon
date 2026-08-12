---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Rendre Da Vinci Plus Rapide
author: Diane
description: 'Découvre Rendre Da Vinci Plus Rapide : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Rendre DaVinci Resolve Plus Rapide

## PERFORMANCE : STOP AUX LAGS ET AUX FREEZES

DaVinci Resolve rame, freeze, crash ? C'est le probleme numero 1 des debutants. Avant de racheter un PC, optimise tes reglages. Dans la majorite des cas, tu peux multiplier la fluidite par 2 ou 3 juste avec les bons parametres.

---

## 1. Utiliser Les Proxys (Le Plus Gros Gain)

Le proxy, c'est une version basse qualite de ta video que DaVinci utilise pour le montage. L'export final se fera toujours en qualite originale.

### Activer les proxys

1. Va dans **Project Settings** (engrenage en bas a droite)
2. Onglet **Master Settings > Optimized Media and Render Cache**
3. Change **Optimized Media Resolution** a "Quarter" (1/4 de la resolution)
4. Change **Optimized Media Format** a "DNxHR LB" (Windows) ou "ProRes Proxy" (Mac)
5. Dans le Media Pool, selectionne tes clips > clic droit > **Generate Optimized Media**
6. Active le mode proxy dans le menu **Playback > Use Optimized Media If Available**

### Resultat

- Videos 4K qui rament ? Avec les proxys, tu travailles en 960x540 mais tu exportes en 4K.
- La difference de fluidite est enorme, surtout sur les machines modestes.

---

## 2. Configurer Le Render Cache

Le render cache pre-calcule les effets et transitions pour une lecture fluide.

1. Va dans **Playback > Render Cache > Smart**
2. DaVinci calcule automatiquement les zones complexes en arriere-plan
3. La barre rouge au-dessus de la timeline devient bleue quand le cache est pret
4. La lecture sera fluide sur les zones en cache

### Reglage du cache

1. **Project Settings > Master Settings > Render Cache Format**
2. Choisis **DNxHR SQ** (bon equilibre qualite/vitesse) ou **ProRes 422** sur Mac
3. Verifie que le **Cache files location** pointe vers un SSD rapide (pas un disque dur mecanique)

---

## 3. Resolution de la Timeline

Tu n'as pas besoin de monter en 4K si tu exportes en 1080p.

1. **Project Settings > Master Settings > Timeline Resolution**
2. Mets en 1920x1080 pour le montage
3. Si tu dois exporter en 4K, change la resolution juste avant l'export dans l'onglet Deliver
4. DaVinci fera l'upscale a ce moment-la

Monter en 1080p au lieu de 4K = 4x moins de pixels a traiter = beaucoup plus fluide.

---

## 4. Optimiser Le GPU

### Verifier que DaVinci utilise bien ton GPU

1. **Preferences > System > Memory and GPU**
2. Verifie que ton GPU est detecte et selectionne
3. Si tu as plusieurs GPU, selectionne le plus puissant
4. Active **GPU Processing Mode** : CUDA (Nvidia) ou OpenCL (AMD) ou Metal (Mac)

### GPU insuffisant ?

- DaVinci est tres gourmand en GPU, surtout pour le color grading et Fusion
- Minimum recommande : 2 Go de VRAM (minimum absolu), 4 Go pour du 1080p confortable, 8 Go+ pour du 4K
- GPU recommandes (2025) : NVIDIA RTX 3060/4060 minimum, RTX 3070/4070/4080 pour du 4K sans compromis
- Cote AMD : Radeon RX 6700 XT minimum, RX 6800/7800 XT pour du 4K
- Sur Mac : les puces M1 Pro/M2 Pro et superieures sont excellentes grace a Metal et la memoire unifiee
- Si ton GPU est trop faible, les proxys et le render cache deviennent indispensables

---

## 5. Gestion de la RAM

1. **Preferences > System > Memory and GPU**
2. Limite la RAM de DaVinci a 75-80 % de ta RAM totale (laisse de la marge pour le systeme)
3. Ferme tous les autres logiciels pendant le montage (surtout Chrome qui devore la RAM)

### Minimum recommande

- 8 Go de RAM : minimum absolu (DaVinci peut tourner mais sera limite)
- 16 Go de RAM pour du 1080p confortable
- 32 Go pour du 4K ou des projets lourds (recommande)
- 64 Go pour Fusion complexe et les effets IA du Neural Engine

---

## 6. Stockage : SSD Obligatoire

Le disque dur mecanique est le goulot d'etranglement numero 1.

- **SSD NVMe** pour les fichiers de cache et la base de donnees DaVinci
- **SSD SATA** au minimum pour les fichiers sources
- **HDD** uniquement pour l'archivage des projets termines

### Organisation des disques

| Disque | Contenu |
|--------|---------|
| SSD NVMe rapide | DaVinci + cache + base de donnees |
| SSD | Fichiers sources du projet en cours |
| HDD | Archives, projets anciens |

Pour changer l'emplacement du cache : **Project Settings > Master Settings > Working Folders**

---

## 7. Reglages de Lecture (Playback)

### Baisser la qualite de lecture

1. Va dans **Playback > Timeline Proxy Mode > Half Resolution** (ou Quarter)
2. Ca reduit la qualite d'affichage dans le viewer mais pas la qualite d'export
3. Enorme gain de performance pour la lecture en temps reel

### Desactiver ce qui ne sert pas

- **Playback > Show All Video Frames** : desactive si la lecture saccade. DaVinci sautera des frames pour garder le rythme.
- Desactive les effets/nodes que tu n'es pas en train d'ajuster (clic sur le bouton bypass)

---

## 8. Optimiser La Base de Donnees

DaVinci stocke les projets dans une base de donnees locale qui peut grossir et ralentir.

1. Ouvre le **Project Manager** (ecran d'accueil)
2. Clic droit sur la base de donnees > **Optimize**
3. Supprime les anciens projets que tu n'utilises plus
4. Si tu as beaucoup de projets, cree des bases de donnees separees par type (clients, perso, archives)

---

## 9. Mettre a Jour Les Pilotes GPU

Un pilote GPU obsolete peut causer des crashs et des ralentissements.

- **Nvidia** : installe les pilotes **Studio** (pas Game Ready) sur nvidia.com/drivers. Pour DaVinci Resolve 19 : driver Studio 550.58 ou superieur requis. Les pilotes Studio sont optimises pour les applications de creation, pas pour le gaming.
- **AMD** : derniers pilotes sur amd.com/drivers
- **Mac** : les pilotes sont integres aux mises a jour macOS. Assure-toi d'etre sur macOS 13 Ventura minimum pour Resolve 19.

---

## 10. Astuces Supplementaires

- **Desactive la sauvegarde automatique trop frequente** : Project Settings > Save toutes les 5-10 minutes au lieu de chaque minute
- **Ferme l'onglet Fusion** quand tu ne l'utilises pas (il consomme des ressources)
- **Evite les fichiers H.264/H.265 sur la timeline** : ces codecs sont lourds a decoder. Convertis en ProRes ou DNxHR avant le montage (ou utilise les proxys).
- **Desactive le Timeline Waveform** si tu n'as pas besoin de voir les formes d'onde audio (leger gain)
- **Nettoyage regulier** : Playback > Delete Render Cache > All pour liberer de l'espace disque

---

## Checklist Performance DaVinci Resolve

- [ ] Proxys actives (Quarter, DNxHR LB)
- [ ] Render Cache en mode Smart
- [ ] Timeline en 1080p (sauf besoin specifique)
- [ ] GPU correctement detecte et utilise
- [ ] RAM allouee a 75-80 %
- [ ] Cache et base de donnees sur SSD
- [ ] Timeline Proxy Mode en Half ou Quarter
- [ ] Pilotes GPU a jour
- [ ] Pas d'application gourmande en arriere-plan

---

---

## Configuration Minimale et Recommandee (DaVinci Resolve 19)

| Composant | Minimum | Recommande (4K) |
|-----------|---------|-----------------|
| OS | Windows 10/11, macOS 13 Ventura, Linux Ubuntu | Windows 11, macOS Ventura+, Ubuntu 22.04 |
| CPU | Intel Core i5 6th gen / AMD Ryzen 5 (quad-core) | Intel i7/i9 ou Ryzen 7/9 (8+ coeurs) |
| GPU | 2 Go VRAM, OpenCL 1.2 ou CUDA 12 | NVIDIA RTX 3060+ ou AMD RX 6700+ (8 Go+ VRAM) |
| RAM | 16 Go (32 Go avec Fusion) | 32 Go+ |
| Stockage | SSD SATA | SSD NVMe + disque media separe |
| Ecran | 1920x1080 minimum | 4K recommande pour le color grading |

> **Note Windows ARM** : DaVinci Resolve 19 supporte aussi Windows 11 ARM sur Qualcomm Snapdragon X Elite.

---

## Ressources

- [Please Change This Render Cache Setting Right Now](https://www.youtube.com/watch?v=i_88edxhJvc)
- [How to Make DaVinci Resolve Run Faster & Smoother - 5 Tips](https://www.youtube.com/watch?v=eVbtHA-T39k)
- [DaVinci Resolve - telecharge gratuitement](https://www.blackmagicdesign.com/products/davinciresolve/)
- [NVIDIA Studio Drivers](https://www.nvidia.com/en-us/drivers/studio/) (pilotes optimises pour la creation)
