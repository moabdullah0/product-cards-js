import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../app/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../services/api-client";
import apiClient from "../services/api-client";

export const useAuth = () => {
  const { setToken } = useAuthStore();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (credentials) =>
      apiClient
        .post("/auth/login", {
            username:credentials.username,
            password:credentials.password,
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      setToken(data.accessToken);
      navigate("/");
      toast.success('Login successful!')
    },
  });

  // Logout function
  const logout = () => {
    setToken(null);
    navigate("/login");
  };

  return {
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
    isError: loginMutation.isError,
  };
};

export default useAuth;
