"use client";

import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { services } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Built Around Your Goals"
          description="From exam coaching to career guidance, every service is designed to move you closer to your goals."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={item}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
                <Link
                  href={`/services/${service.slug}` as Route}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary"
                >
                  Learn more
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
