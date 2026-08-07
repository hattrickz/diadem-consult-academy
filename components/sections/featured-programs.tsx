"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { services } from "@/lib/data";

export default function FeaturedPrograms() {
  const featured = services.slice(0, 4);
  return (
    <section className="section-padding bg-primary text-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Programs"
          title="Popular Training Programs"
          description="Our most requested programs, trusted by hundreds of students each year."
        />
        <div className="mt-1" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Icon className="text-accent" size={26} />
                <h4 className="mt-4 font-bold">{p.title}</h4>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
