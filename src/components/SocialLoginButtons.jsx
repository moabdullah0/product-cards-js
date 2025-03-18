import { motion } from "framer-motion";
import { hoverScale } from "../../utils/variants";

export const SocialLoginButtons = () => (
  <div className="grid grid-cols-3 gap-3">
    {["Twitter", "GitHub", "Google"].map((provider, index) => (
      <motion.button
        key={index}
        {...hoverScale}
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <img
          src={`https://cdn-icons-png.flaticon.com/512/2111/211${index + 1}.png`}
          alt={provider}
          className="w-5 h-5"
        />
      </motion.button>
    ))}
  </div>
);