"use client";

import { useState } from "react";

export function CopyEmailButton({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try { await navigator.clipboard.writeText(email); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button type="button" onClick={copy} className={`btn ${className}`} aria-live="polite">
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
