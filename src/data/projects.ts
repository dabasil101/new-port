export type Category = "web" | "systems" | "tools";

export interface Project {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  category: Category;
  summary: string;
  overview: string;
  highlights: string[];
  tech: string[];
}

export const categoryLabels: Record<Category | "all", string> = {
  all: "All work",
  web: "Web & mobile",
  systems: "Systems",
  tools: "Tools",
};

export const projects: Project[] = [
  {
    slug: "picknpay",
    tag: "SYS-01",
    title: "PicknPay Marketplace & Delivery Platform",
    subtitle: "E-commerce, delivery, logistics",
    category: "web",
    summary: "End-to-end local e-commerce and on-demand delivery platform with a normalized PostgreSQL backbone.",
    overview: "A normalized, end-to-end local e-commerce and on-demand delivery platform connecting shoppers, vendors and delivery.",
    highlights: [
      "Complex PostgreSQL schemas designed from scratch",
      "Relational models for products, vendors and user roles",
      "Order management with multi-stage delivery tracking",
    ],
    tech: ["Next.js", "PostgreSQL", "TypeScript"],
  },
  {
    slug: "zelshop",
    tag: "SYS-02",
    title: "Zelshop Point-of-Sale",
    subtitle: "Inventory, sales, reporting",
    category: "systems",
    summary: "A custom POS and merchant sales-tracking app for local small vendors and retail businesses.",
    overview: "A custom point-of-sale and merchant sales-tracking application built for local small vendors and retail businesses.",
    highlights: ["Streamlines inventory", "Handles transaction processing", "Produces sales reporting"],
    tech: ["React", "Node.js", "SQLite"],
  },
  {
    slug: "zel-learn-apartment",
    tag: "SYS-03",
    title: "Zel-Learn & Zel Apartment",
    subtitle: "EdTech, real estate",
    category: "web",
    summary: "Two Zelox Industries products: an interactive learning platform and a property management app.",
    overview:
      "Zel-Learn is an educational platform for interactive learning and digital content delivery. Zel Apartment is a real estate and property management application built alongside Zelox's commercial real estate initiatives.",
    highlights: [
      "Zel-Learn: interactive learning and digital content delivery",
      "Zel Apartment: property management for multi-unit developments in Kakamega",
      "Both built under Zelox Industries",
    ],
    tech: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    slug: "developer-tools",
    tag: "SYS-04",
    title: "Developer Utilities & Terminal Tools",
    subtitle: "CLI, automation",
    category: "tools",
    summary: "Custom command-line tools and AI agent workflows that automate everyday development work.",
    overview:
      "Specialized command-line tools, including terminal audio controllers for Spotify on Linux, plus integrations with terminal AI agents.",
    highlights: [
      "Terminal audio controller for Spotify on Linux",
      "Gemini CLI and OpenCode integrations",
      "Automated file inspection, Markdown note management and workspace pipelines",
    ],
    tech: ["Python", "Linux", "Zsh"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
