-- Keep pgcrypto in the extensions schema while preserving already-created
-- public functions that call digest(...) with search_path = public.

create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create or replace function public.digest(data text, type text)
returns bytea
language sql
immutable
strict
parallel safe
as $$
  select extensions.digest(data::bytea, type);
$$;

revoke all on function public.digest(text, text) from public;
grant execute on function public.digest(text, text) to anon, authenticated;
