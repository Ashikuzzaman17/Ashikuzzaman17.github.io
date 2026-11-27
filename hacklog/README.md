# CuBra Hack Log

A zero-to-professional cyber security roadmap in three stages (119 sessions). Every user logs in with their own username and password and sees only their own progress. `index.html` is the app. `roadmap.js` holds Stage 1 (beginner) and `roadmap-pro.js` holds Stages 2–3 (intermediate and professional), so editing the content means editing only those two files.

## Two modes

- **Local mode (default):** If `SUPABASE_URL` is left empty, accounts and progress are stored only in that browser. Good for testing.
- **Online mode:** Fill in the Supabase details and anyone can log in from any device and get their own progress.

## Step 1: Create a free Supabase project (5 minutes)

1. Open a free account at https://supabase.com and click **New project**.
2. Go to **Authentication → Sign In / Providers → Email** and turn **Confirm email** OFF. Usernames are turned into made-up emails behind the scenes, so no verification mail can go out.
3. Open the **SQL Editor**, paste the SQL below and click Run:

```sql
create table public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;

create policy "own row read"   on public.progress for select using (auth.uid() = user_id);
create policy "own row insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own row update" on public.progress for update using (auth.uid() = user_id);
```

These rules (Row Level Security) make sure nobody can see or change anyone else's progress.

4. From **Project Settings → API**, copy the **Project URL** and the **anon public** key.
5. Open `index.html` and fill them in near the bottom:

```js
const SUPABASE_URL="https://xxxx.supabase.co";
const SUPABASE_ANON_KEY="eyJ...";
```

The anon key is safe to put in the site. The table is protected by RLS. Never put the `service_role` key here.

## Step 2: Put it online for free (pick one)

**GitHub Pages:** Create a new public repo (for example `hacklog`) → upload `index.html` → Settings → Pages → Branch: `main` / root → Save. Your link will be `https://<username>.github.io/hacklog/`.

**Vercel:** Push the repo to GitHub → at https://vercel.com click "Add New Project" → import the repo → Deploy. You get a `hacklog-xxx.vercel.app` link.

**Netlify (easiest):** Drag the folder onto https://app.netlify.com/drop.

## How it works

- Day 1 starts on the day you press "Start".
- Each day shows that day's tasks. If you skip a day, the remaining days move forward.
- When every task in a day is ticked, that day turns ✓ and the next day's work moves to the next date.
