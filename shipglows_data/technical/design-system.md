---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "1.3.0"
project: "gocharbon"
created: "2026-08-12"
updated: "2026-08-13"
status: active
source_skill: sg-design
scope: cross-surface-design-system
owner: "Diane"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "shipglows_data/branding/design-tokens.json"
  - "site/src/styles/generated/design-tokens.css"
  - "site/src/generated/design-tokens.ts"
  - "app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart"
depends_on:
  - "shipglows_data/branding/branding.md"
next_review: "2026-09-13"
next_step: "Appliquer la direction Pixel Mine documentee sans generaliser les choix experimentaux."
---

# Design system cross-surface GoCharbon

## Autorite

`shipglows_data/branding/design-tokens.json` est l'unique autorite executable
pour les decisions visuelles partagees. Son schema valide la structure; les
fichiers CSS, TypeScript et Dart sont des projections generees et ne doivent
jamais etre modifies a la main.

La direction officielle est Pixel Mine: encre bleu-noir, charbon bleu profond,
roche bleu petrole, creme mineral, or et orange secondaire;
Pixelify Sans pour l'impact, Poppins pour la lecture, Sanchez pour les actions;
pixel coherent, bordures franches et ombres dures sans flou. Le neobrutalisme
historique ne subsiste que dans les traits compatibles listes dans
`shipglows_data/branding/branding.md`; il n'est plus une autorite autonome.

## Couches

1. `primitive.*` contient uniquement les matieres premieres officielles.
2. `semantic.*` exprime un role et porte les modes clair/sombre.
3. `component.*` decrit les recettes partagees, sans logique de produit.
4. `surface.web.*` et `surface.app.*` adaptent interaction et densite sans
   redefinir la marque.
5. `legacy.aliases.*` assure une migration temporaire avec date de retrait.

Le site conserve ses breakpoints et interactions hover. Flutter conserve ses
safe areas, sa navigation et des cibles tactiles d'au moins 48 dp. Ces ecarts
sont des adaptations de plateforme, pas des palettes ou styles concurrents.

## Accessibilite

- Un etat succes/erreur/categorie ne repose jamais uniquement sur la couleur.
- Les paires de texte semantiques doivent satisfaire WCAG AA.
- Le focus reste visible et tokenise.
- La reduction de mouvement utilise `semantic.motion.reducedDuration`.
- Les categories du quiz utilisent d'abord icone, libelle ou motif; une couleur
  data-viz additionnelle exige une exception bornee.

## Exceptions et derive

Les seules exceptions ordinaires sont les valeurs systeme, les safe areas, les
medias/illustrations et une data-visualisation accessible. Toute autre valeur
doit etre ajoutee a la source canonique ou declaree avec motif, proprietaire,
portee et expiration dans `design-token-exceptions.json`.

L'audit refuse les litteraux non expliques ainsi que les exceptions expirees ou
inutilisees. Le mode `--check` refuse une sortie absente, modifiee ou obsolete.
Changer une sortie generee ne constitue jamais un changement valide du design.

## Cycle de changement

1. Modifier la source et, si necessaire, son schema.
2. Executer les tests du generateur.
3. Generer les trois projections.
4. Executer `--check`, l'audit et les validations de chaque surface.
5. Verifier contrastes et captures clair/sombre avant fusion.

Un changement de primitive de marque requiert une decision de marque. Un token
semantique ou de composant peut evoluer avec preuve cross-surface. Une
adaptation de plateforme ne peut jamais contourner cette autorite.

## Mapping Flutter attendu

- Les espacements residuels `2, 3, 5, 6, 7, 9, 10, 14 et 15 dp` utilisent les
  pas fractionnaires de `primitive.space`; ils completent la grille de 4 dp et
  ne deviennent pas des tokens propres a un ecran.
- Les images et glyphes recurrentes utilisent l'echelle `primitive.size.icon*`,
  `avatar*` et `mediaThumbnail`; les tailles de mise en page restent separees.
- Les barres de progression choisissent `component.progress.compactHeight` ou
  `comfortableHeight`; une epaisseur locale n'est pas admise.
- Les rails decoratifs utilisent `semantic.shape.decorativeRailWidth`.
- Les trophees, badges de categorie et accents de liste utilisent les recettes
  `component.achievementMedia`, `categoryBadge` et `listAccent`; ces roles sont
  reutilisables entre accueil, classement, profil et resultats.
- Une animation visuelle lineaire utilise `semantic.motion.linearEasing`. Les
  delais reseau, TTL, minuteurs de quiz et planification de notifications sont
  fonctionnels et ne sont pas des tokens design.
