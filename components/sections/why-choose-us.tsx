"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";

const reasons = [
  { icon: ShieldCheck, title: "Trusted Expertise", description: "Years of proven results guiding students to success." },
  { icon: Users, title: "Personalized Support", description: "One-on-one attention tailored to your specific goals." },
  { icon: Award, title: "Track Record", description: "Hundreds of successful placements and exam passes." },
  { icon: Clock, title: "Flexible Scheduling", description: "Sessions that work around your availability." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="section-container grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <SectionHeading eyebrow="Why Choose Us" title="A Partner Invested in Your Success" center={false} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-3 font-heading font-bold">{r.title}</h4>
                  <p className="mt-1 text-sm text-text-secondary">{r.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative order-1 md:order-2"
        >
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-secondary/10 to-accent/10 blur-xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about/why-choose-us.jpg"
              alt="Why choose Diadem Consult Academy"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
