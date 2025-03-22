"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

// Define navigation links as a constant array for better maintainability
const NAV_LINKS = [
  { href: "/", label: "Story" },
  { href: "/mission", label: "Mission" },
  // { href: "/solution", label: "Solutions" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 py-3 px-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/fz k s h tr (1).png"
            alt="Korizen logo"
            width={28}
            height={28}
            priority // Preload the logo for better LCP
            className="mr-2"
          />
          <span className="hidden font-louize text-xl capitalize sm:inline-block">
            korizen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-nunito text-mymind-dark transition-colors hover:text-mymind-dark/60"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link href="/join-alpha">
            <Button
              className="hidden rounded-full bg-gradient-to-r from-[#00B2FF] to-[#0038FF] px-5 py-1 text-sm font-nunito md:inline-flex"
            >
              Sign up
            </Button>
          </Link>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;