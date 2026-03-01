---
description: "GSD-style workflow for VS Code + GitHub Copilot (enhanced with agents and subagents)"
applyTo: "**"
---

# GSD Workflow (VS Code + GitHub Copilot)

This repo uses an enhanced GSD (Get Shit Done) workflow for planning and execution.
It provides **context hygiene, atomic plans, explicit verification, and disciplined checkpoints**.

## Quick Start

```
1. gsd-map-codebase          — Analyze existing code (brownfield projects)
2. gsd-bootstrap-planning    — Initialize .planning/ files
3. gsd-discuss-phase [N]     — Capture implementation decisions
4. gsd-plan-phase [N]        — Create detailed plans
5. gsd-execute-phase [N]     — Execute plans
6. gsd-verify-work [N]       — Manual UAT
7. Repeat for each phase
```

## Planning Artifacts (Repository Memory)

Maintain these files under `.planning/`:

| File | Purpose |
|------|---------|
| `PROJECT.md` | Product/feature vision, constraints, non-goals |
| `REQUIREMENTS.md` | v1/v2/out-of-scope requirements (checkable) |
| `ROADMAP.md` | Phases/slices with links to plan IDs |
| `STATE.md` | Current position, decisions, blockers, next action |
| `config.json` | Workflow preferences (optional) |

### Additional Artifacts

| Directory | Purpose |
|-----------|---------|
| `codebase/` | Codebase analysis (from gsd-map-codebase) |
| `research/` | Domain research documents |
| `phases/` | Phase directories with plans, context, summaries |

## Custom Agents

GSD includes specialized agents for different tasks. Install to `.github/agents/`:

| Agent | Purpose |
|-------|---------|
| `gsd-codebase-mapper` | Analyze existing codebase structure |
| `gsd-researcher` | Research domain knowledge and best practices |
| `gsd-planner` | Create detailed execution plans |
| `gsd-verifier` | Verify completed work meets goals |

### Using Agents

Switch to an agent in the Chat view agent picker, or reference via prompts.

## Subagents for Fresh Context

GSD prompts use subagents for operations that need fresh context:

```
Use a subagent to [task description].
Return: [what to report back]
```

Enable `runSubagent` in your tools. Subagents:
- Get their own context window (no pollution)
- Run to completion autonomously
- Return only final results to main session

## Workflow Prompts

| Prompt | When to use |
|--------|-------------|
| `gsd-map-codebase.prompt.md` | Analyze existing codebase (brownfield) |
| `gsd-bootstrap-planning.prompt.md` | Initialize `.planning/*` for a new project |
| `gsd-discuss-phase.prompt.md` | Capture implementation decisions before planning |
| `gsd-research-phase.prompt.md` | Research complex domains or approaches |
| `gsd-plan-phase.prompt.md` | Create detailed execution plans for a phase |
| `gsd-execute-phase.prompt.md` | Execute all plans in a phase |
| `gsd-verify-work.prompt.md` | Conversational UAT after execution |
| `gsd-progress.prompt.md` | Check current status and next action |

## Execution Rules

- **Prefer automation:** if it can be done via CLI/tooling, do it
- **Plans must be small:** 2–3 tasks max per plan file
- **Fresh context per major task:** use subagents for complex operations
- **One commit per task:** atomic, reversible commits

### Task Requirements

Every task must include:
- **Action:** what to do and what to avoid (and why)
- **Verify:** exact command(s) / checks to prove it worked
- **Done:** measurable acceptance criteria

### Checkpoint Types

Stop for checkpoints only when unavoidable:
- `checkpoint:human-verify` — UI/UX verification
- `checkpoint:decision` — architecture/product choice
- `checkpoint:human-action` — truly unavoidable manual steps

## Wave-Based Execution

Plans are organized into waves:
- **Wave 1:** Independent plans that can start immediately
- **Wave 2:** Plans that depend on Wave 1
- **Wave N:** Plans that depend on earlier waves

Within a wave, plans can potentially run in parallel using background agents.

## Background Agents

For long-running or parallel work, use Copilot CLI background agents:

```
@cli [task description]
```

Background agents:
- Run in isolated Git worktrees
- Can work while you continue other tasks
- Merge results when complete

## STATE.md Discipline

Record in `.planning/STATE.md` whenever you:
- Make a decision
- Discover a constraint
- Hit a blocker
- Finish a slice

Always include the **next action**.

## Plan Format

- Location: `.planning/phases/<NN-name>/<NN-PP-PLAN.md>`
- Structure: YAML frontmatter + XML tasks
- Reference: `.github/vendor/get-shit-done/templates/phase-prompt.md`

## Git Commit Conventions

```bash
# One commit per task
feat(NN-PP): [task description]
fix(NN-PP): [fix description]
test(NN-PP): [test description]
docs(NN-PP): [docs description]
refactor(NN-PP): [refactor description]
```

Commit immediately after verification passes.

## Verification Commands by Stack

| Stack | Example verify commands |
|-------|------------------------|
| Node/npm | `npm run build`, `npm test` |
| Python | `pytest`, `python -m mypy .` |
| .NET | `dotnet build`, `dotnet test` |
| Go | `go build ./...`, `go test ./...` |
| Rust | `cargo build`, `cargo test` |

Plans carry specific verify commands — the workflow is stack-agnostic.

## File Structure

```
.planning/
├── PROJECT.md
├── REQUIREMENTS.md
├── ROADMAP.md
├── STATE.md
├── config.json
├── codebase/           # From gsd-map-codebase
│   ├── STACK.md
│   ├── ARCHITECTURE.md
│   ├── CONVENTIONS.md
│   ├── CONCERNS.md
│   └── SUMMARY.md
├── research/           # Domain research
│   └── [TOPIC]-RESEARCH.md
└── phases/
    ├── 01-foundation/
    │   ├── 01-CONTEXT.md
    │   ├── 01-RESEARCH.md
    │   ├── 01-01-PLAN.md
    │   ├── 01-01-SUMMARY.md
    │   └── 01-VERIFICATION.md
    └── 02-core-features/
        ├── 02-CONTEXT.md
        ├── 02-01-PLAN.md
        └── 02-01-SUMMARY.md
```
