import { z } from "zod";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const customerInsertSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  email: z.email("Please enter a valid email address"),
  phone: (schema) =>
    schema
      .min(1, "Phone is required")
      .regex(
        /^(\+880|880|0)?1[3-9]\d{8}$/,
        "Please enter a valid Bangladeshi mobile number (e.g., +8801712345678 or 01712345678)",
      ),
  address1: (schema) => schema.min(1, "Phone is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) =>
    schema
      .min(1, "State is required")
      .max(2, "State should be at least 2 characters"),
  zip: (schema) => schema.min(1, "Zip is required"),
});

export type CustomerInsertSchemaType = z.infer<typeof customerInsertSchema>;
