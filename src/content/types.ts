/* ---------------------------------------------------------------------------
   Content model.

   Every field is filled from the master portfolio PDF, which is the sole
   authority for project facts. Fields are optional wherever the source may not
   supply them: an absent field renders as nothing, which is always correct,
   whereas a guessed field is not.
   --------------------------------------------------------------------------- */

/** A production image derived from the master portfolio PDF. */
export interface MediaAsset {
  /** Path under /public, e.g. "/media/oxiva/aerial-visualization.avif". */
  src: string;
  width: number;
  height: number;
  /** Descriptive alt text grounded in what the drawing or render shows. */
  alt: string;
  /** Page of the master portfolio PDF this asset was extracted from. */
  sourcePage: number;
  caption?: string;
  /** Linework sits on the ivory field uncropped; renders may be cropped. */
  kind?: "render" | "photograph" | "drawing" | "diagram";
}

/**
 * A plate whose asset has not been extracted from the master portfolio yet.
 * Keeping the source page here holds the extraction backlog inside the typed
 * content, where it cannot drift out of step with the page that needs it.
 */
export interface PendingMedia {
  pending: true;
  /** What the plate will hold, e.g. "Aerial project visualization". */
  note: string;
  sourcePage: number;
  aspect?: string;
}

export type MediaSlot = MediaAsset | PendingMedia;

export function isPendingMedia(slot: MediaSlot): slot is PendingMedia {
  return "pending" in slot;
}

/** A numbered note: the "01 ARRIVAL + CHECKOUT — …" device used throughout. */
export interface KeyedNote {
  /** Reference mark, e.g. "01" or "C3". */
  key: string;
  title: string;
  body?: string;
}

/** A single labelled project fact, e.g. "Site area — 19.8 ha". */
export interface ProjectFact {
  label: string;
  value: string;
}

export interface GalleryItem {
  media: MediaSlot;
  key?: string;
  title?: string;
  body?: string;
}

/**
 * Case-study sections. Each project uses only the section types its own
 * evidence supports, so the four case studies differ in shape rather than
 * being forced into one repeated template.
 */
export type ProjectSection =
  | {
      type: "fullBleed";
      id: string;
      media: MediaSlot;
      heading?: string;
      standfirst?: string;
    }
  | {
      type: "splitMedia";
      id: string;
      media: MediaSlot;
      eyebrow?: string;
      heading?: string;
      body: string[];
      /** Which side the media occupies on wide viewports. */
      mediaSide?: "left" | "right";
    }
  | {
      type: "narrative";
      id: string;
      eyebrow?: string;
      heading?: string;
      body: string[];
    }
  | {
      /** A plan, section or elevation read alongside its numbered notes. */
      type: "diagram";
      id: string;
      eyebrow?: string;
      heading: string;
      standfirst?: string;
      media: MediaSlot;
      /** The "reading the plan" notes that interpret the drawing. */
      notes?: KeyedNote[];
      /** A denser key list, e.g. functional zones 01–09. */
      legend?: { heading: string; items: KeyedNote[] };
    }
  | {
      type: "drawings";
      id: string;
      eyebrow?: string;
      heading: string;
      standfirst?: string;
      items: GalleryItem[];
    }
  | {
      type: "gallery";
      id: string;
      eyebrow?: string;
      heading: string;
      standfirst?: string;
      items: GalleryItem[];
    }
  | {
      type: "keyList";
      id: string;
      eyebrow?: string;
      heading: string;
      standfirst?: string;
      items: KeyedNote[];
    };

export interface Project {
  slug: string;
  /** Project name exactly as the master portfolio gives it. */
  title: string;
  /** Index number the portfolio assigns, e.g. "02" for Bakka Supermarket. */
  indexNumber?: string;
  /** Subtitle line, e.g. "Retail Planning & Circulation Logic". */
  discipline?: string;
  /** The project's own thesis line, e.g. "A public landscape, shaped by the valley." */
  tagline?: string;
  location?: string;
  year?: string;
  status?: string;
  area?: string;
  /** Scope line as the source sets it, e.g. "Planning · Architecture · …". */
  scope?: string;
  /** Team credit, reproduced verbatim where the source presents a team. */
  team?: string[];
  /** Standfirst drawn from the source description. */
  summary?: string;
  facts: ProjectFact[];
  /** Lead image for the work index and the project opener. */
  cover?: MediaSlot;
  sections: ProjectSection[];
  /** Pages of the master portfolio PDF covering this project. */
  sourcePages: [number, number];
}

/** A figure from the profile sheet, e.g. "05 — Client-facing projects". */
export interface ProfileMetric {
  value: string;
  label: string;
  note?: string;
}

export interface Profile {
  name: string;
  /** Full legal form of the name, as the closing page gives it. */
  fullName?: string;
  roles: string[];
  location: string;
  availability?: string;
  /** Two-part headline from the profile sheet; the second half is emphasised. */
  headline?: { lead: string; emphasis: string };
  /** Paragraphs from the profile page of the master portfolio. */
  intro: string[];
  metrics: ProfileMetric[];
  portrait?: MediaAsset;
  email?: string;
  phone?: string;
  links: { label: string; href: string }[];
  languages?: string[];
  /** Standards familiarity as the source states it. */
  standards?: string[];
}

export interface CapabilityGroup {
  /** Sheet reference, e.g. "01". */
  key: string;
  heading: string;
  items: string[];
}
