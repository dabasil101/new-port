import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectArt } from "@/components/projects/ProjectArt";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="pt-14">
      <Link href="/projects" className="font-mono text-xs font-bold uppercase hover:underline">← All projects</Link>
      <header className="mb-10 mt-6">
        <p className="label mb-1">// {project.tag}</p>
        <h1 className="heading text-3xl sm:text-5xl">{project.title}</h1>
        <p className="mt-3 font-mono text-xs font-bold uppercase text-mut">{project.subtitle}</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="box overflow-hidden lg:col-span-7"><ProjectArt slug={project.slug} title={project.title} /></div>
        <div className="space-y-6 lg:col-span-5">
          <section className="box p-6">
            <h2 className="heading mb-3 border-b-2 border-ink pb-3 text-sm">Overview</h2>
            <p className="text-sm leading-relaxed">{project.overview}</p>
          </section>
          <section className="box p-6">
            <h2 className="heading mb-3 border-b-2 border-ink pb-3 text-sm">Highlights</h2>
            <ul className="space-y-2 text-sm">
              {project.highlights.map((h) => <li key={h} className="flex gap-3"><span className="font-mono font-bold">▣</span>{h}</li>)}
            </ul>
          </section>
          <section className="box p-6">
            <h2 className="heading mb-3 border-b-2 border-ink pb-3 text-sm">Built with</h2>
            <div className="flex flex-wrap gap-1.5">{project.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          </section>
        </div>
      </div>

      <nav className="mt-12 flex flex-wrap justify-between gap-4" aria-label="More projects">
        <ButtonLink href={`/projects/${prev.slug}`}>← {prev.title.split(" ")[0]}</ButtonLink>
        <ButtonLink href={`/projects/${next.slug}`}>{next.title.split(" ")[0]} →</ButtonLink>
      </nav>
    </article>
  );
}
