import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-7 py-3 text-[0.78rem] uppercase tracking-[0.18em] transition-all duration-300 rounded-xs";

const variants = {
  gold: "bg-gold text-charcoal hover:bg-gold-soft hover:shadow-[0_10px_30px_-12px_var(--gold)]",
  dark: "bg-charcoal text-cream hover:bg-charcoal-soft",
  outlineLight:
    "border border-cream/45 text-cream hover:border-gold hover:text-gold",
  outlineDark:
    "border border-charcoal/25 text-charcoal hover:border-gold hover:text-charcoal/70",
} as const;

type Props = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function CTALink({ to, ...props }: Props & { to: string }) {
  return (
    <Link
      to={to}
      className={cn(base, variants[props.variant ?? "gold"], props.className)}
    >
      {props.children}
    </Link>
  );
}

export function CTAAnchor({
  href,
  external,
  ...props
}: Props & { href: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[props.variant ?? "gold"], props.className)}
    >
      {props.children}
    </a>
  );
}

export const ctaClasses = (variant: keyof typeof variants = "gold") =>
  cn(base, variants[variant]);
