---
description: "GSD: Execute all plans in a phase with wave-based execution"
argument-hint: "Phase number (e.g., '2')"
agent: agent
---

Execute all plans in a phase using wave-based execution.

## Process Overview

1. Discover all plans for the phase
2. Group plans by wave (from frontmatter)
3. Execute waves sequentially
4. Within each wave, execute plans (can use subagents for isolation)
5. Verify phase completion
6. Update state and create summaries

## Step 1: Load Phase Context

```bash
# Get phase details
cat .planning/ROADMAP.md
cat .planning/STATE.md

# Find the phase directory
ls .planning/phases/ | grep "^0*[PHASE]-"
```

## Step 2: Discover Plans

```bash
# List all plans for this phase
ls .planning/phases/[NN-name]/*-PLAN.md
```

Parse frontmatter from each plan to extract:
- `wave` — execution order
- `depends_on` — dependencies
- `autonomous` — whether checkpoints exist

Group plans by wave number.

## Step 3: Execute Wave by Wave

For each wave (starting with wave 1):

### Present Wave
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 WAVE [N] — [count] plan(s)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Plans in this wave:
- [NN-01]: [objective]
- [NN-02]: [objective]
```

### Execute Plans in Wave

**Option A: Sequential (default)**
Execute each plan in order, providing fresh context for complex plans:

```
For plan [NN-PP]:
Use a subagent to execute this plan. The subagent should:
1. Read the full plan file
2. Execute each task sequentially
3. Run verification after each task
4. Stop on checkpoint tasks and report back
5. Create SUMMARY.md when complete
```

**Option B: Parallel with Background Agents**
For truly independent plans, suggest using background agents:

```
These plans are independent. You can:
1. Execute sequentially here (default)
2. Run in parallel using @cli for isolated execution

Choose approach:
```

### Per-Task Execution

For each task in a plan:

**`type="auto"` tasks:**
1. Implement the changes described in `<action>`
2. Run the `<verify>` command(s)
3. If verification fails: stop and report with proposed fixes
4. If verification passes: confirm `<done>` criteria met
5. Commit changes:
   ```bash
   git add [files]
   git commit -m "[type]([phase]-[plan]): [task-name]"
   ```

**`type="checkpoint:*"` tasks:**
1. STOP immediately
2. Display checkpoint message with what's needed
3. Wait for user response before continuing

### After Each Plan

Create summary file `.planning/phases/[NN-name]/[NN-PP-SUMMARY.md]`:

```markdown
# Phase [X] Plan [Y]: [Name] Summary

**Completed:** [timestamp]
**Duration:** [time]

## Accomplishments
- [What was built]

## Files Created/Modified
- `path/to/file` - What it does

## Decisions Made
[Key decisions, or "None - followed plan as specified"]

## Issues Encountered
[Problems and resolutions, or "None"]

## Verification Results
- [x] [Verification check 1]
- [x] [Verification check 2]
```

## Step 4: Wave Transition

After completing a wave:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 WAVE [N] COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Completed: [list plans completed]
Commits: [count]

Next: Wave [N+1] with [count] plans
```

Continue to next wave.

## Step 5: Phase Verification

After all waves complete, verify phase goals:

```
Use a subagent with the gsd-verifier agent to verify Phase [X]:

Check all success criteria from ROADMAP.md.
Report PASS/FAIL with details.
```

Create `.planning/phases/[NN-name]/[NN]-VERIFICATION.md` with results.

## Step 6: Update State

Update `.planning/STATE.md`:
```markdown
## Current Position
- Phase: [X] - COMPLETE
- Plans executed: [list]
- Next: Phase [X+1]

## Recent Decisions
[Any decisions made during execution]
```

Update `.planning/ROADMAP.md`:
- Mark phase as complete
- Update progress indicators

## Step 7: Present Completion

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► PHASE [X] COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Phase [X]: [Name]**

| Metric | Value |
|--------|-------|
| Plans | [N] executed |
| Waves | [M] completed |
| Commits | [K] created |
| Verification | PASS / PARTIAL / FAIL |

───────────────────────────────────────────────────────────────

## ▶ Next Up

**Phase [X+1]: [Name]** — [goal]

Options:
- Run gsd-discuss-phase [X+1] — gather context first
- Run gsd-plan-phase [X+1] — plan directly
- Run gsd-verify-work [X] — manual UAT for this phase

───────────────────────────────────────────────────────────────
```

## Git Commit Strategy

**One commit per task:**
```bash
# Type based on what changed
feat([phase]-[plan]): [task description]
fix([phase]-[plan]): [fix description]
test([phase]-[plan]): [test description]
docs([phase]-[plan]): [docs description]
refactor([phase]-[plan]): [refactor description]
```

**Commit immediately after verification passes** — don't batch.

## Error Handling

**If a task fails verification:**
1. Report the failure with error details
2. Propose fixes
3. Ask: "Retry with fix, or stop for manual intervention?"

**If a plan fails completely:**
1. Mark plan as failed
2. Save partial progress
3. Report what succeeded and what failed
4. Ask whether to continue with next plan or stop

## Background Agent Integration

For long-running or parallelizable phases, suggest:

```
This phase has [N] independent plans in wave 1.

You can use @cli to run them as background agents:
- Each gets isolated worktree
- All run in parallel
- Merge results when complete

Use background agents? (yes/no)
```

If yes, hand off to background agent sessions.
