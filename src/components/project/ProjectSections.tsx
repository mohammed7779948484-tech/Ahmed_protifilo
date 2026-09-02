import type { ProjectSection } from "@/content/types";
import { DiagramSection } from "./sections/DiagramSection";
import { DrawingsSection } from "./sections/DrawingsSection";
import { GallerySection } from "./sections/GallerySection";
import {
  FullBleedSection,
  KeyListSection,
  NarrativeSection,
  SplitMediaSection,
} from "./sections/SimpleSections";

/**
 * Dispatches each section to its renderer. Exhaustive over the union, so a new
 * section type is a type error here until it is given a treatment.
 */
export function ProjectSections({ sections }: { sections: ProjectSection[] }) {
  return (
    <>
      {sections.map((section) => {
        switch (section.type) {
          case "diagram":
            return <DiagramSection key={section.id} section={section} />;
          case "drawings":
            return <DrawingsSection key={section.id} section={section} />;
          case "gallery":
            return <GallerySection key={section.id} section={section} />;
          case "fullBleed":
            return <FullBleedSection key={section.id} section={section} />;
          case "splitMedia":
            return <SplitMediaSection key={section.id} section={section} />;
          case "narrative":
            return <NarrativeSection key={section.id} section={section} />;
          case "keyList":
            return <KeyListSection key={section.id} section={section} />;
        }
      })}
    </>
  );
}
