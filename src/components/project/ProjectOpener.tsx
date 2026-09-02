import { MediaSlotView } from "./MediaSlotView";
import { VerticalSeams } from "@/components/layout/VerticalSeams";
import { Label } from "@/components/ui/Label";
import type { Project } from "@/content/types";

/**
 * The expressive opener the identity calls for: title held in the ivory
 * information field, the project's own image field beside it, and the team
 * credit carried at the foot where the source sheets carry it.
 */
export function ProjectOpener({ project }: { project: Project }) {
  return (
    <header className="border-b border-[var(--color-rule)]">
      <div className="grid lg:grid-cols-12">
        <div className="relative order-2 flex flex-col justify-between lg:order-1 lg:col-span-5 lg:border-r lg:border-[var(--color-rule)]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-[3px] bg-[var(--color-terracotta)] lg:block"
          />

          <div className="sheet flex items-baseline justify-between pt-8">
            {project.indexNumber && (
              <Label tone="ink">{project.indexNumber}</Label>
            )}
            {project.discipline && <Label>{project.discipline}</Label>}
          </div>

          <div className="sheet py-12 lg:py-16">
            <h1 className="display text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
              {project.title}
            </h1>

            {project.tagline && (
              <>
                <div
                  aria-hidden="true"
                  className="mt-7 h-px w-24 bg-[var(--color-terracotta)]"
                />
                <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {project.tagline}
                </p>
              </>
            )}

            {project.summary && (
              <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                {project.summary}
              </p>
            )}
          </div>

          <div className="sheet border-t border-[var(--color-rule)] py-5">
            {project.team && project.team.length > 0 && (
              <div className="mb-3">
                <Label className="text-[var(--color-terracotta)]">
                  Academic team project
                </Label>
                <p className="label mt-1.5 text-[var(--color-ink)]">
                  {project.team.join("  +  ")}
                </p>
              </div>
            )}
            {project.scope && <Label>{project.scope}</Label>}
          </div>
        </div>

        <div className="relative order-1 min-h-[46svh] lg:order-2 lg:col-span-7">
          {project.cover && (
            <MediaSlotView
              slot={project.cover}
              sizes="(max-width: 1024px) 100vw, 58vw"
              preload
              className="h-full"
            />
          )}
          <VerticalSeams />
        </div>
      </div>
    </header>
  );
}
