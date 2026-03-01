---
description: "GSD: Plan a phase with research and verification (enhanced)"
argument-hint: "Phase number (e.g., '2') [--skip-research] [--skip-verify]"
agent: gsd-planner
---

Create detailed execution plans for a roadmap phase with integrated research and verification.

## Process Overview

**Default flow:** Research (if needed) → Plan → Verify → Done
**With flags:** Can skip research or verification steps

## Step 1: Parse Arguments and Load Context

```bash
cat .planning/ROADMAP.md
cat .planning/STATE.md
cat .planning/config.json 2>/dev/null || echo "{}"
```

Parse the phase number from arguments. Extract phase details from ROADMAP.md.

## Step 2: Check for Existing Context

Look for existing artifacts:

```bash
# Check for discuss-phase output
ls .planning/phases/*/[phase]-CONTEXT.md 2>/dev/null

# Check for existing research
ls .planning/phases/*/[phase]-RESEARCH.md 2>/dev/null
ls .planning/research/*.md 2>/dev/null

# Check for codebase map
ls .planning/codebase/SUMMARY.md 2>/dev/null
```

Load any existing context:
- **CONTEXT.md** — implementation decisions from `/gsd-discuss-phase`
- **RESEARCH.md** — domain knowledge from `/gsd-research-phase`
- **Codebase map** — existing patterns from `/gsd-map-codebase`

## Step 3: Research (if needed)

**Skip if:** `--skip-research` flag OR research already exists

If research is needed, spawn a research subagent:

```
Use a subagent to research how to implement Phase [X]: [Name].

Focus on:
- Best practices for [domain]
- Integration with existing codebase patterns (see .planning/codebase/)
- Potential pitfalls

Write findings to .planning/phases/[NN-name]/[NN]-RESEARCH.md
```

## Step 4: Create Phase Directory

```bash
# Get phase name from ROADMAP.md
PHASE_NAME=$(grep "Phase [N]:" .planning/ROADMAP.md | head -1 | sed 's/.*Phase [0-9]*: //' | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
mkdir -p ".planning/phases/${PADDED_PHASE}-${PHASE_NAME}"
```

## Step 5: Analyze and Plan

Based on phase requirements, break into 2-3 task plans per execution unit.

**Key decisions:**
- How many plans are needed? (2-3 tasks each)
- What dependencies exist between plans?
- Which plans can run in parallel (same wave)?

For each plan, create `.planning/phases/[NN-name]/[NN-PP-PLAN.md]`:

Use the format from `.github/vendor/get-shit-done/templates/phase-prompt.md`

**Frontmatter:**
```yaml
---
phase: NN-name
plan: PP
type: execute
wave: N              # Plans in same wave can run in parallel
depends_on: []       # Plan IDs this depends on
files_modified: []   # Files this plan will touch
autonomous: true     # false if has checkpoints
---
```

**Incorporate context:**
- Reference CONTEXT.md decisions (don't re-ask decided questions)
- Apply research findings to action descriptions
- Follow existing codebase conventions

## Step 6: Verify Plans (if not skipped)

**Skip if:** `--skip-verify` flag

After creating plans, verify coverage:

```
Use a subagent to verify the plans for Phase [X]:

Check:
1. All phase success criteria from ROADMAP.md are covered
2. All relevant requirements are addressed
3. Plans are properly sequenced (dependencies correct)
4. Verification commands are executable
5. No gaps or overlaps between plans

Report: PASS with notes, or FAIL with issues to fix
```

If verification fails, iterate:
1. Review issues
2. Update plans
3. Re-verify

Max 3 iterations, then present for human review.

## Step 7: Present Results

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► PHASE [X] PLANNED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Phase [X]: [Name]** — [N] plan(s) in [M] wave(s)

| Wave | Plans | What it builds |
|------|-------|----------------|
| 1    | 01, 02 | [objectives] |
| 2    | 03     | [objective]  |

Research: [Completed | Used existing | Skipped]
Verification: [Passed | Passed with notes | Skipped]

───────────────────────────────────────────────────────────────

## ▶ Next Up

**Execute Phase [X]**

Run gsd-execute-phase [X]

───────────────────────────────────────────────────────────────
```

## Output

Creates in `.planning/phases/[NN-name]/`:
- `[NN]-RESEARCH.md` — domain research (if conducted)
- `[NN]-01-PLAN.md` — first execution plan
- `[NN]-02-PLAN.md` — second execution plan (if needed)
- etc.

## Wave Planning

**Wave 1:** Independent plans that can start immediately
**Wave 2:** Plans that depend on Wave 1 completion
**Wave N:** Plans that depend on earlier waves

Within a wave, plans could theoretically run in parallel (if using background agents).

## Tips

- Keep plans small (2-3 tasks, ~50% context usage max)
- Prefer vertical slices over horizontal layers
- Include specific verification commands for your stack
- Reference existing code patterns when modifying existing files
