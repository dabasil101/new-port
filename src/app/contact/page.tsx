import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="pt-14">
      <SectionHeading as="h1" eyebrow="Get in touch" title="Let's build something great" />
      <p className="mb-10 mt-4 max-w-xl text-sm text-mut">
        Software development, {profile.company} partnerships or technical consultation. Email or call, or find me on GitHub and LinkedIn. You can also support my work on Ko-fi.
      </p>
      <ContactLinks />
      <div className="mt-10"><CopyEmailButton email={profile.email} className="btn-solid" /></div>
    </section>
  );
}
