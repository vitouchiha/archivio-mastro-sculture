---
description: "GSD: Discuss phase details before planning (capture implementation decisions)"
argument-hint: "Phase number or name (e.g., '2' or 'authentication')"
agent: ask
---

Gather context and capture implementation decisions for a phase before planning begins.

## Purpose

Your roadmap has a sentence or two per phase. That's not enough context to build something the way *you* imagine it. This step captures your preferences before anything gets researched or planned.

The output — `CONTEXT.md` — feeds directly into:
1. **Researcher** — knows what patterns to investigate
2. **Planner** — knows what decisions are locked

## Process

### Step 1: Load Phase Context

Read the planning files:

```bash
cat .planning/ROADMAP.md
cat .planning/STATE.md
```

If no phase specified, ask which phase to discuss.

### Step 2: Analyze Phase for Gray Areas

Based on what's being built, identify decision points. Different feature types have different gray areas:

**Visual/UI Features:**
- Layout and density (cards vs lists, compact vs spacious)
- Interactions (hover states, animations, transitions)
- Empty states and loading states
- Responsive behavior
- Accessibility considerations

**APIs/Backend:**
- Response format and structure
- Error handling approach
- Authentication/authorization patterns
- Rate limiting, pagination
- Logging and observability

**Data/Content Systems:**
- Content structure and organization
- Naming conventions
- Validation rules
- Migration approach for existing data

**Infrastructure/DevOps:**
- Deployment strategy
- Environment configuration
- Monitoring and alerting
- Rollback procedures

### Step 3: Present Gray Areas

Present the identified gray areas and ask which to discuss:

```
I've identified these decision points for Phase [X]: [Name]

**Must Decide:**
1. [Gray area 1] — affects [what downstream]
2. [Gray area 2] — affects [what downstream]

**Optional/Nice to Clarify:**
3. [Gray area 3]
4. [Gray area 4]

Which would you like to discuss? (comma-separated numbers, or "all")
```

### Step 4: Deep-Dive Each Selected Area

For each selected gray area, have a focused conversation:

1. **Ask** about preferences and constraints
2. **Probe** for specifics ("What should happen when...?")
3. **Confirm** understanding
4. **Move on** when satisfied or user says "that's enough"

Example dialogue:
```
User: Let's discuss layout
Assistant: For the [feature], I see a few layout approaches:
- Cards in a grid (visual, scannable)
- Table rows (dense, sortable)
- List with previews (balanced)

What feels right for your use case? Any references to point me at?
```

### Step 5: Create CONTEXT.md

After discussion, create the context file in the phase directory:

```bash
mkdir -p ".planning/phases/[NN-name]"
```

Write `.planning/phases/[NN-name]/[NN]-CONTEXT.md`:

```markdown
# Phase [X]: [Name] - Context

**Gathered:** [date]
**Status:** Ready for planning

## Phase Boundary

[Clear statement of what this phase delivers — the scope anchor]

## Implementation Decisions

### [Category 1 that was discussed]
- [Decision or preference captured]
- [Another decision if applicable]

### [Category 2 that was discussed]
- [Decision or preference captured]

### Claude's Discretion
[Anything explicitly left as "your choice" during discussion]

## Open Questions
[Anything that still needs clarification, if any]

## References
[Any examples, links, or inspirations mentioned]
```

### Step 6: Update STATE.md

Add a note about context gathering:
```
**Context Gathered:** Phase [X] - [summary of key decisions]
```

### Step 7: Next Steps

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► PHASE [X] CONTEXT CAPTURED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Decisions captured:** [count]
**Ready for:** Planning

▶ Next: Run gsd-plan-phase to create execution plans
   Or: Run gsd-research-phase if domain research needed first

───────────────────────────────────────────────────────────────
```

## Output

Creates `.planning/phases/[NN-name]/[NN]-CONTEXT.md` with:
- Phase boundary (scope)
- Implementation decisions by category
- Areas left to Claude's discretion
- Open questions
- References

## Tips

- This is conversational — no code is written
- Be specific: "card layout" not "whatever looks good"
- Mention anti-patterns: "definitely NOT a modal"
- Share references: "like how GitHub does it"
- It's OK to say "your choice" for things you don't care about
