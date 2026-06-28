---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-04-27"
status: reviewed
scope: api
source_skill: manual
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: medium
docs_impact: yes
linked_systems:
  - "app_quiz/backend/server.py"
  - "app_quiz/flutter_app/lib/src/services/api/gocharbon_api.dart"
  - "Supabase"
depends_on:
  - "shipflow_data/technical/app_quiz/architecture.md"
supersedes: []
evidence:
  - "app_quiz/backend/server.py"
  - "app_quiz/flutter_app/lib/src/services/api/gocharbon_api.dart"
next_step: "/sf-docs verify shipflow_data/technical/app_quiz/API.md"
---

# API

Référence du contrat HTTP consommé par Flutter.

## Base URL

- local : `http://localhost:3001`
- build/runtime Flutter : `API_BASE_URL`

## Sécurité

- Les routes legacy sensibles utilisent `x-user-secret`.
- La cible Supabase utilise `auth.uid()` + RLS pour les données user-scoped.
- Aucune clé `service_role` ne doit être injectée côté Flutter.

## Endpoints

### `GET /api`

```json
{ "message": "GoCharbon Business Quizz API" }
```

### `GET /api/health`

```json
{ "status": "ok" }
```

### `POST /api/users`

Crée un utilisateur anonyme ou nommé.

```json
{ "username": "QuizMaster" }
```

Réponse : profil utilisateur avec `user_id`, `user_secret`, score, XP, niveau, badges et stats.

### `GET /api/users/{user_id}`

Retourne le profil utilisateur sans `user_secret`.

### `GET /api/questions?category={slug}&count={n}`

Catégories : `finance`, `marketing`, `management`, `ecommerce`, `random`.

### `GET /api/questions/daily`

Retourne le défi du jour :

```json
{
  "date": "2026-04-27",
  "questions": []
}
```

### `POST /api/quiz/submit`

Headers :

```text
x-user-secret: <secret>
```

Body :

```json
{
  "user_id": "user-id",
  "user_secret": "secret",
  "category": "finance",
  "mode": "timed",
  "answers": [
    {
      "question_id": "question-id",
      "selected_answer": 2,
      "time_taken": 4.8
    }
  ]
}
```

Réponse :

```json
{
  "total_score": 1250,
  "base_score": 1000,
  "time_bonus": 150,
  "streak_bonus": 100,
  "xp_gained": 1250,
  "correct_count": 10,
  "total_questions": 10,
  "best_streak": 10,
  "streak_multiplier": 2.0,
  "new_badges": [],
  "level_up": false,
  "new_level": 2,
  "new_level_name": "Apprenti",
  "course_recommendations": [],
  "recommendation_context": {
    "target_category": "finance",
    "target_category_label": "Finance",
    "target_level": "advanced",
    "eyebrow": "CAP SUR LA SUITE",
    "title": "Tu peux maintenant approfondir en Finance.",
    "summary": "Ton score montre que les fondamentaux tiennent.",
    "focus": "Passe des notions de base à des décisions financières plus solides.",
    "reason": "Cette recommandation te fait avancer sans repasser par un contenu introductif.",
    "cta_label": "Approfondir sur GoCharbon"
  }
}
```

### `GET /api/leaderboard?limit={n}`

Retourne le classement global avec `rank`, `user_id`, `username`, `avatar_color`, `total_score`, `level`, `level_name`.

### `GET /api/leaderboard/user/{user_id}`

```json
{ "rank": 12, "total_score": 3400 }
```

### `GET /api/badges`

Retourne la table complète des badges.

### `GET /api/courses/recommend?category={slug}`

Retourne jusqu'à 4 recommandations de contenus GoCharbon.

### `POST /api/notifications/leaderboard-check?user_id={id}`

Met à jour le dernier rang connu et indique si le rang a changé.

Headers :

```text
x-user-secret: <secret>
```

Réponse :

```json
{ "rank_changed": false, "rank": 7 }
```

### `POST /api/seed`

Réinjecte les données seed FastAPI. Requiert `x-admin-key`.
