---
artifact: competitive_intelligence
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon"
created: "2026-05-11"
updated: "2026-05-11"
status: reviewed
source_skill: sf-docs
scope: project-competitors-and-inspirations
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
docs_impact: "yes"
security_impact: "none"
reference_categories:
  - competitors
  - inspirations
  - content-opportunities
  - tool-benchmarks
source_policy: "Utiliser ce registre comme outil interne de veille, d'inspiration et de cadrage. Toute affirmation publique doit être vérifiée à la source avant publication."
target_projects:
  - gocharbon
evidence:
  - "shipflow_data/business/site/business.md"
  - "shipflow_data/product/site/product.md"
  - "shipflow_data/gtm/site/gtm.md"
  - "shipflow_data/editorial/site/content-map.md"
  - "shipflow_data/research/site/SOURCE.md"
  - "shipflow_data/research/site/SPEC-roadmap.md"
depends_on:
  - "shipflow_data/business/site/business.md"
  - "shipflow_data/product/site/product.md"
  - "shipflow_data/gtm/site/gtm.md"
  - "shipflow_data/editorial/site/content-map.md"
supersedes:
  - "/home/claude/gocharbon/concurrent.md"
  - "/home/claude/gocharbon/INSPIRATION.md"
  - "/home/claude/gocharbon/shipflow_data/research/site/INSPIRATION.md"
next_review: "2026-08-11"
next_step: "/sf-market-study update shipflow_data/business/site/project-competitors-and-inspirations.md"
---

# Concurrents et inspirations — GoCharbon

## Rôle

Ce registre sert à cadrer la veille concurrentielle, les inspirations éditoriales et les opportunités de contenu de GoCharbon. Il n'est pas une page publique et ne doit pas être utilisé comme source de vérité commerciale sans vérification fraîche.

GoCharbon est un média/outillage éducatif pour entrepreneurs. Les entrées utiles sont donc surtout :

- des concurrents d'attention : médias, formations, newsletters et créateurs qui captent la même audience ;
- des concurrents fonctionnels : parcours, quiz, coaching, bibliothèques de ressources et communautés ;
- des inspirations de contenu : sujets, formats, architectures éditoriales et angles de preuve ;
- des signaux d'outils : fiches, benchmarks SEO/GEO, validation marché, analytics et productivité.

## Règles de doctrine

- Séparer clairement observation, inférence et inspiration.
- Ne jamais copier une structure, une promesse, un texte ou une mécanique propriétaire sans réinterprétation GoCharbon.
- Vérifier les URLs, offres, prix, fonctionnalités et claims avant toute publication publique.
- Ne pas transformer une inspiration en recommandation outil sans preuve, test ou source officielle.
- Marquer les sujets récents ou issus de plateformes de veille comme `à vérifier` tant qu'ils n'ont pas été relus.
- Utiliser ce registre pour nourrir `shipflow_data/editorial/site/content-map.md`, pas pour contourner les règles de source des fiches outils.

## Benchmarks structurants

| Source | Type | Observation | Inférence GoCharbon | Inspiration exploitable | Statut preuve |
|---|---|---|---|---|---|
| Marketing Mania (`https://marketingmania.fr/accueil`) | Média/formation marketing | Promesse simple, tunnel par objectif, présence YouTube. | Benchmark de clarté d'entrée et de packaging d'offres. | Simplifier les choix de parcours et rendre la promesse plus lisible. | À vérifier avant citation publique |
| LiveMentor (`https://www.livementor.com/application/`) | Formation/coaching entrepreneurial | Parcours d'objectif, bibliothèque, mentorat, communauté et espace applicatif. | Benchmark fonctionnel plus proche qu'un blog classique. | Penser GoCharbon comme une expérience d'activation, pas seulement comme des articles. | À vérifier avant citation publique |
| Foundr (`https://foundr.com/`) | Média/formation entrepreneuriale | Crédibilité par experts, success stories, contenus gratuits et preuves sociales. | Benchmark de confiance et de preuve. | Mieux matérialiser preuves, résultats et parcours selon maturité lecteur. | À vérifier avant citation publique |
| Web & SEO (`https://www.webandseo.fr/plan-de-site/`) | Média SEO/affiliation | Architecture riche de contenus SEO, affiliation et business web. | Benchmark de profondeur éditoriale. | Identifier les clusters à compléter côté affiliation, SEO et monétisation. | À vérifier avant citation publique |
| Korben (`https://korben.info/feed/`) | Veille tech francophone | Flux de veille rapide sur outils, culture web et sécurité. | Inspiration de rythme et de découverte. | Alimenter la veille outils sans sacrifier la qualification locale. | À vérifier avant citation publique |
| Jean-Charles Kurdali (`https://jeancharleskurdali.substack.com/`) | Créateur/newsletter business | Contenu founder-led et distribution newsletter. | Inspiration de voix indépendante et de relation audience. | Nourrir les formats newsletter et analyses personnelles. | À vérifier avant citation publique |

## Sources d'inspiration existantes

- `https://go.marketingmania.fr/trouvez-votre-idee/?el=home-pdi&htrafficsource=site`
- `https://youtube.com/@marketingmania?si=aZJUDdzY-mw0Alfd`
- `https://jeancharleskurdali.substack.com/`
- `https://youtube.com/@jckurdali?si=MnFjxoH3qEpwsiYB`
- `https://www.webandseo.fr/plan-de-site/`
- `https://korben.info/feed/`

## À transformer en contenu ou benchmark

| Lien | Type | Score | Usage concret |
|---|---:|:---:|---|
| [myGEOscore](https://betalist.com/startups/mygeoscore) | Fiche outil / concurrent SEO IA | 9/10 | Sujet "GEO: comment savoir si ton site est visible dans ChatGPT/Perplexity". Peut devenir fiche outil + guide pratique. |
| [Validue](https://betalist.com/startups/validue) | Fiche outil / méthode startup | 8/10 | Angle GoCharbon naturel: tester ses hypothèses avant de construire. Article "les hypothèses qui tuent ton projet". |
| [Populous](https://betalist.com/startups/populous) | Fiche outil / validation marché | 8/10 | Sujet utile pour entrepreneurs: simuler/tester une idée auprès de clients avant de lancer. |
| [VenturOS](https://betalist.com/startups/venturos) | Inspiration méthode dirigeant | 7/10 | Peut alimenter un article sur l'OS de l'entrepreneur: décisions, priorités, feedback loops. |
| [Kurate](https://betalist.com/startups/kurate) | Fiche outil / veille recherche | 7/10 | Utile pour entrepreneurs qui veulent suivre recherche IA/productivité sans se noyer. |
| [DataForSEO Live vs Standard](https://dataforseo.com/help-center/live-vs-standard-method/amp) | Source technique SEO | 7/10 | Base pour expliquer live vs batch dans les APIs SEO. Vérifier docs fraîches avant publication. |
| [Web-Analytics.ai](https://web-analytics.ai/) | Fiche outil / analytics | 6/10 | Sujet "analytics lisibles pour fondateurs qui ne veulent pas vivre dans GA4". |
| [IntelCue](https://betalist.com/startups/intelcue-2) | Fiche outil / veille concurrente | 6/10 | Bon article sur la veille concurrente assistée par IA. |
| [Conscriba](https://betalist.com/startups/conscriba) | Fiche outil / GEO | 6/10 | À classer avec myGEOscore dans un futur comparatif "visibilité IA". |

## À garder comme inspiration faible

| Lien | Type | Score | Pourquoi |
|---|---:|:---:|---|
| [Spec27](https://betalist.com/startups/spec27) | Article agents IA | 5/10 | Peut nourrir un article sur les specs comme garde-fous des agents IA. |
| [BundleUp](https://betalist.com/startups/bundleup) | Article API | 5/10 | Sujet "API unifiée vs intégrations maison". |
| [Impulse AI](https://betalist.com/startups/impulse-ai) | Article IA production | 5/10 | Bon prétexte pour parler du vrai coût de déployer une IA en prod. |

## Règle de passage vers contenu public

Avant de publier une fiche, un comparatif ou une mention concurrente issue de ce registre :

1. Vérifier la page officielle ou la source primaire.
2. Ajouter les sources utiles dans `sourcesVerification` si cela concerne une fiche outil.
3. Distinguer l'alternative française, européenne ou étrangère selon la méthode locale.
4. Écrire les limites et les biais possibles, surtout si l'angle touche l'affiliation.
5. Relier le sujet au bon pilier dans `shipflow_data/editorial/site/content-map.md`.

## Question ouverte

- Est-ce que GoCharbon doit publier des fiches outils BetaList très récentes, ou seulement des articles de méthode plus intemporels ?
