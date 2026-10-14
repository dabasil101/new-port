import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <p className="label mb-2">// 404</p>
      <h1 className="heading mb-4 text-4xl">Page not found</h1>
      <p className="mb-8 text-sm text-mut">That page doesn&rsquo;t exist. Head back to the home page.</p>
      <ButtonLink href="/" variant="solid">Back home</ButtonLink>
    </section>
  );
}
