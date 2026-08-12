---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Surveiller Que Son Site Reste En Ligne 24 4
author: Diane
description: 'Découvre Comment Surveiller Que Son Site Reste En Ligne 24 4 : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# MONITORING UPTIME : SOIS PREVENU AVANT TES CLIENTS

Ton site est tombe a 3h du matin et tu ne l'as decouvert qu'a 9h quand un client t'a envoye un message ? 6 heures de panne, c'est des ventes perdues et une image ecornee. Le monitoring uptime te previent en quelques minutes quand ton site tombe. Voici comment le mettre en place gratuitement.

## Comment ca marche

Un service de monitoring envoie une requete HTTP a ton site a intervalles reguliers (toutes les 1 a 5 minutes). Si le site ne repond pas, ou repond avec un code d'erreur (500, 502, 503...), tu recois une alerte immediatement par email, SMS, Slack ou Discord.

## Les outils gratuits

### UptimeRobot -- Le plus populaire

[UptimeRobot](https://uptimerobot.com/) est le standard du monitoring gratuit.

**Plan gratuit (2025)** :
- 50 moniteurs (un des plans gratuits les plus genereux du marche)
- Verification toutes les 5 minutes
- Alertes par email
- Page de statut publique
- Monitoring SSL et domaine inclus

**Plans payants** : Solo a 7 USD/mois (verification toutes les 1 min, SMS, 10-50 moniteurs), Team a 28 USD/mois (100 moniteurs, 10 utilisateurs), Enterprise a 48 USD/mois (200 moniteurs, maintenance windows).

**Configuration** :
1. Cree un compte sur uptimerobot.com
2. Clique sur **"Add New Monitor"**
3. Choisis le type : **HTTP(s)** pour un site web
4. Entre l'URL a surveiller (ex : `https://tonsite.com`)
5. Definis l'intervalle : 5 minutes (gratuit) ou 1 minute (pro)
6. Configure les alertes : email par defaut, ajoute Slack/Discord si besoin
7. Repete pour chaque page importante (accueil, page de vente, API, checkout)

**Astuce** : surveille aussi tes pages specifiques (pas juste la page d'accueil). Ton accueil peut fonctionner alors que ta page de paiement est en panne.

### HetrixTools -- Le plus genereux

[HetrixTools](https://hetrixtools.com/) offre un monitoring tres complet en gratuit.

**Plan gratuit (2025)** :
- 15 moniteurs uptime + 15 moniteurs serveur
- Verification toutes les **1 minute** (mieux qu'UptimeRobot gratuit)
- Alertes par email, Slack, Discord, Telegram, Microsoft Teams, PagerDuty, OpsGenie, webhook
- Page de statut publique illimitee
- Monitoring de certificat SSL (authenticite + expiration)
- Monitoring blacklist (verifie que ton IP n'est pas sur les listes noires type Spamhaus, Barracuda...)
- Monitoring d'expiration de domaine + changement de nameservers
- Diagnostics reseau en cas de panne (ping, MTR)
- Historique d'uptime illimite

**Plans payants** : Pro a 9,95 USD/mois (30 moniteurs, 6 localisations), Business a 19,95 USD/mois (60 moniteurs), Enterprise a 49,95 USD/mois (200 moniteurs).

**Configuration** :
1. Cree un compte sur hetrixtools.com
2. Va dans **Uptime Monitors > Add Monitor**
3. Choisis le protocole (HTTP, HTTPS, Ping, Port)
4. Entre l'URL et configure les alertes
5. Active le **SSL monitoring** pour etre prevenu 30 jours avant l'expiration de ton certificat

### StatusCake -- L'alternative britannique

[StatusCake](https://www.statuscake.com/) propose aussi un plan gratuit solide.

**Plan gratuit (2025)** :
- 10 moniteurs uptime
- Verification toutes les 5 minutes
- Alertes par email
- Tests depuis plusieurs localisations dans le monde
- Monitoring SSL, domaine et vitesse de page inclus
- Plan gratuit "a vie" (StatusCake s'engage a ne jamais le supprimer)

### Better Stack (ex-Better Uptime) -- Le plus design

[Better Stack](https://betterstack.com/) combine monitoring, logs et pages de statut dans une interface moderne.

**Plan gratuit (2025)** :
- 10 moniteurs
- Verification toutes les 3 minutes
- Page de statut publique stylisee (parmi les plus belles du marche)
- Alertes par email + push
- Combine monitoring + logs + incidents dans une seule interface

## Que surveiller exactement ?

Ne te contente pas de surveiller ta page d'accueil. Voici la liste complete :

| Element | URL a surveiller | Pourquoi |
|---------|-----------------|----------|
| Page d'accueil | `https://tonsite.com` | La base |
| Page de vente | `https://tonsite.com/offre` | C'est la que tu fais ton CA |
| Checkout/Paiement | `https://tonsite.com/checkout` | Si cette page tombe, tu perds de l'argent |
| API | `https://api.tonsite.com/health` | Si tu as une appli ou un SaaS |
| Certificat SSL | Moniteur SSL dedié | Etre prevenu avant l'expiration |
| Domaine | Moniteur d'expiration | Eviter que ton domaine expire par oubli |

## Configurer les alertes intelligemment

### Multi-canal

Configure au moins 2 canaux d'alerte :
1. **Email** : le minimum
2. **Slack ou Discord** : pour toi et ton equipe
3. **SMS** (si dispo sur ton plan) : pour les urgences critiques

### Eviter les faux positifs

- Configure un **delai de confirmation** : l'outil reteste 2-3 fois avant d'envoyer l'alerte. Ca evite les fausses alertes causees par un timeout passager
- **Teste depuis plusieurs localisations** : si le site est down uniquement depuis un datacenter, c'est peut-etre un probleme reseau local, pas une panne reelle
- **Definis les heures de notification** : pas besoin d'un SMS a 3h du matin si tu ne peux rien faire. Configure une alerte email la nuit et SMS le jour

## Creer une page de statut publique

Tous les outils ci-dessus permettent de creer une page de statut (ex : `status.tonsite.com`). Pourquoi en avoir une :

- **Transparence** : tes clients voient eux-memes si un probleme est en cours
- **Moins de tickets support** : au lieu de te contacter, ils consultent la page de statut
- **Historique d'uptime** : montre que ton service est fiable (99.9%+ uptime)

**Configuration UptimeRobot** :
1. Va dans **"My Settings" > "Public Status Pages"**
2. Cree une nouvelle page
3. Selectionne les moniteurs a afficher
4. Personnalise le domaine (CNAME vers ton sous-domaine)

## Que faire quand tu recois une alerte

1. **Verifie manuellement** -- ouvre le site dans ton navigateur pour confirmer
2. **Check les logs** -- `tail -100 /var/log/nginx/error.log` ou le dashboard de ton hebergeur
3. **Redemarre si necessaire** -- souvent un simple restart du serveur web ou de l'appli resout le probleme
4. **Communique** -- mets a jour ta page de statut et previens tes clients si l'interruption est longue
5. **Post-mortem** -- apres resolution, note ce qui s'est passe et comment eviter que ca se reproduise

## Ce qu'il faut retenir

Le monitoring uptime est non-negociable des que ton site genere du revenu. UptimeRobot (gratuit, 50 moniteurs) ou HetrixTools (gratuit, verification toutes les minutes) te couvrent largement. Surveille au minimum : page d'accueil, page de vente, checkout, certificat SSL. Configure 2 canaux d'alertes et cree une page de statut publique. Ca prend 15 minutes a mettre en place et ca t'evite des heures de panique.
