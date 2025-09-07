"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CareersPage = () => {
  // Enhanced Color Palette
  const primaryColor = '#025C90';
  const primaryDark = '#003A5D';
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: gradient }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: gradient }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:py-48 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white shadow-md mb-8 border border-gray-100">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm font-medium">We're hiring remotely</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Join Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>Remote Team</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
              At SmartEddy, we believe in building a team that is not bound by location. We offer a flexible,
              collaborative, and supportive environment where your work truly matters.
            </p>
            
            <div>
              <a 
                href="/#contact" 
                className="inline-flex items-center px-8 py-4 rounded-xl text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ background: gradient }}
              >
                View Open Positions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full" style={{ background: primaryColor, opacity: 0.3 }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full" style={{ background: primaryColor, opacity: 0.2 }}></div>
        </div>
      </section>
      
              {/* Poster Container with enhanced styling */}
          <motion.div 
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border-8 border-white shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
              <img 
                src="/poster.png"
                alt="SmartEddy Careers Poster"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work <span className="text-[#025C90]">With Us</span>
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: gradient }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're committed to creating an environment where our team can thrive, no matter where they are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Flexible Schedule", desc: "Work when you're most productive", icon: "⏰" },
              { title: "Remote First", desc: "Work from anywhere in the world", icon: "🌎" },
              { title: "Learning Budget", desc: "Annual stipend for professional development", icon: "📚" },
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#025C90 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Don't See a Perfect Role?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                We're always looking for talented individuals who share our passion for education technology.
                Send us your resume and tell us how you can contribute to our mission.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center px-8 py-4 rounded-xl text-white font-medium shadow-md transition-all duration-300 hover:shadow-xl group"
                style={{ background: gradient }}
              >
                <span>Send Your Resume</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
