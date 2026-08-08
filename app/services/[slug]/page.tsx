import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
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
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-40 text-white">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-container relative">
          <Link
            href={"/services" as Route}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-text-primary">
            <Icon size={28} />
          </div>

          <SectionHeading variant="dark" title={service.title} description={service.details} center={false} />
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold">What&apos;s Included</h3>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {related.length > 0 && (
              <div className="mt-14">
                <h3 className="text-lg font-bold">You Might Also Like</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((r) => {
                    const RelIcon = r.icon;
                    return (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}` as Route}
                        className="group rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <RelIcon size={18} />
                        </div>
                        <p className="mt-3 text-sm font-semibold">{r.title}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                          Learn more
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <p className="text-sm font-semibold text-text-secondary">Ready to get started?</p>
              <p className="mt-2 text-lg font-bold">Book {service.title}</p>
              <p className="mt-2 text-sm text-text-secondary">
                Schedule a free consultation and one of our advisors will walk you through the
                next steps.
              </p>
              <Link
                href={"/appointment" as Route}
                className="mt-6 block rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
