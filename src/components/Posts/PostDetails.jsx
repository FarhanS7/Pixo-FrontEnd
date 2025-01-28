import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  FaComment,
  FaEdit,
  FaEye,
  FaThumbsDown,
  FaThumbsUp,
  FaTrashAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../APIServices/posts/postsAPI";

const PostDetails = () => {
  const [comment, setComment] = useState("");
  const { postId } = useParams();
  const { isError, isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["post-details"],
    queryFn: () => fetchPost(postId),
  });

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-5 transition-all transform hover:scale-105 hover:shadow-xl">
        <img
          src={data?.postFound?.image?.path}
          alt={data?.postFound?.description}
          className="w-full h-72 object-cover rounded-lg mb-4 transition-all transform hover:scale-105"
        />
        <div className="flex gap-4 items-center mb-4">
          <span className="flex items-center gap-1 cursor-pointer transition-all hover:text-blue-500">
            <FaThumbsUp />
          </span>
          <span className="flex items-center gap-1 cursor-pointer transition-all hover:text-red-500">
            <FaThumbsDown />
          </span>
          <span className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-purple-400">
            <FaEye />
          </span>
        </div>

        {/* Post author info */}
        <span className="text-sm text-gray-700">
          {/* {postData?.author?.username} */}
        </span>

        {/* Post description */}
        <div className="flex justify-between items-center mb-3">
          <div
            className="rendered-html-content mb-2 text-lg text-gray-800"
            dangerouslySetInnerHTML={{ __html: data?.postFound?.description }}
          />
          <div className="flex gap-2">
            <FaEdit className="text-blue-500 cursor-pointer transition-all transform hover:scale-110 hover:text-blue-700" />
            <FaTrashAlt className="text-red-500 cursor-pointer transition-all transform hover:scale-110 hover:text-red-700" />
          </div>
        </div>

        {/* Comment Form */}
        <form className="mb-4">
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg mb-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="3"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-6 py-2 transition-all hover:bg-blue-600"
          >
            <FaComment className="inline mr-2" /> Comment
          </button>
        </form>

        {/* Comments Section */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-800">Comments:</h2>
          {/* Here we would map over the comments, e.g. */}
          {/* {postData?.comments?.map((comment, index) => (
            <div key={index} className="border-b border-gray-300 mb-2 pb-2 hover:bg-gray-100 transition-all">
              <p className="text-gray-800">{comment.content}</p>
              <span className="text-gray-600 text-sm">- {comment.author?.username}</span>
              <small className="text-gray-600 text-sm ml-2">{new Date(comment.createdAt).toLocaleDateString()}</small>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
