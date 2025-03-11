import React from "react";


const FilterProduct = ({ setSearchQuery, isLoading }) => {
  const dataArray = ["beauty", "fragrances", "furniture", "groceries"];
  if (isLoading) return <div>Loading ... </div>;

  return (
    <div className="flex  items-center justify-center gap-5 mb-5">
      <div className="flex justify-center">
        <button
          onClick={() => setSearchQuery("")}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg"
        >
          All
        </button>
      </div>
      {dataArray?.map((product) => (
        <div className="flex justify-center">
          <button
            onClick={() => setSearchQuery(product)}
            className="bg-blue-400 text-white px-4 py-1 rounded-lg"
          >
            {product}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
