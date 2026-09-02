import type { Project } from "../types";

/**
 * Master portfolio pages 5–8, and the cover render on page 1.
 *
 * Only the cover attribution is recovered from the source so far; the sheets
 * themselves are read from the PDF before any further facts are recorded here.
 */
export const rahhalFuelStation: Project = {
  slug: "rahhal-fuel-station",
  title: "Rahhal Fuel Station",
  indexNumber: "01",
  discipline: "Architectural Visualization",
  facts: [],
  cover: {
    pending: true,
    note: "Forecourt render · cover image",
    sourcePage: 1,
    aspect: "16 / 9",
  },
  sections: [],
  sourcePages: [5, 8],
};
