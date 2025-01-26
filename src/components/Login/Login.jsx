import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginAPI } from "../../APIServices/users/usersAPI";
import AlertMessage from "../Alert/AlertMessage";
const Login = () => {
  //navigate
  const navigate = useNavigate();
  // user mutation
  const userMutation = useMutation({
    mutationKey: ["user-registration"],
    mutationFn: loginAPI,
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      userMutation
        .mutateAsync(values)
        .then(() => {
          // redirect
          // navigate("/login");
        })
        .catch((err) => console.log(err));
    },
  });
  console.log(userMutation);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-purple-400 relative overflow-hidden">
      <div className="absolute top-4 ">
        {userMutation.isPending && (
          <AlertMessage type="loading" message="Loading please wait..." />
        )}
        {userMutation.isSuccess && (
          <AlertMessage type="success" message="Login success" />
        )}
        {userMutation.isError && (
          <AlertMessage
            type="error"
            message={userMutation.error.response.data.message}
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-6 animate-pulse">
          Pixo Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 transition-all"
              type="text"
              placeholder="Enter username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center gap-1 w-full rounded-full p-4 border border-gray-100 shadow mb-8">
              <input
                className="outline-none flex-1 placeholder-gray-500 "
                type="password"
                placeholder="Enter password"
                {...formik.getFieldProps("password")}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.25 9.15C18.94 5.52 15.56 3.43 12 3.43C10.22 3.43 8.49 3.95 6.91 4.92C5.33 5.9 3.91 7.33 2.75 9.15C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.15ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.77 9.76 7.96 12 7.96C14.24 7.96 16.04 9.77 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z"
                  fill="#A3A3A3"
                />
                <path
                  d="M12.0004 9.14C10.4304 9.14 9.15039 10.42 9.15039 12C9.15039 13.57 10.4304 14.85 12.0004 14.85C13.5704 14.85 14.8604 13.57 14.8604 12C14.8604 10.43 13.5704 9.14 12.0004 9.14Z"
                  fill="#A3A3A3"
                />
              </svg>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(128, 0, 128, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-md transition-all"
          >
            Sign In
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
          <Link
            to="/register"
            className="text-purple-500 font-bold hover:underline"
          >
            {" "}
            Register
          </Link>
        </p>
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute w-64 h-64 bg-purple-300 rounded-full opacity-50 top-20 left-10"
      ></motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20 }}
        className="absolute w-80 h-80 bg-purple-400 rounded-full opacity-40 bottom-20 right-10"
      ></motion.div>
    </div>
  );
};

export default Login;
