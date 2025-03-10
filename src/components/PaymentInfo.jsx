import React from "react";
import { motion } from "framer-motion";

const PaymentInfo = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Payment Information</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { method: "card", icon: "credit-card", label: "Credit Card" },
            { method: "paypal", icon: "paypal", label: "PayPal" },
            { method: "whatsapp", icon: "whatsapp", label: "WhatsApp" },
          ].map((option) => (
            <div
              key={option.method}
              className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${
                paymentMethod === option.method ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
              onClick={() => setPaymentMethod(option.method)}
            >
              <span className="text-blue-600 mb-2">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentInfo;