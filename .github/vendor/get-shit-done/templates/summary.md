# Summary Template

Template for `.planning/phases/XX-name/{phase}-{plan}-SUMMARY.md` — plan completion documentation.

---

## File Template

```markdown
---
phase: XX-name
plan: YY
subsystem: [primary category: auth, api, ui, database, infra, testing, etc.]
tags: [searchable tech keywords]
duration: Xmin
completed: YYYY-MM-DD
---

# Phase [X] Plan [Y]: [Name] Summary

**[Substantive one-liner describing outcome — NOT "plan complete"]**

## Performance

- **Duration:** [time] (e.g., 23 min, 1h 15m)
- **Started:** [timestamp]
- **Completed:** [timestamp]
- **Tasks:** [count completed]
- **Files modified:** [count]

## Accomplishments

- [Most important outcome]
- [Second key accomplishment]
- [Third if applicable]

## Files Created/Modified

- `path/to/file.ts` — What it does
- `path/to/another.ts` — What it does

## Decisions Made

[Key decisions with brief rationale, or "None — followed plan as specified"]

## Deviations from Plan

[If no deviations: "None — plan executed exactly as written"]

[If deviations occurred:]
- **[Category]** Brief description
  - Found during: Task [N]
  - Issue: What was wrong
  - Fix: What was done

## Issues Encountered

[Problems and how they were resolved, or "None"]

## Next Phase Readiness

[What's ready for next phase]
[Any blockers or concerns carried forward]

---
*Phase: XX-name*
*Completed: [date]*
```

---

## One-Liner Rules

The one-liner MUST be substantive:

**Good:**
- "JWT auth with refresh rotation using jose library"
- "Prisma schema with User, Session, and Product models"
- "Dashboard with real-time metrics via Server-Sent Events"

**Bad:**
- "Plan complete"
- "Authentication implemented"
- "Foundation finished"
- "All tasks done"

The one-liner should tell someone **what actually shipped**.

---

## When to Create

- After completing each plan via `gsd-execute-phase`
- Documents what actually happened vs what was planned
- Becomes historical record for future context

---

## Example Summary

```markdown
---
phase: 02-auth
plan: 01
subsystem: auth
tags: [jwt, login, jose]
duration: 28min
completed: 2025-01-26
---

# Phase 2 Plan 1: Login Endpoint Summary

**JWT login endpoint with password validation and comprehensive test coverage**

## Performance

- **Duration:** 28 min
- **Started:** 2025-01-26T14:22:10Z
- **Completed:** 2025-01-26T14:50:33Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Login endpoint validates credentials against database
- Returns signed JWT token on success
- Comprehensive test coverage for all scenarios

## Files Created/Modified

- `src/auth/login.ts` — POST /auth/login endpoint
- `src/auth/login.test.ts` — Login endpoint tests

## Decisions Made

- Used jose instead of jsonwebtoken (ESM-native, Edge-compatible)
- Token expiry set to 1 hour (will add refresh tokens in Phase 2 Plan 2)

## Deviations from Plan

None — plan executed exactly as written

## Issues Encountered

None

## Next Phase Readiness

- Login endpoint complete, ready for protected route middleware
- Refresh token flow planned for 02-02

---
*Phase: 02-auth*
*Completed: 2025-01-26*
```
