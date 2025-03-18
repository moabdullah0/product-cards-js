import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../app/store";
import useAuthStore from "../app/authStore";
import { useProduct } from "../hooks/useProduct";
import ProductCard from "./ProducstCard";
import FilterProduct from "./FilterProduct";
import LoadingSpinner from "../components/LoadingSpinner";
const FetchProject = () => {
  const [search, setSearchQuery] = React.useState("");
  const { addToCart } = useCartStore();
  const { token } = useAuthStore();
  const { data, isLoading } = useProduct(search);
  const navigate = useNavigate();

  // Redirect to login if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (isLoading) return <LoadingSpinner />;

  if (!token) return null;

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <FilterProduct
        isLoading={isLoading}
        setSearchQuery={setSearchQuery}
        className="mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((project) => (
          <ProductCard
            key={project.id}
            project={project}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchProject;