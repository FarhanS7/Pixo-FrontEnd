// import React from "react";
// import { useSelector } from "react-redux";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CreatePost from "../components/Posts/CreatePost";
// import PostDetails from "../components/Posts/PostDetails";
// import PostsList from "../components/Posts/PostList";
// import Layout from "../Layout/Layout";
// import Home from "../Pages/Home/Home";
// import LoginPage from "../Pages/Login/LoginPage";
// import ProfilePage from "../Pages/Profile/ProfilePage";
// import SignUpPage from "../Pages/Signup/SignUpPage";

// // Create a wrapper component that retrieves user data from the store
// const AppRouter = () => {
//   const user = useSelector((state) => state.user);

//   // You can use the `user` data here, and conditionally render the routes if needed

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/create-post",
//           element: <CreatePost />,
//         },
//         {
//           path: "/posts",
//           element: <PostsList />,
//         },
//         {
//           path: "/posts/:postId",
//           element: <PostDetails />,
//         },
//         {
//           path: "/login",
//           element: <LoginPage />,
//         },
//         {
//           path: "/register",
//           element: <SignUpPage />,
//         },
//         {
//           path: "/profile",
//           element: <ProfilePage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default AppRouter;
