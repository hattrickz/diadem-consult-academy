import Hero from "@/components/sections/hero";
import AboutPreview from "@/components/sections/about-preview";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import FeaturedPrograms from "@/components/sections/featured-programs";
import Statistics from "@/components/sections/statistics";
import Testimonials from "@/components/sections/testimonials";
import GalleryPreview from "@/components/sections/gallery-preview";
import AppointmentCta from "@/components/sections/appointment-cta";
import ContactPreview from "@/components/sections/contact-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <FeaturedPrograms />
      <Statistics />
      <Testimonials />
      <GalleryPreview />
      <AppointmentCta />
      <ContactPreview />
    </>
  );
}
