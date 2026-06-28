---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Envoyer des emails depuis WordPress sans finir en spam
author: Diane
description: Configure un vrai envoi SMTP ou API depuis WordPress pour fiabiliser les emails transactionnels et éviter les pertes silencieuses.
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Par défaut, WordPress envoie souvent mal les emails sur les hébergements classiques. Résultat : formulaires perdus, resets de mot de passe jamais reçus, notifications dans les spams.

## La bonne logique

WordPress doit déclencher l’envoi. Un vrai service doit l’acheminer.

Tu peux passer par :

- un service SMTP ;
- une API d’email transactionnel ;
- parfois le SMTP de l’hébergeur, mais ce n’est pas le plus solide.

## Ce qu’il faut configurer

- adresse expéditrice propre ;
- SPF ;
- DKIM ;
- idéalement DMARC ;
- plugin de log ou de test.

## Ce qu’il faut tester

- formulaire de contact ;
- reset de mot de passe ;
- email de commande ;
- email d’inscription si tu as un espace membre.

## Ce qu’il faut éviter

- laisser l’envoi natif sans vérification ;
- utiliser plusieurs expéditeurs incohérents ;
- oublier les réglages DNS ;
- ne jamais contrôler les erreurs d’envoi.

Le plus gros problème des emails WordPress, c’est qu’ils peuvent rater en silence. Il faut donc rendre l’envoi visible, testable et fiable.
