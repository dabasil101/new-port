export const profile = {
  name: "Alex Basil Nzaywa",
  shortName: "Alex Basil",
  initials: "AB",
  role: "Full-Stack Software Developer",
  tagline: "Better systems. Bigger dreams.",
  summary:
    "Full-Stack Software Developer and Computer Science student at Egerton University, with a multi-disciplinary background spanning web, mobile, system and database development, plus Linux customization and CAD/mechanical modeling.",
  company: "Zelox Industries",
  email: "alexbasilxbox@gmail.com",
  phone: "+254711140441",
  github: "https://github.com/dabasil101",
  linkedin: "https://www.linkedin.com/in/alex-basil-737828322/",
  kofi: "https://ko-fi.com/alexbasil",
  education: [
    { place: "Egerton University", detail: "Computer Science" },
    { place: "Moscow", detail: "Software & Full-Stack Development" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
] as const;
