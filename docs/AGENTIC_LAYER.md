# Digital Pulse — Agentic Layer

## Draftable actions (low risk — auto, later)
- Auto-tag a new activity with action_type + entity + priority.
- Draft a summary for a bare activity entry.
- Score and rank the activity feed.

## Executable-after-approval (medium risk — later)
- Update an activity's status/metadata based on AI suggestion.
- Merge duplicate activity entries.

## Human-only (high/critical risk)
- Delete an activity or profile (always human).
- Modify audit_logs (never automated).
- Change a user's role (admin human action).

## Named tools
- `log_activity` — write to activities table.
- `update_profile` — write to profiles table.
- `tag_activity` — set ai_tags on activities (later).
- `score_activities` — compute scores (later).

No raw `run_any`/`send_any` — only these named tools.

## Audit-log fields
actor_name, action, target_table, target_id, before_value, after_value, source, created_at.

## v1 vs later
- **v1:** Manual CRUD only; no agentic actions.
- **Later:** Auto-tagging + scoring (low risk, auto); status updates (medium, approval); deletions remain human-only.
