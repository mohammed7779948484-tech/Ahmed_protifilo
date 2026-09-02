@AGENTS.md

# Ahmed Belal Al-Maytami — Architectural Portfolio

Editorial portfolio site for an architectural and interior designer. Next.js 16
App Router, React 19, TypeScript, Tailwind v4 (CSS-first `@theme`), pnpm.

## Commands

```bash
pnpm dev                 # dev server
pnpm build               # production build (must pass before any PR)
pnpm lint                # eslint
pnpm exec tsc --noEmit   # typecheck
```

## Source-of-truth hierarchy

Two source documents, with different authority. Do not merge their authority.

1. **Content** — `Ahmed_Belal_Portfolio_CLAUDE_UNDER_10MB_FINAL.pdf` (Google
   Drive, 23 pages). Sole authority for project facts, names, locations, dates,
   areas, scope, team attribution, descriptions, and **all project imagery**:
   renders, plans, elevations, sections, diagrams, photographs.
2. **Visual identity** — `Ahmed_Belal_Portfolio_Visual_Identity_Reference.pdf`
   (2 pages). Sole authority for palette, typography feel, spacing, overlays,
   linework and composition. **If the two conflict visually, the identity PDF
   wins**, including over the content PDF's own black/copper page styling.

## Content integrity — non-negotiable

- Never invent project facts, awards, clients, roles, dimensions, status, dates,
  locations or outcomes. If the source does not support a fact, omit it.
- Every content field is optional wherever the source may not supply it. An
  absent field renders as nothing; a guessed field is a defect.
- Preserve team attribution verbatim. **OXIVA IBB is an academic team project:
  Ahmed Belal Al-Maytami + Osama Mohammed Ahmed Zain.** Never drop or shorten it.
- No stock photography, no AI-generated architecture, no placeholder imagery
  standing in for real work. Unextracted plates use `PendingMedia`, which
  renders a labelled empty frame naming its source page.
- Do not build the site from screenshots of PDF pages. Real semantic
  HTML/CSS/React only; extracted media placed into purpose-built layouts.

## Approved palette

| Token | Hex | Use |
| --- | --- | --- |
| Ivory Paper | `#F1EBE3` | page field |
| Warm Stone | `#D4CAC0` | panels, captions, transitions |
| Soft Terracotta | `#B77D6E` | accent **only** — rules, marks, reference numbers |
| Deep Espresso | `#3B302B` | body text, dark sections |
| Graphite | `#5E5955` | secondary text |

Terracotta is 2.9:1 on ivory and **must never carry body text on the ivory
field**. It is for hairlines, small filled areas and reference marks. Espresso
(10.8:1) and graphite (5.8:1) are the text voices.

Type: Bodoni Moda (display, variable, `opsz`), IBM Plex Sans (body), IBM Plex
Mono (sheet labels — the `.label` class). Do not introduce Inter.

## Architecture

```
src/app/            routes: /, /work, /work/[slug], /profile, /contact
                    + sitemap.ts, robots.ts, not-found.tsx
src/components/
  layout/           footer, JSON-LD, decorative seams and datum grid
  navigation/       header, mobile nav (native <dialog>), nav items
  sections/         home hero, work index
  project/          opener, facts, media slot view, section dispatcher
    sections/       one renderer per ProjectSection type
  media/            Plate (real asset), PendingPlate (awaiting extraction)
  motion/           ScrollReveal — the site's ONLY client boundary
  ui/               Rule, Label, SectionHeading
src/content/        typed profile, capabilities and one file per project
src/lib/            fonts, cn, site config, seo, structured data
src/styles/         tokens.css — palette, type scale, sheet geometry
public/media/<slug> production imagery, organized by project
```

## Rules that must hold

- **400-line hard limit** per handwritten file; target 100–250. Generated files
  and lockfiles are exempt. Split by responsibility when a file approaches 300.
- **Server Components by default.** `ScrollReveal` is the only `"use client"`
  component; keep it that way. Server components opt into motion by rendering
  `data-reveal` / `data-reveal-delay` attributes — they never become client
  components to animate.
- **Reveal degrades to visible.** CSS hides `[data-reveal]` only under
  `html[data-motion="on"]`, set by a pre-paint inline script that checks
  `prefers-reduced-motion`. No JS or reduced motion ⇒ content simply shows.
  Never hide content behind an animation that must run.
- **Reuse before reinventing.** Check installed deps, then mature headless
  primitives (native platform elements first — the mobile nav uses `<dialog>`
  for free focus trapping), then a proven library. Write custom only for
  interactions unique to this art direction. Never ship a recognizable
  shadcn/Aceternity/Magic-UI default aesthetic.
- **Images:** `next/image` via `Plate`. Next 16 uses `preload`, **not** the
  deprecated `priority`. Always pass `sizes` and real intrinsic dimensions.
  Never crop a plan, elevation or section into a grid cell — linework renders
  uncropped on the ivory field.
- **No test-file bloat.** No Jest/Vitest/Playwright suites for this portfolio.
  Verify with lint, typecheck, production build and real-browser review.

## Agent skills

Third-party skills are installed at `.claude/skills/` (~114 MB, gitignored).
Impeccable is the primary design-quality system; Taste is an anti-generic
reviewer, not the final authority where it conflicts with the approved
identity. Read one skill at a time — do not load the whole stack at once.

## Working notes

`docs/BUILD_PLAN.md` holds the source map, asset manifest, phase status and
open items. Keep it current; it is how work survives a context reset.
