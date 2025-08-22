"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const primaryColor = '#01466E';
  const primaryLight = '#346C91';
  const primaryLighter = '#5A8BAD';
  const primaryDark = '#013455';
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        headers: { 'Content-Type': 'application/json' },
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
        <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: primaryColor }} />
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: primaryColor }} />
        
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
            animate={{ y: [0, Math.random() * 30 - 15], x: [0, Math.random() * 15 - 7.5] }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        ))}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
            {/* Contact Info */}
            <motion.div className="flex flex-col justify-center space-y-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900">Reach out to us directly</h4>
                <p className="text-gray-600 text-lg">
                  Our team is ready to answer your questions and help you implement innovative proximity solutions for your business.
                </p>
              </div>
              <div className="space-y-6">
                {[{
                  icon: <FaMapMarkerAlt className="h-6 w-6" style={{ color: primaryColor }} />,
                  title: 'Address',
                  lines: ['#472 3rd Cross, 8th Main,', 'BHCS Layout, Chikkalasandra,', 'Bangalore, India']
                },{
                  icon: <FaPhoneAlt className="h-6 w-6" style={{ color: primaryColor }} />,
                  title: 'Phone Number',
                  lines: ['+91 8049572379']
                },{
                  icon: <FaEnvelope className="h-6 w-6" style={{ color: primaryColor }} />,
                  title: 'Email',
                  lines: ['contact@smarteddy.io']
                }].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start p-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + idx*0.1 }} whileHover={{ y: -5 }}>
                    <div className="flex-shrink-0 p-3 rounded-lg" style={{ background: `${primaryColor}10` }}>{item.icon}</div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{item.title}</p>
                      {item.lines.map((line, i) => <p key={i} className="text-gray-600 mt-1">{line}</p>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><FaUser className="h-5 w-5 text-gray-400" /></div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-xl border border-gray-300 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#01466E] transition-all duration-300"
                    />
                  </div>
                </motion.div>
                {/* Email */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><FaEnvelope className="h-5 w-5 text-gray-400" /></div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-xl border border-gray-300 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#01466E] transition-all duration-300"
                    />
                  </div>
                </motion.div>
                {/* Message */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex items-start pointer-events-none"><FaComment className="h-5 w-5 text-gray-400" /></div>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-xl border border-gray-300 pl-12 pr-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#01466E] transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </motion.div>
                {/* Submit */}
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
                {statusMessage && <p className={`mt-4 text-center text-sm font-medium ${isError ? 'text-red-500' : 'text-green-600'}`}>{statusMessage}</p>}
              </form>
              <motion.div className="mt-8 pt-6 border-t border-gray-100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                <p className="text-center text-gray-500 text-sm">We typically respond to inquiries within 24 hours during business days.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-poppins text-3xl font-bold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600 max-w-lg mx-auto">Find us on the map and feel free to visit our office.</p>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.646961623992!2d77.5501861759082!3d12.92984928738367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff826e7a049%3A0xc3f3456d95f87b32!2s472%2C%208th%20Main%20Rd%2C%20BHCS%20Layout%2C%20Chikkalasandra%2C%20Bengaluru%2C%20Karnataka%20560061%2C%20India!5e0!3m2!1sen!2sus!4v1724217112461!5m2!1sen!2sus"
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
