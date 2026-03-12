import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className={`balance font-display text-[clamp(2.9rem,6vw,5.25rem)] leading-[0.92] tracking-[-0.07em] text-white ${titleClassName}`}
      />
      <Reveal delay={0.08}>
        <p
          className={`max-w-2xl text-[1rem] leading-8 text-[#CCCCCC] sm:text-[1.08rem] ${descriptionClassName}`}
        >
          {description}
        </p>
      </Reveal>
    </div>
  );
}
