# Build plan — Ahmed Belal Al-Maytami portfolio

Single working document: source map, asset backlog, phase status, open items.

## 1. Sources

| Document | Location | Authority |
| --- | --- | --- |
| `Ahmed_Belal_Portfolio_CLAUDE_UNDER_10MB_FINAL.pdf` (23 pp, 9.45 MB) | Google Drive `1R_qGmFgZa5s7ii7Ha1mCgJ-WCQSLrcW-` | all content, facts, imagery |
| `Ahmed_Belal_Portfolio_Visual_Identity_Reference.pdf` (2 pp) | conversation attachment, read | all visual direction — **wins on any visual conflict** |
| `Ahmed_Belal_Master_Portfolio_QPDF_SAFE.pdf` (107 MB) | Google Drive | superseded by the compressed file above |

### Source acquisition status

The identity PDF was read in full (both pages rendered and inspected).

The content PDF's **text layer** has been recovered through the Drive
connector's text path and is the basis of all content currently in
`src/content/`. Its **bytes have not reached this environment**, so no imagery
is extracted yet:

- `drive.google.com`, `docs.google.com`, `drive.usercontent.google.com` are
  blocked by egress policy (403 on CONNECT). `ahmedbelalmaytami.me` is also
  unreachable. `github.com` and `raw.githubusercontent.com` *are* reachable.
- The Drive connector refuses files over 10 MB outright, and at 9.45 MB the
  session drops mid-transfer rather than returning the payload (reproduced 3×).
- No Google OAuth token exists in the container, so the Drive REST API cannot
  be authorized.

**To unblock:** put the PDF where this environment can read it — attach it to
the conversation (attachments land on disk directly), or commit it to a branch
of this repository, which can then be fetched over git.

### Page map

| Page | Content | Recovered |
| --- | --- | --- |
| 1 | Cover — name, roles, disciplines, Rahhal render | text ✓ / image ✗ |
| 2 | Profile | ✗ |
| 3 | Capabilities / tools | ✗ |
| 4 | Selected works index | ✗ |
| 5–8 | Rahhal Fuel Station | ✗ |
| 9 | Bakka Supermarket opener | ✗ |
| 10 | Bakka — retail plan, 4 anchors, 9 functional zones | text ✓ / image ✗ |
| 11 | Bakka — reflected ceiling plan, C1–C4 | text ✓ / image ✗ |
| 12–13 | Bakka — remaining sheets | ✗ |
| 14–15 | Residential Villa Facade Design | ✗ |
| 16 | OXIVA — opener, design thesis, project data | text ✓ / image ✗ |
| 17 | OXIVA — site context, terrain concept | text ✓ / image ✗ |
| 18 | OXIVA — masterplan, 8 zones, circulation | text ✓ / image ✗ |
| 19 | OXIVA — site elevations E/N 1:500, terrain | text ✓ / image ✗ |
| 20 | OXIVA — programmed landscapes, social life | text ✓ / image ✗ |
| 21 | OXIVA — programmed landscapes, active life | text ✓ / image ✗ |
| 22 | OXIVA — hotel development | text ✓ / image ✗ |
| 23 | Contact / closing | text ✓ |

## 2. Asset backlog

Every unextracted plate is a typed `PendingMedia` in `src/content/projects/`,
carrying the source page it must come from. To find the full backlog:

```bash
grep -rn "pending: true" src/content/
```

Extraction procedure once the PDF is on disk:

1. `pdfimages -list` (or pymupdf `page.get_images`) to inventory embedded rasters.
2. Prefer the native embedded image; reconstruct soft masks where present.
3. Where a plate is a composition of layers, render the page region at high DPI
   and crop cleanly — never a low-resolution screen capture.
4. Emit AVIF + WebP derivatives into `public/media/<slug>/`, keeping enough
   resolution for full-bleed desktop without shipping 8K files.
5. Replace each `PendingMedia` with a `MediaAsset` carrying real
   `width`/`height` and alt text grounded in what the drawing shows.
6. Compare each critical plate against its appearance in the PDF for crop,
   mask, colour shift or blur before considering it done.

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
- [x] 1 — identity PDF read; content PDF text layer recovered
- [x] 2 — official `create-next-app` scaffold, builds clean
- [x] 3 — design direction chosen and documented
- [x] 4 — tokens, fonts, grid, shell, nav, footer, motion, section system
- [~] 5 — routes built; case studies carry recovered text, awaiting imagery
- [ ] 6 — real-browser review at 390 / 768 / 1024 / 1440 / large
- [ ] 7 — Impeccable + Taste + performance/accessibility review loop
- [ ] 8 — production verification pass
- [ ] 9 — cleanup

## 5. Open items

1. **Blocking:** obtain the content PDF bytes (see acquisition status above).
2. Pages 2–9 and 12–15 text is not in the connector's rendering; read it from
   the PDF directly once available. Rahhal and Villa have no sections yet.
3. `profile.intro` (page 2) and `capabilities` (page 3) are empty by design
   until the source supplies them — both render as nothing today.
4. Real-browser QA has not run yet; no screenshots have been taken.
5. `agent-browser` skill needs `npm i -g agent-browser && agent-browser install`
   before it can drive a browser.

## 6. Verification checklist

- [x] `pnpm lint` clean
- [x] `pnpm exec tsc --noEmit` clean
- [x] `pnpm build` clean — 13 routes, all static
- [ ] no console errors / hydration warnings in a real browser
- [ ] responsive review, no horizontal overflow
- [ ] keyboard nav and visible focus throughout
- [ ] reduced-motion verified
- [ ] every project's facts and team attribution checked against the PDF
