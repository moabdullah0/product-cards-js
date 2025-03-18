// src/components/InputField.jsx
import { motion } from "framer-motion";

export const InputField = ({ label, type, placeholder, icon, register, errors, name }) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    {errors[name] && (
      <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
    )}
  </div>
);