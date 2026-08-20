import { createFileRoute } from "@tanstack/react-router";
import { CTALink } from "@/components/CTAButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import team from "@/assets/team.jpg";
import chef from "@/assets/chef.jpg";
import guests from "@/assets/guests.jpg";
import planning from "@/assets/planning.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Azikel's Tasty Food" },
      {
        name: "description",
        content:
          "Learn about Azikel's Tasty Food, a Midrand-based catering and events company built around taste, detail and hospitality.",
      },
      { property: "og:title", content: "About Azikel's Tasty Food" },
      {
        property: "og:description",
        content:
          "Food made with love. Events made to remember. Catering and event planning in Gauteng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  {
    title: "Taste",
    description: "Food should be something guests remember, not just something served.",
  },
  {
    title: "Detail",
    description:
      "Great events come together through careful planning and a clear sense of timing.",
  },
  {
    title: "Hospitality",
    description: "Every guest should feel welcomed, looked after and glad they came.",
  },
];

function About() {
  return (
    <div className="page-enter">
      <PageHero
        image={team}
        alt="Catering team carrying plated dishes through a warmly lit event venue"
        eyebrow="About Us"
        title="Food Made With Love. Events Made to Remember."
        intro="Azikel's Tasty Food is a catering and events company focused on bringing people together with good food, thoughtful planning and genuine care."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="img-zoom overflow-hidden rounded-[2rem]">
              <img
                src={chef}
                alt="Chef plating a refined dish in a catering kitchen"
                width={1280}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <SectionHeading
              eyebrow="Our Story"
              title="A hospitality-first approach"
            />
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Azikel's Tasty Food is rooted in the simple idea that food can
                  help set the tone for a day people will remember. That could be
                  a wedding reception, a birthday table in Midrand or a corporate
                  function that needs to feel polished and well-run.
                </p>
                <p>
                  We start with a conversation. Before menus or logistics, we want
                  to understand the occasion, the number of guests, the setting
                  and the atmosphere you want to create. From there, we shape the
                  food and the support around the event itself.
                </p>
                <p>
                  Hospitality matters to us. Hosts should be able to enjoy their
                  own event, guests should feel looked after, and the food should
                  feel like part of the occasion rather than an afterthought.
                </p>
              </div>
              <p className="script mt-8 text-2xl text-gold">
                Made with love, served with pride.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Three principles that guide every event"
            tone="dark"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-14">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 110}
                className="border-t border-gold/30 pt-7"
              >
                <p className="eyebrow text-gold">0{index + 1}</p>
                <h3 className="mt-4 text-3xl text-cream">{principle.title}</h3>
                <p className="mt-4 leading-relaxed text-cream/65">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="What We Do" title="Occasions we work across" />
            <Reveal delay={100}>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {[
                  "Weddings",
                  "Birthdays",
                  "Private celebrations",
                  "Corporate functions",
                  "Catering requirements",
                  "Event planning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 py-4 text-lg">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 text-3xl leading-snug">
                Your occasion. Your vision. Our passion.
              </h3>
              <div className="mt-8">
                <CTALink to="/contact">Plan Your Event</CTALink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 lg:col-span-6 lg:col-start-7">
            <Reveal className="img-zoom overflow-hidden rounded-[2rem]">
              <img
                src={guests}
                alt="Guests toasting at an evening celebration"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="img-zoom overflow-hidden rounded-[2rem] sm:ml-16">
              <img
                src={planning}
                alt="Place cards and florals arranged on a formal event table"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
