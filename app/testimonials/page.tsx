import type { Metadata } from "next";
import SectionHeading from "@/components/shared/section-heading";
import Testimonials from "@/components/sections/testimonials";
import AppointmentCta from "@/components/sections/appointment-cta";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear from students and clients who have worked with Diadem Consult Academy.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-40 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="section-container relative">
          <SectionHeading variant="dark" eyebrow="Testimonials" title="Real Stories From Real Students" />
        </div>
      </section>
      <Testimonials />
      <AppointmentCta />
    </>
  );
}
