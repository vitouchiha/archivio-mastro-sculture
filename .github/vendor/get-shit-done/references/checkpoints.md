# Checkpoints Reference

Checkpoints are pause points where AI stops and asks for human input.

## Checkpoint Types

### checkpoint:human-verify

**Use for:** Visual/functional verification that requires human eyes.

```xml
<task type="checkpoint:human-verify" gate="blocking">
  <what-built>[What was built]</what-built>
  <how-to-verify>
    1. Run: npm run dev
    2. Visit: http://localhost:3000/login
    3. Test: Enter credentials and submit
    4. Confirm: Redirects to dashboard on success
  </how-to-verify>
  <resume-signal>Type "approved" or describe issues</resume-signal>
</task>
```

**AI behavior:**
1. Stop immediately when reaching this task
2. Display what was built and verification steps
3. Wait for user response
4. Continue if "approved", or address issues

### checkpoint:decision

**Use for:** Implementation choices that need human input.

```xml
<task type="checkpoint:decision" gate="blocking">
  <decision>Choose authentication strategy</decision>
  <context>Need to decide how to handle user sessions</context>
  <options>
    <option id="jwt">
      <name>JWT Tokens</name>
      <pros>Stateless, scalable, good for APIs</pros>
      <cons>Can't revoke easily, larger payload</cons>
    </option>
    <option id="sessions">
      <name>Server Sessions</name>
      <pros>Easy revocation, smaller cookies</pros>
      <cons>Requires session store, harder to scale</cons>
    </option>
  </options>
  <resume-signal>Select: jwt or sessions</resume-signal>
</task>
```

**AI behavior:**
1. Stop and present options clearly
2. Wait for user to select
3. Record decision in STATE.md
4. Continue with chosen approach

### checkpoint:human-action

**Use for:** Truly unavoidable manual steps (rare).

```xml
<task type="checkpoint:human-action" gate="blocking">
  <action>Complete OAuth app registration</action>
  <context>Need client ID and secret from GitHub</context>
  <instructions>
    1. Go to GitHub > Settings > Developer settings > OAuth Apps
    2. Click "New OAuth App"
    3. Set callback URL to http://localhost:3000/auth/callback
    4. Copy Client ID and Client Secret
    5. Add to .env.local:
       GITHUB_CLIENT_ID=xxx
       GITHUB_CLIENT_SECRET=xxx
  </instructions>
  <verify>cat .env.local | grep GITHUB_CLIENT</verify>
  <resume-signal>Type "done" when complete</resume-signal>
</task>
```

**AI behavior:**
1. Stop and show clear instructions
2. Wait for user to complete
3. Run verification if specified
4. Continue once confirmed

---

## When to Use Checkpoints

**DO use checkpoints for:**
- UI/UX verification (visual appearance)
- Deployment verification (site is live)
- Architecture decisions with trade-offs
- External service setup (OAuth, API keys)

**DON'T use checkpoints for:**
- Things that can be automated (tests, linting)
- Decisions that have obvious answers
- Steps AI can verify programmatically

---

## Display Format

When hitting a checkpoint, display clearly:

```
════════════════════════════════════════
CHECKPOINT: [Type]
════════════════════════════════════════

Task [X] of [Y]: [Task name]

[Checkpoint-specific content]

────────────────────────────────────────
→ YOUR ACTION: [Resume signal]
────────────────────────────────────────
```

Then **STOP** and wait for response.
