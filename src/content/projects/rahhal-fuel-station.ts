import type { Project } from "../types";

/** Master portfolio pages 5–8, plus the cover render on page 1. */
export const rahhalFuelStation: Project = {
  slug: "rahhal-fuel-station",
  title: "Rahhal Fuel Station",
  indexNumber: "01",
  discipline: "Fuel Station",
  tagline: "A controlled roadside system.",
  summary:
    "A fuel station developed around a controlled one-entry/one-exit circulation scheme, integrating fueling operations, retail, vehicle-service facilities, and a private residential component within a coordinated site layout.",
  location: "Al Hudaydah, Yemen",
  year: "2025",
  status: "Under Construction · Early Stage",
  area: "2,435 m²",
  scope:
    "Site Planning · Architectural Design · 3D Modeling · Visualization",
  facts: [
    { label: "Site area", value: "2,435 m²" },
    { label: "Project type", value: "Fuel Station" },
    { label: "Location", value: "Al Hudaydah, Yemen" },
    { label: "Year", value: "2025" },
    { label: "Status", value: "Under Construction · Early Stage" },
    {
      label: "Project context",
      value: "Prof Arch Engineering & Contracting Office",
    },
  ],
  cover: {
    src: "/media/rahhal/forecourt-dusk.webp",
    width: 1934,
    height: 1679,
    alt: "Dusk view of the Rahhal fuel station forecourt, with the illuminated canopy and bilingual fascia set against the roadside frontage",
    sourcePage: 5,
    kind: "render",
  },
  sections: [
    {
      type: "diagram",
      id: "site-movement",
      eyebrow: "Site movement",
      heading: "Movement organizes the site.",
      standfirst:
        "A defined vehicle entry, controlled internal circulation route, and dedicated exit establish a clear movement sequence across the forecourt.",
      media: {
        src: "/media/rahhal/site-plan-movement.webp",
        width: 1945,
        height: 1723,
        alt: "Site plan movement diagram showing the vehicle entry, the internal circulation loop around the fueling islands, and the separate vehicle exit",
        sourcePage: 6,
        caption: "Site plan · movement diagram — not to scale",
        kind: "drawing",
      },
      notes: [
        { key: "01", title: "Vehicle entry" },
        { key: "02", title: "Internal circulation" },
        { key: "03", title: "Vehicle exit" },
      ],
    },
    {
      type: "diagram",
      id: "program-logic",
      eyebrow: "Program logic",
      heading: "Three layers. One coherent system.",
      standfirst:
        "Public, operational, and commercial functions occupy the ground level, while an independently accessed private residential level is organized above.",
      media: {
        src: "/media/rahhal/program-plans.webp",
        width: 1945,
        height: 1728,
        alt: "Program plans showing the ground floor public, commercial and operational layout alongside the first-floor private residential level and the roof and canopy levels",
        sourcePage: 7,
        caption: "Program plans · not to scale",
        kind: "drawing",
      },
      notes: [
        {
          key: "01",
          title: "Ground floor",
          body: "Retail, administration, public facilities, technical rooms, and vehicle-service functions are organized at ground level.",
        },
        {
          key: "02",
          title: "First floor",
          body: "A private residential level is organized above the commercial and administrative building.",
        },
        {
          key: "03",
          title: "Roof + canopy",
          body: "Roof levels and canopy elements complete the project's vertical organization.",
        },
        {
          key: "04",
          title: "Private access",
          body: "A dedicated rear entrance provides independent access to the private residential level, separated from public and service circulation to reinforce privacy.",
        },
      ],
    },
    {
      type: "gallery",
      id: "visual-identity",
      eyebrow: "Design language",
      heading: "A unified visual identity.",
      standfirst:
        "A restrained material palette, warm integrated lighting, and a unified visual identity connect the station's commercial, fueling, service, and residential components.",
      items: [
        {
          key: "01",
          title: "Canopy identity",
          body: "Branded fascia, bilingual signage, and integrated lighting establish the visual anchor.",
          media: {
            src: "/media/rahhal/frontage-night.webp",
            width: 1373,
            height: 807,
            alt: "Night view of the commercial frontage, with the lit canopy fascia, bilingual signage and service bays along the forecourt",
            sourcePage: 8,
            kind: "render",
          },
        },
        {
          key: "02",
          title: "Facade rhythm",
          body: "Vertical openings and recessed bands extend the language while preserving privacy.",
          media: {
            src: "/media/rahhal/canopy-identity.webp",
            width: 701,
            height: 346,
            alt: "Street-level view of the canopy edge and adjoining commercial frontage at dusk",
            sourcePage: 8,
            kind: "render",
          },
        },
        {
          key: "03",
          title: "Material continuity",
          body: "Stone-look warmth, dark contrast, and controlled ceramic surfaces are shared across the project.",
          media: {
            src: "/media/rahhal/residential-facade.webp",
            width: 701,
            height: 384,
            alt: "The private residential block, showing the facade rhythm of vertical openings and recessed bands above the stone-look base",
            sourcePage: 8,
            kind: "render",
          },
        },
      ],
    },
    {
      type: "keyList",
      id: "material-language",
      eyebrow: "Material language",
      heading: "Design intent palette.",
      standfirst:
        "Derived from approved renders — not a construction specification.",
      items: [
        {
          key: "01",
          title: "Light stone / stone-look finish",
          body: "A calm, warm visual base for the project's shared architectural expression.",
        },
        {
          key: "02",
          title: "Warm bronze-tone accent band",
          body: "Warm contrast connecting entries, signage, and integrated lighting.",
        },
        {
          key: "03",
          title: "Dark metal + glass",
          body: "A darker layer adding facade depth, contrast, and commercial visibility.",
        },
        {
          key: "04",
          title: "Light canopy envelope",
          body: "A light-edge canopy expression defining the forecourt identity.",
        },
        {
          key: "05",
          title: "External paving + wayfinding",
          body: "Surface contrast and guidance lines supporting movement legibility.",
        },
      ],
    },
  ],
  sourcePages: [5, 8],
};
