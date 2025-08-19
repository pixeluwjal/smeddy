"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon SVGs (Inline to avoid external dependencies) ---
const ArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ImageGallery = () => {
  const primaryColor = '#025C90';
  const images = [
    '/5.jpg',
    '/4.jpg',
    '/3.jpg',
    '/2.jpg',
    '/1.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentImage((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentImage, images.length]); // Added images.length to dependency array

  const goToPrev = () => {
    resetTimeout();
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
      <div className="absolute w-full h-full inset-0 z-0 opacity-10" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="80" r="15" fill="%23FFFFFF" opacity="0.05"/><circle cx="85" cy="20" r="20" fill="%23FFFFFF" opacity="0.05"/></svg>')` }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="font-poppins text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Gallery
          </motion.h3>
        </motion.div>
        
        <div className="relative">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* The crucial fix: mode="wait" ensures exit animation completes before entry */}
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={images[currentImage]} // Use a unique key for each image path
                src={images[currentImage]}
                alt={`Carousel Image ${currentImage + 1}`}
                className="w-full h-auto object-cover rounded-3xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </motion.div>
          
          {/* Carousel navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/40 group focus:outline-none"
          >
            <ArrowIcon className="w-6 h-6 text-white rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/40 group focus:outline-none"
          >
            <ArrowIcon className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Carousel navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
