import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CTAAnchor, CTALink } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteCta } from "@/components/QuoteCta";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/site";
import hero from "@/assets/hero-event.jpg";
import chef from "@/assets/chef.jpg";
import plated from "@/assets/plated.jpg";
import guests from "@/assets/guests.jpg";
import desserts from "@/assets/desserts.jpg";
import decor from "@/assets/decor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Azikel's Tasty Food | Catering & Event Planning in Midrand, Gauteng",
      },
      {
        name: "description",
        content:
          "Catering and event planning in Midrand and across Gauteng — weddings, birthdays, private celebrations and corporate functions. Request a quote today.",
      },
      {
        property: "og:title",
        content: "Azikel's Tasty Food | Catering & Events in Midrand, Gauteng",
      },
      {
        property: "og:description",
        content:
          "Great food. Beautiful occasions. Unforgettable memories. Catering and event planning across Gauteng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Azikel's Tasty Food",
          description:
            "Catering and event services for memorable occasions across Gauteng.",
          telephone: "+27690527523",
          email: "info@azikelstastyfood.co.za",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Acacia Street",
            addressLocality: "Bluehills, Midrand",
            addressRegion: "Gauteng",
            postalCode: "1685",
            addressCountry: "ZA",
          },
          areaServed: "Gauteng, South Africa",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-charcoal">
        <img
          src={hero}
          alt="Guests seated at a candlelit outdoor banquet table at golden hour"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <p className="script text-2xl text-gold sm:text-3xl">
              Azikel&rsquo;s Tasty Food
            </p>
            <h1 className="mt-4 text-balance text-4xl leading-[1.03] text-cream sm:text-6xl lg:text-7xl">
              Great food. Beautiful occasions. Unforgettable memories.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              From intimate celebrations to unforgettable weddings and
              professional corporate functions, we bring exceptional catering and
              thoughtful event planning together.
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

      {/* Introduction — asymmetric editorial */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionHeading
              eyebrow="Catering & Events"
              title="Every Occasion Deserves Something Special"
              intro="Azikel's Tasty Food helps you create occasions people talk about long afterwards. We cook food that suits the room and the reason you're all in it, and we help hold the details together so the day runs the way you pictured it."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Whether you're hosting twenty people around a table in Midrand or
                a few hundred guests at a venue across Gauteng, the approach is
                the same — listen first, plan carefully, and serve with pride.
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
              <Reveal className="img-zoom">
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
                className="img-zoom absolute -bottom-10 -left-6 hidden w-52 border-8 border-background sm:block lg:-left-16 lg:w-64"
              >
                <img
                  src={plated}
                  alt="Plated main course with gold cutlery on a dark table"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Five ways we look after your occasion"
            tone="dark"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                delay={i * 80}
                className={
                  i < 2
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }
              >
                <Link
                  to="/services"
                  className="img-zoom group relative block h-full min-h-[320px] overflow-hidden lg:min-h-[380px]"
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-500 group-hover:from-charcoal"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-full flex-col justify-end p-7">
                    <span className="font-display text-2xl text-cream sm:text-3xl">
                      {s.name}
                    </span>
                    <span className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                      {s.short}
                    </span>
                    <span className="eyebrow mt-5 text-gold">Explore →</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured gallery collage */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Weddings · Celebrations · Catering · Corporate"
            title="Moments from the table"
            className="max-w-lg"
          />
          <Reveal delay={120}>
            <CTALink to="/gallery" variant="outlineDark">
              View Our Gallery
            </CTALink>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <Reveal className="img-zoom col-span-2 lg:col-span-2 lg:row-span-2">
            <img
              src={guests}
              alt="Friends toasting champagne under string lights at an evening celebration"
              loading="lazy"
              className="h-full min-h-[240px] w-full object-cover lg:min-h-[520px]"
            />
          </Reveal>
          <Reveal delay={80} className="img-zoom">
            <img
              src={desserts}
              alt="Gold tiered dessert stand with petit fours and fresh fruit"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={160} className="img-zoom">
            <img
              src={plated}
              alt="Plated main course on a dark ceramic plate"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={240} className="img-zoom col-span-2">
            <img
              src={decor}
              alt="Event marquee at night with fairy lights and set round tables"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover lg:aspect-[2/1]"
            />
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="border-y border-border bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
            <SectionHeading eyebrow="Why Azikel's" title="Why clients choose us" />
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {[
                {
                  t: "Personal Service",
                  d: "Every event is treated individually, never as a package off a shelf.",
                },
                {
                  t: "Made for Your Occasion",
                  d: "Services are tailored according to the event and the guests you're hosting.",
                },
                {
                  t: "From Food to Function",
                  d: "Catering and event-planning support from the same team.",
                },
                {
                  t: "Gauteng Based",
                  d: "Conveniently located in Bluehills, Midrand.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 90}>
                  <p className="eyebrow text-gold">0{i + 1}</p>
                  <h3 className="mt-3 text-2xl">{item.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />

      <div className="bg-background py-12 text-center">
        <CTAAnchor href={whatsappLink()} external variant="outlineDark">
          Chat on WhatsApp — +27 69 052 7523
        </CTAAnchor>
      </div>
    </>
  );
}
