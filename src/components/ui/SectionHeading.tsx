interface Props { eyebrow: string; title: string; as?: "h1" | "h2"; center?: boolean }

export function SectionHeading({ eyebrow, title, as: Tag = "h2", center }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="label mb-1">// {eyebrow}</p>
      <Tag className="heading text-3xl sm:text-4xl">{title}</Tag>
    </div>
  );
}
