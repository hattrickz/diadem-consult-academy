import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { services } from "@/lib/data";

const quickLinks: { label: string; href: Route }[] = [
  { label: "About", href: "/about" as Route },
  { label: "Services", href: "/services" as Route },
  { label: "Training Programs", href: "/training-programs" as Route },
  { label: "Gallery", href: "/gallery" as Route },
  { label: "Testimonials", href: "/testimonials" as Route },
  { label: "Contact", href: "/contact" as Route },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="section-container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Image src="/images/brand/logo-white.png" alt="Diadem Consult Academy" width={150} height={45} />
          <p className="mt-4 text-sm text-white/70">
            Trusted educational consulting and training institution helping students and
            professionals succeed.
          </p>
          <div className="mt-5 flex gap-4">
            <Facebook size={20} className="text-white/70 transition hover:text-accent" />
            <Instagram size={20} className="text-white/70 transition hover:text-accent" />
            <Twitter size={20} className="text-white/70 transition hover:text-accent" />
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>Agip Bus Stop, 10 Shiro St, Fadeyi, Lagos 100253, Lagos</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0" />
              <span>+234 800 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0" />
              <span>info@diademconsultacademy.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Diadem Consult Academy. All rights reserved.</p>
          <Link href={"/privacy-policy" as Route} className="hover:text-accent">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
