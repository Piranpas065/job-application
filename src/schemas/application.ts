import { z } from "zod";

export const personalSchema = z.object({
  fullName: z.string().min(3, "Minimum 3 characters").max(100, "Maximum 100 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
});

export const experienceSchema = z.object({
  skills: z.array(z.string(), { error: "At least one skill is required" }).min(1, "At least one skill is required"),
  years: z.number({ error: "Years of experience must be a number" }).min(0, "Years of experience cannot be negative").max(50, "Years of experience cannot exceed 50"),
  resumeUrl: z.url("Invalid URL for resume"),
});

export type PersonalForm = z.infer<typeof personalSchema>;
export type ExperienceForm = z.infer<typeof experienceSchema>;