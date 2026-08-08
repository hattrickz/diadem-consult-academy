"use client";

import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";

export default function AppointmentCta() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="section-container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Take the Next Step?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Book a free consultation with one of our advisors and let&apos;s plan your path to
            success together.
          </p>
          <Link
            href={"/appointment" as Route}
            className="mt-8 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-text-primary shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-95"
          >
            Book Your Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
