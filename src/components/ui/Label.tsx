import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface LabelProps {
  children: ReactNode;
  as?: ElementType;
  tone?: "muted" | "ink";
  className?: string;
}

/** Tracked uppercase mono — the drawing-sheet annotation voice. */
export function Label({
  children,
  as: Tag = "span",
  tone = "muted",
  className,
}: LabelProps) {
  return (
    <Tag
      className={cn(
        "label",
        tone === "ink" && "text-[var(--color-ink)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
