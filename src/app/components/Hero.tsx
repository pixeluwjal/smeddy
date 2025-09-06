"use client";
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  // Define a modern color palette for the hero section
  const primaryColor = '#02588A';
  const lighterShade = '#036BA0';
  const gradient = `linear-gradient(135deg, ${lighterShade}, ${primaryColor})`;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* A large, blurred circle in the top-left corner */}
        <div 
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-5" 
          style={{ background: primaryColor }}
        ></div>
        {/* A large, blurred circle in the bottom-right corner */}
        <div 
          className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-5" 
          style={{ background: lighterShade }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-12 lg:px-0">
        {/* Sub-heading banner with a simple, clean design */}
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/50 backdrop-blur-md border border-gray-200/40 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-900">
            Comprehensive IT Solutions
          </span>
        </div>

        {/* Main hero title with a gradient text effect */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: gradient }}
        >
          Innovating the Future of Tech
        </h1>

        {/* Descriptive paragraph */}
        <p className="mt-4 text-gray-700 sm:text-lg max-w-2xl mx-auto px-2">
          Providing a full suite of IT services from Cloud and AI to App
          Development and Data Science to help your business thrive.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary Call-to-Action button */}
          <a
            href="#services"
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-white text-base sm:text-lg shadow-xl transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#036BA0] to-[#02588A] flex items-center justify-center gap-2"
          >
            Our Services <FaChevronRight />
          </a>
          {/* Secondary Call-to-Action button */}
          <a
            href="#contact"
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-gray-900 text-base sm:text-lg shadow-sm backdrop-blur-md bg-white/60 border border-gray-200 hover:shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Contact Us <FaChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
