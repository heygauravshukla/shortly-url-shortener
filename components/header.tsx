"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconHamburger from "./icons/icon-hamburger";
import { Button } from "./ui/button";
import Wrapper from "./ui/wrapper";

interface NavigationItem {
  id: number;
  name: string;
  path: string;
}

// Navigation links data
const navigation: NavigationItem[] = [
  { id: 1, name: "Features", path: "/" },
  { id: 2, name: "Pricing", path: "/" },
  { id: 3, name: "Resources", path: "/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative pb-6 pt-10 lg:pb-8 lg:pt-12">
      <Wrapper className="flex items-center justify-between lg:gap-11">
        {/* Logo */}
        <Link href="/" aria-label="Shortly Home" className="min-w-fit">
          <Image
            src="/logos/logo-dark.svg"
            alt="Shortly logo"
            width={121}
            height={33}
            priority
          />
        </Link>
        {/* Mobile menu toggle button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <IconHamburger />
        </button>
        {/* Main navigation menu */}
        <nav
          id="main-navigation"
          aria-label="Main Navigation"
          className={cn(
            "absolute inset-x-6 top-full grid gap-8 rounded-xl bg-primary px-6 py-10 lg:static lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:bg-transparent lg:p-0",
            {
              hidden: !isMenuOpen,
            }
          )}
        >
          {/* Navigation links list */}
          <ul className="grid justify-items-center gap-8 lg:flex lg:flex-row lg:items-center">
            {navigation.map(({ id, name, path }) => (
              <li key={id}>
                <Link
                  href={path}
                  className="font-bold text-lg text-primary-foreground lg:text-base lg:-tracking-4 lg:text-secondary lg:hover:text-foreground lg:transition-all"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Divider line for mobile view */}
          <div className="h-[1px] bg-secondary lg:hidden"></div>
          {/* Authentication buttons */}
          <div className="grid gap-6 lg:flex lg:flex-row lg:gap-9">
            <Button
              variant="ghost"
              size="lg"
              className="p-0 text-background lg:p-0 lg:text-base lg:-tracking-4 lg:text-secondary lg:hover:bg-background lg:hover:text-foreground"
            >
              Login
            </Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
