# Digital Pulse — PRD

## Problem
Internal team members and beta clients track activity, profiles, and analytics in scattered spreadsheets and forms. No single portal gives a live view of who did what and when.

## Target user
Digital Pulse internal team members, administrators, and initial beta clients — people who need a live, centralized portal instead of shared spreadsheets.

## Core objects
- **Profiles** — display name, role, avatar URL, bio, team label.
- **Activities** — actor, action type, summary, timestamp, metadata.
- **Audit logs** — who, what, when, before/after, source.
- **Analytics summary** — aggregated counts per actor/action over a rolling window (derived from activities).

## MVP (v1) — must-haves
- [ ] Dashboard page rendering real activity feed from Supabase (no seed-only screen).
- [ ] Create / edit / delete activity entries that persist to the database.
- [ ] Profile page: view + edit display name, role, bio, team.
- [ ] Analytics panel: live counts (total activities, per-action breakdown, recent 7-day trend) computed from the activities table.
- [ ] Responsive sidebar nav (desktop) collapsing to hamburger (mobile).
- [ ] Loading, empty, error states on every data surface.
- [ ] Deployed live on Vercel with Supabase connection.

## Non-goals (v1)
- No payment integrations.
- No mobile app.
- No email notifications or cron jobs.
- No multi-tenant org switching.

## Success criteria (one concrete end-to-end scenario)
An anonymous visitor opens the deployed URL, sees a populated dashboard with real activity entries and analytics, creates a new activity entry, and the feed + counts update instantly — all without a login wall. (Auth + per-user isolation arrives in a later sprint.)
