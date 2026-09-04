import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { ProjectFacts } from "@/components/project/ProjectFacts";
import { ProjectOpener } from "@/components/project/ProjectOpener";
import { ProjectSections } from "@/components/project/ProjectSections";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { getAdjacentProject, getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { projectSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return pageMetadata({ title: "Not found" });

  return pageMetadata({
    title: project.title,
    description:
      project.summary ??
      project.tagline ??
      `${project.title} — a project by Ahmed Belal Al-Maytami.`,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectOpener project={project} />
      <ProjectFacts facts={project.facts} />
      <ProjectSections sections={project.sections} />

      {next && (
        <section className="sheet pt-8">
          <Rule />
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 py-10 md:flex-row md:items-baseline md:justify-between"
          >
            <Label>Next project</Label>
            <span className="display flex items-baseline gap-5 text-[length:var(--text-display-md)] text-[var(--color-ink)]">
              {next.title}
              <span
                aria-hidden="true"
                className="text-[var(--color-terracotta)] transition-transform duration-500 ease-[var(--ease-sheet)] group-hover:translate-x-2"
              >
                →
              </span>
            </span>
          </Link>
        </section>
      )}
    </>
  );
}
