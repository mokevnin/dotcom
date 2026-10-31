# mokevnin.com

Personal business card site: Vite, React and Mantine, deployed to GitHub Pages on push to `main`.

## Development

Tools, versions, tasks and git hooks are managed by [mise](https://mise.jdx.dev) and [hk](https://hk.jdx.dev):

```sh
mise run setup     # install pinned tools, dependencies and git hooks
mise run dev       # dev server
mise run check     # every check, the same set CI runs
mise run fix       # safe autofixes
mise run preview   # build and serve the production bundle
```

## Quality gates

Picked from [Dev Quality Gates](https://github.com/mokevnin/dev-quality-gates) and wired in `hk.pkl`:

| Check | Tool | Commit hook | Pre-push and CI |
| --- | --- | --- | --- |
| Formatting | oxfmt | yes | yes |
| Lint, type-aware | Oxlint | yes | yes |
| Spelling | typos | yes | yes |
| Secrets in files | Betterleaks | yes | yes |
| Markdown | rumdl | yes | yes |
| GitHub Actions | jactionlint | yes | yes |
| Agent instructions | agnix | yes | yes |
| Types | TypeScript (`tsc -b`) | | yes |
| Unused files and dependencies | Knip | | yes |
| Build and bundle budgets | Vite, size-limit | | yes |
| Vulnerable dependencies | OSV-Scanner (also weekly) | | yes |
| Secrets in git history | Betterleaks | | yes |
| Broken links | lychee | | yes |

Dependabot opens weekly updates with a 7-day cooldown.
