---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Avoir Un Son Parfait Sur Tes Videos Pour Youtube
author: Diane
description: 'Découvre Comment Avoir Un Son Parfait Sur Tes Videos Pour Youtube :
  outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Avoir Un Son Parfait Sur Tes Videos YouTube

## AUDIO : LE FACTEUR N.1 QUE TOUT LE MONDE NEGLIGE

Les spectateurs tolereront une image moyenne, mais jamais un son mauvais. Un audio de mauvaise qualite fait fuir les viewers dans les 5 premieres secondes. Voici comment obtenir un son pro sans studio professionnel.

---

## Etape 1 : Choisir Le Bon Micro

### Types de microphones

| Type | Usage | Budget | Exemple |
|------|-------|--------|---------|
| **Lavalier (cravate)** | Tetes parlantes, interviews | 20-100 EUR | Rode Lavalier II (~80 EUR), Boya BY-M1 (~20 EUR), Hollyland Lark M2 (sans fil, ~120 EUR) |
| **Shotgun** | Vlogs, tournage en exterieur | 80-300 EUR | Rode VideoMic GO II (~90 EUR), Rode VideoMicro II (~60 EUR), Deity V-Mic D3 Pro (~150 EUR) |
| **USB a condensateur** | Bureau, podcast, voix off | 50-200 EUR | Rode NT-USB Mini (~100 EUR), Elgato Wave:3 (~150 EUR), Audio-Technica AT2020USB-X (~130 EUR) |
| **XLR a condensateur** | Studio, qualite maximale | 100-500 EUR | Rode NT1 5th Gen (~250 EUR, USB+XLR), Audio-Technica AT2020 (~100 EUR) |
| **Dynamique** | Environnement bruyant | 80-400 EUR | Shure SM7dB (~400 EUR, preampli integre), Rode PodMic USB (~110 EUR), Elgato Wave DX (~100 EUR) |
| **Sans fil** | Mobilite, tournage exterieur | 50-350 EUR | Rode Wireless GO II (~250 EUR), DJI Mic 2 (~300 EUR), Hollyland Lark M2 (~120 EUR) |

### Quelle config pour debuter ?

- **Budget serre (< 50 EUR)** : un Boya BY-M1 (micro cravate) fait le job
- **Bureau/voix off (50-150 EUR)** : Rode NT-USB Mini, branche directement en USB
- **Qualite pro (200-400 EUR)** : Rode NT1 5th Gen (USB+XLR) + interface audio Focusrite Scarlett Solo (4eme gen, ~120 EUR)
- **Mobilite/sans fil (120-300 EUR)** : Rode Wireless GO II ou DJI Mic 2 pour tourner en mouvement sans cable

> **Nouveaute 2024-2025** : le Shure SM7dB est la version mise a jour du legendaire SM7B avec un preampli integre (+28 dB), ce qui signifie que tu n'as plus besoin d'un preampli externe (CloudLifter) ni d'une interface avec beaucoup de gain. Branche-le directement sur ton interface basique.

---

## Etape 2 : Traitement Acoustique (Avant d'Enregistrer)

Inutile d'avoir le meilleur micro du monde si ta piece resonne. Le traitement acoustique est plus important que le micro.

### Solutions simples et pas cheres

- **Panneaux en mousse acoustique** : 30-50 EUR pour un kit de base. Place-les aux premiers points de reflexion (murs lateraux et derriere toi).
- **Couvertures epaisses** : accrochees aux murs, elles absorbent les reflexions.
- **Etageres remplies de livres** : un excellent diffuseur naturel.
- **Tapis au sol** : reduit les reflexions du plancher.
- **Enregistre dans un petit espace** : un dressing ou une petite piece meubles est naturellement mieux qu'une grande piece vide.

### Ce qui ne marche PAS

- Les boites a oeufs (mythe total, ca ne fait quasiment rien)
- Un seul panneau acoustique (il en faut plusieurs, bien places)
- Enregistrer dans une salle de bain ou une cuisine carrelee

---

## Etape 3 : Reglages d'Enregistrement

### Niveau d'entree (Gain)

- Vise un niveau entre **-12 dB et -6 dB** sur ton vu-metre
- Jamais dans le rouge. Le clipping numerique est irreparable.
- Mieux vaut un peu trop bas (tu montes en post-prod) que trop haut (distorsion)

### Distance du micro

- **Micro cravate** : clippe a 15-20 cm de la bouche
- **Micro USB/condensateur** : 15-25 cm de la bouche, legerement sur le cote (pas en face directe pour eviter les plosives)
- **Shotgun** : pointe vers la bouche, le plus pres possible sans etre dans le cadre

### Anti-pop

Un filtre anti-pop (ou bonnette) est indispensable pour les micros a condensateur. Ca coute 5-15 EUR et ca elimine les "P" et "B" explosifs.

---

## Etape 4 : Post-Production Audio

### Suppression du bruit de fond

#### DaVinci Resolve (gratuit)

1. Selectionne ton clip audio dans l'onglet **Fairlight**
2. Ouvre le **Mixer** et clique sur le slot d'effet
3. Ajoute **Noise Reduction**
4. Laisse les reglages par defaut ou ajuste le seuil
5. Ecoute le resultat et verifie que ta voix n'est pas degradee

#### Audacity (gratuit)

1. Selectionne une portion de silence pur (juste du bruit de fond)
2. Va dans **Effet > Reduction du bruit > Obtenir le profil de bruit**
3. Selectionne tout l'audio
4. Effet > Reduction du bruit > OK
5. Reduction : 12-18 dB. Au-dela, ta voix sonne "sous l'eau".

#### Adobe Podcast Enhance Speech (en ligne, gratuit)

Televerse ton fichier audio sur podcast.adobe.com et utilise "Enhance Speech". Le resultat est souvent bluffant en un clic. Note : depuis 2024, cette fonctionnalite est aussi integree directement dans Adobe Premiere Pro sous le nom "Enhance Speech".

#### Descript Studio Sound

Si tu utilises Descript (a partir de 16 USD/mois), la fonction "Studio Sound" nettoie l'audio de fond en un clic. Tres efficace, surtout combine avec la suppression automatique des mots de remplissage.

### Egalisation (EQ)

L'EQ permet de nettoyer et clarifier ta voix :

- **Coupe-bas a 80 Hz** : supprime les grondements et vibrations basse frequence
- **Reduction a 200-300 Hz** : diminue l'effet "boomy" (voix trop grave/confuse)
- **Boost leger a 3-5 kHz** : ajoute de la presence et de la clarte
- **Boost leger a 8-12 kHz** : ajoute de l'air et de la brillance

### Compression

La compression uniformise le volume (les passages forts deviennent moins forts, les passages faibles montent) :

- **Threshold** : -15 a -20 dB
- **Ratio** : 3:1 a 4:1 pour la voix
- **Attack** : 10-20 ms (assez rapide pour capturer les pics)
- **Release** : 100-200 ms

### Normalisation

En derniere etape, normalise ton audio a **-1 dB** (pour ne pas clipper) ou cible un **LUFS de -14** (standard YouTube).

---

## Etape 5 : Chaine de Traitement Recommandee

Applique les effets dans cet ordre :

1. Noise Reduction (suppression du bruit)
2. EQ (egalisation)
3. De-Esser (reduit les sifflantes "S" agressives)
4. Compression
5. Limiteur (filet de securite a -1 dB)
6. Normalisation LUFS

---

## Erreurs Courantes

- Enregistrer avec le micro integre du laptop (toujours mauvais)
- Gain trop haut = distorsion irreparable
- Trop de noise reduction = voix metallique et artificielle
- Ne pas monitorer avec un casque pendant l'enregistrement
- Oublier de desactiver la ventilation/climatisation avant d'enregistrer
- Appliquer la compression avant la reduction de bruit (ca compresse aussi le bruit)

---

## Kit Audio Recommande Par Budget

### Debutant (< 80 EUR)

- Boya BY-M1 (micro cravate) : ~20 EUR
- Bonnette mousse : ~5 EUR
- Post-prod : DaVinci Resolve Fairlight ou Audacity (gratuit)

### Intermediaire (150-300 EUR)

- Rode NT-USB Mini : ~100 EUR (ou Elgato Wave:3 a ~150 EUR)
- Bras articule : ~25 EUR
- Filtre anti-pop : ~10 EUR
- Panneaux acoustiques (4x) : ~40 EUR
- Post-prod : DaVinci Resolve Fairlight + Adobe Podcast Enhance (gratuit)

### Pro (400-800 EUR)

- Rode NT1 5th Gen (USB+XLR) : ~250 EUR
- Focusrite Scarlett Solo 4eme gen : ~120 EUR
- Bras Rode PSA1+ : ~120 EUR
- Traitement acoustique complet : ~200 EUR
- Post-prod : DaVinci Resolve ou Adobe Audition

### Mobile/Terrain (250-400 EUR)

- Rode Wireless GO II : ~250 EUR (2 emetteurs, ideal interview)
- Ou DJI Mic 2 : ~300 EUR (bon range, connexion Lightning/USB-C)
- Ou Hollyland Lark M2 : ~120 EUR (bon rapport qualite/prix)
- Post-prod : DaVinci Resolve ou Descript

---

---

## Nouveautes Audio DaVinci Resolve 19

DaVinci Resolve 19 a ajoute des outils audio importants dans Fairlight :

- **Dialogue Separator** : isole le dialogue, l'ambiance et le bruit de fond dans des canaux separes. Incroyablement utile pour nettoyer des interviews tournees dans des environnements bruyants.
- **Music Remixer FX** : isole les elements musicaux (voix, drums, basse) meme sans stems. Parfait pour ajuster le volume de la musique sous ta voix off sans affecter l'instrumental.
- Ces deux outils utilisent le Neural Engine (IA) et sont disponibles dans la version gratuite.

---

## Ressources

- [Can this Resolve Plugin replace Voice Isolation?](https://www.youtube.com/watch?v=QrDsrKf-HCM)
- [Comment avoir un son fort et compresse sur YouTube](https://www.youtube.com/watch?v=MH4DYQK6mwo)
- [This Plugin Completely Changed My Sound Design Workflow](https://www.youtube.com/watch?v=bK2Nnx9ZlRE)
- [3 Tips to REMOVE Audio Background NOISE in DaVinci Resolve](https://www.youtube.com/watch?v=tqgUA44Nd9k)
- [Adobe Podcast Enhance Speech](https://podcast.adobe.com/) (gratuit en ligne)
- [DaVinci Resolve - telecharge la version gratuite](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Audacity](https://www.audacityteam.org/) (editeur audio gratuit, open source)
