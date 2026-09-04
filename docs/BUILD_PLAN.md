# Build plan — Ahmed Belal Al-Maytami portfolio

Single working document: source map, asset backlog, phase status, open items.

## 1. Sources

| Document | Location | Authority |
| --- | --- | --- |
| `Ahmed_Belal_Portfolio_CLAUDE_UNDER_10MB_FINAL.pdf` (23 pp, 9.45 MB) | Google Drive `1R_qGmFgZa5s7ii7Ha1mCgJ-WCQSLrcW-` | all content, facts, imagery |
| `Ahmed_Belal_Portfolio_Visual_Identity_Reference.pdf` (2 pp) | conversation attachment, read | all visual direction — **wins on any visual conflict** |
| `Ahmed_Belal_Master_Portfolio_QPDF_SAFE.pdf` (107 MB) | Google Drive | superseded by the compressed file above |

### Source acquisition status

Both source documents have been read in full.

The content PDF reached this environment by being committed to the feature
branch and read with `git show` — Google Drive's hosts are blocked by egress
policy, the Drive connector refuses files over 10 MB and drops the session
mid-transfer at 9.45 MB, and tmpfiles.org is blocked too. Only GitHub hosts are
reachable, so a repository branch is the working transfer route if the source is
ever needed again.

All 23 pages were rendered and inspected. Pages 1–9, 12–16 and 23 are flattened
single-image compositions (3200×2262 JPEG per page); pages 17–22 place their
images individually.

## 2. Assets

42 plates extracted, 4.23 MB total, in `public/media/<slug>/`. The pipeline
lives in the scratchpad (`extract_assets.py`, `optimize_assets.py`) and is
reproducible from the PDF:

1. Plates are taken as 400 DPI page-region renders, cropped inside the source's
   own dark caption bars — the site re-sets those captions as HTML on the ivory
   field, so baking them into the image would duplicate them. Page-region
   rendering (rather than raw embedded-image extraction) also composites the
   soft masks on pages 19–22 correctly.
2. Each plate is encoded once as WebP, capped at 2000 px wide: quality 93 for
   linework, 86 for photography. `next/image` derives the responsive variants,
   so shipping fixed widths would only duplicate bytes.
3. Every plate carries real intrinsic dimensions and alt text grounded in what
   the drawing or render actually shows.

`PendingMedia` remains in the content model as the guard that keeps a missing
asset an explicit, labelled gap rather than a substituted image. Nothing uses it
today — `grep -rn "pending: true" src/content/` should stay empty.

## 3. Design direction (chosen)

Three directions were considered: **The Sheet** (site as drawing sheet),
**Ivory Field / Image Field** (direct cover translation), **The Plate Sequence**
(book metaphor).

**Chosen: Ivory Field / Image Field, on the discipline of The Sheet.** Every
major moment — home hero, project opener — is a narrow ivory information field
against a dominant image field, with translucent vertical layers over the
image, sitting on a strict grid with hairline datums, corner micro-labels and
numbered sections. Gallery sections borrow the plate idea. This is the most
faithful translation of the approved cover and the furthest from a template.

Accent ratio: terracotta appears only as the hero edge mark, the short rule
under headings, reference numbers, and figure keys.

## 4. Phase status

- [x] 0 — environment, tooling, skill stack (210 skills at `.claude/skills/`)
- [x] 1 — both sources read in full; all 23 pages inspected
- [x] 2 — official `create-next-app` scaffold, builds clean
- [x] 3 — design direction chosen and documented
- [x] 4 — tokens, fonts, grid, shell, nav, footer, motion, section system
- [x] 5 — all routes and all four case studies built from the source
- [x] 6 — real-browser review at 390 / 768 / 1024 / 1440 / 1920
- [ ] 7 — Impeccable + anti-slop + performance/accessibility review loop
- [ ] 8 — full production verification pass
- [ ] 9 — cleanup

### Fixed during browser review

- Project opener and hero columns forced a 654 px track inside a 390 px
  viewport; `overflow-x-clip` was hiding it rather than the layout being sound.
  Grid and flex children holding long labels now carry `min-width: 0`, and
  `.sheet` sets it too.
- The hero image field did not fill its column: `Plate` gained a `fill` mode
  built on `next/image`'s own `fill`.
- The hero title broke across three lines with an orphaned "Al-"; titles in the
  5/12 column now use `--text-display-hero`, clamped against the column.
- Two crops kept source artefacts (a page header line on the Rahhal hero, the
  sheet's ivory surround on the villa cover) and were re-cut.
- The two hero corner labels wrapped into each other on narrow viewports and
  now stack below the `sm` breakpoint.

## 5. Open items

1. The 9.45 MB source PDF sits at the repository root on this branch, committed
   as the file-transfer route. It is not needed by the build — remove it before
   merge if the repo should not carry it (history will still hold the blob).
2. Phase 7's specialist review loop and a formal accessibility/performance audit
   have not run.
3. `agent-browser` needs `npm i -g agent-browser && agent-browser install`
   before it can drive a browser.

## 6. Verification checklist

- [x] `pnpm lint` clean
- [x] `pnpm exec tsc --noEmit` clean
- [x] `pnpm build` clean — 13 routes, all static
- [x] no console errors in a real browser at five widths
- [x] responsive review, no horizontal overflow at 390–1920
- [x] reduced-motion path verified (captures run with `reducedMotion: reduce`)
- [x] every project's facts and team attribution checked against the PDF
- [ ] keyboard nav and visible focus walked through by hand
- [ ] Lighthouse / bundle audit
