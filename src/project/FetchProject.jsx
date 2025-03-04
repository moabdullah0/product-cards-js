import React from "react";
import useProject from "../hooks/useProduct";
import { Link } from "react-router-dom";
import useCartStore from "../app/store";
const FetchProject = () => {
  const { addToCart } = useCartStore();
  const { data, isLoading } = useProject();
  if (isLoading) return <div>Loading ... </div>;
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((project) => (
        <div className="grid">
          <div
            href="#"
            className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow-sm  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={project.thumbnail}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => addToCart(project)}
                className="bg-blue-700 text-white mb-4 rounded-md px-4 py-2 "
              >
                Add To Cart
              </button>
              <Link
                to={"/product/" + project.id}
                className="bg-blue-700 text-white mb-4 rounded-md px-4 py-2 "
              >
                Show Detailes
              </Link>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchProject;
