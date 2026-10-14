import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { ProfileCard } from "./ProfileCard";

export function Hero() {
  return (
    <section className="grid items-center gap-10 pb-20 pt-14 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <span className="inline-block rounded-md border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-bg shadow-hard-sm">
          {profile.role}
        </span>
        <h1 className="heading text-5xl leading-[0.95] sm:text-7xl">
          Alex Basil <span className="text-accent">Nzaywa</span>
        </h1>
        <p className="max-w-xl border-l-4 border-ink py-1 pl-4 leading-relaxed">{profile.summary}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <ButtonLink href="/projects" variant="solid">View projects</ButtonLink>
          <CopyEmailButton email={profile.email} />
        </div>
      </div>
      <div className="flex justify-center lg:col-span-5"><ProfileCard /></div>
    </section>
  );
}
