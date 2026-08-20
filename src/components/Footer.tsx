import { Link } from "@tanstack/react-router";
import { addressLines, site } from "@/lib/site";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Catering",
  "Event Planning",
  "Weddings",
  "Birthdays",
  "Corporate Functions",
];

/* Social profiles are hidden until real accounts are supplied. */
const socials: { label: string; href: string }[] = [];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <img
              src="/logo.png"
              alt="Azikel's Tasty Food"
              width={72}
              height={72}
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover ring-1 ring-gold/20"
            />
            <h2 className="mt-5 text-2xl text-cream">Azikel's Tasty Food</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Catering and event services for memorable occasions across Gauteng.
            </p>
            <p className="script mt-5 text-lg text-gold">
              Made with love, served with pride.
            </p>
          </div>

          <nav aria-label="Footer pages">
            <h3 className="eyebrow text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="nav-underline text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="nav-underline text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href={site.phoneHref} className="hover:text-cream">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-words hover:text-cream">
                  {site.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">{addressLines.slice(0, 4).join(", ")}</li>
            </ul>
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/70 hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 text-center text-xs tracking-wide text-cream/45">
          &copy; {new Date().getFullYear()} Azikel's Tasty Food. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
