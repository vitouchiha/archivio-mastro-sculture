---
description: "GSD: Quick task (skip full workflow for small changes)"
argument-hint: "Describe the quick task or fix"
agent: ask
---

# Quick Task Mode

This is for **small, self-contained tasks** that don't warrant the full GSD workflow.

## Examples of appropriate quick tasks:
- Fix a specific bug
- Add a small utility function
- Update configuration
- Refactor a single file
- Add a missing test

## NOT appropriate for quick mode:
- New features spanning multiple files
- Architectural changes
- Anything requiring research or discussion

---

## Your Task:

{{input}}

## Instructions:

1. **Analyze** — Understand what's being asked
2. **Plan briefly** — Mental model, no need for plan files
3. **Implement** — Make the changes
4. **Verify** — Run tests/checks if applicable
5. **Report** — Brief summary of what was done

## Constraints:

- **Keep changes minimal** — Don't refactor unrelated code
- **Follow existing patterns** — Match the codebase conventions
- **Test if possible** — Run existing tests to verify
- **Don't create planning files** — This bypasses the full workflow

## Output Format:

```
✅ Quick Task Complete

Changed:
  - path/to/file.ts: [description]
  - path/to/other.ts: [description]

Verified:
  - [x] Tests pass / [x] Linter clean / [ ] N/A

Notes:
  [Any important observations]
```

## If the task is too big:

Stop and suggest using the full workflow instead:

```
⚠️ This task is too complex for quick mode.

Recommended: Run gsd-discuss-phase.prompt.md to capture context,
then gsd-plan-phase.prompt.md to create a proper plan.
```
