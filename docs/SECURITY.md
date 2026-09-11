# Digital Pulse — Security

## Secret handling
- Supabase URL + anon key: public-safe, exposed via `NEXT_PUBLIC_`.
- Supabase service-role key: server-only, never in frontend. Stored as Vercel env var.
- No other secrets in v1.

## Permission model
- **v1 (demo-first):** RLS permissive — anonymous read/write works. Seed data renders without login.
- **Lock-down sprint:** Replace permissive policies with owner-scoped RLS: `auth.uid() = user_id`. Admin role gets broader select on audit_logs.
- Agent inherits the logged-in user's permissions — never escalates.

## Approved-tools rule
Only named data-access functions (`lib/data/`) touch the database. No raw SQL in UI components. No `run_any`/`send_any` patterns.

## Audit principle
Every write to activities or profiles appends a row to audit_logs with before/after values and source. This survives refresh and is identical across devices (server-derived truth).

## Honest note
Per-user RLS and auth are deferred to the lock-down sprint. Until then, the app is open for demo. Do not put real sensitive data in before that sprint. If you need to handle sensitive data sooner, stop and get a human to review the security setup.
