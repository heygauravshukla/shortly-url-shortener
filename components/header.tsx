"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IconHamburger from "./icons/icon-hamburger";
import Button from "./ui/button";
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

  return (
    <Wrapper
      as="header"
      className="relative flex items-center justify-between pb-6 pt-10 lg:gap-11 lg:pt-12"
    >
      {/* Logo */}
      <Link href="/" aria-label="Shortly Home">
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
        className={`${isMenuOpen ? "" : "hidden"} absolute inset-x-6 top-full grid gap-8 rounded-xl bg-dark-violet px-6 py-10 lg:static lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:bg-transparent lg:p-0`}
      >
        {/* Navigation links list */}
        <ul className="grid justify-items-center gap-8 lg:flex lg:flex-row lg:items-center">
          {navigation.map(({ id, name, path }) => (
            <li key={id}>
              <Link
                href={path}
                className="text-lg font-bold text-white lg:text-base lg:-tracking-4 lg:text-grayish-violet lg:transition-all lg:hover:text-very-dark-violet"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider line for mobile view */}
        <div className="h-[1px] bg-grayish-violet lg:hidden"></div>

        {/* Authentication buttons */}
        <div className="grid gap-6 lg:flex lg:flex-row lg:gap-9">
          <button
            type="button"
            className="text-lg font-bold text-white lg:text-base lg:-tracking-4 lg:text-grayish-violet lg:transition-all lg:hover:text-very-dark-violet"
          >
            Login
          </button>
          <Button type="button">Sign Up</Button>
        </div>
      </nav>
    </Wrapper>
  );
}
