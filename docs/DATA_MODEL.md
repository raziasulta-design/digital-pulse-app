# Digital Pulse — Data Model

## profiles
| Field | Type |
|-------|------|
| id | uuid PK |
| user_id | uuid (nullable, for owner-scoping later) |
| display_name | text not null |
| role | text default 'member' |
| team | text |
| avatar_url | text |
| bio | text |
| created_at | timestamptz default now() |

RLS: v1 permissive read/write (demo-first). Later: owner-scoped `auth.uid() = user_id`.

## activities
| Field | Type |
|-------|------|
| id | uuid PK |
| user_id | uuid (nullable) |
| actor_name | text not null |
| action | text not null |
| summary | text not null |
| metadata | jsonb default '{}' |
| created_at | timestamptz default now() |

RLS: v1 permissive. Later: owner-scoped.

## audit_logs
| Field | Type |
|-------|------|
| id | uuid PK |
| user_id | uuid (nullable) |
| actor_name | text not null |
| action | text not null |
| target_table | text |
| target_id | uuid |
| before_value | jsonb |
| after_value | jsonb |
| source | text |
| created_at | timestamptz default now() |

RLS: v1 permissive. Later: admin-only read.

## AI-generated fields (later sprint)
If auto-tagging is added to activities: `ai_tags text`, `ai_tag_source text`, `ai_tag_confidence numeric`, `ai_tag_review_status text default 'unreviewed'`. Not in v1.

## Relationships
- activities → profiles via user_id (no FK in v1; join at query time).
- audit_logs → any table via target_table + target_id (polymorphic, soft reference).
