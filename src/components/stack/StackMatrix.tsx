import { stack } from "@/data/stack";
import { Chip } from "@/components/ui/Chip";

export function StackMatrix() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stack.map((g) => (
        <section key={g.category} className="box p-6">
          <h3 className="heading mb-4 border-b-2 border-ink pb-3 text-sm">{g.category}</h3>
          <div className="flex flex-wrap gap-1.5">{g.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
        </section>
      ))}
    </div>
  );
}
