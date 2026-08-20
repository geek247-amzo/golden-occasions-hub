"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/5]",
} as const;

type Props = {
  items: GalleryItem[];
  categories: readonly GalleryCategory[];
};

export function GalleryMasonry({ items, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : undefined;

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
                active
                  ? "border-gold bg-charcoal text-cream"
                  : "border-border bg-white/70 text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-5 pt-8 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, index) => (
          <button
            key={`${item.src}-${item.alt}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group mb-5 block w-full break-inside-avoid text-left"
          >
            <div className="soft-panel overflow-hidden rounded-[1.5rem] p-2">
              <div className={cn("img-zoom overflow-hidden rounded-[1.2rem]", aspectClasses[item.aspect])}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="px-1 pt-3">
              <p className="eyebrow text-gold">{item.category}</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {item.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={selectedItem !== undefined}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="max-w-5xl border-gold/20 bg-charcoal p-0 text-cream sm:rounded-[2rem]">
          {selectedItem ? (
            <div className="grid gap-0 lg:grid-cols-[1.35fr_0.8fr]">
              <div className="bg-black">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="h-full max-h-[78svh] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="eyebrow text-gold">{selectedItem.category}</p>
                  <DialogTitle className="mt-4 text-3xl text-cream">
                    Gallery image
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-relaxed text-cream/70">
                    {selectedItem.alt}
                  </DialogDescription>
                </div>
                <div className="mt-8 flex items-center justify-between gap-3 text-sm text-cream/60">
                  <button
                    type="button"
                    disabled={selectedIndex === 0}
                    onClick={() => setSelectedIndex((current) => (current ? current - 1 : 0))}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  <span>
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredItems.length}
                  </span>
                  <button
                    type="button"
                    disabled={selectedIndex === filteredItems.length - 1}
                    onClick={() =>
                      setSelectedIndex((current) =>
                        current === null || current >= filteredItems.length - 1 ? current : current + 1,
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
