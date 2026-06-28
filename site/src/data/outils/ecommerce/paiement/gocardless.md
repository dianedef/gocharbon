---
section: outils
title: GoCardless
author: Diane
tags:
  - 'Outils'
  - 'Paiement'
  - 'E-commerce'
description: "GoCardless est la plateforme britannique de prélèvement SEPA et paiement bancaire. 100K+ entreprises, 75+ pays, 30+ devises. Dès 0,25€/transaction."
pubDate: "2026-03-15"
imgUrl: ../../../../assets/astro.jpeg
u_site: https://gocardless.com/fr-fr/
u_origine: "UK"
u_langue_fr: true
u_derniere_maj: "2026-03-15"
---

# GoCardless

# PRÉLÈVEMENT SEPA : LA PLATEFORME BRITANNIQUE QUI AUTOMATISE TES PAIEMENTS RÉCURRENTS DANS 75+ PAYS

## tl;dr

GoCardless (gocardless.com), c'est la **plateforme de paiement bancaire** (prélèvement SEPA, ACH, Bacs, PAD, BECS) qui permet aux entreprises de **collecter des paiements récurrents et ponctuels** directement depuis les comptes bancaires de leurs clients — sans passer par les réseaux carte (Visa, Mastercard). Fondée en **2011** à **Londres** par **Hiroki Takeuchi** (CEO), **Matt Robinson** et **Tom Mayfield**, GoCardless traite **+100 milliards de dollars** de paiements par an pour **100 000+ entreprises** dans **75+ pays** avec **30+ devises**. Parmi les clients : **DocuSign**, **TripAdvisor**, **Aon**, **Trustpilot**, **Lush**, **SurveyMonkey**, **The Guardian**. En France, GoCardless est très utilisé par les éditeurs SaaS, les salles de sport, les associations et les entreprises avec des abonnements. La plateforme a levé au total **+300 millions de dollars** (Series G de 312M$ en 2022 menée par Permira). **Agréée ACPR** en France. Plateforme disponible en **français**. Pricing : **0,25€ + 0,20%** par transaction (GoCardless) ou **2,5% + 0,20€** (Instant Bank Pay). **700+ employés** dans le monde.

## Alternative à

Stripe (volet prélèvement SEPA), SlimPay, Mollie (prélèvement), prélèvement SEPA bancaire direct (SG, BNP), PayFit (pour la partie prélèvement salaires). GoCardless se distingue par sa **spécialisation prélèvement bancaire** (c'est son cœur de métier, pas un module additionnel comme chez Stripe), sa **couverture internationale** (prélèvement dans 30+ pays avec des schémas locaux : SEPA, ACH US, Bacs UK, PAD Canada, BECS Australie), et son **pricing ultra-compétitif** (0,25€/transaction vs 1,4% + 0,25€ pour Stripe SEPA). Pour les paiements récurrents, GoCardless est significativement moins cher que la carte bancaire.

# Bénéfices

**Jusqu'à 56% moins cher que la carte bancaire** — Le prélèvement bancaire coûte 0,25€ + 0,20% par transaction chez GoCardless. Pour un abonnement de 50€/mois, ça fait ~0,35€ au lieu de 0,95€ par carte (1,4% + 0,25€ chez Stripe). Sur 1 000 clients, tu économises 600€/mois. Sur un an, **7 200€ d'économies**.

**Réduction massive des échecs de paiement** — Les cartes bancaires expirent. Le prélèvement bancaire, non — les coordonnées bancaires (IBAN) ne changent pratiquement jamais. GoCardless revendique un **taux de réussite de 97,6%** sur les paiements récurrents, contre ~85-90% pour les cartes. Avec **Intelligent Retries** (relances automatiques intelligentes), les paiements échoués sont retentés au meilleur moment.

**75+ pays, 30+ devises** — GoCardless supporte les schémas de prélèvement locaux : **SEPA** (Europe), **ACH** (USA), **Bacs** (UK), **PAD** (Canada), **BECS** (Australie), **Autogiro** (Suède). Ton client en Allemagne paye par prélèvement SEPA, ton client US paye par ACH — tout géré depuis la même interface.

**Success+** — Le produit phare. Success+ utilise l'intelligence artificielle pour **prédire le meilleur moment de relance** quand un paiement échoue. Au lieu d'une relance immédiate (qui échoue souvent), l'IA attend que le compte du client soit approvisionné. Résultat : récupération de **+70% des paiements échoués**.

**API puissante et intégrations** — L'API GoCardless est considérée comme l'une des meilleures du secteur. SDKs en Python, Ruby, PHP, Java, Node.js, .NET. Intégrations natives avec **300+ logiciels** : Salesforce, Xero, QuickBooks, Zuora, Chargebee, HubSpot, Stripe (en tant que méthode de paiement additionnelle).

## Pour Qui ?

- Éditeurs SaaS avec des abonnements récurrents (le cas d'usage principal)
- Associations et clubs sportifs qui collectent des cotisations
- Salles de sport et centres de fitness (prélèvement mensuel)
- Cabinets comptables et d'avocats (honoraires récurrents)
- Bailleurs et syndics (loyers et charges)
- Entreprises B2B avec des contrats long terme (paiement par prélèvement)
- E-commerçants qui veulent proposer le prélèvement bancaire comme alternative à la CB

# Comment Utiliser GoCardless

1. **Inscription** — Crée ton compte sur [gocardless.com/fr-fr/](https://gocardless.com/fr-fr/). Pas de frais d'inscription
2. **Vérification** — KYC (vérification d'identité et d'entreprise)
3. **Intégration** — Connecte GoCardless à tes outils (API, Stripe, Chargebee, Xero, etc.) ou utilise les **pages de paiement hébergées**
4. **Mandats** — Tes clients signent un mandat de prélèvement SEPA en ligne (page de paiement GoCardless)
5. **Collecte** — Crée des paiements ponctuels ou récurrents. Les fonds sont prélevés du compte de ton client
6. **Réception** — Les fonds arrivent sur ton compte bancaire sous 2-5 jours ouvrés (délais SEPA standard)

# Fonctionnalités

## Collecte de paiements

- **Prélèvement récurrent** — Abonnements, cotisations, loyers
- **Prélèvement ponctuel** — Factures, acomptes
- **Instant Bank Pay** — Paiement instantané par virement (Open Banking)
- **Pages de paiement hébergées** — Checkout sans code, personnalisable
- **Mandats en ligne** — Signature de mandats SEPA dématérialisée

## Optimisation

- **Success+** — Relances intelligentes par IA (récupération des paiements échoués)
- **Intelligent Retries** — Retry automatique au meilleur moment
- **Verified Mandates** — Vérification des coordonnées bancaires en temps réel
- **Notifications** — Alertes en cas d'échec, de remboursement ou de litige

## Schémas de paiement internationaux

- **SEPA Direct Debit** — Europe (36 pays)
- **ACH Debit** — États-Unis
- **Bacs Direct Debit** — Royaume-Uni
- **PAD** — Canada
- **BECS Direct Debit** — Australie
- **Autogiro** — Suède
- **BECS NZ** — Nouvelle-Zélande

## API et intégrations

- **API REST** — Documentation complète, webhooks
- **SDKs** — Python, Ruby, PHP, Java, Node.js, .NET, Go
- **300+ intégrations** — Salesforce, Xero, QuickBooks, Zuora, Chargebee, HubSpot, Stripe
- **Zapier** — Automatisations no-code

# Prix

| Plan | Frais/transaction | Inclus |
|------|-------------------|--------|
| **GoCardless (prélèvement)** | 0,25€ + 0,20% | Prélèvement SEPA, ACH, Bacs, pages de paiement |
| **Instant Bank Pay** | 2,5% + 0,20€ | Paiement instantané via Open Banking |
| **GoCardless Pro** | Sur devis | API complète, white-label, gestion multi-entités |
| **Success+** | Supplément | Relances intelligentes IA |

- **Pas de frais fixes mensuels** sur le plan standard
- **Pas de frais d'inscription** ni de frais de résiliation
- **Plafond de 0,50€** par transaction (le 0,20% est plafonné)
- **Remboursements** — Pas de frais pour les remboursements initiés par toi
- **Plan Pro** — Pour les entreprises à haut volume, pricing négocié

*Source : [GoCardless Pricing](https://gocardless.com/fr-fr/tarifs/)*

# Intégrations

- **Comptabilité** : Xero, QuickBooks, FreeAgent, Sage
- **Facturation** : Zuora, Chargebee, Recurly, ChargeBee
- **CRM** : Salesforce, HubSpot
- **Paiement** : Stripe (GoCardless comme méthode de paiement dans Stripe)
- **ERP** : NetSuite, Microsoft Dynamics
- **Automatisation** : Zapier, Make (Integromat)
- **E-commerce** : WooCommerce, Shopify (via partenaires)
- **API REST** : Documentation complète avec webhooks et SDKs

# L'équipe et l'Histoire

- **2011** — Création de **GoCardless** à **Londres** par **Hiroki Takeuchi** (CEO), **Matt Robinson** et **Tom Mayfield**. Trois amis de l'université qui galèrent à collecter les cotisations de leur club de football. Ils construisent un outil pour automatiser les prélèvements
- **2012-2015** — Premières levées de fonds. GoCardless se concentre sur le marché britannique avec Bacs Direct Debit. Y Combinator (batch hiver 2011). Clients early-adopter : startups SaaS, clubs sportifs, associations
- **2016-2018** — Expansion en Europe avec le lancement du **prélèvement SEPA**. Ouverture du bureau parisien. **Série C de 22,5M$** (2017). GoCardless obtient l'agrément ACPR en France et commence à servir des entreprises françaises
- **2019-2020** — Lancement de **Success+** (relances intelligentes par IA). **Série E de 75M$** (2019). Le produit passe de "outil de prélèvement" à "plateforme de paiement bancaire complète". 50 000+ entreprises clientes
- **2021-2022** — **Série F de 95M£** (2021). Puis **Série G de 312M$** (2022, menée par **Permira**). GoCardless dépasse les **100 milliards de dollars** de paiements traités par an et **100 000 entreprises clientes**. Expansion en Australie, Canada, États-Unis
- **2023-2024** — Lancement d'**Instant Bank Pay** (paiement instantané via Open Banking). Partenariat avec **Stripe** (GoCardless disponible comme méthode de paiement dans Stripe). GoCardless emploie **700+ personnes** dans le monde. Le CEO Hiroki Takeuchi est reconnu comme l'un des leaders de la fintech européenne
- **2025-2026** — GoCardless continue de croître en France avec le **prélèvement SEPA** et l'**Open Banking**. La plateforme en français est complète (site, documentation, support). GoCardless est devenu le standard mondial du prélèvement bancaire pour les SaaS et les entreprises à abonnement

*Source : [GoCardless](https://gocardless.com/), [Crunchbase](https://www.crunchbase.com/organization/gocardless), [TechCrunch](https://techcrunch.com/)*

# Cas d'Usage Concrets

**L'éditeur SaaS avec 5 000 abonnés** — Tu as un logiciel SaaS à 49€/mois. Avec la carte bancaire, tu perds 3-5% de tes clients chaque mois à cause des cartes expirées (churn involontaire). En passant au prélèvement GoCardless, les IBAN ne changent jamais — ton taux d'échec passe de 5% à 2,4%. Sur 5 000 clients, c'est 130 clients récupérés par mois, soit **76 440€/an de revenus sauvés**.

**L'association avec 1 200 adhérents** — Tu gères une association sportive. Chaque année, tu cours après les cotisations. Avec GoCardless, tu collectes les 150€ de cotisation annuelle par prélèvement SEPA automatique. Coût : 0,55€/transaction au lieu de 2,35€ par CB. Tu économises **2 160€/an** et tu n'as plus de relances à faire.

**Le cabinet comptable qui facture 200 clients** — Tu envoies 200 factures d'honoraires par mois. Avec GoCardless intégré à QuickBooks, le prélèvement est automatique dès que la facture est validée. Plus de relances d'impayés, plus de chèques à encaisser. Le délai de paiement moyen passe de 45 jours à 5 jours.

# Points Forts

- 100K+ entreprises clientes, 100Md$+ de paiements traités/an
- Pricing ultra-compétitif : 0,25€ + 0,20% (plafonné à 0,50€)
- 75+ pays, 30+ devises, 7 schémas de prélèvement
- Success+ : IA pour récupérer les paiements échoués (+70%)
- API de référence avec SDKs dans 7 langages
- 300+ intégrations (Stripe, Xero, Salesforce, Zuora, Chargebee)
- Agréé ACPR en France, plateforme complète en français
- +300M$ levés (Permira, Accel, GV, Notion Capital)
- Pas de frais fixes mensuels
- Instant Bank Pay (Open Banking)

# Points Faibles

- **Outil non français** — GoCardless est britannique. Même si la plateforme est en français et agréée ACPR, le support prioritaire est en anglais. Pour les questions complexes, l'anglais peut être nécessaire
- **Délais de paiement SEPA** — Le prélèvement SEPA prend 2-5 jours ouvrés. C'est plus lent que la carte bancaire (instantané). Pour les e-commerçants qui veulent un encaissement immédiat, c'est un frein
- **Pas adapté au e-commerce classique** — GoCardless est optimisé pour les paiements récurrents et les factures. Pour un site e-commerce avec des achats ponctuels, la carte bancaire reste plus adaptée (expérience d'achat plus rapide)
- **Mandats de prélèvement** — Le client doit signer un mandat SEPA avant le premier paiement. C'est une étape supplémentaire qui peut créer de la friction à la conversion (vs un simple numéro de carte)
- **Litiges et remboursements** — Les prélèvements SEPA peuvent être contestés par le client pendant **8 semaines** (sans justification) et **13 mois** (si non autorisé). Ce risque de "chargeback SEPA" est plus large que pour les cartes
- **Instant Bank Pay encore limité** — Le paiement instantané via Open Banking est récent et pas encore disponible partout. La couverture bancaire en France est encore partielle
