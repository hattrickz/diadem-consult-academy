import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import Statistics from "@/components/sections/statistics";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Diadem Consult Academy's mission, values and team.",
};

const values = [
  "Integrity in every interaction",
  "Excellence in every program we deliver",
  "Genuine care for every student's success",
  "Innovation in how we teach and guide",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="section-container">
          <SectionHeading
            eyebrow="About Diadem Consult Academy"
            title="Empowering Students Since Day One"
            description="We are a premium educational consulting and training institution dedicated to guiding students and professionals toward their academic and career goals."
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-container grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image src="/images/about/about-office.jpg" alt="Diadem Consult Academy office" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Our Mission</h2>
            <p className="mt-4 text-text-secondary">
              To provide accessible, high-quality educational consulting and training that
              equips students and professionals with the tools they need to succeed — from
              exam readiness to career direction.
            </p>
            <h3 className="mt-8 text-xl font-bold">Our Values</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Statistics />
    </>
  );
}
