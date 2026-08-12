---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Déployer Un Serveur
author: Diane
description: 'Déployer un serveur sans stress: choix de l’hébergement, configuration minimale, sécurité, sauvegardes et mise en ligne.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Déployer un serveur (version simple)

Tu veux mettre en ligne une app, un site ou un outil interne.

Objectif: déployer vite, sans te créer une dette technique énorme.

## Quel type d'hébergement choisir

### Option 1 - PaaS (recommandé débutant)
Un PaaS (Platform as a Service) gère une partie de l'infra pour toi.

Exemples: OpenMVPBox, Render, Railway, Fly.io.

Avantages:
- rapide à lancer,
- moins d'admin système,
- bon pour MVP.

### Option 2 - VPS
Tu as plus de contrôle, mais plus de responsabilité.

Exemples: Hetzner, OVH, Scaleway.

Avantages:
- flexible,
- coût parfois plus bas à long terme.

Limites:
- sécurité et maintenance à gérer.

## Stack minimale pour démarrer

- 1 serveur app
- 1 base de données
- HTTPS (certificat SSL)
- sauvegarde quotidienne
- monitoring basique (uptime + erreurs)

Pas besoin de Kubernetes au début.

## Étapes de déploiement

## Étape 1 - Prépare ton projet

- Variables d'environnement séparées (dev / prod)
- Commande de build propre
- Script de démarrage reproductible

## Étape 2 - Configure ton serveur

- Utilisateur non-root
- Pare-feu actif
- SSH avec clé (pas mot de passe)
- Mises à jour de sécurité

## Étape 3 - Branche ton domaine

- Configure DNS (A/AAAA/CNAME)
- Ajoute HTTPS
- Force la redirection HTTP -> HTTPS

## Étape 4 - Déploie

- Déploie une première version stable
- Vérifie les logs
- Teste les parcours clés côté utilisateur

## Étape 5 - Mets en place les garde-fous

- Sauvegardes automatiques
- Alertes de disponibilité
- Page de statut (même simple)

## Sécurité minimum obligatoire

- Ne stocke jamais de secrets dans le code.
- Limite les ports ouverts.
- Active la rotation des logs.
- Mets en place un plan de restauration.

## Coûts indicatifs (MVP)

- Hébergement app: 5 à 30 EUR/mois
- Base de données: 0 à 20 EUR/mois
- Domaine: 10 à 20 EUR/an
- Monitoring: gratuit à 20 EUR/mois

## Erreurs fréquentes

- Déployer sans sauvegarde.
- Oublier HTTPS.
- Ne pas avoir de procédure rollback.
- Avoir une config qui marche "chez moi" mais pas en prod.

## Checklist avant mise en ligne

- [ ] Domaine configuré
- [ ] HTTPS actif
- [ ] Variables d'env séparées
- [ ] Sauvegarde testée
- [ ] Logs consultables
- [ ] Alerte uptime active

## Ressources utiles

- [OpenMVPBox](https://omvpb.ovh/)
- [Présentation OpenMVPBox](https://www.youtube.com/watch?v=O8VA_UUYpuQ)
- [Discussion PaaS no-code/self-host](https://www.growthhacking.fr/t/paas-n8n-ghost-discourse-mautic-installation-en-1-click/25058/10)

Tu veux que je te fasse une version "déploiement en 60 minutes" avec commandes concrètes (PaaS et VPS) ?
