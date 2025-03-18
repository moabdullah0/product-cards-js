import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-storage");
  const getToken = JSON.parse(token);
  
  if (getToken && getToken.state.token) {
    config.headers.Authorization = `Bearer ${getToken.state.token}`;
  }
  
  return config;
});

export default axiosInstance;
