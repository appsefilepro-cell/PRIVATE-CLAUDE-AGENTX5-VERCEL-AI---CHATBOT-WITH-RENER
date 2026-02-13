# CLAUDE.md — Permanent Knowledge Base

## Project Overview
- **Name**: Agent X5.0 Vercel AI Chatbot (Next.js + AI SDK)
- **Package Manager**: pnpm (v9.12.3) — NEVER use npm
- **Framework**: Next.js 16 with Turbopack, React 19, TypeScript
- **Deployment**: Vercel
- **AI SDK**: ai@6.0.0-beta.159 with @ai-sdk/gateway

## Standard Operating Procedures

### 1. Fix Errors First, Always
- NEVER add features on top of broken code
- Run `pnpm run build` and `npx tsc --noEmit` before committing
- All TypeScript errors must be resolved before pushing
- Zero tolerance for pushing code that doesn't compile

### 2. Automated Workflows
- Use CI/CD pipelines and automated fixes — don't just report problems, fix them
- When errors are found, fix them immediately in the same session
- Run the full build after every change to confirm it passes

### 3. Git & PR Workflow
- Commit with clear messages describing what was fixed
- Push to the designated branch
- Clean up stale PRs — don't let them pile up
- Merge and close PRs that are complete

### 4. Dependencies
- This is a Node.js/pnpm project — no Python files (no requirements.txt)
- Always use `pnpm install`, never `npm install`
- Resolve dependency conflicts properly, don't use --force or --legacy-peer-deps

### 5. Don't Repeat Yourself
- Read this file every session — the user should NOT have to re-explain these rules
- If the user gives new standing instructions, add them to this file
- Act autonomously on routine tasks: fix errors, build, test, commit, push

### 6. Agent Integration & Tools
- Use free/open LLM routes when available (Gemini, OpenAI free tier)
- Integrate with Vercel AI SDK gateway for model routing
- Dashboard and agent-control features must type-check against AI SDK types
- All artifact kinds must be registered in both the TypeScript types AND the DB schema

### 7. Build & Deploy Checklist (run every session)
1. `pnpm install`
2. `npx tsc --noEmit` — must pass with 0 errors
3. `pnpm run build` — must succeed
4. Commit and push only after build passes

### 8. Communication Style
- Don't over-explain or ask permission for obvious fixes
- Just fix it, commit it, push it
- Only ask questions when there's a genuine ambiguity that could go wrong
