---
section: outils
toolCategoryPrimary: tech
toolSubcategoryPrimary: hebergement
toolFacets:
  - cloud
  - paas
  - devops
metadataEnrichedAt: "2026-03-28"
type: outil
qualificationLocale: france
ancrageEconomique: fort
niveauResponsabilite: partiel
paysSiege: France
paysFiscal: France
paysFondateurs:
  - France
hebergementDonnees: multi-region
societeMere: "Platform.sh SAS"
sourcesVerification:
  - "https://upsun.com/impressum/"
  - "https://upsun.com/about-us/"
  - "https://upsun.com/pricing/"
notesQualification: "SAS au RCS de Paris (B 521 496 059), capital 719 915,90€, siege 22 rue de Palestro 75002 Paris. Fondee en 2009 sous le nom Commerce Guys, rebrandee Platform.sh puis Upsun. Filiales au UK, Allemagne, Espagne, USA, Canada, Australie. Deploiement multi-cloud sur AWS, Azure et GCP — donc hebergement hors datacenters propres. Ancrage economique fort : siege, R&D et fiscalite en France. Responsabilite partielle car l'infra sous-jacente est celle des hyperscalers US."
methodologieVersion: "gocharbon-v1"
title: Upsun
author: Diane
tags:
  - Outils
description: "Upsun (ex Platform.sh) est le PaaS français de référence pour Symfony, PHP, Node.js et Python. 16 000+ devs, levée 140M$, clonage d'environnements en 30s. Dès 0,033€/h."
pubDate: '2026-03-28'
imgUrl: ../../../../assets/astro.jpeg
u_site: https://upsun.com/fr/
u_origine: FR
u_langue_fr: true
---

# Upsun

## PAAS FRANÇAIS : LA PLATEFORME QUI CLONE TA PROD EN 30 SECONDES POUR QUE TU ARRÊTES DE TESTER SUR DU VENT

### tl;dr

Upsun, c'est le nouveau nom de **Platform.sh** — le PaaS français fondé en **2009** (à l'origine sous le nom **Commerce Guys**), siège au **22 rue de Palestro, 75002 Paris**. SAS au capital de **719 915,90€**, RCS Paris B 521 496 059, dirigée par **Frédéric Plais**. L'entreprise a levé **140 millions de dollars en Série D** en 2022, emploie environ **300 personnes**, et sert **16 000+ développeurs** chez des clients comme **Adobe, UNICEF, Gap Inc. et Assa Abloy**. Le produit est un Platform-as-a-Service qui te permet de déployer des applications web sur **AWS, Azure ou GCP** sans toucher à l'infrastructure. La killer feature : le **clonage instantané d'environnements de production** — base de données de 1 To incluse, en environ **30 secondes**. Chaque branche Git = un environnement de preview identique à la prod, avec les vraies données. Historiquement la plateforme de référence de l'écosystème **Symfony/PHP**, Upsun supporte aujourd'hui PHP, Python, Node.js, Ruby, Java, Golang, .NET, et les frameworks majeurs (Django, Next.js, Drupal, WordPress, Symfony, Magento, Laravel). Tarification à l'usage dès **0,033€/h** par CPU, essai gratuit 15 jours sans CB.

### Alternative à

Heroku (le PaaS historique, racheté par Salesforce), Render, Railway, Fly.io, Clever Cloud (concurrent français direct), Scalingo (autre PaaS français), Vercel (spécialisé frontend/Next.js), Netlify (JAMstack). Upsun se distingue par son **clonage d'environnements de production byte-perfect**, son support **multi-cloud** (AWS + Azure + GCP), et son ancrage historique dans l'écosystème **Symfony/Drupal/PHP** — là où Heroku a longtemps dominé sur Ruby et Node.js.

## Bénéfices

**Clone ta prod en 30 secondes — plus jamais de "ça marche en staging"** — C'est le différenciateur principal d'Upsun. Quand tu crées une branche, la plateforme clone l'intégralité de ton environnement de production : code, configuration, dépendances ET base de données. Même sur 1 To de données. Tes tests se font sur des données réelles, pas sur un jeu de données fictif monté à la va-vite. Résultat : quand tu merges, tu sais que ça marche.

**Git-driven — tu push, ça déploie** — Chaque `git push` déclenche un build et un déploiement automatique. Chaque Pull Request génère un environnement de preview avec sa propre URL et son certificat SSL. Pas besoin de configurer des pipelines CI/CD complexes — le workflow est natif.

**Multi-cloud sans vendor lock-in** — Tu déploies sur AWS, Azure ou GCP selon tes besoins, depuis la même interface. Si ton client impose Azure pour des raisons de conformité ou si tu veux optimiser tes coûts sur GCP, tu changes de provider sans réécrire ton infra.

**PaaS français avec support et conformité** — Siège à Paris, DPO joignable (dpo@upsun.com), conformité RGPD documentée. Pour les projets qui nécessitent un prestataire européen — marchés publics, santé, finance — c'est un argument contractuel concret.

**Scaling sans DevOps** — Tu ajustes CPU et RAM par service directement depuis la console ou le CLI. Pas besoin de Kubernetes, pas besoin de Terraform, pas besoin d'un SRE à 80K. La plateforme gère le scaling, les backups, le SSL, le monitoring.

**Polyglotte — PHP, Python, Node.js, Java, Go, Ruby, .NET** — Tu n'es pas enfermé dans un seul langage. Si ton projet combine un backend Symfony, un frontend Next.js et un worker Python, tout tourne sur la même plateforme avec les mêmes outils de déploiement.

### Pour Qui ?

- Développeurs PHP/Symfony qui veulent un PaaS taillé pour leur écosystème
- Agences web qui gèrent des dizaines de sites Drupal, WordPress ou Magento
- Startups SaaS qui veulent shipper vite sans recruter de DevOps
- Équipes qui font du multi-environnement intensif (feature branches, QA, staging, preprod)
- Entreprises avec des contraintes de conformité européenne (RGPD, marchés publics)
- Développeurs fullstack qui jonglent entre plusieurs langages et frameworks
- CTOs de PME qui veulent réduire la charge infra sans migrer vers du serverless
- Projets e-commerce Magento/WooCommerce qui ont besoin de performances et de fiabilité

## Comment Utiliser Upsun

### 1. Inscription et premier projet

Crée un compte sur upsun.com — 15 jours d'essai gratuit, pas de carte bancaire. Connecte ton dépôt GitHub, GitLab ou Bitbucket. Upsun détecte automatiquement ton framework et génère une configuration de base.

### 2. Configuration

Le fichier `.upsun/config.yaml` (anciennement `.platform.app.yaml`) décrit ton application : langage, version, commandes de build, services (MySQL, PostgreSQL, Redis, Elasticsearch...), crons, workers. La syntaxe est déclarative — tu décris ce que tu veux, pas comment le faire.

### 3. Déploiement

Tu push ta branche, Upsun build et déploie. Chaque branche peut avoir son propre environnement avec sa propre base de données clonée depuis la prod. Les environnements de preview sont accessibles via des URLs générées automatiquement avec SSL.

### 4. Gestion quotidienne

Utilise la console web pour visualiser tes environnements, les logs, les métriques. Le CLI (`upsun` ou `platform`) permet de tout gérer en terminal : SSH, logs, sync de données, gestion des variables d'environnement, scaling des ressources.

### 5. Bonnes pratiques

- Active le profiling continu pour repérer les régressions de performance avant la prod
- Utilise les variables d'environnement pour séparer la config par branche
- Clone la prod régulièrement dans tes environnements de dev pour tester avec des données fraîches
- Configure des backups automatiques sur les environnements critiques

## Fonctionnalités

### Environnements et Clonage

- **Clonage instantané de production** — Fork complet incluant code, config, dépendances et base de données (jusqu'à 1 To en ~30 secondes)
- **Environnements de preview** — Un environnement dédié par branche Git, avec URL unique et SSL automatique
- **Snapshots** — Sauvegarde instantanée de l'état complet d'un environnement pour rollback d'urgence
- **Données byte-perfect** — Les clones sont des copies exactes, pas des dumps approximatifs

### Pipeline Git-Driven

- **Déploiement automatique** — Chaque `git push` déclenche le build et le déploiement
- **Intégrations Git natives** — GitHub, GitLab, Bitbucket connectés en quelques clics
- **Preview URLs** — Chaque PR obtient son environnement de preview accessible publiquement
- **SSL auto-configuré** — Certificats Let's Encrypt générés et renouvelés automatiquement

### Multi-Cloud et Infrastructure

- **AWS, Azure, GCP** — Choisis ton provider cloud selon tes besoins
- **Multi-région** — Déploie au plus près de tes utilisateurs
- **Edge computing** — Optimisation de la latence pour les applications distribuées
- **99,99% SLA** — Engagement de disponibilité enterprise

### Langages et Frameworks

- **PHP** — Support historique, optimisé pour Symfony, Laravel, Drupal, WordPress, Magento
- **Python** — Django, Flask, FastAPI
- **Node.js** — Next.js, Express, NestJS
- **Ruby** — Rails
- **Java** — Spring Boot, Micronaut
- **Golang** — Applications natives
- **.NET** — Support complet du runtime Microsoft

### Services Managés

- **Bases de données** — MySQL, MariaDB, PostgreSQL, MongoDB, Oracle MySQL
- **Cache et search** — Redis, Memcached, Elasticsearch, OpenSearch, Solr
- **Messaging** — RabbitMQ, Kafka
- **Stockage** — Network storage persistant par environnement

### Observabilité et Profiling

- **APM intégré** — Profiling continu des applications, détection de régressions
- **Métriques** — CPU, RAM, disque, réseau, temps de réponse — 30 jours d'historique inclus
- **Logs centralisés** — Accès aux logs applicatifs et d'infrastructure depuis la console ou le CLI
- **Alertes** — Notifications sur les anomalies de performance

### Sécurité et Conformité

- **PCI DSS Level 1** — Certification pour le traitement de données bancaires
- **HIPAA** — Conformité pour les données de santé (marché US)
- **RGPD** — Conformité documentée, DPA disponible, DPO joignable
- **Protection DDoS** — Protection 24/7 contre les attaques
- **Isolation des environnements** — Chaque conteneur est isolé au niveau réseau et filesystem

### Outils Développeur

- **CLI** — Outil en ligne de commande complet (`upsun` / `platform`)
- **Console web** — Interface graphique pour la gestion des projets et environnements
- **API REST** — Tout est automatisable via l'API
- **Webhooks** — Notifications sur les événements de déploiement
- **SSH** — Accès direct aux conteneurs pour le debug

## Prix

Upsun fonctionne **à la carte, sans plans prédéfinis**. Tu paies uniquement les ressources que tu provisionnes, facturées à la seconde.

### Essai gratuit

- **15 jours gratuits**, sans carte bancaire
- Accès complet aux fonctionnalités enterprise
- Crédit mensuel couvrant 1 projet + 1 licence utilisateur

### Tarification des ressources (par heure)

| Ressource | Prix/heure | Notes |
|-----------|-----------|-------|
| **CPU Application (partagé)** | 0,033€ | Pour les apps à faible charge |
| **CPU Application (garanti)** | 0,100€ | Pour les apps de production |
| **RAM Application (1 Go)** | 0,013€ | Par tranche de 1 Go |
| **CPU Services (partagé)** | 0,049€ | BDD, cache, search |
| **CPU Services (garanti)** | 0,120€ | Services de production |
| **RAM Services (1 Go)** | 0,020€ | Par tranche de 1 Go |
| **RAM MongoDB Premium (1 Go)** | 0,050€ | Licence MongoDB incluse |
| **RAM Elasticsearch Premium (1 Go)** | 0,190€ | Licence Elastic incluse |

### Frais fixes

| Poste | Prix | Inclus |
|-------|------|--------|
| **Projet** | 9€/mois | Environnements preview, métriques 30 jours, profiling continu 15 min, bande passante |
| **Stockage disque** | 0,49€/Go/env | Par environnement |
| **Sauvegardes** | 0,10€/Go | Stockage des backups |

### Crédit durabilité

3% de réduction sur la facturation si tu déploies dans une région éco-responsable. Un geste symbolique mais documenté.

### Estimation mensuelle

Pour un projet type (1 app PHP + 1 MySQL + 1 Redis, CPU garanti, 2 Go RAM chacun) : compte environ **50-80€/mois** hors stockage. C'est plus cher qu'un VPS à 5€/mois, mais tu n'as plus de DevOps à faire.

## Intégrations

### Git et CI/CD
- **GitHub** — Intégration native, environnements de preview par PR
- **GitLab** — Intégration native, support GitLab CI
- **Bitbucket** — Intégration native
- **Webhooks** — Notifications personnalisables vers n'importe quel service

### CMS et E-commerce
- **Drupal** — Support historique, configuration optimisée
- **WordPress** — Déploiement managé
- **Magento** — Support enterprise
- **Shopware** — Intégration documentée
- **Sylius** — E-commerce Symfony natif

### Frameworks
- **Symfony** — Support de référence, la plateforme est née dans cet écosystème
- **Laravel** — Configuration pré-faite
- **Django** — Support Python natif
- **Next.js** — Déploiement SSR/SSG
- **Spring Boot** — Support Java

### Monitoring et Observabilité
- **Blackfire** — Profiling PHP/Python intégré (produit frère, même groupe)
- **New Relic** — Compatible via agent
- **Datadog** — Export de métriques
- **Sentry** — Error tracking compatible

### Infrastructure as Code
- **Terraform** — Provider disponible
- **API REST** — Automatisation complète

## L'équipe et l'Histoire

- **2009** — Fondation sous le nom **Commerce Guys** à Paris, par **Frédéric Plais** et son équipe. L'entreprise contribue activement à **Drupal Commerce**
- **2015** — Pivot vers le PaaS. Lancement de **Platform.sh**, qui automatise le déploiement d'applications PHP/Drupal. L'idée du clonage d'environnements de production est au coeur du produit
- **2017** — Levée de **34 millions de dollars en Série C**. Expansion du support multi-langage (Python, Node.js, Ruby, Java, Go)
- **2019** — Acquisition de **Blackfire.io** (profiling PHP/Python). Intégration dans la plateforme comme outil d'observabilité natif
- **2020** — Accélération de la croissance, adoption par des grands comptes (Adobe, UNICEF, Gap Inc.)
- **2022** — **Levée de 140 millions de dollars en Série D**, valorisation estimée à plus de 700M$. Annonce de l'expansion multi-cloud (Azure, GCP en plus d'AWS)
- **2023-2024** — Rebranding de **Platform.sh vers Upsun**. L'URL platform.sh redirige vers upsun.com. Repositionnement sur l'IA et les agents de développement autonomes
- **2025-2026** — **16 000+ développeurs** actifs, environ **300 employés**. Filiales au UK, Allemagne, Espagne, USA, Canada et Australie. Le produit se positionne comme plateforme pour "développeurs humains et agents IA"

**Certifications** : PCI DSS Level 1, HIPAA, conformité RGPD documentée, DPA publique.

**Notes utilisateurs** : bien noté sur G2 pour la qualité du clonage d'environnements et le support technique. Quelques critiques récurrentes sur la complexité de la configuration initiale et le prix.

## Témoignages

> "Platform.sh [Upsun] nous permet de tester avec de vraies données de production sur chaque feature branch. Ça a changé notre façon de travailler." — **Développeur senior, équipe Drupal chez Adobe**

> "Le clonage d'environnement est la killer feature. On peut reproduire un bug client en 30 secondes au lieu de passer 2 heures à recréer un contexte." — **CTO, agence web e-commerce**

> "On a migré de Heroku vers Platform.sh quand ils ont supprimé le free tier. La migration a pris un week-end. Le produit est plus puissant, mais la courbe d'apprentissage est réelle." — **Développeur indépendant, retour communauté**

## Cas d'Usage Concrets

**Agence web multi-sites Drupal** — Tu gères 30 sites Drupal pour des clients différents. Chaque site a son environnement, ses branches, ses previews. Quand un client veut voir une modification avant la mise en prod, tu lui envoies l'URL de preview générée automatiquement. Plus besoin d'un serveur de staging partagé qui plante un vendredi sur deux.

**Startup SaaS en croissance** — Tu as une app Laravel avec PostgreSQL et Redis. Ton équipe de 5 devs pousse chacun 3-4 branches par semaine. Chaque branche a son environnement complet avec les données de prod clonées. Les bugs de type "ça marche chez moi" disparaissent.

**E-commerce Magento sous pression** — Black Friday arrive. Tu dois tester tes optimisations de performance sur un environnement identique à la prod, avec le vrai catalogue de 50 000 produits. Tu clones, tu testes, tu merges. Pas de surprise le jour J.

**Freelance PHP/Symfony** — Tu livres des projets pour des clients qui ne veulent pas gérer l'infra. Tu déploies sur Upsun, le client a une URL en prod, les backups sont automatiques, le SSL aussi. Tu te concentres sur le code, pas sur la config Nginx.

**Équipe conformité en fintech** — Ton projet traite des données bancaires. Tu as besoin d'un hébergeur PCI DSS Level 1. Upsun coche la case, avec un DPA signable et un DPO joignable. Ton compliance officer est content.

**Migration depuis Heroku** — Heroku a supprimé son free tier et les prix ont grimpé. Tu migres ton app Node.js + PostgreSQL vers Upsun en un week-end. La config est plus explicite (fichier YAML vs. buildpacks), mais tu gagnes le clonage d'environnements et le multi-cloud.

## Points Forts

- PaaS français — siège à Paris, SAS au RCS de Paris, conformité RGPD native, DPO joignable
- Clonage d'environnements de production byte-perfect en ~30 secondes, y compris les bases de données volumineuses
- Pipeline Git-driven natif — chaque branche = un environnement de preview avec SSL automatique
- Support multi-cloud (AWS, Azure, GCP) depuis la même interface, sans vendor lock-in
- Polyglotte — PHP, Python, Node.js, Ruby, Java, Go, .NET supportés nativement
- Référence historique de l'écosystème Symfony/Drupal/PHP depuis 2009
- Profiling continu intégré (héritage Blackfire), observabilité incluse dans le prix
- Certifications PCI DSS Level 1 et HIPAA — rare pour un PaaS
- Tarification à la seconde sans engagement — tu paies ce que tu consommes
- 140M$ de Série D en 2022 — l'entreprise a les moyens de durer

## Points Faibles

- Prix plus élevé qu'un VPS ou qu'un PaaS minimaliste (Render, Railway) — le frais projet de 9€/mois s'ajoute aux ressources, et les services premium (MongoDB, Elasticsearch) coûtent vite cher
- Courbe d'apprentissage — la configuration YAML est puissante mais verbeuse. Les premiers jours sont frustrants si tu viens de Heroku ou Vercel
- Pas de datacenters propres — Upsun déploie sur AWS, Azure et GCP. Si tu cherches une souveraineté totale des données (datacenters français opérés par un acteur français), préfère Scaleway ou OVHcloud
- Rebranding Platform.sh vers Upsun — la transition a créé de la confusion. De la documentation ancienne référence encore Platform.sh, et certains outils CLI portent encore l'ancien nom
- Communauté plus petite que Heroku ou Vercel — moins de tutoriels tiers, moins de réponses sur Stack Overflow
- Console web fonctionnelle mais pas la plus intuitive — l'expérience est meilleure via le CLI que via l'interface graphique
- Pas de free tier permanent — l'essai gratuit dure 15 jours, ensuite tu paies. Les side-projects à budget zéro iront voir ailleurs
- Le support premium est payant — le support inclus est correct mais les temps de réponse peuvent être longs sur les incidents non critiques
