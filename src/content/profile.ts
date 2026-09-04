import type { CapabilityGroup, Profile } from "./types";

/**
 * Master portfolio pages 2 (profile), 3 (capabilities) and 23 (contact).
 * Every string here is transcribed from those sheets.
 */
export const profile: Profile = {
  name: "Ahmed Belal Al-Maytami",
  fullName: "Ahmed Belal Ali Al-Maytami",
  roles: ["Architectural Designer", "Interior Designer"],
  location: "Sana'a, Yemen",
  availability: "Open to relocation to Saudi Arabia",
  headline: { lead: "Spatial clarity,", emphasis: "from brief to build." },
  intro: [
    "Architectural Designer and Interior Designer with professional experience at an engineering and contracting firm and project work across residential, commercial, and retail projects in Yemen and Saudi Arabia.",
    "My work spans client requirements, space planning, design development, Revit-based 3D modeling, architectural documentation, visualization, and site supervision support. I focus on translating project requirements into functional, visually coherent, and clearly documented design solutions.",
  ],
  metrics: [
    { value: "05", label: "Client-facing projects" },
    { value: "02", label: "Implemented designs" },
    { value: "02", label: "Projects under construction" },
    { value: "02", label: "Project markets", note: "Yemen · Saudi Arabia" },
  ],
  portrait: {
    src: "/media/profile/portrait.webp",
    width: 956,
    height: 2200,
    alt: "Portrait of Ahmed Belal Al-Maytami",
    sourcePage: 2,
    kind: "photograph",
  },
  email: "ahmedb24b@gmail.com",
  phone: "+967 775 537 891",
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmed-belal-al-maytami",
    },
    { label: "Portfolio", href: "https://ahmedbelalmaytami.me" },
  ],
  languages: ["Arabic", "English"],
  standards: ["Saudi Building Code (SBC) familiarity"],
};

/** Closing line of the profile sheet. */
export const profileClosing =
  "Design grounded in function, documentation & atmosphere.";

/** Statement from the closing page of the master portfolio. */
export const statement = "Design ideas, clearly resolved.";

/** The two qualities the closing page sets against the name. */
export const principles = [
  "Clear spatial thinking",
  "Precise design documentation",
];

/** Opportunity line from the closing page. */
export const openTo = "Open to architectural & interior design opportunities";

/** Disciplines named on the portfolio cover. */
export const disciplines = ["Architecture", "Interior", "Visualization"];

export const worksPeriod = "2024 — 2026";

/** Page 3 — "Capabilities for clear design decisions." */
export const capabilitiesHeadline = {
  lead: "Capabilities for",
  emphasis: "clear design decisions.",
};

export const capabilities: CapabilityGroup[] = [
  {
    key: "01",
    heading: "Design & Space",
    items: [
      "Architectural Design",
      "Interior Design & Space Planning",
      "Facade Design",
      "Site Planning",
      "Design Development",
    ],
  },
  {
    key: "02",
    heading: "Documentation & Technical Support",
    items: [
      "Architectural Documentation",
      "Construction Drawings",
      "BOQs",
      "Technical Specifications",
      "Site Supervision Support",
    ],
  },
  {
    key: "03",
    heading: "Modeling & Visualization",
    items: ["Revit-based 3D Modeling", "Architectural Visualization"],
  },
];

/** Digital toolkit named on page 3. */
export const toolkit = [
  "Revit",
  "AutoCAD",
  "SketchUp",
  "Enscape",
  "Lumion",
  "Adobe Photoshop",
];
