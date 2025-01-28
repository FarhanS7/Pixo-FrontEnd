import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { createPostAPI } from "../../APIServices/posts/postsAPI";
import AlertMessage from "../Alert/AlertMessage";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [imageError, setImageErr] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const postMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPostAPI,
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Description is required"),
      image: Yup.string().required("Image is required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("image", values.image);
      postMutation.mutate(formData);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file.size > 1048576) {
      setImageErr("File size exceeds 1MB");
      return;
    }
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      setImageErr("Invalid file type");
      return;
    }
    formik.setFieldValue("image", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    formik.setFieldValue("image", null);
    setImagePreview(null);
  };

  const isLoading = postMutation.isPending;
  const isError = postMutation.isError;
  const isSuccess = postMutation.isSuccess;
  const errorMsg = postMutation?.error?.response?.data?.message;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-30"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      ></motion.div>

      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [-100, 0, 100, -100],
          y: [100, 0, -100, 100],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      ></motion.div>

      <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 z-10">
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
          Create New Post
        </h2>

        {isLoading && (
          <AlertMessage type="loading" message="Loading, please wait..." />
        )}
        {isSuccess && (
          <AlertMessage type="success" message="Post created successfully!" />
        )}
        {isError && <AlertMessage type="error" message={errorMsg} />}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <ReactQuill
              value={formik.values.description}
              onChange={(value) => {
                setDescription(value);
                formik.setFieldValue("description", value);
              }}
              className="h-40 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-inner">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Upload Image
            </label>
            <div className="relative">
              <input
                id="images"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className="cursor-pointer bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900"
              >
                Choose a file
              </label>
            </div>
            {imageError && (
              <p className="text-red-500 text-sm mt-2">{imageError}</p>
            )}
            {imagePreview && (
              <div className="relative mt-4">
                <motion.img
                  src={imagePreview}
                  alt="Preview"
                  className="h-24 w-24 object-cover rounded-full border-4 border-purple-600"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <button
                  onClick={removeImage}
                  className="absolute top-0 right-0 bg-white rounded-full p-1 text-red-500 shadow-lg hover:text-red-700"
                >
                  <FaTimesCircle size={20} />
                </button>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-900 focus:ring-4 focus:ring-purple-300"
          >
            Add Post
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default CreatePost;
