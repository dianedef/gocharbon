---
section: outils
toolCategoryPrimary: tech
toolSubcategoryPrimary: hebergement
toolFacets:
  - cloud
  - souverainete
  - paas
metadataEnrichedAt: "2026-03-28"
type: outil
qualificationLocale: france
ancrageEconomique: fort
niveauResponsabilite: fort
paysSiege: France
hebergementDonnees: france
sourcesVerification:
  - "https://clever.cloud/fr/"
  - "https://clever.cloud/fr/about"
  - "https://clever.cloud/fr/infrastructure/"
  - "https://clever.cloud/fr/security/"
notesQualification: "SAS fondée en 2010 à Nantes, SIREN 524 172 727. Datacenters propres et partenaires en France (7 sites : Nanterre, Paris Telehouse, Aubervilliers, Saint-Ouen-l'Aumône, Roubaix, Gravelines, Cloud Temple SecNumCloud). Siège à Nantes, bureaux Paris/Lille/Lyon/Brest. ~90 employés, CA estimé ~12M€. Certifications ISO 27001:2022, HDS, SecNumCloud (via Cloud Temple). Fondateurs et direction française. Ancrage économique fort : siège, R&D, emplois et fiscalité en France."
methodologieVersion: "gocharbon-v1"
title: Clever Cloud
author: Diane
tags:
  - Outils
description: "Clever Cloud, PaaS français souverain basé à Nantes. Déploie en git push, 15+ langages, auto-scaling, ISO 27001, HDS. Clients MAIF/Airbus. Facturation à la seconde."
pubDate: '2026-03-28'
imgUrl: ../../../../assets/astro.jpeg
u_site: https://clever.cloud/fr/
u_origine: "FR"
u_langue_fr: true
---

# Clever Cloud

## PAAS SOUVERAIN : LE PILOTE AUTOMATIQUE POUR TES DÉPLOIEMENTS EN FRANCE

### tl;dr

Clever Cloud est un **PaaS (Platform as a Service) français** fondé en **2010 à Nantes** par **Quentin Adam** et son équipe. Le pitch est simple : "You develop, we deploy." Tu pushes ton code en git, Clever Cloud s'occupe de tout le reste — build, déploiement, scaling, monitoring, mises à jour de sécurité. **SAS au SIREN 524 172 727**, siège à Nantes avec des bureaux à Paris, Lille, Lyon et Brest. Environ **90 employés**, CA estimé autour de **12 millions d'euros**. Clients notables : **MAIF**, **Airbus**, **Cegid**, **Solocal**, **Docaposte**, **Shopopop**, **Limagrain**, **Fairphone**, **Manitou**. Certifié **ISO 27001:2022**, **HDS** (Hébergeur de Données de Santé), accès **SecNumCloud** via la zone Cloud Temple. **11 datacenters** dont 7 en France. Plus de **15 runtimes** supportés (Java, Node.js, PHP, Python, Ruby, Go, Rust, Scala, Elixir, .NET, Haskell, Docker...) et les principales bases de données managées (PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch). Facturation à la seconde, crédits gratuits pour démarrer. Le positionnement est clair : souveraineté européenne, zéro vendor lock-in, standards ouverts.

### Alternative à

Heroku (le PaaS historique, racheté par Salesforce — plus de plan gratuit depuis 2022), Platform.sh (franco-américain), Scalingo (français, concurrent direct le plus proche), Railway, Render, Fly.io, AWS Elastic Beanstalk, Google App Engine. Clever Cloud se distingue par son **ancrage 100% français** (siège, datacenters, équipe), ses **certifications souveraines** (HDS, SecNumCloud) et son support de **15+ langages natifs** sans passer par Docker.

## Bénéfices

**Zéro ops, 100% code — tu ne gères plus de serveurs** — Tu fais un `git push`, Clever Cloud détecte le langage, build l'app, la déploie, la scale et la monitore. Pas de Dockerfile obligatoire, pas de Kubernetes à configurer, pas de mise à jour d'OS à 3h du matin. Pour un solopreneur ou une petite équipe, c'est des centaines d'heures de DevOps économisées chaque année.

**Souveraineté des données — tes données restent en France, point** — 7 datacenters en France, certifications ISO 27001, HDS et accès SecNumCloud. Pas de CLOUD Act, pas de transfert hors UE par défaut. Si tu bosses dans la santé, l'assurance ou le juridique, c'est un argument contractuel concret face à tes clients et prospects.

**Auto-scaling natif — tu paies ce que tu consommes** — Clever Cloud scale automatiquement tes instances selon la charge, dans les limites que tu fixes. Pas de surprovisionnement, pas de crash en cas de pic de trafic. La facturation à la seconde signifie que tu ne paies pas pour des heures creuses.

**15+ langages natifs — pas besoin de Dockeriser** — Java, Node.js, PHP, Python, Ruby, Go, Rust, Scala, Elixir, .NET Core, Haskell, Meteor.js, FrankenPHP, Static... Clever Cloud détecte automatiquement le runtime depuis ton code. Tu peux aussi utiliser Docker si tu préfères, mais ce n'est pas obligatoire.

**Mises à jour de sécurité automatiques — infrastructure immutable** — L'infrastructure est éphémère et reproductible. Chaque redéploiement repart d'un état propre. Les patchs de sécurité OS sont appliqués automatiquement sans intervention. Un code compromis est purgé au prochain déploiement.

**Standards ouverts, zéro lock-in — tu pars quand tu veux** — Git pour le déploiement, S3 pour le stockage objet (Cellar), PostgreSQL standard pour les bases. Pas d'API propriétaire qui te piège. Si demain tu migres vers un autre provider, ton code n'a pas besoin de changer.

### Pour Qui ?

- Développeurs solo et freelances qui veulent déployer sans gérer de serveur
- Startups en phase de lancement qui ont besoin de scaler vite sans recruter un DevOps
- PME et ETI avec des contraintes réglementaires (santé, assurance, finance, secteur public)
- Agences web qui gèrent des dizaines de projets clients
- Équipes de développement qui veulent du CI/CD sans Jenkins ni GitHub Actions complexes
- DSI qui cherchent un PaaS souverain certifié HDS et ISO 27001
- Projets open source qui ont besoin d'un hébergement fiable avec des crédits gratuits
- Éditeurs SaaS français qui veulent un hébergement conforme RGPD sans se prendre la tête

## Comment Utiliser Clever Cloud

### 1. Inscription et premiers pas

Crée ton compte sur clever.cloud. Tu reçois des **crédits gratuits** pour tester sans carte bancaire. L'interface console est accessible en français.

### 2. Déploiement d'une app

Le workflow de base :
- Crée une application depuis la console (choisis ton runtime : Node.js, PHP, Java, etc.)
- Ajoute le remote Git Clever Cloud : `git remote add clever git+ssh://...`
- Pousse ton code : `git push clever main`
- Clever Cloud détecte le langage, installe les dépendances, build et déploie

Les **variables d'environnement** se configurent dans la console ou via le CLI. Le port est injecté automatiquement via `$PORT`.

### 3. Ajout de services (add-ons)

Depuis la console, tu ajoutes des add-ons en un clic :
- PostgreSQL, MySQL ou MongoDB pour ta base de données
- Redis pour le cache
- Cellar (compatible S3) pour le stockage objet
- Elasticsearch pour la recherche
- Pulsar pour le messaging

Les variables de connexion sont injectées automatiquement dans ton app.

### 4. Monitoring et logs

La console intégrée te donne accès aux logs en temps réel, aux métriques CPU/RAM/réseau, et aux alertes. Clever Cloud propose aussi une stack d'observabilité avec métriques, logs et traces.

### 5. CLI et automatisation

Le CLI `clever` permet de tout gérer en ligne de commande :
```bash
clever create --type node myapp
clever deploy
clever logs
clever scale --instances 3
clever env set MY_VAR=value
```

## Fonctionnalités

### Runtimes et Langages

- **Java** — JVM, Maven, Gradle, Play Framework. Le runtime historique de Clever Cloud, optimisé pour la performance
- **Node.js** — Détection automatique via `site/package.json`, support des dernières versions LTS
- **PHP** — Support natif + FrankenPHP (le nouveau serveur PHP moderne)
- **Python** — Django, Flask, FastAPI. Détection via `requirements.txt` ou `Pipfile`
- **Ruby** — Rails, Sinatra. Buildpack Ruby optimisé
- **Go** — Build natif, binaire statique
- **Rust** — Cargo build, support complet de l'écosystème
- **Scala** — sbt, Play Framework
- **Elixir** — Phoenix, Mix
- **.NET Core** — Applications ASP.NET, C#
- **Haskell** — Stack ou Cabal
- **Docker** — Pour tout le reste, déploie n'importe quel conteneur
- **Static** — Sites statiques (Astro, Hugo, Next.js SSG, etc.) servis avec un serveur optimisé
- **Meteor.js** — Support dédié du framework full-stack JavaScript

### Bases de Données Managées

- **PostgreSQL** — Haute disponibilité, backups automatiques, extensions PostGIS
- **MySQL** — MariaDB compatible, réplication
- **MongoDB** — Base document NoSQL managée
- **Redis** — Cache et pub/sub, persistance optionnelle
- **Elasticsearch** — Recherche full-text, agrégations, kibana
- **Materia KV** — Key-value store développé par Clever Cloud
- **Materia TS** — Time series database maison

### Stockage

- **Cellar** — Object storage 100% compatible S3. Migration depuis AWS transparente
- **File System Buckets** — Stockage fichier persistant attaché aux applications

### Messaging

- **Pulsar** — Apache Pulsar managé pour le messaging et le streaming

### Clever AI

- **Plateforme IA unifiée** — Déploiement de modèles LLM
- **Inférence managée** — Exécution de modèles IA sans gérer l'infrastructure GPU

### DevOps et CI/CD

- **Git push deploy** — Déploiement automatique à chaque push
- **Clever CLI** — Outil en ligne de commande complet
- **Terraform Provider** — Infrastructure as Code officiel
- **GitLab intégré** — Instance GitLab managée disponible en add-on
- **Webhooks** — Notifications de déploiement
- **API REST** — Automatisation complète de la plateforme

### Sécurité et Gouvernance

- **IAM avec Keycloak** — Gestion des identités et accès, SSO, RBAC
- **Biscuit tokens** — Système d'autorisation open source développé par Clever Cloud
- **Sōzu** — Reverse proxy open source développé en interne (Rust)
- **Zero Trust** — Architecture réseau sans périmètre, authentification peer-to-peer chiffrée
- **Infrastructure immutable** — Environnements éphémères et reproductibles
- **Isolation VM** — Chaque application tourne dans sa propre VM, mémoire/CPU/réseau cloisonnés

### Outils intégrés

- **Metabase** — Business intelligence managée
- **Grist** — Tableur collaboratif open source
- **Azimutt** — Visualisation de schémas de bases de données
- **Docs** — Documentation collaborative

## Prix

Facturation **à la seconde**, sans engagement. Crédits gratuits pour démarrer sans carte bancaire.

Le modèle est pay-as-you-go avec auto-scaling dans les limites que tu fixes. La tarification dépend du runtime, de la taille de l'instance (CPU/RAM) et des add-ons choisis.

### Principes tarifaires

- **Facturation à la seconde** — tu ne paies que le temps réel d'utilisation
- **Auto-scaling inclus** — les instances scalent dans les limites que tu définis, tu ne paies jamais plus que ton plafond
- **Facture mensuelle détaillée** — chaque ligne est explicable
- **Crédits gratuits** — pour tester la plateforme sans engagement
- **Pas de frais cachés** — la tarification est transparente et publique

### Estimations de coûts

Les prix varient selon la taille de l'instance. Pour une app Node.js ou PHP basique :
- **Instance XS** — quelques euros par mois pour un side project
- **Instance S/M** — entre 15€ et 50€/mois pour une app en production
- **Instance L/XL** — à partir de 80€/mois pour des charges de travail intensives

Pour les bases de données managées (PostgreSQL, MySQL) :
- Plans débutant à quelques euros par mois pour du dev/test
- Plans production avec haute disponibilité et backups automatiques

Pour les tarifs exacts et à jour, l'**estimateur interactif** sur clever.cloud/fr/pricing/ te donne le prix en temps réel selon ta configuration.

## Intégrations

### Déploiement et CI/CD
- **Git** — Déploiement natif via git push (GitHub, GitLab, Bitbucket)
- **GitLab** — Instance managée disponible en add-on
- **Terraform** — Provider officiel Clever Cloud
- **GitHub Actions** — Déploiement automatisé via workflows

### Stockage et données
- **S3** — Cellar est 100% compatible API S3 (migration AWS transparente)
- **PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch** — Add-ons managés avec injection automatique des credentials

### Monitoring et observabilité
- **Grafana** — Export de métriques
- **Datadog** — Intégration disponible
- **Logs** — Drain de logs vers des services tiers (Elasticsearch, Logstash, etc.)

### Outils de productivité
- **Metabase** — BI managée en add-on
- **Grist** — Tableur collaboratif managé
- **Keycloak** — IAM managé en add-on

### API et automatisation
- **API REST complète** — Documentation publique, tous les endpoints pour automatiser
- **CLI clever** — Gestion complète en ligne de commande
- **Webhooks** — Notifications d'événements de déploiement

## L'équipe et l'Histoire

- **2010** — Fondation de Clever Cloud à **Nantes** par **Quentin Adam** et son équipe. L'idée : simplifier le déploiement d'applications avec un PaaS automatisé, "You develop, we deploy"
- **2010-2015** — Développement du cœur de plateforme. Support initial de Java (le premier runtime), puis PHP, Node.js, Python, Ruby. Croissance organique avec les premières startups et PME françaises
- **2015-2018** — Extension du catalogue de runtimes (Go, Rust, Scala, Elixir). Lancement de Cellar (object storage S3-compatible). Développement d'outils open source : **Sōzu** (reverse proxy en Rust) et **Biscuit** (tokens d'autorisation)
- **2018-2020** — Obtention de la certification **ISO 27001**. Expansion des datacenters en France (7 sites). Premiers gros comptes : MAIF, Solocal. Passage à ~50 employés
- **2020-2023** — Certification **HDS** (Hébergeur de Données de Santé). Accès **SecNumCloud** via la zone Cloud Temple. Croissance accélérée post-Covid avec la demande de cloud souverain. Clients Airbus, Cegid, Docaposte, Manitou, Fairphone
- **2023-2025** — Lancement de **Clever AI** (plateforme IA unifiée). Extension internationale : datacenters à Londres, Varsovie, Singapour, Sydney, Dubaï. ~90 employés. CA estimé ~12M€
- **2026** — Plus de **40 produits** au catalogue. Positionnement renforcé sur la souveraineté numérique européenne

**Dirigeants** : Quentin Adam (PDG), Steven Le Roux (CTO), Cédric Biron (COO), Julien Durillon (VP Engineering), David Legrand (VP Products).

**Bureaux** : Nantes (siège), Paris, Lille, Lyon, Brest + politique de télétravail.

**Valeurs** : Open source, diversité, travail à distance, livraison continue. Clever Cloud contribue activement à l'écosystème open source avec Sōzu et Biscuit.

## Témoignages

> "Clever Cloud nous permet de nous concentrer sur notre métier d'assureur. L'infrastructure est gérée, sécurisée et conforme HDS." — **MAIF, client enterprise**

> "x3 d'activité absorbé sans effort grâce à l'auto-scaling." — **Retour client, site officiel Clever Cloud**

> "8x moins de temps pour lancer un produit en production." — **Retour client, site officiel Clever Cloud**

## Cas d'Usage Concrets

**Startup SaaS en lancement** : Tu as ton MVP en Node.js, tu veux le mettre en prod sans recruter un DevOps. Tu fais `git push clever main`, ton app est live en 2 minutes avec HTTPS, auto-scaling et monitoring. Tu commences avec les crédits gratuits et tu paies quelques euros par mois.

**Agence web avec 30 sites clients** : Chaque site est une app séparée dans Clever Cloud. Tu déploies un WordPress, un Astro, un Laravel et un Next.js sur la même plateforme. Les bases de données PostgreSQL et MySQL sont managées. Tu ne gères aucun serveur.

**Éditeur SaaS santé** : Tu dois héberger des données de santé en France avec certification HDS. Clever Cloud coche toutes les cases : HDS, ISO 27001, datacenters en France, RGPD natif. Tu te concentres sur ton produit, pas sur la conformité infrastructure.

**API backend Go ou Rust** : Tu as une API performante en Go ou Rust, tu veux la déployer sans Docker. Clever Cloud détecte le binaire, le build et le sert. Auto-scaling inclus, monitoring natif.

**Migration depuis Heroku** : Heroku a supprimé son plan gratuit et les prix ont explosé. Tu migres tes dynos vers Clever Cloud : même workflow git push, même philosophie PaaS, mais hébergé en France avec des certifications souveraines.

**Application métier PME** : Tu as une app interne en Java/Spring Boot utilisée par 200 collaborateurs. Clever Cloud gère le déploiement, les mises à jour de sécurité et la haute disponibilité. Tu ne recrutes pas de sysadmin.

**Projet open source** : Tu maintiens un projet open source et tu as besoin d'un hébergement fiable pour la démo et la documentation. Les crédits gratuits te permettent de démarrer, et la facturation à la seconde te coûte presque rien en dehors des pics.

## Points Forts

- PaaS 100% français — siège à Nantes, fondateurs français, 7 datacenters en France, fiscalité et emplois locaux
- Déploiement en git push — zéro configuration serveur, build et deploy automatiques pour 15+ langages
- Certifications souveraines — ISO 27001:2022, HDS, accès SecNumCloud. Rare pour un PaaS de cette taille
- Auto-scaling natif avec facturation à la seconde — tu paies ce que tu consommes réellement
- Infrastructure immutable et Zero Trust — sécurité by design, pas un patch après coup
- Open source actif — Sōzu (reverse proxy Rust) et Biscuit (tokens d'autorisation) sont des vrais projets maintenus
- Support de Rust, Go, Elixir, Haskell en natif — pas que du Node et du PHP comme la plupart des PaaS
- Pas de vendor lock-in — Git, S3, PostgreSQL standard. Tu migres en changeant un remote
- Clients référence — MAIF, Airbus, Cegid, Docaposte valident la fiabilité
- Équipe accessible — communauté active, devrel présent dans les conférences françaises

## Points Faibles

- Tarification opaque sur le site — pas de grille de prix claire affichée publiquement, il faut utiliser l'estimateur interactif ou contacter le commercial. Chez Scalingo ou Heroku, tu vois les prix en 10 secondes
- Moins de régions que les hyperscalers — 11 datacenters c'est bien, mais si tu as besoin de latence basse en Amérique du Sud ou en Afrique, c'est court
- Communauté plus petite qu'Heroku ou Vercel — moins de tutoriels tiers, moins de réponses sur Stack Overflow. La doc officielle est correcte mais pas aussi fournie que celle d'AWS
- Console web fonctionnelle mais austère — l'interface fait le job mais elle n'a pas le polish d'un Vercel ou d'un Railway. C'est de l'outil, pas du design
- Pas de CDN intégré — il faut coupler avec Cloudflare ou un autre CDN pour les assets statiques et la distribution géographique
- Scaling vertical limité — pour des charges très lourdes (gros compute, GPU), ce n'est pas le bon outil. Clever Cloud est un PaaS, pas un IaaS
- Marketplace d'add-ons moins large que chez les hyperscalers — les add-ons couvrent l'essentiel (bases de données, cache, stockage) mais tu ne trouveras pas 200+ services managés comme chez AWS
- SecNumCloud pas encore en propre — l'accès SecNumCloud passe par le partenariat avec Cloud Temple, pas par une certification directe de Clever Cloud
