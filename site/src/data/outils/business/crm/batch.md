---
section: apps
metadataEnrichedAt: null
title: Batch
author: Diane
tags:
- Outils
description: Batch est la plateforme française d'engagement client omnicanal. Push,
  email, SMS, in-app, WhatsApp. 400+ clients, 800 milliards de messages envoyés. 20M€
  levés.
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
u_site: https://batch.com/fr
---

# Batch

## ENGAGEMENT CLIENT OMNICANAL : L'ARTILLERIE LOURDE DU PUSH MADE IN FRANCE

### tl;dr

Batch est une Customer Engagement Platform (CEP) française fondée en 2015 à Paris par Simon Dawlat. La plateforme permet d'orchestrer des campagnes omnicanal -- push notifications, email, SMS, in-app messages, landing pages, WhatsApp, RCS et Ads -- le tout depuis un backoffice no-code pensé pour les marketeurs. Les chiffres parlent d'eux-memes : 800 milliards de messages envoyes, 1,2 milliard de visiteurs uniques touches, plus de 10 000 apps mobiles et sites web connectes. 400+ clients dans 25 pays, dont des mastodontes comme Le Monde, SNCF Connect, Sephora, BNP Paribas, Fnac-Darty, Leclerc, Intermarche, Lacoste, Leboncoin, ManoMano, La Redoute, Oscaro. Batch a ete bootstrappee pendant 6 ans (2015-2021) avant de lever 20M€ aupres d'Expedition Growth Capital et Orange Ventures en octobre 2021. 74 employes (+23,5% de croissance annuelle), QG a Paris, bureaux en Allemagne. Batch se positionne comme une plateforme "souveraine et a fort impact" qui consolide 3 outils en un : orchestrateur de campagnes + routeur email/mobile + plateforme de donnees. Jusqu'a 40% de revisites hebdomadaires grace a une bonne strategie push. Un des rares acteurs europeens capables de rivaliser avec Braze ou Airship a l'international.

### Alternative a

Braze, OneSignal, Airship, MoEngage, Iterable, WebEngage, Leanplum, CleverTap, Pushwoosh. Batch se distingue par son positionnement souverain europeen (donnees hebergees en Europe), son bootstrapping de 6 ans qui a forge un produit mature et rentable, sa capacite a consolider l'orchestration des campagnes + le routage email/mobile + la plateforme data dans un seul outil, et son expertise pointue du push notification (avec la publication annuelle du "Great Push Notifications Benchmark" qui analyse 800 milliards de messages).

## Benefices

**800 milliards de messages envoyes, 0 blabla** -- Ce n'est pas une startup qui teste un concept. Batch route du volume de niveau enterprise depuis des annees. 800 milliards de messages traites, 1,2 milliard de visiteurs uniques. Quand Le Monde, SNCF Connect ou BNP Paribas te font confiance pour pousser des millions de notifications par jour, c'est que l'infra tient la route.

**+40% de revisites grace au push cible** -- Push notifications bien ciblees = engagement massif. Une bonne strategie de push sur Batch peut generer jusqu'a 40% de revisites hebdomadaires supplementaires. Le secret : la segmentation comportementale fine (parcours in-app, geolocalisation, evenements custom) combinee avec l'A/B testing automatique.

**No-code pour les marketeurs, zero dependance dev** -- Batch est pensee pour que les equipes marketing creent et lancent leurs campagnes sans passer par les devs. Interface drag-and-drop pour les landing pages in-app, editeur de campagnes visuel, segmentation par clics. Tes equipes tech installent le SDK une fois, apres c'est le marketing qui pilote.

**Omnicanal unifie dans un seul outil** -- Push notifications, email, SMS, in-app messages, landing pages mobiles, WhatsApp, RCS, Ads audiences. Au lieu de jongler entre 5 outils differents, tu orchestres tout depuis un seul dashboard. L'avantage : des parcours client coherents cross-canal, sans silos de donnees.

**1st party data, zero cookie tiers** -- Batch s'appuie sur les donnees first-party (comportement in-app, evenements, attributs utilisateur) plutot que sur les cookies tiers en voie de disparition. Connexion native a Snowflake et BigQuery pour les CDPs composables. Tu gardes le controle total de tes donnees.

**Souverainete europeenne** -- Equipe et donnees francaises/europeennes, conforme RGPD. Dans un contexte ou la souverainete des donnees devient un sujet brulant pour les grands groupes, c'est un argument de poids face aux acteurs americains comme Braze ou Airship.

### Pour Qui ?

- Apps mobiles iOS et Android a forte audience qui veulent engager et retenir leurs utilisateurs (media, retail, voyage, sport, banking)
- Sites web et apps web (PWA) cherchant a re-engager les visiteurs via web push et landing pages
- E-commercants avec app native (Sephora, Fnac-Darty, La Redoute) qui veulent des parcours CRM mobile sophistiques
- Medias et editeurs digitaux (Le Monde, Le Point, Tagesspiegel) qui poussent des alertes editoriales ciblees
- Grands groupes retail et grande distribution (Leclerc, Intermarche, Rewe, Lidl, dm-drogerie markt) pour des campagnes promotionnelles massives
- Entreprises de transport et mobilite (SNCF Connect, BVG) pour des notifications transactionnelles et informationnelles
- Marketplaces et plateformes (Leboncoin, ManoMano, Mobile.de, Oscaro) pour le re-engagement et la conversion
- Banques et services financiers (BNP Paribas) pour les notifications transactionnelles securisees

## Comment Utiliser Batch

### 1. Installation du SDK

L'equipe technique integre le SDK Batch dans ton app mobile (iOS, Android) ou ton site web. L'installation est documentee, avec des SDKs natifs, React Native, Flutter, Cordova. Cote web, c'est un snippet JavaScript a ajouter.

### 2. Configuration des canaux

Tu actives les canaux dont tu as besoin : push notifications (mobile + web), email, SMS, in-app messages, WhatsApp, RCS. Chaque canal a ses propres parametres : cles APNS/FCM pour le push, domaine d'envoi pour l'email, numero pour le SMS.

### 3. Collecte de donnees

Batch collecte automatiquement les donnees de comportement (sessions, evenements, parcours). Tu peux enrichir les profils avec des attributs custom (plan tarifaire, date d'inscription, panier moyen) et des evenements custom (achat, mise au panier, recherche).

### 4. Segmentation

Tu crees des segments dynamiques bases sur les comportements, attributs, localisation, appareil, langue, opt-in. La segmentation est visuelle et no-code -- les marketeurs creent leurs audiences sans requete SQL.

### 5. Creation de campagnes

Depuis l'editeur no-code, tu construis tes campagnes : choix du canal, ciblage, contenu (rich push avec images, boutons, emojis), timing, A/B test. Pour les in-app, un editeur drag-and-drop te permet de creer des landing pages mobiles 100% responsive.

### 6. Orchestration et automation

Tu configures des parcours automatises trigger-based : un utilisateur abandonne son panier ? Push + email de relance. Un client n'a pas ouvert l'app depuis 7 jours ? Notification de re-engagement. Les scenarios se construisent visuellement.

### 7. Analyse et optimisation

Tableaux de bord en temps reel : taux d'ouverture, taux de clic, conversion, opt-in/opt-out. Tu identifies ce qui marche, tu A/B testes, tu iteres. Les donnees remontent aussi vers tes outils data (Snowflake, BigQuery) pour une vue unifiee.

## Fonctionnalites

### Push Notifications (Mobile + Web)

- **Rich push** -- Images, video, boutons d'action, emojis, GIFs. Sur iOS et Android, tu exploites toutes les possibilites natives (expanded notifications, carousels, deep links)
- **Web push** -- Notifications navigateur pour tes visiteurs web, meme quand ils ne sont plus sur ton site. Compatible Chrome, Firefox, Edge, Safari
- **A/B testing** -- Teste jusqu'a 4 variantes par campagne (titre, contenu, image, heure d'envoi). Batch selectionne automatiquement le gagnant
- **Silent push** -- Push invisible pour mettre a jour le contenu de l'app en arriere-plan sans deranger l'utilisateur
- **Geolocalisation** -- Push cibles par zone geographique (geofencing), parfait pour le retail avec des magasins physiques
- **Deep linking** -- Redirige l'utilisateur directement vers l'ecran pertinent de l'app, pas juste l'ecran d'accueil
- **Throttling** -- Controle le debit d'envoi pour eviter de surcharger tes serveurs backend ou les API Apple/Google
- **Planification intelligente** -- Envoi optimal base sur le fuseau horaire et les habitudes de chaque utilisateur

### Email

- **Routeur email integre** -- Batch inclut son propre moteur d'envoi email. Tu n'as pas besoin d'un outil email a cote : c'est integre dans l'orchestration omnicanal
- **Editeur visuel** -- Creation d'emails responsive sans coder, avec templates et personnalisation dynamique
- **Delivrabilite** -- Infrastructure dediee, warm-up automatique, monitoring de reputation d'expediteur
- **Transactionnel + marketing** -- Le meme outil pour tes emails transactionnels (confirmation de commande, reset mot de passe) et tes campagnes marketing

### SMS et WhatsApp

- **SMS marketing et transactionnel** -- Envoi de SMS cibles ou automatises, avec tracking de livraison et de clic
- **WhatsApp Business** -- Canal conversationnel pour l'engagement client, integre dans l'orchestration omnicanal
- **RCS (Rich Communication Services)** -- Le "SMS 2.0" avec images, boutons, carousels. Batch est un des rares acteurs a le supporter

### In-App Messaging

- **Landing pages mobiles** -- Editeur drag-and-drop pour creer des pages in-app 100% responsive (bannieres, pop-ups, interstitiels, bottom sheets)
- **Personnalisation** -- Contenu dynamique base sur les attributs et le comportement de l'utilisateur
- **Declenchement contextuel** -- Affiche le message au bon moment (apres une action, au lancement de l'app, apres X sessions)
- **Carousels et surveys** -- Formats riches pour l'onboarding, les enquetes de satisfaction ou les mises en avant produit

### Segmentation et Ciblage

- **Segments dynamiques** -- Mis a jour en temps reel, bases sur les comportements, attributs et evenements
- **Ciblage comportemental** -- Cible les utilisateurs en fonction de ce qu'ils font dans l'app (parcours, actions, inactions)
- **Ciblage geographique** -- Geofencing, localisation en temps reel, zones de chalandise
- **Attributs custom** -- Enrichis les profils avec n'importe quel attribut metier (plan, LTV, segment RFM)
- **Exclusion intelligente** -- Evite de sur-solliciter tes utilisateurs avec des regles de pression marketing (frequency capping)

### Orchestration et Automation

- **Campagnes trigger** -- Automatisation basee sur les evenements utilisateur (achat, abandon panier, inactivite, anniversaire)
- **Campagnes transactionnelles** -- Messages declenches par des evenements metier via API (confirmation, livraison, alerte securite)
- **Campagnes planifiees** -- One-shot ou recurrentes, avec ciblage precis et A/B testing
- **Parcours multi-etapes** -- Orchestration de sequences cross-canal (push > attente 2h > email > attente 1j > SMS)
- **Campagnes Ads** -- Synchronisation des audiences Batch avec les plateformes publicitaires pour le retargeting

### Data et Integrations

- **CDP composable** -- Batch se connecte nativement a Snowflake et BigQuery. Tu utilises ton data warehouse comme source de verite, sans dupliquer les donnees dans un CDP additionnel
- **API REST** -- API complete pour l'envoi de messages, la gestion des profils, la creation de segments programmatiquement
- **Webhooks** -- Notifications en temps reel des evenements (ouverture, clic, opt-out) vers tes systemes
- **Import/export** -- Import de listes, export de donnees pour le reporting avancee

### Analytics et Reporting

- **Dashboard temps reel** -- Volume de messages, taux d'ouverture, taux de clic, conversions, opt-in/opt-out en direct
- **Metriques par canal** -- Analyse detaillee pour chaque canal (push, email, SMS, in-app) avec benchmarks
- **Analyse de cohortes** -- Impact des campagnes sur la retention a long terme
- **Attribution** -- Mesure l'impact direct de chaque message sur les KPIs metier (achat, inscription, activation)

## Prix

Batch fonctionne sur un modele tarifaire adapte a la taille de ton app et au volume de messages. Les plans sont calibres en fonction du nombre d'utilisateurs actifs mensuels (MAU) et du volume de messages envoyes.

Les tarifs ne sont pas publies sur le site -- il faut contacter l'equipe commerciale pour obtenir un devis. Ce qui est connu :

- **Plan gratuit / essai** -- Batch proposait historiquement un plan gratuit jusqu'a un certain volume, ideal pour les startups en phase de lancement
- **Tarification au volume** -- Le prix evolue avec ta croissance (MAU + messages envoyes par canal)
- **Facturation par canal** -- Les differents canaux (push, email, SMS, WhatsApp) ont des structures de cout differentes
- **Enterprise** -- Plans sur mesure pour les grands comptes avec SLA, support dedie, onboarding personnalise

**A noter** : Batch consolide 3 outils en un (orchestrateur + routeur + data platform), donc compare le prix total de ton stack actuel (un outil d'email + un outil de push + un CDP) plutot que de comparer a un seul outil.

## Integrations

### Data Warehouses et CDP

- **Snowflake** -- Connexion native, bidirectionnelle. Tu utilises tes tables Snowflake comme segments directement dans Batch
- **BigQuery** -- Meme principe : tes donnees BigQuery alimentent tes campagnes sans ETL supplementaire
- **CDPs composables** -- Batch se positionne comme brique d'activation dans une architecture CDP composable

### CRM et Marketing

- Compatible avec les principaux CRM et DMP existants
- Plans de tagging et evenements custom pour alimenter ta stack martech
- API et webhooks pour connecter Batch a n'importe quel outil

### SDK et Developpement

- **SDK iOS** (Swift/Objective-C) -- Integration native complete
- **SDK Android** (Kotlin/Java) -- Integration native complete
- **SDK React Native** -- Pour les apps cross-platform
- **SDK Flutter** -- Support du framework Google
- **SDK Cordova** -- Pour les apps hybrides
- **Web SDK** -- JavaScript pour le web push et le tracking web
- **API REST** -- API complete pour tous les cas d'usage programmatiques

### Ads et Retargeting

- Synchronisation des audiences avec les plateformes publicitaires (Facebook Ads, Google Ads)
- Export de segments pour le retargeting cross-canal

## L'equipe et l'Histoire

- **2012-2013** -- Simon Dawlat fonde **iMediapp** (renommee plus tard AppGratis), une startup de decouverte d'applications mobiles. La boite leve **5M€ aupres d'Iris Capital** et connait un succes fulgurant
- **2013** -- Apple retire AppGratis de l'App Store du jour au lendemain, tuant le business model. Un coup dur mediatise qui fait la une de TechCrunch (couvert par Romain Dillet). L'equipe pivot
- **2015** -- Simon Dawlat fonde **Batch** a Paris. Fort de l'experience AppGratis, il se concentre sur l'engagement mobile et les push notifications. Decision deliberee de bootstrapper : pas de levee de fonds, croissance organique, rentabilite
- **2015-2021** -- **6 ans de bootstrapping pur**. Batch se construit pas a pas, signe ses premiers grands comptes, developpe sa technologie. Croissance rentable, sans brulure de cash. Un parcours rare dans la tech francaise
- **2020** -- 40% de croissance du chiffre d'affaires. L'acceleration du digital pendant le Covid booste la demande pour les plateformes d'engagement mobile
- **2021** -- 50% de croissance du CA. Batch vise les 10M€ d'ARR en 2022
- **Octobre 2021** -- **Levee de 20M€** menee par Expedition Growth Capital, avec la participation d'Orange Ventures. Iris Capital (investisseur de l'ere AppGratis) sort a cette occasion. L'objectif : passer de 70 a 250 employes, ouvrir des bureaux a Marseille, Londres et Berlin
- **2024-2025** -- 74 employes (+23,5% de croissance annuelle), QG a Paris, bureaux en Allemagne. 400+ clients dans 25 pays. Plus de 11 000 followers LinkedIn (+15,9% de croissance annuelle)
- **Benchmark annuel** -- Batch publie chaque annee le **"Great Push Notifications Benchmark"**, une etude de reference dans l'industrie qui analyse 800 milliards de messages. Le benchmark 2025 revele : opt-in push Android passe de 85% a 67% (impact Android 13), iOS stable a 56% (vs 58%), moyenne globale a 61%

### Clients de reference

Le Monde, La Redoute, Oscaro, Lacoste, ManoMano, SNCF Connect, Sephora, Leclerc, Intermarche, BNP Paribas, Fnac-Darty, Leboncoin, Le Point, Sky, Tagesspiegel (Allemagne), BVG (transport berlinois), Mobile.de, Rewe, Lidl, dm-drogerie markt (Allemagne), Oui.sncf.

## Cas d'Usage Concrets

**Media et editeur digital** -- Tu es Le Monde ou Le Point. Tu pousses des alertes editoriales ciblees par centre d'interet (politique, sport, tech) au bon moment. L'A/B testing te dit quel titre genere le plus de clics. Resultat : +40% de revisites hebdomadaires.

**E-commerce avec app native** -- Tu es Sephora ou Fnac-Darty. Un client consulte un produit sans l'acheter ? Push de relance 2h plus tard avec une promo personnalisee. Panier abandonne ? Email + push. L'orchestration cross-canal multiplie tes chances de conversion sans spammer.

**Grande distribution et retail** -- Tu es Leclerc ou Intermarche. Tu envoies des notifications geolocalises quand un client passe pres d'un magasin. Promotions du jour, carte fidelite, bons de reduction personnalises. Des millions de messages par jour, sans latence.

**Transport et mobilite** -- Tu es SNCF Connect. Notifications transactionnelles en temps reel : retard de train, changement de quai, billet disponible. Engagement proactif : "Ton train de vendredi est a -30% si tu reserves maintenant." Push + email orchestres selon les preferences de chaque voyageur.

**Marketplace** -- Tu es Leboncoin ou ManoMano. Tu re-engages les utilisateurs inactifs avec des alertes personnalisees ("nouvelle annonce dans ta recherche sauvegardee"). Tu fais remonter les vendeurs vers l'app avec des notifications sur les performances de leurs annonces.

**Banque et fintech** -- Tu es BNP Paribas. Notifications transactionnelles securisees (confirmation de paiement, alerte fraude, plafond atteint). Campagnes marketing ciblees pour promouvoir de nouveaux produits bancaires aupres des bons segments.

**App de sport ou lifestyle** -- Tu re-engages tes utilisateurs avec des rappels d'entrainement, des milestones personnalises ("tu as couru 100 km ce mois !"), des promos sur l'abonnement premium. Le push est le canal n.1 pour les apps mobile-first.

## Points Forts

- **800 milliards de messages envoyes** -- Infra eprouvee, pas un jouet. Batch gere du volume enterprise sans broncher
- **Bootstrappe 6 ans (2015-2021)** -- Produit mature, rentable, pas construit a coups de levees de fonds brulees. La levee de 20M€ est venue accelerer, pas sauver
- **Consolidation 3-en-1** -- Orchestrateur de campagnes + routeur email/mobile + plateforme de donnees. Tu remplaces 3 outils par un seul, avec une vue unifiee
- **Made in France et souverain** -- Donnees en Europe, equipe francaise, conforme RGPD. Argument de poids pour les grands comptes europeens soucieux de souverainete
- **No-code pour les marketeurs** -- Les equipes marketing creent et lancent leurs campagnes sans dependre des devs. Temps de mise sur le marche divise
- **Connexion native Snowflake/BigQuery** -- Pas besoin de CDP additionnel. Ton data warehouse est ta source de verite, Batch l'active
- **Benchmark de reference** -- Le "Great Push Notifications Benchmark" annuel (800 milliards de messages analyses) fait autorite dans l'industrie. Ca prouve l'expertise
- **Clients de reference impressionnants** -- Le Monde, SNCF, Sephora, BNP Paribas, Fnac-Darty, Leclerc... Pas des startups en beta, des leaders de marche
- **Omnicanal reel** -- Push, email, SMS, in-app, WhatsApp, RCS, Ads dans une seule plateforme avec orchestration cross-canal

## Points Faibles

- **Tarifs non publics** -- Impossible de connaitre le prix sans passer par un commercial. Frustrant quand tu veux comparer rapidement
- **Moins connu que Braze/OneSignal a l'international** -- Batch est une reference en France et en Allemagne, mais la notoriete reste a construire aux US et en Asie
- **Historiquement centre mobile** -- Batch a ajoute l'email et les canaux web plus recemment. Les pure players email (Brevo, Mailjet) ont plus d'anciennete sur ce canal specifique
- **74 employes vs 1 500+ chez Braze** -- L'equipe est plus petite, ce qui peut impliquer un support moins rapide ou moins de features secondaires
- **Pas un CRM generaliste** -- Batch est une CEP (Customer Engagement Platform), pas un CRM avec gestion de pipeline, devis, factures. Il faut coupler avec un CRM classique pour la partie commerciale
- **Documentation et communaute** -- Moins de tutoriels communautaires et de ressources tierces que les gros acteurs americains
- **Croissance d'equipe plus lente que prevu** -- L'objectif de 250 employes post-levee 2021 n'a pas ete atteint (74 en 2024-2025), ce qui peut indiquer un rythme de croissance plus prudent que les ambitions initiales
