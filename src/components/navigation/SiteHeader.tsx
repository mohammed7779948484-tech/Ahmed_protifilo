import Link from "next/link";
import { profile } from "@/content/profile";
import { Label } from "@/components/ui/Label";
import { navItems } from "./nav-items";
import { MobileNav } from "./MobileNav";

/**
 * A slim sheet header: name mark at the left margin, numbered links at the
 * right, closed by a hairline datum that every page below aligns to. No blur,
 * no floating pill — the identity has no such device.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-rule)] bg-[var(--color-page)]/92 backdrop-blur-[2px]">
      <div className="sheet flex h-14 items-center justify-between gap-6 md:h-16">
        <Link
          href="/"
          className="flex items-baseline gap-3 whitespace-nowrap"
          aria-label={`${profile.name} — home`}
        >
          <span className="display text-base leading-none md:text-lg">
            {profile.name}
          </span>
          <Label className="hidden lg:inline">
            {profile.roles.join(" · ")}
          </Label>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-baseline gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="label group inline-flex items-baseline gap-2 py-2 transition-colors hover:text-[var(--color-ink)]"
                >
                  <span className="text-[var(--color-terracotta)]">
                    {item.index}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
