# Digital Pulse — Intelligence Layer

## Messy inputs (later)
Free-text activity summaries typed by users vary in quality: some terse ("updated doc"), some verbose. Goal: auto-structure them.

## Auto-structure schema (later)
```json
{
  "action_type": "update|create|delete|review",
  "entity": "profile|activity|report",
  "sentiment": "neutral|positive|negative",
  "priority": "low|medium|high",
  "tags": ["deployment", "client-abc"]
}
```

## Events to track
- activity_created, activity_updated, activity_deleted
- profile_updated
- login, logout (after auth sprint)

## Scoring rules (later — start rule-based)
- Action weight: create=3, update=1, delete=2, review=2.
- Recency bonus: +1 if within 24h, +0.5 if within 7d.
- Priority: action weight + recency bonus ≥ 4 → high; 2-3 → medium; <2 → low.

## What gets ranked
Activity feed sorted by computed score (later). v1 sorts by `created_at desc`.

## v1 vs later
- **v1:** Plain chronological feed, no AI.
- **Later:** Auto-tag activities, score and rank feed, flag high-priority items, suggest draft summaries.
