import Link from "next/link";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { ProjectArt } from "./ProjectArt";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="box relative flex flex-col overflow-hidden transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
      <ProjectArt slug={project.slug} title={project.title} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] font-bold uppercase text-mut">{project.subtitle}</span>
          <Chip>{project.tag}</Chip>
        </div>
        <h3 className="heading mb-3 text-lg leading-tight">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 relative">{project.title}</Link>
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-mut">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">{project.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
      </div>
    </article>
  );
}
