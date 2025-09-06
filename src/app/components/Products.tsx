"use client";
import React, { useState } from 'react';
import { FaCloud, FaCode, FaDatabase, FaServer, FaBrain, FaLightbulb, FaChevronRight } from 'react-icons/fa';

const Services = () => {
  // Refined modern color palette
  const primaryColor = '#02588A';
  const primaryLight = '#02588A';
  const primaryDark = '#02588A';

  const tabs = [
    {
      id: 'cloud',
      title: 'Cloud Computing',
      icon: <FaCloud className="w-4 h-4 md:w-5 md:h-5" />,
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
      icon: <FaCode className="w-4 h-4 md:w-5 md:h-5" />,
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
      icon: <FaServer className="w-4 h-4 md:w-5 md:h-5" />,
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
      icon: <FaLightbulb className="w-4 h-4 md:w-5 md:h-5" />,
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
      icon: <FaBrain className="w-4 h-4 md:w-5 md:h-5" />,
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
      icon: <FaDatabase className="w-4 h-4 md:w-5 md:h-5" />,
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

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section id="services" className="py-16 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-2" style={{ background: primaryColor }}></span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-wider" style={{ color: primaryColor }}>
              Our Services
            </span>
          </div>

          <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Innovative <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${primaryLight}, ${primaryColor})` }}>IT Solutions</span>
          </h3>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 px-4 md:px-0">
            Discover our comprehensive suite of IT services designed to drive your business forward in the digital age.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16 px-2 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-initial min-w-[140px] md:min-w-[160px] px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl font-medium 
                flex items-center justify-center text-center transition-all duration-300
                ${
                  activeTab === tab.id 
                    ? 'text-white shadow-md md:shadow-lg'
                    : 'bg-white text-gray-700 shadow-sm hover:shadow'
                }`}
              style={activeTab === tab.id ? { background: `linear-gradient(135deg, ${primaryLight}, ${primaryColor})` } : {}}
            >
              {React.cloneElement(tab.icon, {
                className: `w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2`,
                style: activeTab === tab.id ? { color: 'white' } : { color: primaryColor }
              })}
              <span className="truncate">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 relative order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-2" style={{ background: primaryColor }}></span>
                <span className="text-xs md:text-sm font-medium" style={{ color: primaryColor }}>
                  Featured Service
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{activeContent?.title}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{activeContent?.content}</p>

              <ul className="space-y-3 md:space-y-4">
                {activeContent?.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center" style={{ background: primaryColor }}>
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 group text-sm md:text-base"
                  style={{ background: `linear-gradient(135deg, ${primaryLight}, ${primaryColor})` }}
                >
                  Get a Quote
                  <FaChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium shadow-sm hover:shadow transition-all duration-300 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[250px] md:min-h-[350px] lg:min-h-[400px] order-1 lg:order-2 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border border-gray-100 md:border-2 md:border-white bg-white h-full">
              <img
                src={activeContent?.image}
                alt={activeContent?.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <div className="text-white">
                  <h4 className="text-lg md:text-xl font-bold">{activeContent?.title}</h4>
                  <p className="text-xs md:text-sm mt-1">Learn more about this service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
