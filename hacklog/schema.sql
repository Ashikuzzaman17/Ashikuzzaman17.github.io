-- Hack Log: online accounts (username + password) and per-user progress.
-- Paste this whole file into Supabase → SQL Editor → Run. Safe to run more than once.
-- The tables are locked (RLS on, no policies): the site can only use the functions below,
-- and each function only ever touches the logged-in user's own row.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.hl_users (
  username   text primary key check (username ~ '^[a-z0-9_]{3,20}$'),
  pass_hash  text not null,
  state      jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.hl_sessions (
  token      uuid primary key default gen_random_uuid(),
  username   text not null references public.hl_users(username) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.hl_users    enable row level security;
alter table public.hl_sessions enable row level security;
revoke all on public.hl_users, public.hl_sessions from anon, authenticated;

-- Create an account and log in. Returns {token, username, state}.
create or replace function public.hl_signup(p_username text, p_password text, p_state jsonb default '{}'::jsonb)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare t uuid; u text := lower(trim(p_username));
begin
  if u !~ '^[a-z0-9_]{3,20}$' then raise exception 'bad_username'; end if;
  if length(coalesce(p_password,'')) < 6 or length(p_password) > 200 then raise exception 'bad_password'; end if;
  if exists (select 1 from hl_users where username = u) then raise exception 'username_taken'; end if;
  if p_state is null or jsonb_typeof(p_state) <> 'object' or pg_column_size(p_state) > 200000 then p_state := '{}'::jsonb; end if;
  insert into hl_users(username, pass_hash, state) values (u, crypt(p_password, gen_salt('bf', 10)), p_state);
  insert into hl_sessions(username) values (u) returning token into t;
  return json_build_object('token', t, 'username', u, 'state', p_state);
end $$;

-- Log in. Returns {token, username, state}.
create or replace function public.hl_login(p_username text, p_password text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare r hl_users; t uuid; u text := lower(trim(p_username));
begin
  select * into r from hl_users where username = u;
  if r.username is null or r.pass_hash <> crypt(coalesce(p_password,''), r.pass_hash) then raise exception 'invalid_login'; end if;
  delete from hl_sessions where username = u and created_at < now() - interval '90 days';
  insert into hl_sessions(username) values (u) returning token into t;
  return json_build_object('token', t, 'username', u, 'state', r.state);
end $$;

-- Read the logged-in user's progress. Returns {username, state}.
create or replace function public.hl_get(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare r hl_users;
begin
  select u.* into r from hl_sessions s join hl_users u on u.username = s.username where s.token = p_token;
  if r.username is null then raise exception 'invalid_session'; end if;
  return json_build_object('username', r.username, 'state', r.state);
end $$;

-- Save the logged-in user's progress.
create or replace function public.hl_save(p_token uuid, p_state jsonb)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare u text;
begin
  select username into u from hl_sessions where token = p_token;
  if u is null then raise exception 'invalid_session'; end if;
  if p_state is null or jsonb_typeof(p_state) <> 'object' or pg_column_size(p_state) > 200000 then raise exception 'bad_state'; end if;
  update hl_users set state = p_state, updated_at = now() where username = u;
end $$;

-- Log out on this device.
create or replace function public.hl_logout(p_token uuid)
returns void language sql security definer set search_path = public, extensions as $$
  delete from hl_sessions where token = p_token;
$$;

revoke all on function public.hl_signup(text,text,jsonb), public.hl_login(text,text), public.hl_get(uuid), public.hl_save(uuid,jsonb), public.hl_logout(uuid) from public;
grant execute on function public.hl_signup(text,text,jsonb), public.hl_login(text,text), public.hl_get(uuid), public.hl_save(uuid,jsonb), public.hl_logout(uuid) to anon, authenticated;
