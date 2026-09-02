import type { CapabilityGroup, Profile } from "./types";

/**
 * All values are taken from the master portfolio PDF — the cover (page 1) and
 * the contact / closing page (page 23). The profile paragraphs on page 2 and
 * the capabilities list on page 3 are not yet recovered from the source, so
 * `intro` and `capabilities` stay empty: an empty array renders as nothing,
 * which is correct, whereas invented biography would not be.
 */
export const profile: Profile = {
  name: "Ahmed Belal Al-Maytami",
  /** The closing page gives the full legal form of the name. */
  fullName: "Ahmed Belal Ali Al-Maytami",
  roles: ["Architectural Designer", "Interior Designer"],
  location: "Sana'a, Yemen",
  availability: "Open to relocation to Saudi Arabia",
  intro: [],
  email: "ahmedb24b@gmail.com",
  phone: "+967 775 537 891",
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmed-belal-al-maytami",
    },
    { label: "Portfolio", href: "https://ahmedbelalmaytami.me" },
  ],
};

/** Statement from the closing page of the master portfolio. */
export const statement = "Design ideas, clearly resolved.";

/** The two qualities the closing page sets against the name. */
export const principles = [
  "Clear spatial thinking",
  "Precise design documentation",
];

/** Opportunity line from the closing page. */
export const openTo =
  "Open to architectural & interior design opportunities";

/** Disciplines named on the portfolio cover. */
export const disciplines = ["Architecture", "Interior", "Visualization"];

export const worksPeriod = "2024 — 2026";

/** Populated from page 3 of the master portfolio (capabilities / tools). */
export const capabilities: CapabilityGroup[] = [];
