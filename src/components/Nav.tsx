import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Quill
          </Link>
          <div className="hidden items-center space-x-6 sm:flex">
            <SignedIn>
              <Link href="/dashboard">Dashboard</Link>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <SignInButton mode="modal">
                  <Button variant={"outline"} size={"sm"}>
                    Login
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button size={"sm"} className="ml-1.5">
                    Sign up{" "}
                    <span className="ml-1.5" aria-hidden="true">
                      &rarr;
                    </span>
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
