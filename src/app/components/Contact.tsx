"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Icon SVGs (Inline to avoid external dependencies) ---
const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MessageIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.07l-4.42-1.1a2 2 0 0 1-1.66-.62L10.5 14.5a2.5 2.5 0 0 1-2.92-2.92l4.13-4.13a2 2 0 0 1-.62-1.66L3.01 2.18A2 2 0 0 1 5 0h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.5c-.7 0-1.4.3-1.8.8l-1.6 1.6c-1.5 1.5-.2 4.4 2.1 6.7s5.2 3.6 6.7 2.1l1.6-1.6c.5-.5.8-1.1.8-1.8v-.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 19.5l-7-7A5 5 0 0 1 12 2a5 5 0 0 1 7 7z"></path>
    <circle cx="12" cy="7" r="2"></circle>
  </svg>
);

const Contact = () => {
  // Color palette based on #01466E
  const primaryColor = '#01466E';
  const primaryLight = '#346C91';
  const primaryLighter = '#5A8BAD';
  const primaryDark = '#013455';
  
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
        setStatusMessage(data.message || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsError(true);
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: primaryColor }} />
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: primaryColor }} />
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: primaryColor
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 15 - 7.5],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-xs font-semibold text-white uppercase tracking-widest mb-4 py-2 px-4 rounded-full"
              style={{ background: primaryColor }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get in Touch
            </motion.span>
            <motion.h3
              className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>SmartEddy</span>
            </motion.h3>
            <motion.p
              className="max-w-2xl mx-auto text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Have questions or want to learn more about our proximity solutions? Get in touch with our team today.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information Section */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900">Reach out to us directly</h4>
                <p className="text-gray-600 text-lg">
                  Our team is ready to answer your questions and help you implement innovative proximity solutions for your business.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-lg" style={{ background: `${primaryColor}10` }}>
                    <MapPinIcon className="h-6 w-6" style={{ color: primaryColor }} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600 mt-1">#472 3rd Cross, 8th Main,</p>
                    <p className="text-gray-600">BHCS Layout, Chikkalasandra,</p>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-lg" style={{ background: `${primaryColor}10` }}>
                    <PhoneIcon className="h-6 w-6" style={{ color: primaryColor }} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Phone Number</p>
                    <p className="text-gray-600 mt-1">+91 8049572379</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-lg" style={{ background: `${primaryColor}10` }}>
                    <MailIcon className="h-6 w-6" style={{ color: primaryColor }} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600 mt-1">contact@smarteddy.io</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="name" className="sr-only">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-xl border-gray-200 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      style={{ 
                        borderWidth: '1px',
                        borderColor: 'transparent'
                      }}
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-xl border-gray-200 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      style={{ 
                        borderWidth: '1px',
                        borderColor: 'transparent'
                      }}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="message" className="sr-only">Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                      <MessageIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="block w-full rounded-xl border-gray-200 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 resize-none"
                      style={{ 
                        borderWidth: '1px',
                        borderColor: 'transparent'
                      }}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 rounded-xl text-white font-semibold text-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: gradient }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {statusMessage && (
                  <p className={`mt-4 text-center text-sm font-medium ${isError ? 'text-red-500' : 'text-green-600'}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
              
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-center text-gray-500 text-sm">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-poppins text-3xl font-bold text-gray-900 mb-2">
              Our Location
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Find us on the map and feel free to visit our office.
            </p>
          </motion.div>

          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Smarteddy%20Technologies%20Pvt%20Ltd,%20Bangalore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
