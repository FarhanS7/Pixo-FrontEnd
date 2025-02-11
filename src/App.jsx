import { useQuery } from "@tanstack/react-query";
import { Settings } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkAuthStatusAPI } from "./APIServices/users/usersAPI";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AccountSummaryDashboard from "./components/Dashboard/AccountSummaryDashboard";
import AccountVerifiedComponent from "./components/Dashboard/AccountVerifiedComponent";
import AddEmailComponent from "./components/Dashboard/AddEmailComponent";
import DashboardPosts from "./components/Dashboard/DashboardPosts";
import MyEarnings from "./components/Dashboard/MyEarnings";
import MyFollowers from "./components/Dashboard/MyFollowers";
import MyFollowing from "./components/Dashboard/MyFollowing";
import UploadProfilePic from "./components/Dashboard/UploadProfilePic";
import UserDashboard from "./components/Dashboard/UserDashboard";
import RequestResetPassword from "./components/Login/RequestResetPassword";
import ResetPassword from "./components/Login/ResetPassword";
import Notifications from "./components/Notifications/NotificationLists";
import CreatePost from "./components/Posts/CreatePost";
import PostDetails from "./components/Posts/PostDetails";
import PostsList from "./components/Posts/PostList";
import UpdatePost from "./components/Posts/UpdatePost";
import Rankings from "./components/Ranking/CreatorsRanking";
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
        {/* User dashboard */}
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
          {/* my posts */}
          <Route
            element={
              <AuthRoute>
                <DashboardPosts />
              </AuthRoute>
            }
            path="posts"
          />
          {/* update post */}
          <Route
            element={
              <AuthRoute>
                <UpdatePost />
              </AuthRoute>
            }
            path="update-post/:postId"
          />
          {/* upload profile pci */}
          <Route
            element={
              <AuthRoute>
                <UploadProfilePic />
              </AuthRoute>
            }
            path="upload-profile-photo"
          />
          {/* settings page */}
          <Route
            element={
              <AuthRoute>
                <Settings />
              </AuthRoute>
            }
            path="settings"
          />
          {/* update email */}
          <Route
            element={
              <AuthRoute>
                <AddEmailComponent />
              </AuthRoute>
            }
            path="add-email"
          />
          {/* my followings  */}
          <Route
            element={
              <AuthRoute>
                <MyFollowing />
              </AuthRoute>
            }
            path="my-followings"
          />
          {/* my followers  */}
          <Route
            element={
              <AuthRoute>
                <MyFollowers />
              </AuthRoute>
            }
            path="my-followers"
          />
          {/* my earnings  */}
          <Route
            element={
              <AuthRoute>
                <MyEarnings />
              </AuthRoute>
            }
            path="my-earnings"
          />

          {/* Notifications */}
          <Route
            element={
              <AuthRoute>
                <Notifications />
              </AuthRoute>
            }
            path="notifications"
          />
          {/* verify-account */}
          <Route
            element={
              <AuthRoute>
                <AccountVerifiedComponent />
              </AuthRoute>
            }
            path="account-verification/:verifyToken"
          />
          {/* Create plan
          <Route
            element={
              <AuthRoute>
                <CreatePlan />
              </AuthRoute>
            }
            path="create-plan"
          /> */}
          {/* Create category
          <Route
            element={
              <AuthRoute>
                <AddCategory />
              </AuthRoute>
            }
            path="add-category"
          /> */}
        </Route>
        {/* public links */}
        <Route element={<PostsList />} path="/posts" />
        <Route element={<PostDetails />} path="/posts/:postId" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/register" />
        {/* <Route element={<Pricing />} path="/pricing" /> */}
        {/* <Route element={<CheckoutForm />} path="/checkout/:planId" /> */}
        <Route element={<RequestResetPassword />} path="/forgot-password" />
        <Route element={<Rankings />} path="/ranking" />
        <Route
          element={<ResetPassword />}
          path="/reset-password/:verifyToken"
        />
        <Route
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
          path="/profile"
        />
        {/* <Route
          element={
            <AuthRoute>
              <PaymentSuccess />
            </AuthRoute>
          }
          path="/success"
        /> */}
        {/* <Route
          element={
            <AuthRoute>
              <PayingFreePlan />
            </AuthRoute>
          }
          path="/free-subscription"
        /> */}
        {/* <Route element={<UpdatePost />} path="/posts/:postId" /> */}
        {/* <CreatePost />
        <PostsList /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
