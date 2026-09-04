import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import type { ProjectFact } from "@/content/types";

/** The project-data block, set as a sheet title panel rather than as cards. */
export function ProjectFacts({ facts }: { facts: ProjectFact[] }) {
  if (facts.length === 0) return null;

  return (
    <section className="sheet py-14 md:py-16">
      <Rule />
      <div data-reveal className="flex flex-col gap-8 pt-4 md:flex-row md:gap-12">
        <Label className="shrink-0 md:w-56">Project data</Label>
        <dl className="grid flex-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-2 text-[0.9375rem] text-[var(--color-ink)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
