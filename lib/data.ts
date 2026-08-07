import {
  Compass, GraduationCap, Laptop, PenTool, BookOpenCheck, Globe2,
  Landmark, Plane, type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  details: string;
  highlights: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "career-counselling", title: "Career Counselling", description: "One-on-one guidance to help you choose the right academic and career path.", details: "Our career counsellors work closely with you to understand your strengths, interests and goals, then map out a clear academic and career path forward. Sessions are personalized, practical and focused on real decisions you're facing right now.", highlights: ["One-on-one sessions with certified counsellors", "Aptitude and interest assessment", "Personalized career roadmap", "Ongoing follow-up support"], icon: Compass },
  { slug: "admissions-guidance", title: "Admissions Guidance", description: "Expert support through university and college application processes.", details: "From shortlisting institutions to preparing application documents, our admissions team guides you through every step of the process so you can apply with confidence and avoid common, costly mistakes.", highlights: ["Institution shortlisting", "Application document review", "Deadline tracking", "Interview preparation"], icon: GraduationCap },
  { slug: "jamb-cbt-training", title: "JAMB CBT Training", description: "Focused, computer-based practice to help you excel in the JAMB exam.", details: "Practice on real CBT-style interfaces with timed mock exams, subject-focused drills and performance tracking, so exam day feels familiar rather than stressful.", highlights: ["Timed CBT mock exams", "Subject-by-subject drills", "Performance tracking", "Small-group coaching"], icon: BookOpenCheck },
  { slug: "waec-neco-coaching", title: "WAEC / NECO Coaching", description: "Structured coaching to help you pass your senior secondary exams with confidence.", details: "Our structured coaching program covers core and elective subjects with experienced teachers, regular assessments and past-question practice tailored to the WAEC and NECO syllabus.", highlights: ["Syllabus-aligned lesson plans", "Past-question practice", "Regular mock assessments", "Experienced subject teachers"], icon: PenTool },
  { slug: "computer-training", title: "Computer Training", description: "Practical, hands-on computer literacy and digital skills training.", details: "Learn essential computer skills — from basic operation to productivity software — through hands-on, practical sessions designed for beginners and those looking to build job-ready digital skills.", highlights: ["Hands-on lab sessions", "Beginner to intermediate tracks", "Certificate on completion", "Job-ready digital skills"], icon: Laptop },
  { slug: "graphic-design", title: "Graphic Design & Adobe", description: "Learn Photoshop, design fundamentals and creative software tools.", details: "A practical introduction to graphic design principles and industry-standard tools like Adobe Photoshop, built around real projects you can add to a portfolio.", highlights: ["Adobe Photoshop fundamentals", "Design principles & theory", "Portfolio-building projects", "Small-class, hands-on format"], icon: PenTool },
  { slug: "international-exams", title: "International Exams", description: "Preparation support for IELTS, TOEFL and other international assessments.", details: "Targeted preparation for IELTS, TOEFL and similar assessments, covering all four skill areas with practice tests and personalized feedback to help you hit your target score.", highlights: ["IELTS & TOEFL preparation", "Full-length practice tests", "Speaking & writing feedback", "Score-target coaching plans"], icon: Globe2 },
  { slug: "tax-consultancy", title: "Tax Consultancy", description: "Professional advisory on personal and business tax matters.", details: "Straightforward, professional tax advisory for individuals and small businesses — covering filing, compliance and planning so you can make informed financial decisions.", highlights: ["Personal & business tax advisory", "Filing & compliance support", "Tax planning guidance", "One-on-one consultations"], icon: Landmark },
  { slug: "travel-services", title: "Travel Services", description: "End-to-end support for study-related and personal travel arrangements.", details: "From visa guidance to travel logistics, we support students and clients through the practical side of study-related and personal travel, start to finish.", highlights: ["Visa application guidance", "Travel logistics support", "Study-related travel planning", "Ongoing support until departure"], icon: Plane },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  { name: "Chiamaka O.", role: "JAMB Candidate", quote: "Diadem's coaching helped me improve my score dramatically. The tutors were patient and thorough.", rating: 5, image: "/images/testimonials/testimonial-1.jpg" },
  { name: "Tunde A.", role: "Admissions Client", quote: "The admissions guidance team made a confusing process feel simple and manageable.", rating: 5, image: "/images/testimonials/testimonial-2.jpg" },
  { name: "Ngozi E.", role: "Computer Training Graduate", quote: "I walked in knowing almost nothing about computers and walked out job-ready.", rating: 5, image: "/images/testimonials/testimonial-3.jpg" },
  { name: "Ifeanyi K.", role: "WAEC Student", quote: "Structured lessons and constant encouragement made all the difference for me.", rating: 4, image: "/images/testimonials/testimonial-4.jpg" },
  { name: "Blessing U.", role: "Career Counselling Client", quote: "They helped me discover a career path I'm genuinely excited about.", rating: 5, image: "/images/testimonials/testimonial-5.jpg" },
  { name: "Emeka N.", role: "IELTS Candidate", quote: "Professional, organized, and genuinely invested in my success.", rating: 5, image: "/images/testimonials/testimonial-6.jpg" },
];

export const galleryImages = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/images/gallery/gallery-${n}.jpg`, alt: `Diadem Consult Academy — gallery photo ${n}`, category: i % 3 === 0 ? "Events" : i % 3 === 1 ? "Classroom" : "Office" };
});

export const stats = [
  { label: "Students Guided", value: 1200, suffix: "+" },
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Programs Offered", value: 12, suffix: "" },
  { label: "Success Rate", value: 95, suffix: "%" },
];
