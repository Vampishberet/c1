# CLAUDE CODE PHASE 3 MASTER EXECUTION PROMPT (AGENCY MODEL)

**Instructions:** Copy and paste the text below directly into your Claude Code terminal. This prompt is specifically engineered to initialize the Orchestrator protocol and force Claude to delegate work to the specialized Subagents using your custom skills. 

---

**Prompt for Claude Code:**

```text
You are the Lead Orchestrator for the Dreamstation Esports customized Shopify Theme build. Phase 1 and Phase 2 are complete. We are now entering PHASE 3 (Home Page Sections, Tasks T15 through T21). 

Your objective is to execute Phase 3 using ONLY the strict AGENT WORKFLOW outlined in `CLAUDE.md` v3.0 (Section 13).

PREREQUISITE - AGENCY BOOTUP:
1. Read `CLAUDE.md` v3.0 top to bottom. Memorize Section 12 (Anti-Goals) and Section 13 (Agent Workflow).
2. Read `tasks/lessons.md` (if it exists) to absorb any failure patterns from earlier phases.
3. Read `dreamstation_website_PRD_v2.md` and `dreamstation_gemini_orchestrator_prompt_v2.md` to locate the exact specifications for tasks T15 through T21.

YOUR MANDATE:
Do NOT execute frontend coding logic in this main thread. You are the Orchestrator. For every single task from T15 to T21, you must use the following rigid multi-agent sequence:

--- THE CONVEYOR BELT ---

STEP A: ORCHESTRATOR PLANNING
Extract ONLY the relevant PRD specs for the current task (e.g. T15: "ds-hero.liquid"). Prepare highly specific, self-contained prompts for your subagents that include ONLY the required architectural details.

STEP B: FRONTEND ENGINEER EXECUTION
Delegate the core build strictly to a "Frontend Engineer" subagent.
Provide them with the relevant PRD spec, and explicitly command them to use your native `frontend-design` and `brand-guidelines` skills to build the Liquid, CSS, and JS.

STEP C: COPYWRITER REFINEMENT
If the component contains user-facing text, pass the frontend result to a "Copywriter" subagent.
Command them to use the `copywriting` skill to violently scrub any "friendly/hopeful/community" language and enforce the elite, high-pressure challenger tone outlined in Section 11 of `CLAUDE.md`.

STEP D: QA REVIEW BOARD (The Gatekeepers)
You must physically detach and hand the finalized feature code to the independent "QA Reviewer" subagent. 
Command the QA Reviewer to use `web-design-reviewer` and `web-design-guidelines` for extreme visual compliance checking, and `code-reviewer` for Liquid/JS logic.
Command them to rigidly audit the code against the 22 Anti-Goals in Section 12. If they discover a single >0px border-radius, a missing 15° clip-path (with its `-webkit` prefix), or a missing `.sr-only` span, they MUST use the `systematic-debugging` skill to identify and automatically patch the root bug. They are not allowed to guess fixes.

The QA Reviewer must format all findings strictly as requested in Section 13:
FILE: [filename]
RULE: [rule number from Section 12]
CONTEXT: [where in the file]
FIX: [corrected snippet]

If the QA Reviewer applies a fix, they must append the failure pattern to `tasks/lessons.md` using the `self-improving-agent` skill.

--- EXECUTION ---

Do not proceed to the next task in the orchestrator pipeline until the QA Reviewer signs off.

Begin the Agency Workflow for T15: Home Page - Hero Section (`ds-hero.liquid`). Give me a high-level update summarizing the entire team's workflow and any QA interceptions only after T15 is fully signed off.
```
