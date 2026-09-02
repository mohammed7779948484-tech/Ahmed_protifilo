import type { Project } from "../types";
import { oxivaLandscapeSections } from "./oxiva-ibb.landscapes";
import { oxivaSiteSections } from "./oxiva-ibb.sections";

/**
 * Academic graduation project, master portfolio pages 16–22.
 *
 * The source presents this as an academic TEAM project. The team credit below
 * is reproduced exactly as the portfolio prints it on every OXIVA sheet and
 * must never be dropped, shortened or paraphrased.
 */
export const oxivaIbb: Project = {
  slug: "oxiva-ibb",
  title: "OXIVA IBB",
  indexNumber: "04",
  discipline: "Academic Graduation Project",
  tagline: "A public landscape, shaped by the valley.",
  summary:
    "Planning and Design of a Social, Sports and Entertainment Complex",
  location: "Wadi Al-Ma'ayin, Ibb, Yemen",
  year: "2024",
  area: "19.8 ha",
  status: "Tamayouz 2025 · Competition Submission",
  scope: "Planning · Architecture · Landscape Integration · Visualization",
  team: ["Ahmed Belal Al-Maytami", "Osama Mohammed Ahmed Zain"],
  facts: [
    { label: "Location", value: "Wadi Al-Ma'ayin, Ibb, Yemen" },
    { label: "Year", value: "2024" },
    { label: "Site area", value: "19.8 ha" },
    { label: "Project type", value: "Academic Graduation Project" },
    { label: "Project format", value: "Academic Team Project" },
    { label: "Status", value: "Tamayouz 2025 · Competition Submission" },
  ],
  cover: {
    src: "/media/oxiva/aerial-visualization.webp",
    width: 1851,
    height: 1040,
    alt: "Aerial visualization of the OXIVA IBB complex, its programmed zones and path network laid across the terraced valley floor",
    sourcePage: 16,
    kind: "render",
  },
  sections: [...oxivaSiteSections, ...oxivaLandscapeSections],
  sourcePages: [16, 22],
};
