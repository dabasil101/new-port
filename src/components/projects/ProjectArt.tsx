import type { ReactElement } from "react";

const arts: Record<string, ReactElement> = {
  picknpay: (
    <>
      <rect className="art-w" x="40" y="26" width="160" height="100" rx="8" /><path className="art-l" d="M40 44h160" />
      <circle className="art-r" cx="52" cy="35" r="3" /><rect className="art-g" x="52" y="54" width="60" height="10" rx="2" />
      <rect className="art-g" x="52" y="70" width="136" height="28" rx="3" /><rect className="art-r" x="52" y="104" width="50" height="14" rx="2" />
      <path className="art-w" d="M25 126h190l-10 8H35z" /><rect className="art-w" x="215" y="44" width="50" height="86" rx="8" />
      <rect className="art-g" x="223" y="66" width="34" height="22" rx="3" /><rect className="art-g" x="223" y="96" width="34" height="6" rx="2" />
    </>
  ),
  zelshop: (
    <>
      <rect className="art-w" x="135" y="108" width="30" height="22" /><ellipse className="art-w" cx="150" cy="130" rx="50" ry="8" />
      <rect className="art-w" x="65" y="22" width="170" height="92" rx="8" /><path className="art-l" d="M65 40h170" />
      <rect className="art-g" x="75" y="50" width="70" height="12" rx="2" /><rect className="art-g" x="75" y="68" width="150" height="34" rx="3" />
      <rect className="art-r" x="250" y="80" width="28" height="42" rx="6" /><circle className="art-w" cx="264" cy="94" r="4" />
      <path className="art-l" d="M264 102v14" strokeDasharray="2 2" />
    </>
  ),
  "zel-learn-apartment": (
    <>
      <rect className="art-w" x="30" y="24" width="180" height="104" rx="8" /><path className="art-l" d="M30 42h180M74 42v86" />
      <rect className="art-g" x="82" y="52" width="118" height="10" rx="2" /><rect className="art-g" x="82" y="70" width="54" height="40" rx="3" />
      <rect className="art-g" x="144" y="70" width="56" height="40" rx="3" /><path className="art-w" d="M14 132h212l-10 8H24z" />
      <path className="art-w" d="M240 130V70l22-16 22 16v60z" /><rect className="art-r" x="256" y="106" width="12" height="24" />
      <rect className="art-g" x="248" y="78" width="10" height="10" /><rect className="art-g" x="266" y="78" width="10" height="10" />
    </>
  ),
  "developer-tools": (
    <>
      <rect className="art-w" x="40" y="22" width="240" height="116" rx="8" /><path className="art-l" d="M40 40h240" />
      <circle className="art-r" cx="54" cy="31" r="3" /><path className="art-l" d="M58 62l14 10-14 10M84 84h40" />
      <rect className="art-g" x="58" y="98" width="120" height="8" rx="2" /><rect className="art-g" x="58" y="112" width="80" height="8" rx="2" />
      <rect className="art-r" x="150" y="62" width="8" height="14" />
    </>
  ),
};

export function ProjectArt({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="flex h-44 items-center justify-center border-b-2 border-ink bg-soft">
      <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label={`${title} wireframe illustration`}>{arts[slug]}</svg>
    </div>
  );
}
