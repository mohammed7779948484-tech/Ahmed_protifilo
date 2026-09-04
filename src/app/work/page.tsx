import type { Metadata } from "next";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { Label } from "@/components/ui/Label";
import { projects } from "@/content/projects";
import { worksPeriod } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Selected Work",
  description:
    "Selected architectural, interior and visualization projects by Ahmed Belal Al-Maytami, 2024–2026.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <header className="sheet pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex items-baseline justify-between">
          <Label>Index</Label>
          <Label>{worksPeriod}</Label>
        </div>
        <h1 className="display mt-8 text-[length:var(--text-display-lg)] text-[var(--color-ink)]">
          Selected Work
        </h1>
        <div
          aria-hidden="true"
          className="mt-8 h-px w-24 bg-[var(--color-terracotta)]"
        />
      </header>

      <WorkIndex projects={projects} />
    </>
  );
}
