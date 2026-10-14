"use client";

import { useState } from "react";
import { categoryLabels, projects, type Category } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const tabs = Object.keys(categoryLabels) as (Category | "all")[];

export function ProjectBrowser() {
  const [active, setActive] = useState<Category | "all">("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={active === t} onClick={() => setActive(t)}
            className={`whitespace-nowrap rounded-xl border-2 border-ink px-4 py-2 font-mono text-xs font-bold uppercase ${active === t ? "bg-ink text-bg shadow-hard-sm" : "bg-bg hover:bg-soft"}`}>
            {categoryLabels[t]}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}
