---
section: apps
metadataEnrichedAt: null
title: Dolibarr
author: Diane
tags:
- Outils
description: Dolibarr est un ERP/CRM open source français pour TPE, PME et associations.
  Gratuit, modulaire, auto-hébergeable. 200 000+ organisations, 1M+ utilisateurs.
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
u_site: https://www.dolibarr.org
---

# Dolibarr

## ERP/CRM OPEN SOURCE : LE COUTEAU SUISSE GRATUIT POUR LES PETITES STRUCTURES

### tl;dr

Dolibarr est un ERP/CRM open source français dont le premier commit remonte à avril 2002. Solution tout-en-un gratuite pour les TPE, PME, associations et indépendants : gestion des contacts, devis, commandes, facturation, comptabilité, stocks, achats, interventions, contrats, adhérents. Architecture modulaire — tu actives uniquement les fonctionnalités dont tu as besoin. Environ 200 000 organisations actives dans le monde et plus d'1 million d'utilisateurs estimés. 1 350 nouvelles installations par semaine (2024). Communauté mondiale de contributeurs. Auto-hébergeable ou disponible en SaaS (DoliCloud). Plus de 300 modules complémentaires sur le marketplace Dolistore. Référencé au SILL (Socle Interministériel de Logiciels Libres) du gouvernement français depuis octobre 2022. Licence GPL v3+.

### Alternative à

Odoo, EBP, Sage, Axonaut, Henrri, Ciel, QuickBooks. Dolibarr se distingue par son modèle 100% open source et gratuit (pas de version "Community" bridée vs "Enterprise" payante comme Odoo), son architecture modulaire ultra-flexible et sa communauté francophone très active. L'auto-hébergement garantit une souveraineté totale sur tes données.

## Bénéfices

**Gratuit et open source** — Pas de licence, pas d'abonnement. Le code source est accessible, modifiable et redistribuable sous licence GPL v3+. Tu peux l'installer, le personnaliser et l'utiliser sans jamais payer un centime de licence.

**Modulaire par conception** — Tu actives uniquement les modules dont tu as besoin. Pas envie de la gestion de stocks ? Tu ne l'actives pas. Besoin de gérer des adhérents pour ton association ? Tu actives le module adhérents. L'outil s'adapte exactement à ton usage.

**Auto-hébergeable et souverain** — Tes données restent chez toi, sur ton serveur. Aucun transfert vers des cloud tiers. C'est un argument massif pour les organisations qui veulent la maîtrise totale de leurs données (collectivités, associations, PME sensibles).

**Communauté massive** — Des milliers de développeurs et contributeurs dans le monde. Une communauté francophone très active (forums, documentation, traductions). Tu n'es jamais seul face à un problème.

**Reconnu par l'État français** — Référencé au SILL (catalogue de logiciels libres recommandés par l'État). Lauréat de multiples prix : Trophée du Logiciel Libre (2003), Open Naos D'or (2020), 20i FOSS Award (2023). Conforme à la réglementation française.

**Écosystème riche** — 300+ modules complémentaires sur le Dolistore, des intégrateurs professionnels, des livres, des formations. Un écosystème complet autour du logiciel.

### Pour Qui ?

- TPE et indépendants cherchant un ERP gratuit et complet
- PME avec un budget logiciel limité qui veulent un outil professionnel sans abonnement
- Associations (gestion des adhérents et cotisations intégrée nativement)
- Entreprises et collectivités qui veulent maîtriser leurs données (auto-hébergement)
- Développeurs et intégrateurs qui veulent personnaliser et étendre l'outil
- Organisations dans des pays en développement où le coût des licences SaaS est prohibitif

## Fonctionnalités

### CRM et Gestion des Contacts

- **Gestion des tiers** — Clients, prospects, fournisseurs avec fiches détaillées
- **Contacts associés** — Plusieurs contacts par tiers avec rôles
- **Opportunités commerciales** — Pipeline de vente avec étapes personnalisables
- **Historique des interactions** — Suivi complet des échanges et événements
- **Catégories et tags** — Classification flexible de tes contacts

### Facturation et Gestion Commerciale

- **Devis** — Création, envoi, suivi et transformation en commande/facture
- **Commandes clients** — Gestion du cycle complet de commande
- **Factures et avoirs** — Génération, envoi PDF, suivi des paiements
- **Factures récurrentes** — Automatisation des factures périodiques
- **Multi-devises** — Gestion des transactions en devises étrangères

### Comptabilité

- **Plan comptable** — Plan comptable français intégré, personnalisable
- **Écritures comptables** — Saisie manuelle ou automatique depuis les factures
- **Rapports comptables** — Grand livre, balance, journaux
- **Export FEC** — Fichier des Écritures Comptables conforme à la réglementation française

### Gestion de Stocks

- **Produits et services** — Catalogue avec prix, descriptions, variantes
- **Multi-entrepôts** — Gestion des stocks sur plusieurs sites
- **Mouvements de stock** — Entrées, sorties, transferts entre entrepôts
- **Inventaires** — Outils d'inventaire et de régularisation
- **Numéros de lot et de série** — Traçabilité complète

### Achats

- **Commandes fournisseurs** — Création et suivi des commandes d'achat
- **Réceptions** — Gestion des réceptions de marchandises
- **Notes de frais** — Saisie et validation des dépenses
- **Contrats fournisseurs** — Suivi des engagements

### Interventions et Services

- **Fiches d'intervention** — Suivi des missions terrain
- **Contrats de service** — Gestion des contrats récurrents
- **Projets** — Planification et suivi de projets avec tâches
- **Temps passé** — Saisie du temps par tâche et par utilisateur

### Gestion des Adhérents (Associations)

- **Fiches adhérents** — Gestion complète des membres
- **Cotisations** — Suivi des cotisations, rappels, renouvellements
- **Types d'adhésion** — Catégories personnalisables
- **Exports** — Export des listes d'adhérents

### Outils et Extensions

- **300+ modules sur Dolistore** — Extensions communautaires et commerciales
- **API REST native** — Intégration avec des systèmes tiers
- **Import/Export** — CSV, Excel, PDF
- **Modèles de documents** — Personnalisation des PDF (devis, factures, etc.)

## Sécurité

- **Chiffrement** — Mots de passe et clés de sécurité chiffrés en base de données. Mots de passe techniques obfuscables dans conf.php
- **Protection anti-injection SQL** — WAF interne avec tests unitaires dédiés
- **Protection XSS** — WAF interne et headers HTTP de sécurité
- **Protection CSRF** — Tokens de renouvellement par session ou par page
- **Protection SSRF** — Via méthode getURLContent() de la bibliothèque core
- **Anti brute-force** — Délai fixe sur la page de login, CAPTCHA optionnel, restrictions IP pour le backoffice
- **Anti-DOS** — Quotas d'actions par IP intégrés. Règles fail2ban fournies dans le repository GitHub
- **Antivirus** — Scan externe des fichiers uploadés
- **Conformité OpenSSF** — Best Practices de l'Open Source Security Foundation (depuis janvier 2022)
- **Fichiers d'empreinte** — Vérification d'intégrité des fichiers à chaque release
- **Stockage sécurisé** — Documents stockés hors de la racine web, inaccessibles sans le wrapper Dolibarr
- **Mode production** — Désactive les fuites d'informations techniques (debug, stack traces, versions)
- **Programme VDP** — Divulgation responsable des vulnérabilités avec correction et publication sous 15 jours

## Prix

100% gratuit et open source (licence GPL v3+). Aucun coût de licence. Tu payes uniquement l'hébergement si tu choisis un serveur, ou tu utilises DoliCloud pour un hébergement managé.

**DoliCloud (option SaaS)** : Hébergement géré avec mises à jour automatiques. Tarifs accessibles pour les structures qui ne veulent pas gérer un serveur.

**Dolistore** : Modules complémentaires payants sur le marketplace (de quelques euros à quelques dizaines d'euros par module). La grande majorité des fonctionnalités essentielles sont dans le core gratuit.

## Intégrations

- **API REST native** — Documentation complète pour connecter Dolibarr à tout système tiers
- **300+ modules Dolistore** — Extensions communautaires et commerciales
- **Connecteurs bancaires** — Synchronisation avec les banques
- **Export comptable** — FEC, PDF, CSV, Excel
- **Compatible avec la plupart des hébergeurs web** — PHP 7.x/8.x + MySQL/MariaDB/PostgreSQL
- **Webhooks** — Notifications automatiques vers des services externes
- **Connecteurs e-commerce** — WooCommerce, PrestaShop via modules

## L'équipe et l'Histoire

- **Avril 2002** : Premier commit par **Rodolphe Quiédeville**, développement "from scratch" en CVS. Code hébergé par Savannah
- **Septembre 2003** : Sortie de la version 1.0. Le projet remporte le **Trophée du Logiciel Libre** dans la catégorie gestion d'entreprise
- **2003** : Jean-Louis Bergamo rejoint le projet et développe le module de gestion des adhérents
- **Décembre 2003** : **Laurent Destailleur** fait ses premières modifications au code
- **~2005** : Régis Houssin rejoint le projet, devenant un contributeur majeur
- **2008** : Laurent Destailleur devient le leader du projet et mainteneur principal
- **Septembre 2011** : Migration du code source vers GitHub
- **Juin 2016** : Publication du premier livre sur Dolibarr par Romain Deschamps
- **Janvier 2018** : Le leader du projet participe au groupe de travail sur la loi fiscale française
- **Décembre 2020** : Le projet remporte le prix **Open Naos D'or**
- **Janvier 2022** : Conformité Open Source Security Foundation (OpenSSF)
- **Octobre 2022** : Référencement au **SILL** (Socle Interministériel de Logiciels Libres) du gouvernement français
- **Juin 2023** : Lauréat des **20i FOSS Awards**
- **Origine du nom** : Inspiré de "Dolores Ibárruri", découvert dans la correspondance des mailing lists du projet
- Le projet est soutenu par l'association Dolibarr
- Multiple reconnaissances SourceForge comme "project of the week"

## Statistiques d'Usage (2024)

- **1 350 nouvelles organisations par semaine** (d'après les pings volontaires d'installation)
- **~200 000 organisations actives** dans le monde
- **~1 million d'utilisateurs** estimés (moyenne de 5 utilisateurs par organisation)
- **~44 000 installations** en France avec usage déclaré
- **~500 000 utilisateurs français** estimés
- **30-40% des utilisateurs** opèrent en B2C
- Distribution via des canaux variés : partenaires, hébergeurs web, installation directe

## Configuration Technique

- **Serveur web** : Apache, Nginx ou tout serveur PHP
- **PHP** : 7.x ou 8.x
- **Base de données** : MySQL, MariaDB ou PostgreSQL
- **Système d'exploitation** : Linux, Windows, macOS
- **Hébergement** : Compatible avec la plupart des hébergeurs mutualisés et dédiés

## Points Forts

- 100% gratuit et open source (GPL v3+) — pas de version bridée comme Odoo
- Modulaire : active uniquement les modules dont tu as besoin, pas de bloat
- Auto-hébergeable : souveraineté totale sur tes données
- Communauté francophone massive et active
- Référencé au SILL du gouvernement français
- Sécurité robuste : WAF interne, anti-brute force, conformité OpenSSF, programme VDP
- 300+ modules complémentaires sur le Dolistore
- 20+ ans d'existence et de maturité (depuis 2002)
- Gestion des adhérents native pour les associations
- Export FEC conforme à la réglementation comptable française
- ~200 000 organisations actives, ~1M utilisateurs dans le monde

## Points Faibles

- Interface graphique datée comparée aux SaaS modernes (Sellsy, Axonaut, HubSpot)
- Nécessite des compétences techniques pour l'installation et la configuration initiale
- Support communautaire uniquement (pas de support commercial dédié en standard, sauf via intégrateurs)
- Moins intuitif que les alternatives SaaS — courbe d'apprentissage plus raide
- Les mises à jour majeures peuvent nécessiter des interventions manuelles
- Certains modules complémentaires sont payants et de qualité variable
- Pas d'application mobile native officielle (des apps tierces existent)
- La documentation peut être inégale selon les modules
