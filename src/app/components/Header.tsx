"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon SVGs (Inline to avoid external dependencies) ---
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Header = () => {
  const primaryColor = '#025C90';
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, #003A5D 100%)`;

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2, type: "tween", ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scaleY: 0.95, transition: { duration: 0.2, type: "tween", ease: "easeIn" } }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          {/* Logo with shine effect */}
          <motion.div
            className="flex-shrink-0 relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="block relative overflow-hidden rounded-lg">
              <img
                src={'/logose.png'}
                alt="Smarteddy Logo"
                width={160}
                height={50}
                className="object-contain h-[50px] w-[160px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + navItems.indexOf(item) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-800 hover:text-[#025C90] px-3 py-2 text-base font-medium transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#025C90] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link
                  href="#get-started"
                  className="px-6 py-2.5 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden"
                  style={{ background: gradient }}
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Modern mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6 text-gray-800" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern mobile menu with glass effect - Now a dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 w-full px-4 pt-2 pb-4 transition-all duration-300`}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={`bg-white/80 backdrop-blur-lg rounded-b-2xl shadow-lg px-6 py-4 space-y-4 border border-t-0 border-gray-200/50`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-[#025C90] hover:bg-gray-100/50 rounded-xl transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#get-started"
                className="block mt-6 text-center px-6 py-3 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ background: gradient }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;