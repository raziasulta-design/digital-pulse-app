# Digital Pulse — Task Plan

## Sprint 1 — Database & data-access layer
- Create Supabase tables: profiles, activities, audit_logs.
- Seed 4-5 demo rows per table.
- Build `lib/data/` functions: getActivities, createActivity, updateActivity, deleteActivity, getProfile, updateProfile, getAnalytics.
- Enable RLS with permissive v1 policies.
- **DoD:** All data functions return seeded rows from Supabase; CRUD functions persist changes.

## Sprint 2 — Dashboard & activities CRUD (← v1 functional milestone)
- Build dashboard page: activity feed + analytics counts.
- Build activities page: list, create form, edit, delete.
- Build profile page: view + edit form.
- Responsive sidebar nav (desktop) / hamburger (mobile).
- Loading / empty / error states on all surfaces.
- Deploy to Vercel.
- **DoD:** Anonymous visitor sees populated dashboard, creates an activity, feed + counts update — end-to-end without login.

## Sprint 3 — Analytics & polish
- Analytics page: 7-day trend, per-action breakdown, totals.
- Audit log entries on all writes.
- Empty/error states refined.
- **DoD:** Analytics computed from real activities; audit rows appear on every create/update/delete.

## Sprint 4 — Lock it down (auth + RLS)
- Add Supabase auth: signup, login, logout.
- Replace permissive RLS with owner-scoped policies (`auth.uid() = user_id`).
- Gate writes behind auth; keep dashboard readable for logged-in users.
- Profile auto-creates on signup.
- **DoD:** New user signs up → lands on dashboard → their activities are isolated to them; cannot read/write other users' data.

## Sprint 5 — Intelligence (later)
- Auto-tag activities, score and rank feed, draft suggestions.

## Gantt
```
Sprint 1: DB + data-access
Sprint 2: Dashboard + activities CRUD + profile  ← v1 functional
Sprint 3: Analytics + audit + polish
Sprint 4: Auth + RLS lock-down
Sprint 5: Intelligence layer (later)
```
