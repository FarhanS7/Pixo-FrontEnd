import { useFormik } from "formik";
import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { createPostAPI } from "../../APIServices/posts/postsAPI";
import AlertMessage from "../Alert/AlertMessage";

const CreatePost = () => {
  const [imageError, setImageErr] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Post mutation
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
      // Form data for POST request
      const formData = new FormData();
      formData.append("description", values.description); // Ensure formik's value is used here
      formData.append("image", values.image);
      postMutation.mutate(formData); // Submit form data
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
    formik.setFieldValue("image", file); // Update Formik's internal state
    setImagePreview(URL.createObjectURL(file)); // Set the image preview
  };

  const removeImage = () => {
    formik.setFieldValue("image", null); // Clear image from Formik's internal state
    setImagePreview(null);
  };

  const isLoading = postMutation.isPending;
  const isError = postMutation.isError;
  const isSuccess = postMutation.isSuccess;
  const errorMsg = postMutation?.error?.response?.data?.message;

  if (isError) return <AlertMessage type="error" message={errorMsg} />;
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add New Post
        </h2>

        {/* Display loading or success message */}
        {isLoading && (
          <AlertMessage type="loading" message="Loading, please wait" />
        )}
        {isSuccess && (
          <AlertMessage type="success" message="Post created successfully" />
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Description input */}
          <div className="mb-10">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <ReactQuill
              value={formik.values.description}
              onChange={(value) => formik.setFieldValue("description", value)} // Ensure this updates Formik's state
              className="h-40"
            />
            {formik.touched.description && formik.errors.description && (
              <span style={{ color: "red" }}>{formik.errors.description}</span>
            )}
          </div>

          {/* Image upload input */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-4 shadow rounded-lg">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <div className="flex justify-center items-center w-full">
              <input
                id="images"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              >
                Choose a file
              </label>
            </div>
            {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-600">{formik.errors.image}</p>
            )}
            {imageError && <p className="text-sm text-red-600">{imageError}</p>}
            {imagePreview && (
              <div className="mt-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-24 w-24 object-cover rounded-full"
                />
                <button
                  onClick={removeImage}
                  className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1"
                >
                  <FaTimesCircle className="text-red-500" />
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-md"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
