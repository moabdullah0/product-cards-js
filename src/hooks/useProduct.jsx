import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProject = () =>
  useQuery({
    queryKey: ["project"],
    queryFn: () =>
      axios.get("https://dummyjson.com/products").then((res) => res.data.products),
  });
export default useProject;
