---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-08-20"
created_at: "2026-08-20 07:59:15 UTC"
updated: "2026-08-22"
updated_at: "2026-08-22 00:19:32 UTC"
status: ready
source_skill: 100-sg-spec
source_model: "GPT-5 Codex"
scope: "cross-surface-activation-funnel"
owner: "dianedef"
confidence: high
risk_level: high
security_impact: yes
docs_impact: yes
priority: P0
user_story: "En tant que visiteur francophone indécis, je veux recevoir une orientation honnête vers un parcours public puis accomplir une première action, sans confondre mon modèle d'activité avec mon niveau de connaissances business."
linked_systems:
  - "site/"
  - "app_quiz/flutter_app"
  - "app_quiz/convex"
  - "shipglows_data/product/site/product.md"
  - "shipglows_data/product/app_quiz/product.md"
external_dependencies:
  - "Convex HTTP actions"
  - "Convex cron jobs"
depends_on:
  - artifact: "shipglows_data/product/site/product.md"
    artifact_version: "1.1.0"
    required_status: reviewed
  - artifact: "shipglows_data/product/app_quiz/product.md"
    artifact_version: "1.3.0"
    required_status: reviewed
  - artifact: "shipglows_data/technical/site/architecture.md"
    required_status: active
  - artifact: "shipglows_data/technical/app_quiz/architecture.md"
    artifact_version: "1.6.0"
    required_status: active
supersedes: []
evidence:
  - "site/src/data/profileTaxonomy.ts defines five canonical orientation archetypes and excludes livecommerce as a primary result."
  - "site/src/components/vue/SentenceQuiz.vue still scores livecommerce and can link to routes removed by the parcours-only build."
  - "site/src/utils/build-scope.ts exposes only the homepage, parcours index, five pilot paths and legal pages in the default production build."
  - "app_quiz uses finance, marketing, management and ecommerce knowledge categories and recommends content from quiz performance."
  - "Several current app recommendation URLs target site routes removed by the default production build."
  - "https://docs.convex.dev/functions/http-actions documents public HTTP actions, explicit request validation responsibility and CORS handling."
  - "https://docs.convex.dev/scheduling/cron-jobs documents recurring cleanup jobs."
  - "https://docs.convex.dev/production/usage-limits documents deployment-level usage guardrails."
next_step: "Run desktop/mobile browser proof when Chromium is available, then ready the deferred app slice."
---

# Spec: funnel d'activation canonique GoCharbon

🔴 [gocharbon] spec: Funnel d'activation canonique GoCharbon | status: ready | path: shipglows_data/workflow/specs/gocharbon-canonical-activation-funnel.md | next: site-browser-proof | id: gocharbon-canonical-activation-funnel

## Title

Funnel d'activation canonique GoCharbon

## Status

Ready pour les tranches site et app. La tranche site `orientation → destination publique → première action locale` est livrée pour itération; la tranche app borne maintenant le résultat de connaissances, les sorties publiques et leur attribution. La mesure hébergée reste explicitement différée et soumise à une décision de collecte et de rétention.

## User Story

En tant que visiteur francophone indécis, je veux recevoir une orientation honnête vers un parcours public puis accomplir une première action, sans confondre mon modèle d'activité avec mon niveau de connaissances business.

## Minimal Behavior Contract

Quand un visiteur complète le questionnaire d'orientation du site, le système retourne exactement un des cinq archétypes canoniques et propose une destination réellement publiée. Pour le pilote `service`, la destination primaire est le parcours freelance et le visiteur peut y marquer une première action. Quand un joueur termine un quiz dans l'app, l'app décrit uniquement sa maîtrise de la catégorie jouée et recommande une ressource publiée sans inférer un métier. Si une destination n'est pas publique, si le résultat est inconnu ou si la mesure échoue, l'utilisateur reste sur une route valide, voit une formulation honnête et peut poursuivre sans perdre son résultat. Le cas facile à manquer est le build `parcours-only`, qui supprime des routes pourtant présentes dans le code source.

## Success Behavior

- Le questionnaire de la homepage ne produit que `service`, `content`, `ecommerce`, `formation` ou `saas`.
- Un résultat `service` ouvre `/parcours/freelance`, disponible dans le build de lancement.
- Les autres résultats ouvrent une destination présente dans le build courant ou le hub `/parcours` avec un libellé non personnalisé explicite.
- L'app parle de score, maîtrise et ressource d'approfondissement; elle ne parle jamais de « business idéal ».
- Chaque CTA cross-surface porte une attribution stable et pointe vers une URL canonique publiée.
- Le premier signal de valeur du pilote est `first_action_marked` après `orientation_completed` et `parcours_opened`.

## Error Behavior

- Archétype inconnu, route non publiée ou mapping absent : repli vers `/parcours`, sans 404 et sans inventer une recommandation.
- Échec de télémétrie : navigation et progression continuent; aucune erreur produit bloquante n'est affichée.
- Payload d'événement hors allowlist, surdimensionné ou contenant une donnée interdite : rejet sans persistance.
- App hors ligne ou ressource retirée : le résultat reste consultable et le CTA explique que la ressource est temporairement indisponible.

## Problem

GoCharbon expose actuellement deux produits appelés « quiz » qui répondent à des questions différentes. Le site recommande un modèle d'activité, tandis que l'app teste des connaissances. La documentation les présente encore partiellement comme deux diagnostics interchangeables. En parallèle, le questionnaire express utilise encore `livecommerce` comme résultat principal et certaines recommandations pointent vers des routes retirées du build public. Le produit ne peut donc ni promettre un funnel cohérent ni mesurer honnêtement l'activation.

## Solution

Établir une architecture à deux rôles reliés par un même registre de destinations publiques :

1. le site possède l'orientation `besoin → archétype → parcours`;
2. l'app possède le jeu `catégorie de connaissances → score → ressource`;
3. les deux surfaces consomment un contrat de destination qui refuse les routes non publiées;
4. le pilote `service → freelance` prouve le funnel jusqu'à une première action;
5. un contrat d'événements minimal mesure la valeur sans fusionner les identités ni les taxonomies.

## Product Decisions

- `GC-ACT-001` — confirmed — Le site est l'unique autorité d'orientation vers un modèle d'activité.
- `GC-ACT-002` — confirmed — L'app est un quiz de connaissances; ses catégories ne sont pas des archétypes métier.
- `GC-ACT-003` — confirmed — Les cinq archétypes canoniques restent `service`, `content`, `ecommerce`, `formation`, `saas`. Le `live` est une modalité transversale; `livecommerce` désigne uniquement sa variante de vente en direct et reste un sous-profil de `ecommerce`, avec `content` comme influence secondaire.
- `GC-ACT-004` — confirmed — Le premier pilote est `service → freelance`, car il correspond au cœur de cible à budget limité, promet un résultat terrain court et dispose déjà d'un parcours public.
- `GC-ACT-005` — evidence_backed — La destination publiée gouverne le CTA; une recommandation moins spécifique mais disponible vaut mieux qu'une 404 prétendument personnalisée.
- `GC-ACT-006` — unknown_operator_authority — La collecte anonyme first-party recommandée requiert validation de sa rétention avant implémentation.

### Before → After

- Avant : deux quiz présentés comme diagnostics d'orientation → Après : orientation métier sur le site, maîtrise business dans l'app.
- Avant : résultats et catégories partiellement concurrents → Après : deux axes distincts reliés uniquement par des destinations publiées.
- Avant : CTA calculé depuis le code source même si la route est supprimée au build → Après : CTA résolu depuis le périmètre public effectif.
- Avant : complétion ou clic générique comme valeur → Après : première action marquée dans un parcours après orientation.

## Scope In

- Contrat canonique des rôles site/app et vocabulaire public associé.
- Registre ou résolveur des destinations publiées pour le build `parcours-only` et le build complet.
- Alignement du questionnaire express sur les cinq archétypes canoniques.
- Suppression de `livecommerce` comme résultat principal, sans supprimer son contenu lorsqu'il traite réellement de vente en direct.
- Traitement de l'affinité pour le live comme préférence transversale compatible avec `content`, `formation`, `service` ou `ecommerce`, sans orientation automatique vers le commerce.
- Pilote `service → /parcours/freelance → first_action_marked`.
- Attribution stable des CTA depuis l'app et le site.
- Contrat minimal d'événements anonymes cross-surface.
- Tests de mapping, de build public, de navigation, de wording et de défaillance de mesure.

## Scope Out

- Fusion des comptes, profils, XP ou progressions entre le site et l'app.
- Conversion des catégories de connaissances de l'app en archétypes métier.
- Publication immédiate de tous les parcours, du blog, des outils ou des quiz longs du site.
- Refonte visuelle des quiz, des parcours ou de l'app.
- Micro-apprentissage, ligues, chat, LMS, nouveaux badges ou nouvelle gamification.
- Optimisation SEO ou éditoriale générale des cinq parcours pilotes.
- Déploiement, modification de DNS ou suppression du runtime legacy.

## Ready Delivery Slice

La readiness du présent run couvre uniquement les tâches 1 à 3 sur la surface `site/` : contrat local de destination publique, alignement de `SentenceQuiz` sur cinq archétypes, fallback de build, contexte `service` et accès à la première action locale du parcours freelance. Les tâches 4 à 6 restent différées. Aucun code Flutter/Convex, événement hébergé, changement de confidentialité ou déploiement n'est autorisé par cette transition.

## Constraints

- Le build production du site reste `parcours-only` tant qu'une décision de lancement distincte ne le change pas.
- Aucune URL supprimée par le build ne peut être présentée comme prochaine action.
- Aucune réponse brute au questionnaire, email, Firebase UID, pseudonyme public ou texte libre n'entre dans les événements du funnel.
- Les erreurs de mesure sont fail-open pour le parcours utilisateur et fail-closed pour la persistance.
- Le site et l'app gardent leurs runtimes, sources et cycles de livraison séparés.
- Les claims restent anti-bullshit : une orientation est une direction à tester, jamais une garantie de revenu ou de compatibilité personnelle.

## Test Contract

Profiles: tranche prête — site statique desktop/mobile en build `parcours-only` et complet. Proof order: tests unitaires de scoring/tie-break/résolution → build site réduit et scan des liens → parcours navigateur du pilote. Tranches différées — Flutter Web sur `quiz.gocharbon.fr` et Convex HTTP uniquement après leur readiness propre; la preuve de mesure hébergée reste interdite avant décision de politique de données.

## Dependencies

- `profileTaxonomy.ts` reste l'autorité des archétypes et sous-profils du site.
- `build-scope.ts` reste l'autorité du périmètre public du lancement.
- Les recommandations Convex restent l'autorité du choix de ressource après un quiz de connaissances.
- Le parcours freelance et sa progression locale existent déjà.
- La décision de collecte/rétention anonyme bloque uniquement la tranche de mesure hébergée; elle ne bloque pas la tranche site prête.

## Invariants

- Une catégorie de connaissances n'est jamais un profil métier.
- Un CTA déclaré disponible pointe toujours vers une route présente dans l'artefact déployé.
- `livecommerce` ne redevient pas un sixième archétype par un composant local.
- Le goût du live ne détermine aucun archétype à lui seul; seule une intention de vendre en direct relève du sous-profil `livecommerce`.
- L'entrée reste anonyme sur les deux surfaces.
- Une panne d'analytics ne bloque jamais orientation, quiz, résultat, parcours ou progression.
- Le score, les réponses et l'identité de l'app ne sont pas transmis au site.
- L'orientation reste une aide à la décision, pas une promesse de résultat financier.

## Links & Consequences

- Upstream: mission business, product context du site, product context de l'app, taxonomie des profils et périmètre de lancement.
- Downstream site: homepage, `SentenceQuiz`, quiz rapide/avancé, parcours, progression locale, liens internes et build de lancement.
- Downstream app: texte de résultat, recommandations Convex, URLs/UTM, bouton profil et partage public.
- Downstream GTM: les campagnes de l'app utilisent « test de connaissances » ou « défi », tandis que le site utilise « trouver ton filon » ou « choisir un modèle ».
- Revalidation: toute extension du périmètre public, nouvelle catégorie app, nouvel archétype ou changement de recommandation doit rejouer le scan de destinations.

## Critical Experience Moments

| Moment | Trigger | Résultat visible | Émotion voulue / évitée | Signal |
| --- | --- | --- | --- | --- |
| Choix | Le visiteur complète le questionnaire | Une direction nuancée et une prochaine route valide | Clarté / fausse certitude | `orientation_completed` |
| Premier résultat | Le visiteur ouvre le parcours freelance | Un objectif et une action faisable ce soir | Élan / surcharge | `parcours_opened` |
| Première valeur | Le visiteur marque une action | Une progression locale visible | Capacité / gamification vide | `first_action_marked` |
| Résultat app | Le joueur termine sept questions | Score de maîtrise et ressource thématique | Curiosité / confusion métier | `knowledge_quiz_completed` |
| Récupération | Une destination ou la mesure échoue | Route valide ou résultat conservé | Confiance / impasse | `destination_fallback_used` |

## Measurement Contract

### Value ladder

- `A0` : homepage ou app accessible.
- `A1` : `orientation_started` ou `knowledge_quiz_started`.
- `A2` : `orientation_completed` ou `knowledge_quiz_completed`.
- `A3` : `parcours_opened` ou `recommendation_opened`.
- `A4` : `first_action_marked` sur le parcours pilote.
- `A5` : revisite du même parcours après une première action; hypothèse de valeur durable, non requise pour le premier lot.

### Pilot KPI

- North-star pilote : visiteurs `service` ayant marqué une première action / orientations `service` complétées.
- Diagnostics : taux de démarrage, complétion, ouverture du parcours, fallback de destination et délai médian jusqu'à la première action.
- KPI app séparé : recommandations ouvertes / quiz de connaissances terminés.
- Les deux KPI ne sont pas fusionnés en un score global.

### Proposed first-party event policy

Recommandation soumise à autorité : ingestion first-party dans une table Convex dédiée, session aléatoire propre à la surface, allowlist stricte des événements et propriétés, aucune réponse brute ni identité, rétention des événements bruts limitée à 30 jours et agrégats sans identifiant conservés pour les tendances. Sans validation, l'implémentation se limite aux événements locaux testables et aux paramètres d'attribution; aucune collecte hébergée n'est activée.

## Documentation Coherence

- Mettre à jour le business parent, le product context du site, le business/product/GTM de l'app et cette spec avant code — inclus dans la création du chantier.
- À l'implémentation, mettre à jour les architectures site/app, la documentation API si un endpoint d'événement est ajouté, et la politique de confidentialité avant toute collecte hébergée.
- Ne pas recréer de gouvernance sous `site/` ou `app_quiz/`.

## Edge Cases

- Résultat `saas` alors que le parcours SaaS n'est pas dans le build public : afficher la direction, puis proposer `/parcours` avec une formulation de disponibilité honnête.
- Égalité de scores : utiliser un tie-break déterministe documenté, sans randomisation invisible.
- Questionnaire incomplet ou stockage local indisponible : ne pas produire de profil; permettre de continuer ou recommencer.
- Navigation directe vers une ancienne URL : route existante ou fallback explicite; jamais un CTA silencieusement mort.
- Ressource app retirée après création du résultat : conserver score et explication, désactiver proprement le CTA.
- Événement dupliqué par double clic ou retry : idempotence par clé d'événement limitée à la fenêtre de session.
- Horloge, offline ou adblock : aucune influence sur le calcul du résultat ni sur la progression locale.

### ZOMBIES coverage

- Z: zéro réponse, zéro recommandation, stockage indisponible et aucun événement collecté.
- O: une orientation `service`, un parcours, une première action.
- M: plusieurs orientations, revisites, événements répétés et plusieurs surfaces sans fusion d'identité.
- B: cinq archétypes exactement, route juste retirée du build, payload/event au seuil de taille et rétention à l'échéance.
- I: taxonomie → composant → route publique; Flutter → recommandation → URL site; surface → endpoint de mesure.
- E: mapping inconnu, 404 potentielle, télémétrie indisponible, retry, payload interdit et ressource retirée.
- S: prouver d'abord `service → freelance → première action`; ne pas ouvrir tous les parcours ni unifier les comptes.

## Implementation Tasks

1. **[IMPLEMENTED — site] Créer le contrat de destination publique.** Target: données/résolveurs du site. Action: exposer pour chaque archétype la destination canonique et sa disponibilité dans le build courant. User-story link: évite les recommandations mortes. Dependency: décisions `GC-ACT-001..005`. Validation: tests de mapping exhaustifs et zéro destination absente dans le build réduit.
2. **[IMPLEMENTED — site] Aligner l'orientation du site.** Target: `SentenceQuiz` et taxonomie canonique déjà consommée par les autres quiz. Action: supprimer le scoring primaire `livecommerce`, traiter le live comme une préférence transversale, consommer les cinq archétypes, définir le tie-break et appliquer le fallback public. User-story link: produit une orientation cohérente sans confondre format et modèle économique. Dependency: tâche 1. Validation: scénarios déterministes par archétype, préférence live sans intention de vente, égalité et route absente.
3. **[IMPLEMENTED — browser proof pending] Livrer le pilote service → freelance.** Target: homepage, résultat d'orientation, parcours freelance et progression locale existante. Action: préserver le contexte `service`, ouvrir le parcours public et laisser la première action marquable sans compte. User-story link: atteint le premier résultat concret. Dependency: tâches 1–2. Validation: test automatisé de destination et build réduit passés; preuve navigateur mobile/desktop en attente d'un runtime Chromium.
4. **[IMPLEMENTED LOCALLY — Flutter runtime proof pending] Aligner l'app sur son rôle de connaissances.** Target: résultats Flutter, recommandations Convex, profil et partages. Action: retirer le vocabulaire d'orientation métier, vérifier toutes les destinations publiées et conserver une attribution stable. User-story link: évite la confusion entre maîtrise et modèle d'activité. Dependency: contrat cross-surface prêt et readiness app. Validation: tests Convex 4/4 et typecheck passés; tests/analyse Flutter en attente d'un SDK disponible.
5. **[BLOCKED — operator authority] Implémenter la mesure autorisée.** Target: adaptateurs d'événements site/app et, après autorité, endpoint/table Convex dédiés. Action: appliquer l'allowlist, l'idempotence, les limites, la rétention avec suppression planifiée, l'agrégation sans identifiant et le fail-open produit. User-story link: mesure la valeur du funnel. Dependency: décision `GC-ACT-006` et tâches 1–4. Validation: événements success/fallback, rejet PII/payload, retry, agrégation et expiration.
6. **[DEFERRED] Aligner la documentation et la confidentialité.** Target: docs canoniques techniques/API/confidentialité. Action: documenter le contrat app/mesure réellement livré et les limites de claim. User-story link: maintient la confiance. Dependency: comportement final des tâches 4–5. Validation: revue de cohérence et absence de fournisseur ou collecte fantôme.

## Acceptance Criteria

- Given le build production réduit, when chaque résultat du questionnaire est rendu, then son CTA cible une route présente ou le hub `/parcours` avec un message de fallback explicite.
- Given un résultat `service`, when le visiteur suit le CTA, then `/parcours/freelance` s'ouvre et le contexte d'orientation est conservé sans compte.
- Given le questionnaire express, when toutes les combinaisons sont évaluées, then aucun résultat primaire `livecommerce` n'est possible.
- Given une préférence pour le live sans intention de vendre des produits en direct, when l'orientation est calculée, then cette préférence ne force pas le résultat `ecommerce`.
- Given le build de lancement, when un résultat express s'affiche, then aucune action « Affiner » ne pointe vers un quiz retiré de l'artefact public.
- Given une égalité, when le résultat est calculé deux fois, then le même archétype et la même explication sont retournés.
- Given un quiz de connaissances terminé dans l'app, when le résultat apparaît, then il décrit une maîtrise thématique et non un « business idéal ».
- Given une recommandation app, when la ressource n'est pas publiée, then le CTA est absent ou mène à une destination publique générique, jamais à une 404.
- Given une panne du collecteur, when l'utilisateur navigue, then résultat, parcours et progression fonctionnent sans blocage.
- Given un événement contenant une réponse brute, email, UID ou champ non autorisé, when l'endpoint le reçoit, then il le rejette sans persistance.
- Given un retry du même événement, when il arrive dans la fenêtre d'idempotence, then il ne compte qu'une fois.
- Given une première action marquée après une orientation service, when la mesure est autorisée et disponible, then la chaîne `orientation_completed → parcours_opened → first_action_marked` est requêtable sans identité personnelle.

## Test Strategy

- Unitaires site: taxonomie, scoring, tie-break, résolveur de destination et disponibilité de build.
- Build site: `pnpm build` puis scan des liens/CTA; `pnpm build:full` pour la compatibilité du produit complet.
- Composants: résultat du questionnaire, fallback SaaS, progression freelance et stockage indisponible.
- Flutter/Convex: wording, sélection de ressource, URLs publiques, UTM, résultat sans recommandation et retry.
- Sécurité mesure: allowlist, taille, type, injection de valeurs, idempotence, taux, rétention et logs sans payload sensible.
- Browser: homepage → orientation service → parcours freelance → première action, en mobile et desktop, avec et sans collecteur.
- Manuel: ton anti-bullshit, absence de promesse de revenu et distinction intelligible entre les deux quiz.

## Risks

- Le mot « quiz » peut continuer à créer une confusion marketing malgré la séparation technique; les claims et CTA doivent être revus ensemble.
- Un fallback trop générique peut réduire le clic; il reste préférable à une route morte et doit être mesuré.
- La collecte publique anonyme peut être spammée; allowlist, limites, idempotence et agrégation doivent empêcher qu'elle devienne une source de vérité non fiable.
- Une session locale ne suit pas un utilisateur cross-device; cette limite est acceptée pour préserver l'entrée anonyme.
- La mesure de `first_action_marked` prouve une activation, pas un revenu ni une réussite business.

## OWASP Security Gate

Top 10 considered: A02 configuration du endpoint, A05 validation/injection, A06 abus et spam, A08 intégrité/idempotence, A09 logs redacted, A10 échec/retry. Trust boundary: navigateurs anonymes non fiables vers un collecteur public; aucune identité app/site n'est partagée. Les journaux techniques du fournisseur peuvent contenir des métadonnées réseau hors de la table produit et doivent être couverts par la politique de confidentialité et les réglages de rétention du fournisseur. ASVS v5.0.0: aucune revendication de conformité; les exigences pertinentes sont couvertes par des tests ciblés de validation d'entrée, intégrité, communication sécurisée et journalisation. Proof required: allowlist, bornes, rejet des données interdites, rate-limit, idempotence, rétention et inspection des logs. Residual gap: politique de rétention non autorisée, donc aucune collecte hébergée avant décision.

## Execution Notes

Premières lectures: `site/src/data/profileTaxonomy.ts`, `site/src/components/vue/SentenceQuiz.vue`, `site/src/utils/build-scope.ts`, `app_quiz/convex/convex/recommendations.ts`, `app_quiz/flutter_app/lib/src/ui/screens/results_screen.dart`. Préserver les composants et tokens partagés; ce chantier n'autorise pas une refonte UI. Commencer par le résolveur de destination et ses tests, puis le pilote site, puis l'app, puis la mesure. Ne pas ouvrir les routes exclues simplement pour faire passer un test. Stopper avant toute collecte si la politique de données n'est pas explicitement validée.

## Open Questions

Une seule décision opératrice reste ouverte pour la tranche différée de mesure : autoriser ou non la collecte first-party proposée — événements anonymes allowlistés, aucune réponse/identité, événements bruts 30 jours, agrégats sans identifiant conservés pour les tendances. Cette question n'affecte pas le comportement ni la preuve locale de la tranche site prête. Sans autorisation, aucune métrique agrégée de production n'est revendiquée.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
| --- | --- | --- | --- | --- | --- |
| 2026-08-20 | sg-planning / 100-sg-spec | GPT-5 Codex | Cartographie cross-surface, décisions produit et création du contrat P0 | draft_complete | Décider la politique de mesure, puis évaluer la readiness |
| 2026-08-22 | sg-development / 101-sg-ready | GPT-5 Codex | Isolation de la tranche site et revue de readiness | ready_site_slice | Implémenter les tâches 1 à 3 sur `site/` |
| 2026-08-22 | sg-development / 102-sg-start | GPT-5 Codex | Résolveur canonique, questionnaire express et fallback de build | implemented_site_slice | Vérification locale puis preuve navigateur quand Chromium est disponible |
| 2026-08-22 | sg-development / 103-sg-verify | GPT-5 Codex | Tests, build réduit, scan de routes et tentative navigateur | partial | Installer/exposer Chromium puis rejouer desktop/mobile |
| 2026-08-22 | 005-sg-ship | GPT-5 Codex | Commit et push bornés de la tranche site | shipped | Conserver le déploiement hors périmètre et compléter la preuve navigateur |
| 2026-08-22 | sg-development / 101-sg-ready | GPT-5 Codex | Revue du rôle app, des sorties cross-surface et de la preuve disponible | ready_app_slice | Implémenter le contrat Flutter/Convex sans étendre le legacy ni la mesure |
| 2026-08-22 | sg-development / 102-sg-start | GPT-5 Codex | Allowlist publique Convex, wording de connaissances et liens Flutter attribués | implemented_app_slice | Compléter la preuve Flutter sur un hôte équipé du SDK |
| 2026-08-22 | sg-development / 103-sg-verify | GPT-5 Codex | Tests et typecheck Convex, scan des routes et tentative Flutter | partial | Exécuter les tests et l'analyse Flutter avant commit |

## Current Chantier Flow

| Stage | Status | Evidence | Next action |
| --- | --- | --- | --- |
| Specification | completed | Rôles, pilote, invariants, tâches, critères, preuve et risques documentés | Préserver les tranches différées |
| Readiness | ready | Tranches site et app isolées; mesure hors périmètre sans autorité de collecte | Préserver les limites cross-surface |
| Implementation | implemented | Site canonique et app de connaissances alignés localement; legacy et mesure inchangés | Vérifier la tranche app sur un runtime Flutter |
| Verification | partial | Site: tests 8/8 et build réduit; app: tests Convex 4/4 et typecheck; Chromium et SDK Flutter indisponibles | Rejouer les preuves navigateur et Flutter sur les runtimes adaptés |
| Closure | pending | Non applicable | Après preuve complète |
| Release | deferred | Branche livrée pour itération; aucun déploiement effectué | Après preuve complète et plan de déploiement explicite |
