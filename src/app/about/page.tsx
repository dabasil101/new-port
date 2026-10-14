import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = { title: "About" };

const disciplines = [
  { title: "Web & mobile", text: "React, Next.js, React Native and Expo, shipped through Vercel and Google Play Console." },
  { title: "Systems & databases", text: "Node.js (Express) backends and normalized schemas across PostgreSQL, MariaDB, MySQL and SQLite." },
  { title: "Linux customization", text: "Daily driver on Arch Linux and Ubuntu with Wayland, KDE Plasma, GNOME, Zsh and Kitty." },
  { title: "CAD & mechanical modeling", text: "Onshape and Tinkercad for mechanical design, alongside UML and Mermaid.js in Obsidian." },
];

export default function AboutPage() {
  return (
    <>
      <section className="grid gap-10 pt-14 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          <SectionHeading as="h1" eyebrow="About" title="More than just code" />
          <p className="leading-relaxed">{profile.summary}</p>
          <p className="leading-relaxed">
            I&rsquo;m the co-founder of {profile.company}, a technology and development venture building custom software solutions and commercial real estate projects.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <ButtonLink href="/projects" variant="solid">View projects</ButtonLink>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
        <aside className="box self-start p-8 lg:col-span-5">
          <h2 className="heading mb-4 border-b-2 border-ink pb-3 text-sm">Education</h2>
          <ul className="space-y-4">
            {profile.education.map((e) => (
              <li key={e.place}><h3 className="heading text-lg">{e.place}</h3><p className="text-sm text-mut">{e.detail}</p></li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="py-20">
        <div className="mb-10"><SectionHeading eyebrow="Disciplines" title="What I work across" /></div>
        <div className="grid gap-6 md:grid-cols-2">
          {disciplines.map((d) => (
            <div key={d.title} className="box p-6"><h3 className="heading mb-2 text-base">{d.title}</h3><p className="text-sm leading-relaxed text-mut">{d.text}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
