import type { ReactNode } from "react";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  intro,
  children,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[68vh] items-end overflow-hidden bg-charcoal pt-28 sm:min-h-[72vh]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/35"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="max-w-3xl page-enter">
          {eyebrow ? <p className="eyebrow mb-5 text-gold">{eyebrow}</p> : null}
          <h1 className="text-balance text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
