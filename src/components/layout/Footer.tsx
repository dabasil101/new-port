import Link from "next/link";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-ink bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs font-bold md:flex-row">
        <span>© {new Date().getFullYear()} {profile.name.toUpperCase()} // {profile.company.toUpperCase()}</span>
        <nav className="flex gap-4" aria-label="Footer">
          {navLinks.map((l) => <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
