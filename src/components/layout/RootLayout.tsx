"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScrollProvider from '../smooth-scroll/SmoothScrollProvider';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <SmoothScrollProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default RootLayout;
