import { MediaSlotView } from "../MediaSlotView";
import { SectionShell } from "../SectionShell";
import { Label } from "@/components/ui/Label";
import type { ProjectSection } from "@/content/types";

type Section = Extract<ProjectSection, { type: "gallery" }>;

/**
 * Image-led sheet: three experiences across the field, each carrying its own
 * numbered caption. The plates lead and the text stays subordinate.
 */
export function GallerySection({ section }: { section: Section }) {
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      heading={section.heading}
      standfirst={section.standfirst}
    >
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-3">
        {section.items.map((item, index) => (
          <li
            key={item.media.sourcePage + (item.title ?? String(index))}
            data-reveal
            data-reveal-delay={index * 0.08}
          >
            <MediaSlotView
              slot={item.media}
              sizes="(max-width: 768px) 100vw, 32vw"
            />
            {(item.key || item.title) && (
              <div className="mt-4 flex items-baseline gap-3 border-t border-[var(--color-rule)] pt-3">
                {item.key && (
                  <Label className="shrink-0 text-[var(--color-terracotta)]">
                    {item.key}
                  </Label>
                )}
                <div>
                  {item.title && (
                    <p className="text-[0.9375rem] text-[var(--color-ink)]">
                      {item.title}
                    </p>
                  )}
                  {item.body && (
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-[var(--color-ink-muted)]">
                      {item.body}
                    </p>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
