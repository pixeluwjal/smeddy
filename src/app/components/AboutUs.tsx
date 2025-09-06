"use client";
import React, { useState } from 'react';
import { FaLightbulb, FaTh, FaGlobe, FaChevronRight, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const AboutUs = () => {
  // Refined modern color palette
  const colors = {
    primary: '#02588A',
    primaryLight: '#02588A',
    secondary: '#02588A',
    dark: '#02588A',
    gray: '#02588A'
  };

  const cards = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Our Mission",
      content: "To empower businesses with transformative technology solutions that drive efficiency, innovation, and sustainable growth.",
      border: `border-t-4 border-${colors.primaryLight}`
    },
    {
      icon: <FaTh className="w-6 h-6" />,
      title: "Our Plan",
      content: "We leverage agile methodologies and a deep understanding of modern technology stacks to deliver bespoke, scalable solutions.",
      border: `border-t-4 border-${colors.primaryLight}`
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Our Vision",
      content: "To be the leading partner for businesses seeking to navigate the digital landscape and achieve a competitive edge.",
      border: `border-t-4 border-${colors.primaryLight}`
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full translate-y-48 -translate-x-48 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center text-sm font-medium text-white uppercase tracking-widest mb-4 py-2 px-4 rounded-full shadow-md" style={{ backgroundColor: colors.primary }}>
            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
            About Our Company
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-6">
            Driving Digital{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})` }}>
                Transformation
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 font-light">
            We deliver cutting-edge solutions that propel businesses into the future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of passionate professionals dedicated to providing innovative IT solutions. Our expertise spans from software development to cloud infrastructure, enabling us to tackle complex challenges and deliver meaningful results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We partner with our clients to understand their unique needs, crafting tailored strategies and solutions that drive growth and secure a competitive advantage in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group relative inline-flex items-center px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-xl shadow-md"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="relative z-10">Explore Our Services</span>
                <span className="ml-3 relative z-10">
                  <FaChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-gray-300 hover:border-blue-300 bg-white text-gray-800 hover:shadow-md"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="ml-3 relative z-10">
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl transform rotate-2 opacity-70"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img
                src="/team.png"
                alt="Our team collaborating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Collaboration & Innovation</h3>
                <p className="text-blue-100">Our team working together to create exceptional solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})` }}></div>
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  style={{ background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})` }}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.content}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <div className="flex items-center text-sm font-medium group-hover:text-blue-600 transition-colors duration-300" style={{ color: colors.primary }}>
                    Learn more
                    <FaChevronRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutUs;