import { createFileRoute } from "@tanstack/react-router";
import { CTAAnchor, CTALink } from "@/components/CTAButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import hero from "@/assets/catering.jpg";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Azikel's Tasty Food" },
      {
        name: "description",
        content:
          "Explore Azikel's Tasty Food services in Midrand and Gauteng, including catering, event planning, weddings, birthdays and corporate functions.",
      },
      { property: "og:title", content: "Services | Azikel's Tasty Food" },
      {
        property: "og:description",
        content:
          "Premium catering and event support for weddings, birthdays, corporate functions and private celebrations across Gauteng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="page-enter">
      <PageHero
        image={hero}
        alt="Elegant catering spread of South African dishes on a formal event table"
        eyebrow="Services"
        title="Catering and event support shaped around the occasion"
        intro="Every service is handled with the same principle: listen carefully, plan well and create an experience that feels polished, warm and suited to the event."
      />

      <section className="mx-auto max-w-[1400px] space-y-20 px-5 py-24 sm:px-8 lg:space-y-28 lg:py-32">
        {services.map((service, index) => {
          const reverse = service.reverse ?? index % 2 === 1;

          return (
            <article
              key={service.id}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <div
                className={
                  reverse ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"
                }
              >
                <Reveal className="img-zoom overflow-hidden rounded-[2rem]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </Reveal>
              </div>
              <div
                className={
                  reverse
                    ? "lg:order-1 lg:col-span-5 lg:col-start-1"
                    : "lg:col-span-5 lg:col-start-8"
                }
              >
                <Reveal className="soft-panel rounded-[2rem] p-7 sm:p-10">
                  <p className="eyebrow text-gold">{service.name}</p>
                  <h2 className="mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl">
                    {service.heading}
                  </h2>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <CTAAnchor href={whatsappLink(service.whatsapp)} external>
                      {service.cta}
                    </CTAAnchor>
                    <CTALink to="/contact" variant="outlineDark">
                      Start an Enquiry
                    </CTALink>
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
