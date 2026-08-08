"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
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
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/" as Route} className="flex items-center gap-2 transition-transform hover:scale-[1.03]">
          <Image
            src={scrolled ? "/images/brand/logo.png" : "/images/brand/logo-white.png"}
            alt="Diadem Consult Academy"
            width={140}
            height={42}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    scrolled
                      ? isActive
                        ? "text-primary"
                        : "text-text-primary hover:text-primary"
                      : isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                    scrolled ? "bg-gradient-to-r from-secondary to-accent" : "bg-accent",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </li>
            );
          })}
        </ul>

        <Link
          href={"/appointment" as Route}
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:brightness-95 md:block"
        >
          Book Appointment
        </Link>

        <button
          className={cn("md:hidden", scrolled ? "text-text-primary" : "text-white")}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-sm flex-col bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <Image src="/images/brand/logo.png" alt="Diadem Consult Academy" width={120} height={36} />
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={26} />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-lg font-medium",
                          isActive ? "text-primary" : "text-text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={"/appointment" as Route}
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-primary/20"
              >
                Book Appointment
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
