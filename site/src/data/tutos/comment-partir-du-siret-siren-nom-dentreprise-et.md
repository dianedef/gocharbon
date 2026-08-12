---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Partir Du Siret  Siren  Nom D'Entreprise Et En Recueillir L'Url Le
  Nom De Domaine Une Adresse Email
author: Diane
description: "Trouve le site web et l'email d'une entreprise a partir de son SIRET, SIREN ou nom. Pappers, Societe.com, Hunter.io et APIs."
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# ENRICHISSEMENT B2B : DU SIRET AU SITE WEB EN QUELQUES CLICS

Tu as une liste de SIRET, SIREN ou noms d'entreprises et tu veux retrouver leur site web, email de contact ou nom de domaine ? C'est un cas classique de prospection B2B. Voici les methodes qui fonctionnent, de la plus simple a la plus avancee.

## Methode 1 : Pappers -- La base gratuite officielle

[Pappers](https://www.pappers.fr/) agrege les donnees publiques des entreprises francaises (registre du commerce, INSEE, BODACC).

### Comment faire

1. Va sur [pappers.fr](https://www.pappers.fr/)
2. Tape le SIRET, SIREN ou le nom de l'entreprise dans la barre de recherche
3. Sur la fiche entreprise, tu trouves : raison sociale, adresse, dirigeants, et parfois le site web

### Avec l'API Pappers (pour du volume)

```
GET https://api.pappers.fr/v2/entreprise?siret=12345678901234&api_token=TON_TOKEN
```

La reponse JSON contient le champ `site_web` quand il est renseigne.

**Prix API Pappers (2025)** : Pappers a revolutionne l'acces aux donnees d'entreprise en France depuis 2020 en rendant gratuites les donnees publiques (SIRET, Kbis, comptes annuels). La consultation sur pappers.fr est gratuite et illimitee. L'API propose :
- **Gratuit** : requetes limitees (usage ponctuel)
- **Plans payants** : a partir de 49 EUR/mois pour un usage regulier en volume
- Disponibilite de l'API a 99,99% selon Pappers
- Couverture internationale via [pappers.in](https://www.pappers.in/) pour les donnees d'entreprise en Europe (France, Allemagne, Espagne, Italie, UK, Pays-Bas, Suisse, Luxembourg)
- Documentation complete : [pappers.fr/api/documentation](https://www.pappers.fr/api/documentation)

**Limite** : le site web n'est pas toujours renseigne dans les bases officielles. Environ 30-40% des entreprises l'ont.

## Methode 2 : Societe.com -- Le complement

1. Va sur [societe.com](https://www.societe.com/)
2. Recherche par SIRET ou nom d'entreprise
3. La fiche affiche parfois le site web et des informations de contact supplementaires

**Astuce** : Societe.com a parfois des infos que Pappers n'a pas, et inversement. Croise les deux sources.

## Methode 3 : Enrichissement automatique avec des outils dedies

Quand tu as une liste de 100+ entreprises, la recherche manuelle ne suffit plus. Voici les outils qui automatisent le processus.

### Dropcontact -- Enrichissement email B2B

1. Prepare un fichier CSV avec tes SIRET ou noms d'entreprises
2. Uploade sur [Dropcontact](https://www.dropcontact.com/)
3. Dropcontact retrouve : site web, emails professionnels, numeros de telephone
4. Exporte le fichier enrichi

**Prix (2025)** : Dropcontact a revu son modele tarifaire. Les plans fonctionnent desormais par credits :
- **Starter** : a partir de 79 EUR/mois pour 500 credits (enrichissement email B2B, validation native, verification catch-all)
- **Growth** : fonctionnalites supplementaires, integrations CRM avancees
- Tous les plans incluent : API et MCP, add-on Google Sheets, 100% conforme RGPD
- Pay on success : tu n'es facture que pour les enrichissements reussis
- Dropcontact se positionne comme un "email finder qui surpasse les waterfalls" -- il combine 20+ sources de donnees en interne

Conforme RGPD (pas de base de donnees statique, recherche en temps reel).

### Hunter.io -- Du domaine a l'email

Si tu as deja le nom de domaine, [Hunter.io](https://hunter.io/) retrouve les adresses email associees :
1. Entre le domaine (exemple : entreprise.fr)
2. Hunter affiche les emails publiquement disponibles et leur score de fiabilite
3. Utilise le verificateur pour confirmer que l'email est valide avant d'envoyer

**Prix (2025)** :
- **Free** : 25 recherches email + 50 verifications/mois, 1 compte email pour les campagnes
- **Starter** : 49 USD/mois (34 USD/mois en annuel) -- 500 recherches/mois, auto-verification, enrichissement de leads, jusqu'a 3 comptes email
- **Growth** : 149 USD/mois (104 USD/mois en annuel) -- 5 000 recherches/mois, 10 comptes email
- **Scale** : 299 USD/mois (209 USD/mois en annuel) -- 10 000 recherches/mois, 20 comptes email
- Precision annoncee : environ 95%. Extension Chrome, add-on Google Sheets, API disponibles.

### Kaspr -- Enrichissement LinkedIn

Si tu as le profil LinkedIn du dirigeant :
1. Installe l'extension Chrome [Kaspr](https://www.kaspr.io/)
2. Visite le profil LinkedIn
3. Kaspr affiche l'email pro et le numero de telephone

## Methode 4 : Le scraping Google (methode manuelle rapide)

Pour retrouver le site web d'une entreprise a partir de son nom :

1. Tape dans Google : `"NOM EXACT DE L'ENTREPRISE" site web`
2. Ou : `"SIRET 12345678901234"`
3. Le premier resultat est souvent le site officiel ou la fiche Pappers/Societe.com

**Pour automatiser** : utilise Google Sheets + la formule `=IMPORTXML()` ou un script Google Apps Script qui fait la recherche pour chaque ligne.

## Methode 5 : L'API INSEE (donnees officielles)

L'API Sirene de l'INSEE est la source officielle gratuite :

```
GET https://api.insee.fr/entreprises/sirene/V3.11/siret/12345678901234
```

Elle donne la raison sociale, l'adresse, le code NAF, la date de creation. Mais **pas le site web ni l'email** -- il faut croiser avec d'autres sources.

**Inscription** : gratuite sur [api.insee.fr](https://api.insee.fr/), limitee a 30 requetes/minute.

## Workflow complet recommande

Voici la chaine optimale pour enrichir une liste d'entreprises :

1. **SIRET/SIREN** --> API INSEE ou Pappers --> recupere la raison sociale et l'adresse
2. **Raison sociale** --> recherche Google automatisee --> retrouve le nom de domaine
3. **Nom de domaine** --> Hunter.io ou Dropcontact --> recupere les emails de contact
4. **Verification** --> passe les emails dans un verificateur (Hunter, ZeroBounce) avant d'envoyer

## Outils par budget

| Budget | Outils | Volume |
|--------|--------|--------|
| Gratuit | Pappers + Societe.com + recherche manuelle | 10-50 entreprises |
| 50 EUR/mois | Pappers API + Hunter.io | 500-1000 entreprises |
| 100+ EUR/mois | Dropcontact ou Kaspr | 1000+ entreprises |

## Attention au RGPD

- Les donnees d'entreprise (SIRET, adresse du siege, nom du dirigeant) sont des **donnees publiques** -- tu peux les utiliser librement
- Les **emails personnels** et numeros de telephone sont des donnees personnelles -- tu dois respecter le RGPD
- Pour la prospection B2B par email : tu peux contacter une personne sur son **email professionnel** si c'est en rapport avec sa fonction, sans consentement prealable (interet legitime)
- Ajoute toujours un lien de desinscription dans tes emails

## Ce qu'il faut retenir

Du SIRET a l'email, c'est une chaine d'enrichissement en 3-4 etapes. Pour du volume, automatise avec les API (Pappers, Hunter, Dropcontact). Pour quelques recherches ponctuelles, Pappers.fr + Google suffisent. Et n'oublie pas : la qualite de ta liste vaut plus que sa taille.
