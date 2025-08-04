"use client";

import InputField from "@/components/inputs/InputField";
import TextAreaField from "@/components/inputs/TextArea";
import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import type { CustomerInsertSchemaType } from "@/zod-schema/customer";
import { customerInsertSchema } from "@/zod-schema/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  customer?: CustomerInsertSchemaType;
};

export default function CustomerForm({ customer }: Props) {
  const form = useForm({
    mode: "onBlur",
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
      <h1 className="text-2xl font-bold mb-5">
        {customer?.id ? `Edit customer #${customer?.id}` : "Create customer"}
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputField<CustomerInsertSchemaType>
            name="firstName"
            placeholder="First name"
          />
          <InputField<CustomerInsertSchemaType>
            name="lastName"
            placeholder="Last name"
          />
          <InputField<CustomerInsertSchemaType>
            name="email"
            placeholder="Email address"
          />
          <InputField<CustomerInsertSchemaType>
            name="phone"
            placeholder="Phone"
          />
          <InputField<CustomerInsertSchemaType>
            name="address1"
            placeholder="Address 1"
          />
          <InputField<CustomerInsertSchemaType>
            disabled
            name="address2"
            placeholder="Address 2"
          />
          <InputField<CustomerInsertSchemaType>
            name="city"
            placeholder="City"
          />
          <InputField<CustomerInsertSchemaType>
            name="state"
            placeholder="State"
          />
          <InputField<CustomerInsertSchemaType> name="zip" placeholder="Zip" />
          <TextAreaField<CustomerInsertSchemaType>
            name="notes"
            placeholder="Notes"
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
