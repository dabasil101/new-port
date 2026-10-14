# Alex Basil Nzaywa: Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Black & white blueprint theme with automatic dark mode.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Deploy on Vercel: import the repo, no settings needed.

## Structure

```
src/
  app/                      routes (App Router)
    layout.tsx              fonts, metadata, navbar + footer
    page.tsx                home
    projects/page.tsx       filterable grid
    projects/[slug]/        project detail (statically generated)
    about/ stack/ contact/  pages
    not-found.tsx  icon.svg  globals.css
  components/
    layout/    Navbar, Footer
    home/      Hero, ProfileCard, ZeloxCallout
    projects/  ProjectCard, ProjectBrowser, ProjectArt
    stack/     StackMatrix
    contact/   ContactLinks, CopyEmailButton
    ui/        ButtonLink, Chip, SectionHeading
    icons/     inline SVG icons
  data/        profile.ts, projects.ts, stack.ts   <- edit content here
```

All copy and links live in `src/data`. Add a project by adding an entry to `projects.ts` and a matching drawing in `ProjectArt.tsx`.
