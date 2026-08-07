"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Certified counsellors with years of experience",
  "Proven track record of exam and admissions success",
  "Personalized, one-on-one guidance",
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="section-container grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image src="/images/about/about-office.jpg" alt="Inside Diadem Consult Academy" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            About Us
          </span>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Guiding Students Toward Their Best Future
          </h2>
          <p className="mt-4 text-text-secondary">
            Diadem Consult Academy has helped hundreds of students and professionals across
            Nigeria navigate their education and career decisions with confidence — from exam
            coaching to admissions guidance and beyond.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-success" size={22} />
                <span className="text-text-primary">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href={"/about" as Route}
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-secondary"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
