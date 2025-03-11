import React, { useState, useRef } from 'react';
import {  useInView } from 'framer-motion';

import useCartStore from '../../app/store';
import Slider from '../../slider/Slider';
import HeroSection from './Hero';
import FeaturedProducts from './FeaturedProducts';
import ProductModal from './ProductModal';
import AllProducts from './AllProducts';

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
    <div className="container mx-auto px-4 py-8 mt-10">
      <div ref={heroRef}>
        <HeroSection isInView={isInView} />
      </div>
      <Slider />
      <FeaturedProducts handleProductClick={handleProductClick} handleAddToCart={handleAddToCart} />
      <AllProducts handleProductClick={handleProductClick} handleAddToCart={handleAddToCart} />
      <ProductModal 
        selectedProduct={selectedProduct} 
        handleAddToCart={handleAddToCart} 
        setSelectedProduct={setSelectedProduct} 
      />
    </div>
  );
};

export default Home;