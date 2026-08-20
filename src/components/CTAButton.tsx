import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 text-[0.76rem] uppercase tracking-[0.2em] transition-all duration-300 rounded-full";

const variants = {
  gold: "bg-gold text-charcoal shadow-[0_10px_24px_-14px_rgba(214,179,108,0.9)] hover:bg-gold-soft hover:shadow-[0_14px_28px_-14px_rgba(214,179,108,0.95)]",
  dark: "bg-charcoal text-cream hover:bg-charcoal-soft",
  outlineLight:
    "border border-cream/35 text-cream hover:border-gold hover:text-gold",
  outlineDark:
    "border border-charcoal/18 text-charcoal hover:border-gold hover:text-charcoal/80",
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
