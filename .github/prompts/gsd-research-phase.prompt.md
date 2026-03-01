---
description: "GSD: Research domain/implementation before planning"
argument-hint: "Phase number or specific topic (e.g., '3' or 'OAuth implementation')"
agent: gsd-researcher
---

Research how to implement a phase or topic before creating plans.

## When to Use

- **Complex/unfamiliar domains** — 3D, audio, ML, specialized protocols
- **Architecture decisions** — need to understand patterns before committing
- **Integration work** — connecting to new APIs or services
- **Before planning** — when you need to understand the landscape first

## Process

### Step 1: Load Context

```bash
cat .planning/PROJECT.md
cat .planning/ROADMAP.md
cat .planning/STATE.md
```

If a phase number is provided, extract the phase details from ROADMAP.md.
If a topic is provided, focus research on that topic.

### Step 2: Identify Research Questions

Based on the phase/topic, identify what needs to be researched:

```
Researching: [Phase X: Name] or [Topic]

Key questions to investigate:
1. [Question about technology/approach]
2. [Question about patterns/best practices]
3. [Question about potential pitfalls]
4. [Question about integration points]

Shall I proceed, or add/modify questions?
```

### Step 3: Conduct Research

For each question, use available tools:

- `#fetch` — retrieve documentation from URLs
- `#githubRepo` — find implementation examples
- `#codebase` — understand existing project patterns
- `#search` — general web search for approaches

Use subagents for parallel research when investigating multiple areas:

```
Use a subagent to research [specific question]. Return:
- Key findings with sources
- Recommended approach
- Pitfalls to avoid
```

### Step 4: Create Research Document

Write `.planning/research/[TOPIC]-RESEARCH.md` or `.planning/phases/[NN-name]/[NN]-RESEARCH.md`:

```markdown
# [Topic/Phase] Research

**Researched:** [date]
**Status:** Complete
**Confidence:** high | medium | low

## Overview

[1-2 paragraph summary of findings]

## Key Findings

### [Finding 1: Topic]

[Details with examples and sources]

**Source:** [URL or reference]

### [Finding 2: Topic]

[Details with examples and sources]

**Source:** [URL or reference]

## Recommended Approach

Based on research, the recommended approach is:

1. [Step/decision with rationale]
2. [Step/decision with rationale]
3. [Step/decision with rationale]

**Why this approach:**
- [Reason]
- [Reason]

## Alternatives Considered

| Approach | Pros | Cons | Why Not |
|----------|------|------|---------|
| [Alt 1] | [pros] | [cons] | [reason] |
| [Alt 2] | [pros] | [cons] | [reason] |

## Pitfalls to Avoid

- **[Pitfall 1]:** [What to avoid and why]
- **[Pitfall 2]:** [What to avoid and why]

## Integration with Existing Code

[How this connects to existing patterns in the codebase]

## Open Questions

- [Anything that couldn't be resolved through research]

## Sources

- [URL 1] — [description]
- [URL 2] — [description]
```

### Step 5: Next Steps

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► RESEARCH COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Topic:** [topic/phase]
**Confidence:** [high/medium/low]
**Key Recommendation:** [1-liner]

Created: .planning/[path]/[NAME]-RESEARCH.md

▶ Next: Run gsd-plan-phase to create execution plans

───────────────────────────────────────────────────────────────
```

## Output

Creates research document with:
- Key findings with sources
- Recommended approach with rationale
- Alternatives considered
- Pitfalls to avoid
- Integration notes

## Special Research Prompts

### For Project Research (like original GSD)

When researching before a new project, investigate:

**Stack:** "What's the standard stack for [domain]?"
**Features:** "What are typical features of [product type]?"
**Architecture:** "How is [domain] typically structured?"
**Pitfalls:** "What commonly goes wrong in [domain] projects?"

### For Library/API Research

Focus on:
- Official documentation
- Version compatibility
- Common usage patterns
- Known issues/limitations

### For Pattern Research

Focus on:
- Established patterns (not novel approaches)
- Real-world examples
- Trade-offs between approaches
