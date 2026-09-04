import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Label } from "./Label";
import { Rule } from "./Rule";

interface SectionHeadingProps {
  /** Sheet reference, e.g. "02". */
  index?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** Heading level — sections choose their own place in the outline. */
  level?: 2 | 3;
}

/**
 * A numbered section head sitting on a datum line, mirroring the way the
 * approved identity numbers its blocks (01 COLOR SYSTEM, 02 LAYOUT DNA…).
 */
export function SectionHeading({
  index,
  eyebrow,
  children,
  className,
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";

  return (
    <div className={cn("w-full", className)}>
      <Rule />
      <div className="flex flex-col gap-6 pt-4 md:flex-row md:items-baseline md:gap-10">
        {(index || eyebrow) && (
          <div className="flex shrink-0 items-baseline gap-3 md:w-40">
            {index && <Label tone="ink">{index}</Label>}
            {eyebrow && <Label>{eyebrow}</Label>}
          </div>
        )}
        <Tag className="display text-[length:var(--text-display-sm)] text-[var(--color-ink)]">
          {children}
        </Tag>
      </div>
    </div>
  );
}
