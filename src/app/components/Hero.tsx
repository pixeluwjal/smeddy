"use client";
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaCloud, FaRobot, FaCode, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  // Color palette based on #1B6088
  const primaryColor = '#1B6088';
  const lighterShade = '#2A7AA5';
  const accentColor = '#FF6B35';
  const gradient = `linear-gradient(135deg, ${lighterShade}, ${primaryColor})`;
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-100 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-100 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-100 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/5 opacity-5 animate-bounce" style={{ animationDuration: '8s' }}>
        <FaCloud size={40} className="text-blue-600" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-5 animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}>
        <FaRobot size={40} className="text-blue-600" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-5 animate-bounce" style={{ animationDuration: '9s', animationDelay: '2s' }}>
        <FaCode size={40} className="text-blue-600" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-5 animate-bounce" style={{ animationDuration: '10s', animationDelay: '0.5s' }}>
        <FaDatabase size={40} className="text-blue-600" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-12 lg:px-0">
        {/* Animated Sub-heading banner */}
        <div className={`inline-flex items-center px-5 py-2 rounded-full bg-white border border-blue-100 shadow-md mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3 animate-pulse"></span>
          <span className="text-sm font-semibold text-gray-800 tracking-wide">
            COMPREHENSIVE IT SOLUTIONS
          </span>
        </div>

        {/* Main hero title with animation */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Innovating the{' '}
          <span className="relative">
            <span className="relative z-10 bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
              Future
            </span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 opacity-60 -z-10"></span>
          </span>{' '}
          of Tech
        </h1>

        {/* Descriptive paragraph with animation */}
        <p className={`mt-6 text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          Providing a full suite of IT services from Cloud and AI to App
          Development and Data Science to help your business thrive.
        </p>

        {/* Stats section with animation */}
        <div className={`mt-12 flex flex-wrap justify-center gap-8 mb-10 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <div className="text-center p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-gray-900">20+</div>
            <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-gray-900">6+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
        </div>

        {/* Action buttons with animation */}
        <div className={`mt-8 flex flex-col sm:flex-row justify-center gap-5 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
          {/* Primary Call-to-Action button */}
          <a
            href="#services"
            className="px-8 py-4 rounded-lg font-semibold text-white text-base shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group hover:-translate-y-1"
            style={{ background: gradient }}
          >
            <span>Explore Our Services</span>
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Secondary Call-to-Action button */}
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-semibold text-gray-900 text-base shadow-sm bg-white border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-1"
          >
            <span>Contact Our Team</span>
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;