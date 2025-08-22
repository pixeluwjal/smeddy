"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const primaryColor = '#02588A';
  const darkerShade = '#003A5C';
  const lighterShade = '#036BA0';
  const gradient = `linear-gradient(135deg, ${lighterShade}, ${primaryColor})`;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
  };
  const textParallaxStyle = {
    transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`
  };

  const blobVariants = {
    initial: { scale: 0.8, x: '50%', y: '-50%' },
    hover: { scale: 1.05, x: '55%', y: '-45%' },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] md:w-[70vw] md:h-[70vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{ background: `radial-gradient(circle, ${primaryColor}, ${darkerShade})` }}
        initial={{ x: '-20%', y: '-10%' }}
        animate={{ x: ['-20%', '0%', '-20%'], y: ['-10%', '5%', '-10%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] md:w-[60vw] md:h-[60vw] rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        style={{ background: `radial-gradient(circle, ${lighterShade}, ${primaryColor})` }}
        initial={{ x: '30%', y: '40%' }}
        animate={{ x: ['30%', '50%', '30%'], y: ['40%', '45%', '40%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`
          }}
          animate={{ y: ['0%', '20%', '0%'], x: ['0%', '15%', '0%'] }}
          transition={{ duration: 15 + idx, repeat: Infinity, ease: "easeInOut", delay: idx }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-12 lg:px-0">
        <motion.div style={textParallaxStyle}>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/50 backdrop-blur-md border border-gray-200/40 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#02588A] mr-2 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-gray-900">Comprehensive IT Solutions</span>
          </div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight bg-clip-text text-transparent"
            style={{ backgroundImage: gradient }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Innovating <br className="sm:hidden" /> the Future of Tech
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-700 sm:text-lg max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Providing a full suite of IT services from Cloud and AI to App Development and Data Science to help your business thrive.
          </motion.p>

          {/* Buttons */}
          <motion.div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-white text-base sm:text-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#036BA0] to-[#02588A] flex items-center justify-center gap-2"
            >
              Our Services <FaChevronRight />
            </a>
            <a
              href="#contact"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-gray-900 text-base sm:text-lg shadow-sm backdrop-blur-md bg-white/60 border border-gray-200 hover:shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Us <FaChevronRight />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Blobs */}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={parallaxStyle}>
        <motion.div
          className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, ${darkerShade} 0%, transparent 70%)` }}
            variants={blobVariants}
            animate={isHovering ? "hover" : "initial"}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          />
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
            variants={blobVariants}
            animate={isHovering ? "hover" : "initial"}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
