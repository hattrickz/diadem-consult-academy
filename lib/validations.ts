import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(5, "Please enter a message"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
