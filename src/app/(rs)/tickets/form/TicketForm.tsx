"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ticketInsertSchema } from "@/zod-schema/ticket";
import { customerInsertSchema } from "@/zod-schema/customer";
import type { CustomerInsertSchemaType } from "@/zod-schema/customer";
import type { TicketInsertSchemaType } from "@/zod-schema/ticket";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input"

type Props = {
  customer?: CustomerInsertSchemaType;
  ticket?: TicketInsertSchemaType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const form = useForm({
    resolver: zodResolver(ticketInsertSchema),
    defaultValues: {
      customerId: ticket?.customerId ?? 0,
      title: ticket?.title ?? "",
      description: ticket?.description ?? "",
      completed: ticket?.completed ?? false,
      technician: ticket?.technician ?? "",
    },
  });

  function onSubmit(values: TicketInsertSchemaType) {
    console.log(values);
  }

  return (
    <>
      <h1 className="text-2xl font-bold">
        {ticket?.id && customer?.id && `Edit ticket #${ticket?.id} for ${customer?.firstName}`}
        {customer?.id && `Create ticket for ${customer?.firstName}`}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {JSON.stringify(form.getValues())}
        </form>
      </Form>
    </>
  );
}
