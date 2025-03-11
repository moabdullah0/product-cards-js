import React, { useState } from "react";

const FilterProduct = ({ setSearchQuery, isLoading }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const dataArray = ["beauty", "fragrances", "furniture", "groceries"];

  if (isLoading) return <div className="text-center text-gray-600">Loading ... </div>;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSearchQuery(filter);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8 px-4">
      <button
        onClick={() => {
          setActiveFilter("");
          setSearchQuery("");
        }}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
          activeFilter === ""
            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
            : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        All
      </button>
      {dataArray.map((product) => (
        <button
          key={product}
          onClick={() => handleFilterClick(product)}
          className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
            activeFilter === product
              ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {product}
        </button>
      ))}
    </div>
  );
};

export default FilterProduct;
