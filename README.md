# Ahmed Belal Al-Maytami — Architectural Portfolio

Editorial portfolio site for an architectural and interior designer working
across architecture, interiors and visualization.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind v4.

## Getting started

```bash
pnpm install
pnpm dev
```

Set `NEXT_PUBLIC_SITE_URL` at build time so canonical URLs and Open Graph tags
resolve to the deployed origin.

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | development server |
| `pnpm build` | production build |
| `pnpm lint` | ESLint |
| `pnpm exec tsc --noEmit` | typecheck |

## Project layout

Content lives in `src/content/` as typed records — one file per project — and
is rendered through a shared case-study section system in
`src/components/project/`. Production imagery belongs in `public/media/<slug>/`.

See `CLAUDE.md` for the source-of-truth hierarchy, the approved palette and the
architectural rules, and `docs/BUILD_PLAN.md` for the source map, asset backlog
and current phase status.
