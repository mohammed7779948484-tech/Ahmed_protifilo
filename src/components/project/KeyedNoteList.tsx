import type { KeyedNote } from "@/content/types";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/Label";

interface KeyedNoteListProps {
  items: KeyedNote[];
  /** "notes" gives each item room to read; "legend" is a dense key list. */
  variant?: "notes" | "legend";
  className?: string;
}

/**
 * The numbered reading device the portfolio uses to interpret its own drawings
 * ("01 ARRIVAL + CHECKOUT — Front-of-store arrival zone…"). The reference mark
 * is the only place terracotta appears in a technical section.
 */
export function KeyedNoteList({
  items,
  variant = "notes",
  className,
}: KeyedNoteListProps) {
  if (items.length === 0) return null;

  return (
    <ul
      className={cn(
        variant === "notes"
          ? "grid gap-x-10 gap-y-8 sm:grid-cols-2"
          : "grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={`${item.key}-${item.title}`}
          className={cn(
            "flex gap-4",
            variant === "notes" &&
              "border-t border-[var(--color-rule)] pt-4",
          )}
        >
          <Label className="shrink-0 pt-[0.2em] text-[var(--color-terracotta)]">
            {item.key}
          </Label>
          <div>
            <p
              className={cn(
                "text-[var(--color-ink)]",
                variant === "notes"
                  ? "text-[0.9375rem] font-medium"
                  : "text-[0.875rem]",
              )}
            >
              {item.title}
            </p>
            {item.body && (
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-[var(--color-ink-muted)]">
                {item.body}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
