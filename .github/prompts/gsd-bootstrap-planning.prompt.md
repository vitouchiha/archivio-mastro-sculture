---
description: "GSD: Bootstrap planning files (.planning/*)"
argument-hint: "Optional: tell me the product vision, constraints, and near-term goals."
agent: agent
---

Create (or update) the repository planning artifacts under `.planning/`.

## What to do

1. If `.planning/` does not exist, create it.
2. If the files below do not exist, create them with lightweight templates.
3. If they already exist, do not rewrite them wholesale—only refine headings and fill obvious missing essentials.

## Files to ensure exist

- `.planning/PROJECT.md` — Product vision, constraints, non-goals
- `.planning/REQUIREMENTS.md` — v1/v2/out-of-scope requirements (checkable)
- `.planning/ROADMAP.md` — Phased slices with status tracking
- `.planning/STATE.md` — Current position, decisions, blockers, next action

Also ensure the phase workspace exists:
- `.planning/phases/` (for `*-PLAN.md` and `*-SUMMARY.md` files)

## Style

- Keep content concise and skimmable.
- Prefer checklists and short bullets.
- Don't invent product decisions—ask questions where needed.

## Questions

Before writing substantial content, ask me the minimum set of questions needed to make these files useful (aim for 5–10). Example questions:

1. What is the core product/feature you're building?
2. Who is the primary user?
3. What technology stack are you using?
4. What are 3–5 must-have features for v1?
5. What's explicitly out of scope?
6. Any hard constraints (timeline, budget, existing systems)?
7. How will you verify the work? (test commands, CI, manual checks)

## Output

After creating/updating files, summarize:
- What was created
- What needs my input next
- The recommended next prompt to run

Point to the vendor templates if helpful:
- `.github/vendor/get-shit-done/templates/phase-prompt.md`
- `.github/vendor/get-shit-done/templates/summary.md`
