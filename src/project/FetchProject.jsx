import React, { useEffect } from "react";
import useProject from "../hooks/useProduct";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../app/store";
import useAuthStore from "../app/authStore";
import { motion } from "framer-motion";

const FetchProject = () => {
  const { addToCart } = useCartStore();
  const { token } = useAuthStore();
  const { data, isLoading } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (isLoading) return <div>Loading ... </div>;
  if (!token) return null;

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((project) => (
        <motion.div
          className="grid"
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={project.thumbnail}
              alt=""
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 mb-4">
              <motion.button
                onClick={() => addToCart(project)}
                className="bg-blue-700 text-white rounded-md px-4 py-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Add To Cart
              </motion.button>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={"/product/" + project.id}
                  className="bg-blue-700 text-white rounded-md px-4 py-2"
                >
                  Show Details
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FetchProject;
