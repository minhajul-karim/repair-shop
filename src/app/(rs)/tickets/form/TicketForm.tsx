"use client";

import { Form } from "@/components/ui/form";
import type { CustomerInsertSchemaType } from "@/zod-schema/customer";
import type { TicketInsertSchemaType } from "@/zod-schema/ticket";
import { ticketInsertSchema } from "@/zod-schema/ticket";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/inputs/InputField";
import SelectField from "@/components/inputs/SelectField";
import CheckBoxField from "@/components/inputs/CheckboxField";
import TextAreaField from "@/components/inputs/TextArea";
import { Button } from "@/components/ui/button";
import technicians from "@/constants/technicians";

type Props = {
  customer?: CustomerInsertSchemaType;
  ticket?: TicketInsertSchemaType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const form = useForm({
    mode: "onBlur",
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
        {ticket?.id &&
          customer?.id &&
          `Edit ticket #${ticket?.id} for ${customer?.firstName}`}
        {customer?.id && `Create ticket for ${customer?.firstName}`}
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {JSON.stringify(form.getValues())}
          <InputField<TicketInsertSchemaType>
            name="title"
            placeholder="Title"
          />
          <SelectField<TicketInsertSchemaType>
            name="technician"
            placeholder="Select a technicial"
            options={technicians}
          />
          <TextAreaField<TicketInsertSchemaType>
            name="description"
            placeholder="Description"
            className="h-50"
          />
          <CheckBoxField<TicketInsertSchemaType>
            name="completed"
            label="Is it completed?"
            checked={form.getValues()?.completed}
          />
          <div className="flex gap-3">
            <Button type="submit">Submit</Button>
            <Button type="reset" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
