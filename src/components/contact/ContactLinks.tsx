import { profile } from "@/data/profile";
import { CoffeeIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, ArrowIcon } from "@/components/icons";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, Icon: PhoneIcon },
  { label: "GitHub", value: "github.com/dabasil101", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/alex-basil", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Ko-fi", value: "ko-fi.com/alexbasil", href: profile.kofi, Icon: CoffeeIcon },
];

export function ContactLinks() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {items.map(({ label, value, href, Icon }) => (
        <li key={label}>
          <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            className="box flex items-center justify-between gap-4 p-5 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
            <span className="flex min-w-0 items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-soft"><Icon className="h-5 w-5 fill-current" /></span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-mut">{label}</span>
                <span className="block truncate font-mono text-sm font-bold">{value}</span>
              </span>
            </span>
            <ArrowIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}
