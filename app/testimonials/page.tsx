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
      <section className="pt-32 pb-4">
        <div className="section-container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Real Stories From Real Students"
          />
        </div>
      </section>
      <Testimonials />
      <AppointmentCta />
    </>
  );
}
