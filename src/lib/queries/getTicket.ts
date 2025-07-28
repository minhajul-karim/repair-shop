import { db } from "@/db";
import { tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

async function getTicket(id: number) {
  try {
    const ticket = await db.select().from(tickets).where(eq(tickets.id, id));
    return {
      data: ticket[0] || null,
      error: null,
    };
  } catch (error) {
    console.log(">>> error >>>", error);
    return { data: null, error: "Failed to fetch ticket" };
  }
}

export { getTicket };
