import { useMutation } from "@tanstack/react-query"; // Renamed to useMutation for clarity
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerAPI } from "../../APIServices/users/usersAPI";
import AlertMessage from "../Alert/AlertMessage";

const Signup = () => {
  // navigate
  const navigate = useNavigate();

  // register mutation
  const mutation = useMutation({
    mutationKey: ["user-reg"],
    mutationFn: registerAPI,
  });

  // formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      mutation
        .mutateAsync(values)
        .then(() => {
          // redirect
          navigate("/login");
        })
        .catch((err) => console.log(err));
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
          Signup
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
              Email
            </label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 transition-all"
              type="email"
              placeholder="Enter email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
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
            Sign Up
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-purple-500 font-bold hover:underline"
          >
            Login
          </Link>
          {/* Google Sign In */}
          <div>
            <a
              href="http://localhost:5000/api/v1/users/auth/google" // Make sure to replace this URL
              className="h-14 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-white w-full text-center border border-gray-100 shadow hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                className="w-6 h-6"
              >
                <path
                  d="M10.5003 1.91667C12.5358 1.91667 14.3903 2.67493 15.8117 3.91839L13.8037 5.92643C12.9021 5.19326 11.7542 4.75001 10.5003 4.75001C7.601 4.75001 5.25033 7.10068 5.25033 10C5.25033 12.8993 7.601 15.25 10.5003 15.25C12.7863 15.25 14.7244 13.7867 15.4456 11.7501L15.5636 11.4167H15.2099H10.7503V8.58334H17.7503V8.61792H18.0003H18.4637C18.5415 9.06752 18.5837 9.52907 18.5837 10C18.5837 14.464 14.9643 18.0833 10.5003 18.0833C6.03631 18.0833 2.41699 14.464 2.41699 10C2.41699 5.53599 6.03631 1.91667 10.5003 1.91667Z"
                  fill="#FFC107"
                  stroke="#FFC107"
                  strokeWidth="0.5"
                />
                <path
                  d="M3.12793 6.12125L5.86585 8.12917C6.60668 6.29501 8.40085 5.00001 10.5004 5.00001C11.775 5.00001 12.9346 5.48084 13.8175 6.26625L16.1746 3.90917C14.6863 2.52209 12.6954 1.66667 10.5004 1.66667C7.2996 1.66667 4.52376 3.47375 3.12793 6.12125Z"
                  fill="#FF3D00"
                />
                <path
                  d="M10.4998 18.3333C12.6523 18.3333 14.6081 17.5096 16.0869 16.17L13.5077 13.9875C12.6429 14.6452 11.5862 15.0009 10.4998 15C8.3323 15 6.49189 13.6179 5.79855 11.6892L3.08105 13.7829C4.46022 16.4817 7.26105 18.3333 10.4998 18.3333Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.6713 8.36791H18V8.33333H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.9879L13.5079 13.9871L16.0871 16.1696C15.9046 16.3354 18.8333 14.1667 18.8333 9.99999C18.8333 9.44124 18.7758 8.89583 18.6713 8.36791Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="font-bold font-heading ml-3">
                Sign in with Google
              </span>
            </a>
          </div>
        </p>
      </motion.div>

      {/* Show appropriate alert message */}
      {mutation.isLoading && (
        <AlertMessage type="loading" message="Loading, please wait..." />
      )}
      {mutation.isSuccess && (
        <AlertMessage type="success" message="Registration successful!" />
      )}
      {mutation.isError && (
        <AlertMessage
          type="error"
          message={
            mutation.error?.response?.data?.message || "An error occurred"
          }
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

export default Signup;
