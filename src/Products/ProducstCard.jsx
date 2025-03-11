import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ project, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden group">
          <motion.img
            className="w-full h-64 object-cover transition-transform duration-300"
            src={project.thumbnail}
            alt={project.title}
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              to={`/product/${project.id}`}
              className="text-white text-lg font-semibold hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        <div className="px-6 pb-6">
          <div className="flex gap-4">
            <motion.button
              onClick={() => addToCart(project)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
            <Link
              to={`/product/${project.id}`}
              className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
            >
              Details
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;