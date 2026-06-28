---
artifact: technical_guidelines
artifact_version: "1.1.0"
project: "gocharbon_quiz"
updated: "2026-04-27"
status: reviewed
---

# Guidelines

- Flutter est la seule surface applicative à maintenir.
- Le quiz reste court, mobile-first, orienté activation vers `gocharbon.fr`.
- Ton par défaut : français, tutoiement, direct, utile, anti-bullshit.
- La gamification sert la progression et le clic utile, pas le divertissement pur.
- RLS obligatoire sur les données utilisateur Supabase.
- Aucune clé service-role dans le client.
- Si une route ou un payload change, mettre à jour `docs/API.md`.
- Si une commande change, mettre à jour `README.md`.
- Si un env change, mettre à jour `.env.example` ou `backend/.env.example`.
- La gouvernance produit et marque vit dans `shipflow_data/site/business/*.md` au niveau du monorepo.
