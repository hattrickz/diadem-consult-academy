import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsappButton from "@/components/shared/whatsapp-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diademconsultacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diadem Consult Academy | Career, Admissions & Exam Coaching",
    template: "%s | Diadem Consult Academy",
  },
  description:
    "Diadem Consult Academy provides career counselling, admissions guidance, JAMB/WAEC/NECO coaching, computer training and international exam prep in Nigeria.",
  openGraph: {
    title: "Diadem Consult Academy",
    description: "Premium educational consulting and training institution in Nigeria.",
    images: ["/images/og/og-image.png"],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diadem Consult Academy",
    images: ["/images/og/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
