import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";

const count = (name: string) => String(stack.find((g) => g.category === name)?.items.length ?? 0).padStart(2, "0");

export function ProfileCard() {
  const stats = [
    { title: "Projects", note: "Shipped under Zelox", value: String(projects.length).padStart(2, "0") },
    { title: "Languages", note: "TS · JS · PY · JAVA · C · C# · SQL", value: count("Languages") },
    { title: "Databases", note: "PG · MariaDB · MySQL · SQLite", value: count("Databases") },
  ];
  return (
    <div className="box w-full max-w-md p-6 shadow-[6px_6px_0_var(--ink)]">
      <div className="mb-5 flex items-center justify-between border-b-2 border-ink pb-4">
        <span className="font-mono text-base font-extrabold">ALEX BASIL NZAYWA</span>
        <span className="chip">ONLINE</span>
      </div>
      <div className="mb-5 flex flex-col items-center">
        <div className="mb-2 flex h-28 w-28 items-center justify-center rounded-full border-2 border-ink bg-soft shadow-hard-sm">
          <svg viewBox="0 0 100 100" className="h-20 w-20" aria-hidden="true">
            <circle className="art-g" cx="50" cy="35" r="20" style={{ strokeWidth: 4 }} />
            <path className="art-w" d="M15 88C15 62 30 52 50 52S85 62 85 88Z" style={{ strokeWidth: 4 }} />
          </svg>
        </div>
        <span className="font-mono text-xs text-mut">// FULL-STACK DEV</span>
      </div>
      <dl className="space-y-3 font-mono">
        {stats.map((s) => (
          <div key={s.title} className="flex items-center justify-between border-t-2 border-ink pt-3">
            <div><dt className="text-sm font-bold uppercase">{s.title}</dt><dd className="text-[10px] text-mut">{s.note}</dd></div>
            <span className="text-lg font-extrabold">{s.value}</span>
          </div>
        ))}
      </dl>
      <p className="mt-5 border-t-2 border-ink pt-4 text-center font-mono text-xs font-bold italic">&ldquo;{profile.tagline}&rdquo;</p>
    </div>
  );
}
