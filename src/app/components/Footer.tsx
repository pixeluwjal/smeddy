"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const primaryColor = '#025C90';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} SmartEddy. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <Link href="#home" className="text-sm hover:text-[#025C90] transition-colors duration-300">
              Home
            </Link>
            <Link href="#about" className="text-sm hover:text-[#025C90] transition-colors duration-300">
              About
            </Link>
            <Link href="#contact" className="text-sm hover:text-[#025C90] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
