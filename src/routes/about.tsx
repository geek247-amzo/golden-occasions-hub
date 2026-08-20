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
      { title: "About Us | Azikel's Tasty Food — Catering in Midrand" },
      {
        name: "description",
        content:
          "Azikel's Tasty Food is a Gauteng catering and events company built on taste, detail and hospitality. Learn how we approach every occasion.",
      },
      { property: "og:title", content: "About Azikel's Tasty Food" },
      {
        property: "og:description",
        content:
          "Food made with love. Events made to remember. A Midrand-based catering and events company.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  {
    t: "Taste",
    d: "Food should be something guests remember — not just something served.",
  },
  {
    t: "Detail",
    d: "Great events come together through careful planning long before the first guest arrives.",
  },
  {
    t: "Hospitality",
    d: "Every guest should feel welcomed, looked after and glad they came.",
  },
];

function About() {
  return (
    <>
      <PageHero
        image={team}
        alt="Catering team carrying plated dishes through a warmly lit event venue"
        eyebrow="About Us"
        title="Food Made With Love. Events Made to Remember."
      />

      {/* Our story */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="img-zoom">
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
            <SectionHeading eyebrow="Our Story" title="Bringing people together, one occasion at a time" />
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Azikel&rsquo;s Tasty Food is a catering and events company based
                  in Bluehills, Midrand. We exist for the moments where people
                  gather — the weddings, the birthdays, the company year-ends and
                  the ordinary Sunday lunches that quietly turn into something
                  memorable.
                </p>
                <p>
                  Our work begins with a conversation. We want to understand who
                  is coming, what the day should feel like and what matters most
                  to you, before we talk about menus or logistics. That care shows
                  up later in the small things: the way a table is dressed, the
                  timing of service, the dish that reminds someone of home.
                </p>
                <p>
                  We take genuine pride in hospitality. Guests should feel looked
                  after, hosts should get to enjoy their own event, and the food
                  should be the part everyone mentions on the way home.
                </p>
              </div>
              <p className="script mt-8 text-2xl text-gold">
                Made with love, served with pride.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Three things we never compromise on"
            tone="dark"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-14">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 110} className="border-t border-gold/30 pt-7">
                <p className="eyebrow text-gold">0{i + 1}</p>
                <h3 className="mt-4 text-3xl text-cream">{p.t}</h3>
                <p className="mt-4 leading-relaxed text-cream/65">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
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
                  <li
                    key={item}
                    className="flex items-center gap-4 py-4 text-lg"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
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
            <Reveal className="img-zoom">
              <img
                src={guests}
                alt="Guests toasting at an evening celebration"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="img-zoom sm:ml-16">
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
    </>
  );
}
