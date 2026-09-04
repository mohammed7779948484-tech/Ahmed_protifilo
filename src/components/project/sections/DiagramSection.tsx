import { MediaSlotView } from "../MediaSlotView";
import { KeyedNoteList } from "../KeyedNoteList";
import { SectionShell } from "../SectionShell";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import type { ProjectSection } from "@/content/types";

type Section = Extract<ProjectSection, { type: "diagram" }>;

/**
 * A plan or reflected ceiling plan read against its notes. Technical sheets are
 * the lightest and most precise pages in the identity, so the drawing gets the
 * full measure and the notes sit beneath it rather than crowding its margin.
 */
export function DiagramSection({ section }: { section: Section }) {
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      heading={section.heading}
      standfirst={section.standfirst}
      tone="technical"
    >
      <div data-reveal>
        <MediaSlotView
          slot={section.media}
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </div>

      {section.notes && section.notes.length > 0 && (
        <div data-reveal className="mt-12">
          <Label className="mb-6 block">Reading the drawing</Label>
          <KeyedNoteList items={section.notes} />
        </div>
      )}

      {section.legend && (
        <div data-reveal className="mt-14">
          <Rule />
          <Label className="mt-4 mb-6 block">{section.legend.heading}</Label>
          <KeyedNoteList items={section.legend.items} variant="legend" />
        </div>
      )}
    </SectionShell>
  );
}
