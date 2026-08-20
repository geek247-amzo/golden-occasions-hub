import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-4",
            tone === "dark" ? "text-gold" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      <div
        className={cn("gold-rule mt-6", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-[1.05rem]",
            tone === "dark" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
