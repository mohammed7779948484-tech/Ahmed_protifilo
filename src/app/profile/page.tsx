import type { Metadata } from "next";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  capabilities,
  disciplines,
  principles,
  profile,
  statement,
} from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profile",
  description:
    "Ahmed Belal Al-Maytami is an architectural and interior designer based in Sana'a, Yemen, working across architecture, interiors and visualization.",
  path: "/profile",
});

export default function ProfilePage() {
  return (
    <>
      <header className="sheet pt-16 pb-12 md:pt-24 md:pb-16">
        <Label>Profile</Label>
        <h1 className="display mt-8 text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
          {profile.fullName ?? profile.name}
        </h1>
        <div
          aria-hidden="true"
          className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
        />
        <p className="label mt-6 text-[var(--color-ink)]">
          {profile.roles.join("   —   ")}
        </p>
      </header>

      <section className="sheet pb-16">
        <Rule />
        <div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-12">
          <Label className="shrink-0 md:col-span-3">Statement</Label>
          <div className="md:col-span-9">
            <p className="display text-[length:var(--text-display-md)] text-[var(--color-ink)]">
              {statement}
            </p>
            {profile.intro.length > 0 && (
              <div className="prose-measure mt-8">
                {profile.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sheet pb-16">
        <SectionHeading index="01" eyebrow="Disciplines">
          Architecture, interiors and the drawings that resolve them.
        </SectionHeading>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-3">
          {disciplines.map((discipline) => (
            <li
              key={discipline}
              data-reveal
              className="border-t border-[var(--color-rule)] pt-4 text-[1.0625rem] text-[var(--color-ink)]"
            >
              {discipline}
            </li>
          ))}
        </ul>
      </section>

      <section className="sheet pb-24">
        <SectionHeading index="02" eyebrow="Principles">
          How the work is made.
        </SectionHeading>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
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
      </section>

      {capabilities.length > 0 && (
        <section className="sheet pb-24">
          <SectionHeading index="03" eyebrow="Capabilities">
            Tools and methods.
          </SectionHeading>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((group) => (
              <div key={group.heading} data-reveal>
                <Label className="text-[var(--color-terracotta)]">
                  {group.heading}
                </Label>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.9375rem] text-[var(--color-ink-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
