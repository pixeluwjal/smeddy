"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom ChevronIcon component created with inline SVG for self-contained code.
const ChevronIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Hero = () => {
  // Define a professional color palette
  const primaryColor = '#02588A'; // A professional blue
  const darkerShade = '#003A5C'; // A dark blue for depth
  const lighterShade = '#036BA0'; // A lighter blue for accents
  const gradient = `linear-gradient(135deg, ${lighterShade} 0%, ${primaryColor} 100%)`;

  // State to track mouse position for the parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Set up event listener for mouse movement on component mount
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effect styles for visual elements and text
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
  };
  const textParallaxStyle = {
    transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
  };

  // Framer Motion variants for the animated gradient blobs
  const blobVariants = {
    initial: { scale: 0.8, x: '50%', y: '-50%' },
    hover: { scale: 1.05, x: '55%', y: '-45%' },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden py-12 sm:py-24 md:py-32">
      {/* Animated gradient blob background using Framer Motion */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] sm:w-[75vw] sm:h-[75vw] lg:w-[100vw] lg:h-[100vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"
        style={{ background: `radial-gradient(circle, ${primaryColor}, ${darkerShade})` }}
        initial={{ x: '10%', y: '10%' }}
        animate={{ x: ['10%', '15%', '10%'], y: ['10%', '12%', '10%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] sm:w-[60vw] sm:h-[60vw] lg:w-[75vw] lg:h-[75vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"
        style={{ background: `radial-gradient(circle, ${lighterShade}, ${primaryColor})` }}
        initial={{ x: '50%', y: '50%' }}
        animate={{ x: ['50%', '55%', '50%'], y: ['50%', '52%', '50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Main content container with text and buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={textParallaxStyle}
        >
          {/* Tagline - changed from IoT to IT Services */}
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#02588A] mr-2 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-gray-800">Comprehensive IT Solutions</span>
          </div>

          {/* Main Headline - changed to a more general IT services focus */}
          <motion.h1
            className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
              Innovating
            </span>{' '}
            <br className="sm:hidden" />
            the Future of Tech
          </motion.h1>

          {/* Subtitle/Description - changed to highlight a broader range of services */}
          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Providing a full suite of IT services from Cloud and AI to App Development and Data Science to help your business thrive.
          </motion.p>
        </motion.div>

        {/* Action Buttons - changed text and links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="#services" // Changed from Link to a tag
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
            style={{ background: gradient }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Our Services <ChevronIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact" // Changed from Link to a tag
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-gray-800 font-bold text-base sm:text-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[#02588A] group"
          >
            <span className="relative z-10 flex items-center justify-center">
              Contact Us <ChevronIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </span>
          </a>
        </motion.div>

        {/* Dynamic visual elements with parallax effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={parallaxStyle}
        >
          <motion.div
            className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-50"
              style={{ background: `radial-gradient(circle, ${darkerShade} 0%, transparent 70%)` }}
              initial={{ scale: 0.8, x: '50%', y: '-50%' }}
              variants={blobVariants}
              animate={isHovering ? "hover" : "initial"}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            />
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-50"
              style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
              initial={{ scale: 0.8, x: '-50%', y: '50%' }}
              variants={blobVariants}
              animate={isHovering ? "hover" : "initial"}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse', delay: 1 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
