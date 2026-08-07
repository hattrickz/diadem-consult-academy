"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { appointmentSchema, type AppointmentFormValues } from "@/lib/validations";
import { services } from "@/lib/data";

export default function AppointmentPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({ resolver: zodResolver(appointmentSchema) });

  const onSubmit = async (data: AppointmentFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="pt-32 pb-20">
      <div className="section-container max-w-2xl">
        <SectionHeading
          eyebrow="Book an Appointment"
          title="Let's Plan Your Next Step"
          description="Fill in the form below and one of our advisors will reach out to confirm your appointment."
        />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-col items-center rounded-2xl bg-success/10 p-10 text-center"
            >
              <CheckCircle2 className="text-success" size={48} />
              <h3 className="mt-4 text-xl font-bold">Appointment Request Sent</h3>
              <p className="mt-2 text-text-secondary">
                Thank you! We&apos;ll contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-5 rounded-2xl bg-surface p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Full Name</label>
                  <input
                    {...register("name")}
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                  {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>}
                </div>
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Preferred Date</label>
                  <input
                    type="date"
                    {...register("preferredDate")}
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-danger">{errors.preferredDate.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Preferred Time</label>
                  <input
                    type="time"
                    {...register("preferredTime")}
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                  {errors.preferredTime && (
                    <p className="mt-1 text-xs text-danger">{errors.preferredTime.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold">Service Interested In</label>
                <select
                  {...register("serviceInterest")}
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <p className="mt-1 text-xs text-danger">{errors.serviceInterest.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold">Message (optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full rounded-lg border border-border bg-white px-4 py-2.5 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-danger">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-secondary disabled:opacity-70"
              >
                {status === "loading" && <Loader2 className="animate-spin" size={18} />}
                {status === "loading" ? "Sending..." : "Book Appointment"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
