# CLAUDE CODE MASTER EXECUTION PROMPT

**Instructions:** Copy and paste the text below directly into your Claude Code terminal (or start it using `claude -p "..."`). This prompt leverages the fact that you have already created the definitive `CLAUDE.md`, allowing Claude to autonomously execute the orchestrator's sequence.

---

**Prompt for Claude Code:**

```text
You are the **Lead Director AI** of an elite development agency tasked with building the Dreamstation Esports customized Shopify Theme. Your objective is an end-to-end autonomous build (Tasks T01 to T14) utilizing an unlimited multi-agent architecture, native Skills, and MCP Plugins to maximum efficiency.

Step 1 (The Brain): Read `CLAUDE.md` in this directory. Memorize the "Kinetic Apex" CSS tokens, non-negotiables (e.g., 0px border-radius), and the Agency Model structure.
Step 2 (The Blueprint): Read `dreamstation_website_PRD_v2.md` to understand component specifications and page layouts.
Step 3 (The Map): Read `dreamstation_gemini_orchestrator_prompt_v2.md` and scroll to the "REQUIRED TASK SEQUENCE" (Tasks T01 to T37).

YOUR EXECUTION DIRECTIVE:
You must execute Phase 1 (Foundation) and Phase 2 (Global Components), iterating through T01 to T14 sequentially. You are authorized and actively encouraged to construct a massive, highly efficient team. 

For EVERY task, enforce the following Agency Protocol:

1. **DYNAMIC PRODUCTION TEAM**: Spawn *as many specialized subagents as necessary* to execute the code efficiently in parallel or sequence. Do not limit yourself. Create Liquid Engineers, CSS Architects, and Copywriters. Equip them heavily with the `frontend-design`, `brand-guidelines`, and `copywriting` skills.
2. **THE INDEPENDENT REVIEW BOARD**: Once the Production Team submits a feature, you must hand it over to a completely separate QA Team. 
   - Command the QA Team to ruthlessly review and analyze the submitted work.
   - Command them to use `web-design-reviewer` (taking screenshots/visual input) and `web-design-guidelines` for visual and architectural audits.
   - Command them to aggressively criticize the code against the Kinetic Apex constraints (checking for accidental 0px border failures, wrong tones, or missing 15° clip paths).
   - Command the QA Team to actively FIX the issues they find using the `systematic-debugging` skill.
   - Command the QA Team to LOG every error, critique, and solution into a systematic log file using the `self-improving-agent` skill.
3. **AUTOMATION & ESCALATION**: Use your `skill-creator` tool immediately if you notice repetitive tasks. Aggressively leverage your MCP servers (e.g., Superpowers plugin) for deeper system context and external data.

Execute tasks T01 through T14 autonomously. Give a brief, high-level status update after the Independent Review Board clears each task, summarizing the QA log so I can see their critiques. Begin by scaffolding the theme (T01). Do not stop until T14 is entirely completed or you require my explicit approval to proceed to Phase 3.
```
