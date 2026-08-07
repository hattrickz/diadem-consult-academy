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
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Icon className="text-accent" size={28} />
                  <h4 className="mt-3 font-bold">{r.title}</h4>
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
          className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:order-2"
        >
          <Image src="/images/about/why-choose-us.jpg" alt="Why choose Diadem Consult Academy" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
