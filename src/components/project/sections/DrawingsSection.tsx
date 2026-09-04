import { MediaSlotView } from "../MediaSlotView";
import { SectionShell } from "../SectionShell";
import { Label } from "@/components/ui/Label";
import type { ProjectSection } from "@/content/types";

type Section = Extract<ProjectSection, { type: "drawings" }>;

/**
 * Elevations and studies stacked at full measure. Drawings are never cropped
 * into a grid cell — a 1:500 elevation loses its point the moment it is boxed —
 * so each plate takes the width it needs with its caption on the datum beside it.
 */
export function DrawingsSection({ section }: { section: Section }) {
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      heading={section.heading}
      standfirst={section.standfirst}
      tone="technical"
    >
      <ul className="flex flex-col gap-16 md:gap-20">
        {section.items.map((item, index) => (
          <li
            key={item.media.sourcePage + (item.title ?? String(index))}
            data-reveal
            className="grid gap-6 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-3 lg:col-span-2">
              {item.key && (
                <Label className="text-[var(--color-terracotta)]">
                  {item.key}
                </Label>
              )}
              {item.title && (
                <p className="mt-2 text-[0.9375rem] text-[var(--color-ink)]">
                  {item.title}
                </p>
              )}
              {item.body && (
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {item.body}
                </p>
              )}
            </div>
            <div className="md:col-span-9 lg:col-span-10">
              <MediaSlotView
                slot={item.media}
                sizes="(max-width: 768px) 100vw, 78vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
