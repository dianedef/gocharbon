-- Abuse guardrails: rate limits for anonymous signup and quiz submissions.

create table if not exists public.rate_limit_buckets (
  subject text not null,
  action text not null,
  window_started_at timestamptz not null,
  hits integer not null default 0 check (hits >= 0),
  updated_at timestamptz not null default now(),
  primary key (subject, action, window_started_at)
);

alter table public.rate_limit_buckets enable row level security;

create or replace function public.consume_rate_limit(
  p_subject text,
  p_action text,
  p_window_seconds integer,
  p_max_hits integer
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_window_start timestamptz;
  v_hits integer;
begin
  if p_subject is null or length(trim(p_subject)) = 0 then
    raise exception 'rate-limit subject is required' using errcode = '22023';
  end if;
  if p_action is null or length(trim(p_action)) = 0 then
    raise exception 'rate-limit action is required' using errcode = '22023';
  end if;
  if p_window_seconds < 1 or p_window_seconds > 86400 then
    raise exception 'rate-limit window is out of range' using errcode = '22023';
  end if;
  if p_max_hits < 1 or p_max_hits > 100000 then
    raise exception 'rate-limit max_hits is out of range' using errcode = '22023';
  end if;

  v_window_start := to_timestamp(
    floor(extract(epoch from now()) / p_window_seconds) * p_window_seconds
  );

  insert into public.rate_limit_buckets (subject, action, window_started_at, hits, updated_at)
  values (p_subject, p_action, v_window_start, 1, now())
  on conflict (subject, action, window_started_at) do update
    set hits = public.rate_limit_buckets.hits + 1,
        updated_at = now()
  returning hits into v_hits;

  if v_hits > p_max_hits then
    raise exception 'rate limit exceeded for action %', p_action
      using errcode = 'P0001';
  end if;
end;
$$;

create or replace function public.enforce_submit_quiz_rate_limit(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_anonymous boolean := false;
begin
  if p_user_id is null then
    raise exception 'user_id is required for submit_quiz rate limit' using errcode = '22023';
  end if;

  select coalesce(is_anonymous, false)
    into v_is_anonymous
  from auth.users
  where id = p_user_id;

  perform public.consume_rate_limit('user:' || p_user_id::text, 'submit_quiz:minute', 60, 30);
  perform public.consume_rate_limit('user:' || p_user_id::text, 'submit_quiz:day', 86400, 500);

  if v_is_anonymous then
    perform public.consume_rate_limit('anon_user:' || p_user_id::text, 'submit_quiz:minute', 60, 15);
    perform public.consume_rate_limit('anon_user:' || p_user_id::text, 'submit_quiz:day', 86400, 250);
  end if;
end;
$$;

create or replace function public.enforce_anonymous_signup_rate_limit(
  p_user_id uuid,
  p_user_meta jsonb,
  p_app_meta jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_provider text;
  v_providers text;
  v_fingerprint text;
  v_subject_hash text;
begin
  if p_user_id is null then
    raise exception 'user_id is required for signup rate limit' using errcode = '22023';
  end if;

  v_provider := coalesce(p_app_meta ->> 'provider', '');
  v_providers := coalesce(p_app_meta ->> 'providers', '');

  -- Apply only to anonymous sessions.
  if v_provider <> 'anonymous' and position('anonymous' in lower(v_providers)) = 0 then
    return;
  end if;

  v_fingerprint := nullif(trim(coalesce(
    p_user_meta ->> 'device_id',
    p_user_meta ->> 'install_id',
    p_user_meta ->> 'fingerprint'
  )), '');

  if v_fingerprint is null then
    v_fingerprint := p_user_id::text;
  end if;

  v_subject_hash := encode(extensions.digest(v_fingerprint, 'sha256'), 'hex');

  perform public.consume_rate_limit('anon_fingerprint:' || v_subject_hash, 'auth_signup:hour', 3600, 5);
  perform public.consume_rate_limit('anon_fingerprint:' || v_subject_hash, 'auth_signup:day', 86400, 12);
  perform public.consume_rate_limit('anon_global', 'auth_signup:minute', 60, 300);
end;
$$;

create index if not exists idx_rate_limit_buckets_gc
on public.rate_limit_buckets (updated_at);

revoke all on public.rate_limit_buckets from anon, authenticated;
revoke all on function public.consume_rate_limit(text, text, integer, integer) from public;
revoke all on function public.enforce_submit_quiz_rate_limit(uuid) from public;
revoke all on function public.enforce_anonymous_signup_rate_limit(uuid, jsonb, jsonb) from public;
