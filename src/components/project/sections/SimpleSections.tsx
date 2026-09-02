import { MediaSlotView } from "../MediaSlotView";
import { KeyedNoteList } from "../KeyedNoteList";
import { SectionShell } from "../SectionShell";
import { VerticalSeams } from "@/components/layout/VerticalSeams";
import { cn } from "@/lib/cn";
import type { ProjectSection } from "@/content/types";

type Narrative = Extract<ProjectSection, { type: "narrative" }>;
type FullBleed = Extract<ProjectSection, { type: "fullBleed" }>;
type SplitMedia = Extract<ProjectSection, { type: "splitMedia" }>;
type KeyList = Extract<ProjectSection, { type: "keyList" }>;

/** A text-only passage — the design thesis, or a terrain reading. */
export function NarrativeSection({ section }: { section: Narrative }) {
  return (
    <SectionShell id={section.id} eyebrow={section.eyebrow}>
      <div data-reveal className="grid gap-8 md:grid-cols-12">
        {section.heading && (
          <h2 className="display text-[length:var(--text-display-md)] text-[var(--color-ink)] md:col-span-7">
            {section.heading}
          </h2>
        )}
        <div className="prose-measure md:col-span-5">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/** A render given the full field, with the identity's translucent layers. */
export function FullBleedSection({ section }: { section: FullBleed }) {
  return (
    <section id={section.id} className="py-12 md:py-16">
      <div data-reveal className="relative">
        <MediaSlotView slot={section.media} sizes="100vw" />
        <VerticalSeams at={[0.28, 0.7]} />
      </div>
      {(section.heading || section.standfirst) && (
        <div className="sheet mt-5 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          {section.heading && (
            <p className="label text-[var(--color-ink)]">{section.heading}</p>
          )}
          {section.standfirst && (
            <p className="label md:text-right">{section.standfirst}</p>
          )}
        </div>
      )}
    </section>
  );
}

/** Media on one side, narrative on the other — asymmetric by design. */
export function SplitMediaSection({ section }: { section: SplitMedia }) {
  const mediaLeft = section.mediaSide !== "right";

  return (
    <SectionShell id={section.id} eyebrow={section.eyebrow}>
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div
          data-reveal
          className={cn(
            "md:col-span-7",
            mediaLeft ? "md:order-1" : "md:order-2",
          )}
        >
          <MediaSlotView
            slot={section.media}
            sizes="(max-width: 768px) 100vw, 56vw"
          />
        </div>
        <div
          data-reveal
          data-reveal-delay="0.1"
          className={cn(
            "md:col-span-5",
            mediaLeft ? "md:order-2" : "md:order-1",
          )}
        >
          {section.heading && (
            <h2 className="display text-[length:var(--text-display-sm)] text-[var(--color-ink)]">
              {section.heading}
            </h2>
          )}
          <div className="prose-measure mt-5">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/** A numbered reading of the site or brief, without a drawing beside it. */
export function KeyListSection({ section }: { section: KeyList }) {
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      heading={section.heading}
      standfirst={section.standfirst}
      tone="technical"
    >
      <div data-reveal>
        <KeyedNoteList items={section.items} />
      </div>
    </SectionShell>
  );
}
