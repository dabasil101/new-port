import Link from "next/link";
import type { ReactNode } from "react";

interface Props { href: string; variant?: "solid" | "outline"; className?: string; children: ReactNode }

export function ButtonLink({ href, variant = "outline", className = "", children }: Props) {
  const cls = `btn ${variant === "solid" ? "btn-solid" : ""} ${className}`;
  if (href.startsWith("/")) return <Link href={href} className={cls}>{children}</Link>;
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}
