---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "2.2.0"
project: "gocharbon"
created: "2026-06-11"
updated: "2026-08-13"
status: active
source_skill: sg-design
scope: "design-system-authority"
owner: "Diane"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "shipglows_data/branding/branding.md"
  - "shipglows_data/branding/design-tokens.json"
  - "shipglows_data/branding/design-tokens.schema.json"
  - "tools/design-tokens/generate.mjs"
  - "tools/design-tokens/audit.mjs"
  - "site/src/styles/generated/design-tokens.css"
  - "site/src/generated/design-tokens.ts"
  - "app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart"
depends_on:
  - artifact: "shipglows_data/branding/branding.md"
    artifact_version: "1.4.0"
    required_status: reviewed
  - artifact: "shipglows_data/branding/design-tokens.json"
    artifact_version: "1.5.0"
    required_status: canonical
supersedes:
  - artifact: "shipglows_data/technical/site/design-system-authority.md"
    artifact_version: "1.0.0"
evidence:
  - "Le generateur deterministe produit les carriers CSS, TypeScript et Dart depuis le JSON canonique."
  - "Le mode --check detecte toute derive des sorties generees."
  - "L'audit refuse les litteraux visuels non autorises dans l'UI."
next_review: "2026-09-13"
next_step: "Appliquer cette autorite aux prochains composants Pixel Mine sans modifier les comportements metier."
---

# Autorite du design system GoCharbon

## Hierarchie des autorites

1. `shipglows_data/branding/branding.md` documente la direction, les invariants, les decisions confirmees, experimentales et rejetees. Il ne porte aucune valeur executable.
2. `shipglows_data/branding/design-tokens.json` est l'unique autorite executable pour les valeurs visuelles partagees.
3. `shipglows_data/branding/design-tokens.schema.json` valide la forme du canon.
4. `tools/design-tokens/generate.mjs` projette le canon vers les carriers de plateforme.
5. Les composants web et Flutter consomment les carriers; ils ne redefinissent pas la marque.

En cas de contradiction, le JSON canonique gagne pour une valeur executable. Une contradiction entre la doctrine et le canon bloque le changement jusqu'a clarification; elle n'autorise pas une interpretation locale.

## Carriers generes

| Surface | Carrier genere | Consommation |
|---|---|---|
| Web CSS | `site/src/styles/generated/design-tokens.css` | importe par `site/src/styles/global.css`, puis consomme par Astro, Vue et UnoCSS |
| Web TypeScript | `site/src/generated/design-tokens.ts` | configuration et code TypeScript ayant besoin de tokens types |
| Flutter | `app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart` | `ThemeData`, extensions de theme et helpers `Gc*` |

Ces trois fichiers sont des projections. Ils ne doivent jamais etre modifies manuellement. Une modification directe est une derive, meme si le rendu obtenu semble correct.

Les fichiers web de Pixelify Sans sont fournis localement par `@fontsource-variable/pixelify-sans`; ce paquet est le carrier technique de la famille nommee par le token `primitive.font.family.display`, pas une autorite typographique concurrente.

## Role exact de `global.css`, UnoCSS et Flutter

- `site/src/styles/global.css` est un consommateur et une couche d'assemblage CSS. Il peut definir des recettes et aliases qui referencent les variables `--gc-*`, mais ne peut pas introduire une nouvelle decision visuelle partagee.
- UnoCSS execute les tokens et les expose aux utilitaires web. Il ne constitue ni une palette ni un theme concurrent.
- Les styles locaux Astro/Vue peuvent organiser le layout et combiner des tokens existants. Ils ne peuvent pas devenir un depot de valeurs visuelles arbitraires.
- Flutter consomme le canon via `ThemeData`, les extensions et les helpers `Gc*`. Aucun `Color(0x...)`, `Colors.*` ou style partage duplique localement n'est admis.
- Une divergence necessaire de plateforme commence dans `surface.web.*` ou `surface.app.*`, puis est generee.

## Direction gouvernee

La direction active est **Pixel Mine**. Le neobrutalisme historique n'est conserve que pour les traits compatibles deja prouves : contours francs, angles nuls ou faibles, ombres dures sans flou et actions lisibles. Il ne peut pas justifier une nouvelle rotation, un surdimensionnement, un mouvement decoratif ou une recette absente du canon.

Les statuts de la direction sont portes par `branding.md` :

- un choix **confirme** peut etre encode en primitive, role semantique ou recette partagee;
- un choix **experimental** reste borne a `surface.*` ou au prototype qui le teste;
- un choix **rejete** ne doit pas reapparaitre sous forme de variante locale.

## Composants concernes

- `site/src/components/components/BaseNavigation.astro` et les futurs onglets de monde;
- `site/src/pages/index.astro` et les composants extraits de la landing;
- `site/src/components/vue/SentenceQuiz.vue` et `Quiz.vue`;
- cartes, boutons, champs, pills, jauges, rails, badges et recompenses;
- pictogrammes raster Pixel Mine sous `site/public/images/icons/pixel-mine-v1/`, distincts des controles fonctionnels natifs;
- parcours, progression et outils;
- themes et widgets Flutter equivalents.

Cette liste identifie les consommateurs; elle ne donne pas l'autorisation de modifier leurs comportements metier.

## Regles non negociables

1. Toute nouvelle decision visuelle partagee commence dans `design-tokens.json`, jamais dans un carrier ou un composant.
2. Une valeur existante est referencee par son role le plus semantique disponible; une primitive n'est pas dupliquee sous un autre nom pour convenance locale.
3. Les differences web/app passent par `surface.web.*` et `surface.app.*`.
4. Les medias et illustrations peuvent etre des assets, mais leur placement, taille recurrente, bordure et relation au contenu restent tokenises lorsqu'ils deviennent systematiques.
5. Une information ne repose jamais uniquement sur la couleur, un asset ou une animation.
6. Le mode sombre et le mode clair partagent la meme hierarchie fonctionnelle; ils ne modifient pas le metier.
7. Le fonctionnement hors ligne de Flutter est preserve.

## Interdictions

- editer manuellement un carrier genere;
- ajouter une valeur d'abord dans `global.css`, UnoCSS, un composant Astro/Vue ou un widget Flutter;
- introduire `#hex`, `rgb(...)`, `rgba(...)` ou `hsl(...)` dans l'UI web;
- introduire `Color(0x...)` ou `Colors.*` dans Flutter;
- creer un second theme dans UnoCSS ou `ThemeData` sans origine canonique;
- utiliser un asset raster comme interface complete ou y integrer du texte fonctionnel;
- generaliser une decision experimentale sans validation explicite;
- reintroduire un choix marque comme rejete dans `branding.md`;
- modifier le comportement du quiz, des parcours, de la progression ou de l'offline sous couvert de refonte.

Les seules exceptions techniques admises sont documentees, bornees, possedees et datees dans `shipglows_data/branding/design-token-exceptions.json`. Une exception n'est jamais une nouvelle decision de marque.

## Cycle de changement

1. Verifier le statut de la decision dans `branding.md`.
2. Modifier `design-tokens.json`; modifier le schema seulement si une nouvelle forme de token est necessaire.
3. Executer `node tools/design-tokens/test.mjs`.
4. Executer `node tools/design-tokens/generate.mjs`.
5. Executer `node tools/design-tokens/generate.mjs --check`.
6. Executer `node tools/design-tokens/audit.mjs --path site/src` et l'audit Flutter correspondant.
7. Executer les builds et tests disponibles pour chaque surface touchee.
8. Rechercher les anciennes regles contradictoires avant validation.

## Preuves minimales attendues

- diff du JSON canonique et de la doctrine;
- metadonnees et versions documentaires a jour;
- schema et resolution de tous les modes valides;
- generation deterministe et carriers synchronises;
- audit sans litteral interdit ni exception morte;
- `git diff --check`;
- recherche ciblee confirmant que `global.css` n'est plus presente comme source d'autorite.
