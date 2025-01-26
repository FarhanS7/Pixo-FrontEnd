import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CreatePost from "../components/Posts/CreatePost";
import PostDetails from "../components/Posts/PostDetails";
import PostsList from "../components/Posts/PostList";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/LoginPage";
import SignUpPage from "../Pages/Signup/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetails />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
    ],
  },
]);
