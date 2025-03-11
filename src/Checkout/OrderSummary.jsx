import React from "react";
import { motion } from "framer-motion";

const OrderSummary = ({ cartItems, subtotal, tax, total }) => {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex justify-between p-4 bg-gray-50 rounded-xl"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <img 
                className="w-16 h-16 object-cover rounded-lg"
                src={item.thumbnail}
                alt={item.name}
              />
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
              </div>
            </div>
            <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg text-gray-800 pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;