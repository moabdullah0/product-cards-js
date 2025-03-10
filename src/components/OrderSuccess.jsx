import React from "react";
import { motion } from "framer-motion";

const OrderSuccess = ({ navigate }) => {
  return (
    <motion.div
      className="text-center py-10"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
      <p className="text-gray-600 mb-8">Your order has been placed and will be processed soon.</p>
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-xl font-medium shadow-md hover:shadow-lg"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default OrderSuccess;