import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProfilePage = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      axios.get("https://dummyjson.com/auth/me").then((res) => res.data),
  });
  return <div>
    <h1>Profile Page</h1>
    <p>{data?.name}</p>
    <p>{data?.email}</p>
 
  </div>;
};

export default ProfilePage;
