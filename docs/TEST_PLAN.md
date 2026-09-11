# Digital Pulse — Test Plan

## v1 success scenario (manual)
1. Open deployed Vercel URL in a fresh browser tab (no login).
2. Verify dashboard loads with seeded activity entries visible.
3. Verify analytics panel shows real counts (total, per-action, 7-day).
4. Click "Log activity" → fill actor, action, summary → submit.
5. Confirm new entry appears at top of feed.
6. Confirm analytics counts updated.
7. Navigate to Profile → edit display name + bio → save.
8. Confirm profile reflects changes after refresh.

## Empty state
1. Delete all activities (or filter to a user with none).
2. Verify empty state message: "No activities yet — log your first one."
3. Verify analytics shows zeros, not a crash.

## Error state
1. Temporarily break Supabase env var (or disconnect network).
2. Reload dashboard.
3. Verify error message renders: "Could not load activities. Please retry."
4. Verify no blank screen / unhandled exception.

## Loading state
1. Throttle network to slow 3G.
2. Reload dashboard.
3. Verify skeleton/spinner shows during fetch, not blank screen.

## Responsive
1. Open on mobile width (< 768px).
2. Verify sidebar collapses to hamburger.
3. Verify all forms are usable on narrow screen.

## RLS lock-down (Sprint 4)
1. Sign up as user A; create an activity.
2. Sign up as user B in separate session.
3. Verify user B cannot see user A's activities.
4. Verify user B can only write their own rows.
