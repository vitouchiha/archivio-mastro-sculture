# Phase Prompt Template

Template for `.planning/phases/XX-name/{phase}-{plan}-PLAN.md` — executable phase plans.

## File Template

```markdown
---
phase: XX-name
plan: NN
type: execute
wave: N                     # Execution wave (1, 2, 3...). Plans in same wave can run in parallel.
depends_on: []              # Plan IDs this plan requires (e.g., ["01-01"]).
files_modified: []          # Files this plan modifies.
autonomous: true            # false if plan has checkpoints requiring user interaction
---

<objective>
[What this plan accomplishes]

Purpose: [Why this matters for the project]
Output: [What artifacts will be created]
</objective>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md

[Relevant source files:]
@src/path/to/relevant.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: [Action-oriented name]</name>
  <files>path/to/file.ext, another/file.ext</files>
  <action>[Specific implementation - what to do, how to do it, what to avoid and WHY]</action>
  <verify>[Command or check to prove it worked]</verify>
  <done>[Measurable acceptance criteria]</done>
</task>

<task type="auto">
  <name>Task 2: [Action-oriented name]</name>
  <files>path/to/file.ext</files>
  <action>[Specific implementation]</action>
  <verify>[Command or check]</verify>
  <done>[Acceptance criteria]</done>
</task>

<!-- Checkpoint example (use sparingly) -->
<task type="checkpoint:human-verify" gate="blocking">
  <what-built>[What was built that needs verification]</what-built>
  <how-to-verify>
    1. Run: [command to start dev server/app]
    2. Visit: [URL to check]
    3. Test: [Specific interactions]
    4. Confirm: [Expected behaviors]
  </how-to-verify>
  <resume-signal>Type "approved" to continue, or describe issues to fix</resume-signal>
</task>

</tasks>

<verification>
Before declaring plan complete:
- [ ] [Specific test command]
- [ ] [Build/type check passes]
- [ ] [Behavior verification]
</verification>

<success_criteria>
- All tasks completed
- All verification checks pass
- No errors or warnings introduced
- [Plan-specific criteria]
</success_criteria>

<output>
After completion, create `.planning/phases/XX-name/{phase}-{plan}-SUMMARY.md`
</output>
```

---

## Frontmatter Fields

| Field | Required | Purpose |
|-------|----------|---------|
| `phase` | Yes | Phase identifier (e.g., `01-foundation`) |
| `plan` | Yes | Plan number within phase (e.g., `01`, `02`) |
| `type` | Yes | Always `execute` for standard plans |
| `wave` | Yes | Execution wave number (1, 2, 3...) |
| `depends_on` | Yes | Array of plan IDs this plan requires |
| `files_modified` | Yes | Files this plan touches |
| `autonomous` | Yes | `true` if no checkpoints, `false` if has checkpoints |

---

## Task Types

| Type | Use For | Behavior |
|------|---------|----------|
| `auto` | Everything that can be done independently | Execute, verify, continue |
| `checkpoint:human-verify` | Visual/functional verification | Stop, ask user, wait for approval |
| `checkpoint:decision` | Implementation choices | Stop, present options, wait for choice |
| `checkpoint:human-action` | Truly unavoidable manual steps (rare) | Stop, instruct user, wait for completion |

---

## Scope Guidelines

**Plan sizing:**
- 2–3 tasks per plan
- ~50% context usage maximum
- Complex phases: Multiple focused plans, not one large plan

**When to split:**
- Different subsystems (auth vs API vs UI)
- More than 3 tasks
- Risk of context overflow

**Prefer vertical slices:**
```
PREFER: Plan 01 = User (model + API + UI)
        Plan 02 = Product (model + API + UI)

AVOID:  Plan 01 = All models
        Plan 02 = All APIs
        Plan 03 = All UIs
```

---

## Verification Examples by Stack

**Node.js / TypeScript:**
```xml
<verify>npm run build && npm test</verify>
```

**Python:**
```xml
<verify>pytest tests/ && mypy src/</verify>
```

**.NET:**
```xml
<verify>dotnet build && dotnet test</verify>
```

**Go:**
```xml
<verify>go build ./... && go test ./...</verify>
```

**Rust:**
```xml
<verify>cargo build && cargo test</verify>
```

---

## Example Plan

```markdown
---
phase: 02-auth
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: [src/auth/login.ts, src/auth/login.test.ts]
autonomous: true
---

<objective>
Implement user login endpoint with JWT tokens.

Purpose: Enable authenticated access to protected routes.
Output: POST /auth/login endpoint returning JWT on success.
</objective>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@src/db/schema.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create login endpoint</name>
  <files>src/auth/login.ts</files>
  <action>
    Create POST /auth/login that:
    - Accepts { email, password } in body
    - Validates against users table
    - Returns JWT token on success
    - Returns 401 on invalid credentials
    
    Use jose library for JWT (not jsonwebtoken - ESM issues).
    Token should expire in 1 hour.
  </action>
  <verify>curl -X POST localhost:3000/auth/login -d '{"email":"test@example.com","password":"test"}' returns 200 or 401</verify>
  <done>Login endpoint validates credentials and returns JWT</done>
</task>

<task type="auto">
  <name>Task 2: Add login tests</name>
  <files>src/auth/login.test.ts</files>
  <action>
    Write tests for:
    - Valid credentials return 200 + token
    - Invalid password returns 401
    - Unknown email returns 401
    - Missing fields return 400
  </action>
  <verify>npm test -- --grep "login"</verify>
  <done>All login tests pass</done>
</task>

</tasks>

<verification>
- [ ] npm run build succeeds
- [ ] npm test passes
- [ ] Manual curl test works
</verification>

<success_criteria>
- Login endpoint works with valid credentials
- Invalid credentials properly rejected
- Tests cover main scenarios
</success_criteria>

<output>
After completion, create `.planning/phases/02-auth/02-01-SUMMARY.md`
</output>
```
