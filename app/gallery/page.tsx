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
    <section className="pt-32 pb-20">
      <div className="section-container">
        <SectionHeading eyebrow="Gallery" title="A Look Inside Diadem Consult Academy" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === cat ? "bg-primary text-white" : "bg-surface text-text-secondary hover:bg-border"
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
              className="group relative mb-4 block w-full overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-white"
            >
              <X size={30} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative h-[70vh] w-full max-w-3xl"
            >
              <Image src={lightbox} alt="Gallery image" fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
