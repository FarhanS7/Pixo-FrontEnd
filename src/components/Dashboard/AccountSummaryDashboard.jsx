import React from "react";
import {
  FaDollarSign,
  FaEye,
  FaFlag,
  FaThumbsDown,
  FaThumbsUp,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountSummaryDashboard = ({}) => {
  // Simulated user data
  const hasEmail = false;
  const hasPlan = false;
  const isEmailVerified = false;
  const totalFollowers = 0;
  const totalFollowing = 10;
  const userPosts = 0;
  const totalViews = 0;
  const totalLikes = 0;
  const totalComments = 0;
  const totalDislikes = 0;
  const totalEarnings = 0;

  const stats = [
    {
      icon: <FaEye />,
      label: "Views",
      value: totalViews,
      bgColor: "bg-blue-600",
    },
    {
      icon: <FaDollarSign />,
      label: "Earnings",
      value: `$${totalEarnings?.toFixed(2)}`,
      bgColor: "bg-green-600",
    },
    {
      icon: <FaUsers />,
      label: "Followers",
      value: totalFollowers || 0,
      bgColor: "bg-purple-600",
    },
    {
      icon: <FaThumbsUp />,
      label: "Likes",
      value: totalLikes || 0,
      bgColor: "bg-yellow-600",
    },
    {
      icon: <FaThumbsDown />,
      label: "Dislikes",
      value: totalDislikes || 0,
      bgColor: "bg-red-600",
    },
    {
      icon: <FaUsers />,
      label: "Following",
      value: totalFollowing || 0,
      bgColor: "bg-indigo-600",
    },
    {
      icon: <FaFlag />,
      label: "Posts",
      value: userPosts?.length || 0,
      bgColor: "bg-pink-600",
    },
    {
      icon: <FaUsers />,
      label: "Ranking",
      value: "1st",
      bgColor: "bg-teal-600",
    },
  ];

  return (
    <div className="p-6">
      <p className="font-bold text-3xl text-gray-800 mb-6">
        Welcome Back, Masynctech
      </p>

      {/* Display account verification status */}
      {!hasPlan && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-600 text-yellow-700 p-4 mb-4 rounded-md shadow-lg animate__animated animate__fadeIn"
          role="alert"
        >
          <p className="font-bold">Plan Selection Required</p>
          <p>
            Please{" "}
            <Link to="/pricing" className="underline text-yellow-800">
              select a plan
            </Link>{" "}
            to continue using our services.
          </p>
        </div>
      )}
      {!isEmailVerified && (
        <div
          className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mb-4 rounded-md shadow-lg animate__animated animate__fadeIn"
          role="alert"
        >
          <p className="font-bold">Account Verification Needed</p>
          <p>
            Your account is not verified. Please{" "}
            <button className="underline text-red-800">
              verify your account
            </button>{" "}
            for full access.
          </p>
        </div>
      )}
      {!hasEmail && (
        <div
          className="bg-blue-100 border-l-4 border-blue-600 text-blue-700 p-4 mb-4 rounded-md shadow-lg animate__animated animate__fadeIn"
          role="alert"
        >
          <p className="font-bold">Email Required</p>
          <p>
            Please{" "}
            <Link to="/add-email" className="underline text-blue-800">
              add an email
            </Link>{" "}
            to your account for important notifications.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} text-white rounded-lg shadow-xl p-6 hover:scale-105 transform transition duration-300 ease-in-out`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSummaryDashboard;
