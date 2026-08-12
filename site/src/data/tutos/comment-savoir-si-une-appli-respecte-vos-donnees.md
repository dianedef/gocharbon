---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Savoir Si Une Appli Respecte Vos Données Et Votre Vie Privée
author: Diane
description: 'Découvre Comment Savoir Si Une Appli Respecte Vos Données Et Votre Vie
  Privée : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# PROTECTION DES DONNEES : VERIFIE CE QUE TES APPLIS FONT DANS TON DOS

Tu installes une appli de lampe torche et elle te demande acces a tes contacts, ton micro et ta localisation ? Ca devrait te mettre la puce a l'oreille. Voici comment verifier si une application respecte vraiment ta vie privee, et quels outils utiliser pour scanner les trackers caches.

## Outil numero 1 : Exodus Privacy

[Exodus Privacy](https://exodus-privacy.eu.org/fr/) est un projet francais et open source qui analyse les applications Android pour detecter les trackers et les permissions demandees.

### Comment l'utiliser

1. Va sur [reports.exodus-privacy.eu.org](https://reports.exodus-privacy.eu.org/fr/)
2. Tape le nom de l'application dans la barre de recherche
3. Consulte le rapport : nombre de **trackers** detectes et **permissions** demandees
4. Compare avec d'autres applis du meme type

### Ce que tu apprends

- **Trackers** : des bouts de code integres dans l'appli qui collectent des donnees sur ton comportement (Google Analytics, Facebook SDK, AppsFlyer, Adjust...)
- **Permissions** : ce a quoi l'appli demande acces sur ton telephone (camera, micro, contacts, localisation, stockage...)

**Exemple** : une appli de calculatrice avec 8 trackers et l'acces a ta localisation ? Fuis.

### L'appli Exodus

Installe l'appli Exodus Privacy directement sur ton Android pour scanner toutes les applis installees sur ton telephone d'un coup.

## Outil numero 2 : Les fiches de securite des stores

### Google Play Store

1. Ouvre la fiche de l'appli sur le Play Store
2. Scrolle jusqu'a la section **"Securite des donnees"**
3. Tu y vois : quelles donnees sont collectees, lesquelles sont partagees avec des tiers, et si les donnees sont chiffrees

### Apple App Store

1. Ouvre la fiche de l'appli sur l'App Store
2. Regarde la section **"Confidentialite de l'app"**
3. Apple classe les donnees en : "Donnees utilisees pour vous suivre", "Donnees associees a vous", "Donnees non associees a vous"

**Attention** : ces informations sont declaratives (c'est le developpeur qui les remplit). Elles ne sont pas toujours fiables -- d'ou l'interet d'Exodus qui analyse le code.

## Outil numero 3 : Les permissions sur ton telephone

### Sur Android

1. Va dans **Parametres > Applications**
2. Selectionne une appli
3. Clique sur **Autorisations**
4. Revoque les permissions inutiles (une appli de to-do n'a pas besoin de ta camera)

**Astuce Android 12+** : active le tableau de bord de confidentialite dans **Parametres > Confidentialite > Tableau de bord** pour voir quelles applis ont utilise ta camera, ton micro ou ta localisation dans les dernieres 24h. Sur **Android 14+**, tu as aussi un controle plus fin sur le partage de photos (acces partiel a la galerie au lieu de tout autoriser).

### Sur iPhone

1. Va dans **Reglages > Confidentialite et securite**
2. Parcours chaque categorie (Localisation, Contacts, Photos, Micro, Camera...)
3. Desactive les acces non necessaires

**Astuce iOS** : active le **Rapport de confidentialite des apps** dans Reglages > Confidentialite pour voir quelles applis accedent a quoi et a quelle frequence.

## Les signaux d'alerte

Mefie-toi quand une appli :

- **Demande trop de permissions** par rapport a sa fonction (une appli meteo n'a pas besoin de tes contacts)
- **A beaucoup de trackers** (plus de 5 pour une appli simple, c'est suspect)
- **N'a pas de politique de confidentialite** lisible ou accessible
- **Est gratuite sans modele economique clair** -- si c'est gratuit et que tu ne vois pas de pub, c'est tes donnees le produit
- **Demande un acces permanent a la localisation** (en arriere-plan) alors que ca n'est pas necessaire
- **Vient d'un editeur inconnu** avec peu d'avis et une description vague

## Tes droits RGPD (2025)

En tant que resident europeen, tu as des droits sur tes donnees. Le RGPD (Reglement General sur la Protection des Donnees), en vigueur depuis mai 2018, te donne 7 droits principaux :

1. **Droit d'acces** : demande a l'editeur quelles donnees il a sur toi
2. **Droit de rectification** : corrige les donnees inexactes
3. **Droit a l'effacement** ("droit a l'oubli") : demande la suppression de tes donnees
4. **Droit a la portabilite** : recupere tes donnees dans un format exploitable (JSON, CSV)
5. **Droit d'opposition** : refuse que tes donnees soient utilisees pour du profilage ou du marketing direct
6. **Droit a la limitation** : demande que tes donnees soient gelees (pas supprimees, mais plus traitees)
7. **Droit de ne pas faire l'objet d'une decision automatisee** : si un algorithme prend une decision qui t'affecte, tu peux demander l'intervention d'un humain

**Comment faire** : envoie un email au DPO (Data Protection Officer) de l'entreprise. Son contact doit etre mentionne dans la politique de confidentialite. L'entreprise a **30 jours** pour repondre (extensible a 60 jours pour les demandes complexes). Si pas de reponse ou refus injustifie, tu peux saisir la [CNIL](https://www.cnil.fr/fr/plaintes) directement en ligne.

**Chiffre cle** : en 2024, la CNIL a prononce plus de 300 millions d'euros d'amendes cumulees depuis l'entree en vigueur du RGPD. Les applications mobiles sont un sujet de controle prioritaire.

## Checklist rapide avant d'installer une appli

- [ ] Verifie le rapport Exodus Privacy (Android)
- [ ] Lis la section "Securite des donnees" sur le store
- [ ] Compare le nombre de permissions avec la fonction de l'appli
- [ ] Cherche des avis mentionnant des problemes de vie privee
- [ ] Verifie que l'editeur a une politique de confidentialite accessible
- [ ] Apres installation : revoque les permissions inutiles
- [ ] Prefere les alternatives open source quand elles existent

## Alternatives respectueuses de la vie privee

| Categorie | Appli classique | Alternative privee |
|-----------|----------------|-------------------|
| Messagerie | WhatsApp | Signal, Olvid (francais) |
| Email | Gmail | ProtonMail, Tuta (ex-Tutanota) |
| Navigateur | Chrome | Firefox, Brave |
| Moteur de recherche | Google | DuckDuckGo, Qwant, Brave Search |
| Clavier | Gboard | HeliBoard (fork d'OpenBoard, maintenu activement), FlorisBoard |
| Cloud | Google Drive | Nextcloud, Proton Drive, Cozy Cloud (francais) |
| Gestionnaire de mots de passe | Chrome / iCloud | Bitwarden (open source), KeePass |
| Notes | Google Keep | Standard Notes, Joplin (open source) |

## Ce qu'il faut retenir

Utilise Exodus Privacy pour scanner les trackers de tes applis Android. Verifie les permissions demandees et revoque celles qui ne sont pas necessaires. Lis les fiches de securite des stores (meme si elles sont declaratives). Et rappelle-toi : en Europe, le RGPD te donne des droits concrets -- utilise-les quand une appli abuse.
