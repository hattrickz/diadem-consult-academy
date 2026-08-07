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
      <section className="pt-32 pb-4">
        <div className="section-container">
          <SectionHeading
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
