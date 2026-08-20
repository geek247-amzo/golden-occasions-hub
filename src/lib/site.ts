export const site = {
  name: "Azikel's Tasty Food",
  tagline: "Made with love, served with pride.",
  phoneDisplay: "069 052 7523",
  phoneHref: "tel:+27690527523",
  whatsappNumber: "27690527523",
  email: "info@azikelstastyfood.co.za",
  address: {
    line1: "123 Acacia Street",
    line2: "Bluehills",
    city: "Midrand",
    province: "Gauteng",
    postal: "1685",
  },
  mapsQuery: "123 Acacia Street, Bluehills, Midrand, Gauteng, 1685",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.city,
  site.address.province,
  site.address.postal,
];

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Hi Azikel's Tasty Food, I'd like to enquire about catering/event services.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
