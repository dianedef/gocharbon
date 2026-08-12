---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Étalonner Sa Vidéo
author: Diane
description: 'Découvre Comment Étalonner Sa Vidéo : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Etalonner Sa Video

## COLOR GRADING : L'ARME SECRETE DES VIDEOS PRO

Tu filmes tes videos mais le rendu fait "amateur" ? Dans 90 % des cas, le probleme vient de l'etalonnage. Le color grading, c'est ce qui transforme une image plate en quelque chose de cinematographique. Bonne nouvelle : tu n'as pas besoin d'etre coloriste professionnel pour obtenir un resultat propre.

---

## Correction vs. Etalonnage : La Difference

Avant de foncer, comprends bien les deux etapes :

- **Correction colorimetrique** : rendre l'image "normale". Tu corriges la balance des blancs, l'exposition, le contraste. C'est technique.
- **Etalonnage creatif (grading)** : donner un style, une ambiance. C'est artistique.

Tu fais toujours la correction AVANT le grading. Sinon tu construis sur des bases bancales.

---

## Les Outils Que Tu Peux Utiliser

| Outil | Prix | Niveau |
|-------|------|--------|
| DaVinci Resolve (gratuit) | 0 EUR | Debutant a pro |
| DaVinci Resolve Studio | 295 USD / 295 EUR (achat unique, licence a vie) | Pro |
| Adobe Premiere Pro | ~23 USD/mois (plan annuel) ou ~35 USD/mois (sans engagement) | Intermediaire |
| Final Cut Pro | 300 EUR (a vie) | Intermediaire |
| CapCut | Gratuit | Debutant |

DaVinci Resolve est la reference absolue pour le color grading. Meme la version gratuite est plus puissante que la plupart des logiciels payants.

Depuis DaVinci Resolve 19 (sorti en 2024), de nouveaux outils de grading ont ete ajoutes :

- **Film Look Creator** : un effet tout-en-un dans l'onglet Color qui simule un rendu pellicule (exposition, contraste, highlights, fade, bleach bypass) sur une echelle photometrique
- **ColorSlice** : un nouveau panneau de correction vectorielle avec 7 vecteurs (les 6 standards + skin tones) pour des ajustements de couleur ultra-precis par zone chromatique
- **UltraNR** : reduction de bruit boostee par l'IA (Neural Engine), bien plus performante que l'ancien denoiser (version Studio uniquement)
- **IntelliTrack** : tracking ameliore par IA pour les Power Windows, bien plus rapide et precis
- **Music Remixer FX** : isole les elements musicaux (voix, drums, basse) et permet de remixer meme sans stems (utile pour ajuster la musique sous ta voix off)

---

## Etape 1 : Comprendre Les Scopes

Les scopes (ou moniteurs de forme d'onde) sont tes meilleurs amis. Ne fais jamais confiance a tes yeux seuls, ton ecran te ment.

- **Waveform** : montre la luminosite de l'image. Le bas = noir, le haut = blanc. Assure-toi que rien ne depasse 0 (ecrase) ou 1023 (crame).
- **Vectorscope** : montre la saturation et la teinte. Utile pour verifier les tons chair.
- **Parade RGB** : separe les canaux rouge, vert, bleu. Parfait pour equilibrer la balance des blancs.
- **Histogramme** : distribution des tons sombres, moyens et clairs.

Active-les dans DaVinci via le menu Color > Scopes, ou dans Premiere via Lumetri Scopes.

---

## Etape 2 : Correction Colorimetrique

### Balance des blancs

1. Utilise la pipette "White Balance" sur un element neutre (blanc ou gris) dans ton image
2. Si tu n'as pas de reference neutre, ajuste manuellement les curseurs Temperature (bleu/orange) et Teinte (vert/magenta)
3. Verifie sur le Parade RGB que les trois canaux sont equilibres

### Exposition et contraste

1. **Lift** (ombres) : remonte legerement si l'image est trop sombre, descends pour des noirs plus profonds
2. **Gamma** (tons moyens) : ajuste la luminosite generale sans toucher aux extremes
3. **Gain** (hautes lumieres) : controle les zones les plus lumineuses
4. **Offset** : decale toute l'image d'un coup (utile pour les ajustements globaux)

### Saturation

Ajuste la saturation globale avec moderation. Une erreur classique : trop pousser la saturation. Reste entre 40 et 60 sur DaVinci pour un rendu naturel.

---

## Etape 3 : Etalonnage Creatif

### Utiliser les Color Wheels

Les roues chromatiques te permettent de teinter separement les ombres, les tons moyens et les hautes lumieres :

- **Ombres en bleu/sarcelle** + **hautes lumieres en orange** = le look "cinema" classique (orange & teal)
- **Ombres en vert** + **hautes lumieres en rose** = ambiance vintage
- **Tout vers le bleu** = ambiance froide, thriller

### Utiliser les courbes

Les courbes sont plus precises que les roues. Tu peux :

- Creer un contraste en S (point bas tire vers le bas, point haut tire vers le haut)
- Teinter par canal RGB separement
- Creer un "film fade" en remontant le point noir

### Appliquer des LUTs

Les LUTs (Look-Up Tables) sont des presets de couleur. Attention :

1. Applique TOUJOURS une correction de base avant la LUT
2. Reduis l'intensite de la LUT a 50-70 % (rarement un bon rendu a 100 %)
3. LUTs gratuites recommandees : celles de Shutterstock, SmallHD, Film Riot
4. Pour DaVinci, depose tes fichiers .cube dans le dossier LUT (Preferences > General > LUT Folder)

---

## Etape 4 : Finaliser

- **Qualifier** une zone specifique (peau, ciel) pour l'ajuster sans toucher au reste
- **Power Windows** : dessine un masque pour isoler une zone
- Verifie la coherence entre tous tes plans (copier/coller les nodes entre clips similaires)
- Exporte un still de reference pour garder une coherence visuelle sur tout ton projet

---

## Erreurs Courantes

- Etalonner sur un ecran non calibre (investis dans une sonde type Datacolor SpyderX ou Calibrite ColorChecker, environ 80-150 EUR)
- Pousser la saturation a fond
- Appliquer un LUT sans correction prealable
- Ignorer les scopes et se fier uniquement a ses yeux
- Ne pas travailler en mode LOG ou RAW quand la camera le permet

---

## Astuces Pro

- Filme en profil plat (S-Log, V-Log, C-Log) pour avoir plus de marge a l'etalonnage
- Utilise les nodes en serie dans DaVinci : un node par etape (correction, skin, ambiance, vignette)
- Le raccourci Cmd/Ctrl+D dans DaVinci desactive un node pour comparer avant/apres
- Regarde des films et analyse leurs palettes de couleurs (le site Movies in Color est une mine d'or)

---

## Ressources

- [Video : Montage Video IA - Les 5 outils que nous recommandons](https://youtu.be/aLMFZ2gwOFQ?t=353)
- [DaVinci Resolve - telecharge la version gratuite](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Fresh LUTs - plus grande collection de LUTs gratuites au monde](https://freshluts.com/) (3 millions+ de telechargements)
- [Free For Video - 200+ LUTs cinematiques gratuites](https://freeforvideo.com/200-free-cinematic-luts)
- [mycreativefx.com - 100+ LUTs gratuites](https://mycreativefx.com/blog/download-100-free-color-grading-luts-to-instantly-elevate-your-visuals)
- [DeMystify Color - outils gratuits pour coloristes DaVinci](https://demystify-color.com/toolset-free) (DCTLs, LUTs ACES, Power Grades)
- [Film-Grab](https://film-grab.com/) et [Movies in Color](https://moviesincolor.com/) : references de palettes de couleurs de films
