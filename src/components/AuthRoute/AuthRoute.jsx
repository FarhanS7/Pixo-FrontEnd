import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuthStatusAPI } from "../../APIServices/users/usersAPI";
import AuthCheckingComponent from "../Alert/AuthCheckingComponent";

const AuthRoute = ({ children }) => {
  const { isError, isLoading, data, error, isSuccess, refetch } = useQuery({
    queryKey: ["user-auth"],
    queryFn: checkAuthStatusAPI,
  });

  console.log(data);

  //for loading
  if (isLoading) return <AuthCheckingComponent />;
  //in case a user is not login
  if (!data) {
    return <Navigate to="/login" />;
  }
  //render
  return children;
};

export default AuthRoute;
