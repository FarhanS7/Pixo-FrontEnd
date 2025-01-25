import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CreatePost from "../components/Posts/CreatePost";
import PostDetails from "../components/Posts/PostDetails";
import PostsList from "../components/Posts/PostList";

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
    ],
  },
]);
