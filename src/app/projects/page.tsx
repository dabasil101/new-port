import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Work" };

export default function ProjectsPage() {
  return (
    <section className="pt-14">
      <div className="mb-10"><SectionHeading as="h1" eyebrow="Featured work" title="Things I've built" /></div>
      <ProjectBrowser />
    </section>
  );
}
