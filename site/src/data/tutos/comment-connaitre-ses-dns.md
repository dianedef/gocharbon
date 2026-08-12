---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Connaitre Ses Dns
author: Diane
description: 'Découvre Comment Connaitre Ses Dns : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment connaitre et verifier les DNS de ton domaine

Les DNS (Domain Name System), c'est le systeme qui traduit ton nom de domaine (example.com) en adresse IP (93.184.216.34). Si tes DNS sont mal configures, ton site peut etre inaccessible, tes emails peuvent ne pas arriver, et tes sous-domaines ne fonctionnent pas.

Voici comment verifier tes DNS et comprendre ce que tu vois.

## Les types d'enregistrements DNS a connaitre

Avant de plonger dans les outils, voici les enregistrements essentiels :

| Type | Fonction | Exemple |
|------|----------|---------|
| **A** | Pointe ton domaine vers une adresse IPv4 | example.com -> 93.184.216.34 |
| **AAAA** | Pointe vers une adresse IPv6 | example.com -> 2606:2800:220:1:... |
| **CNAME** | Alias qui pointe vers un autre domaine | www.example.com -> example.com |
| **MX** | Serveurs de messagerie (emails) | example.com -> mail.google.com |
| **TXT** | Texte libre (verification, SPF, DKIM) | "v=spf1 include:_spf.google.com" |
| **NS** | Serveurs de noms (qui gere tes DNS) | ns1.exemple-hebergeur.com |
| **SOA** | Informations d'autorite de la zone | Admin, serial, refresh |

## Methode 1 : DNSDumpster (gratuit, visuel)

DNSDumpster ([dnsdumpster.com](https://dnsdumpster.com)) est un outil gratuit developpe par HackerTarget qui cartographie toutes les informations DNS d'un domaine.

1. Va sur dnsdumpster.com
2. Entre ton nom de domaine
3. Tu obtiens : les enregistrements A, MX, TXT, les sous-domaines detectes, et meme une carte visuelle de ton infrastructure DNS

**Avantage** : il detecte aussi les sous-domaines que tu aurais oublies via des techniques de reconnaissance passive (sans interroger directement tes serveurs). Tres utile pour un audit de securite. La carte visuelle te montre les relations entre tes sous-domaines, tes serveurs et tes fournisseurs tiers.

## Methode 2 : MXToolbox (la reference)

MXToolbox ([mxtoolbox.com](https://mxtoolbox.com)) est l'outil standard pour diagnostiquer les DNS, surtout pour les emails. Utilise par des millions d'administrateurs systeme dans le monde.

1. Va sur mxtoolbox.com
2. Entre ton domaine
3. Selectionne le type de verification : DNS Lookup, MX Lookup, SPF Record, DKIM, Blacklist Check, DMARC

**Ce que tu peux verifier** :
- Si tes enregistrements MX pointent vers les bons serveurs mail
- Si ton SPF est correctement configure (anti-spam)
- Si ton DKIM est valide (authentification des emails)
- Si ton DMARC est configure (politique d'authentification des emails)
- Si ton domaine est blackliste (verification sur 100+ listes noires simultanement)
- Le TTL, la propagation et la coherence de tes enregistrements

**Outils bonus de MXToolbox** : SuperTool (analyse complete en un clic), Email Health Report (rapport detaille gratuit sur la sante de tes emails), monitoring continu (payant).

## Methode 3 : Ligne de commande (nslookup et dig)

Si tu es a l'aise avec le terminal, c'est la methode la plus rapide.

### Avec nslookup (Windows, Mac, Linux)

```bash
# Verifier l'enregistrement A
nslookup example.com

# Verifier les serveurs mail (MX)
nslookup -type=mx example.com

# Verifier les enregistrements TXT (SPF, DKIM)
nslookup -type=txt example.com

# Verifier les serveurs de noms (NS)
nslookup -type=ns example.com
```

### Avec dig (Mac, Linux)

```bash
# Tous les enregistrements
dig example.com ANY

# Enregistrement A
dig example.com A

# Enregistrement MX
dig example.com MX

# Enregistrement TXT
dig example.com TXT

# Utiliser un serveur DNS specifique (Google)
dig @8.8.8.8 example.com
```

**Astuce** : utilise `dig @8.8.8.8` pour verifier ce que voit Google, et `dig @1.1.1.1` pour ce que voit Cloudflare. Si les resultats different, tes DNS sont probablement en cours de propagation.

## Methode 4 : Outils en ligne supplementaires

- **WhatsMyDNS.net** : verifie la propagation DNS depuis plusieurs serveurs dans le monde. Ideal quand tu viens de modifier tes DNS et que tu veux savoir si le changement est pris en compte partout
- **IntoDNS.com** : analyse complete de ta zone DNS avec des recommandations
- **DNSChecker.org** : verification rapide depuis 20+ localisations mondiales

## Comment lire les resultats

### Enregistrement A

```
example.com.    300    IN    A    93.184.216.34
```

- `300` = TTL (Time To Live) en secondes. C'est la duree pendant laquelle le resultat est mis en cache
- `A` = type d'enregistrement
- `93.184.216.34` = l'adresse IP de ton serveur

### Enregistrement MX

```
example.com.    300    IN    MX    10 mail.example.com.
```

- `10` = priorite (plus le chiffre est bas, plus le serveur est prioritaire)
- `mail.example.com` = le serveur qui recoit tes emails

### Enregistrement TXT (SPF)

```
example.com.    300    IN    TXT    "v=spf1 include:_spf.google.com ~all"
```

- `v=spf1` = c'est un enregistrement SPF
- `include:_spf.google.com` = autorise les serveurs Google a envoyer des emails pour ton domaine
- `~all` = soft fail pour tout le reste (les emails non autorises arrivent en spam, pas bloques)

## Diagnostic des problemes courants

### Mon site ne s'affiche pas

1. Verifie l'enregistrement A : pointe-t-il vers la bonne IP ?
2. Verifie le CNAME pour www : `www.example.com` doit pointer vers `example.com`
3. Verifie la propagation sur whatsmydns.net

### Mes emails n'arrivent pas

1. Verifie les enregistrements MX : pointent-ils vers ton fournisseur email ?
2. Verifie le SPF : ton fournisseur est-il autorise ?
3. Verifie le DKIM : l'enregistrement TXT est-il present et correct ?
4. Verifie le DMARC : `_dmarc.example.com` doit avoir un enregistrement TXT

### Mon sous-domaine ne fonctionne pas

1. Verifie qu'il existe un enregistrement A ou CNAME pour le sous-domaine
2. Verifie que le SSL couvre le sous-domaine (wildcard ou certificat dedie)

## Ou modifier tes DNS

Tes DNS se gerent chez ton registrar (l'endroit ou tu as achete ton domaine) ou chez ton hebergeur si tu as delegue la gestion DNS :

- **OVH** : Espace client > Domaines > Zone DNS
- **Cloudflare** : Dashboard > DNS (interface tres rapide, propagation quasi-instantanee)
- **Squarespace Domains** (ex-Google Domains, transfere en 2023) : Domains > DNS Settings
- **Gandi** : Domaines > DNS Records
- **Infomaniak** : Manager > Domaines > Zone DNS

**Astuce** : apres toute modification, attends 24 a 48 heures pour la propagation complete. En pratique, c'est souvent plus rapide (quelques minutes a quelques heures), mais certains FAI ont des caches agressifs.

## Ce qu'il faut retenir

Connaitre tes DNS, c'est la base pour diagnostiquer n'importe quel probleme de site ou d'email. Garde les outils DNSDumpster et MXToolbox en favoris. Et quand tu changes d'hebergeur ou de fournisseur email, verifie toujours tes DNS avant et apres la migration.
