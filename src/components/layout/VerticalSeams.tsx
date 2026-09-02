import { cn } from "@/lib/cn";

interface VerticalSeamsProps {
  /** Fractional positions across the field, 0–1. */
  at?: number[];
  className?: string;
}

/**
 * The translucent vertical layers of the approved identity: a warm veil with a
 * hairline leading edge, laid over the image field to create depth without
 * obscuring anything. Purely decorative.
 */
export function VerticalSeams({
  at = [0.34, 0.62],
  className,
}: VerticalSeamsProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {at.map((position, index) => (
        <div
          key={position}
          className="absolute inset-y-0"
          style={{
            left: `${position * 100}%`,
            width: `${index % 2 === 0 ? 14 : 9}%`,
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--color-ivory) 34%, transparent), color-mix(in srgb, var(--color-ivory) 8%, transparent))",
          }}
        >
          <div className="absolute inset-y-0 left-0 w-px bg-[color-mix(in_srgb,var(--color-ivory)_45%,transparent)]" />
        </div>
      ))}
    </div>
  );
}
