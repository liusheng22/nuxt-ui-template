# AI Skills (Cursor / Codex) Guide

This template is built for Nuxt 4 + Nuxt UI, so having project-specific AI rules helps keep output consistent (Nuxt conventions, UI components, structure, deployment).

This document explains how to reuse:

- `nuxt-skills` (a community rules/skills repo): https://github.com/onmax/nuxt-skills

## 1) Cursor: rules you can copy into your project

Cursor can load “rules” from your repository to guide the assistant.

Common setups (pick one based on your Cursor version):

- `.cursorrules` (single file)
- `.cursor/rules/*.mdc` (multiple rule files)

Suggested mapping:

- Put general Nuxt guidance into `nuxt.mdc`
- Put Nuxt UI specifics into `nuxt-ui.mdc`
- Put component organization conventions into `components-structure.mdc`
- Put deployment notes into `deployment.mdc`

Then, in your prompt, explicitly reference the rule files you want the assistant to follow.

## 2) Codex CLI: skills you can install

Codex “skills” are folders containing a `SKILL.md` plus optional `references/`, `scripts/`, etc.

If you want to reuse skills across repos:

1. Put them under your Codex home (e.g. `$CODEX_HOME/skills/<skill-name>/SKILL.md`)
2. Ensure the skill name and description match what you want to trigger
3. In each session, reference the skill by name (e.g. `$nuxt $nuxt-ui`)

## 3) Using `nuxt-skills`

`nuxt-skills` is a separate repo that packages reusable Nuxt guidance (project structure, Nuxt UI page modules, deployment).

Recommended approach:

1. Browse the repo and pick only the parts you want (avoid copying everything).
2. Copy them into your tool of choice:
   - Cursor rules → `.cursor/rules/*.mdc` (or `.cursorrules`)
   - Codex skills → a new skill folder under `$CODEX_HOME/skills/`
3. Keep attribution / license headers if the source files include them (check the repo license).

## 4) What this template already assumes

This repo is designed to work well with these skills (names may vary by your setup):

- Nuxt 4 patterns (routing, server routes, middleware, config)
- Nuxt UI v4 patterns (UApp wrapper, CSS imports, overlays/forms)
- Nuxt 4 component structure conventions (`app/components/<Name>/index.vue` for multi-file sets)

