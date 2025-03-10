import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../app/authStore";


const useProfile = () => {
  const { token } = useAuthStore();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      axios.get("https://dummyjson.com/auth/me", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => res.data),
    enabled: !!token, // Only run the query if we have a token
  });

  return {
    profile: data,
    isLoading,
    isError,
    error,
    refetchProfile: refetch
  };
};

export default useProfile;