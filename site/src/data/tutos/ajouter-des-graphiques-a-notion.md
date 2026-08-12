---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Ajouter Des Graphiques À Notion
author: Diane
description: 'Découvre Ajouter Des Graphiques À Notion : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Ajouter Des Graphiques A Notion

## VISUALISATION DE DONNEES : TRANSFORMER TES TABLEAUX EN GRAPHIQUES

### tl;dr

Notion est genial pour stocker des donnees, mais nul pour les visualiser. Pas de graphiques natifs. Heureusement, il existe des outils qui se branchent sur tes bases Notion pour generer des graphiques directement dans tes pages. Ce tuto te montre les meilleures options.

---

## Pourquoi des graphiques dans Notion ?

- **Un tableau de 200 lignes ne raconte rien.** Un graphique montre la tendance en 2 secondes.
- **Pour tes dashboards** -- Ventes, metriques social media, budget, KPIs.
- **Pour tes rapports** -- Un graphique est 10x plus clair qu'un tableau pour tes clients.

**Bonne nouvelle (2024-2025) :** Notion a lance les Charts natifs ! Tu peux maintenant creer des graphiques directement dans tes bases de donnees sans outil tiers. Sur un plan payant (Plus, Business, Enterprise), graphiques illimites. Sur le plan gratuit, 1 seul graphique. Les outils tiers ci-dessous restent utiles pour des visualisations plus avancees ou si tu es sur le plan gratuit.

## Option 0 : Notion Charts natif (nouveau, recommande)

Depuis 2024, Notion propose des graphiques natifs integres directement dans les bases de donnees.

1. Ouvre ta base de donnees dans Notion
2. Clique sur le bouton "+" a cote des vues existantes
3. Selectionne "Chart" comme type de vue
4. Configure : type de graphique (barres verticales, barres horizontales, courbe, donut), axe X (date, select, titre...), axe Y (propriete numerique avec aggregation)
5. Personnalise : couleurs, hauteur, labels, grille
6. Exporte en PNG ou SVG via "Save chart as..."

**Avantages :** Natif, mise a jour en temps reel, aucune configuration externe. **Limites :** 4 types de graphiques seulement, pas de Sankey, treemap ou animations. **Prix :** Plan gratuit = 1 graphique. Plans payants (Plus a 10 $/mois et +) = graphiques illimites.

## Option 1 : ChartBase (pour aller plus loin)

Si tu as besoin de plus de types de graphiques ou si tu es sur le plan gratuit de Notion :

1. Inscris-toi sur [notion2charts.com](https://notion2charts.com) (anciennement chartbase.app)
2. Connecte Notion via OAuth
3. Cree un chart et selectionne ta base
4. Choisis le type : bar, line, pie, doughnut, area, scatter, multi-series
5. Personnalise couleurs, theme, legende
6. Dans Notion, tape `/embed` et colle le lien

Le graphique se met a jour automatiquement quand tes donnees changent.

**Prix (mis a jour 2025) :** Plan gratuit : 1 graphique, 7 types, 500 enregistrements. Starter : 3 $/mois (100 graphiques, 1 000 enregistrements). Professional : 8 $/mois (100 graphiques, 8 types dont multi-series, 5 000 enregistrements, export PNG). Enterprise : 42 $/mois (graphiques illimites, 10 000 enregistrements, support prioritaire).

## Option 2 : NotionStats et autres alternatives

D'autres outils tiers se connectent a Notion pour creer des graphiques : [NotionStats](https://notionstats.com) (graphiques personnalises avec cumulation, templates), et d'autres solutions comme Notion2Charts. Meme principe que ChartBase -- connecte ta base, choisis le type, configure et embed.

## Option 3 : Google Sheets + embed (gratuit)

1. Exporte ta base Notion en CSV
2. Importe dans Google Sheets
3. Cree un graphique (Insertion > Graphique)
4. Publie le graphique (clic droit > Publier)
5. Dans Notion, `/embed` avec le lien

**Limite :** pas de synchro auto. Amelioration : utilise Zapier/Make pour synchroniser Notion vers Sheets automatiquement.

## Option 4 : Flourish (graphiques spectaculaires)

Pour des visualisations animees et impressionnantes :

1. Cree un compte sur [flourish.studio](https://flourish.studio) (gratuit)
2. Importe tes donnees CSV depuis Notion
3. Choisis parmi des dizaines de types : bar chart race, cartes, Sankey, treemap...
4. Personnalise et embed dans Notion

**Ideal pour :** presentations, rapports clients, posts LinkedIn (export GIF/video).

## Quel graphique pour quelles donnees ?

| Donnee | Graphique |
|--------|-----------|
| Evolution du CA par mois | Courbe (line) |
| Repartition des ventes | Camembert ou doughnut |
| Comparaison par canal | Barres horizontales |
| Progression vers objectif | Jauge |
| Classement (top clients) | Barres verticales triees |

## Exemple : dashboard de ventes

1. Base "Ventes" dans Notion : Date, Client, Montant, Produit, Canal
2. Graphique 1 (ChartBase) : courbe du CA mensuel
3. Graphique 2 : camembert de la repartition par produit
4. Graphique 3 : barres des ventes par canal
5. Embed les 3 sur une page "Dashboard Ventes"
6. Ajoute les KPIs en texte au-dessus : CA total, nombre de ventes, panier moyen

Resultat : un dashboard visuel qui se met a jour a chaque vente ajoutee.

## Astuces GoCharbon

- **ChartBase est le meilleur choix pour la plupart des cas.** Simple, connecte, mise a jour auto, plan gratuit.
- **2-3 graphiques par dashboard.** Trop d'info tue l'info.
- **Le bon type de graphique compte.** Un camembert pour 15 categories est illisible. Les barres sont presque toujours le choix le plus clair.
- **Les couleurs doivent avoir du sens.** Vert = positif, rouge = attention, gris = neutre.
- **Pour les rapports clients, utilise Flourish.** Les animations font une vraie difference.

## Ressources

- [Notion Charts natif](https://www.notion.com/help/guides/charts-visualize-data-track-progress-in-notion) -- Documentation officielle
- [ChartBase / Notion2Charts](https://notion2charts.com) -- Graphiques avances pour Notion (gratuit + plans payants)
- [NotionStats](https://notionstats.com) -- Graphiques personnalises avec cumulation
- [Flourish](https://flourish.studio) -- Visualisations animees spectaculaires (gratuit)
- [Looker Studio](https://lookerstudio.google.com) -- Dashboards gratuits Google
