---
section: blog
title: 'Google Dorking : Les Techniques de Recherche Avancées qui Changent Tout'
author: Diane
tags:
- Tech
description: Maîtrise Google Dorking pour dénicher des infos cachées et optimiser
  tes recherches en 10 minutes.
pubDate: '2024-03-25'
imgUrl: ../../../assets/astro.jpeg
---

Tu as déjà eu l'impression que Google te cachait quelque chose ? C'est souvent le cas. Le Google Dorking, c'est comme avoir les clés du back-office de Google : tu accèdes à des informations que 99% des gens ne trouvent jamais.

<!-- TODO: Image manquante - ![|200](google-dorking-concept.webp) -->

Je l'utilise quotidiennement pour ma veille concurrentielle, mes recherches techniques et même pour dénicher des ressources qui ne s'affichent pas dans les résultats classiques. Ça m'a fait économiser des heures de recherche et m'a permis de découvrir des pépites que mes concurrents avaient manquées.

## C'est quoi le Google Dorking ?

Le Google Dorking (ou Google Hacking) utilise des opérateurs spéciaux pour affiner tes recherches et trouver des informations spécifiques. C'est légal, gratuit, et incroyablement puissant une fois que tu as compris les bases.

L'intérêt ? Tu peux trouver des documents internes, des configurations, ou même des informations d'entreprise qui ne devraient pas être publiques. Pour la veille, c'est un game-changer absolu.

## Les Opérateurs Essentiels à Connaître

### Les Basics pour Commencer

**Guillemets pour la recherche exacte**

```
"rapport annuel 2023"
```

C'est la base, mais c'est crucial : tu cherches exactement cette phrase, pas les mots séparément.

**OR pour élargir ta recherche**

```
cybersécurité OR "cyber security"
```

Pratique quand un terme a plusieurs écritures ou que tu veux être exhaustif.

**Le moins pour exclure**

```
intelligence artificielle -chatgpt
```

Super utile quand tu veux filtrer les résultats trop génériques.

### Les Opérateurs Qui Font la Différence

**Recherche par site**

```
site:github.com python scraping
site:.gov cybersecurity
```

Tu peux limiter ta recherche à un domaine spécifique ou un type de site (.gov, .edu). C'est gold pour la veille.

**Recherche par type de fichier**

```
filetype:pdf "rapport financier"
filetype:xlsx budget
```

Les PDF, Excel et Word contiennent souvent des informations qui ne sont pas sur les pages web.

**Dans l'URL**

```
inurl:admin
inurl:login
inurl:config
```

Tu cherches des termes spécifiques dans l'URL, parfait pour trouver des pages d'administration ou des sections particulières.

## Techniques Avancées Pour les Pros

### Combiner les Opérateurs

C'est là que la magie opère. En combinant plusieurs opérateurs, tu crées des recherches ultra-précises :

```
site:exemple.com filetype:pdf intext:confidentiel
intitle:"index of" intext:backup
```

Ces combinaisons te permettent de trouver des documents confidentiels ou des sauvegardes exposées publiquement.

### Recherche de Vulnérabilités

Pour les audits de sécurité, ces dorks sont précieux :

```
inurl:wp-config.php
filetype:env "DB_PASSWORD"
filetype:sql password
```

Attention, ces informations doivent être utilisées de manière éthique et responsable. Signale toujours les vulnérabilités découvertes.

## GooFuzz : L'outil pour Automatiser Tout Ça

Manuellement, c'est puissant. Avec GooFuzz, c'est décuplé. Ce script Bash automatise les Google Dorks de manière efficace.

<!-- TODO: Image manquante - ![|150](goofuzz-tool.webp) -->

### Installation Rapide

```bash
git clone https://github.com/m3n0sd0n4ld/GooFuzz.git
cd GooFuzz
chmod +x GooFuzz
./GooFuzz -h
```

### Cas d'Usage Concrets

**Recherche de fichiers PDF sur un site**

```bash
./GooFuzz -t nasa.gov -e pdf,doc,bak
```

**Découverte de sous-domaines**

```bash
./GooFuzz -t site.com -s -p 10 -d 5 -o subdomains.txt
```

**Recherche de configurations sensibles**

```bash
./GooFuzz -t site.com -w config.php,admin,/images/
```

### Bonnes Pratiques avec GooFuzz

- Utilise des listes de mots ciblées
- Respecte les délais entre requêtes (-d option)
- Documente les découvertes importantes
- Signale les vulnérabilités trouvées

## Cas d'Usage Pour les Entrepreneurs

### Veille Concurrentielle Intelligente

```
site:linkedin.com "at CompanyName" "email"
filetype:pdf site:concurrent.com "stratégie 2024"
```

Tu peux trouver des employés clés, des documents stratégiques, ou des informations qui ne sont pas publiques.

### Recherche de Documents Techniques

```
filetype:pdf "api documentation" python
site:github.com "api key" -token
```

Parfait pour comprendre les technologies utilisées par tes concurrents ou trouver de la documentation technique.

## Moteurs de Recherche Spécialisés

Google n'est pas le seul. Pour des besoins spécifiques, ces moteurs peuvent t'être utiles.

### Pour le Code Source

**GitHub Code Search**

```
language:python "api_key"
filename:config.yml password
```

**Searchcode**

```
api_key language:python
database_password extension:php
```

### Pour l'Infrastructure

**Censys**

```
protocol=ssh country=FR
autonomous_system.name="OVH"
```

**ZoomEye**

```
app:"Nginx" country:FR
device:"Router" org:"Orange"
```

## Se Protéger du Dorking

Si tu géres un site web, il faut savoir te protéger :

1. **Configure robots.txt** pour limiter l'indexation
2. **Protège les répertoires sensibles** avec .htaccess
3. **Surveille les accès suspects** et audits ton exposition régulièrement
4. **Ne laisse jamais de fichiers de config en clair**

## Comment Commencer Aujourd'hui

Tu n'as pas besoin d'être expert pour commencer. Voici mon conseil :

1. Commence par les opérateurs simples (guillemets, filetype, site)
2. Teste sur tes propres sites pour voir ce qui est exposé
3. Crée un document avec tes dorks préférés
4. Automatise progressivement avec GooFuzz si tu en as besoin

Le Google Dorking est un outil puissant qui demande de la responsabilité. Utilise-le pour la veille, la recherche, ou l'audit de sécurité, mais toujours de manière éthique.

## Pour Aller Plus Loin

- [Google Hacking Database](https://www.exploit-db.com/google-hacking-database) - Base de dorks
- [GooFuzz sur GitHub](https://github.com/m3n0sd0n4ld/GooFuzz) - Script d'automatisation
- [Guide cybersécurité](/strategies/securite/cybersecurite) - Sécurité web
