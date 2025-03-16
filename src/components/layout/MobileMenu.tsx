"use client";

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
              className='md:hidden flex items-center justify-center focus:outline-none'
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label='Toggle mobile menu'
          >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
              <div className='fixed inset-0 z-40 bg-white md:hidden'>
                  <div className='flex flex-col h-full'>
                      <div className='flex items-center justify-between px-6 py-4 border-b'>
                          <Link
                              href='/'
                              className='text-xl font-louize'
                              onClick={() => setIsOpen(false)}
                          >
                              Korizen
                          </Link>
                          <button
                              className='focus:outline-none'
                              onClick={toggleMenu}
                              aria-label='Close mobile menu'
                          >
                              <X size={24} />
                          </button>
                      </div>

                      <nav className='flex-1 p-6 bg-white'>
                          <ul className='flex flex-col space-y-6'>
                              <li>
                                  <Link
                                      href='/'
                                      className='text-xl font-louize text-mymind-dark hover:text-primary transition-colors'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      What
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      href='/why'
                                      className='text-xl font-louize text-mymind-dark hover:text-primary transition-colors'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      Why
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      href='/how'
                                      className='text-xl font-louize text-mymind-dark hover:text-primary transition-colors'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      How
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      href='/palace'
                                      className='text-xl font-louize text-mymind-dark hover:text-primary transition-colors'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      What's New
                                  </Link>
                              </li>
                              <li className='pt-6 mt-6 border-t'>
                                  <Link
                                      href='/signin'
                                      className='text-xl font-louize text-mymind-dark hover:text-primary transition-colors'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      Log in
                                  </Link>
                              </li>
                              <li>
                                  <Link
                                      href='https://access.mymind.com/'
                                      className='bg-primary hover:bg-primary/90 text-white font-nunito rounded-full px-5 py-2 inline-flex items-center justify-center text-base transition-colors mt-4'
                                      onClick={() => setIsOpen(false)}
                                  >
                                      Sign up
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