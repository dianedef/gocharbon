---
artifact: repurpose_pack
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-07-13"
updated: "2026-07-13"
status: draft
source_skill: 202-sg-repurpose
scope: "article-ressources-bibliotheques-pages-vente-design-copywriting"
owner: Diane
confidence: high
risk_level: low
security_impact: none
docs_impact: yes
source_type: "research report and conversation"
source_ref:
  - "/home/claude/shipglowz/shipglowz_data/workflow/research/bibliotheques-pages-vente-inspiration-visuelle-copywriting.md"
  - "Conversation du 2026-07-13 sur une bibliothèque de références de pages de vente"
depends_on: []
supersedes: []
evidence:
  - "Rapport de recherche ShipGlowz du 2026-07-13 fondé sur dix sources officielles"
  - "Inspection du cluster GoCharbon site/src/data/marketing/copywriting le 2026-07-13"
  - "Question de Diane sur la répartition design, copywriting ou les deux"
linked_systems:
  - "site/src/data/marketing/copywriting/landing-pages.md"
  - "site/src/data/marketing/copywriting/index.md"
  - "shipglowz_data/editorial/site/content-map.md"
  - "shipglowz_data/product/site/product.md"
  - "shipglowz_data/gtm/site/gtm.md"
next_step: "/200-sg-redact rédiger l'article GoCharbon à partir de ce pack"
---

# Pack de repurposing — bibliothèques de pages de vente

## Best Next Actions

- Action: rédiger un guide public GoCharbon qui classe les bibliothèques selon leur utilité réelle.
  Deliverable: un article pratique « design, copywriting ou les deux ? » avec tableau comparatif et sélection par cas d'usage.
  Target surface or owner: `200-sg-redact`, puis `site/src/data/marketing/copywriting/bibliotheques-pages-vente.md` si ce chemin est confirmé au moment de rédiger.
  Source proof: le rapport source compare dix bibliothèques officielles et distingue déjà leurs forces en design, copywriting et analyse de conversion.
  Next step: lancer `200-sg-redact` avec ce pack comme source principale.

- Action: relier le futur article au contenu existant sur la structure d'une page de vente.
  Deliverable: liens internes réciproques entre le guide de ressources et `site/src/data/marketing/copywriting/landing-pages.md`.
  Target surface or owner: `201-sg-enrich` après création de l'article.
  Source proof: l'article existant explique quoi mettre dans une page de vente, mais ne fournit pas de sélection structurée de galeries où observer des exemples.
  Next step: ajouter le lien uniquement après publication du nouveau guide.

- Action: rafraîchir les données volatiles avant publication.
  Deliverable: vérification datée des volumes de corpus, prix, accès gratuits et fonctions Pro.
  Target surface or owner: `203-sg-research` ou passe de vérification intégrée à `200-sg-redact`.
  Source proof: les chiffres et tarifs du rapport ont été observés le 2026-07-13 et peuvent évoluer.
  Next step: revisiter les pages officielles juste avant rédaction finale.

## Source-Faithful Pack

### Source Classification

- Source type: recherche web comparative fondée sur dix sites officiels, complétée par la conversation avec Diane.
- Probable project: GoCharbon, surface publique francophone orientée entrepreneurs, marketing et exécution pratique.
- Audience: solopreneurs, freelances, créateurs d'offres, copywriters débutants et petites entreprises qui doivent concevoir ou améliorer une page de vente.
- Best angle: aider le lecteur à choisir une bibliothèque selon son besoin — inspiration visuelle, copywriting, logique de conversion, SaaS ou page de vente longue.
- Confidence: élevée sur la typologie et la complémentarité des ressources ; moyenne sur les volumes, prix et modalités d'accès futurs.

### Core Truth

- Core idea: aucune bibliothèque ne domine simultanément le design, le texte, la vente directe et les pages SaaS. Le meilleur choix est un petit portefeuille de ressources complémentaires.
- Problem or tension: les galeries les plus riches visuellement expliquent rarement pourquoi une page persuade ; les swipe files les plus utiles pour le texte sont souvent moins homogènes ou moins centrés sur la page complète.
- Promised outcome actually supported: permettre au lecteur d'identifier rapidement les deux ou trois sources adaptées à son travail, sans parcourir dix catalogues au hasard.
- Strongest proof: les ressources observées ont des positions distinctes et vérifiables — captures pleine page, classement par composants, analyses de mécanismes de conversion, corpus de sales pages ou spécialisation SaaS.
- Constraints and caveats:
  - une présence dans une galerie ne prouve pas qu'une page a réellement converti ;
  - les volumes, tarifs et fonctions peuvent changer ;
  - la majorité des ressources sont anglophones ;
  - certaines fonctions avancées nécessitent un compte ou une formule payante ;
  - une capture permet d'étudier la page, pas de connaître les résultats commerciaux ni le contexte de trafic.
- Unsafe or unproven claims:
  - « ces pages sont les pages de vente qui convertissent le mieux » ;
  - « copier ces modèles améliorera automatiquement les ventes » ;
  - « telle bibliothèque est gratuite » sans revérifier les conditions au jour de publication ;
  - tout chiffre de conversion attribué aux pages exposées sans étude ou donnée primaire ;
  - toute recommandation commerciale ou affiliée non signalée.

### Reusable Material

- Best reusable wording:
  - « Une belle page n'est pas forcément une bonne page de vente. »
  - « Le design montre où regarder ; le copywriting donne une raison de continuer. »
  - « Ne cherche pas une galerie parfaite : combine une source visuelle, une source de copywriting et une source d'analyse. »
  - « Une page archivée montre ce qui a été publié, pas ce qui a réellement converti. »
  - « L'objectif n'est pas de copier une page, mais de repérer sa structure, ses preuves, son offre et ses choix visuels. »
- Objections or questions surfaced:
  - Est-ce que ces bibliothèques étudient le design, le texte ou les deux ?
  - Où voir une page complète, pas seulement son hero ?
  - Où trouver des pages de vente longues pour une formation, du coaching ou un produit direct ?
  - Quelle ressource choisir pour un SaaS ou une application ?
  - Est-ce gratuit, filtrable et encore accessible dans quelques mois ?
  - Comment distinguer inspiration et preuve de conversion ?
- Diagrams or lists worth preserving:
  - matrice « design / copywriting / analyse » ;
  - sélection selon cinq cas d'usage ;
  - shortlist complémentaire Lapa Ninja + Page That Converts + Swipefile + SaaSFrame ;
  - méthode d'observation d'une page en quatre passes : structure, offre, preuve, exécution visuelle.
- What should not be echoed too closely: slogans, descriptions commerciales ou textes de pages appartenant aux bibliothèques et aux sites qu'elles référencent. Résumer les fonctions ; ne pas republier leurs captures sans vérifier les droits d'utilisation.

### Resource Matrix

Les appréciations ci-dessous sont qualitatives et décrivent l'utilité éditoriale observée, pas la performance commerciale des pages.

| Ressource | Copywriting | Design | Analyse explicative | Meilleur usage |
|---|---|---|---|---|
| [Lapa Ninja](https://www.lapa.ninja/) | moyen | excellent | faible | pages complètes, tendances visuelles, SaaS, e-commerce et cours |
| [Landing.Gallery](https://www.landing.gallery/about) | faible à moyen | excellent | faible | galerie actuelle, filtrage et captures pleine page |
| [Landingfolio](https://www.landingfolio.com/) | moyen | excellent | faible | pages, sections et composants réutilisables comme références |
| [One Page Love](https://onepagelove.com/inspiration) | moyen | excellent | notes ponctuelles | large inspiration de landing pages et sites one-page |
| [Page That Converts](https://pagethatconverts.com/) | excellent | bon | excellent | mécanismes de persuasion et logique de conversion |
| [Swipefile](https://swipefile.com/) | excellent | moyen | bon | sales pages, angles, offres, preuves et marketing direct |
| [Swiped.co](https://swiped.co/types/landing-page/) | excellent | moyen | excellent | analyses inversées de campagnes, malgré un corpus réduit et ancien |
| [SaaSFrame](https://www.saasframe.io/categories/landing-page) | bon | excellent | bon | landing pages SaaS, sections, desktop/mobile et pricing |
| [Swipe Pages Inspiration](https://swipepages.com/landing-page-inspiration/page-type/sales/) | bon | bon | limité | formations, coaching, événements, abonnements et offres directes |
| [Landing Page Gallery](https://landingpagegallery.com/) | moyen | bon | bon par éléments | recherche de CTA, pricing, preuve, FAQ, garantie ou comparaison |

### Selection By Need

1. Pour voir une page complète avec son texte : Lapa Ninja, Landing.Gallery, One Page Love.
2. Pour étudier le copywriting et la persuasion : Page That Converts, Swipefile, Swiped.co.
3. Pour les pages de vente longues, formations et coaching : Swipe Pages Inspiration, Swipefile, catégorie Course de Lapa Ninja.
4. Pour les SaaS et applications : SaaSFrame, catégorie SaaS de Lapa Ninja, Landingfolio.
5. Pour chercher une section précise : Landingfolio, SaaSFrame, Landing Page Gallery.

### Recommended Shortlist

- Lapa Ninja: la vue d'ensemble et les captures pleine page.
- Page That Converts: le lien le plus clair entre texte, design et conversion.
- Swipefile: le réservoir de copywriting et de mécanismes de vente.
- SaaSFrame: la spécialisation logiciels et produits SaaS.

Le duo minimal pour commencer est Lapa Ninja + Page That Converts. Swipefile complète ce duo lorsque le travail porte d'abord sur le message ou l'offre. SaaSFrame devient prioritaire pour une application ou un SaaS.

### Surface Opportunities

- Public surfaces justified:
  - nouvel article du cluster `marketing/copywriting` ;
  - liens depuis l'article existant sur la structure des pages de vente ;
  - lien depuis le pilier copywriting si le nouveau guide est publié et maintenu.
- Internal surfaces justified: ce pack durable, qui garde la recherche et les contraintes disponibles pour une rédaction ultérieure.
- Surfaces to avoid:
  - une fiche « outil » séparée pour chacune des dix bibliothèques sans recherche complémentaire ;
  - une landing page commerciale GoCharbon, car la source soutient un guide éducatif et non une promesse produit ;
  - un classement absolu du type « meilleurs sites » fondé uniquement sur la taille du catalogue.
- Canonical surface if one exists: futur article Markdown sous `site/src/data/marketing/copywriting/`, à confirmer par `200-sg-redact` en fonction des doublons et de l'intention SEO.

## Existing Content Opportunities

### Internal Docs / Notes

- Surface: présent pack sous `shipglowz_data/workflow/repurpose-packs/`.
  Placement idea: source de vérité pour la future rédaction et le rafraîchissement des données.
  Audience learning moment: comprendre la distinction entre inspiration visuelle, swipe file et analyse de conversion.
  Source proof: rapport comparatif ShipGlowz du 2026-07-13.
  Content move: conserver les constats, limites, URLs officielles et handoffs sans écrire l'article prématurément.
  Priority: haute.
  Next step: transmettre ce fichier à `200-sg-redact`.

### Public Content

- Surface: nouvel article `site/src/data/marketing/copywriting/bibliotheques-pages-vente.md` proposé.
  Placement idea: guide de ressources directement sous le cluster copywriting.
  Audience learning moment: choisir une bibliothèque selon le problème à résoudre au lieu d'accumuler des exemples.
  Source proof: les dix ressources couvrent des usages complémentaires et le site dispose déjà d'un article théorique sur la structure d'une page de vente.
  Content move: créer un guide comparatif pratique avec matrice, shortlist et méthode d'utilisation.
  Priority: haute.
  Next step: `200-sg-redact`.

- Surface: `site/src/data/marketing/copywriting/landing-pages.md`.
  Placement idea: section finale « Où trouver de bons exemples à décortiquer ? » ou lien contextuel vers le nouveau guide.
  Audience learning moment: passer de la structure théorique à l'observation de pages réelles.
  Source proof: l'article existant détaille les sections d'une page mais ne propose pas de bibliothèque comparative.
  Content move: ajouter un lien bref après publication, sans dupliquer le tableau complet.
  Priority: moyenne.
  Next step: `201-sg-enrich` après création du nouvel article.

- Surface: `site/src/data/marketing/copywriting/index.md`.
  Placement idea: ajouter le guide dans la partie « Pages de vente » ou « Pour aller plus loin ».
  Audience learning moment: compléter l'apprentissage du copywriting par une phase d'analyse d'exemples.
  Source proof: le pilier renvoie déjà vers l'article structurel sur les pages de vente.
  Content move: un lien et une phrase de rôle, pas une nouvelle section longue.
  Priority: moyenne.
  Next step: `201-sg-enrich` après publication.

### Editorial Governance Gap

- Le dépôt possède une content map déclarant le blog, mais ne contient pas encore les fichiers éditoriaux partagés `README.md`, `blog-and-article-surface-policy.md`, `page-intent-map.md` ou `claim-register.md` attendus par le corpus ShipGlowz actuel.
- Ce manque ne bloque pas le pack : le blog, le schéma Markdown et le cluster copywriting sont observables dans le code.
- Avant une refonte éditoriale plus large, router la normalisation vers `300-sg-docs editorial`. Ne pas retarder ce futur article uniquement pour ce motif si sa rédaction reste fidèle aux preuves et au schéma existant.

## Owner Skill Handoffs

- Owner skill: `200-sg-redact`.
  Recommended command: `/200-sg-redact rédiger pour GoCharbon un article public à partir de shipglowz_data/workflow/repurpose-packs/2026-07-13-bibliotheques-pages-vente-repurpose-pack.md`.
  Target surface: nouvel article Markdown dans `site/src/data/marketing/copywriting/`.
  Source truth: les ressources se répartissent entre inspiration design, copywriting, analyse de conversion et spécialisation SaaS ; aucune ne couvre parfaitement tous les besoins.
  Source proof: matrice et URLs officielles dans ce pack ; rapport web du 2026-07-13.
  Intended content move: écrire un guide autonome, concret, francophone et anti-bullshit avec sélection par besoin.
  Claim constraints: ne pas confondre curation et performance ; revérifier chiffres, prix et accès ; ne pas reproduire les captures ou textes tiers sans droit.
  Priority: haute.
  Context to pass forward: tutoiement, ton Diane, complément de l'article existant plutôt que doublon, tags conformes au schéma réel.

- Owner skill: `203-sg-research`.
  Recommended command: `/203-sg-research rafraîchir les volumes, tarifs et modalités d'accès des dix bibliothèques avant publication`.
  Target surface: note d'actualisation pour le brouillon d'article.
  Source truth: les informations commerciales et les tailles de corpus sont volatiles.
  Source proof: Freshness Gate du rapport source.
  Intended content move: confirmer uniquement les données chiffrées conservées dans le brouillon final.
  Claim constraints: sources officielles, date de vérification visible, aucun chiffre extrapolé.
  Priority: moyenne, obligatoire si la rédaction utilise des volumes ou tarifs précis.
  Context to pass forward: la typologie qualitative peut rester stable ; les données commerciales doivent être rafraîchies.

- Owner skill: `201-sg-enrich`.
  Recommended command: `/201-sg-enrich relier le nouvel article aux pages landing-pages.md et copywriting/index.md`.
  Target surface: deux contenus existants du cluster copywriting.
  Source truth: le nouveau guide sera une ressource d'observation, complémentaire aux contenus pédagogiques existants.
  Source proof: inspection du corpus GoCharbon le 2026-07-13.
  Intended content move: ajouter des liens internes courts et contextuels après publication.
  Claim constraints: éviter la duplication ; ne pas modifier la thèse des articles existants.
  Priority: moyenne.
  Context to pass forward: appliquer seulement quand l'URL finale du nouvel article existe.

- Owner skill: `300-sg-docs`.
  Recommended command: `/300-sg-docs editorial`.
  Target surface: gouvernance éditoriale GoCharbon.
  Source truth: la content map existe, mais plusieurs briques éditoriales attendues par la doctrine ShipGlowz actuelle sont absentes.
  Source proof: seul `shipglowz_data/editorial/site/content-map.md` est présent dans le dossier éditorial.
  Intended content move: normaliser la gouvernance sans réécrire le contenu public.
  Claim constraints: conserver la doctrine monorepo et ne pas créer un second corpus sous `site/`.
  Priority: basse pour cet article, utile pour la maintenance future.
  Context to pass forward: ce gap est non bloquant pour le présent pack.

## Evidence Ledger

| ID | Fait conservé | Source | Confiance | Limite d'usage public |
|---|---|---|---|---|
| E1 | Lapa Ninja est la meilleure première source de la sélection pour les captures pleine page et l'inspiration visuelle générale. | [Lapa Ninja](https://www.lapa.ninja/) et rapport source | élevée | Présenter comme recommandation éditoriale, pas comme mesure objective de qualité ou de conversion. |
| E2 | Page That Converts organise ses exemples autour de mécanismes comme l'above the fold, la preuve, la réduction du risque et le CTA. | [Page That Converts](https://pagethatconverts.com/) | élevée | Revérifier les catégories exactes si elles sont énumérées dans l'article. |
| E3 | Swipefile couvre les sales pages et de nombreux autres formats de copywriting/marketing. | [Swipefile](https://swipefile.com/) | élevée | Le volume exact doit être revérifié avant publication. |
| E4 | SaaSFrame est spécialisé dans les interfaces et pages marketing SaaS, avec lecture par pages et sections. | [SaaSFrame](https://www.saasframe.io/categories/landing-page) | élevée | Les fonctionnalités Pro et prix sont volatils. |
| E5 | Landing.Gallery, Landingfolio et One Page Love sont principalement utiles pour le design et l'observation de pages. | [Landing.Gallery](https://www.landing.gallery/about), [Landingfolio](https://www.landingfolio.com/), [One Page Love](https://onepagelove.com/inspiration) | élevée | « Principalement » est une synthèse éditoriale, pas leur positionnement contractuel exhaustif. |
| E6 | Swiped.co apporte davantage d'analyse explicative mais dispose d'un corpus landing page plus réduit. | [Swiped.co](https://swiped.co/types/landing-page/) | élevée | Le nombre exact d'entrées et leur ancienneté doivent être revérifiés. |
| E7 | Swipe Pages Inspiration couvre des pages de vente pour plusieurs types d'offres directes. | [Swipe Pages Inspiration](https://swipepages.com/landing-page-inspiration/page-type/sales/) | élevée | Ne pas transformer la présence d'un exemple en validation de performance. |
| E8 | Landing Page Gallery permet une recherche par éléments de page et motifs de conversion. | [Landing Page Gallery](https://landingpagegallery.com/) | élevée | La disponibilité des captures varie selon les entrées. |
| E9 | GoCharbon possède déjà un article consacré à la structure d'une page de vente. | `site/src/data/marketing/copywriting/landing-pages.md` | élevée | Le futur article doit le compléter et créer un lien interne, pas le cannibaliser. |
| E10 | Le blog public charge les fichiers Markdown de `site/src/data` et accepte notamment `section`, `title`, `author`, `tags`, `description`, `pubDate` et `imgUrl`. | `site/src/content.config.ts` | élevée | Vérifier le schéma au moment d'écrire si le projet a évolué. |

## Optional Surface Draft Seeds

### Article / Blog

- Surface: nouvel article du cluster copywriting.
  Seed: « Tu peux passer trois heures à regarder de jolies landing pages et n'apprendre presque rien sur la vente. Le bon réflexe, c'est de savoir ce que chaque bibliothèque te permet vraiment d'étudier : le design, le texte, la structure persuasive — ou les trois. »
  Why justified: cette tension résume directement la recherche et répond à la question formulée dans la conversation.

- Surface: encadré méthodologique du futur article.
  Seed: analyser chaque exemple en quatre passes — hiérarchie visuelle, promesse et offre, preuves et objections, CTA et réduction du risque.
  Why justified: cette méthode transforme une galerie d'inspiration en outil d'apprentissage actionnable, cohérent avec GoCharbon.

### FAQ

- Surface: FAQ intégrée au futur article.
  Seed: « Quelle bibliothèque choisir si je veux surtout travailler mon texte ? » Réponse courte : Page That Converts pour comprendre les mécanismes, Swipefile pour le volume, Swiped.co pour les analyses commentées.
  Why justified: question explicitement soulevée dans la conversation.

- Surface: FAQ intégrée au futur article.
  Seed: « Une page présente dans ces galeries convertit-elle forcément ? » Réponse courte : non ; elle a été sélectionnée ou archivée, mais ses résultats commerciaux ne sont généralement pas publics.
  Why justified: caveat central nécessaire pour éviter une promesse trompeuse.

## Article Name Ideas

- Working name: « 10 bibliothèques de pages de vente pour étudier le design et le copywriting ».
  Angle: guide comparatif exhaustif mais lisible.
  Source proof: dix ressources ont été étudiées.
  Target surface: article GoCharbon, cluster marketing/copywriting.
  Recommended next step: valider l'intention SEO et rédiger via `200-sg-redact`.

- Working name: « Où trouver de bonnes pages de vente à décortiquer ? ».
  Angle: question pratique, ton naturel et orienté action.
  Source proof: la recherche répond à ce besoin par cas d'usage.
  Target surface: article GoCharbon.
  Recommended next step: utiliser si la recherche de mots-clés favorise un titre interrogatif.

- Working name: « Design, copywriting ou les deux : les meilleures galeries de pages de vente ».
  Angle: reprendre directement la distinction la plus utile de la conversation.
  Source proof: matrice qualitative du présent pack.
  Target surface: article GoCharbon.
  Recommended next step: option éditoriale recommandée si l'article reste comparatif.

- Working name: « Swipe files et landing pages : 10 sites pour arrêter de partir d'une page blanche ».
  Angle: bénéfice immédiat pour un entrepreneur ou un copywriter débutant.
  Source proof: les ressources servent à observer des structures, messages et motifs visuels existants.
  Target surface: article GoCharbon.
  Recommended next step: éviter toute suggestion de copie littérale dans le corps de l'article.

## Supporting Source Notes

### Source Analysis

- Source type: comparatif de produits éditoriaux tiers.
- Core idea: construire une boîte à outils complémentaire plutôt qu'élire une galerie universelle.
- Strongest insight: la valeur ne vient pas seulement du nombre d'exemples, mais du niveau de lecture proposé — capture, filtre, composant, texte ou analyse.
- Audience fit: forte pour les entrepreneurs francophones qui ont besoin d'exemples concrets avant de créer leur page.
- What is worth repurposing: la matrice, les sélections par besoin, la shortlist, les caveats et la méthode d'observation.
- What to avoid echoing too closely: textes commerciaux des ressources, captures tierces et affirmations de performance non documentées.

### Marketing Claims

- Safe claims: « ces ressources permettent d'observer des exemples », « elles sont complémentaires », « certaines privilégient le design, d'autres le copywriting ou l'analyse ».
- Claims to soften: « meilleure », « la plus complète » et toute comparaison de volume — les présenter comme conclusions de la sélection datée.
- Claims to avoid: résultats de conversion, garantie de performance, gratuité permanente ou supériorité absolue.

### Diffusion Map

- Canonical surface: futur guide dans `site/src/data/marketing/copywriting/`.
- Supporting surfaces: `landing-pages.md` et `copywriting/index.md`.
- Repeated concept: apprendre à décortiquer une page au lieu de la copier.
- Per-surface job:
  - guide: comparer les ressources et orienter le choix ;
  - article pages de vente: enseigner la structure et envoyer vers les exemples ;
  - pilier copywriting: situer le guide dans le parcours d'apprentissage.
- Surfaces intentionally skipped: homepage, pages produit, quiz et fiches outils individuelles.

### Suggested Article Backbone

1. Pourquoi une galerie de design ne suffit pas pour apprendre à vendre.
2. Tableau rapide : design, copywriting, analyse et cas d'usage.
3. Les meilleures ressources pour voir des pages complètes.
4. Les meilleures ressources pour étudier le texte et la persuasion.
5. Les meilleures ressources pour les SaaS, formations et pages longues.
6. La shortlist GoCharbon : deux outils pour commencer, quatre pour couvrir tous les besoins.
7. Comment décortiquer une page sans la copier.
8. Limites : curation, droits, données de conversion et pérennité des pages.
9. FAQ courte et liens vers les contenus GoCharbon sur la structure, l'offre et les frameworks.

### Handoff Checklist

- Must route:
  - rédaction originale vers `200-sg-redact` ;
  - rafraîchissement des données volatiles si elles restent chiffrées dans l'article.
- Should route:
  - liens internes et enrichissement du cluster vers `201-sg-enrich` après publication ;
  - vérification finale des URLs et du schéma de contenu.
- Optional:
  - recherche SEO légère pour arbitrer le titre et le slug ;
  - capture d'écran originale ou illustration éditoriale dont les droits sont maîtrisés.
- Deferred / blocked:
  - les quarante liens de Diane ne font pas partie de ce pack, car ils n'ont pas encore été fournis ;
  - aucune bibliothèque interne GoCharbon/ShipGlowz n'est décidée ;
  - la normalisation complète de la gouvernance éditoriale reste un chantier séparé et non bloquant.
