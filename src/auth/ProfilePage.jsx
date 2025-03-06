import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuthStore from "../app/authStore";

const ProfilePage = () => {
  const {token}=useAuthStore()
  // console.log(token)
  

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      axios.get("https://dummyjson.com/auth/me", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  
        }
      }).then((res) => res.data),
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile Page</h1>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6 space-y-4">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-2xl text-gray-600">
                  {data?.name || "U"}
                </span>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
                <p className="text-gray-600">{data?.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 px-4 py-3 rounded-md">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="mt-1 text-gray-900">{data?.email}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-md">
                <p className="text-sm font-medium text-gray-500">Username</p>
                <p className="mt-1 text-gray-900">{data?.username}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
