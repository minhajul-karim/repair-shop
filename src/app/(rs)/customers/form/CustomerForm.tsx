"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { customerInsertSchema } from "@/zod-schema/customer";
import type { CustomerInsertSchemaType } from "@/zod-schema/customer";
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
};

export default function CustomerForm({ customer }: Props) {
  const form = useForm({
    resolver: zodResolver(customerInsertSchema),
    defaultValues: {
      firstName: customer?.firstName ?? "",
      lastName: customer?.lastName ?? "",
      email: customer?.email ?? "",
      phone: customer?.phone ?? "",
      address1: customer?.address1 ?? "",
      address2: customer?.address2 ?? "",
      city: customer?.city ?? "",
      state: customer?.state ?? "",
      zip: customer?.zip ?? "",
      notes: customer?.notes ?? "",
    },
  });

  function onSubmit(values: CustomerInsertSchemaType) {
    console.log(values);
  }

  return (
    <>
      <h1 className="text-2xl font-bold">
        {customer?.id ? `Edit customer #${customer?.id}` : "Create customer"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {JSON.stringify(form.getValues())}
        </form>
      </Form>
    </>
  );
}
