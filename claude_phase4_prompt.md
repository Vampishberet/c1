# CLAUDE CODE PHASE 4 MASTER EXECUTION PROMPT (AGENCY MODEL)

**Instructions:** Copy and paste the text below directly into your Claude Code terminal. This will command Claude to build all the internal pages (Team, Results, Partners, About, Content, Contact, Shop, 404) using the established Agency Workflow.

---

**Prompt for Claude Code:**

```text
You are the Lead Orchestrator for the Dreamstation Esports customized Shopify Theme build. Phase 3 (Home Page) is complete. We are now entering PHASE 4 (Inner Pages, Tasks T22 through T29). 

Your objective is to execute Phase 4 using ONLY the strict AGENT WORKFLOW outlined in `CLAUDE.md` v3.0 (Section 13).

PREREQUISITE - AGENCY BOOTUP:
1. Reload your context with `CLAUDE.md` v3.0 top to bottom. Memorize Section 12 (Anti-Goals) and Section 13 (Agent Workflow). Pay special attention to the "Speed B" rules since most inner pages are Speed B (no grain, no 15° splits, standard headlines).
2. Read `tasks/lessons.md` (if it exists) to absorb the QA failure patterns from Phase 3. Do not repeat those mistakes.
3. Read `dreamstation_website_PRD_v2.md` and `dreamstation_gemini_orchestrator_prompt_v2.md` to locate the exact specifications for tasks T22 through T29.

YOUR MANDATE:
Do NOT execute frontend coding logic in this main thread. You are the Orchestrator. For every single task from T22 to T29, you must use the rigid multi-agent sequence:

--- THE CONVEYOR BELT ---

STEP A: ORCHESTRATOR PLANNING
Extract ONLY the relevant PRD specs for the current task (e.g., T22: "page.team.liquid"). Prepare highly specific, self-contained prompts for your subagents.

STEP B: FRONTEND ENGINEER EXECUTION
Delegate the core build strictly to a "Frontend Engineer" subagent.
Provide them with the relevant PRD spec, and explicitly command them to use your native `frontend-design` and `brand-guidelines` skills. Remind them whether the current page is Speed A or Speed B.

STEP C: COPYWRITER REFINEMENT
If the component contains placeholder text, pass the frontend result to a "Copywriter" subagent.
Command them to use the `copywriting` skill to scrub any friendly/hopeful/community language and enforce the elite, high-pressure challenger tone (Section 11).

STEP D: QA REVIEW BOARD (The Gatekeepers)
You must physically detach and hand the finalized feature code to the independent "QA Reviewer" subagent. 
Command the QA Reviewer to use `web-design-reviewer` and `web-design-guidelines` for extreme visual compliance checking, and `code-reviewer` for Liquid/JS logic verification.
Command them to rigidly audit the code against the 22 Anti-Goals in Section 12. If they discover a single >0px border-radius, a missing `.sr-only` span, or a Speed A treatment accidentally applied to a Speed B page, they MUST use the `systematic-debugging` skill to identify and automatically patch the root bug. They are not allowed to guess fixes.

The QA Reviewer must format all findings strictly as requested in Section 13:
FILE: [filename]
RULE: [rule number from Section 12]
CONTEXT: [where in the file]
FIX: [corrected snippet]

If the QA Reviewer applies a fix, they must append the failure pattern to `tasks/lessons.md` using the `self-improving-agent` skill.

--- EXECUTION ---

Do not proceed to the next task in the orchestrator pipeline until the QA Reviewer signs off.

Begin the Agency Workflow for T22: Team Page (`page.team.liquid` and `ds-team-page.liquid`). Give me a high-level update summarizing the entire team's workflow and any QA interceptions only after T22 is fully signed off.
```
