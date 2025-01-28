import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkAuthStatusAPI } from "./APIServices/users/usersAPI";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AccountSummaryDashboard from "./components/Dashboard/AccountSummaryDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import CreatePost from "./components/Posts/CreatePost";
import PostDetails from "./components/Posts/PostDetails";
import PostsList from "./components/Posts/PostList";
import PublicNavbar from "./components/Shared/Navbar/Navbar";
import PrivateNavbar from "./components/Shared/PrivateNavbar/PrivateNavbar";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import Profile from "./Pages/Profile/ProfilePage";
import SignUpPage from "./Pages/Signup/SignUpPage";
import { isAuthenticated } from "./redux/slices/authSlices";
function App() {
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
  //Get the login user from store
  const { userAuth } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {/* Navbar */}
      {userAuth ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        {/* create post */}
        <Route element={<Home />} path="/" />
        <Route element={<UserDashboard />} path="/dashboard">
          {/* Account summary  */}
          <Route
            element={
              <AuthRoute>
                <AccountSummaryDashboard />
              </AuthRoute>
            }
            path=""
          />
          {/* Create posts */}
          <Route
            element={
              <AuthRoute>
                <CreatePost />
              </AuthRoute>
            }
            path="create-post"
          />
        </Route>
        <Route element={<PostsList />} path="/posts" />
        <Route element={<PostDetails />} path="/posts/:postId" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/register" />
        <Route
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
          path="/profile"
        />
        {/* <Route element={<UpdatePost />} path="/posts/:postId" /> */}
        {/* <CreatePost />
      <PostsList /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
