-- RLS policies for Supabase quiz schema.
-- Principle: user-scoped access via auth.uid(), no client-side privileged mutations.

alter table public.profiles enable row level security;
alter table public.user_category_stats enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_submissions enable row level security;
alter table public.quiz_answers enable row level security;
alter table public.leaderboard_public enable row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own
on public.profiles
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own
on public.profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists user_category_stats_select_own on public.user_category_stats;
create policy user_category_stats_select_own
on public.user_category_stats
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists quiz_submissions_select_own on public.quiz_submissions;
create policy quiz_submissions_select_own
on public.quiz_submissions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists quiz_answers_select_own on public.quiz_answers;
create policy quiz_answers_select_own
on public.quiz_answers
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists quiz_questions_read_authenticated on public.quiz_questions;
create policy quiz_questions_read_authenticated
on public.quiz_questions
for select
to authenticated
using (is_active = true);

drop policy if exists quiz_questions_read_anon on public.quiz_questions;
create policy quiz_questions_read_anon
on public.quiz_questions
for select
to anon
using (is_active = true);

drop policy if exists leaderboard_read_authenticated on public.leaderboard_public;
create policy leaderboard_read_authenticated
on public.leaderboard_public
for select
to authenticated
using (true);

drop policy if exists leaderboard_read_anon on public.leaderboard_public;
create policy leaderboard_read_anon
on public.leaderboard_public
for select
to anon
using (true);

revoke all on public.profiles from anon, authenticated;
revoke all on public.user_category_stats from anon, authenticated;
revoke all on public.quiz_submissions from anon, authenticated;
revoke all on public.quiz_answers from anon, authenticated;
revoke all on public.quiz_questions from anon, authenticated;
revoke all on public.leaderboard_public from anon, authenticated;

grant select on public.profiles to authenticated;
grant update (username, avatar_color) on public.profiles to authenticated;
grant select on public.user_category_stats to authenticated;
grant select on public.quiz_submissions to authenticated;
grant select on public.quiz_answers to authenticated;
grant select on public.quiz_questions to authenticated, anon;
grant select on public.leaderboard_public to authenticated, anon;

