# CLAUDE.md

Guidance for Claude Code in this project.

## Project

- Name: `gocharbon_quiz`
- Purpose: gamified quiz app used as a lead magnet for `gocharbon.fr`
- Frontend: Flutter mobile + web in `flutter_app/`
- Backend: FastAPI, Motor, MongoDB, Pydantic in `backend/`
- Auth/data migration target: Supabase Auth + Postgres/RLS

The legacy mobile client is archived on a dedicated branch. Do not add new app code outside Flutter.

## Commands

Flutter:

- `cd flutter_app && flutter pub get`
- `cd flutter_app && flutter run -d chrome --dart-define=API_BASE_URL=http://localhost:3001`
- `cd flutter_app && flutter analyze`
- `cd flutter_app && flutter test`
- `cd flutter_app && flutter build web --release`

Backend:

- `cd backend && pip install -r requirements.txt`
- `cd backend && uvicorn server:app --reload --host 0.0.0.0 --port 3001`
- `cd backend && pytest`

Root:

- `npm run dev` starts FastAPI and Flutter web.

## Environment

- `backend/.env`: `MONGO_URL`, `DB_NAME`
- `backend/.env`: `TRIVIA_ADMIN_KEY` for `/api/seed`
- Flutter: `API_BASE_URL`
- Flutter Supabase: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_AUTH_REDIRECT_URL`

## Architecture

- `flutter_app/lib/src/ui`: screens and widgets
- `flutter_app/lib/src/services`: API, auth, session, storage, notifications, sounds
- `flutter_app/lib/src/models`: API and persistence models
- `backend/server.py`: HTTP API, quiz logic, scoring, leaderboard, recommendations
- `supabase/migrations`: target database schema and RLS policies

Primary flow:

1. User starts anonymously.
2. User launches a category, daily, or random quiz.
3. Answers are submitted through `/api/quiz/submit`.
4. Backend computes score, XP, streaks, badges, recommendation context and courses.
5. Flutter stores the last result and sends the user toward a relevant `gocharbon.fr` page.

## Conventions

- Keep the app Flutter-first and mobile-first.
- Keep anonymous onboarding low-friction unless lead capture is intentionally introduced.
- Maintain deterministic API contracts between Flutter and FastAPI/Supabase.
- Course recommendations and CTAs must reinforce the bridge to GoCharbon.
- Avoid broad visual rewrites unless they improve completion or click-through.
- Shared governance for this app lives under the theme-first monorepo root, notably `../shipglowz_data/business/app_quiz/`, `../shipglowz_data/product/app_quiz/`, `../shipglowz_data/gtm/app_quiz/`, and `../shipglowz_data/technical/app_quiz/`.
