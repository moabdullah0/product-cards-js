import React from 'react';
import useCartStore from '../app/store';
import { Link } from 'react-router-dom';

const Home = () => {
  const { addToCart } = useCartStore();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Track your fitness and stay connected"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Durable backpack with laptop compartment"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Portable speaker with amazing sound quality"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "RGB mechanical keyboard for gaming"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Ergonomic wireless mouse for productivity"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-10 relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Tech Store</h1>
          <p className="text-xl mb-6">Discover the latest gadgets and accessories at amazing prices.</p>
          <Link to={'/products'} className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </Link>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Tech workspace with laptop and gadgets"
          className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-20"
        />
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
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
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
