import { createFileRoute } from "@tanstack/react-router";
import { CTAAnchor } from "@/components/CTAButton";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { PageHero } from "@/components/PageHero";
import { galleryCategories, galleryItems } from "@/data/gallery";
import hero from "@/assets/hero-event.jpg";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Azikel's Tasty Food" },
      {
        name: "description",
        content:
          "Browse catering, wedding, birthday and corporate event photography from Azikel's Tasty Food across Gauteng.",
      },
      { property: "og:title", content: "Gallery | Azikel's Tasty Food" },
      {
        property: "og:description",
        content:
          "A glimpse into the food, celebrations and occasions that inspire what we do.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="page-enter">
      <PageHero
        image={hero}
        alt="Candlelit banquet table with elegant floral arrangements and plated dishes"
        eyebrow="Gallery / Our Work"
        title="Moments Worth Celebrating"
        intro="A glimpse into the food, celebrations and occasions that inspire what we do."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <GalleryMasonry items={galleryItems} categories={galleryCategories} />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="soft-panel rounded-[2rem] px-6 py-10 text-center sm:px-10 lg:px-16">
          <p className="eyebrow text-gold">Like What You See?</p>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl">
            Let's start planning your occasion.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAAnchor href={whatsappLink()} external>
              Get a Quote
            </CTAAnchor>
            <CTAAnchor href={whatsappLink("Hi Azikel's Tasty Food, I'd like to enquire about catering/event services.")} external variant="outlineDark">
              WhatsApp Us
            </CTAAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
