import { getCustomer } from "../queries/getCustomer";
import { getTicket } from "../queries/getTicket";
import { customers } from "@/db/schema";
import { tickets } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Customer = InferSelectModel<typeof customers>;
type Ticket = InferSelectModel<typeof tickets>;

type TicketPageData = {
  mode: "edit" | "create";
  customer?: Customer;
  ticket?: Ticket;
};

type Result<T> = { success: true; data: T } | { success: false; error: string };

async function getTicketPageData(
  ticketId?: string,
  customerId?: string,
): Promise<Result<TicketPageData>> {
  if (!ticketId && !customerId) {
    return { success: false, error: "Ticket ID or Customer ID is required" };
  }

  if (ticketId) {
    const { data: ticket, error: ticketError } = await getTicket(
      parseInt(ticketId),
    );

    if (!ticket) {
      return { success: false, error: `No ticket found with ID#${ticketId}` };
    }

    if (ticketError) {
      return { success: false, error: ticketError };
    }

    if (ticket?.customerId) {
      const { data: customer, error: customerError } = await getCustomer(
        ticket.customerId,
      );

      if (customerError) {
        return { success: false, error: customerError };
      }

      return {
        success: true,
        data: {
          mode: "edit",
          ticket,
          customer: customer ?? undefined,
        },
      };
    }
  }

  if (customerId) {
    const { data: customer, error } = await getCustomer(parseInt(customerId));

    if (!customer) {
      return {
        success: false,
        error: `No customer found with ID#${customerId}`,
      };
    }

    if (error) {
      return { success: false, error };
    }

    return {
      success: true,
      data: {
        mode: "create",
        customer,
      },
    };
  }

  // Fallback return for any code path not covered above
  return { success: false, error: "Unable to fetch ticket or customer data" };
}

export { getTicketPageData };
