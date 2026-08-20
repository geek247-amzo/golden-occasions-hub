import { Phone } from "lucide-react";
import { CTAAnchor, CTALink } from "./CTAButton";
import { Reveal } from "./Reveal";
import { site, whatsappLink } from "@/lib/site";
import decor from "@/assets/decor.jpg";

export function QuoteCta({
  title = "Planning Something Special?",
  intro = "Tell us about your event and we'll help you bring it together.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24 lg:py-32">
      <img
        src={decor}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-charcoal/60" aria-hidden="true" />
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-balance text-3xl text-cream sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
        <p className="mt-6 text-cream/70">{intro}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTALink to="/contact">Request a Quote</CTALink>
          <CTAAnchor href={whatsappLink()} external variant="outlineLight">
            Chat on WhatsApp
          </CTAAnchor>
        </div>
        <a
          href={site.phoneHref}
          className="mt-8 inline-flex items-center gap-3 text-cream/80 transition-colors hover:text-gold"
        >
          <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
          <span className="text-lg tracking-wide">{site.phoneDisplay}</span>
        </a>
      </Reveal>
    </section>
  );
}
