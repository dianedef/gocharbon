---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Ajouter Des Raccourcis Clavier A Vos Extensin
author: Diane
description: 'Découvre Ajouter Des Raccourcis Clavier A Vos Extensin : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Ajouter des raccourcis clavier a tes extensions de navigateur

Tu utilises des extensions Chrome ou Firefox tous les jours, mais tu perds du temps a cliquer sur leurs icones dans la barre d'outils. La solution : leur assigner des raccourcis clavier. En une combinaison de touches, tu actives n'importe quelle extension sans toucher a la souris.

Voici comment faire sur chaque navigateur.

## Sur Google Chrome / Brave / Edge (Chromium)

Tous les navigateurs bases sur Chromium partagent le meme systeme de raccourcis d'extensions.

### Etape 1 : Acceder aux parametres de raccourcis

1. Ouvre ton navigateur
2. Tape `chrome://extensions/shortcuts` dans la barre d'adresse (ou `brave://extensions/shortcuts` pour Brave, `edge://extensions/shortcuts` pour Edge)
3. Tu arrives sur la page "Raccourcis clavier" qui liste toutes tes extensions avec leurs commandes configurables
4. Chaque extension peut declarer une ou plusieurs commandes (par exemple "Activer l'extension", "Ouvrir le panneau lateral", etc.)

**Note** : tu peux aussi y acceder via le menu : Extensions > Gerer les extensions > icone hamburger (trois barres en haut a gauche) > Raccourcis clavier.

### Etape 2 : Assigner un raccourci

1. Trouve l'extension que tu veux configurer
2. Clique sur l'icone crayon (ou directement dans le champ) a cote de l'action souhaitee
3. Tape la combinaison de touches que tu veux utiliser (exemple : Ctrl+Shift+S)
4. Le raccourci est sauvegarde automatiquement. Pour supprimer un raccourci, clique sur la croix a cote

### Etape 3 : Choisir la portee

Pour chaque raccourci, tu peux choisir :
- **Dans Chrome** : le raccourci fonctionne uniquement quand le navigateur est au premier plan
- **Global** : le raccourci fonctionne meme si le navigateur est en arriere-plan (utile pour les outils de capture d'ecran ou les gestionnaires de clipboard)

## Sur Firefox

### Etape 1 : Acceder aux parametres

1. Ouvre Firefox
2. Tape `about:addons` dans la barre d'adresse, ou va dans le menu hamburger (trois barres) > "Extensions et themes"
3. Clique sur l'icone engrenage en haut a droite
4. Selectionne "Gerer les raccourcis des extensions"

**Alternative rapide** : tu peux aussi taper directement `about:addons` puis cliquer sur l'engrenage.

### Etape 2 : Configurer les raccourcis

1. Trouve l'extension dans la liste
2. Clique sur le champ de raccourci
3. Tape ta combinaison de touches
4. Valide

**Note** : certaines extensions Firefox ne proposent pas de raccourcis configurables. Ca depend du developpeur de l'extension.

## Les raccourcis les plus utiles a configurer

Voici les extensions que tu devrais configurer en priorite, avec des suggestions de raccourcis :

### Productivite

| Extension | Action | Raccourci suggere |
|-----------|--------|-------------------|
| LastPass/Bitwarden | Remplir le mot de passe | Ctrl+Shift+L |
| Grammarly | Verifier le texte | Ctrl+Shift+G |
| Pocket/Instapaper | Sauvegarder la page | Ctrl+Shift+P |
| Tab Manager | Rechercher dans les onglets | Ctrl+Shift+F |
| OneTab | Sauvegarder tous les onglets | Ctrl+Shift+1 |

### Developpement web

| Extension | Action | Raccourci suggere |
|-----------|--------|-------------------|
| Wappalyzer | Detecter les technos du site | Ctrl+Shift+W |
| ColorZilla | Pipette couleur | Ctrl+Shift+C |
| JSON Formatter | Formater le JSON | Ctrl+Shift+J |
| Web Developer | Ouvrir le panneau | Ctrl+Shift+D |

### Marketing et SEO

| Extension | Action | Raccourci suggere |
|-----------|--------|-------------------|
| SEOquake | Voir les metriques SEO | Ctrl+Shift+Q |
| SimilarWeb | Voir le trafic | Ctrl+Shift+S |
| Keywords Everywhere | Voir les volumes de recherche | Ctrl+Shift+K |

## Astuces pour bien choisir tes raccourcis

### Eviter les conflits

Certaines combinaisons sont deja prises par le navigateur ou le systeme :
- **Ctrl+T** : nouvel onglet (ne pas ecraser)
- **Ctrl+W** : fermer l'onglet (surtout pas)
- **Ctrl+L** : barre d'adresse (a garder)
- **Ctrl+Shift+I** : outils de developpement (utile tel quel)

**Astuce** : utilise le prefixe `Alt+Shift+` pour tes extensions. Ces combinaisons sont rarement utilisees par defaut.

### Organisation logique

Groupe tes raccourcis par theme :
- **Alt+Shift+1 a 5** : tes 5 extensions les plus utilisees
- **Ctrl+Shift+lettre** : la premiere lettre du nom de l'extension (B pour Bitwarden, P pour Pocket)

### Creer un aide-memoire

Note tes raccourcis dans un document ou un post-it sur ton ecran le temps de les memoriser. Apres 2-3 semaines, ca devient un reflexe.

## Aller plus loin : automatiser avec AutoHotkey (Windows) ou Hammerspoon (Mac)

Si tu veux des raccourcis encore plus avances (enchainer plusieurs actions, ouvrir une extension + remplir un champ), tu peux utiliser :

**Sur Windows -- AutoHotkey** :
- Telecharge AutoHotkey
- Cree un script qui simule les clics et les frappes
- Exemple : un seul raccourci qui ouvre Bitwarden, copie le mot de passe, et le colle

**Sur Mac -- Hammerspoon** :
- Outil gratuit et open source
- Scripting en Lua pour creer des raccourcis personnalises
- Peut interagir avec les applications et le navigateur

## Combien de temps tu gagnes

Un clic sur une icone d'extension prend environ 2 secondes (deplacement de souris + clic + attente). Un raccourci clavier prend 0,5 seconde. Si tu utilises 10 extensions, 20 fois par jour chacune :

- **Sans raccourcis** : 10 x 20 x 2s = 400 secondes = ~7 minutes/jour
- **Avec raccourcis** : 10 x 20 x 0,5s = 100 secondes = ~2 minutes/jour
- **Gain** : 5 minutes/jour = 25 minutes/semaine = 20 heures/an

Ca parait peu, mais 20 heures par an pour 10 minutes de configuration, c'est un excellent retour sur investissement. Et surtout, tu gardes les mains sur le clavier, ce qui maintient ton flow de travail.
