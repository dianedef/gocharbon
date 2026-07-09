---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-12"
created_at: "2026-06-12 12:55:48 UTC"
updated: "2026-06-12"
updated_at: "2026-06-12 13:17:30 UTC"
status: ready
source_skill: 100-sf-spec
source_model: "GPT-5 Codex"
scope: "realigner-copy-entree-et-claims-publics-gocharbon"
owner: "Diane"
confidence: medium
user_story: "En tant que visiteur francophone qui découvre GoCharbon, je veux lire une promesse claire, crédible et cohérente sur toutes les pages d'entrée afin de comprendre vite ce que le site m'apporte et pourquoi je peux lui faire confiance."
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/site/src/pages/index.astro"
  - "/home/claude/gocharbon/site/src/pages/blog.astro"
  - "/home/claude/gocharbon/site/src/pages/quiz.astro"
  - "/home/claude/gocharbon/site/src/pages/outils.astro"
  - "/home/claude/gocharbon/site/src/pages/bio.astro"
  - "/home/claude/gocharbon/site/src/components/NewsletterSaaS.astro"
  - "/home/claude/gocharbon/site/src/config/site.ts"
  - "/home/claude/gocharbon/shipglowz_data/business/business.md"
  - "/home/claude/gocharbon/shipglowz_data/branding/branding.md"
  - "/home/claude/gocharbon/shipglowz_data/product/site/product.md"
  - "/home/claude/gocharbon/shipglowz_data/gtm/site/gtm.md"
  - "/home/claude/gocharbon/shipglowz_data/editorial/site/content-map.md"
depends_on:
  - artifact: "/home/claude/gocharbon/shipglowz_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglowz_data/branding/branding.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglowz_data/product/site/product.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglowz_data/gtm/site/gtm.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglowz_data/editorial/site/content-map.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
evidence:
  - "Audit copy 2026-06-12: site/src/components/NewsletterSaaS.astro cumule des claims non prouves sur tests, validation, deals exclusifs et base abonnes."
  - "Audit copy 2026-06-12: site/src/config/site.ts durcit le footer avec une formule militante non necessaire au contrat produit."
  - "Audit copy 2026-06-12: site/src/pages/blog.astro, site/src/pages/quiz.astro et site/src/pages/outils.astro perdent une partie de la promesse centrale ou melangent des intentions."
  - "Audit copy 2026-06-12: site/src/pages/bio.astro envoie un contresignal de confiance avec un script de blocage de copie/selection."
next_step: "/005-sf-ship realigner-copy-entree-et-claims-publics-gocharbon"
---
# Spec: Realigner copy d'entree et claims publics GoCharbon

## Title

Realigner copy d'entree et claims publics GoCharbon

## Status

draft

## User Story

En tant que visiteur francophone qui découvre GoCharbon, je veux lire une promesse claire, crédible et cohérente sur toutes les pages d'entrée afin de comprendre vite ce que le site m'apporte et pourquoi je peux lui faire confiance.

## Minimal Behavior Contract

Les surfaces d'entree publiques de GoCharbon doivent exposer une meme promesse produit: aider a choisir un point de depart concret, activer un parcours court et avancer sans bullshit. Aucun bloc de copy ne doit affirmer des preuves non visibles dans le repo ou dans la documentation projet. Quand une preuve manque, la copy doit rester prudente, concrete et specifique sur ce qui est vraiment disponible aujourd'hui. Les CTA doivent decrire le gain utilisateur attendu, pas seulement le format de page ou l'outil interne.

## Success Behavior

- La newsletter presente une proposition sobre, sans chiffres ni garanties non prouves.
- Le footer et les pages d'entree secondaires reprennent le positionnement utile, francophone, pragmatique et non dogmatique deja pose par les contrats business et brand.
- Les pages `blog`, `quiz`, `outils` et `bio` orientent mieux le visiteur vers le prochain pas attendu.
- La home reste la surface de reference et les autres pages n'entrent plus en contradiction ou en dilution avec elle.

## Error Behavior

- Si une preuve manque pour un claim de test, de volume, d'exclusivite, d'usage reel ou de resultat, le texte doit etre reformule ou supprime.
- Si une page tente de servir deux intentions en meme temps sans hierarchie claire, la copy doit etre resserree sur l'intention principale de la page.
- Si une promesse plus agressive que le contrat marque/produit est detectee, elle doit etre corrigee avant validation.

## Problem

L'audit copy du 2026-06-12 montre un site dont la home tient mieux la promesse que plusieurs surfaces secondaires. La confiance baisse sur les pages ou composants qui utilisent des claims trop forts ou generiques, notamment la newsletter et le footer. En parallele, plusieurs pages d'entree ne transforment pas assez bien la promesse centrale en benefice concret: elles decrivent un format, une categorie ou une posture, mais pas toujours la valeur immediate ou le prochain pas. Le resultat est un systeme editorial inegal sur des surfaces qui devraient au contraire concentrer la clarte et la credibilite.

## Solution

Faire une passe de realignement copy ciblee sur les principales surfaces publiques d'entree et de conversion. Le travail doit partir de la promesse la plus defendable deja visible sur `site/src/pages/index.astro`, retirer les claims non prouvables, resserrer la hierarchie de message de chaque page et expliciter un prochain pas concret par surface.

## Scope In

- Reecriture ou resserrage de copy sur:
  - `site/src/components/NewsletterSaaS.astro`
  - `site/src/config/site.ts`
  - `site/src/pages/blog.astro`
  - `site/src/pages/quiz.astro`
  - `site/src/pages/outils.astro`
  - `site/src/pages/bio.astro`
- Verification de coherence avec `site/src/pages/index.astro` comme reference de promesse.
- Ajustement des CTA, sous-titres, textes de positionnement et claims de confiance.
- Suppression ou reformulation des claims non prouvables.
- Suppression du script de blocage copie/selection dans `site/src/pages/bio.astro`.
- Harmonisation des slogans globaux du site quand plusieurs formulations sont trop eloignees.
- Documentation des impacts editoriaux/techniques si la posture publique change.

## Scope Out

- Refonte visuelle ou design-system.
- Reecriture massive des articles Markdown dans `site/src/data/**`.
- Changement de taxonomie, de routes, ou de logique de build.
- Lancement d'une nouvelle newsletter, capture email fonctionnelle ou integration ESP.
- Audit legal complet des pages de confiance.
- Repositionnement business majeur de GoCharbon au-dela du cadre deja documente.

## Constraints

- Respecter `AGENTS.md`, `CLAUDE.md`, `shipglowz_data/business/business.md`, `shipglowz_data/branding/branding.md`, `shipglowz_data/product/site/product.md`, `shipglowz_data/gtm/site/gtm.md`.
- Conserver le ton humain, direct, anti-bullshit, en francais et en tutoiement.
- Ne pas inventer de preuve, d'usage interne, de chiffre d'audience, de deals exclusifs, de volume d'abonnes, de tests systematiques ou de validation produit si le repo ne le prouve pas.
- Ne pas transformer le positionnement francophone en militantisme binaire si cette radicalisation n'est pas explicitement supportee par le contrat marque/produit.
- Conserver une intention principale claire par page:
  - `blog`: decouverte et orientation vers les bons contenus
  - `quiz`: qualification et prochain pas
  - `outils`: aide au choix d'outils avec prudence sur la qualification locale
  - `bio`: credibilite fondatrice et confiance
- Le script anti-copie de `bio.astro` doit etre supprime dans ce chantier comme correction de confiance produit visible.
- La newsletter doit articuler les deux angles sans contradiction: focus SaaS francophones quand pertinent, mais promesse assez large pour couvrir l'etat reel du site (outils, parcours, tests et signaux utiles).
- Les slogans globaux doivent etre harmonises si le chantier revele plusieurs formulations trop eloignees de la meme promesse centrale.

## Test Contract

- surface: public Astro entry surfaces + one shared Astro newsletter component + one static site copy config file
- proof_profile: mixed-copy-static
- proof_order:
  1. diff review against spec and claims rules
  2. `pnpm build`
  3. manual page review on `/`, `/blog`, `/quiz`, `/outils`, `/bio`
  4. final copy/trust verification against `business`, `branding`, `product`, `gtm`
- required_scenario_ids:
  - `COPY-ENTRY-01` newsletter no longer claims unproven testing, exclusivity, subscriber count, or guaranteed validation
  - `COPY-ENTRY-02` footer/global slogans converge on one pragmatic francophone promise without militant overreach
  - `COPY-ENTRY-03` blog page states user benefit and next step, not just category browsing
  - `COPY-ENTRY-04` quiz page states expected outcome after each quiz format
  - `COPY-ENTRY-05` outils page keeps tool-choice help as primary intent and secondary clusters as subordinate
  - `COPY-ENTRY-06` bio page removes copy/selection blocking script and strengthens trust posture
  - `COPY-ENTRY-07` all touched surfaces remain coherent with `site/src/pages/index.astro`
- required_results:
  - build succeeds
  - all targeted claims are either provable or prudently reformulated
  - all targeted CTA and intros expose a concrete next step
  - trust posture improves on newsletter, footer, and bio surfaces
  - no touched page drifts outside tone, tutoiement, or francophone positioning rules
- exception_with_proof:
  - no automated conversion, analytics, or behavioral proof is required because this chantier changes static public copy, not event instrumentation or business logic
- exception_without_proof: none

## Dependencies

- Business contract: `shipglowz_data/business/business.md` `1.0.0`
- Brand contract: `shipglowz_data/branding/branding.md` `1.0.0`
- Product contract: `shipglowz_data/product/site/product.md` `1.0.0`
- GTM contract: `shipglowz_data/gtm/site/gtm.md` `1.0.0`
- Content surface map: `shipglowz_data/editorial/site/content-map.md` `1.0.0`
- Fresh docs verdict: `fresh-docs not needed`
  - raison: le chantier porte sur la coherence de copy publique et de claims editoriaux internes, sans dependance critique a un comportement externe recent de framework, SDK, auth, build provider ou API tierce.

## Invariants

- La promesse centrale de GoCharbon reste un accelerateur de clarte et d'execution, pas une machine a vendre du reve.
- La home reste la reference la plus complete de la promesse publique actuelle.
- Les claims sensibles ou objectivables doivent etre prouvables ou prudemment formules.
- Les pages d'entree doivent converger vers un prochain pas concret: lire, choisir, lancer un quiz, ouvrir un parcours ou explorer des outils avec contexte.
- La qualification locale des outils reste prudente et factuelle.

## Links & Consequences

- Si la newsletter est temperee, le site gagne en confiance mais peut perdre un peu d'agressivite marketing. Ce tradeoff est souhaite par le contrat de marque.
- Si le footer est recentre, le positionnement devient plus largement recevable sans abandonner l'angle francophone/europeen.
- Si la page quiz est mieux orientee sur le resultat utilisateur, elle devrait mieux convertir le trafic issu de la home, du blog et de la bio.
- Si la page outils se recentre sur l'aide au choix, il faudra veiller a ne pas enterrer completement les clusters adjacents utiles comme les revenus annexes; ils doivent rester des voies secondaires, pas le message principal.
- Si `bio.astro` conserve un script bloquant les interactions, la page risque de rester en tension avec le message de confiance meme si la copy est bonne.

## Documentation Coherence

- Pas de doc technique framework a mettre a jour par defaut.
- Si la posture publique sur les claims newsletter/footer evolue sensiblement, verifier si `shipglowz_data/branding/branding.md` ou `shipglowz_data/gtm/site/gtm.md` doivent etre clarifies dans un chantier docs distinct.
- La suppression du script de `bio.astro` doit etre notee dans la verification comme correction de posture confiance/UX.
- Pas de `TASKS.md` ou `AUDIT_LOG.md` a modifier dans ce chantier spec.

## Edge Cases

- Page qui garde un ton fort sans preuve explicite, mais avec une formulation assez floue pour passer entre les mailles.
- CTA qui semble clair localement mais ne prepare pas le bon prochain pas depuis la page precedente.
- Copy newsletter qui reste trop “template startup” meme apres suppression des claims les plus fragiles.
- Risque de sur-corriger vers une copy fade, prudente mais moins incarnée.
- Pages differentes qui adoptent chacune une version legerement differente de la proposition de valeur.

## Implementation Tasks

1. Relire et fixer `site/src/components/NewsletterSaaS.astro` pour supprimer les claims non prouves et reformuler une proposition d'inscription defendable aujourd'hui.
2. Revoir `site/src/config/site.ts` pour adoucir ou resserrer le slogan de footer afin qu'il reste francophone/pragmatique sans militantisme reducteur.
3. Recrire l'introduction et les CTA de `site/src/pages/blog.astro` pour reconnecter la page a la promesse produit et a un prochain pas concret.
4. Recentrer `site/src/pages/quiz.astro` sur le resultat utile attendu apres chaque format de quiz, pas seulement sur la duree ou le niveau de profondeur.
5. Rehierarchiser `site/src/pages/outils.astro` pour garder l'aide au choix d'outils comme message principal et releguer les clusters adjacents au second plan.
6. Supprimer le script de blocage copie/selection de `site/src/pages/bio.astro` et resserrer la copy de confiance si necessaire.
7. Harmoniser les slogans globaux du site quand plusieurs formulations se contredisent ou se dispersent.
8. Faire une passe de coherence avec `site/src/pages/index.astro` pour verifier que les pages ciblees reprennent la meme promesse sans contradiction.
9. Produire une verification manuelle courte des surfaces modifiees avec notes sur ton, preuves et prochain pas.

## Acceptance Criteria

- Aucun texte public cible ne contient de claim d'usage, de test, de volume, d'exclusivite ou de preuve non soutenu par des elements visibles et defendables du projet.
- Le footer exprime une posture distincte mais non caricaturale, compatible avec le contrat de marque et le positionnement produit.
- `blog.astro`, `quiz.astro` et `outils.astro` indiquent clairement ce que le visiteur gagne et quoi faire ensuite.
- `bio.astro` renforce la credibilite fondatrice au lieu d'introduire une friction ou un doute inutile.
- Le script de blocage copie/selection n'est plus present dans `bio.astro`.
- Les slogans globaux visibles sur les surfaces touchees ne se contredisent plus.
- Les textes cibles restent en francais, au tutoiement, avec une voix directe et incarnée.
- Le build passe apres les changements.

## Test Strategy

- Relecture editoriale diff-based avec checklist:
  - claim prouvable
  - benefice clair
  - prochain pas visible
  - ton GoCharbon respecte
- `pnpm build`
- Revue manuelle des pages:
  - `/`
  - `/blog`
  - `/quiz`
  - `/outils`
  - `/bio`
- Verification finale contre les docs `business`, `branding`, `product`, `gtm`.

## Risks

- Les contrats business/brand/product/gtm ont des metadata vieillissantes ou des `next_review` depasses, donc certaines nuances de positionnement peuvent encore bouger.
- Le chantier peut glisser d'une passe copy vers une discussion produit plus large sur newsletter, posture politique, ou friction trust.
- La suppression de claims marketing peut reduire artificiellement l'energie commerciale si la reecriture n'est pas suffisamment concrete.
- La page `bio` peut demander une decision hors copy pure si le script anti-interaction est considere comme un probleme produit/UX plus large.

## Execution Notes

- Baser la reecriture sur la promesse la plus solide deja visible dans `site/src/pages/index.astro`.
- Privilegier la suppression ou la concretisation des claims plutot qu'un simple adoucissement cosmetique.
- Si un point de positionnement semble depasser le contrat disponible, le signaler plutot que le trancher de facon implicite.
- Ce chantier ne doit pas devenir une refonte generale de tout le corpus `site/src/data/**`.
- Lire d'abord `site/src/pages/index.astro`, `site/src/components/NewsletterSaaS.astro`, `site/src/config/site.ts`, `site/src/pages/blog.astro`, `site/src/pages/quiz.astro`, `site/src/pages/outils.astro`, `site/src/pages/bio.astro`.
- Stop condition: si l'harmonisation des slogans force une redefinition du positionnement business au-dela des docs actuelles, arreter et re-router vers une clarification docs/brand.
- Validation commands:
  - `pnpm build`
  - `python3 /home/claude/shipglowz/tools/shipglowz_metadata_lint.py shipglowz_data/workflow/specs/realigner-copy-entree-et-claims-publics-gocharbon.md`
- Branch observee pendant la creation de la spec: `main`.

## Open Questions

None

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
|----------|-------|-------|--------|--------|-----------|
| 2026-06-12 12:55:48 UTC | 100-sf-spec | GPT-5 Codex | creation spec depuis audit copy + chantier potentiel | spec creee | /101-sf-ready realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 12:57:50 UTC | 101-sf-ready | GPT-5 Codex | revue readiness initiale | not ready | /100-sf-spec realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 13:02:20 UTC | 101-sf-ready | GPT-5 Codex | revue readiness apres arbitrages user | ready | /102-sf-start realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 13:17:30 UTC | 102-sf-start | GPT-5 Codex Spark subagent | implementation copy publique sur surfaces ciblees + build local | implemented | /103-sf-verify realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 13:17:30 UTC | 103-sf-verify | GPT-5 Codex | verification diff/build + revue statique + tentative preuve navigateur locale | partial | /104-sf-end realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 13:17:30 UTC | 104-sf-end | GPT-5 Codex | cloture avant ship a la demande user | deferred | /005-sf-ship realigner-copy-entree-et-claims-publics-gocharbon |
| 2026-06-12 13:17:30 UTC | 001-sf-build | GPT-5 Codex | orchestration lifecycle via sous-agent jusqu'a end, sans ship | implemented | /005-sf-ship realigner-copy-entree-et-claims-publics-gocharbon |

## Current Chantier Flow

- 100-sf-spec: complete
- 101-sf-ready: ready
- 102-sf-start: implemented
- 103-sf-verify: partial
- 104-sf-end: deferred
- 005-sf-ship: pending
