---
description: "GSD: Conversational UAT for a plan or slice"
argument-hint: "Which plan/slice should we verify? (optional plan path)"
agent: ask
---

Run a conversational verification session for the most recently executed plan (or a plan I specify).

## Instructions

1. If no plan specified, find the most recent `*-SUMMARY.md` in `.planning/phases/`
2. Read the SUMMARY and corresponding PLAN to understand what was built
3. Determine what "should happen" based on the plan + the changed files

## Verification flow

Test one thing at a time. For each test:

1. Tell me what to test and how
2. Ask: "Does it behave like this?"
3. Wait for my response:
   - **yes/ok/pass** → record as PASS, continue to next test
   - **describe an issue** → record as FAIL with details

## Record results

Create or update a UAT file: `.planning/uat/UAT-YYYYMMDD.md`

```markdown
# UAT Session - [Date]

**Plan(s) tested:** [plan IDs]

## Test Results

| # | Test | Result | Notes |
|---|------|--------|-------|
| 1 | [description] | PASS/FAIL | [details] |
| 2 | [description] | PASS/FAIL | [details] |

## Issues Found

### Issue 1: [Title]
- **Severity:** low/medium/high
- **Description:** [what's wrong]
- **Repro steps:** [how to reproduce]

## Summary

- **Passed:** X
- **Failed:** Y
- **Skipped:** Z
```

## Output

At the end, summarize:
- What passed
- What failed
- Suggested fixes (or propose a new plan to address issues)
