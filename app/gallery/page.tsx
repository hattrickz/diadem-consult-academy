"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { galleryImages } from "@/lib/data";

const categories = ["All", "Events", "Classroom", "Office"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-40 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="section-container relative">
          <SectionHeading variant="dark" eyebrow="Gallery" title="A Look Inside Diadem Consult Academy" />
        </div>
      </section>

      <section className="section-padding pt-16">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === cat ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-surface text-text-secondary hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          {filtered.map((img) => (
            <motion.button
              layout
              key={img.src}
              onClick={() => setLightbox(img.src)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                sizes="(min-width: 640px) 33vw, 50vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
            </motion.button>
          ))}
        </motion.div>
      </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Gallery image" fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
