---
description: "GSD: Map existing codebase for brownfield projects"
argument-hint: "Optional: focus area (e.g., 'api', 'auth', 'frontend')"
agent: gsd-codebase-mapper
---

Analyze the existing codebase and create structured documentation in `.planning/codebase/`.

## When to Use

- **Before starting work** on an existing codebase you're unfamiliar with
- **Before `/gsd-bootstrap-planning`** to inform project planning with codebase context
- **After major changes** to refresh understanding of current state
- **When onboarding** to understand how things work

## Process

### Step 1: Check Existing Map

```bash
ls -la .planning/codebase/ 2>/dev/null
```

If `.planning/codebase/` exists with recent files, ask:
- "Codebase map exists from [date]. Refresh it, or work with existing?"

### Step 2: Create Directory Structure

```bash
mkdir -p .planning/codebase
```

### Step 3: Analyze Codebase

Use subagents to analyze different aspects of the codebase. For each area, spawn a focused analysis:

**Stack Analysis:**
```
Use a subagent to analyze the technology stack:
- Languages and versions
- Frameworks and libraries
- Package managers and dependencies
- Build tools and scripts

Write findings to .planning/codebase/STACK.md
```

**Architecture Analysis:**
```
Use a subagent to analyze the architecture:
- Directory structure and organization
- Design patterns in use
- Data flow between components
- Entry points and boundaries

Write findings to .planning/codebase/ARCHITECTURE.md
```

**Conventions Analysis:**
```
Use a subagent to analyze coding conventions:
- Naming patterns (files, functions, variables)
- Code style and formatting
- Error handling patterns
- Documentation style

Write findings to .planning/codebase/CONVENTIONS.md
```

**Concerns Analysis:**
```
Use a subagent to identify concerns:
- Technical debt
- Known issues or TODOs
- Areas needing refactoring
- Missing tests or documentation

Write findings to .planning/codebase/CONCERNS.md
```

### Step 4: Create Summary

After all analyses complete, create `.planning/codebase/SUMMARY.md`:

```markdown
# Codebase Summary

**Mapped:** [date]
**Focus:** [all | specific area]

## Quick Reference

| Aspect | Key Points |
|--------|------------|
| Stack | [primary language, framework] |
| Architecture | [pattern, e.g., "MVC", "microservices"] |
| Entry Points | [main files/endpoints] |
| Test Coverage | [exists/missing, approach] |

## Key Files

- `[path]` - [purpose]
- `[path]` - [purpose]

## Development Notes

[Critical things to know before making changes]

## Concerns

[Top 3 issues to be aware of]
```

### Step 5: Next Steps

Report what was created and suggest:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► CODEBASE MAPPED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Created:
- .planning/codebase/STACK.md
- .planning/codebase/ARCHITECTURE.md
- .planning/codebase/CONVENTIONS.md
- .planning/codebase/CONCERNS.md
- .planning/codebase/SUMMARY.md

▶ Next: Run gsd-bootstrap-planning to initialize project planning
```

## Output

Creates `.planning/codebase/` with:
- `STACK.md` - Languages, frameworks, dependencies
- `ARCHITECTURE.md` - Patterns, layers, data flow
- `CONVENTIONS.md` - Coding standards, naming patterns
- `CONCERNS.md` - Technical debt, issues
- `SUMMARY.md` - Quick reference overview

## Notes

- This prompt uses the `gsd-codebase-mapper` agent for specialized analysis
- Subagents get fresh context for each analysis area
- If analyzing a specific area (e.g., "api"), focus documents on that subsystem
- The codebase map informs subsequent planning prompts
