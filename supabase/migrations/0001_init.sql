create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  display_name text not null,
  role text default 'member',
  team text,
  avatar_url text,
  bio text,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
drop policy if exists "profiles_v1_read" on profiles;
create policy "profiles_v1_read" on profiles for select using (true);
drop policy if exists "profiles_v1_write" on profiles;
create policy "profiles_v1_write" on profiles for all using (true) with check (true);

create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  actor_name text not null,
  action text not null,
  summary text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table activities enable row level security;
drop policy if exists "activities_v1_read" on activities;
create policy "activities_v1_read" on activities for select using (true);
drop policy if exists "activities_v1_write" on activities;
create policy "activities_v1_write" on activities for all using (true) with check (true);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  actor_name text not null,
  action text not null,
  target_table text,
  target_id uuid,
  before_value jsonb,
  after_value jsonb,
  source text,
  created_at timestamptz not null default now()
);

alter table audit_logs enable row level security;
drop policy if exists "audit_logs_v1_read" on audit_logs;
create policy "audit_logs_v1_read" on audit_logs for select using (true);
drop policy if exists "audit_logs_v1_write" on audit_logs;
create policy "audit_logs_v1_write" on audit_logs for all using (true) with check (true);

insert into profiles (display_name, role, team, bio) values
  ('Sarah Chen', 'admin', 'Operations', 'Leads platform operations and client onboarding.'),
  ('Marcus Rivera', 'member', 'Engineering', 'Full-stack developer working on core dashboard.'),
  ('Priya Nair', 'member', 'Analytics', 'Data analyst focused on activity trends and reporting.'),
  ('David Kim', 'admin', 'Operations', 'Manages beta client relationships and feedback cycles.'),
  ('Elena Voss', 'member', 'Design', 'Product designer driving dashboard UX improvements.')
on conflict do nothing;

insert into activities (actor_name, action, summary, metadata) values
  ('Sarah Chen', 'create', 'Onboarded new beta client Acme Corp', '{"client": "Acme Corp", "type": "onboarding"}'),
  ('Marcus Rivera', 'update', 'Updated dashboard activity feed component', '{"component": "ActivityFeed", "pr": 42}'),
  ('Priya Nair', 'review', 'Reviewed weekly analytics summary for week 12', '{"week": 12}'),
  ('David Kim', 'update', 'Updated client feedback status to resolved for BetaHealth', '{"client": "BetaHealth", "status": "resolved"}'),
  ('Elena Voss', 'create', 'Created new profile card design for dashboard', '{"asset": "ProfileCard"}'),
  ('Sarah Chen', 'create', 'Logged quarterly team performance review', '{"quarter": "Q1"}')
on conflict do nothing;

insert into audit_logs (actor_name, action, target_table, source) values
  ('Sarah Chen', 'create', 'activities', 'web-ui'),
  ('Marcus Rivera', 'update', 'activities', 'web-ui'),
  ('Priya Nair', 'review', 'activities', 'web-ui')
on conflict do nothing;