import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { ErrorMessage } from "@/components/ErrorMessage";
import { getTicketPageData } from "@/lib/utils/ticketHelpers";
import TicketForm from "./TicketForm";

type PageProps = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

export default async function TicketPage({ searchParams }: PageProps) {
  const { ticketId, customerId } = await searchParams;
  const result = await getTicketPageData(ticketId, customerId);

  if (!result.success) {
    return <ErrorMessage message={result.error} />;
  }

  const { mode, ticket, customer } = result.data;

  if (ticketId) {
    return <TicketForm customer={customer} ticket={ticket} />;
  }

  if (customerId) {
    return <TicketForm customer={customer} />;
  }

  return null;
}
