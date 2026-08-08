"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { galleryImages } from "@/lib/data";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading eyebrow="Gallery" title="Life at Diadem Consult Academy" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {preview.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/40 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary">
                  <Expand size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/gallery" as Route}
            className="inline-block rounded-full border border-primary px-7 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
