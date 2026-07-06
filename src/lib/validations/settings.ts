import { z } from "zod";

export const profileSettingsSchema = z.object({
  avatar: z.string(),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.email("Enter a valid email address."),
  jobTitle: z.string().min(2, "Job title is required."),
  bio: z.string().min(10, "Bio must be at least 10 characters.").max(240),
  timezone: z.string().min(1, "Timezone is required."),
});

export const organizationSettingsSchema = z.object({
  companyName: z.string().min(2, "Company name is required."),
  website: z.url("Enter a valid website URL."),
  industry: z.string().min(2, "Industry is required."),
  companySize: z.string().min(1, "Company size is required."),
  country: z.string().min(2, "Country is required."),
});

export type TProfileSettingsForm = z.infer<typeof profileSettingsSchema>;
export type TOrganizationSettingsForm = z.infer<
  typeof organizationSettingsSchema
>;
