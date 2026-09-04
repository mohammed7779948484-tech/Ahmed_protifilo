import { cn } from "@/lib/cn";

/**
 * Faint full-height column guides, aligned to the same margins as `.sheet`, so
 * the underlying grid reads as drawing-sheet construction rather than as a
 * decorative pattern. Purely decorative.
 */
export function DatumGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div className="sheet mx-auto grid h-full grid-cols-4 md:grid-cols-12">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "h-full border-l border-[var(--color-rule)] opacity-45",
              index >= 4 && "hidden md:block",
            )}
          />
        ))}
      </div>
    </div>
  );
}
