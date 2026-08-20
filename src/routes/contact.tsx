import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CTAAnchor } from "@/components/CTAButton";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { directionsUrl, mapEmbedUrl, site, whatsappLink } from "@/lib/site";
import hero from "@/assets/planning.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Azikel's Tasty Food" },
      {
        name: "description",
        content:
          "Contact Azikel's Tasty Food in Midrand for catering, weddings, birthdays, corporate functions and event planning enquiries.",
      },
      { property: "og:title", content: "Contact | Azikel's Tasty Food" },
      {
        property: "og:description",
        content:
          "Tell us a little about your event and we'll get in touch to help bring it together.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="page-enter">
      <PageHero
        image={hero}
        alt="Hands arranging table decor and place settings for an event"
        eyebrow="Contact"
        title="Let's Plan Something Special"
        intro="Tell us a little about your event and we'll get in touch."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="soft-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <p className="eyebrow text-gold">Enquiry Form</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Tell us about your event</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              The more detail you can share, the easier it is for us to point you in the
              right direction.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="soft-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <p className="eyebrow text-gold">Talk to Us</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Direct contact</h2>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <p className="eyebrow mb-2 text-foreground">Call / WhatsApp</p>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 text-base text-foreground transition-colors hover:text-gold"
                  >
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-foreground">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base text-foreground transition-colors hover:text-gold"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-foreground">Visit Us</p>
                  <p className="text-base text-foreground">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}
                    <br />
                    {site.address.province}
                    <br />
                    {site.address.postal}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAAnchor href={whatsappLink()} external>
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </CTAAnchor>
                <CTAAnchor href={whatsappLink("Hi Azikel's Tasty Food, I'd like to enquire about catering/event services.")} external variant="outlineDark">
                  Send WhatsApp
                </CTAAnchor>
              </div>
            </div>

            <div className="soft-panel overflow-hidden rounded-[2rem]">
              <div className="border-b border-border/70 px-6 py-5 sm:px-8">
                <p className="eyebrow text-gold">Location</p>
                <h3 className="mt-2 text-2xl">Bluehills, Midrand, Gauteng</h3>
              </div>
              <div className="aspect-[4/3] w-full bg-muted">
                <iframe
                  title="Azikel's Tasty Food location map"
                  src={mapEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="border-t border-border/70 px-6 py-5 sm:px-8">
                <div className="flex flex-wrap gap-4">
                  <CTAAnchor href={directionsUrl} external variant="outlineDark">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </CTAAnchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
