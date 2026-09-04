import Link from "next/link";
import { MediaSlotView } from "@/components/project/MediaSlotView";
import { VerticalSeams } from "@/components/layout/VerticalSeams";
import { Label } from "@/components/ui/Label";
import { disciplines, profile, worksPeriod } from "@/content/profile";
import type { MediaSlot } from "@/content/types";

/**
 * The cover composition of the approved identity, rebuilt for the browser: a
 * narrow ivory information field against a dominant project-image field, with
 * translucent vertical layers over the image and a terracotta mark holding the
 * outer margin. The name is the page's H1; the work is one scroll away.
 */
export function HomeHero({ cover }: { cover?: MediaSlot }) {
  return (
    <section className="relative border-b border-[var(--color-rule)]">
      <div className="grid min-h-[78svh] grid-cols-1 lg:min-h-[86svh] lg:grid-cols-12">
        {/* Information field */}
        <div className="relative order-2 flex min-w-0 flex-col justify-between lg:order-1 lg:col-span-5 lg:border-r lg:border-[var(--color-rule)]">
          {/* The terracotta edge mark from the cover, held to a sliver. */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-[3px] bg-[var(--color-terracotta)] lg:block"
          />

          <div className="sheet flex items-baseline justify-between pt-8 lg:pt-10">
            <Label>Selected works</Label>
            <Label>{worksPeriod}</Label>
          </div>

          <div className="sheet py-12 lg:py-16">
            <Label className="text-[var(--color-terracotta)]">
              {disciplines.join("  ·  ")}
            </Label>

            <h1 className="display mt-6 text-[length:var(--text-display-hero)] text-[var(--color-ink)]">
              {profile.name}
            </h1>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
            />

            <p className="label mt-5 text-[var(--color-ink)]">
              {profile.roles.join("   —   ")}
            </p>

            <Link
              href="/work"
              className="group mt-10 inline-flex items-baseline gap-4 border-b border-[var(--color-ink)] pb-1 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-terracotta)]"
            >
              View selected work
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-[var(--ease-sheet)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Stacked on narrow viewports: side by side, these two labels wrap
              into each other and the corner annotation stops reading as one. */}
          <div className="sheet flex flex-col gap-2 border-t border-[var(--color-rule)] py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <Label>{profile.location}</Label>
            {profile.availability && (
              <Label className="text-[var(--color-terracotta)] sm:text-right">
                {profile.availability}
              </Label>
            )}
          </div>
        </div>

        {/* Image field */}
        <div className="relative order-1 min-h-[52svh] min-w-0 lg:order-2 lg:col-span-7 lg:min-h-0">
          {cover && (
            <MediaSlotView
              slot={cover}
              sizes="(max-width: 1024px) 100vw, 58vw"
              preload
              fill
              className="h-full"
            />
          )}
          <VerticalSeams />
        </div>
      </div>
    </section>
  );
}
