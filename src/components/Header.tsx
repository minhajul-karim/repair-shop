"use client"

import Link from "next/link";
import { HomeIcon, File, UsersRound, LogOutIcon } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import { ThemeToggle } from "./ThemeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";

function LogoutButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      title="logout"
      className="rounded-full"
      asChild
    >
      <LogoutLink>
        <LogOutIcon />
      </LogoutLink>
    </Button>
  );
}

export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ThemeToggle />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
