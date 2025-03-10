import React from "react";
import { motion } from "framer-motion";

const ShippingInfo = ({ shippingInfo, setShippingInfo }) => {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "First Name", key: "firstName", type: "text" },
          { label: "Last Name", key: "lastName", type: "text" },
          { label: "Email", key: "email", type: "email" },
          { label: "Phone", key: "phone", type: "tel" },
          { label: "Address", key: "address", type: "text", colSpan: "md:col-span-2" },
          { label: "City", key: "city", type: "text" },
          { label: "Zip Code", key: "zipCode", type: "text" },
        ].map((field) => (
          <motion.div
            key={field.key}
            className={field.colSpan || ""}
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <input
              type={field.type}
              value={shippingInfo[field.key]}
              onChange={(e) => setShippingInfo({ ...shippingInfo, [field.key]: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShippingInfo;