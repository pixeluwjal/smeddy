"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud, FaCode, FaDatabase, FaServer, FaBrain, FaLightbulb, FaChevronRight } from 'react-icons/fa';

const Services = () => {
  const primaryColor = '#02588A';
  const primaryLight = '#036BA0';
  const primaryLighter = '#346C91';
  const primaryDark = '#003A5C';

  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;

  const tabs = [
    {
      id: 'cloud',
      title: 'Cloud Computing',
      icon: <FaCloud className="w-5 h-5" />,
      content: 'Seamlessly migrate, manage, and optimize your infrastructure on leading cloud platforms. We ensure scalability, security, and cost-effectiveness for your operations.',
      image: '/cloud.png',
      features: [
        'Cloud strategy and migration',
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Cloud security and compliance'
      ]
    },
    {
      id: 'webdev',
      title: 'App & Web Development',
      icon: <FaCode className="w-5 h-5" />,
      content: 'Build powerful, user-friendly, and responsive applications and websites tailored to your unique business needs and goals. We specialize in modern frameworks.',
      image: '/dev.png',
      features: [
        'Custom web application development',
        'Mobile app development (iOS/Android)',
        'UI/UX design and prototyping',
        'eCommerce solutions'
      ]
    },
    {
      id: 'middleware',
      title: 'Middleware',
      icon: <FaServer className="w-5 h-5" />,
      content: 'Seamlessly connect disparate systems and applications with robust middleware solutions. We ensure smooth data flow and enhanced efficiency across your entire enterprise.',
      image: '/middle.png',
      features: [
        'API development and management',
        'Enterprise service bus (ESB) solutions',
        'Microservices architecture',
        'Third-party software integration'
      ]
    },
    {
      id: 'iot',
      title: 'IoT Solutions',
      icon: <FaLightbulb className="w-5 h-5" />,
      content: 'From smart sensors to connected devices, our IoT services enable you to leverage the power of data for smarter decisions, automation, and operational insights.',
      image: '/iot.png',
      features: [
        'IoT device management',
        'Data ingestion and processing',
        'Predictive maintenance',
        'Smart factory solutions'
      ]
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: <FaBrain className="w-5 h-5" />,
      content: 'Implement machine learning and AI to automate tasks, gain valuable insights, and create intelligent applications that drive business growth and competitive advantage.',
      image: '/ai.png',
      features: [
        'Natural Language Processing (NLP)',
        'Computer vision',
        'Predictive analytics',
        'AI chatbot development'
      ]
    },
    {
      id: 'data',
      title: 'Data Science',
      icon: <FaDatabase className="w-5 h-5" />,
      content: 'Unlock the power of your data. Our data science experts help you uncover hidden patterns, analyze trends, and make data-driven decisions that shape your business strategy.',
      image: '/ds.png',
      features: [
        'Big data analytics',
        'Business intelligence dashboards',
        'Data mining and warehousing',
        'Statistical modeling'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-4">
            <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ background: primaryColor }}></span>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: primaryColor }}>
              Our Services
            </span>
          </div>

          <h3 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Innovative <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>IT Solutions</span>
          </h3>

          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Discover our comprehensive suite of IT services designed to drive your business forward in the digital age.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 sm:flex-initial px-3 py-2 md:px-6 md:py-3 rounded-xl font-medium flex items-center justify-center text-center transition-all duration-300 ${
                activeTab === tab.id ? 'shadow-lg' : 'bg-white shadow-sm'
              }`}
              style={{
                zIndex: activeTab === tab.id ? 10 : 1,
              }}
              whileHover={{ y: -3 }}
            >
              {/* Only active tab uses layoutId for smooth transition */}
              {(activeTab === tab.id || hoveredTab === tab.id) && (
                <motion.span
                  layoutId={activeTab === tab.id ? "tabBackground" : undefined}
                  className="absolute inset-0 rounded-xl"
                  style={{ background: gradient }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <span className={`relative z-10 flex items-center justify-center text-sm md:text-base transition-colors duration-300 ${
                activeTab === tab.id || hoveredTab === tab.id ? 'text-white' : 'text-gray-700'
              }`}>
                {React.cloneElement(tab.icon, {
                  className: `w-4 h-4 md:w-5 md:h-5 mr-2`,
                  style: activeTab === tab.id || hoveredTab === tab.id ? { color: 'white' } : { color: primaryColor }
                })}
                {tab.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
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
                    Featured Service
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{tabs.find(t => t.id === activeTab)?.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{tabs.find(t => t.id === activeTab)?.content}</p>

                <ul className="space-y-4">
                  {tabs.find(t => t.id === activeTab)?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: primaryColor }}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                    style={{ background: gradient }}
                  >
                    Get a Quote
                    <FaChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow transition-all duration-300 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

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
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{tabs.find(t => t.id === activeTab)?.title}</h4>
                      <p className="text-sm mt-1">Learn more about this service</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);} }
        @keyframes float-delayed { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
        @keyframes pulse-slow { 0%,100%{opacity:0.1;}50%{opacity:0.15;} }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; animation-delay:1s; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Services;
