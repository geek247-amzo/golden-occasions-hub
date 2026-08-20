import catering from "@/assets/catering.jpg";
import planning from "@/assets/planning.jpg";
import wedding from "@/assets/wedding.jpg";
import birthday from "@/assets/birthday.jpg";
import corporate from "@/assets/corporate.jpg";
import chef from "@/assets/chef.jpg";
import plated from "@/assets/plated.jpg";
import decor from "@/assets/decor.jpg";
import desserts from "@/assets/desserts.jpg";
import guests from "@/assets/guests.jpg";
import team from "@/assets/team.jpg";
import hero from "@/assets/hero-event.jpg";

export const galleryCategories = [
  "All",
  "Catering",
  "Weddings",
  "Birthdays",
  "Corporate",
  "Events",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
};

/* Replace the imported files in src/assets to swap in real photography. */
export const galleryItems: GalleryItem[] = [
  {
    src: hero,
    alt: "Guests seated at a long candlelit banquet table at an outdoor golden-hour reception",
    category: "Weddings",
  },
  {
    src: catering,
    alt: "Buffet spread of grilled meats, rice and colourful salads in dark serving bowls",
    category: "Catering",
  },
  {
    src: wedding,
    alt: "Bride and groom laughing during their candlelit wedding reception",
    category: "Weddings",
  },
  {
    src: birthday,
    alt: "Guests applauding around a tiered birthday cake at a decorated outdoor table",
    category: "Birthdays",
  },
  {
    src: corporate,
    alt: "Business guests networking beside a canapé station at a corporate function",
    category: "Corporate",
  },
  {
    src: plated,
    alt: "Plated main course of sliced beef with purée and roast vegetables on a dark plate",
    category: "Catering",
  },
  {
    src: decor,
    alt: "Event marquee at night with draped fabric, fairy lights and set round tables",
    category: "Events",
  },
  {
    src: desserts,
    alt: "Gold tiered dessert stand with petit fours, macarons and fresh fruit",
    category: "Catering",
  },
  {
    src: guests,
    alt: "Friends toasting champagne glasses under string lights at an evening celebration",
    category: "Events",
  },
  {
    src: chef,
    alt: "Chef in whites garnishing plated dishes in a professional catering kitchen",
    category: "Catering",
  },
  {
    src: planning,
    alt: "Place cards and florals being arranged on a formal event table",
    category: "Events",
  },
  {
    src: team,
    alt: "Service team carrying plated dishes through a warmly lit event venue",
    category: "Corporate",
  },
];
