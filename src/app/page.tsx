import { Hero } from "@/components/home/Hero";
import { ZeloxCallout } from "@/components/home/ZeloxCallout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="pb-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured work" title="Things I've built" />
          <ButtonLink href="/projects">All projects</ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
      <ZeloxCallout />
      <section className="py-20 text-center">
        <SectionHeading eyebrow="Get in touch" title="Let's build something great" center />
        <p className="mx-auto mb-8 mt-4 max-w-md text-sm text-mut">Software development, Zelox Industries partnerships or technical consultation.</p>
        <ButtonLink href="/contact" variant="solid">Contact me</ButtonLink>
      </section>
    </>
  );
}
