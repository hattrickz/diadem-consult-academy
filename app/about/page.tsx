import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Heart, Sparkles, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import Statistics from "@/components/sections/statistics";
import AppointmentCta from "@/components/sections/appointment-cta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Diadem Consult Academy's mission, values and team.",
};

const values = [
  { icon: Heart, title: "Integrity", description: "Honest guidance in every interaction, every time." },
  { icon: Sparkles, title: "Excellence", description: "High standards in every program we deliver." },
  { icon: Target, title: "Genuine Care", description: "Invested in every student's individual success." },
  { icon: Lightbulb, title: "Innovation", description: "Modern, effective approaches to teaching and guidance." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-20 pt-40 text-white">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-container relative">
          <SectionHeading
            variant="dark"
            eyebrow="About Diadem Consult Academy"
            title="Empowering Students Since Day One"
            description="We are a premium educational consulting and training institution dedicated to guiding students and professionals toward their academic and career goals."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-secondary/10 to-accent/10 blur-xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/about/about-office.jpg"
                alt="Diadem Consult Academy office"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Our Mission
            </span>
            <h2 className="text-2xl font-extrabold md:text-3xl">Purpose-Driven Guidance</h2>
            <p className="mt-4 text-text-secondary">
              To provide accessible, high-quality educational consulting and training that
              equips students and professionals with the tools they need to succeed — from
              exam readiness to career direction.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personalized guidance, not one-size-fits-all advice",
                "Transparent, honest counselling at every step",
                "A track record built on real student outcomes",
              ].map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeading eyebrow="Our Values" title="What Guides Everything We Do" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Statistics />
      <AppointmentCta />
    </>
  );
}
