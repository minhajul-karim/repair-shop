"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      aria-label="go back"
      title="go back"
      onClick={() => {
        router.back();
      }}
    >
      Go back
    </Button>
  );
}
