import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CTAAnchor, CTALink } from "@/components/CTAButton";
import { QuoteCta } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import hero from "@/assets/hero-event.jpg";
import chef from "@/assets/chef.jpg";
import plated from "@/assets/plated.jpg";
import guests from "@/assets/guests.jpg";
import desserts from "@/assets/desserts.jpg";
import decor from "@/assets/decor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azikel's Tasty Food | Catering Midrand & Gauteng" },
      {
        name: "description",
        content:
          "Premium catering and event planning in Midrand and Gauteng for weddings, birthdays, private celebrations and corporate functions.",
      },
      { property: "og:title", content: "Azikel's Tasty Food | Catering Midrand" },
      {
        property: "og:description",
        content:
          "Great food. Beautiful occasions. Unforgettable memories. Serving Midrand and Gauteng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="page-enter">
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
        <img
          src={hero}
          alt="Elegant banquet table with candles and guests at a golden hour celebration"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/25"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Azikel's Tasty Food</p>
            <h1 className="mt-5 text-balance text-4xl leading-[1] text-cream sm:text-6xl lg:text-7xl">
              Great food. Beautiful occasions. Unforgettable memories.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/78 sm:text-lg lg:text-xl">
              From intimate celebrations to unforgettable weddings and
              professional corporate functions, Azikel's Tasty Food brings
              exceptional catering and thoughtful event planning together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTALink to="/contact">Get a Quote</CTALink>
              <CTALink to="/services" variant="outlineLight">
                Explore Our Services
              </CTALink>
            </div>
            <p className="mt-10 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-cream/60">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              Serving Midrand and Gauteng
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Catering & Events"
              title="Every Occasion Deserves Something Special"
              intro="Azikel's Tasty Food helps you create occasions people remember for the right reasons. We bring the food, the planning and the hospitality together so the day feels considered from the first conversation to the last plate."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Whether you are planning something intimate at home or a larger
                celebration at a venue across Gauteng, the approach stays the
                same: listen carefully, plan with clarity and serve with pride.
              </p>
              <div className="mt-9">
                <CTALink to="/about" variant="outlineDark">
                  Our Story
                </CTALink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              <Reveal className="img-zoom overflow-hidden rounded-[2rem]">
                <img
                  src={chef}
                  alt="Chef garnishing plated dishes in a professional catering kitchen"
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </Reveal>
              <Reveal
                delay={200}
                className="soft-panel absolute -bottom-10 -left-4 hidden w-52 overflow-hidden rounded-[1.4rem] p-2 sm:block lg:-left-14 lg:w-64"
              >
                <img
                  src={plated}
                  alt="Plated main course with gold cutlery on a dark table"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full rounded-[1.1rem] object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Five ways we look after your occasion"
            tone="dark"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 80}
                className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  to="/services"
                  className="group relative block min-h-[320px] overflow-hidden rounded-[1.8rem] border border-cream/10 bg-black/20 lg:min-h-[380px]"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-full flex-col justify-end p-7">
                    <span className="font-display text-2xl text-cream sm:text-3xl">
                      {service.name}
                    </span>
                    <span className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                      {service.short}
                    </span>
                    <span className="eyebrow mt-5 text-gold">Explore -&gt;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Weddings | Celebrations | Catering | Corporate"
            title="Moments from the table"
            className="max-w-lg"
          />
          <Reveal delay={120}>
            <CTALink to="/gallery" variant="outlineDark">
              View Our Gallery
            </CTALink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-6">
          <Reveal className="img-zoom overflow-hidden rounded-[2rem] lg:col-span-5 lg:row-span-2">
            <img
              src={guests}
              alt="Friends toasting champagne under string lights at an evening celebration"
              loading="lazy"
              className="h-full min-h-[260px] w-full object-cover lg:min-h-[600px]"
            />
          </Reveal>
          <Reveal delay={70} className="img-zoom overflow-hidden rounded-[2rem] lg:col-span-4">
            <img
              src={desserts}
              alt="Gold tiered dessert stand with petit fours and fresh fruit"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="img-zoom overflow-hidden rounded-[2rem] lg:col-span-3">
            <img
              src={plated}
              alt="Plated main course on a dark ceramic plate"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={210} className="img-zoom overflow-hidden rounded-[2rem] lg:col-span-7">
            <img
              src={decor}
              alt="Event marquee at night with fairy lights and set round tables"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover lg:aspect-[2/1]"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
            <SectionHeading eyebrow="Why Azikel's" title="Why clients choose us" />
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {[
                {
                  title: "Personal Service",
                  description:
                    "Every event is treated individually, never as a package off a shelf.",
                },
                {
                  title: "Made for Your Occasion",
                  description:
                    "Services are tailored according to the event and the guests you're hosting.",
                },
                {
                  title: "From Food to Function",
                  description:
                    "Catering and event-planning support from the same team.",
                },
                {
                  title: "Gauteng Based",
                  description: "Conveniently located in Bluehills, Midrand.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 90} className="border-t border-gold/25 pt-7">
                  <p className="eyebrow text-gold">0{index + 1}</p>
                  <h3 className="mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />

      <div className="bg-background py-12 text-center">
        <CTAAnchor
          href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
            "Hi Azikel's Tasty Food, I'd like to enquire about catering/event services.",
          )}`}
          external
          variant="outlineDark"
        >
          Chat on WhatsApp
        </CTAAnchor>
      </div>
    </div>
  );
}
