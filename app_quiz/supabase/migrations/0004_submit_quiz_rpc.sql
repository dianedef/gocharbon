-- Controlled quiz submission RPC.
-- Includes payload bounds, anti-replay, atomic profile/stats update.

create or replace function public.badge_payload(p_badge_id text)
returns jsonb
language sql
immutable
as $$
  select case p_badge_id
    when 'first_quiz'   then jsonb_build_object('id', p_badge_id, 'name', 'Premier Pas', 'description', 'Complétez votre premier quiz', 'icon', 'flag')
    when 'perfect_score' then jsonb_build_object('id', p_badge_id, 'name', 'Score Parfait', 'description', 'Obtenez 10/10 dans un quiz', 'icon', 'star')
    when 'speed_demon'  then jsonb_build_object('id', p_badge_id, 'name', 'Éclair', 'description', 'Terminez un quiz chronométré en moins de 60s', 'icon', 'flash')
    when 'streak_5'     then jsonb_build_object('id', p_badge_id, 'name', 'En Feu', 'description', '5 bonnes réponses consécutives', 'icon', 'fire')
    when 'streak_10'    then jsonb_build_object('id', p_badge_id, 'name', 'Inarrêtable', 'description', '10 bonnes réponses consécutives', 'icon', 'shield')
    when 'finance_5'    then jsonb_build_object('id', p_badge_id, 'name', 'Gourou Finance', 'description', '5 quiz Finance complétés', 'icon', 'cash')
    when 'marketing_5'  then jsonb_build_object('id', p_badge_id, 'name', 'Pro Marketing', 'description', '5 quiz Marketing complétés', 'icon', 'bullhorn')
    when 'management_5' then jsonb_build_object('id', p_badge_id, 'name', 'As du Management', 'description', '5 quiz Management complétés', 'icon', 'briefcase')
    when 'ecommerce_5'  then jsonb_build_object('id', p_badge_id, 'name', 'Expert E-commerce', 'description', '5 quiz E-commerce complétés', 'icon', 'cart')
    when 'level_3'      then jsonb_build_object('id', p_badge_id, 'name', 'Intermédiaire', 'description', 'Atteignez le niveau 3', 'icon', 'trending-up')
    when 'level_5'      then jsonb_build_object('id', p_badge_id, 'name', 'Maître Business', 'description', 'Atteignez le niveau 5', 'icon', 'trophy')
    when 'quiz_10'      then jsonb_build_object('id', p_badge_id, 'name', 'Quizzeur Assidu', 'description', 'Complétez 10 quiz', 'icon', 'book')
    when 'quiz_25'      then jsonb_build_object('id', p_badge_id, 'name', 'Expert Quiz', 'description', 'Complétez 25 quiz', 'icon', 'school')
    else jsonb_build_object('id', p_badge_id)
  end;
$$;

create or replace function public.protect_profile_sensitive_fields()
returns trigger
language plpgsql
as $$
begin
  if coalesce(current_setting('app.submit_quiz_rpc', true), '0') <> '1'
     and (
       new.total_score <> old.total_score
       or new.xp <> old.xp
       or new.level <> old.level
       or new.level_name <> old.level_name
       or new.badges is distinct from old.badges
       or new.total_quizzes <> old.total_quizzes
       or new.correct_answers <> old.correct_answers
       or new.total_answers <> old.total_answers
       or new.best_streak <> old.best_streak
       or new.last_submission_at is distinct from old.last_submission_at
     ) then
    raise exception 'protected profile fields can only be updated by submit_quiz RPC'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_sensitive_fields on public.profiles;
create trigger profiles_protect_sensitive_fields
before update on public.profiles
for each row
execute function public.protect_profile_sensitive_fields();

create or replace function public.submit_quiz(
  p_attempt_token uuid,
  p_category text,
  p_mode text,
  p_answers jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_existing_result jsonb;
  v_payload_count integer;
  v_request_hash text;
  v_seen_question_ids text[] := '{}'::text[];
  v_answer jsonb;
  v_question_id text;
  v_selected_answer integer;
  v_time_taken numeric;

  v_matched_questions integer := 0;
  v_streak integer := 0;
  v_best_streak integer := 0;
  v_correct_count integer := 0;
  v_base_score integer := 0;
  v_time_bonus integer := 0;
  v_streak_bonus integer := 0;
  v_total_score integer := 0;
  v_total_time numeric := 0;
  v_streak_multiplier numeric(4,2) := 1.0;

  v_current_score integer := 0;
  v_current_xp integer := 0;
  v_current_level smallint := 1;
  v_existing_badges text[] := '{}'::text[];
  v_total_quizzes integer := 0;
  v_correct_answers integer := 0;
  v_total_answers integer := 0;
  v_best_streak_profile integer := 0;

  v_new_xp integer := 0;
  v_new_level smallint := 1;
  v_new_level_name text := 'Débutant';
  v_level_up boolean := false;

  v_cat_played integer := 0;
  v_cat_correct integer := 0;

  v_new_badge_ids text[] := '{}'::text[];
  v_new_badges jsonb := '[]'::jsonb;

  v_submission_id uuid := gen_random_uuid();
  v_result jsonb;
  v_row record;
begin
  if v_user_id is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  if p_attempt_token is null then
    raise exception 'attempt_token is required' using errcode = '22023';
  end if;

  if p_category not in ('finance', 'marketing', 'management', 'ecommerce', 'random', 'daily') then
    raise exception 'unsupported category' using errcode = '22023';
  end if;

  if p_mode not in ('timed', 'relaxed') then
    raise exception 'unsupported quiz mode' using errcode = '22023';
  end if;

  if jsonb_typeof(p_answers) <> 'array' then
    raise exception 'answers must be an array' using errcode = '22023';
  end if;

  v_payload_count := jsonb_array_length(p_answers);
  if v_payload_count < 1 or v_payload_count > 20 then
    raise exception 'answers count is out of range (1..20)' using errcode = '22023';
  end if;

  -- Replay guard (idempotent): same attempt_token returns existing result.
  select result_payload
    into v_existing_result
  from public.quiz_submissions
  where user_id = v_user_id
    and attempt_token = p_attempt_token;

  if v_existing_result is not null then
    return v_existing_result;
  end if;

  -- Optional hook introduced by a later migration (0005_rate_limits.sql).
  if to_regprocedure('public.enforce_submit_quiz_rate_limit(uuid)') is not null then
    execute 'select public.enforce_submit_quiz_rate_limit($1)' using v_user_id;
  end if;

  for v_answer in select value from jsonb_array_elements(p_answers)
  loop
    v_question_id := nullif(trim(v_answer ->> 'question_id'), '');
    v_selected_answer := nullif(v_answer ->> 'selected_answer', '')::integer;
    v_time_taken := nullif(v_answer ->> 'time_taken', '')::numeric;

    if v_question_id is null then
      raise exception 'question_id is required' using errcode = '22023';
    end if;

    if v_selected_answer is null or v_selected_answer < -1 or v_selected_answer > 10 then
      raise exception 'selected_answer is out of range' using errcode = '22023';
    end if;

    if v_time_taken is null or v_time_taken < 0 or v_time_taken > 3600 then
      raise exception 'time_taken is out of range' using errcode = '22023';
    end if;

    v_total_time := v_total_time + v_time_taken;
    v_seen_question_ids := array_append(v_seen_question_ids, v_question_id);
  end loop;

  if (select count(*) from unnest(v_seen_question_ids) as qid)
     <> (select count(distinct qid) from unnest(v_seen_question_ids) as qid) then
    raise exception 'duplicate question answers are not allowed' using errcode = '22023';
  end if;

  if v_total_time > 7200 then
    raise exception 'total answer duration is out of range' using errcode = '22023';
  end if;

  for v_row in
    with payload as (
      select
        e.ordinality as answer_pos,
        trim(e.value ->> 'question_id') as question_id,
        (e.value ->> 'selected_answer')::integer as selected_answer,
        (e.value ->> 'time_taken')::numeric as time_taken
      from jsonb_array_elements(p_answers) with ordinality as e(value, ordinality)
    )
    select
      p.answer_pos,
      p.question_id,
      p.selected_answer,
      p.time_taken,
      q.correct_answer
    from payload p
    join public.quiz_questions q
      on q.id = p.question_id
     and q.is_active = true
     and (p_category in ('random', 'daily') or q.category = p_category)
    order by p.answer_pos
  loop
    v_matched_questions := v_matched_questions + 1;

    if v_row.selected_answer = v_row.correct_answer then
      v_correct_count := v_correct_count + 1;
      v_streak := v_streak + 1;
      v_best_streak := greatest(v_best_streak, v_streak);
      v_base_score := v_base_score + 100;

      if p_mode = 'timed' then
        v_time_bonus := v_time_bonus + floor(greatest(0, 15 - v_row.time_taken) * 50 / 15)::integer;
      end if;

      if v_streak >= 10 then
        v_streak_bonus := v_streak_bonus + 100;
      elsif v_streak >= 5 then
        v_streak_bonus := v_streak_bonus + 50;
      end if;
    else
      v_streak := 0;
    end if;
  end loop;

  if v_matched_questions <> v_payload_count then
    raise exception 'invalid or inactive question id(s) in payload' using errcode = '22023';
  end if;

  v_total_score := v_base_score + v_time_bonus + v_streak_bonus;
  if v_best_streak >= 10 then
    v_streak_multiplier := 2.0;
  elsif v_best_streak >= 5 then
    v_streak_multiplier := 1.5;
  end if;

  -- Serialize same-user submissions and read mutable profile state.
  select
    total_score,
    xp,
    level,
    coalesce(badges, '{}'::text[]),
    total_quizzes,
    correct_answers,
    total_answers,
    best_streak
  into
    v_current_score,
    v_current_xp,
    v_current_level,
    v_existing_badges,
    v_total_quizzes,
    v_correct_answers,
    v_total_answers,
    v_best_streak_profile
  from public.profiles
  where user_id = v_user_id
  for update;

  if not found then
    raise exception 'profile not found for current user' using errcode = 'P0002';
  end if;

  v_total_quizzes := v_total_quizzes + 1;
  v_correct_answers := v_correct_answers + v_correct_count;
  v_total_answers := v_total_answers + v_payload_count;
  v_best_streak_profile := greatest(v_best_streak_profile, v_best_streak);
  v_new_xp := v_current_xp + v_total_score;

  if v_new_xp >= 15000 then
    v_new_level := 5;
    v_new_level_name := 'Maître';
  elsif v_new_xp >= 8000 then
    v_new_level := 4;
    v_new_level_name := 'Expert';
  elsif v_new_xp >= 3000 then
    v_new_level := 3;
    v_new_level_name := 'Intermédiaire';
  elsif v_new_xp >= 1000 then
    v_new_level := 2;
    v_new_level_name := 'Apprenti';
  else
    v_new_level := 1;
    v_new_level_name := 'Débutant';
  end if;

  v_level_up := v_new_level > v_current_level;

  if p_category not in ('random', 'daily') then
    select played, correct
      into v_cat_played, v_cat_correct
    from public.user_category_stats
    where user_id = v_user_id and category = p_category
    for update;

    if not found then
      v_cat_played := 0;
      v_cat_correct := 0;
    end if;

    v_cat_played := v_cat_played + 1;
    v_cat_correct := v_cat_correct + v_correct_count;
  end if;

  -- Badge unlocking.
  if v_total_quizzes = 1 and not ('first_quiz' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'first_quiz');
    v_new_badge_ids := array_append(v_new_badge_ids, 'first_quiz');
  end if;
  if v_correct_count = v_payload_count and not ('perfect_score' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'perfect_score');
    v_new_badge_ids := array_append(v_new_badge_ids, 'perfect_score');
  end if;
  if p_mode = 'timed' and v_total_time < 60 and not ('speed_demon' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'speed_demon');
    v_new_badge_ids := array_append(v_new_badge_ids, 'speed_demon');
  end if;
  if v_best_streak >= 5 and not ('streak_5' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'streak_5');
    v_new_badge_ids := array_append(v_new_badge_ids, 'streak_5');
  end if;
  if v_best_streak >= 10 and not ('streak_10' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'streak_10');
    v_new_badge_ids := array_append(v_new_badge_ids, 'streak_10');
  end if;
  if v_new_level >= 3 and not ('level_3' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'level_3');
    v_new_badge_ids := array_append(v_new_badge_ids, 'level_3');
  end if;
  if v_new_level >= 5 and not ('level_5' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'level_5');
    v_new_badge_ids := array_append(v_new_badge_ids, 'level_5');
  end if;
  if v_total_quizzes >= 10 and not ('quiz_10' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'quiz_10');
    v_new_badge_ids := array_append(v_new_badge_ids, 'quiz_10');
  end if;
  if v_total_quizzes >= 25 and not ('quiz_25' = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, 'quiz_25');
    v_new_badge_ids := array_append(v_new_badge_ids, 'quiz_25');
  end if;
  if p_category not in ('random', 'daily')
     and v_cat_played >= 5
     and not ((p_category || '_5') = any(v_existing_badges)) then
    v_existing_badges := array_append(v_existing_badges, p_category || '_5');
    v_new_badge_ids := array_append(v_new_badge_ids, p_category || '_5');
  end if;

  if cardinality(v_new_badge_ids) > 0 then
    select coalesce(jsonb_agg(public.badge_payload(badge_id)), '[]'::jsonb)
      into v_new_badges
    from unnest(v_new_badge_ids) as badge_id;
  end if;

  v_request_hash := encode(
    extensions.digest(
      jsonb_build_object(
        'attempt_token', p_attempt_token::text,
        'category', p_category,
        'mode', p_mode,
        'answers', p_answers
      )::text,
      'sha256'
    ),
    'hex'
  );

  perform set_config('app.submit_quiz_rpc', '1', true);

  update public.profiles
    set total_score = v_current_score + v_total_score,
        xp = v_new_xp,
        level = v_new_level,
        level_name = v_new_level_name,
        badges = v_existing_badges,
        total_quizzes = v_total_quizzes,
        correct_answers = v_correct_answers,
        total_answers = v_total_answers,
        best_streak = v_best_streak_profile,
        last_submission_at = now()
  where user_id = v_user_id;

  if p_category not in ('random', 'daily') then
    insert into public.user_category_stats (user_id, category, played, correct)
    values (v_user_id, p_category, v_cat_played, v_cat_correct)
    on conflict (user_id, category) do update
      set played = excluded.played,
          correct = excluded.correct,
          updated_at = now();
  end if;

  v_result := jsonb_build_object(
    'total_score', v_total_score,
    'base_score', v_base_score,
    'time_bonus', v_time_bonus,
    'streak_bonus', v_streak_bonus,
    'xp_gained', v_total_score,
    'correct_count', v_correct_count,
    'total_questions', v_payload_count,
    'best_streak', v_best_streak,
    'streak_multiplier', v_streak_multiplier,
    'new_badges', v_new_badges,
    'level_up', v_level_up,
    'new_level', v_new_level,
    'new_level_name', v_new_level_name,
    'course_recommendations', '[]'::jsonb,
    'category', p_category
  );

  insert into public.quiz_submissions (
    id,
    user_id,
    attempt_token,
    request_hash,
    category,
    mode,
    answer_count,
    correct_count,
    base_score,
    time_bonus,
    streak_bonus,
    total_score,
    xp_gained,
    best_streak,
    streak_multiplier,
    result_payload
  )
  values (
    v_submission_id,
    v_user_id,
    p_attempt_token,
    v_request_hash,
    p_category,
    p_mode,
    v_payload_count,
    v_correct_count,
    v_base_score,
    v_time_bonus,
    v_streak_bonus,
    v_total_score,
    v_total_score,
    v_best_streak,
    v_streak_multiplier,
    v_result
  );

  insert into public.quiz_answers (
    submission_id,
    user_id,
    question_id,
    selected_answer,
    time_taken,
    is_correct
  )
  select
    v_submission_id,
    v_user_id,
    p.question_id,
    p.selected_answer,
    p.time_taken,
    (p.selected_answer = q.correct_answer) as is_correct
  from (
    select
      trim(e.value ->> 'question_id') as question_id,
      (e.value ->> 'selected_answer')::integer as selected_answer,
      (e.value ->> 'time_taken')::numeric as time_taken
    from jsonb_array_elements(p_answers) as e(value)
  ) p
  join public.quiz_questions q
    on q.id = p.question_id
   and q.is_active = true
   and (p_category in ('random', 'daily') or q.category = p_category);

  perform set_config('app.submit_quiz_rpc', '0', true);
  return v_result;

exception
  when unique_violation then
    -- If a concurrent transaction inserted this attempt token first, return its result.
    select result_payload
      into v_existing_result
    from public.quiz_submissions
    where user_id = v_user_id
      and attempt_token = p_attempt_token;

    if v_existing_result is not null then
      return v_existing_result;
    end if;
    raise;
end;
$$;

revoke all on function public.submit_quiz(uuid, text, text, jsonb) from public;
grant execute on function public.submit_quiz(uuid, text, text, jsonb) to authenticated;

create or replace function public.get_my_profile()
returns jsonb
language sql
security invoker
stable
as $$
  select jsonb_build_object(
    'user_id', p.user_id,
    'username', p.username,
    'avatar_color', p.avatar_color,
    'total_score', p.total_score,
    'xp', p.xp,
    'level', p.level,
    'level_name', p.level_name,
    'badges', p.badges,
    'stats', jsonb_build_object(
      'total_quizzes', p.total_quizzes,
      'correct_answers', p.correct_answers,
      'total_answers', p.total_answers,
      'best_streak', p.best_streak,
      'categories', coalesce((
        select jsonb_object_agg(
          s.category,
          jsonb_build_object('played', s.played, 'correct', s.correct)
        )
        from public.user_category_stats s
        where s.user_id = p.user_id
      ), '{}'::jsonb)
    )
  )
  from public.profiles p
  where p.user_id = auth.uid();
$$;

create or replace function public.get_leaderboard(p_limit integer default 50)
returns table (
  rank integer,
  user_id uuid,
  username text,
  avatar_color text,
  total_score integer,
  level smallint,
  level_name text
)
language sql
security invoker
stable
as $$
  select
    row_number() over (order by lb.total_score desc, lb.updated_at asc, lb.user_id)::integer as rank,
    lb.user_id,
    lb.username,
    lb.avatar_color,
    lb.total_score,
    lb.level,
    lb.level_name
  from public.leaderboard_public lb
  order by lb.total_score desc, lb.updated_at asc, lb.user_id
  limit least(greatest(coalesce(p_limit, 50), 1), 200);
$$;

create or replace function public.get_my_rank()
returns jsonb
language sql
security invoker
stable
as $$
  with ranked as (
    select
      lb.user_id,
      lb.total_score,
      row_number() over (order by lb.total_score desc, lb.updated_at asc, lb.user_id)::integer as rank
    from public.leaderboard_public lb
  )
  select jsonb_build_object(
    'rank', coalesce(r.rank, 0),
    'total_score', coalesce(r.total_score, 0)
  )
  from (select auth.uid() as user_id) me
  left join ranked r on r.user_id = me.user_id;
$$;

revoke all on function public.get_my_profile() from public;
revoke all on function public.get_leaderboard(integer) from public;
revoke all on function public.get_my_rank() from public;
grant execute on function public.get_my_profile() to authenticated;
grant execute on function public.get_leaderboard(integer) to anon, authenticated;
grant execute on function public.get_my_rank() to authenticated;
