import type { Metadata } from "next";
import { Plate } from "@/components/media/Plate";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  capabilities,
  capabilitiesHeadline,
  profile,
  profileClosing,
  toolkit,
} from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profile",
  description:
    "Ahmed Belal Al-Maytami is an architectural and interior designer based in Sana'a, Yemen, with project work across residential, commercial and retail projects in Yemen and Saudi Arabia.",
  path: "/profile",
});

export default function ProfilePage() {
  return (
    <>
      {/* Information field beside the portrait, as the source sheet sets it. */}
      <section className="grid border-b border-[var(--color-rule)] lg:grid-cols-12">
        <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1 lg:col-span-7 lg:border-r lg:border-[var(--color-rule)]">
          <div className="sheet py-14 lg:py-20">
            <Label>Profile</Label>
            {profile.headline && (
              <h1 className="display mt-7 text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
                {profile.headline.lead}
                <br />
                <em className="not-italic text-[var(--color-terracotta)]">
                  {profile.headline.emphasis}
                </em>
              </h1>
            )}
            <div
              aria-hidden="true"
              className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
            />
            <div className="prose-measure mt-8 max-w-xl">
              {profile.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative order-1 min-w-0 lg:order-2 lg:col-span-5">
          {profile.portrait && (
            <Plate
              media={profile.portrait}
              sizes="(max-width: 1024px) 100vw, 42vw"
              preload
              aspect="4 / 5"
              className="h-full"
            />
          )}
        </div>
      </section>

      <section className="sheet py-14 md:py-20">
        <Rule />
        <dl
          data-reveal
          className="grid gap-x-10 gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {profile.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="display text-[length:var(--text-display-sm)] text-[var(--color-ink)]">
                {metric.value}
              </dt>
              <dd className="label mt-3">
                {metric.label}
                {metric.note && (
                  <span className="mt-1 block opacity-70">{metric.note}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p
          data-reveal
          className="display mt-12 text-[length:var(--text-display-sm)] text-[var(--color-ink)]"
        >
          {profileClosing}
        </p>
      </section>

      <section className="sheet pb-16">
        <SectionHeading index="01" eyebrow="Capabilities">
          {capabilitiesHeadline.lead} {capabilitiesHeadline.emphasis}
        </SectionHeading>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {capabilities.map((group) => (
            <div
              key={group.key}
              data-reveal
              className="border-t border-[var(--color-rule)] pt-4"
            >
              <div className="flex items-baseline gap-3">
                <Label className="text-[var(--color-terracotta)]">
                  {group.key}
                </Label>
                <Label tone="ink">{group.heading}</Label>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
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

      <section className="sheet pb-24">
        <Rule />
        <div className="flex flex-col gap-6 pt-4 md:flex-row md:items-baseline md:gap-12">
          <Label className="shrink-0 md:w-56">Digital toolkit</Label>
          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {toolkit.map((tool) => (
              <li
                key={tool}
                className="display text-[1.375rem] text-[var(--color-ink)]"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {profile.standards && profile.standards.length > 0 && (
            <div data-reveal className="border-t border-[var(--color-rule)] pt-4">
              <Label>Standards</Label>
              <p className="mt-2 text-[0.9375rem] text-[var(--color-ink)]">
                {profile.standards.join(" · ")}
              </p>
            </div>
          )}
          {profile.languages && profile.languages.length > 0 && (
            <div data-reveal className="border-t border-[var(--color-rule)] pt-4">
              <Label>Languages</Label>
              <p className="mt-2 text-[0.9375rem] text-[var(--color-ink)]">
                {profile.languages.join(" · ")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
