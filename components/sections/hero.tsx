"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Image src="/images/hero/hero-main.jpg" alt="Diadem Consult Academy" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Your Trusted Partner in Education &amp; Career Success
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Career counselling, admissions guidance, exam coaching and professional training —
            delivered with premium care.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={"/appointment" as Route}
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-text-primary transition hover:brightness-95"
            >
              Book an Appointment
            </Link>
            <Link
              href={"/services" as Route}
              className="rounded-full border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
