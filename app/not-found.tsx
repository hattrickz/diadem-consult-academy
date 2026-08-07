import Link from "next/link";
import type { Route } from "next";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-secondary">404 Error</p>
      <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href={"/" as Route}
        className="mt-8 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-secondary"
      >
        Back to Home
      </Link>
    </section>
  );
}
