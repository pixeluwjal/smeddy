"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MicIcon, GlobeIcon, UserIcon, GridIcon, ChevronIcon } from './Icons';

const Products = () => {
  // Color palette based on #01466E
  const primaryColor = '#01466E';
  const primaryLight = '#346C91';
  const primaryLighter = '#5A8BAD';
  const primaryDark = '#013455';
  const accentColor = '#FF9E1B'; // Complementary accent color
  
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;
  const lightGradient = `linear-gradient(135deg, ${primaryLight} 0%, ${primaryLighter} 100%)`;
  
  const tabs = [
    {
      id: 'proximity',
      title: 'Proximity Marketing',
      icon: <MicIcon className="w-5 h-5" />,
      content: 'Our BLE beacon technology delivers personalized messages when customers visit partner locations, creating engaging, context-aware experiences that drive foot traffic and sales.',
      image: '/prox.png',
      features: [
        'Real-time proximity detection with centimeter accuracy',
        'AI-powered content personalization engine',
        'Comprehensive analytics dashboard',
        'Seamless integration with existing CRM systems'
      ]
    },
    {
      id: 'location',
      title: 'Location Intelligence',
      icon: <GlobeIcon className="w-5 h-5" />,
      content: 'Access store information and compare offers from nearby locations without physical visits. Our platform provides rich location data to inform customer decisions and optimize business strategies.',
      image: '/location.png',
      features: [
        'Heatmap analytics for foot traffic patterns',
        'Competitive intelligence reports',
        'Demographic insights by location',
        'Real-time occupancy monitoring'
      ]
    },
    {
      id: 'engagement',
      title: 'Customer Engagement',
      icon: <UserIcon className="w-5 h-5" />,
      content: 'Increase interaction and commercial success through our dual approach of proximity and location-based marketing, designed to maximize customer engagement and loyalty.',
      image: '/customer.png',
      features: [
        'Personalized push notifications',
        'Gamification and reward systems',
        'Sentiment analysis tools',
        'Automated customer journey mapping'
      ]
    },
    {
      id: 'discovery',
      title: 'Smart Discovery',
      icon: <GridIcon className="w-5 h-5" />,
      content: 'With beacons installed in strategic locations, users can discover offers, deals, and advertisements tailored to their preferences and current context through our intuitive mprox app.',
      image: '/smartdiscovery.png',
      features: [
        'Context-aware recommendations',
        'Augmented reality product previews',
        'Voice-enabled search',
        'Social sharing integration'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -right-20 top-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float" style={{ background: primaryColor }} />
      <div className="absolute left-10 bottom-1/3 w-48 h-48 rounded-full opacity-5 blur-3xl animate-float-delayed" style={{ background: primaryDark }} />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: primaryColor
          }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-4"
          >
            <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ background: primaryColor }}></span>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: primaryColor }}>
              Our Solutions
            </span>
          </motion.div>
          
          <motion.h3
            className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transformative <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>IoT Products</span>
          </motion.h3>
          
          <motion.p
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover how our cutting-edge technology bridges the physical and digital worlds to create seamless customer experiences.
          </motion.p>
        </motion.div>

        {/* Enhanced Tab navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 md:px-6 md:py-3 rounded-xl font-medium flex items-center transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'text-white shadow-lg'
                  : 'text-gray-700 hover:text-white bg-white shadow-sm'
              }`}
              style={{
                zIndex: activeTab === tab.id ? 10 : 1,
              }}
              whileHover={{ y: -3 }}
            >
              {hoveredTab === tab.id || activeTab === tab.id ? (
                <motion.span
                  layoutId="tabBackground"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: gradient,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              ) : null}
              
              <span className="relative z-10 flex items-center">
                {React.cloneElement(tab.icon, { 
                  className: `w-4 h-4 md:w-5 md:h-5 mr-2 ${activeTab === tab.id ? 'text-white' : ''}`,
                  style: activeTab !== tab.id ? { color: primaryColor } : {}
                })}
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden text-sm">{tab.title.split(' ')[0]}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab content with enhanced animations */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 relative order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100">
                  <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ background: primaryColor }}></span>
                  <span className="text-sm font-medium" style={{ color: primaryColor }}>
                    Featured Solution
                  </span>
                </div>
                
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {tabs.find(t => t.id === activeTab)?.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {tabs.find(t => t.id === activeTab)?.content}
                </motion.p>
                
                <motion.ul 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {tabs.find(t => t.id === activeTab)?.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: primaryColor }}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="pt-4 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                    style={{ background: gradient }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Demo
                    <ChevronIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow transition-all duration-300 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced image container */}
          <div className="relative h-full min-h-[300px] md:min-h-[400px] order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative h-full"
              >
                <div className="absolute -inset-4 rounded-3xl opacity-10 blur-xl animate-pulse-slow" style={{ background: primaryColor }}></div>
                <div className="absolute -inset-0.5 rounded-2xl opacity-5 blur-md" style={{ background: gradient }}></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white bg-white h-full">
                  <motion.img
                    src={tabs.find(t => t.id === activeTab)?.image}
                    alt={tabs.find(t => t.id === activeTab)?.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-white"
                    >
                      <h4 className="text-xl font-bold">{tabs.find(t => t.id === activeTab)?.title}</h4>
                      <p className="text-sm mt-1">Interactive demo available</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .tab-button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;