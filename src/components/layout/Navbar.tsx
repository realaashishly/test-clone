"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <header className='w-full py-3 px-6 flex items-center justify-between fixed top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100'>
          <div className='flex items-center'>
              <Link href='/' className='flex items-center'>
                  <Image
                      src='/fz k s h tr (1).png'
                      alt='mymind logo'
                      width={28}
                      height={28}
                      className='mr-2'
                  />
                  <span className='hidden sm:inline-block font-louize text-xl capitalize'>
                      korizen
                  </span>
              </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
              <Link
                  href='/'
                  className='text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm'
              >
                  Story
              </Link>
              <Link
                  href='/mission'
                  className='text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm'
              >
                  Mission
              </Link>
              {/* <Link
                  href='/solution'
                  className='text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm'
              >
                  Solutions
              </Link> */}
              
          </nav>

          <div className='flex items-center space-x-4'>
              {/* <Link
                  href='/signin'
                  className='text-mymind-dark hover:text-mymind-dark/60 transition-colors font-nunito text-sm hidden md:inline-block'
              >
                  Log in
              </Link> */}
              <Button className='bg-gradient-to-r from-[#00B2FF] to-[#0038FF] font-nunito rounded-full px-5 py-1 h-auto text-sm hidden md:inline-flex'>
                  Sign up
              </Button>

              <MobileMenu
                  isOpen={isMobileMenuOpen}
                  setIsOpen={setIsMobileMenuOpen}
              />
          </div>
      </header>
  );
};

export default Navbar;
