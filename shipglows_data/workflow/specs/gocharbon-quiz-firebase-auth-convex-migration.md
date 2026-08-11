---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "0.1.0"
project: "gocharbon_quiz"
created: "2026-08-11"
created_at: "2026-08-11 14:22:07 UTC"
updated: "2026-08-11"
updated_at: "2026-08-11 14:22:07 UTC"
status: draft
source_skill: 100-sg-spec
source_model: "GPT-5 Codex"
scope: "auth-backend-migration"
owner: "dianedef"
confidence: high
user_story: "En tant que joueur anonyme, je veux répondre à un quiz sans friction puis lier mon compte Google afin de conserver une progression vérifiée côté serveur."
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - app_quiz/flutter_app
  - Firebase Authentication
  - Convex HTTP API
  - app_quiz/backend
  - app_quiz/supabase
  - Vercel
depends_on:
  - artifact: shipglows_data/technical/app_quiz/architecture.md
    artifact_version: "1.1.0"
    required_status: reviewed
  - artifact: shipglows_data/technical/app_quiz/API.md
    artifact_version: "1.1.0"
    required_status: reviewed
  - artifact: shipglows_data/technical/app_quiz/guidelines.md
    artifact_version: "1.1.0"
    required_status: reviewed
supersedes: []
evidence:
  - "Production Supabase and legacy backend hosts fail DNS resolution as of 2026-08-11."
  - "Static inventory found Supabase/FastAPI/Mongo split, client-side legacy secret storage, and a FastAPI question response that exposes correct answers."
  - "Operator decision 2026-08-11: target Firebase Auth plus Convex HTTP; no provider CLI or account access is available in this phase."
next_step: "Implement the local migration scaffold, then configure Firebase and Convex when provider authority is available."
---

# Spec: GoCharbon Quiz Firebase Auth And Convex Migration

🔴 [gocharbon_quiz] spec: GoCharbon Quiz Firebase Auth And Convex Migration | status: draft | path: shipglows_data/workflow/specs/gocharbon-quiz-firebase-auth-convex-migration.md | next: local-scaffold

## Title

GoCharbon Quiz Firebase Auth And Convex Migration

## Status

Draft. Local code may be prepared now; provider setup, hosted proof, and production cutover remain blocked on operator-owned Firebase, Convex, and Vercel access.

## User Story

En tant que joueur anonyme, je veux répondre à un quiz sans friction puis lier mon compte Google afin de conserver une progression vérifiée côté serveur.

## Minimal Behavior Contract

Au premier lancement, l'application obtient une identité anonyme Firebase et charge les questions sans révéler leurs réponses. Une soumission authentifiée envoie seulement les réponses choisies à Convex, qui calcule une seule fois le score, la progression, les badges, le classement et les recommandations. Un jeton invalide, une réponse falsifiée, une tentative rejouée ou une dépendance indisponible ne modifie jamais la progression et renvoie une erreur récupérable. Le cas critique est le double envoi après une coupure réseau : une même tentative ne peut attribuer des points qu'une seule fois.

## Success Behavior

- L'utilisateur anonyme démarre un quiz, le termine, voit score, badges et recommandations GoCharbon calculés côté serveur.
- La liaison Google conserve le même UID Firebase et la même progression Convex.
- Le classement ne révèle que les données publiques de présentation.
- Le build Flutter ne dépend plus de Supabase ou du backend FastAPI lors du chemin Convex actif.

## Error Behavior

- Jeton manquant, expiré ou invalide : `401`, sans lecture privée ni mutation.
- Ressource non possédée : `403`, sans fuite d'existence ou de données.
- Payload hors bornes, question hors tentative, catégorie falsifiée ou tentative dupliquée : erreur explicite sans score, XP, badge ou classement partiel.
- Convex indisponible : état d'erreur récupérable dans l'app; pas de fallback silencieux vers un autre propriétaire de progression.

## Problem

Le runtime mélange Supabase, FastAPI/Mongo et des secrets utilisateurs stockés côté client. Le chemin FastAPI peut divulguer les bonnes réponses avant soumission; le chemin Supabase perd les recommandations GoCharbon. Les hôtes de production actuellement configurés ne sont pas résolus.

## Solution

Firebase Auth devient l'unique identité (anonyme puis Google). Convex devient l'autorité de données et de calcul via son API HTTP officielle. Flutter passe par des services indépendants du fournisseur; l'ancien runtime reste seulement un rollback temporaire après configuration et preuve externe.

## Scope In

- Firebase Auth anonyme et liaison Google dans Flutter.
- Convex : questions, défi quotidien, profils, tentatives, progression, badges, classement, notifications de rang et recommandations.
- Validation Firebase JWT, mutations atomiques, idempotence et anti-rejeu côté Convex.
- Client Flutter Convex HTTP, configuration par variables de build et flag de bascule.
- Seeds versionnés des questions et documentation/configuration Vercel.

## Scope Out

- Firestore, Cloud Functions, Auth0, Clerk, Rust, Facebook, magic link et email/password.
- Import de profils Supabase ou FastAPI sans liaison d'identité vérifiable.
- Duel, chat, ligues, multijoueur temps réel et refonte visuelle.
- Suppression de Supabase/FastAPI/Mongo avant période d'observation validée.

## Constraints

- Aucune CLI, aucun compte, aucune clé, aucun projet fournisseur et aucun déploiement ne sont accessibles pendant cette phase.
- Aucune clé Admin Firebase, clé de déploiement Convex, secret OAuth, secret Supabase ou secret Mongo ne doit être ajouté au dépôt, à Vercel client ou aux logs.
- Firebase est utilisé pour l'identité seulement; aucune base Firestore n'est créée.
- Convex est appelé depuis Flutter avec un ID token Firebase frais, jamais avec un `user_id` ou `user_secret` reçu du client.

## Test Contract

Profile: Flutter Web/Android/iOS/Windows/macOS/Linux, API HTTP, auth et backend de données. Proof order: tests de logique et analyse Flutter -> tests/actions Convex -> preuve Web auth -> preuve provider Firebase/Convex -> QA manuelle des cibles natives. La phase locale ne peut prouver ni Firebase, ni Convex, ni Vercel sans accès fournisseur; elle doit le signaler explicitement.

ZOMBIES coverage: zéro question, zéro réponse, tentative vide et profil absent; une et plusieurs questions; limites 1/20 questions, durées 0/3600 et total 7200; interfaces Flutter/HTTP/JWT; échecs token, réseau, retry, doublon et catégorie falsifiée.

## Dependencies

- Firebase Auth Flutter : configuration native et Web fournie après création du projet Firebase.
- Convex HTTP API et validation JWT OIDC/Firebase configurées après création du projet Convex en région Europe.
- Documentation fraîche vérifiée le 2026-08-11 : Firebase Auth Flutter, Convex HTTP API, Convex authentication et limites Free.

## Invariants

- Le sujet Firebase validé est la seule identité canonique.
- Une mutation serveur est la seule autorité pour score, XP, niveau, badges, rang et recommandations.
- Les requêtes de questions ne retournent jamais `correct_answer` avant la soumission.
- Une tentative est liée à un UID, une liste de questions serveur, un nonce et une seule écriture atomique.
- Les réponses et données privées sont isolées par identité; le classement ne contient aucune donnée sensible.
- L'entrée anonyme reste disponible; le compte est proposé uniquement pour une valeur de persistance claire.

## Links & Consequences

- Flutter : `pubspec.yaml`, config, auth, session, API, providers, stockage et écrans de callback/profil.
- Backend : nouveau dossier Convex TypeScript; FastAPI/Mongo/Supabase restent intacts jusqu'au rollback gate.
- Vercel : nouvelles variables non secrètes client et URL Convex; aucun secret serveur dans le bundle Flutter.
- Documentation : architecture, API, guide Supabase à remplacer/superséder, README et exemples d'environnement.

## Documentation Coherence

Mettre à jour `app_quiz/README.md`, les exemples d'environnement, `shipglows_data/technical/app_quiz/{architecture.md,API.md,guidelines.md,SUPABASE.md}` et la configuration Vercel au moment où les fournisseurs sont réellement configurés. Le guide Supabase doit être marqué comme historique avant suppression, pas effacé pendant le cutover.

## Edge Cases

- Lien Google avec un compte déjà utilisé : ne jamais fusionner implicitement deux progressions.
- Une soumission réseau peut être retryée sans double attribution.
- Une question supprimée ou désactivée après création d'une tentative rend la soumission invalide sans progression partielle.
- Le défi quotidien reste déterministe par date UTC et stable pour tous les joueurs.
- Une réponse hors plage, un temps négatif ou un identifiant en double est rejeté avant tout calcul.

## Implementation Tasks

- [ ] Tâche 1 : créer la configuration fournisseur et le contrat de bascule local.
  - Fichier : `app_quiz/flutter_app/pubspec.yaml`, `lib/src/config/app_config.dart`, exemples d'environnement.
  - Action : ajouter Firebase core/auth et les définitions `CONVEX_HTTP_URL`, `CONVEX_AUTH_ISSUER`, `BACKEND_PROVIDER`; ne pas injecter de secret.
  - Depends on : autorité fournisseur seulement pour les valeurs réelles.
  - Validate with : analyse Flutter après installation contrôlée des dépendances.

- [ ] Tâche 2 : remplacer l'abstraction d'identité Flutter.
  - Fichier : services auth/session/storage/providers/callback/profil.
  - Action : identité Firebase anonyme puis Google; supprimer le nouveau stockage de `user_secret`; garder l'ancien chemin uniquement sous flag de rollback.
  - Depends on : Tâche 1.
  - Validate with : tests de service et parcours Web après configuration Firebase.

- [ ] Tâche 3 : créer le backend Convex sécurisé.
  - Fichier : `app_quiz/convex/*`.
  - Action : schéma, indexes, seeds, JWT auth, questions privées, tentatives, soumission atomique, profil, classement, badges et recommandations.
  - Depends on : Tâche 1 et projet Convex.
  - Validate with : tests de fonctions et appels HTTP authentifiés.

- [ ] Tâche 4 : remplacer les appels Flutter à Supabase/FastAPI.
  - Fichier : `lib/src/services/api/gocharbon_api.dart` et modèles associés.
  - Action : client Convex HTTP, bearer token Firebase frais, contrats UI conservés et flag `legacy|convex` explicite.
  - Depends on : Tâches 2 et 3.
  - Validate with : tests de mapping et smoke quiz complet.

- [ ] Tâche 5 : configurer et prouver la bascule hébergée.
  - Fichier : Vercel, documentation et checklist QA.
  - Action : configurer redirects Firebase, issuer Convex, URL HTTP Convex et variables Vercel; déployer preview puis production sous flag.
  - Depends on : Tâches 1 à 4 et accès fournisseur.
  - Validate with : preuve auth/browser/production et QA manuelle.

- [ ] Tâche 6 : retirer l'ancien runtime dans une migration séparée.
  - Fichier : Supabase/FastAPI/Mongo et dépendances Flutter.
  - Action : supprimer seulement après quatorze jours d'observation sans régression et export de données autorisé.
  - Depends on : Tâche 5.
  - Validate with : spec de nettoyage distincte et rollback expiré.

## Acceptance Criteria

- [ ] Given un nouveau joueur, when il ouvre l'application, then une identité anonyme Firebase est créée et aucun secret durable client n'est généré.
- [ ] Given une tentative valide, when elle est soumise, then Convex calcule une seule fois score, XP, badges, rang et recommandations.
- [ ] Given un payload falsifié ou une réponse correcte demandée, when le client appelle l'API, then aucune réponse correcte ni progression n'est divulguée ou modifiée.
- [ ] Given un retry du même nonce, when la mutation est répétée, then le résultat idempotent est retourné sans double attribution.
- [ ] Given un token absent, expiré ou invalide, when une lecture privée ou mutation est tentée, then l'API rejette la demande.
- [ ] Given la liaison Google du même joueur, when elle réussit, then l'UID et la progression existante restent inchangés.
- [ ] Given le chemin Convex actif, when le quiz se charge et se termine, then il ne dépend pas d'un hôte Supabase/FastAPI non résolu.
- [ ] Given une erreur fournisseur, when le chemin Convex échoue, then l'application affiche un état récupérable et le rollback reste contrôlé par flag.

## Test Strategy

- Tests unitaires Flutter : configuration, token frais, mapping API, retry/idempotence UI.
- Tests Convex : validation JWT, propriété utilisateur, non-divulgation des réponses, limites, idempotence, calcul de score, recommandations et rang.
- Preuve Web auth : anonyme, liaison Google, retour callback, recharge, token invalide.
- Preuve production : preview puis production Vercel, variables présentes sans fuite, parcours quiz et recommandation.
- QA manuelle : Android, iOS, Windows, macOS et Linux lorsque les builds, plateformes et comptes sont disponibles.

## Risks

- Firebase et Convex ne sont pas encore provisionnés : aucune preuve d'intégration ne peut être revendiquée localement.
- Les UID Supabase ne correspondent pas aux UID Firebase : aucun historique ne doit être fusionné sans mapping vérifié et consentement.
- Les limites Free sont mutualisées ou peuvent produire un arrêt de service : surveiller l'usage avant la bascule.
- Les redirections OAuth et les builds natifs exigent la configuration exacte de domaines, signatures et bundle IDs.

## Execution Notes

Lire d'abord `app_quiz/flutter_app/lib/src/config/app_config.dart`, les services `auth`, `session`, `api`, `backend/server.py`, `backend/recommendations.py` et les migrations Supabase. Préparer le code local par lots indépendants, mais ne lancer ni CLI, ni installation, ni déploiement sans autorité. Préserver les réponses API affichées par l'UI; privilégier une interface de dépôt unique plutôt qu'un fallback silencieux à plusieurs bases. Stopper la bascule si les tests sécurité, l'auth Web ou le calcul serveur échouent.

## Open Questions

La reprise exige seulement les autorisations externes déjà connues : création/choix des projets Firebase et Convex, région Europe, configuration OAuth/redirects et variables Vercel. Aucune question de comportement produit supplémentaire n'est ouverte.

## OWASP Security Gate

Top 10 considérés : A01 contrôle d'accès, A02 configuration, A04 secrets/tokens, A06 anti-rejeu/rate-limit, A07 auth/callbacks, A08 intégrité/idempotence, A09 logs redacted et A10 erreurs/récupération. ASVS ciblé : v5.0.0 authentification, gestion de session, contrôle d'accès, validation d'entrée et journalisation. Preuve requise : tests d'autorisation et de mutation, appels HTTP avec JWT invalide, parcours OAuth et logs sans secrets. Résidu : preuves fournisseur et production bloquées par accès absent.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
| --- | --- | --- | --- | --- | --- |
| 2026-08-11 | 100-sg-spec / sg-planning | GPT-5 Codex | Création du contrat de migration différé | Draft complet enregistré | Préparer le scaffold local sans CLI |
| 2026-08-11 | sg-development / sg-docs | GPT-5 Codex | Scaffold local Firebase Auth + Convex et alignement documentaire | Code local présent, architecture cible documentée; aucune ressource fournisseur ni preuve hébergée | Provisionner les fournisseurs avant vérification et cutover |

## Current Chantier Flow

| Stage | Status | Evidence | Next action |
| --- | --- | --- | --- |
| 100-sg-spec | completed | Contrat, risques, tâches et critères enregistrés | Préparer le code local |
| 101-sg-ready | blocked | Firebase/Convex/Vercel non accessibles | Reprendre après autorité fournisseur |
| 102-sg-start | completed | Scaffold local Firebase Auth + Convex, flag `GOCHARBON_RUNTIME=convex`, rollback legacy préservé | Configurer les fournisseurs sans supprimer le rollback |
| 103-sg-verify | blocked | Aucune autorité Firebase/Convex/Vercel et aucune dépendance installée dans cette phase | Vérifier après provisionnement fournisseur |
| 104-sg-end | pending | Non applicable | Après preuve complète |
| 005-sg-ship | pending | Non autorisé dans ce chantier | Après fermeture |
