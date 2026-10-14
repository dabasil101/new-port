type IconProps = { className?: string };
const base = "h-4 w-4 fill-current";

export const GitHubIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
);
export const LinkedInIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true"><path fillRule="evenodd" d="M1 1h14v14H1zM3.5 6.2v6h2v-6zM4.5 3.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zM7 6.2v6h2v-3.2c0-1.6 2-1.7 2 0v3.2h2V8.9c0-2.8-3-2.7-4-1.3V6.2z" /></svg>
);
export const MailIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true"><path fillRule="evenodd" d="M1 3h14v10H1zM2.5 4.5v.4L8 9l5.5-4.1v-.4z" /></svg>
);
export const PhoneIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true"><path d="M3.6 1h2.2l1 3.2-1.5 1c.8 1.7 2 3 3.7 3.8l1-1.5 3.2 1v2.2c0 .9-.7 1.6-1.6 1.6C6.9 12.3 3.7 9.1 2 2.6 2 1.7 2.7 1 3.6 1z" /></svg>
);
export const CoffeeIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true"><path d="M2 5h9v5a3 3 0 01-3 3H5a3 3 0 01-3-3zM11 6h1.5a1.5 1.5 0 010 3H11V8h1.5a.5.5 0 000-1H11zM4 1.5h1.2v2H4zM7 1.5h1.2v2H7z" /></svg>
);
export const ArrowIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 12L12 4M5 4h7v7" /></svg>
);
