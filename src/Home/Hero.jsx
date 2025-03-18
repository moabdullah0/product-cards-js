import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = ({ isInView }) => {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-200 text-white rounded-xl p-12 mb-16 relative overflow-hidden shadow-2xl"
    >
      <div className="max-w-lg relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Discover the Future of Technology
        </h1>
        <p className="text-2xl mb-8 text-gray-100">
          Experience innovation with our premium selection of cutting-edge devices.
        </p>
        <Link 
          to="/products" 
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block shadow-lg"
        >
          Explore Now
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-black opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Tech workspace with laptop and gadgets"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;