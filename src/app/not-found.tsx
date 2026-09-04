import Link from "next/link";
import { Label } from "@/components/ui/Label";

export default function NotFound() {
  return (
    <section className="sheet flex min-h-[60svh] flex-col justify-center py-24">
      <Label>Error 404</Label>
      <h1 className="display mt-6 text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
        This sheet is not in the set.
      </h1>
      <div
        aria-hidden="true"
        className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
      />
      <Link
        href="/work"
        className="mt-10 inline-flex w-fit items-baseline gap-3 border-b border-[var(--color-ink)] pb-1 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-terracotta)]"
      >
        Return to selected work
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
