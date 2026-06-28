---
section: outils
toolCategoryPrimary: tech
toolSubcategoryPrimary: securite
toolFacets:
  - firewall
  - confidentialite
  - macos
metadataEnrichedAt: '2026-04-09'
type: outil
qualificationLocale: union-europeenne
ancrageEconomique: faible
niveauResponsabilite: partiel
paysSiege: "Autriche"
paysFondateurs:
  - "Autriche"
hebergementDonnees: union-europeenne
sourcesVerification:
  - "https://www.obdev.at/products/littlesnitch/"
notesQualification: "Objective Development Software GmbH, Vienne (Autriche). UE. Pas d'ancrage France. Licence perpétuelle, outil niche macOS."
methodologieVersion: gocharbon-v1
title: Little Snitch
author: Diane
tags:
  - Outils
  - Tech
description: "Little Snitch est le firewall réseau macOS qui surveille et contrôle toutes les connexions sortantes de tes apps. Par Objective Development (Autriche). ~45€ licence perpétuelle."
pubDate: '2026-04-09'
imgUrl: ../../../../assets/astro.jpeg
u_site: https://www.obdev.at/products/littlesnitch/
u_langue_fr: false
---

# Little Snitch

## FIREWALL MACOS : SURVEILLE ET CONTRÔLE TOUTES LES CONNEXIONS RÉSEAU DE TON MAC

### tl;dr

Little Snitch est un **firewall applicatif pour macOS** développé par **Objective Development Software GmbH** (Vienne, Autriche). Il surveille en temps réel toutes les connexions réseau **sortantes** de ton Mac — chaque app, service ou processus qui tente d'envoyer des données à un serveur distant doit obtenir ta permission. Tu vois exactement quelles apps contactent quels serveurs, quand, et à quelle fréquence. Tu peux autoriser, bloquer ou règlementer granulairment les connexions. Prix : environ **45€ en licence perpétuelle**. Outil incontournable pour les utilisateurs macOS qui prennent leur confidentialité au sérieux et veulent savoir ce que leur Mac fait "dans leur dos".

### Alternative à

- **macOS Firewall intégré** — protection entrante seulement, pas les connexions sortantes
- **Radio Silence** — firewall macOS simple, moins complet que Little Snitch
- **Lulu** (gratuit) — firewall open source macOS, moins de fonctionnalités
- **Murus/Vallum** — firewall macOS, moins d'interface visuelle
- **Glasswire** (Windows) — équivalent Windows de Little Snitch
- **VPN** — chiffre le trafic mais ne le bloque pas et ne donne pas de visibilité granulaire

Little Snitch se distingue par sa **visualisation en temps réel** des connexions réseau, sa **granularité** de contrôle par app et par serveur, et son **interface visuelle** unique (Network Monitor).

## Bénéfices

**Savoir exactement ce que ton Mac envoie sur Internet** — La majorité des apps macOS communiquent en permanence avec des serveurs distants : télémétrie, analytics, mises à jour, pub ciblée. macOS ne te montre rien de tout ça. Little Snitch intercepte chaque connexion sortante et te demande : autoriser ou bloquer ? En quelques jours d'utilisation, tu découvres souvent des comportements surprenants d'applications en apparence anodines.

**Bloquer les trackers et la télémétrie indésirables** — Certaines apps macOS envoient des données d'usage, de diagnostics ou de comportement sans demander ton avis. Little Snitch te permet de bloquer ces connexions spécifiques tout en laissant l'app fonctionner normalement pour ses usages légitimes. Tu gardes l'app, tu supprimes la surveillance.

**Visualisation réseau en temps réel** — Le Network Monitor de Little Snitch est une des interfaces les plus belles et informatives disponibles sur macOS. Il affiche une carte des connexions actives, les volumes de données échangées, les serveurs contactés, et les apps responsables. C'est à la fois un outil de sécurité et une fenêtre fascinante sur l'activité réseau de ton Mac.

**Protection sur les réseaux Wi-Fi publics** — Dans un café, un hôtel, ou un espace de co-working, les profils Little Snitch "réseau public" activent automatiquement des règles plus restrictives. Les connexions habituellement autorisées peuvent être bloquées si le réseau est non fiable.

**Gestion par profils** — Tu peux créer des profils différents selon ton contexte : "bureau", "voyage", "réseau public". Chaque profil a ses règles propres. L'outil bascule automatiquement selon le réseau Wi-Fi détecté.

### Pour Qui ?

- **Développeurs et professionnels tech** qui veulent comprendre et contrôler le comportement réseau de leurs outils
- **Journalistes et professionnels traitant des données sensibles** qui ont besoin de savoir ce qui sort de leur machine
- **Entrepreneurs et fondateurs** manipulant des données confidentielles (données clients, financières, stratégiques)
- **Utilisateurs macOS privacy-first** qui ne veulent pas que leurs habitudes d'usage soient trackées
- **Équipes de sécurité** qui analysent le comportement réseau des applications
- **Tout Mac user curieux** de savoir ce que ses apps font réellement en arrière-plan

## Comment Utiliser Little Snitch

1. **Installation** : Télécharge et installe Little Snitch (nécessite redémarrage). L'extension kernel se charge au démarrage.
2. **Apprentissage** : Au lancement de chaque app pour la première fois, Little Snitch affiche une alerte avec la connexion détectée. Tu décides : autoriser (une fois, pour toujours, ou sous conditions) ou bloquer.
3. **Règles personnalisées** : Crée des règles granulaires — "autoriser Chrome vers google.com", "bloquer Zoom vers analytics.zoom.us", etc.
4. **Network Monitor** : Ouvre le Network Monitor pour une vue en temps réel de toutes les connexions actives.
5. **Profils** : Configure des profils selon tes contextes d'utilisation. Little Snitch bascule automatiquement.
6. **Maintenance** : Révise tes règles périodiquement. Certaines apps changent de comportement avec les mises à jour.

## Fonctionnalités

### Contrôle des connexions
- Interception de toutes les connexions réseau sortantes
- Règles par application, serveur, port et protocole
- Mode silencieux : autoriser ou bloquer tout sans alertes
- Mode alerte : demande pour chaque nouvelle connexion
- Règles temporaires ou permanentes

### Network Monitor
- Visualisation en temps réel des connexions actives
- Carte des serveurs contactés dans le monde
- Volumes de données par app et par connexion
- Historique des connexions

### Profils
- Profils multiples selon le contexte (bureau, voyage, public)
- Basculement automatique selon le réseau Wi-Fi
- Règles différentes par profil

### Sécurité avancée
- Détection des apps qui essaient de contourner le firewall
- Alertes sur les connexions inhabituelles
- Compatibilité avec les apps Apple Silicon et Intel
- Support des connexions IPv4 et IPv6

## Prix

- **Little Snitch 5** : ~**45€** en licence perpétuelle (paiement unique)
- **Little Snitch Mini** : version gratuite avec fonctionnalités de base
- Mises à jour mineures incluses, mises à jour majeures avec réduction
- Disponible sur le site Objective Development et sur le Mac App Store

## L'équipe et l'Histoire

- **Objective Development Software GmbH** : studio logiciel autrichien fondé par **Helmut Kutzelnig** à Vienne
- Little Snitch existe depuis **2001** — l'un des outils de sécurité macOS les plus anciens et fiables
- Réputation de qualité et de longévité rare dans l'industrie
- Autres produits : LaunchBar (launcher macOS), Micro Snitch (moniteur micro/caméra)
- Philosophie : logiciel fait avec soin, licence perpétuelle, pas d'abonnement

## Points Forts

- **Référence absolue** sur macOS pour le contrôle réseau : 20+ ans de réputation
- **Licence perpétuelle** : paiement unique, pas d'abonnement
- **Interface Network Monitor** : visualisation réseau unique et très claire
- **Granularité maximale** : règles par app, serveur, port, protocole
- **Profils automatiques** : adaptation selon le réseau Wi-Fi
- **Entreprise européenne** : RGPD et privacy by design

## Points Faibles

- **macOS uniquement** : aucune version Windows ou Linux
- **Interface en anglais** : pas de traduction française
- **Courbe d'apprentissage** : les premières heures demandent beaucoup de décisions (une alerte par nouvelle connexion)
- **Peut casser des apps** : bloquer par erreur une connexion légitime peut rendre une app dysfonctionnelle
- **Niche technique** : outil pour utilisateurs avancés, pas pour le grand public
- **Pas d'ancrage français** : outil autrichien, support en anglais
