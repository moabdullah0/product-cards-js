import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProduct = () => {
  return useQuery({
    queryKey: ["project"],
    queryFn: () =>
      axios
        .get("https://dummyjson.com/products")
        .then((res) => res.data.products),
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
