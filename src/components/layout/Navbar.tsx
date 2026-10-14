"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2.5rem)] max-w-6xl">
      <div className="box flex h-16 items-center justify-between px-4 shadow-hard-sm sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-mono text-sm font-bold text-bg">{profile.initials}</span>
          <span className="leading-tight">
            <b className="block font-mono text-sm uppercase">{profile.shortName}</b>
            <span className="font-mono text-[10px] tracking-widest text-mut">DEV // BUILDER</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-ink hover:text-bg ${isActive(l.href) ? "bg-ink text-bg" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden rounded-lg border-2 border-ink p-2 hover:bg-ink hover:text-bg sm:block"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-lg border-2 border-ink p-2 hover:bg-ink hover:text-bg sm:block"><LinkedInIcon /></a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="rounded-lg border-2 border-ink px-3 py-1.5 font-mono text-xs font-bold md:hidden">
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="box mt-2 flex flex-col p-2 md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 font-mono text-sm font-bold uppercase ${isActive(l.href) ? "bg-ink text-bg" : ""}`}>
              // {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
