"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLaptop, FaComments, FaShieldAlt, FaChartLine, FaHeart, FaWifi, FaClock, FaUsers, FaLightbulb, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const RemoteWorkPolicy = () => {
  const primaryColor = '#02588A';
  const primaryLight = '#02588A';
  const primaryLighter = '#02588A';
  const primaryDark = '#02588A';
  const accentColor = '#02588A';
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;
  const accentGradient = `linear-gradient(135deg, ${accentColor} 0%, #02588A 100%)`;

  const principles = [
    {
      icon: <FaLaptop className="w-6 h-6" />,
      title: "Flexibility with Structure",
      description: "Employees work remotely all days of the month."
    },
    {
      icon: <FaComments className="w-6 h-6" />,
      title: "Clear Communication",
      description: "All team members are expected to be available during core working hours (10 AM – 6 PM IST) for meetings and collaboration."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Secure & Efficient Tools",
      description: "We provide access to secure VPN, cloud collaboration platforms, and IT support to enable smooth remote work."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Performance over Presence",
      description: "Productivity is measured by outcomes, not by hours logged online."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Workplace Inclusion",
      description: "Remote employees are given equal access to opportunities, training, and recognition."
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Health & Well-Being",
      description: "We encourage employees to maintain a healthy work-life balance, take breaks, and use company-provided wellness resources."
    }
  ];

  const expectations = [
    {
      icon: <FaWifi className="w-5 h-5" />,
      text: "Maintain a reliable internet connection."
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      text: "Follow data security and confidentiality guidelines."
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      text: "Attend virtual meetings on time and actively participate."
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      text: "Schedule in-person visits when collaboration requires physical presence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl hidden md:block" style={{ background: primaryColor }} />
        <div className="absolute -right-20 bottom-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl hidden md:block" style={{ background: primaryColor }} />
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 hidden md:block"
            style={{
              width: Math.random() * 16 + 4,
              height: Math.random() * 16 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: [primaryColor, accentColor][i % 2]
            }}
            animate={{ 
              y: [0, Math.random() * 40 - 20], 
              x: [0, Math.random() * 20 - 10],
              scale: [1, 1 + Math.random() * 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-flex items-center text-xs font-semibold text-white uppercase tracking-widest mb-4 py-2 px-4 rounded-full"
              style={{ background: accentGradient }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></div>
              Work Policy
            </motion.span>
            <motion.h1
              className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>Remote Work</span> Policy
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              At SmartEddy, we believe flexibility is key to building a productive and motivated workforce.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 text-center">
              Our Remote Work Policy is designed to balance employee well-being, collaboration, and business needs, while ensuring that our culture of trust and accountability remains strong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Principles of Our Policy
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ background: gradient }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: gradient }}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expectations from Employees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To ensure a successful remote work environment, we ask our team members to:
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {expectations.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1" style={{ background: `${primaryColor}20`, color: primaryColor }}>
                    {item.icon}
                  </span>
                  <span className="text-gray-700 text-lg">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Matters
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ background: gradient }}></div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r rounded-2xl p-8 md:p-10 text-white shadow-xl"
            style={{ background: gradient }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-start mb-6">
              <FaLightbulb className="w-8 h-8 mr-4 flex-shrink-0 text-white opacity-90" />
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Remote work is not just a convenience—it's a strategic advantage that helps us attract top talent, support diverse needs, and build a resilient organization ready for the future of work.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-gray-500 italic">
              SmartEddy is committed to creating a work environment that empowers every team member to do their best work, wherever they are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Remote-First Team
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in working with a company that values flexibility, trust, and results?
            </p>
            <motion.a
              href="/careers"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg"
              style={{ background: gradient }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <FaArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RemoteWorkPolicy;