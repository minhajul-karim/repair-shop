import { db } from "@/db";
import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";

async function getCustomer(id: number) {
  try {
    const customer = await db
      .select()
      .from(customers)
      .where(eq(customers.id, id));
    return { data: customer[0] || null, error: null };
  } catch (error) {
    console.log(">>> error >>>", error);
    return { data: null, error: "Failed to fetch customer" }
  }
}

export { getCustomer };
