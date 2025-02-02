import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthStatusAPI } from "../../APIServices/users/usersAPI";
import { isAuthenticated } from "../../redux/slices/authSlices";

const Profile = () => {
  // ! use query
  const { isError, isLoading, data, error, isSuccess, refetch } = useQuery({
    queryKey: ["user-auth"],
    queryFn: checkAuthStatusAPI,
  });

  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuthenticated(data));
  }, [data]);
  return (
    <div>
      Profile
      <h1>Welcome to profile page</h1>
    </div>
  );
};

export default Profile;
