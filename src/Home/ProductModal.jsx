import React from 'react';
import { motion } from 'framer-motion';

const ProductModal = ({ selectedProduct, handleAddToCart, setSelectedProduct }) => {
  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
      >
        <div className="relative">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-80 object-cover"
          />
          <button 
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedProduct.name}</h2>
          <p className="text-gray-600 text-lg mb-6">{selectedProduct.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-indigo-600">${selectedProduct.price}</span>
            <button 
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;