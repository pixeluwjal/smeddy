"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useTransform, useScroll } from 'framer-motion';

// Custom inline SVG icons for self-contained code.
const LightbulbIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-.2.4-.4.6-.6.8-.8 1.8-1.5 3-1.8 1.2-.3 2.5-.2 3.3.6a.5.5 0 010 .7.5.5 0 01-.7 0c-.6-.6-1.5-.7-2.3-.5-1 .3-1.9.9-2.7 1.6l-.6.6zM9 13a4 4 0 01-4-4v-1.5c0-1.3.8-2.5 2-3a3.5 3.5 0 016.8 0c1.2.5 2 1.7 2 3V9a4 4 0 01-4 4z"></path>
    <path d="M9 13v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7"></path>
  </svg>
);

const GridIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <path d="M8 3v18"></path>
    <path d="M16 3v18"></path>
    <path d="M3 8h18"></path>
    <path d="M3 16h18"></path>
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 000 20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

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

const AboutUs = () => {
  // Color palette based on the Hero component for consistency
  const primaryColor = '#02588A';
  const primaryLight = '#036BA0';
  const primaryLighter = '#346C91'; // A new lighter shade for this component
  const primaryDark = '#003A5C';
  const accentColor = '#FF9E1B';

  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;
  const lightGradient = `linear-gradient(135deg, ${primaryLight} 0%, ${primaryLighter} 100%)`;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update the cards data to be about a general IT services company
  const cards = [
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: "Our Mission",
      content: "To empower businesses with transformative technology solutions that drive efficiency, innovation, and sustainable growth.",
    },
    {
      icon: <GridIcon className="w-8 h-8" />,
      title: "Our Plan",
      content: "We leverage agile methodologies and a deep understanding of modern technology stacks to deliver bespoke, scalable solutions tailored to our clients' unique needs.",
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "Our Vision",
      content: "To be the leading partner for businesses seeking to navigate the digital landscape and achieve a competitive edge through intelligent technology integration.",
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-36 bg-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 -top-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{
            background: primaryColor,
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02
          }}
        />
        <motion.div
          className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{
            background: primaryLight,
            x: -mousePosition.x * 0.02,
            y: -mousePosition.y * 0.02
          }}
        />
        <motion.div
          className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{
            background: primaryLighter,
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01
          }}
        />

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(${primaryColor} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-xs font-semibold text-white uppercase tracking-widest mb-4 py-2 px-4 rounded-full"
            style={{ background: primaryColor }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Our Company
          </motion.span>
          <motion.h3
            className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Commitment to{' '}
            <span
              className="relative inline-block"
            >
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>
                Excellence
              </span>
              <span
                className="absolute -bottom-1 left-0 w-full h-3 opacity-30"
                style={{ background: primaryColor, zIndex: 0 }}
              />
            </span>
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A full-spectrum approach to modern technology challenges.
          </motion.p>
          <motion.div
            className="w-24 h-1.5 rounded-full mx-auto mt-8"
            style={{ background: gradient }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              We are a team of passionate professionals dedicated to providing innovative IT solutions. Our expertise spans from software development to cloud infrastructure, enabling us to tackle complex challenges and deliver meaningful results.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              We partner with our clients to understand their unique needs, crafting tailored strategies and solutions that drive growth and secure a competitive advantage in the ever-evolving digital landscape.
            </p>
            <div className="pt-4">
              <a
                href="#services" // Changed from Link to a tag
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-xl text-white font-medium transition-all duration-500 hover:shadow-xl"
                style={{ background: primaryColor }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative">Explore Our Services</span>
                <span className="ml-3 relative">
                  <ChevronIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -inset-4 opacity-20 blur-xl rounded-2xl" style={{ background: primaryColor }}></div>
            <div className="absolute -inset-2 opacity-10 rounded-2xl" style={{ background: primaryColor }}></div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-2xl border border-gray-100/80 backdrop-blur-sm">
              <div className="absolute inset-0 opacity-10" style={{ background: primaryColor }}></div>
              <img
                src="/team.png"
                alt="IT solutions in action"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/90 to-transparent"></div>

              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full opacity-70 animate-pulse" style={{ background: primaryColor }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-70 animate-pulse" style={{ background: primaryLight, animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced feature cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 opacity-30" style={{ background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)` }}></div>

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            >
              <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ background: primaryLight }}></div>

              <div className="relative h-full p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100/80 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover effect background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: primaryColor }}
                ></div>

                {/* Animated border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px"
                  style={{
                    background: lightGradient,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg text-white"
                    style={{
                      background: gradient,
                      boxShadow: '0 4px 20px rgba(1, 70, 110, 0.15)'
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {card.content}
                  </p>

                  {/* Animated underline */}
                  <div
                    className="w-0 h-1.5 rounded-full mt-6 transition-all duration-500 group-hover:w-12"
                    style={{ background: gradient }}
                  ></div>
                </div>

                {/* Floating circles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" style={{ background: primaryColor }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ background: primaryLight }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
