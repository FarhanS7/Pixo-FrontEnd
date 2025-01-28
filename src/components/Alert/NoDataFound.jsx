import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { deletePostAPI, fetchAllPosts } from "../../APIServices/posts/postsAPI";
import AlertMessage from "../Alert/AlertMessage";
import NoDataFound from "../Alert/NoDataFound";

const PostsList = () => {
  // use query
  const { isError, isLoading, data, error, isSuccess, refetch } = useQuery({
    queryKey: ["lists-posts"],
    queryFn: fetchAllPosts,
  });

  // post mutation
  const postMutation = useMutation({
    mutationKey: ["delete-post"],
    mutationFn: deletePostAPI,
  });

  // delete handler
  const deleteHandler = async (postId) => {
    postMutation
      .mutateAsync(postId)
      .then(() => {
        refetch();
      })
      .catch((e) => console.log(e));
  };

  // Loading state
  if (isLoading)
    return <AlertMessage type="loading" message="Loading please wait" />;

  // Error state
  if (isError)
    return <AlertMessage type="error" message="Something happened" />;

  // No posts found
  if (data?.posts?.length <= 0) return <NoDataFound text="No Post Found" />;

  return (
    <section className="overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600 py-8">
      <div className="container px-6 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 text-white">
          Blog
        </h1>

        <h2 className="text-4xl font-bold font-heading mb-10 text-white">
          Latest Articles
        </h2>

        <div className="flex flex-wrap mb-32 -mx-4">
          {/* Posts */}
          {data?.posts?.map((post) => (
            <div key={post._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <Link to={`/posts/${post._id}`}>
                <div className="bg-white border border-gray-100 rounded-2xl p-3 transition-transform transform hover:scale-105 hover:shadow-lg">
                  <div className="relative" style={{ height: 240 }}>
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      src={post?.image?.path}
                      alt={post?.description}
                    />
                  </div>
                  <div className="pt-6 pb-3 px-4">
                    <div
                      className="rendered-html-content mb-2 text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: post?.description,
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-gray-500 text-sm">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                      <span className="py-1 px-2 rounded-md text-xs font-medium text-gray-700 inline-block">
                        {/* {post?.category?.categoryName} */}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center my-8 space-x-4">
          {/* Previous Button */}
          {isPreviousButtonVisible && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all transform hover:scale-105"
            >
              Previous
            </button>
          )}

          <span className="text-sm font-semibold text-white">
            Page {page} of {postsData?.totalPages}
          </span>

          {/* Next Button */}
          {isNextButtonVisible && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-all transform hover:scale-105"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostsList;
