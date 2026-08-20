import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-gold/15 bg-charcoal/96 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="Azikel's Tasty Food"
            width={56}
            height={56}
            className={cn(
              "h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/25 transition-all duration-500 sm:h-14 sm:w-14",
            )}
          />
          <span className="sr-only">Azikel's Tasty Food</span>
          <span className="hidden flex-col leading-tight text-cream sm:flex">
            <span className="text-sm tracking-[0.22em]">AZIKEL'S</span>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-cream/55">
              Tasty Food
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="nav-underline text-[0.78rem] uppercase tracking-[0.18em] text-cream/85 transition-colors hover:text-cream"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="min-h-11 rounded-xs bg-gold px-6 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:bg-gold-soft"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex min-h-11 min-w-11 items-center justify-center text-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-gold/20 bg-charcoal/98 transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="border-b border-cream/10 py-4 font-display text-2xl text-cream"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 min-h-11 rounded-full bg-gold px-6 py-3 text-center text-[0.78rem] uppercase tracking-[0.18em] text-charcoal"
          >
            Get a Quote
          </Link>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 py-2 text-sm text-cream/70"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
