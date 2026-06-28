-- Initial Supabase quiz schema (Flutter-first auth/data migration)

create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  username text not null,
  avatar_color text not null default '#4F46E5',
  total_score integer not null default 0 check (total_score >= 0),
  xp integer not null default 0 check (xp >= 0),
  level smallint not null default 1 check (level >= 1 and level <= 100),
  level_name text not null default 'Débutant',
  badges text[] not null default '{}'::text[],
  total_quizzes integer not null default 0 check (total_quizzes >= 0),
  correct_answers integer not null default 0 check (correct_answers >= 0),
  total_answers integer not null default 0 check (total_answers >= 0),
  best_streak integer not null default 0 check (best_streak >= 0),
  last_submission_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id),
  check (avatar_color ~ '^#[0-9A-Fa-f]{6}$')
);

create table if not exists public.user_category_stats (
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  category text not null check (category in ('finance', 'marketing', 'management', 'ecommerce', 'random', 'daily')),
  played integer not null default 0 check (played >= 0),
  correct integer not null default 0 check (correct >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, category)
);

create table if not exists public.quiz_questions (
  id text primary key,
  category text not null check (category in ('finance', 'marketing', 'management', 'ecommerce', 'random', 'daily')),
  kind text not null check (kind in ('mcq', 'truefalse')),
  difficulty text not null default 'medium' check (difficulty in ('easy', 'medium', 'hard')),
  correct_answer smallint not null check (correct_answer >= -1 and correct_answer <= 10),
  options jsonb not null default '[]'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quiz_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  attempt_token uuid not null,
  request_hash text not null check (length(request_hash) = 64),
  category text not null check (category in ('finance', 'marketing', 'management', 'ecommerce', 'random', 'daily')),
  mode text not null check (mode in ('timed', 'relaxed')),
  answer_count smallint not null check (answer_count >= 1 and answer_count <= 20),
  correct_count smallint not null check (correct_count >= 0),
  base_score integer not null check (base_score >= 0),
  time_bonus integer not null check (time_bonus >= 0),
  streak_bonus integer not null check (streak_bonus >= 0),
  total_score integer not null check (total_score >= 0),
  xp_gained integer not null check (xp_gained >= 0),
  best_streak smallint not null check (best_streak >= 0),
  streak_multiplier numeric(4, 2) not null check (streak_multiplier >= 1 and streak_multiplier <= 2),
  submitted_at timestamptz not null default now(),
  result_payload jsonb not null default '{}'::jsonb,
  unique (user_id, attempt_token)
);

create table if not exists public.quiz_answers (
  submission_id uuid not null references public.quiz_submissions (id) on delete cascade,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  question_id text not null references public.quiz_questions (id),
  selected_answer smallint not null check (selected_answer >= -1 and selected_answer <= 10),
  time_taken numeric(8, 3) not null check (time_taken >= 0 and time_taken <= 3600),
  is_correct boolean not null,
  created_at timestamptz not null default now(),
  primary key (submission_id, question_id)
);

create table if not exists public.leaderboard_public (
  user_id uuid primary key references public.profiles (user_id) on delete cascade,
  username text not null,
  avatar_color text not null,
  total_score integer not null default 0,
  level smallint not null default 1,
  level_name text not null default 'Débutant',
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create or replace function public.sync_leaderboard_public()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.leaderboard_public (
    user_id,
    username,
    avatar_color,
    total_score,
    level,
    level_name,
    updated_at
  )
  values (
    new.user_id,
    new.username,
    new.avatar_color,
    new.total_score,
    new.level,
    new.level_name,
    now()
  )
  on conflict (user_id) do update
    set username = excluded.username,
        avatar_color = excluded.avatar_color,
        total_score = excluded.total_score,
        level = excluded.level,
        level_name = excluded.level_name,
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists user_category_stats_set_updated_at on public.user_category_stats;
create trigger user_category_stats_set_updated_at
before update on public.user_category_stats
for each row
execute function public.set_updated_at();

drop trigger if exists quiz_questions_set_updated_at on public.quiz_questions;
create trigger quiz_questions_set_updated_at
before update on public.quiz_questions
for each row
execute function public.set_updated_at();

drop trigger if exists profiles_sync_leaderboard on public.profiles;
create trigger profiles_sync_leaderboard
after insert or update of username, avatar_color, total_score, level, level_name on public.profiles
for each row
execute function public.sync_leaderboard_public();

create index if not exists idx_profiles_total_score on public.profiles (total_score desc, user_id);
create index if not exists idx_quiz_submissions_user_time on public.quiz_submissions (user_id, submitted_at desc);
create index if not exists idx_quiz_answers_user_time on public.quiz_answers (user_id, created_at desc);
create index if not exists idx_quiz_questions_category_active on public.quiz_questions (category, is_active);
