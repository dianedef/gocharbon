---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Savoir Si Un Site A Un Probleme
author: Diane
description: 'Découvre Comment Savoir Si Un Site A Un Probleme : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# DIAGNOSTIC SITE WEB : TON SITE EST-IL VRAIMENT EN PANNE ?

Ton site ne repond plus. Avant de paniquer et d'appeler ton hebergeur a 2h du matin, verifie d'abord : est-ce que c'est ton site qui a un probleme, ou est-ce que c'est ta connexion ? Voici comment diagnostiquer rapidement la situation.

## Etape 1 : Verifie si c'est toi ou le site

### Downdetector -- Le reflexe numero 1

[Downdetector](https://downdetector.fr/) agrege les signalements d'utilisateurs en temps reel. Si beaucoup de gens signalent un probleme au meme moment, c'est le site qui est en panne -- pas ta connexion.

1. Va sur [downdetector.fr](https://downdetector.fr/)
2. Tape le nom du service (Gmail, OVH, Shopify, etc.)
3. Regarde le graphique : un pic de signalements = panne confirmee
4. Lis les commentaires pour savoir quel aspect est touche (site complet, API, DNS...)

### IsItDownRightNow

[isitdownrightnow.com](https://www.isitdownrightnow.com/) teste l'URL depuis ses propres serveurs :

1. Entre ton URL
2. L'outil te dit si le site repond ou non depuis ses serveurs
3. Si le site repond pour eux mais pas pour toi = probleme de ton cote (DNS, FAI, cache)

### Le test depuis un autre appareil

Le diagnostic le plus simple :
- Teste depuis ton **telephone en 4G/5G** (pas en WiFi) -- ca elimine les problemes de connexion locale
- Demande a un ami de tester depuis chez lui
- Utilise un **VPN** pour tester depuis un autre pays

## Etape 2 : Diagnostique le type de probleme

### Ping -- Le site repond-il ?

Ouvre un terminal (ou CMD sur Windows) :

```bash
ping tonsite.com
```

- **Reponse normale** : `64 bytes from... time=25ms` = le serveur repond, le probleme est ailleurs (serveur web, application)
- **Request timeout** : le serveur ne repond pas du tout = panne serveur ou DNS
- **Unknown host** : probleme DNS (le nom de domaine ne se resout pas)

### Curl -- Le serveur web repond-il ?

```bash
curl -I https://tonsite.com
```

Tu obtiens le code de reponse HTTP :
- **200** : tout va bien
- **301/302** : redirection (normal si c'est voulu)
- **403** : acces interdit (probleme de permissions)
- **500** : erreur serveur interne (code ou config casse)
- **502** : bad gateway (le proxy/load balancer ne peut pas joindre le serveur)
- **503** : service indisponible (surcharge ou maintenance)
- **522/524** : timeout Cloudflare (le serveur d'origine ne repond pas)

### DNS -- Le domaine se resout-il ?

```bash
nslookup tonsite.com
```

Si ca ne retourne pas d'adresse IP : ton domaine a un probleme DNS. Verifie que tes enregistrements DNS sont corrects chez ton registrar.

## Etape 3 : Les pages de statut officielles

La plupart des services ont une page de statut. Consulte-la avant de contacter le support :

| Service | Page de statut |
|---------|---------------|
| OVH | [status.ovhcloud.com](https://status.ovhcloud.com/) |
| AWS | [health.aws.amazon.com](https://health.aws.amazon.com/health/status) |
| Cloudflare | [cloudflarestatus.com](https://www.cloudflarestatus.com/) |
| Shopify | [status.shopify.com](https://www.status.shopify.com/) |
| Google Cloud | [status.cloud.google.com](https://status.cloud.google.com/) |
| Vercel | [vercel-status.com](https://www.vercel-status.com/) |

## Etape 4 : Verifie les logs

Si tu as acces a ton serveur, les logs te diront exactement ce qui se passe :

### Logs Apache
```bash
tail -100 /var/log/apache2/error.log
```

### Logs Nginx
```bash
tail -100 /var/log/nginx/error.log
```

### Logs PHP (WordPress)
Active le debug dans `wp-config.php` :
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```
Les erreurs apparaitront dans `wp-content/debug.log`.

## Etape 5 : Les causes les plus frequentes

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| Page blanche | Erreur PHP fatale | Regarde les logs, desactive le dernier plugin installe |
| Erreur 500 | Fichier .htaccess corrompu | Renomme .htaccess et recharge |
| Erreur 503 | Surcharge serveur | Attends ou upgrade ton hebergement |
| Site tres lent | Base de donnees surchargee | Optimise ou redemarre MySQL |
| "Connection timed out" | Serveur plante ou attaque DDoS | Contacte ton hebergeur |
| Certificat SSL expire | Cert Let's Encrypt non renouvele | Renouvelle le certificat |

## Mettre en place un monitoring (pour ne plus etre surpris)

Ne decouvre pas que ton site est en panne quand un client te le dit. Mets en place un monitoring automatique :

- **[UptimeRobot](https://uptimerobot.com/)** (gratuit) : 50 moniteurs, verifie toutes les 5 minutes, alerte par email. Plans Pro a partir de 7 USD/mois pour 1 minute d'intervalle et SMS/Slack/Discord
- **[HetrixTools](https://hetrixtools.com/)** (gratuit) : 15 moniteurs gratuits, verification toutes les **1 minute**, alertes email/Slack/Discord/Telegram/webhook. Plans Pro a 9,95 USD/mois (30 moniteurs). Inclut aussi monitoring SSL, blacklist et expiration de domaine
- **[StatusCake](https://www.statuscake.com/)** (gratuit) : 10 tests uptime, intervalle de 5 min, monitoring SSL/domaine/vitesse de page. Plan gratuit a vie
- **[Better Stack](https://betterstack.com/)** (ex-Better Uptime) : 10 moniteurs gratuits, verification toutes les 3 minutes, page de statut design

Configure au minimum : une alerte email + une alerte Slack/Discord pour tes pages critiques (accueil, page de vente, checkout).

## Les codes d'erreur HTTP a connaitre

| Code | Signification | Ce que ca veut dire en pratique |
|------|--------------|-------------------------------|
| **200** | OK | Tout va bien |
| **301** | Redirection permanente | L'URL a change definitivement |
| **302** | Redirection temporaire | Redirection provisoire |
| **403** | Interdit | Probleme de permissions serveur |
| **404** | Page non trouvee | L'URL n'existe pas ou plus |
| **429** | Trop de requetes | Le serveur est surcharge de requetes |
| **500** | Erreur serveur interne | Bug dans le code ou la config |
| **502** | Bad Gateway | Le proxy ne peut pas joindre le serveur |
| **503** | Service indisponible | Maintenance ou surcharge |
| **522/524** | Timeout Cloudflare | Le serveur d'origine ne repond pas |

## Ce qu'il faut retenir

Quand ton site semble en panne : 1) teste depuis un autre appareil/connexion, 2) verifie Downdetector et la page de statut de ton hebergeur, 3) utilise ping/curl pour diagnostiquer le type d'erreur, 4) consulte les logs serveur. Et surtout, mets en place un monitoring automatique pour etre prevenu avant tes clients.
