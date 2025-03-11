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
    <div className="slider-container">
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
              className="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {product.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.button
                    onClick={() => addToCart(product)}
                    className="bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add To Cart
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-800"
                    >
                      Show Details
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
