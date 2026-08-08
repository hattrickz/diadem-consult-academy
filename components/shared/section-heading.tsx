"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-wider",
            isDark ? "text-accent" : "text-secondary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold md:text-4xl",
          isDark ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4", isDark ? "text-white/80" : "text-text-secondary")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
