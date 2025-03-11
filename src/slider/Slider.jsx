import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Slider.css";

import { Navigation, Autoplay } from "swiper/modules";
import { useProduct } from "../hooks/useProduct";
import useCartStore from "../app/store";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Slider() {
  const { data: products, loading, error } = useProduct();
  const { addToCart } = useCartStore();

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="slider-container max-w-7xl mx-auto px-4 py-8">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden dark:border-gray-700 dark:bg-gray-800"
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                  <motion.img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {product.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <motion.button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add To Cart
                    </motion.button>
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      Show Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
