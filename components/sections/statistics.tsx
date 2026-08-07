"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/animated-counter";
import { stats } from "@/lib/data";

export default function Statistics() {
  return (
    <section className="section-padding">
      <div className="section-container grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl font-extrabold text-primary md:text-5xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-text-secondary">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
