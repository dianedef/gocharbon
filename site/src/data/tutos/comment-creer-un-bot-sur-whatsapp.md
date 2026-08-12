---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Créer Un Bot Sur Whatsapp
author: Diane
description: 'Découvre Comment Créer Un Bot Sur Whatsapp : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment creer un bot WhatsApp pour ton business

WhatsApp, c'est 2 milliards d'utilisateurs actifs. Tes clients sont dessus. Un bot WhatsApp te permet de repondre automatiquement aux questions frequentes, qualifier des leads, envoyer des confirmations de commande et assurer un support 24h/24 sans que tu sois devant ton telephone.

Voici comment en creer un, meme sans coder.

## Les deux approches pour creer un bot WhatsApp

### 1. WhatsApp Business API (officielle)

C'est la solution officielle de Meta. Obligatoire si tu veux envoyer des messages a grande echelle ou automatiser des conversations.

**Avantages** : fiable, pas de risque de ban, acces aux templates de messages, statistiques completes.

**Inconvenients** : il faut passer par un partenaire BSP (Business Solution Provider), et c'est payant par message.

### 2. Plateformes no-code (chatbot builders)

Des outils qui se connectent a l'API WhatsApp Business et te permettent de creer des flux de conversation sans ecrire une ligne de code.

## Etape 1 : Configurer WhatsApp Business

Avant de creer un bot, tu dois avoir un compte WhatsApp Business :

1. **Cree un compte Meta Business** sur business.facebook.com
2. **Ajoute un numero de telephone** dedie (pas ton numero perso)
3. **Verifie ton entreprise** via le Business Manager de Meta
4. **Accede a l'API WhatsApp Business** soit directement (Cloud API), soit via un BSP

**BSP populaires** : 360dialog, Twilio, MessageBird, Vonage. Ils simplifient l'acces a l'API et ajoutent des fonctionnalites.

## Etape 2 : Choisir ton outil de creation de bot

### ManyChat (le plus accessible)

ManyChat ([manychat.com](https://manychat.com)) est le leader des chatbots pour les reseaux sociaux, avec un support WhatsApp, Instagram, Messenger, TikTok, SMS, email et Telegram.

- **Interface** : editeur visuel Flow Builder drag-and-drop, tres intuitif
- **Fonctionnalites** : reponses automatiques, collecte d'infos, envoi de medias, integration CRM, drip sequences, broadcasts, live chat, tags et segments illimites
- **Prix** :
  - **Free** : 0$/mois (jusqu'a 1 000 contacts, flows illimites, 10 tags, 2 sequences, 1 membre d'equipe)
  - **Pro** : a partir de 15$/mois (contacts illimites, multi-canal, 3 membres d'equipe, keywords et triggers illimites)
  - **Elite** : sur devis (equipes, members illimites)
  - **Add-on IA** : 29$/mois en option (reponses alimentees par l'IA)
- **Ideal pour** : e-commerce, generation de leads, support client basique, automatisation Instagram/WhatsApp

### Chatfuel

Similaire a ManyChat, avec un focus sur la simplicite.

- **Interface** : blocs de conversation a assembler
- **Fonctionnalites** : FAQ automatique, transfert vers un humain, segmentation
- **Prix** : a partir de 15$/mois
- **Ideal pour** : petites entreprises, restaurants, prestataires de services

### Respond.io

Respond.io ([respond.io](https://respond.io)) est une solution omnicanale avancee pour les equipes commerciales, integrant WhatsApp, Instagram, Messenger, Telegram, email et plus.

- **Interface** : inbox partagee + automatisations avancees (Workflow builder)
- **Fonctionnalites** : routage intelligent vers le bon agent, qualification de leads, AI Agents pour reponses automatiques, broadcasts et newsletters, CRM integre, WhatsApp Business Calling API
- **Prix** : plans Starter, Growth et Advanced disponibles. Le plan Starter inclut jusqu'a 5 utilisateurs. Plans Business pour les equipes plus grandes
- **Ideal pour** : equipes de vente B2C en croissance, agences, support multi-agents, entreprises omnicanales
- **Avantage** : integrations CRM (HubSpot, Salesforce), Zapier, Make, API developpeur

### WATI

WATI ([wati.io](https://www.wati.io)) est specialise WhatsApp, base sur l'API officielle de Meta. Certifie BSP WhatsApp.

- **Interface** : editeur de flux + inbox partagee + AI Support Agent (beta)
- **Fonctionnalites** : broadcasts (jusqu'a 15K/mois sur le plan Growth), templates valides par Meta, catalogue produits, WhatsApp Business Calling, integration Shopify (add-on a 4,99$/mois), analytics avances (taux d'ouverture, temps de reponse)
- **Prix** :
  - **Growth** : a partir de 30$/mois (3 utilisateurs inclus, pas d'utilisateurs supplementaires, 15K broadcasts/mois)
  - **Pro** : prix intermediaire (5 utilisateurs, plus d'automatisation)
  - **Business** : jusqu'a 2 000$/mois (fonctionnalites enterprise completes)
- **Important depuis juillet 2025** : WATI est passe d'une facturation par conversation a une facturation par message (alignement avec Meta). Les messages de service dans la fenetre 24h restent gratuits
- **Ideal pour** : e-commerce et notifications transactionnelles, PME D2C

## Etape 3 : Concevoir tes flux de conversation

Un bon bot WhatsApp suit une logique simple : question -> reponse -> action.

### Flux d'accueil

```
Bot: Bonjour ! Bienvenue chez [Ton entreprise]. Comment puis-je t'aider ?
    1. Voir nos produits
    2. Suivi de commande
    3. Parler a un conseiller
    4. Horaires et adresse

[Le client repond 1, 2, 3 ou 4]
```

### Flux de qualification de lead

```
Bot: Super, tu t'interesses a nos services ! Quelques questions rapides :
Bot: Quel est ton budget approximatif ?
    1. Moins de 500 EUR
    2. 500 - 2000 EUR
    3. Plus de 2000 EUR

Bot: Quel est ton delai ?
    1. Urgent (cette semaine)
    2. Ce mois-ci
    3. Pas presse

[Le bot enregistre les reponses et transmet au commercial]
```

### Flux de FAQ

```
Bot: Voici les questions les plus frequentes :
    1. Quels sont vos delais de livraison ?
    2. Comment retourner un produit ?
    3. Quels modes de paiement acceptez-vous ?

[Chaque option declenche une reponse automatique detaillee]
```

## Etape 4 : Les cas d'usage qui cartonnent

- **Confirmation de commande** : message automatique avec resume et lien de suivi
- **Rappel de rendez-vous** : message 24h et 1h avant le RDV avec option d'annulation
- **Relance panier abandonne** : "Hey, tu as oublie quelque chose dans ton panier..."
- **Notification de livraison** : "Ton colis est en route ! Voici le numero de suivi"
- **Enquete de satisfaction** : "Comment s'est passee ta commande ? Note de 1 a 5"

## Etape 5 : Bonnes pratiques

### Ce qui est autorise par Meta

- Repondre aux messages dans les 24 heures (fenetre de conversation gratuite)
- Envoyer des templates pre-approuves en dehors de la fenetre de 24h
- Utiliser des boutons interactifs (jusqu'a 3 boutons par message)
- Envoyer des images, videos, documents et localisations

### Ce qui est interdit

- Spammer des contacts qui n'ont pas donne leur consentement
- Envoyer du contenu promotionnel non sollicite
- Utiliser des APIs non officielles (risque de ban du numero)
- Collecter des donnees sans informer l'utilisateur

### Conseils pour un bon taux de reponse

- **Reponds vite** : configure une reponse automatique en moins de 5 secondes
- **Sois concis** : pas de paves de texte, des messages courts et actionnable
- **Propose toujours une sortie** : "Tape STOP pour ne plus recevoir de messages"
- **Humanise** : prevois un transfert vers un humain quand le bot ne sait pas repondre

## Les couts a prevoir

**Attention** : depuis le 1er juillet 2025, Meta a change son modele de tarification WhatsApp Business API. On passe d'une facturation par conversation (fenetre 24h) a une facturation par message template. Voici le nouveau modele :

| Poste | Cout |
|-------|------|
| Numero WhatsApp Business | Gratuit |
| Messages de service (dans la fenetre 24h client) | Gratuit |
| Templates Marketing (par message envoye) | Variable par pays (0,05-0,15 EUR en Europe) |
| Templates Utilitaires (hors fenetre 24h) | Variable, avec reductions par volume |
| Templates Authentification | Variable, tarifs reduits |
| Templates Utilitaires (dans fenetre 24h) | Gratuit |
| Plateforme chatbot (ManyChat, WATI...) | 15 a 79$/mois |
| BSP (360dialog, Twilio) | Variable selon le volume |

**Ce qui change** : les messages utilitaires envoyes dans la fenetre 24h du service client sont desormais gratuits. En revanche, chaque template marketing est facture individuellement (plus de "messages illimites" pendant 24h).

## Ce qu'il faut retenir

Un bot WhatsApp bien configure peut gerer 80% des demandes courantes automatiquement. Commence par un flux simple (FAQ + accueil), mesure les resultats, et ajoute des flux au fur et a mesure. L'erreur classique, c'est de vouloir tout automatiser d'un coup. Commence petit, itere vite.
