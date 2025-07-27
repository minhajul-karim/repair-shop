import { getCustomer } from "../queries/getCustomer";
import { customers } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Customer = InferSelectModel<typeof customers>;

type CustomerPageData = {
  mode: "edit" | "create";
  customer?: Customer;
};

type Result<T> = { success: true; data: T } | { success: false; error: string };

async function getCustomerPageData(
  id?: string,
): Promise<Result<CustomerPageData>> {
  if (!id) {
    return { success: true, data: { mode: "create" } };
  }

  return await getEditCustomerData(parseInt(id));
}

async function getEditCustomerData(
  customerId: number,
): Promise<Result<CustomerPageData>> {
  const { data: customer, error } = await getCustomer(customerId);

  if (error) {
    return { success: false, error: `Error loading customer: ${error}` };
  }

  if (!customer) {
    return { success: false, error: `No customer found with ID#${customerId}` };
  }

  return {
    success: true,
    data: { mode: "edit", customer },
  };
}

export { getCustomerPageData };
