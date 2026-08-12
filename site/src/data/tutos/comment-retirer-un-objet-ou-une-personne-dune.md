---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Retirer Un Objet Ou Une Personne D'Une Vidéo
author: Diane
description: 'Découvre Comment Retirer Un Objet Ou Une Personne D''Une Vidéo : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Retirer Un Objet Ou Une Personne d'Une Video

## EFFACEMENT VIDEO : FAIS DISPARAITRE CE QUI GENE

Un passant dans ton plan, un logo genant, un cable visible, une poubelle dans le cadre... Tu n'as pas besoin de retourner ta scene. Les outils actuels permettent d'effacer proprement des elements indesirables dans une video, meme en mouvement.

---

## Comment Ca Marche Techniquement

L'effacement d'objet dans une video repose sur l'**inpainting temporel** : l'algorithme analyse les frames precedentes et suivantes pour reconstituer ce qui se trouve derriere l'objet supprime. Plus l'arriere-plan est simple et statique, meilleur sera le resultat.

---

## Methode 1 : After Effects - Content-Aware Fill

C'est la reference Adobe pour ce type de tache.

### Etapes

1. Importe ta video dans After Effects
2. Selectionne le clip et utilise l'outil **Roto Brush** (raccourci Alt+W)
3. Peins sur l'objet ou la personne a supprimer. Roto Brush detecte automatiquement les contours.
4. Affine la selection frame par frame si necessaire (Roto Brush 2 utilise l'IA)
5. Une fois le masque propre, va dans **Window > Content-Aware Fill**
6. Choisis la methode de remplissage : **Object** pour un element isole, **Surface** pour une texture
7. Ajuste l'**Alpha Expansion** (2-4 pixels) pour eviter les bords visibles
8. Clique sur **Generate Fill Layer**
9. After Effects cree un nouveau calque avec l'arriere-plan reconstruit

### Quand ca marche le mieux

- Arriere-plan relativement uniforme (mur, sol, ciel)
- Camera fixe ou mouvement lent
- L'objet ne passe pas devant des elements complexes

---

## Methode 2 : DaVinci Resolve - Object Removal (Studio)

La version Studio (295 USD / 295 EUR, achat unique a vie) de DaVinci Resolve inclut un outil de suppression d'objet. Depuis la version 19, le tracking IA (IntelliTrack) est nettement ameliore.

1. Passe en onglet **Color**
2. Utilise un **Power Window** (cercle, rectangle ou courbe) pour isoler l'objet
3. Active le **Tracker** pour que la fenetre suive le mouvement
4. Applique l'outil **Object Removal** dans le panneau de retouche
5. DaVinci reconstruit l'arriere-plan automatiquement

Note : la version gratuite n'a pas Object Removal, mais tu peux utiliser des masques et du clonage basique dans Fusion.

---

## Methode 3 : Runway ML (IA en ligne)

La methode la plus rapide pour les non-techniciens :

1. Va sur runwayml.com
2. Choisis l'outil **Inpainting**
3. Importe ta video
4. Peins un masque sur l'objet a supprimer (tu peux le faire sur la premiere frame et Runway le suit automatiquement)
5. Clique sur Generate
6. Telecharge le resultat

**Tarifs Runway (2025)** : gratuit (tres limite), Standard 12 USD/mois, Pro 28 USD/mois (2250 credits), Unlimited 76 USD/mois. Le systeme est base sur des credits : un inpainting simple coute 1-2 credits, une generation video peut aller de 5 a 20 credits selon la resolution.

**Limites** : resolution parfois reduite, credits payants, duree limitee par generation.

---

## Methode 4 : ProPainter (Open Source, Gratuit)

ProPainter est un modele open source de recherche (S-Lab, NTU, presente a ICCV 2023) qui donne d'excellents resultats. Le code est disponible sur github.com/sczhou/ProPainter.

1. Installe Python et les dependances (voir le README GitHub)
2. Genere les masques de l'objet a supprimer (tu peux utiliser SAM - Segment Anything Model)
3. Lance ProPainter avec ta video et les masques
4. Le modele reconstruit l'arriere-plan frame par frame

C'est plus technique mais le resultat est souvent superieur aux outils commerciaux.

**Alternative plus recente (2025)** : DiffuEraser (par Alibaba Tongyi Lab) utilise un modele de diffusion et surpasse ProPainter en completude et coherence temporelle. Disponible sur github.com/lixiaowen-xw/DiffuEraser.

---

## Methode 5 : CapCut (Simple mais Limite)

Pour retirer une personne d'un plan simple :

1. Importe ta video dans CapCut
2. Duplique le clip sur une piste superieure
3. Recadre/zoome le clip duplique pour couvrir la zone a masquer
4. Utilise un masque pour ne montrer que la zone de remplacement

Ca ne marche que si l'arriere-plan est repetitif (mur, sol uni).

---

## Conseils Pour un Resultat Propre

### Avant le tournage

- **Filme avec un trepied** : un arriere-plan fixe simplifie enormement la suppression
- **Fais un plan vide** : filme quelques secondes de la scene sans la personne/l'objet. Ce "clean plate" servira de reference pour la reconstruction.
- **Eclairage uniforme** : evite les ombres marquees qui trahissent la suppression

### Pendant l'edition

- **Traite par segments** : decoupe la video en sections courtes pour un meilleur resultat
- **Verifie frame par frame** : les artefacts apparaissent souvent sur 2-3 frames
- **Attention aux ombres** : supprimer l'objet mais garder son ombre, ca se voit
- **Grain et bruit** : ajoute du grain pour uniformiser la zone reconstruite avec le reste

---

## Comparatif

| Outil | Difficulte | Prix | Qualite resultat | Camera mobile |
|-------|-----------|------|-----------------|---------------|
| After Effects | Avance | ~23 USD/mois (plan annuel) | Excellente | Oui |
| DaVinci Studio | Intermediaire | 295 USD (achat unique) | Tres bonne | Oui |
| Runway ML | Facile | A partir de 12 USD/mois (credits) | Bonne | Limitee |
| ProPainter | Technique | Gratuit (open source) | Excellente | Oui |
| DiffuEraser | Technique | Gratuit (open source) | Excellente+ | Oui |
| CapCut | Facile | Gratuit | Basique | Non |

---

## Erreurs Courantes

- Oublier de supprimer l'ombre de l'objet (ca trahit immediatement le trucage)
- Masque trop serre autour de l'objet (laisse toujours 2-3 pixels de marge)
- S'attaquer a un plan trop complexe (mouvement rapide + arriere-plan charge = galere garantie)
- Ne pas verifier le resultat en lecture a vitesse normale (les artefacts passent souvent inapercus image par image)

---

## Ressources

- [Video : Montage Video IA - Les 5 outils que nous recommandons](https://youtu.be/aLMFZ2gwOFQ?t=353)
- [After Effects - Content-Aware Fill documentation Adobe](https://helpx.adobe.com/after-effects/using/content-aware-fill.html)
- [ProPainter sur GitHub](https://github.com/sczhou/ProPainter) (open source, inpainting video)
- [DiffuEraser sur GitHub](https://github.com/lixiaowen-xw/DiffuEraser) (successeur de ProPainter, 2025)
- [Runway ML](https://runwayml.com/) : inpainting, generation video IA (a partir de 12 USD/mois)
