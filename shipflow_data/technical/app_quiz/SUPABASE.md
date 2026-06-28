---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon_quiz"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: supabase
owner: "team"
confidence: medium
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "Supabase Auth"
  - "Supabase Postgres"
  - "Supabase RLS"
  - "flutter_app"
  - "shipflow_data/technical/app_quiz/API.md"
depends_on: []
supersedes: []
evidence: []
next_step: "align with implementation milestones in flutter/supabase workers"
---

# Supabase Migration Guide

Source de vérité cible : Supabase pour l'auth et les données user-scoped.

Ce document décrit le contrat de migration et le runbook opérationnel. Il ne valide pas automatiquement l'état réel d'un environnement Supabase (dev/staging/prod).

## 1) Variables côté client Flutter

Variables attendues via `--dart-define` :

| Variable | Requis | Usage |
| --- | --- | --- |
| `SUPABASE_URL` | oui | URL du projet Supabase (`https://<project-ref>.supabase.co`) |
| `SUPABASE_PUBLISHABLE_KEY` | oui | publishable key consommée côté client |
| `SUPABASE_AUTH_REDIRECT_URL` | oui pour OAuth/magic link | URL de callback de l'app Flutter/web (`SUPABASE_REDIRECT_URL` accepté en alias legacy) |
| `API_BASE_URL` | temporaire | fallback legacy `/api/*` pendant coexistence |

Règle stricte : ne jamais injecter `service_role` dans le client Flutter.

## 2) Redirect URLs et callbacks

Pour éviter les échecs OAuth/magic link :

1. Déclarer les URLs exactes dans `Authentication > URL Configuration`.
2. Garder une liste explicite dev/staging/prod.
3. Vérifier que `SUPABASE_AUTH_REDIRECT_URL` (ou alias legacy `SUPABASE_REDIRECT_URL`) correspond exactement à une URL autorisée.
4. Si web + mobile coexistent, déclarer les callbacks de chaque plateforme.

Exemples usuels (à adapter au projet réel) :

- Web local : `http://localhost:3000/auth/callback`
- Web prod : `https://<domaine>/auth/callback`
- Mobile deep link : `gocharbon://auth/callback`

## 3) Providers auth pris en charge

Flux cibles de la migration :

- session anonyme au premier lancement
- Google OAuth
- Facebook OAuth
- Email magic link
- Email + mot de passe

Configuration minimale côté Dashboard Supabase :

1. Activer `Anonymous Sign-Ins` si utilisé.
2. Activer Google et Facebook, renseigner les credentials OAuth.
3. Activer Email OTP (magic link) et/ou Email password.
4. Contrôler les redirects autorisées pour chaque flux.

## 4) Frontière pendant transition

Jusqu'à migration complète :

- Supabase direct : auth + données user-scoped migrées.
- Legacy `/api/*` : endpoints non migrés (quiz/questions/notifications selon avancement).

Règles de frontière :

- ne pas créer de nouveaux flux user-scoped durables sur `/api/*`
- documenter chaque fallback legacy utilisé côté client
- supprimer progressivement `user_id/user_secret` quand le flux passe en Supabase

Référence : [API.md](API.md)

## 5) Runbook RLS (obligatoire)

Checklist avant ouverture client :

1. RLS activée sur chaque table exposée.
2. Policies `SELECT/INSERT/UPDATE/DELETE` basées sur `auth.uid()` ou règles publiques explicitement limitées.
3. Données sensibles non accessibles via policy publique large.
4. Écriture de score/stats uniquement via mutation contrôlée (RPC/Edge), pas via update libre client.
5. Table `profiles` contrainte à `1 user auth = 1 profile` (`user_id` unique/PK).

Contrôles manuels recommandés :

- Utilisateur A ne lit pas les lignes de B.
- Utilisateur A ne modifie pas les stats de B.
- Une requête sans session auth ne lit pas les données privées.

## 6) Runbook incidents auth/callbacks

### Symptom: OAuth/magic link boucle ou échoue

Vérifier dans l'ordre :

1. `SUPABASE_AUTH_REDIRECT_URL` injectée côté app.
2. URL exacte autorisée dans Supabase.
3. Provider activé (Google/Facebook/Email) et credentials valides.
4. Horloge device raisonnablement synchronisée (tokens expirables).

### Symptom: magic link ouvert sur un autre device

Règle v1 : pas de merge implicite cross-device des sessions anonymes.

- Conserver la cohérence de chaque device.
- Afficher une reprise explicite sur le device d'origine pour conserver la progression locale initiale.

### Symptom: conflit d'identité/provider

- Ne pas créer de second profil.
- Retourner une erreur de conflit explicite.
- Proposer un flux de récupération côté UI (ré-auth/choix provider).

## 7) Runbook anti-abus

Objectif : protéger les flux anonymes et les soumissions quiz.

Mesures attendues :

1. Rate limit sur création de session anonyme.
2. Rate limit sur soumission quiz.
3. Validation stricte des payloads (bornes, catégories/modes autorisés, réponses dupliquées).
4. Idempotence soumission (clé d'idempotence ou contrainte anti-replay).
5. Logs exploitables côté serveur sans exposition de secrets.

Signaux d'alerte :

- burst de création anonyme sur une même IP/device fingerprint
- retries anormaux de soumission identique
- erreurs auth répétées sur callbacks

## 8) Validation documentaire minimum

Avant merge d'un lot migration :

1. `README.md` et `flutter_app/README.md` alignés sur les variables/callbacks.
2. `shipflow_data/technical/app_quiz/API.md` aligné sur la frontière Supabase vs legacy.
3. ce document mis à jour si un flux provider, une policy RLS ou une règle anti-abus change.
