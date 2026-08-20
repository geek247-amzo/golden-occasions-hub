import catering from "@/assets/catering.jpg";
import planning from "@/assets/planning.jpg";
import wedding from "@/assets/wedding.jpg";
import birthday from "@/assets/birthday.jpg";
import corporate from "@/assets/corporate.jpg";

export type Service = {
  id: string;
  name: string;
  heading: string;
  short: string;
  body: string;
  points?: string[];
  note?: string;
  cta: string;
  whatsapp: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "catering",
    name: "Catering",
    heading: "Catering Made for the Occasion",
    short:
      "Food and catering solutions tailored to the occasion and guest requirements.",
    body: "Catering is built around your function — the style of the event, the number of guests and what matters most to the people you're feeding. We discuss menu direction, service style and presentation with you before anything is confirmed, so the food on the day suits the occasion rather than a fixed template.",
    points: [
      "Menu direction shaped around the event",
      "Buffet, plated or grazing-style service",
      "Guest numbers and dietary requirements",
      "Presentation, setup and serving",
    ],
    cta: "Request Catering Quote",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about catering for an upcoming event.",
    image: catering,
    alt: "Buffet catering spread of grilled meats, salads and warm dishes on a dark table with gold serving spoons",
  },
  {
    id: "event-planning",
    name: "Event Planning",
    heading: "Bringing Every Detail Together",
    short: "Helping clients coordinate the details that bring an event together.",
    body: "An event is a hundred small decisions. We help you work through them calmly and in order, so the day itself feels effortless. The areas below are the ones most often discussed during a consultation — we'll confirm together exactly what you'd like us to take on.",
    points: [
      "Event coordination",
      "Venue considerations",
      "Catering",
      "Event setup",
      "Guest requirements",
      "Supplier coordination",
    ],
    note: "Scope is agreed during consultation and tailored to each event.",
    cta: "Plan Your Event",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about event planning support.",
    image: planning,
    alt: "Hands placing a calligraphed name card on an elegant event table with white florals and gold cutlery",
  },
  {
    id: "weddings",
    name: "Weddings",
    heading: "Your Day. Beautifully Brought Together.",
    short:
      "Catering and event support for one of life's most important celebrations.",
    body: "From the first tasting conversation to the last plate cleared, we look after the parts of your wedding day that guests remember most — the food, the table, the timing and the warmth of the service. Traditional, contemporary or a blend of both, the day is built around you.",
    points: [
      "Wedding catering and service",
      "Table and buffet presentation",
      "Coordination on the day",
      "Guest and dietary requirements",
    ],
    cta: "Discuss Your Wedding",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about catering/event planning for my wedding.",
    image: wedding,
    alt: "Newly married couple laughing together at a candlelit wedding reception table",
  },
  {
    id: "birthdays",
    name: "Birthdays",
    heading: "Celebrate Your Way",
    short: "From intimate birthday dinners to larger milestone celebrations.",
    body: "Birthdays should feel personal. Whether it's a children's party in the garden, a relaxed family lunch or a milestone celebration with everyone you love in one room, we handle the food and setup so you can enjoy your own party.",
    points: [
      "Children's birthdays",
      "Adult birthdays",
      "Milestone celebrations",
      "Family gatherings",
      "Intimate celebrations",
    ],
    cta: "Plan a Birthday",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about catering for a birthday celebration.",
    image: birthday,
    alt: "Family and friends applauding around a decorated birthday cake at an elegant outdoor table",
  },
  {
    id: "corporate",
    name: "Corporate Functions",
    heading: "Professional Events Without the Stress",
    short:
      "Professional catering and event solutions for businesses and organisations.",
    body: "Corporate catering runs on reliability: arriving when we said we would, presenting well, and feeding your people properly without disrupting the agenda. We work with businesses and organisations across Gauteng on functions of all sizes.",
    points: [
      "Business lunches",
      "Staff functions",
      "Corporate celebrations",
      "Meetings",
      "Client events",
      "Company gatherings",
    ],
    cta: "Request Corporate Catering",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about corporate catering for our company.",
    image: corporate,
    alt: "Guests in business attire at a corporate function beside a canapé catering station",
  },
];
