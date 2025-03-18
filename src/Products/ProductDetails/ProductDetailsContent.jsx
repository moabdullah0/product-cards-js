import { motion } from "framer-motion";
import { slideInVariants } from "./animation";
const ProductDetailsContent = ({ product, onAddToCart, onAddToFavorite }) => (
  <motion.div custom={1} variants={slideInVariants} className="space-y-6 ">
    <div>
      <h1 className="text-3xl font-bold text-gray-900 text-start">{product?.title}</h1>
      <p className="text-lg text-gray-500 mt-2 text-start">{product?.brand}</p>
    </div>

    <div className="flex items-center space-x-4">
      <span className="text-4xl font-bold text-blue-600">
        ${product?.price}
      </span>
      <span className="text-lg text-green-500 font-semibold">
        {product?.discountPercentage}% OFF
      </span>
    </div>

    <div className="flex items-center space-x-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < Math.floor(product?.rating)
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-600">({product?.rating})</span>
    </div>

    <p className="text-gray-600 leading-relaxed text-start">{product?.description}</p>

    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Stock:</span>
        <span
          className={`font-semibold ${
            product?.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product?.stock > 0 ? `${product.stock} units` : "Out of stock"}
        </span>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onAddToCart}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Add to Cart</span>
        </button>
        <button
          onClick={onAddToFavorite}
          className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </motion.div>
);
export default ProductDetailsContent;
