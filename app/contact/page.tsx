"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

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
    // Reuses the same pattern as the appointment form; wire to /api/contact if you add one.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    reset();
  };

  return (
    <section className="pt-32 pb-20">
      <div className="section-container">
        <SectionHeading eyebrow="Contact Us" title="We'd Love to Hear From You" />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
              <iframe
                title="Diadem Consult Academy location"
                src="https://www.google.com/maps?q=Diadem+Consult+Academy,+Agip+Bus+Stop,+10+Shiro+St,+Fadeyi,+Lagos+100253,+Lagos&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Diadem+Consult+Academy,+Agip+Bus+Stop,+10+Shiro+St,+Fadeyi,+Lagos+100253,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Get Directions
            </a>
          </div>

          <div>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center rounded-2xl bg-success/10 p-10 text-center"
                >
                  <CheckCircle2 className="text-success" size={44} />
                  <h3 className="mt-4 text-lg font-bold">Message Sent</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Thanks for reaching out — we&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 rounded-2xl bg-surface p-8"
                >
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Name</label>
                    <input
                      {...register("name")}
                      className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                    {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Email</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                    {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold">Message</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                    {errors.message && <p className="mt-1 text-xs text-danger">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-secondary disabled:opacity-70"
                  >
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
  );
}
