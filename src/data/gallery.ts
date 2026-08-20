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
  aspect: "portrait" | "landscape" | "square" | "tall";
};

/* Replace the imported files in src/assets to swap in real photography. */
export const galleryItems: GalleryItem[] = [
  {
    src: hero,
    alt: "Guests seated at a long banquet table during an outdoor golden-hour reception",
    category: "Weddings",
    aspect: "landscape",
  },
  {
    src: catering,
    alt: "Buffet spread of grilled meats, rice and colourful salads in serving bowls",
    category: "Catering",
    aspect: "landscape",
  },
  {
    src: wedding,
    alt: "Bride and groom laughing during their candlelit wedding reception",
    category: "Weddings",
    aspect: "portrait",
  },
  {
    src: birthday,
    alt: "Guests applauding around a tiered birthday cake at a decorated outdoor table",
    category: "Birthdays",
    aspect: "square",
  },
  {
    src: corporate,
    alt: "Business guests networking beside a canape station at a corporate function",
    category: "Corporate",
    aspect: "portrait",
  },
  {
    src: plated,
    alt: "Plated main course of sliced beef with puree and roast vegetables on a dark plate",
    category: "Catering",
    aspect: "square",
  },
  {
    src: decor,
    alt: "Event marquee at night with draped fabric, fairy lights and set round tables",
    category: "Events",
    aspect: "landscape",
  },
  {
    src: desserts,
    alt: "Gold tiered dessert stand with petit fours, macarons and fresh fruit",
    category: "Catering",
    aspect: "portrait",
  },
  {
    src: guests,
    alt: "Friends toasting champagne glasses under string lights at an evening celebration",
    category: "Events",
    aspect: "square",
  },
  {
    src: chef,
    alt: "Chef in whites garnishing plated dishes in a professional catering kitchen",
    category: "Catering",
    aspect: "tall",
  },
  {
    src: planning,
    alt: "Place cards and florals being arranged on a formal event table",
    category: "Events",
    aspect: "landscape",
  },
  {
    src: team,
    alt: "Service team carrying plated dishes through a warmly lit event venue",
    category: "Corporate",
    aspect: "portrait",
  },
];
