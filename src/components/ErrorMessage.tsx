import { BackButton } from "./BackButton";

function ErrorMessage({ message = "" }: { message: string }) {
  return (
    <>
      <h2 className="mb-2 text-red-500">{message}</h2>
      <BackButton />
    </>
  );
}

export { ErrorMessage };
