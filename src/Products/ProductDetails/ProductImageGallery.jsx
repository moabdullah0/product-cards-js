import { motion } from "framer-motion";
import { slideInVariants } from "./animation";

const ProductImageGallery = ({ product }) => (
  <motion.div custom={-1} variants={slideInVariants} className="space-y-4">
    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
      <img
        src={product?.thumbnail}
        alt={product?.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {product?.images?.slice(0, 4).map((image, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg overflow-hidden bg-gray-100"
        >
          <img
            src={image}
            alt={`${product?.title} ${index + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform"
          />
        </div>
      ))}
    </div>
  </motion.div>
);
export default ProductImageGallery;
