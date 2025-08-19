"use client";
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { LightbulbIcon, GridIcon, GlobeIcon, ChevronIcon } from './Icons';

const AboutUs = () => {
  // Color palette based on #01466E
  const primaryColor = '#01466E';
  const primaryLight = '#346C91';
  const primaryLighter = '#5A8BAD';
  const primaryDark = '#013455';
  const accentColor = '#FF9E1B'; // Complementary accent color
  
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

  const cards = [
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: "Our Mission",
      content: "To revolutionize proximity experiences by delivering context-aware content through cutting-edge IoT technology, enhancing engagement for businesses and consumers alike.",
    },
    {
      icon: <GridIcon className="w-8 h-8" />,
      title: "Our Plan",
      content: "We combine BLE beacon technology with AI-driven analytics to create seamless, personalized experiences that bridge physical and digital environments with precision.",
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "Our Vision",
      content: "To become the global standard for proximity marketing, transforming how businesses interact with customers in physical spaces through intelligent, connected solutions.",
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
            About SmartEddy
          </motion.span>
          <motion.h3
            className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Redefining{' '}
            <span 
              className="relative inline-block"
            >
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>
                Proximity
              </span>
              <span 
                className="absolute -bottom-1 left-0 w-full h-3 opacity-30"
                style={{ background: primaryColor, zIndex: 0 }}
              />
            </span>{' '}
            Experiences
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting physical and digital worlds through innovative IoT solutions
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
              SmartEddy pioneers IoT-based content delivery through our proprietary "mprox" platform, leveraging BLE beacon technology to create immersive, context-rich experiences across retail, hospitality, healthcare, and tourism.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              In an era shifting from traditional advertising to digital engagement, our solutions offer businesses a competitive edge with paperless, touch-free content delivery that's both relevant and measurable.
            </p>
            <div className="pt-4">
              <Link
                href="#products"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-xl text-white font-medium transition-all duration-500 hover:shadow-xl"
                style={{ background: primaryColor }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative">Discover Our Products</span>
                <span className="ml-3 relative">
                  <ChevronIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
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
                src="/mprox.png"
                alt="SmartEddy technology in action"
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