import type { Project } from "../types";

/** Master portfolio pages 9–13. */
export const bakkaSupermarket: Project = {
  slug: "bakka-supermarket",
  title: "Bakka Supermarket",
  indexNumber: "02",
  discipline: "Retail Interior",
  tagline: "A retail interior shaped by flow and visibility.",
  summary:
    "An implemented neighborhood supermarket interior organized around a clear retail grid, visible perimeter departments, and custom fixture systems. The design coordinates customer circulation, checkout orientation, ceiling and lighting design, and department identity within one coherent retail environment.",
  location: "Makkah, Saudi Arabia",
  year: "2025",
  status: "Implemented",
  area: "342 m²",
  scope:
    "Retail Planning · Interior Design · Fixture Design · Ceiling & Lighting Design · 3D Visualization",
  facts: [
    { label: "Location", value: "Makkah, Saudi Arabia" },
    { label: "Area", value: "342 m²" },
    { label: "Client", value: "Mem Al-Mumtazah Trading Co." },
    { label: "Status", value: "Implemented" },
    { label: "Year", value: "2025" },
    {
      label: "Project context",
      value: "Prof Arch Engineering & Contracting Office",
    },
  ],
  cover: {
    src: "/media/bakka/gondola-aisle.webp",
    width: 1728,
    height: 939,
    alt: "The central gondola aisle of Bakka Supermarket, stocked shelving running the length of the retail grid under continuous linear ceiling lighting",
    sourcePage: 9,
    kind: "photograph",
  },
  sections: [
    {
      type: "diagram",
      id: "retail-plan",
      eyebrow: "Retail planning",
      heading: "Four spatial anchors structure the retail plan.",
      standfirst: "Retail planning through clear spatial order.",
      media: {
        src: "/media/bakka/retail-floor-plan.webp",
        width: 1951,
        height: 1285,
        alt: "Retail floor plan showing the entrance and two checkout counters, the perimeter departments, and the central gondola fixture grid",
        sourcePage: 10,
        caption: "Retail floor plan · spatial organization",
        kind: "drawing",
      },
      notes: [
        {
          key: "01",
          title: "Arrival + checkout",
          body: "Front-of-store arrival zone with two documented checkout counters.",
        },
        {
          key: "02",
          title: "Perimeter departments",
          body: "Visible edge departments define the retail perimeter.",
        },
        {
          key: "03",
          title: "Central gondola",
          body: "The documented fixture grid structures the central browsing field.",
        },
        {
          key: "04",
          title: "Checkout + departure",
          body: "The front checkout condition defines the departure side of the retail sequence.",
        },
      ],
      legend: {
        heading: "Functional zones",
        items: [
          { key: "01", title: "Entrance + two checkout counters" },
          { key: "02", title: "General groceries" },
          { key: "03", title: "Cleaning products" },
          { key: "04", title: "Refrigerated beverages" },
          { key: "05", title: "Meat section" },
          { key: "06", title: "Bakery + oven" },
          { key: "07", title: "Sweets + baked goods" },
          { key: "08", title: "Dairy + cheese" },
          { key: "09", title: "Fruits + vegetables" },
        ],
      },
    },
    {
      type: "diagram",
      id: "ceiling-lighting",
      eyebrow: "Ceiling + lighting",
      heading: "The ceiling system extends the retail grid.",
      standfirst: "Ceiling and lighting through a clear retail rhythm.",
      media: {
        src: "/media/bakka/reflected-ceiling-plan.webp",
        width: 1951,
        height: 1262,
        alt: "Reflected ceiling plan showing linear lighting runs aligned to the central aisles, with distinct ceiling treatments over the specialty departments and the entry and checkout area",
        sourcePage: 11,
        caption: "Reflected ceiling plan · aisle rhythm + localized zones",
        kind: "drawing",
      },
      notes: [
        {
          key: "C1",
          title: "Aisle-aligned linear lighting",
          body: "Repeated linear elements align with the central aisle field.",
        },
        {
          key: "C2",
          title: "Specialty ceiling zones",
          body: "Distinct ceiling treatments appear in specialty areas.",
        },
        {
          key: "C3",
          title: "Local + accent lighting",
          body: "Localized points and accents support department differentiation.",
        },
        {
          key: "C4",
          title: "Entry + checkout lighting",
          body: "A distinct lighting condition marks the entry and checkout area.",
        },
      ],
    },
    {
      type: "drawings",
      id: "fixture-system",
      eyebrow: "Fixture design",
      heading: "A four-variant fixture family structures the retail display system.",
      standfirst:
        "A documented family of custom retail fixtures supported by two source-based interior elevations. Source drawing designations D1–D4 are retained; dimensions are shown only where documented in the supplied technical package.",
      items: [
        {
          key: "D1–D4",
          title: "Custom fixture variants",
          body: "Four documented variants · 2.30 m display height · 6.00 m – 7.00 m documented lengths.",
          media: {
            src: "/media/bakka/fixture-variants.webp",
            width: 2000,
            height: 360,
            alt: "Axonometric drawings of the four custom retail fixture variants D1 to D4, shown in sequence with documented lengths and display heights",
            sourcePage: 12,
            kind: "drawing",
          },
        },
        {
          key: "A",
          title: "Elevation A · Bakery + specialty display system",
          body: "Material callouts reproduced from source drawings for design-documentation context.",
          media: {
            src: "/media/bakka/elevation-a.webp",
            width: 1362,
            height: 340,
            alt: "Interior elevation A of the bakery and specialty display system, annotated with heat fire-resistant brick, wood-pattern PVC panels and textured cementitious paint callouts",
            sourcePage: 12,
            kind: "drawing",
          },
        },
        {
          key: "B",
          title: "Elevation B · Entry + checkout + produce wall",
          body: "Material callouts reproduced from source drawings for design-documentation context.",
          media: {
            src: "/media/bakka/elevation-b.webp",
            width: 1362,
            height: 340,
            alt: "Interior elevation B of the entry, checkout and produce wall, annotated with tempered glass, plywood and textured cementitious paint callouts",
            sourcePage: 12,
            kind: "drawing",
          },
        },
      ],
    },
    {
      type: "gallery",
      id: "departments",
      eyebrow: "Interior experience",
      heading: "One retail system, expressed across key departments.",
      standfirst:
        "Department-focused perspectives show the retail design language across bakery, front of store, and refrigerated service conditions.",
      items: [
        {
          key: "01",
          title: "Bakery + specialty display",
          media: {
            src: "/media/bakka/bakery-display.webp",
            width: 1778,
            height: 996,
            alt: "The bakery department, with a brick-clad oven, timber-panelled wall and baskets of bread on display",
            sourcePage: 13,
            kind: "photograph",
          },
        },
        {
          key: "02",
          title: "Entrance + checkout + produce",
          media: {
            src: "/media/bakka/entrance-checkout.webp",
            width: 973,
            height: 446,
            alt: "The front of store, with the checkout counter beside the produce wall and its Arabic department signage",
            sourcePage: 13,
            kind: "photograph",
          },
        },
        {
          key: "03",
          title: "Meat + refrigerated display",
          media: {
            src: "/media/bakka/meat-refrigerated.webp",
            width: 973,
            height: 451,
            alt: "The meat department, with a refrigerated service counter below signage and stocked shelving",
            sourcePage: 13,
            kind: "photograph",
          },
        },
      ],
    },
  ],
  sourcePages: [9, 13],
};
