import { z } from "zod";
import { createInsertSchema, CreateInsertSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";

export const ticketInsertSchema = createInsertSchema(tickets, {
  title: (schema) => schema.min(1, "Title is required"),
  description: (schema) => schema.min(1, "Description is required"),
  technician: (schema) => schema.min(1, "Technician is required"),
});

export type TicketInsertSchemaType = z.infer<typeof ticketInsertSchema>;
