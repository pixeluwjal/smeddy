"use client";
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App component that renders the entire single-page website
export default function App() {
  return (
    <div className="font-poppins antialiased text-gray-900">
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <Contact />
      </main>
    </div>
  );
}
