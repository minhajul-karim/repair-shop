import { BackButton } from "@/components/BackButton";
import { getCustomerPageData } from "@/lib/utils/customerHelpers";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function CustomerForm({ searchParams }: PageProps) {
  const { id } = await searchParams;
  const result = await getCustomerPageData(id);

  if (!result.success) {
    return (
      <>
        <h2 className="mb-2 text-black dark:text-blue-500">{result.error}</h2>
        <BackButton />
      </>
    );
  }

  const { mode, customer } = result.data;

  if (!id) {
    return (
      <h2 className="mb-2 text-black dark:text-blue-500">Add customer form</h2>
    );
  }

  if (mode === "create") {
    return (
      <h2 className="mb-2 text-black dark:text-blue-500">Add customer form</h2>
    );
  }

  return (
    <>
      <h2 className="mb-2 text-black dark:text-blue-500">Edit Customer</h2>
      <p>Customer data: {JSON.stringify(customer)}</p>
    </>
  );
}
