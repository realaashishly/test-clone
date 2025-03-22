"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden flex items-center justify-center focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link
                href="/"
                className="text-xl font-louize"
                onClick={() => setIsOpen(false)}
              >
                Korizen
              </Link>
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-6 bg-white">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link
                    href="/"
                    className="text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="/join-alpha">
                    <Button className="rounded-full bg-gradient-to-r from-[#00B2FF] to-[#0038FF] px-5 py-1 text-sm font-nunito">
                      Sign up
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
