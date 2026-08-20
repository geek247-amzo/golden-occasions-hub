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
  points: string[];
  cta: string;
  whatsapp: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

export const services: Service[] = [
  {
    id: "catering",
    name: "Catering",
    heading: "Catering Made for the Occasion",
    short:
      "Food and catering solutions tailored to the occasion, guest count and requirements of the client.",
    body:
      "Catering is shaped around your event rather than a fixed package. We discuss the style of service, the number of guests and the atmosphere you want to create, then align the food and presentation with that brief.",
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
    alt: "Elegant buffet spread with grilled meats, salads and warm dishes on a dark table",
  },
  {
    id: "event-planning",
    name: "Event Planning",
    heading: "Bringing Every Detail Together",
    short: "Helping clients coordinate the details that bring an event together.",
    body:
      "Event planning is about helping you make the right decisions in the right order. During consultation we can discuss the moving parts that matter most and shape a practical approach around your occasion.",
    points: [
      "Event coordination",
      "Venue considerations",
      "Catering",
      "Event setup",
      "Guest requirements",
      "Supplier coordination",
    ],
    cta: "Plan Your Event",
    whatsapp:
      "Hi Azikel's Tasty Food, I'd like to enquire about event planning support.",
    image: planning,
    alt: "Place cards and florals arranged on an elegant event table with gold accents",
  },
  {
    id: "weddings",
    name: "Weddings",
    heading: "Your Day. Beautifully Brought Together.",
    short:
      "Catering and event support for one of life's most important celebrations.",
    body:
      "Weddings need warmth, timing and polish. We focus on the food, the table, the flow of service and the small touches that help your celebration feel calm, generous and memorable.",
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
    alt: "Newlyweds celebrating at a softly lit wedding reception table",
    reverse: true,
  },
  {
    id: "birthdays",
    name: "Birthdays",
    heading: "Celebrate Your Way",
    short: "From intimate birthday dinners to larger milestone celebrations.",
    body:
      "Birthday celebrations should feel personal. Whether you're hosting a family meal, a milestone celebration or a joyful gathering with friends, we can support the food and planning so you can enjoy the day.",
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
    alt: "Family and friends gathered around a decorated birthday cake at an elegant table",
  },
  {
    id: "corporate",
    name: "Corporate Functions",
    heading: "Professional Events Without the Stress",
    short:
      "Professional catering and event solutions for businesses and organisations.",
    body:
      "Corporate catering needs to be reliable, neat and efficient. We work with businesses on functions that need to feel polished without disrupting the agenda or the people attending.",
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
    alt: "Professionally dressed guests at a corporate function beside a catering station",
    reverse: true,
  },
];
