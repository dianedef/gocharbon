-- Profile bootstrap on auth user creation.
-- Guarantees one profile row per auth.users.id (idempotent).

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_username text;
  v_avatar_palette text[] := array['#4F46E5', '#3B82F6', '#EC4899', '#8B5CF6', '#F59E0B', '#10B981', '#EF4444', '#06B6D4'];
  v_avatar_color text;
  v_hash_int bigint;
begin
  -- Optional hook introduced by a later migration (0005_rate_limits.sql).
  if to_regprocedure('public.enforce_anonymous_signup_rate_limit(uuid,jsonb,jsonb)') is not null then
    execute 'select public.enforce_anonymous_signup_rate_limit($1, $2, $3)'
      using new.id, coalesce(new.raw_user_meta_data, '{}'::jsonb), coalesce(new.raw_app_meta_data, '{}'::jsonb);
  end if;

  v_username := nullif(trim(coalesce(
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'name',
    new.raw_user_meta_data ->> 'full_name'
  )), '');

  if v_username is null then
    v_username := 'Player' || lpad((abs(('x' || substr(md5(new.id::text), 1, 16))::bit(64)::bigint) % 10000)::text, 4, '0');
  end if;

  v_hash_int := abs(('x' || substr(md5(new.id::text), 1, 16))::bit(64)::bigint);
  v_avatar_color := v_avatar_palette[(v_hash_int % array_length(v_avatar_palette, 1)) + 1];

  insert into public.profiles (
    user_id,
    username,
    avatar_color,
    total_score,
    xp,
    level,
    level_name,
    badges,
    total_quizzes,
    correct_answers,
    total_answers,
    best_streak
  )
  values (
    new.id,
    v_username,
    v_avatar_color,
    0,
    0,
    1,
    'Débutant',
    '{}'::text[],
    0,
    0,
    0,
    0
  )
  on conflict (user_id) do nothing;

  insert into public.user_category_stats (user_id, category, played, correct)
  values
    (new.id, 'finance', 0, 0),
    (new.id, 'marketing', 0, 0),
    (new.id, 'management', 0, 0),
    (new.id, 'ecommerce', 0, 0)
  on conflict (user_id, category) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();
