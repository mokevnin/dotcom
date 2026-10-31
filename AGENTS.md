# mokevnin.com

## Overview

Personal site of Kirill Mokevnin: a single page built with Vite, React and Mantine, deployed to GitHub Pages on push to `main`. Sources are in `src/`, static files in `public/`.

## Commands

- `mise run setup`: install the pinned tools, the dependencies and the git hooks.
- `mise run dev`: start the dev server.
- `mise run check`: run every check (lint, format, types, unused code, build with size budgets, secrets, vulnerabilities, links). It is the same set CI runs and must pass before a change is done.
- `mise run fix`: apply the safe autofixes.

## Rules

- Do not disable a lint rule to get a change through. An exception is narrow (one path, one rule), carries a reason and needs a human decision.
- Do not raise the budgets in `.size-limit.json` without a reason in the commit message.
- Images go in `src/assets` as WebP sized for display, not as original screenshots.
- `dist/` is build output and is never edited by hand.
- This file is the single source of agent instructions; `CLAUDE.md` only imports it.
