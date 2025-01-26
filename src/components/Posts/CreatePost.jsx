import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
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
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-purple-400 relative overflow-hidden">
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
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 transition-all"
              type="password"
              placeholder="Enter password"
              {...formik.getFieldProps("password")}
            />
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
      {userMutation.isPending && (
        <AlertMessage type="loading" message="Loading please wait..." />
      )}
      {userMutation.isSuccess && (
        <AlertMessage type="success" message="Registration success" />
      )}
      {userMutation.isError && (
        <AlertMessage
          type="error"
          message={userMutation.error.response.data.message}
        />
      )}
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
