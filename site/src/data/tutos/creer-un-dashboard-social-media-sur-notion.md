---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Créer Un Dashboard Social Media Sur Notion
author: Diane
description: 'Découvre Créer Un Dashboard Social Media Sur Notion : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Creer Un Dashboard Social Media Sur Notion

## DASHBOARD SOCIAL MEDIA : TON CENTRE DE COMMANDE SUR NOTION

### tl;dr

Notion est l'outil parfait pour gerer ta strategie social media si tu n'as pas le budget pour Hootsuite ou Sprout Social. En une heure, tu peux creer un dashboard complet avec calendrier editorial, suivi des metriques et banque d'idees. Ce tuto te guide pas a pas.

---

## Ce que ton dashboard va contenir

1. **Un calendrier editorial** -- Vue calendrier de tous tes posts planifies
2. **Un pipeline de contenu** -- Vue Kanban (idee > en cours > pret > publie)
3. **Un suivi des metriques** -- Tableau hebdomadaire
4. **Une banque d'idees** -- Capture rapide d'inspirations

## Etape 1 : Creer la base de donnees principale

C'est le coeur de ton systeme. Une seule base de donnees, plusieurs vues.

1. **Cree une nouvelle page** dans Notion et nomme-la "Social Media HQ"
2. **Ajoute une base de donnees pleine page** (type "Table")
3. **Configure les colonnes :**

| Propriete | Type | Options |
|-----------|------|---------|
| Titre du post | Title | (defaut) |
| Plateforme | Multi-select | Instagram, LinkedIn, Twitter, TikTok, Facebook |
| Type de contenu | Select | Carrousel, Reel, Post texte, Story, Video, Thread |
| Statut | Select | Idee, En creation, A valider, Planifie, Publie |
| Date de publication | Date | Avec heure |
| Pilier de contenu | Select | Educatif, Inspirant, Promotionnel, Behind the scenes |
| Lien du post | URL | |
| Visuel pret | Checkbox | |

## Etape 2 : Creer les vues

A partir de cette meme base, cree plusieurs vues :

**Vue Calendrier :** Selectionne "Calendrier", affiche par "Date de publication". Filtre : Statut n'est pas "Idee".

**Vue Kanban :** Ajoute une vue "Tableau", groupe par "Statut". Tu obtiens : Idee > En creation > A valider > Planifie > Publie. Glisse les cartes d'une colonne a l'autre.

**Vue Galerie :** Filtre sur Statut = "Publie". Ca te donne un apercu visuel de ton feed.

**Vue par plateforme :** Vue "Table" filtree par plateforme. Duplique pour chaque reseau.

## Etape 3 : Creer le template de post

Dans ta base, clique sur "Nouveau" > fleche > "Nouveau template" avec ce contenu :

- Brief du post (objectif, angle, hook)
- Zone texte pour le contenu
- Hashtags
- Checklist : texte redige, visuel cree, hashtags recherches, CTA clair, lien UTM, planifie

Chaque nouveau post partira de ce template. Tu n'oublies rien.

## Etape 4 : Ajouter le suivi des metriques

Cree une deuxieme base "Metriques hebdo" avec : Semaine (titre), Plateforme (select), Abonnes, Nouveaux abonnes, Portee, Engagement moyen (%), Clics site, Top post (relation vers base principale).

Chaque lundi, remplis une ligne par plateforme. 5 minutes pour ton reporting hebdo.

## Etape 5 : Creer la banque d'idees

Troisieme base "Banque d'idees" avec : Idee (titre), Source (select : concurrence, trending, audience), Plateforme cible (multi-select), Priorite (select), Utilisee (checkbox).

Quand tu as une idee, ajoute une entree en 10 secondes sur ton tel. Quand tu planifies ta semaine, pioche dans cette banque.

## Etape 6 : Assembler le dashboard

Cree une page "Dashboard" qui regroupe tout :

1. **En haut** : titre + semaine en cours
2. **Planning** : vue calendrier filtree sur la semaine
3. **Pipeline** : vue Kanban des posts non publies
4. **Metriques** : 4 dernieres semaines de ta base metriques
5. **Idees** : banque filtree sur "Utilisee = non", triee par priorite

## Automatisations possibles

- **Notion + Zapier/Make** : quand un post passe en "Publie", notification Slack ou email. L'API Notion ([developers.notion.com](https://developers.notion.com)) permet de creer, lire, mettre a jour et supprimer des pages et des bases de donnees de maniere programmatique.
- **Notion + Buffer** : planifie directement depuis ta base (via Make)
- **Notion + Google Sheets** : exporte tes metriques pour des graphiques dans Looker Studio
- **Notion Charts (natif)** : Depuis 2024, Notion propose des graphiques natifs directement dans les bases de donnees. Sur un plan payant, tu peux creer des graphiques illimites (barres, courbes, donuts, barres horizontales). Sur le plan gratuit, 1 seul graphique. Plus besoin d'outils tiers pour visualiser tes donnees basiques.
- **Notion Automations** : Des automatisations natives permettent de declencher des actions quand une propriete change (ex: envoyer une notification Slack quand un post passe en "Publie")

## Astuces GoCharbon

- **Utilise les icones et couleurs.** Un tableau moche, personne ne le consulte. Mets des emojis dans les vues, des couleurs dans les selects.
- **Remplis les metriques le meme jour chaque semaine.** La regularite cree l'habitude.
- **Ne surcharge pas.** 5 colonnes bien utilisees valent mieux que 15 qu'on ne remplit jamais.
- **Duplique un template existant.** Cherche "social media Notion template" sur la galerie Notion. Modifie ensuite.
- **Partage avec ton equipe.** Assignez-vous des posts via une propriete "Responsable".

## Ressources

- [Notion](https://www.notion.so) -- Plan gratuit pour usage personnel, Plus a 10 $/mois
- [API Notion](https://developers.notion.com) -- Documentation officielle pour les integrations
- [Notion Template Gallery](https://www.notion.so/templates) -- Cherche "social media" pour des templates prets a l'emploi
- [Zapier](https://zapier.com) -- Automatise Notion avec 5 000+ apps
- [Make](https://www.make.com) -- Workflows visuels plus avances que Zapier
