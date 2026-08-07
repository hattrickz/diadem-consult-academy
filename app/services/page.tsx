import type { Metadata } from "next";
import SectionHeading from "@/components/shared/section-heading";
import Services from "@/components/sections/services";
import AppointmentCta from "@/components/sections/appointment-cta";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore career counselling, admissions guidance, exam coaching and training services offered by Diadem Consult Academy.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="section-container">
          <SectionHeading
            eyebrow="Our Services"
            title="Every Service You Need, In One Place"
            description="From guidance to hands-on training, explore the full range of ways we support your journey."
          />
        </div>
      </section>
      <Services />
      <AppointmentCta />
    </>
  );
}
