# CuBra Hack Log

A zero-to-professional cyber security roadmap in three stages (119 sessions). Anyone can create an account with a username and password, log in from any phone or computer, and see only their own progress.

Files:

- `index.html`: the app
- `roadmap.js`: Stage 1 (beginner)
- `roadmap-pro.js`: Stages 2–3 (intermediate and professional)
- `schema.sql`: the online database (accounts and progress)

To change the roadmap content, edit only the two `roadmap` files.

## Two modes

- **Local mode** (when `SUPABASE_URL` is empty): accounts and progress live only in the browser where they were made. An account made on a PC does not exist on a phone.
- **Online mode** (when the Supabase details are filled in): anyone can sign up and log in from any device, and progress syncs everywhere.

## Turning on online mode (about 5 minutes, free)

1. Go to https://supabase.com, sign in with GitHub, and click **New project**. Pick any name (for example `hacklog`) and a database password (keep it to yourself). For the region, pick the one closest to your users (for example Singapore). The free plan is enough.
2. When the project is ready, open **SQL Editor**, paste the whole of `schema.sql`, and click **Run**. It is safe to run again.
3. Open **Project Settings → API Keys** (or **Data API**) and copy two things:
   - the **Project URL** (`https://xxxx.supabase.co`)
   - the **publishable** key (`sb_publishable_...`), or on older projects the **anon public** key
4. Put them in `index.html`:

```js
const SUPABASE_URL="https://xxxx.supabase.co";
const SUPABASE_KEY="sb_publishable_...";
```

The publishable/anon key is meant to be public, so it is safe in the site. Never put the **secret** or **service_role** key here.

## How accounts are protected

- Passwords are stored only as bcrypt hashes.
- The tables are locked with Row Level Security and have no policies, so the site cannot read them directly.
- The site can only call five database functions (`hl_signup`, `hl_login`, `hl_get`, `hl_save`, `hl_logout`). Each one works only on the logged-in user's own row, through a session token.
- Logins on a device stay active until you log out. Old sessions are cleared after 90 days.

## How the calendar works

- Day 1 starts on the day you press **Start**.
- Each session shows its estimated time, and the calendar uses that estimate.
- If you skip a day, the remaining sessions move forward.
- When every task in a session is ticked, that session turns ✓ and the next one moves to the next date.
