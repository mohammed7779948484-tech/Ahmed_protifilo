import Link from "next/link";
import { profile, worksPeriod } from "@/content/profile";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { navItems } from "@/components/navigation/nav-items";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-[var(--color-espresso)] text-[var(--color-ivory)] md:mt-44">
      <div className="sheet py-14 md:py-20">
        <Rule className="bg-[color-mix(in_srgb,var(--color-ivory)_22%,transparent)]" />

        <div className="grid gap-12 pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="display text-[length:var(--text-display-md)]">
              {profile.name}
            </p>
            <p className="label mt-4 text-[color-mix(in_srgb,var(--color-ivory)_70%,transparent)]">
              {profile.roles.join("  —  ")}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <Label className="text-[color-mix(in_srgb,var(--color-ivory)_55%,transparent)]">
              Index
            </Label>
            <ul className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[color-mix(in_srgb,var(--color-ivory)_82%,transparent)] transition-colors hover:text-[var(--color-ivory)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <Label className="text-[color-mix(in_srgb,var(--color-ivory)_55%,transparent)]">
              Based in
            </Label>
            <p className="mt-4 text-sm text-[color-mix(in_srgb,var(--color-ivory)_82%,transparent)]">
              {profile.location}
            </p>
            {profile.availability && (
              <p className="mt-2 text-sm text-[var(--color-terracotta)]">
                {profile.availability}
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Label className="text-[color-mix(in_srgb,var(--color-ivory)_45%,transparent)]">
            Selected works {worksPeriod}
          </Label>
          <Label className="text-[color-mix(in_srgb,var(--color-ivory)_45%,transparent)]">
            © {new Date().getFullYear()} {profile.name}
          </Label>
        </div>
      </div>
    </footer>
  );
}
