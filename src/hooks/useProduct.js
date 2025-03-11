import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProduct = (search) => {
  console.log(search)
  return useQuery({
    queryKey: ["project", search],
    queryFn: async () => {
      const response = await axios.get(
        search
          ? `https://dummyjson.com/products/category/${search}`
          : "https://dummyjson.com/products"
      );
      return response.data.products;
    },
  });
};

export const useProductID = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    },
  });
};
