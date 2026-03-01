---
description: "GSD: Progress + next action (reads .planning/STATE.md)"
argument-hint: "What changed since last update? Any blockers?"
agent: ask
---

Read `.planning/STATE.md` and `.planning/ROADMAP.md` and give me a quick status update.

## Report

Tell me (concisely):

1. **Where we are now** (1-2 sentences)
   - Current phase and wave
   - What was last completed
   - Any context files that exist (CONTEXT.md, RESEARCH.md)

2. **What's blocked** (if anything)
   - Pending decisions or questions
   - External dependencies
   - Technical blockers or concerns

3. **The next best action**
   - Which prompt or agent to run next
   - Specific phase/wave to work on

## If `.planning/` files are missing

### For New Projects
```
.planning/ not initialized.

Run: gsd-bootstrap-planning.prompt.md

This will create:
  - PROJECT.md
  - REQUIREMENTS.md  
  - ROADMAP.md
  - STATE.md
```

### For Existing Codebases (Brownfield)
```
.planning/ not initialized but codebase exists.

Run: gsd-map-codebase.prompt.md first

This will analyze the codebase and create:
  - .planning/codebase/STACK.md
  - .planning/codebase/ARCHITECTURE.md
  - .planning/codebase/CONVENTIONS.md
  - .planning/codebase/CONCERNS.md

Then run: gsd-bootstrap-planning.prompt.md
```

## Workflow Navigation

Based on phase state, suggest the appropriate next step:

| State | Next Action |
|-------|-------------|
| Phase not started | `gsd-discuss-phase.prompt.md` to capture context |
| Context captured | `gsd-research-phase.prompt.md` if complex domain |
| Ready to plan | `gsd-plan-phase.prompt.md` to create detailed plans |
| Plans ready | `gsd-execute-phase.prompt.md` to implement |
| Implementation done | `gsd-verify-work.prompt.md` to validate |
| Phase complete | Update STATE.md, move to next phase |

## Format

Keep it short — this is a quick status check, not a full report.

```
📍 Status: Phase 2 / Wave 1 in progress
📋 Last: User auth endpoints implemented  
📁 Context: CONTEXT.md ✓ | RESEARCH.md ✗
⚠️ Blocked: None
⏭️ Next: Run gsd-execute-phase for "Phase 2 Wave 2: Protected routes"
```

## Agent Hints

If the user seems stuck, suggest using specialized agents:
- **@gsd-codebase-mapper** — Re-analyze codebase after major changes
- **@gsd-researcher** — Deep dive into unfamiliar technology
- **@gsd-planner** — Rework a problematic plan
- **@gsd-verifier** — Validate completed work before proceeding
