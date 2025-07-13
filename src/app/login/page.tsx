import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-10 items-center mt-20">
      <h1 className="text-5xl">Login to Repair Shop</h1>
      <Button asChild className="w-fit p-7">
        <LoginLink>Log in</LoginLink>
      </Button>
    </div>
  );
}
