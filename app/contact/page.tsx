"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

const ADDRESS = "Diadem Consult Academy, Agip Bus Stop, 10 Shiro St, Fadeyi, Lagos 100253, Lagos";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_data: ContactFormValues) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-40 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="section-container relative">
          <SectionHeading variant="dark" eyebrow="Contact Us" title="We'd Love to Hear From You" />
        </div>
      </section>

      <section className="section-padding pt-16">
      <div className="section-container">
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
              <iframe title="Diadem Consult Academy location" src={MAP_EMBED_SRC} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-primary" size={22} />
                <p>Agip Bus Stop, 10 Shiro St, Fadeyi, Lagos 100253, Lagos</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary" size={22} />
                <p>+234 800 000 0000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-primary" size={22} />
                <p>info@diademconsultacademy.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="shrink-0 text-primary" size={22} />
                <p>Mon to Sat: 9:00 AM to 6:00 PM</p>
              </div>
            </div>

            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">Get Directions</a>
          </div>

          <div>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center rounded-2xl bg-success/10 p-10 text-center">
                  <CheckCircle2 className="text-success" size={44} />
                  <h3 className="mt-4 text-lg font-bold">Message Sent</h3>
                  <p className="mt-2 text-sm text-text-secondary">Thanks for reaching out, we will get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form key="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-border bg-surface p-8 shadow-sm">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Name</label>
                    <input {...register("name")} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:shadow-lg focus:shadow-secondary/10 focus:ring-4 focus:ring-secondary/10" />
                    {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Email</label>
                    <input type="email" {...register("email")} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:shadow-lg focus:shadow-secondary/10 focus:ring-4 focus:ring-secondary/10" />
                    {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Message</label>
                    <textarea {...register("message")} rows={5} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:shadow-lg focus:shadow-secondary/10 focus:ring-4 focus:ring-secondary/10" />
                    {errors.message && <p className="mt-1 text-xs text-danger">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={status === "loading"} className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70 disabled:hover:translate-y-0">
                    {status === "loading" && <Loader2 className="animate-spin" size={18} />}
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
