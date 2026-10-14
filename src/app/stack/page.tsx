import type { Metadata } from "next";
import { StackMatrix } from "@/components/stack/StackMatrix";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Stack" };

export default function StackPage() {
  return (
    <section className="pt-14">
      <div className="mb-10"><SectionHeading as="h1" eyebrow="Capabilities" title="Technical stack matrix" /></div>
      <StackMatrix />
    </section>
  );
}
