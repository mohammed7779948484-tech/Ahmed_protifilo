import type { Project } from "../types";

/** Master portfolio pages 14–15. */
export const residentialVillaFacade: Project = {
  slug: "residential-villa-facade",
  title: "Residential Villa Facade Design",
  indexNumber: "03",
  discipline: "Residential Facade",
  tagline: "A composed façade with a measured neoclassical rhythm.",
  summary:
    "A modern neoclassical reading of a private residential villa, structured through layered profiles, framed vertical openings, and a coordinated boundary edge.",
  location: "Riyadh, Saudi Arabia",
  year: "2026",
  status: "Implemented",
  scope: "Façade Design + Visualization",
  facts: [
    { label: "Location", value: "Riyadh, Saudi Arabia" },
    { label: "Year", value: "2026" },
    { label: "Status", value: "Implemented" },
    { label: "Scope", value: "04 façades designed" },
    { label: "Type", value: "Private Residential Villa" },
    { label: "Role", value: "Façade Design + Visualization" },
  ],
  cover: {
    src: "/media/villa-facade/front-facade-night.webp",
    width: 1629,
    height: 1535,
    alt: "Night view of the villa's front façade, its layered profiles and framed vertical openings lit by warm exterior lighting above the charcoal metal gates",
    sourcePage: 14,
    kind: "render",
  },
  sections: [
    {
      type: "narrative",
      id: "design-intent",
      eyebrow: "Design intent",
      heading: "A measured neoclassical rhythm.",
      body: [
        "The front façade establishes a clear identity through balanced proportions, depth-bearing horizontal profiles, controlled material contrast, and warm exterior lighting placement.",
      ],
    },
    {
      type: "gallery",
      id: "facade-language",
      eyebrow: "Façade language",
      heading: "Depth, frame, and evening light.",
      standfirst:
        "Across four designed façades, the language remains consistent: layered profiles establish depth, framed openings organize the elevations, and restrained contrast lets light articulate the edges.",
      items: [
        {
          key: "01",
          title: "Rear façade — day view",
          body: "Material expression.",
          media: {
            src: "/media/villa-facade/rear-facade-day.webp",
            width: 1301,
            height: 795,
            alt: "Daytime view of the villa's rear façade, showing the off-white surfaces, stone-textured accents and framed vertical openings",
            sourcePage: 15,
            kind: "render",
          },
        },
        {
          key: "02",
          title: "Rear façade — night view",
          body: "Lighting identity.",
          media: {
            src: "/media/villa-facade/rear-facade-night.webp",
            width: 1290,
            height: 795,
            alt: "Night view of the villa's rear façade, with warm exterior lighting washing the layered profiles and glowing framed windows",
            sourcePage: 15,
            kind: "render",
          },
        },
        {
          key: "03",
          title: "Construction-stage reference",
          media: {
            src: "/media/villa-facade/construction-reference.webp",
            width: 667,
            height: 412,
            alt: "Photograph of the villa under construction, the façade profiles visible in bare structure before finishing",
            sourcePage: 15,
            kind: "photograph",
          },
        },
      ],
    },
    {
      type: "keyList",
      id: "material-lighting",
      eyebrow: "Material + lighting language",
      heading: "Material contrast and warm light reinforce façade depth and nighttime identity.",
      items: [
        { key: "01", title: "Warm off-white surfaces" },
        { key: "02", title: "Light beige stone-textured accents" },
        { key: "03", title: "Charcoal metal frames + gates" },
        { key: "04", title: "Warm exterior lighting placement" },
      ],
    },
  ],
  sourcePages: [14, 15],
};
