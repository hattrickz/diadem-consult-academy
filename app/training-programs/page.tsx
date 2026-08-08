import type { Metadata } from "next";
import SectionHeading from "@/components/shared/section-heading";
import FeaturedPrograms from "@/components/sections/featured-programs";
import Services from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Training Programs",
  description: "Explore JAMB, WAEC, NECO, computer training and other programs offered by Diadem Consult Academy.",
};

export default function TrainingProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-40 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="section-container relative">
          <SectionHeading
            variant="dark"
            eyebrow="Training Programs"
            title="Structured Programs for Real Results"
            description="Every program is designed around clear outcomes, so you always know what you're working toward."
          />
        </div>
      </section>
      <FeaturedPrograms />
      <Services />
    </>
  );
}
