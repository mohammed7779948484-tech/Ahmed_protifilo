import { cn } from "@/lib/cn";

interface RuleProps {
  /** "hair" is the 0.25pt-equivalent datum; "thin" is the structural rule. */
  weight?: "hair" | "thin";
  tone?: "rule" | "strong" | "accent";
  className?: string;
}

const weights = {
  hair: "h-px opacity-70",
  thin: "h-px",
} as const;

const tones = {
  rule: "bg-[var(--color-rule)]",
  strong: "bg-[var(--color-rule-strong)]",
  accent: "bg-[var(--color-terracotta)]",
} as const;

/** A horizontal datum line. Decorative, so it is hidden from assistive tech. */
export function Rule({ weight = "hair", tone = "rule", className }: RuleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full", weights[weight], tones[tone], className)}
    />
  );
}
