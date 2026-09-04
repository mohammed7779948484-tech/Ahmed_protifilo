import Link from "next/link";
import { MediaSlotView } from "@/components/project/MediaSlotView";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/types";

/**
 * The selected-works index. Each entry is an asymmetric row rather than a card:
 * the reference number and title hold the ivory field, the plate takes the
 * larger share, and the rows alternate so the eye moves across the sheet.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <ul className="sheet">
      {projects.map((project, index) => {
        const mediaRight = index % 2 === 0;

        return (
          <li key={project.slug}>
            <Rule />
            <Link
              href={`/work/${project.slug}`}
              className="group grid items-center gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16"
            >
              <div
                data-reveal
                className={cn(
                  "md:col-span-4",
                  mediaRight ? "md:order-1" : "md:order-2",
                )}
              >
                <div className="flex items-baseline gap-4">
                  {project.indexNumber && (
                    <Label className="text-[var(--color-terracotta)]">
                      {project.indexNumber}
                    </Label>
                  )}
                  {project.discipline && <Label>{project.discipline}</Label>}
                </div>

                <h2 className="display mt-5 text-[length:var(--text-display-md)] text-[var(--color-ink)]">
                  {project.title}
                </h2>

                {project.tagline && (
                  <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {project.tagline}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  {project.location && <Label>{project.location}</Label>}
                  {project.year && <Label>{project.year}</Label>}
                  {project.area && <Label>{project.area}</Label>}
                </div>

                <span className="mt-8 inline-flex items-baseline gap-3 border-b border-[var(--color-ink)] pb-1 text-sm text-[var(--color-ink)] transition-colors group-hover:border-[var(--color-terracotta)]">
                  View case study
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-[var(--ease-sheet)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>

              <div
                data-reveal
                data-reveal-delay="0.08"
                className={cn(
                  "md:col-span-8",
                  mediaRight ? "md:order-2" : "md:order-1",
                )}
              >
                {project.cover && (
                  <div className="overflow-hidden">
                    <MediaSlotView
                      slot={project.cover}
                      sizes="(max-width: 768px) 100vw, 64vw"
                      aspect="16 / 9"
                      className="transition-transform duration-[1200ms] ease-[var(--ease-sheet)] group-hover:scale-[1.015]"
                    />
                  </div>
                )}
              </div>
            </Link>
          </li>
        );
      })}
      <Rule />
    </ul>
  );
}
