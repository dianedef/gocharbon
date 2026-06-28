---
artifact: architecture_context
artifact_version: "1.1.0"
project: "gocharbon_quiz"
updated: "2026-04-27"
status: reviewed
---

# Architecture

La gouvernance technique partagee de cette application vit a `shipflow_data/app_quiz/technical/`.

## Cible

- Flutter est la seule surface applicative du dépôt.
- FastAPI conserve les routes `/api/*` tant que la migration Supabase n'est pas complète.
- Supabase est la cible auth et données user-scoped.
- Vercel sert le build web Flutter depuis `flutter_app/build/web`.

## Surfaces

- `flutter_app/lib/src/ui` : écrans, widgets, navigation
- `flutter_app/lib/src/services` : API, session, auth, stockage, notifications, sons
- `flutter_app/lib/src/models` : modèles JSON et persistance locale
- `backend/server.py` : questions, scoring, leaderboard, recommandations, seed
- `supabase/migrations` : schéma cible, RPC et RLS

## Contrats

- `/api/questions`, `/api/questions/daily`, `/api/quiz/submit`, `/api/leaderboard`, `/api/badges` restent stables pour Flutter.
- Les mutations de score/progression restent contrôlées côté backend.
- Aucune clé Supabase service-role ne doit être exposée au client Flutter.
- Toute évolution de route ou payload met à jour `docs/API.md`.
