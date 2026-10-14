export interface StackGroup { category: string; items: string[] }

export const stack: StackGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C", "C#", "SQL"] },
  { category: "Frontend & Mobile", items: ["React", "React Native", "Next.js", "Expo", "Tailwind CSS", "Android Studio"] },
  { category: "Backend & Cloud", items: ["Node.js (Express)", "Supabase", "Vercel", "Google Play Console"] },
  { category: "Databases", items: ["PostgreSQL", "MariaDB", "MySQL", "SQLite"] },
  { category: "Environment & OS", items: ["Arch Linux", "Ubuntu", "Wayland", "KDE Plasma", "GNOME", "Zsh", "Kitty"] },
  { category: "Design & Modeling", items: ["Obsidian (UML/Mermaid.js)", "Onshape", "Tinkercad"] },
];
