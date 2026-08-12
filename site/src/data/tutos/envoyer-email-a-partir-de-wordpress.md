---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Envoyer Email A Partir De Wordpress
author: Diane
description: 'Configurer l’envoi d’emails depuis WordPress avec SMTP: délivrabilité, sécurité, tests et checklist anti-spam.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Envoyer des emails depuis WordPress (proprement)

Par défaut, WordPress envoie mal les emails sur beaucoup d'hébergements.
Résultat: mails dans les spams, formulaires perdus, clients frustrés.

La solution simple: passer par **SMTP** (un service d'envoi d'emails fiable).

## Ce que tu vas obtenir

- confirmations de formulaire qui arrivent,
- emails transactionnels plus fiables,
- meilleure délivrabilité,
- suivi des erreurs d'envoi.

## Étape 1 - Choisis un service SMTP

Tu peux utiliser:
- Brevo (ex-Sendinblue),
- Mailgun,
- Amazon SES,
- SMTP de ton hébergeur (moins recommandé pour gros volumes).

Critères de choix:
- facilité de configuration,
- quota mensuel,
- coût,
- support DNS (SPF, DKIM, DMARC).

## Étape 2 - Installe un plugin SMTP

Exemple courant: WP Mail SMTP.

Réglages minimum:
- adresse expéditeur fixe,
- nom expéditeur cohérent,
- mode SMTP/API configuré,
- test d'envoi validé.

## Étape 3 - Configure ton domaine email

Pour éviter le spam, configure:
- **SPF** (qui a le droit d'envoyer pour ton domaine),
- **DKIM** (signature cryptographique),
- **DMARC** (politique anti-usurpation).

Ces réglages se font dans ta zone DNS.

## Étape 4 - Teste les emails importants

Teste au minimum:
- formulaire de contact,
- reset mot de passe,
- confirmation de commande (si e-commerce),
- emails automatiques plugin (newsletter, membership, etc.).

Vérifie sur Gmail, Outlook et mobile.

## Étape 5 - Mets en place une routine qualité

Chaque mois:
- vérifie les logs d'erreurs,
- valide que SPF/DKIM/DMARC sont toujours corrects,
- contrôle ton taux de spam,
- nettoie les adresses invalides.

## Bonnes pratiques

- Utilise une adresse pro (pas une adresse générique gratuite).
- Évite les objets trop agressifs ou trompeurs.
- Ne mets pas uniquement une image dans l'email.
- Ajoute un lien de désabonnement pour les emails marketing.

## Erreurs fréquentes

- Configurer SMTP mais oublier DNS.
- Envoyer en masse depuis un domaine neuf sans "warm-up".
- Mélanger emails transactionnels et marketing sans segmentation.
- Ne jamais surveiller les logs.

## Checklist rapide

- [ ] Plugin SMTP installé
- [ ] SMTP/API connecté
- [ ] SPF, DKIM, DMARC actifs
- [ ] Tests multi-boîtes validés
- [ ] Logs d'envoi consultables

## Ressources utiles

- [Guide complet WP Mail SMTP](https://wpmailsmtp.com/docs/a-complete-guide-to-wp-mail-smtp-mailers/)
- [Configurer Brevo avec WP Mail SMTP](https://wpmailsmtp.com/docs/how-to-set-up-the-sendinblue-mailer-in-wp-mail-smtp#DNS-records)
- [Pourquoi éviter l'envoi natif WordPress](https://www.mailpoet.com/blog/send-email-with-wordpress/)
- [Configurer SMTP sans plugin](https://www.julesgaston.fr/configurer-un-smtp-sur-wordpress-sans-plugin/)
- [Tutoriel vidéo rapide](https://www.youtube.com/watch?v=-6sqPVQNYGE)

## Ressources utiles pour continuer

### Lectures liées

- [Comment faire de l'automatisation marketing](/tutos/comment-faire-de-lautomatisation-marketing)
- [Créer une liste email B2B pour la prospection](/tutos/comment-creer-une-liste-email-pour-de-la)

### Outils et stratégies complémentaires

- [Stratégie email: plan clair pour démarrer](/marketing/email/strategie)
- [Automatisation email: scénarios essentiels](/marketing/email/automation)

## Checklist express

- [ ] Choisis un objectif unique pour cette étape.
- [ ] Lance une première action test à petite échelle.
- [ ] Mesure le résultat après 7 jours.
- [ ] Ajuste avant de passer à l'échelle.
