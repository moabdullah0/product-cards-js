import React, { useState } from 'react';
import useCartStore from '../app/store';
import { Link } from 'react-router-dom';
import { products } from '../constant/dataHome';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from '../slider/Slider';

const Home = () => {
  const { addToCart } = useCartStore();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.2
          }
        } : { opacity: 0, y: 50 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-10 relative overflow-hidden"
      >
        <motion.div 
          className="max-w-2xl relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { 
            opacity: 1, 
            x: 0,
            transition: { delay: 0.3, duration: 0.6 }
          } : { opacity: 0, x: -50 }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.4, duration: 0.6 }
            } : { opacity: 0, y: 20 }}
          >
            Welcome to Our Tech Store
          </motion.h1>
          <motion.p 
            className="text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5, duration: 0.6 }
            } : { opacity: 0, y: 20 }}
          >
            Discover the latest gadgets and accessories at amazing prices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.6, duration: 0.6 }
            } : { opacity: 0, y: 20 }}
          >
            <Link to={'/products'} className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
        <motion.img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Tech workspace with laptop and gadgets"
          className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-20"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={isInView ? { 
            opacity: 0.2, 
            scale: 1,
            transition: { delay: 0.3, duration: 0.8 }
          } : { opacity: 0, scale: 1.2 }}
        />
      </motion.div>

    <Slider/>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${product.price}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
          >
            <div className="relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${selectedProduct.price}</span>
                <button 
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
