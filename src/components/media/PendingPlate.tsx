import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/Label";

interface PendingPlateProps {
  /** Page of the master portfolio PDF this plate will be extracted from. */
  sourcePage?: number | [number, number];
  /** What the plate will hold, e.g. "Forecourt render". */
  note?: string;
  aspect?: string;
  className?: string;
}

/**
 * Placeholder for a plate whose source asset has not been extracted yet.
 *
 * Deliberately a drawing-sheet frame rather than a stock or generated image:
 * the portfolio may only ever show Ahmed's own work, so an empty, labelled
 * field is the only honest stand-in. Every one of these disappears as the
 * corresponding asset is extracted from the master portfolio PDF.
 */
export function PendingPlate({
  sourcePage,
  note,
  aspect = "4 / 3",
  className,
}: PendingPlateProps) {
  const page = Array.isArray(sourcePage)
    ? `Pages ${sourcePage[0]}–${sourcePage[1]}`
    : sourcePage !== undefined
      ? `Page ${sourcePage}`
      : undefined;

  return (
    <div
      role="img"
      aria-label={`Project media pending extraction from the master portfolio${page ? `, ${page.toLowerCase()}` : ""}`}
      style={{ aspectRatio: aspect }}
      className={cn(
        "relative flex w-full items-center justify-center border border-dashed border-[var(--color-rule-strong)] bg-[var(--color-panel)]",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <Label className="text-[var(--color-terracotta)]">
          Awaiting source asset
        </Label>
        {note && <Label>{note}</Label>}
        {page && <Label>{page}</Label>}
      </div>
    </div>
  );
}
