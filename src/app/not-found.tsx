"use client";
import React from "react";
import { motion } from "framer-motion";

// Custom ChevronIcon component created with inline SVG for self-contained code.
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
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

const NotFoundPage = () => {
  // Color palette consistent with other components
  const primaryColor = "#02588A";
  const darkerShade = "#003A5C";
  const lighterShade = "#036BA0";
  const gradient = `linear-gradient(135deg, ${lighterShade} 0%, ${primaryColor} 100%)`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        {/* Animated 404 Heading */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text mb-4"
          style={{ backgroundImage: gradient }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          404
        </motion.h1>

        {/* Main message */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        {/* Subtitle/Explanation */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          It seems like the page you were looking for doesn't exist. It might
          have been moved or deleted.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ background: gradient }}
          >
            Go to Homepage
            <ChevronIcon className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-800 font-bold text-base border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#02588A]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
