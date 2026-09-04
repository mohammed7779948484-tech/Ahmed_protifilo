import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { JsonLd } from "@/components/layout/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Label } from "@/components/ui/Label";
import { projects } from "@/content/projects";
import { principles, profile, statement } from "@/content/profile";
import { personSchema } from "@/lib/structured-data";

export default function HomePage() {
  const lead = projects[0];

  return (
    <>
      <JsonLd data={personSchema()} />
      <HomeHero cover={lead?.cover} />

      <section className="sheet pt-20 md:pt-28">
        <SectionHeading index="01" eyebrow="Selected work">
          Four projects, from retail interiors to a valley-scale public
          landscape.
        </SectionHeading>
      </section>

      <WorkIndex projects={projects} />

      <section className="sheet py-20 md:py-28">
        <SectionHeading index="02" eyebrow="Approach">
          {statement}
        </SectionHeading>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <ul className="flex flex-col gap-4 md:col-span-5">
            {principles.map((principle) => (
              <li
                key={principle}
                data-reveal
                className="flex items-baseline gap-4 border-t border-[var(--color-rule)] pt-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-6 shrink-0 bg-[var(--color-terracotta)]"
                />
                <span className="text-[1.0625rem] text-[var(--color-ink)]">
                  {principle}
                </span>
              </li>
            ))}
          </ul>

          <div data-reveal className="md:col-span-5 md:col-start-8">
            <Label>Based in</Label>
            <p className="mt-3 text-[0.9375rem] text-[var(--color-ink)]">
              {profile.location}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-baseline gap-3 border-b border-[var(--color-ink)] pb-1 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-terracotta)]"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
