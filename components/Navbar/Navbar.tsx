"use client";
import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ModeToggle } from "../Theme/ToggleThemeButton";
import MobileSidebar from "../MobileSidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="z-10 fixed w-full flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block font-bold text-primary md:text-3xl text-xl",
              font.className,
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size={"sm"} className="flex gap-1">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white" />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl={"/"} />
      </div>
    </div>
  );
};

export default Navbar;
