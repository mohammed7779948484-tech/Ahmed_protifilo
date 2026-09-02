import type { Project } from "../types";

/**
 * Master portfolio pages 9–13. Pages 10 and 11 are recovered from the source
 * text layer; the opener (9) and pages 12–13 are still to be read from the
 * PDF, so their sections are added once that evidence is in hand.
 */
export const bakkaSupermarket: Project = {
  slug: "bakka-supermarket",
  title: "Bakka Supermarket",
  indexNumber: "02",
  discipline: "Retail Planning & Circulation Logic",
  tagline: "Retail planning through clear spatial order.",
  scope:
    "Retail Planning · Interior Design · Fixture Design · Ceiling & Lighting Design · 3D Visualization",
  facts: [
    {
      label: "Scope",
      value:
        "Retail Planning · Interior Design · Fixture Design · 3D Visualization",
    },
  ],
  cover: {
    pending: true,
    note: "Retail interior visualization",
    sourcePage: 9,
    aspect: "16 / 9",
  },
  sections: [
    {
      type: "diagram",
      id: "retail-plan",
      eyebrow: "Retail planning & circulation logic",
      heading: "Four spatial anchors structure the retail plan.",
      standfirst: "Retail floor plan · spatial organization",
      media: {
        pending: true,
        note: "Retail floor plan · spatial organization",
        sourcePage: 10,
        aspect: "16 / 10",
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
      eyebrow: "Ceiling & lighting design logic",
      heading: "The ceiling system extends the retail grid.",
      standfirst: "Reflected ceiling plan · aisle rhythm + localized zones",
      media: {
        pending: true,
        note: "Reflected ceiling plan",
        sourcePage: 11,
        aspect: "16 / 10",
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
  ],
  sourcePages: [9, 13],
};
