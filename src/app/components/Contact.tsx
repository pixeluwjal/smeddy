"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // Refined modern color palette
  const primaryColor = '#02588A';
  const primaryLight = '#02588A';
  const primaryDark = '#02588A';
  const accentColor = '#02588A';
  const accentGradient = `linear-gradient(135deg, ${accentColor} 0%, #02588A 100%)`;
  const primaryGradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message due to a network or server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-28 relative overflow-hidden">
        {/* Static background elements for visual interest */}
        <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl hidden md:block" style={{ background: primaryColor }} />
        <div className="absolute -right-20 bottom-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl hidden md:block" style={{ background: primaryColor }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center text-xs font-semibold text-white uppercase tracking-widest mb-4 py-2 px-4 rounded-full" style={{ background: accentGradient }}>
              <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
              Get in Touch
            </span>
            <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-4 md:mb-6">
              Contact <span className="text-transparent bg-clip-text" style={{ backgroundImage: accentGradient }}>Us</span>
            </h3>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 px-4 md:px-0 leading-relaxed">
              Have questions or want to learn more about our proximity solutions? Get in touch with our team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Contact Info Section */}
            <div className="flex flex-col justify-center space-y-8 md:space-y-10">
              <div className="space-y-5">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">Reach out to us directly</h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Our team is ready to answer your questions and help you implement innovative proximity solutions for your business.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: <FaMapMarkerAlt className="h-5 w-5 md:h-6 md:w-6" style={{ color: 'white' }} />,
                    title: 'Address',
                    lines: ['#472 3rd Cross, 8th Main,', 'BHCS Layout, Chikkalasandra,', 'Bangalore, India']
                  },
                  {
                    icon: <FaPhoneAlt className="h-5 w-5 md:h-6 md:w-6" style={{ color: 'white' }} />,
                    title: 'Phone Number',
                    lines: ['+91 8049572379']
                  },
                  {
                    icon: <FaEnvelope className="h-5 w-5 md:h-6 md:w-6" style={{ color: 'white' }} />,
                    title: 'Email',
                    lines: ['contact@smarteddy.io']
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-4 md:p-5 rounded-xl md:rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <div className="flex-shrink-0 p-3 md:p-4 rounded-lg md:rounded-xl flex items-center justify-center shadow-inner" style={{ background: accentGradient }}>
                      {item.icon}
                    </div>
                    <div className="ml-4 md:ml-5">
                      <p className="font-semibold text-gray-800 text-base md:text-lg group-hover:text-gray-900 transition-colors">{item.title}</p>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-gray-600 mt-1 text-sm md:text-base group-hover:text-gray-700 transition-colors">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100">
              <div className="mb-2 flex items-center">
                <div className="h-10 w-1.5 rounded-full mr-3" style={{ background: accentGradient }}></div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">Send us a message</h4>
              </div>
              <p className="text-gray-500 mb-6 md:mb-8 ml-4">We'll get back to you as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl md:rounded-2xl border border-gray-200 pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${primaryColor}] transition-all duration-300 text-sm md:text-base bg-gray-50 focus:bg-white shadow-sm"
                  />
                </div>
                
                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl md:rounded-2xl border border-gray-200 pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${primaryColor}] transition-all duration-300 text-sm md:text-base bg-gray-50 focus:bg-white shadow-sm"
                  />
                </div>
                
                {/* Message Textarea */}
                <div className="relative">
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 flex items-start pointer-events-none">
                    <FaComment className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mt-1" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl md:rounded-2xl border border-gray-200 pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${primaryColor}] transition-all duration-300 resize-none text-sm md:text-base bg-gray-50 focus:bg-white shadow-sm"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-white font-semibold text-base md:text-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  style={{ background: accentGradient }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                
                {status && (
                  <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                  </p>
                )}

                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100">
                  <p className="text-center text-gray-500 text-sm md:text-base">We typically respond to inquiries within 24 hours during business days.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id ="contact" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Location</h3>
            <p className="text-gray-600 max-w-lg mx-auto text-base md:text-lg">Find us on the map and feel free to visit our office.</p>
          </div>
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.646961623992!2d77.5501861759082!3d12.92984928738367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff826e7a049%3A0xc3f3456d95f87b32!2s472%2C%208th%20Main%20Rd%2C%20BHCS%20Layout%2C%20Chikkalasandra%2C%20Bengaluru%2C%20Karnataka%20560061%2C%20India!5e0!3m2!1sen!2sus!4v1724217112461!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[350px] md:min-h-[400px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
