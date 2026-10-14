import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ZeloxCallout() {
  return (
    <section className="-mx-5 border-y-2 border-ink bg-soft px-5 py-16 sm:-mx-6 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-6">
          <SectionHeading eyebrow="Venture" title={profile.company} />
          <p className="text-sm leading-relaxed">
            As co-founder, I build custom software solutions and commercial real estate projects, bridging software architecture with physical property development, including projects in Kakamega.
          </p>
          <ButtonLink href="/about">About me</ButtonLink>
        </div>
        <div className="box p-8 lg:col-span-6">
          <div className="mb-4 flex items-center justify-between border-b-2 border-ink pb-3">
            <span className="font-mono text-xs font-bold uppercase">// Education</span>
          </div>
          <ul className="space-y-4">
            {profile.education.map((e) => (
              <li key={e.place}><h3 className="heading text-lg">{e.place}</h3><p className="text-sm text-mut">{e.detail}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
