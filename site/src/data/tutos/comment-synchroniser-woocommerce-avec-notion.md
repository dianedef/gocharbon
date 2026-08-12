---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Synchroniser Woocommerce Avec Notion
author: Diane
description: 'Découvre Comment Synchroniser Woocommerce Avec Notion : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment synchroniser WooCommerce avec Notion

Tu geres ta boutique WooCommerce et tu organises tout dans Notion ? Le probleme c'est que les deux ne se parlent pas nativement. Chaque nouvelle commande, chaque nouveau client, tu dois tout recopier a la main. On va automatiser tout ca avec des outils no-code.

## Pourquoi synchroniser WooCommerce et Notion ?

- **Suivi des commandes** : chaque nouvelle commande cree automatiquement une ligne dans ta base Notion avec le statut, le montant, les produits
- **Gestion clients** : un CRM maison dans Notion, alimente en temps reel par ta boutique
- **Inventaire** : suivre tes stocks dans un tableau Notion connecte a WooCommerce
- **Reporting** : tableaux de bord personnalises dans Notion avec tes chiffres de vente
- **Taches** : une commande prioritaire genere une tache dans ton board Notion

## Ce dont tu as besoin

- Un site WooCommerce fonctionnel
- Un compte Notion avec une base de donnees preparee
- Un outil d'automatisation : **Make** (ex-Integromat), **Zapier**, ou **n8n**
- 15 minutes de configuration

## Methode 1 : Avec Make (recommande)

Make est le meilleur rapport qualite/prix pour ce type d'automatisation. Le plan gratuit offre 1 000 credits/mois (chaque action de module compte comme un credit), largement suffisant pour une petite boutique.

### Etape 1 : Preparer ta base Notion

Cree une base de donnees dans Notion avec ces colonnes :

| Colonne | Type | Contenu |
|---------|------|---------|
| Commande | Titre | Numero de commande |
| Client | Texte | Nom du client |
| Email | Email | Adresse email |
| Montant | Nombre | Total de la commande |
| Statut | Select | En cours, Expedie, Livre, etc. |
| Date | Date | Date de la commande |
| Produits | Texte | Liste des produits commandes |

### Etape 2 : Connecter WooCommerce a Make

1. Cree un compte sur [make.com](https://www.make.com)
2. Cree un nouveau scenario
3. Ajoute le module **WooCommerce > Watch Orders** comme declencheur
4. Connecte ton site WooCommerce :
   - Va dans **WooCommerce > Reglages > Avance > API REST**
   - Cree une cle API (permissions : lecture)
   - Copie la cle et le secret dans Make
5. Choisis le declencheur : "Nouvelle commande" ou "Commande mise a jour"

### Etape 3 : Connecter Notion a Make

1. Ajoute le module **Notion > Create a Database Item** apres le declencheur WooCommerce
2. Connecte ton compte Notion (Make te demandera l'autorisation)
3. Selectionne ta base de donnees
4. Mappe les champs :
   - Commande : `Order ID`
   - Client : `Billing First Name` + `Billing Last Name`
   - Email : `Billing Email`
   - Montant : `Total`
   - Statut : `Status`
   - Date : `Date Created`
   - Produits : `Line Items` (utilise une fonction pour concatener les noms)

### Etape 4 : Tester et activer

1. Clique sur **Run once** pour tester avec ta derniere commande
2. Verifie que la ligne apparait dans Notion
3. Active le scenario en le mettant **ON**
4. Definis l'intervalle de verification (toutes les 15 minutes en gratuit)

## Methode 2 : Avec Zapier

Plus simple que Make, mais plus cher au-dela du plan gratuit.

1. Cree un Zap avec le declencheur **WooCommerce > New Order**
2. Ajoute l'action **Notion > Create Database Item**
3. Connecte les deux comptes
4. Mappe les champs comme dans la methode Make
5. Teste et active

**Avantage** : interface plus intuitive, le mapping est guide pas a pas. Plus de 7 000 applications connectables.
**Inconvenient** : seulement 100 taches/mois en plan gratuit (tache = action executee). Les Zaps gratuits sont limites a 2 etapes (un declencheur + une action). L'intervalle de verification est de 15 minutes en gratuit. Les plans payants commencent a 29.99 USD/mois pour 750 taches.

## Methode 3 : Avec n8n (auto-heberge, gratuit)

Pour les plus techniques qui veulent zero cout recurrent :

1. Installe n8n sur ton serveur (Docker ou npm)
2. Cree un workflow avec le noeud **WooCommerce Trigger**
3. Ajoute le noeud **Notion**
4. Configure les connexions et le mapping
5. Active le workflow

**Avantage** : 100% gratuit, pas de limite d'operations, tes donnees restent chez toi.
**Inconvenient** : il faut gerer l'hebergement et la maintenance.

## Cas d'usage avances

### Synchronisation bidirectionnelle des statuts

Tu peux aussi mettre a jour WooCommerce depuis Notion :
1. Quand tu changes le statut dans Notion (ex: "Expedie")
2. Make detecte le changement (module Notion > Watch Database Items)
3. Et met a jour la commande WooCommerce en consequence

### Alerte Slack ou email sur les grosses commandes

Ajoute une condition dans ton scenario Make :
- Si `Montant > 200 euros` alors envoie une notification Slack ou un email
- Sinon, ajoute juste a Notion normalement

### Dashboard Notion avec formules

Dans ta base Notion, ajoute des formules et vues :
- **Vue par statut** : tableau Kanban avec les commandes par etape
- **Chiffre d'affaires du mois** : rollup ou formule sur la colonne Montant
- **Top clients** : relation vers une base Clients avec nombre de commandes

## Quoi synchroniser selon ton activite

| Activite | Donnees a synchroniser |
|----------|----------------------|
| E-commerce classique | Commandes, statuts, clients |
| Dropshipping | Commandes + suivi fournisseur |
| Abonnements | Renouvellements, annulations |
| Digital (formations, ebooks) | Ventes + acces clients |

## Astuces

- **Commence simple** : synchronise juste les nouvelles commandes. Tu ajouteras les cas complexes apres.
- **Gere les erreurs** : dans Make, active les notifications d'erreur par email. Si une commande ne passe pas, tu seras prevenu.
- **Attention aux doublons** : ajoute un filtre pour verifier si la commande existe deja dans Notion avant de creer une nouvelle ligne.
- **Teste avec des commandes de test** : WooCommerce te permet de creer des commandes manuelles, utilise ca pour tester sans payer.
- Le webhook WooCommerce est plus fiable que le polling (verification periodique). Utilise-le si ton outil le supporte.

## Comparatif des outils d'automatisation (prix mis a jour)

| Outil | Plan gratuit | Premier plan payant | Operations/mois | Intervalle minimum |
|-------|-------------|-------------------|----------------|-------------------|
| Make | 1 000 credits/mois | Core a 9 USD/mois (10 000 credits) | Illimite en payant | 1 min (payant), 15 min (gratuit) |
| Zapier | 100 taches/mois | Starter a 29.99 USD/mois (750 taches) | Selon plan | 1 min (payant), 15 min (gratuit) |
| n8n | Illimite (self-hosted) | Cloud a 24 EUR/mois | Illimite | Temps reel (webhook) |

**Attention** : chez Make, chaque module (action) dans un scenario consomme un credit. Un scenario avec 5 modules qui traite une commande consomme 5 credits. Chez Zapier, chaque action executee = 1 tache. Fais le calcul avant de choisir.

## Outils mentionnes

- **Make** (ex-Integromat) : plateforme d'automatisation no-code, 1 000 credits/mois gratuit. Plans payants : Core a 9 USD/mois, Pro a 16 USD/mois, Teams a 29 USD/mois. Plus de 3 000 applications connectables. Inscription sur [make.com](https://www.make.com).
- **Zapier** : automatisation no-code, interface simple, 100 taches/mois gratuit. Plans payants a partir de 29.99 USD/mois. Plus de 7 000 applications connectables. Inscription sur [zapier.com](https://zapier.com).
- **n8n** : automatisation open-source, auto-hebergee (gratuit) ou cloud a 24 EUR/mois. Plus de 400 niveaux d'integration. Installation via Docker ou npm. Site : [n8n.io](https://n8n.io).
- **Notion** : organisation et bases de donnees. L'API Notion est necessaire pour les integrations avec Make/Zapier.
- **WooCommerce REST API** : interface pour connecter ta boutique aux outils externes. Documentation sur [woocommerce.github.io/woocommerce-rest-api-docs](https://woocommerce.github.io/woocommerce-rest-api-docs/).
