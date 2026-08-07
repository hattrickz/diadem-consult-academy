"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: { label: string; href: Route }[] = [
  { label: "Home", href: "/" as Route },
  { label: "About", href: "/about" as Route },
  { label: "Services", href: "/services" as Route },
  { label: "Programs", href: "/training-programs" as Route },
  { label: "Gallery", href: "/gallery" as Route },
  { label: "Contact", href: "/contact" as Route },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/" as Route} className="flex items-center gap-2">
          <Image src="/images/brand/logo.png" alt="Diadem Consult Academy" width={140} height={42} priority />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="group relative">
              <Link href={item.href} className="text-sm font-medium text-text-primary">
                {item.label}
              </Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <Link
          href={"/appointment" as Route}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary md:block"
        >
          Book Appointment
        </Link>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Image src="/images/brand/logo.png" alt="Diadem Consult Academy" width={120} height={36} />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <ul className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={"/appointment" as Route}
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
