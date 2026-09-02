import type { Metadata } from "next";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { openTo, profile, statement } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Ahmed Belal Al-Maytami — architectural and interior designer, Sana'a, Yemen. Open to architectural and interior design opportunities.",
  path: "/contact",
});

/** Contact channels exactly as the closing page of the portfolio lists them. */
function contactRows() {
  const rows: { label: string; value: string; href?: string }[] = [];
  if (profile.email) {
    rows.push({
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    });
  }
  if (profile.phone) {
    rows.push({
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    });
  }
  for (const link of profile.links) {
    rows.push({
      label: link.label,
      value: link.href.replace(/^https?:\/\//, ""),
      href: link.href,
    });
  }
  return rows;
}

export default function ContactPage() {
  const rows = contactRows();

  return (
    <>
      <header className="sheet pt-16 pb-12 md:pt-24 md:pb-16">
        <Label>Contact</Label>
        <h1 className="display mt-8 text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
          {statement}
        </h1>
        <div
          aria-hidden="true"
          className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
        />
        <p className="label mt-6 text-[var(--color-ink)]">{openTo}</p>
      </header>

      <section className="sheet pb-24">
        <Rule />
        <dl className="grid gap-x-12 pt-4 md:grid-cols-12">
          <dt className="sr-only">Contact details</dt>
          <dd className="md:col-span-8 md:col-start-4">
            <ul>
              {rows.map((row) => (
                <li
                  key={row.label}
                  data-reveal
                  className="border-b border-[var(--color-rule)] py-6"
                >
                  <Label>{row.label}</Label>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="mt-2 block w-fit border-b border-transparent text-[1.0625rem] text-[var(--color-ink)] transition-colors hover:border-[var(--color-terracotta)]"
                      {...(row.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-[1.0625rem] text-[var(--color-ink)]">
                      {row.value}
                    </p>
                  )}
                </li>
              ))}

              <li data-reveal className="border-b border-[var(--color-rule)] py-6">
                <Label>Based in</Label>
                <p className="mt-2 text-[1.0625rem] text-[var(--color-ink)]">
                  {profile.location}
                </p>
                {profile.availability && (
                  <p className="mt-1 text-[0.9375rem] text-[var(--color-ink-muted)]">
                    {profile.availability}
                  </p>
                )}
              </li>
            </ul>

            <p className="label mt-12">Thank you for your consideration.</p>
          </dd>
        </dl>
      </section>
    </>
  );
}
