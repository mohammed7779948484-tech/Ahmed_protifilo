import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  heading?: string;
  standfirst?: string;
  children: ReactNode;
  /** Technical sheets sit lighter and tighter than image-led ones. */
  tone?: "default" | "technical";
  className?: string;
}

/**
 * The common head of every case-study section: a datum, an eyebrow, and the
 * section heading. Keeping it in one place is what makes the datum lines align
 * from section to section and from project to project.
 */
export function SectionShell({
  id,
  eyebrow,
  heading,
  standfirst,
  children,
  tone = "default",
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "sheet",
        tone === "technical" ? "py-16 md:py-20" : "py-20 md:py-28",
        className,
      )}
    >
      {(eyebrow || heading) && (
        <header data-reveal className="mb-10 md:mb-14">
          <Rule />
          <div className="flex flex-col gap-5 pt-4 md:flex-row md:gap-12">
            {eyebrow && (
              <Label className="shrink-0 pt-1 md:w-56">{eyebrow}</Label>
            )}
            <div className="max-w-3xl">
              {heading && (
                <h2 className="display text-[length:var(--text-display-sm)] text-[var(--color-ink)]">
                  {heading}
                </h2>
              )}
              {standfirst && (
                <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {standfirst}
                </p>
              )}
            </div>
          </div>
        </header>
      )}
      {children}
    </section>
  );
}
