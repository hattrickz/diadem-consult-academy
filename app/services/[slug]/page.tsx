import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AppointmentCta from "@/components/sections/appointment-cta";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <section className="pt-32 pb-4">
        <div className="section-container">
          <Link
            href={"/services" as Route}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon size={28} />
          </div>

          <SectionHeading title={service.title} description={service.details} center={false} />

          <div className="mt-10 max-w-xl">
            <h3 className="text-lg font-bold">What&apos;s Included</h3>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={"/appointment" as Route}
            className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-secondary"
          >
            Book This Service
          </Link>
        </div>
      </section>

      <div className="mt-16">
        <AppointmentCta />
      </div>
    </>
  );
}
