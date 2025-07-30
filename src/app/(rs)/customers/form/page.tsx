import { ErrorMessage } from "@/components/ErrorMessage";
import { getCustomerPageData } from "@/lib/utils/customerHelpers";
import CustomerForm from "./CustomerForm";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Customer({ searchParams }: PageProps) {
  const { id } = await searchParams;
  const result = await getCustomerPageData(id);

  if (!result.success) {
    return <ErrorMessage message={result.error} />;
  }

  const { mode, customer } = result.data;

  if (!id || mode === "create") {
    return <CustomerForm />;
  }

  return <CustomerForm customer={customer} />;
}
