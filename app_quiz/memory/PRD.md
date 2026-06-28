---
artifact: product_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon_quiz"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: sf-docs
scope: product
owner: "team"
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
depends_on: []
linked_systems: []
evidence: []
supersedes: []
next_step: "/sf-docs audit memory/PRD.md"
---

# GoCharbon Business Quizz - PRD

## Overview
GoCharbon Business Quizz is a gamified Flutter mobile and web quiz application backed by FastAPI, designed to test and improve users' business knowledge across 4 categories: Finance, Marketing, Management, and E-commerce.

## Core Features

### 1. Quiz Engine
- **10 questions per quiz** (MCQ + True/False mix)
- **4 categories**: Finance, Marketing, Management, E-commerce
- **2 modes**: Chronométré (15s/question) and Libre (no timer)
- **Quick Play**: Random questions across all categories
- **Daily Challenge**: Same questions for all users each day

### 2. Scoring System
- Base: 100 pts/correct answer
- Time bonus: 0-50 pts (timed mode, faster = more)
- Streak multiplier: x1.5 at 5 consecutive, x2 at 10 consecutive
- XP = total score earned

### 3. Gamification
- **5 Levels**: Débutant (0 XP) → Apprenti (1K) → Intermédiaire (3K) → Expert (8K) → Maître (15K)
- **13 Badges**: First quiz, Perfect Score, Speed Demon, Streak badges, Category mastery, Level achievements
- **Streak system**: Visual indicator with multiplier display

### 4. Global Leaderboard
- Top 3 podium visual display
- Scrollable ranked list
- User's own rank highlighted

### 5. User Profile
- Anonymous mode (auto-created on first launch)
- Stats: quizzes played, accuracy, best streak, total score
- Badge collection (locked/unlocked)
- XP progress bar with level indication

### 6. Course Recommendations (gocharbon.fr)
- After each quiz, relevant courses suggested
- Based on quiz category and performance
- Direct links to gocharbon.fr courses
- CTA in profile for general learning

## Tech Stack
- **Frontend**: Flutter
- **Backend**: FastAPI, Motor (async MongoDB), Pydantic
- **Database**: MongoDB (48 seed questions, 15 fake users)
- **Navigation**: `go_router` with tabs (Home, Leaderboard, Profile) and quiz/results routes

## Target Audience
- Business learners and enthusiasts
- Commerce students
- Curious individuals wanting to test business knowledge

## Business Goal
Redirect users to gocharbon.fr online business learning platform through targeted course recommendations based on quiz performance.
