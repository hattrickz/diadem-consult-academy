"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";

const items = [
  { icon: MapPin, label: "Address", value: "Agip Bus Stop, 10 Shiro St, Fadeyi, Lagos 100253, Lagos" },
  { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
  { icon: Mail, label: "Email", value: "info@diademconsultacademy.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

export default function ContactPreview() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <SectionHeading eyebrow="Get in Touch" title="Visit or Reach Out to Us" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <Icon className="mx-auto text-primary" size={26} />
                <p className="mt-3 text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-text-secondary">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
