import type { Metadata } from "next";
import SectionHeading from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Diadem Consult Academy's privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="section-container max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" center={false} />
        <div className="mt-8 space-y-6 text-text-secondary">
          <p>
            Diadem Consult Academy (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
            This policy explains what information we collect through this website and how we
            use it.
          </p>
          <h2 className="text-xl font-bold text-text-primary">Information We Collect</h2>
          <p>
            When you submit our appointment or contact forms, we collect your name, phone
            number, email address and any message you provide, solely to respond to your
            enquiry and schedule appointments.
          </p>
          <h2 className="text-xl font-bold text-text-primary">How We Use Your Information</h2>
          <p>
            We use the information you provide to contact you regarding your enquiry or
            appointment. We do not sell or share your information with third parties for
            marketing purposes.
          </p>
          <h2 className="text-xl font-bold text-text-primary">Contact Us</h2>
          <p>
            If you have questions about this policy, contact us at
            info@diademconsultacademy.com.
          </p>
        </div>
      </div>
    </section>
  );
}
