# Digital Pulse — Architecture

## Stack
Next.js (App Router) · Supabase (Postgres + Auth) · Vercel deployment.

## Build sequencing
**Now (v1):** Dashboard with activity feed, create/edit/delete activities, profile view/edit, live analytics panel — all viewable without login against seeded data.
**Next:** Supabase auth (signup/login), per-user data isolation via RLS owner policies, replace demo seed with real user data.
**Later:** Activity scoring/ranking, smart tagging of activities, agentic draft-and-approval workflows, audit log viewer.

## Key user-action flow (v1)
1. Visitor opens app → dashboard loads, fetches activities from Supabase.
2. Renders activity feed + analytics counts in one server query.
3. User clicks "Log activity" → form opens.
4. User fills actor, action, summary → submits → writes to `activities` table.
5. Feed revalidates; analytics counts update. New entry visible immediately.
6. User edits profile → updates `profiles` table → reflects on profile page.

## Nav shell
Persistent left sidebar on desktop (Dashboard · Activities · Profile · Analytics). Collapses to hamburger menu on mobile. Current section highlighted.

## Layer plan
1. **Data layer** — `lib/data/` owns all Supabase reads/writes. No inline DB calls in UI.
2. **App logic** — Server components + route handlers in `app/` call `lib/data/` functions.
3. **Intelligence** — `lib/ai/` for any scoring/tagging (later sprint; core works without it).

## Why the core runs without AI
The dashboard, activity CRUD, and analytics are plain SQL + React. No AI dependency. AI features (auto-tagging, ranking, draft suggestions) plug in later as an enhancement layer.

## Repo structure
```
app/
  dashboard/
  activities/
  profile/
  analytics/
lib/
  data/        # all DB access
  ai/          # scoring/tagging (later)
components/
  ui/
  layout/
__tests__/
```

## Module map
| Module | Responsibility | Owns | Build order |
|--------|---------------|------|-------------|
| data-access | All Supabase queries/mutations | profiles, activities, audit_logs | 1st |
| dashboard | Feed + analytics rendering | reads activities | 2nd |
| activities | CRUD UI + forms | writes activities | 2nd |
| profile | View/edit profile | writes profiles | 3rd |
| auth (later) | Signup/login + RLS | auth.users mapping | last |
