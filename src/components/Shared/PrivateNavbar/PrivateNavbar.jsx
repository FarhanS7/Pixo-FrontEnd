import { useMutation } from "@tanstack/react-query";
import {
  Bell,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  PlusSquare,
  Search,
  User,
} from "lucide-react";
import { default as React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../../APIServices/users/usersAPI";
import { logout } from "../../../redux/slices/authSlices";

const PrivateNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const NavItem = ({ icon: Icon, name, active, onClick }) => (
    <div
      className={`relative flex flex-col items-center cursor-pointer p-3 group transition-all duration-300 ease-in-out 
        ${
          active
            ? "text-white scale-105 text-shadow-neon"
            : "text-gray-300 hover:text-white hover:scale-105"
        }`}
      onClick={onClick}
    >
      <div
        className={`absolute -top-2 w-full h-1 rounded-full transition-all duration-300 
        ${
          active
            ? "bg-white opacity-100"
            : "bg-white opacity-0 group-hover:opacity-50"
        }`}
      ></div>
      <Icon
        strokeWidth={active ? 2.5 : 1.5}
        className="mb-1 transition-transform duration-200 group-hover:scale-110"
      />
      <span className="text-xs">{name}</span>
    </div>
  );
  //dispatch Hook
  const dispatch = useDispatch();

  // user mutation
  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutAPI,
  });

  const handleLogout = async () => {
    logoutMutation
      .mutateAsync()
      .then(() => {
        // dispatch an action to logout the user
        dispatch(logout(null));
      })
      .catch((e) => console.log(e));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 shadow-2xl items-center transform transition-all duration-300 hover:scale-105">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Pixo Logo aligned to the left */}
          <div className="flex items-center h-10">
            <img
              className="h-14 w-auto object-contain hover:scale-110 transition-all duration-300"
              src="https://i.imghippo.com/files/PTs5563hpY.png"
              alt="logo"
            />
          </div>

          {/* NavItems centered in the middle */}
          <div className="flex space-x-8 bg-white/10 rounded-full px-6 py-2 backdrop-blur-md mx-auto">
            <NavItem
              icon={Home}
              name="Home"
              active={activeTab === "home"}
              onClick={() => {
                navigate("/posts");
                setActiveTab("home");
              }}
            />
            <NavItem
              icon={Search}
              name="Explore"
              active={activeTab === "explore"}
              onClick={() => {
                navigate("/posts");
                setActiveTab("explore");
              }}
            />
            <NavItem
              icon={PlusSquare}
              name="Create"
              active={activeTab === "create"}
              onClick={() => {
                navigate("/create-post");
                setActiveTab("create");
              }}
            />
            <NavItem
              icon={Heart}
              name="Activity"
              active={activeTab === "activity"}
              onClick={() => {
                setActiveTab("activity");
              }}
            />
            <NavItem
              icon={MessageCircle}
              name="Messages"
              active={activeTab === "messages"}
              onClick={() => {
                setActiveTab("messages");
              }}
            />
          </div>

          {/* User profile and Notification button */}
          <div className="flex items-center space-x-6 relative group">
            {/* Notification Bell with pulsing animation */}
            <div className="relative group">
              <Bell className="text-white cursor-pointer transition-all duration-300 hover:text-yellow-400 animate-pulse" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </div>

            {/* Profile Icon */}
            <div className="relative group">
              <User className="text-white cursor-pointer transition-all duration-300 hover:text-yellow-400" />
              {/* Profile dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-purple-500 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2  w-full px-4 py-2 text-left hover:bg-purple-500 rounded-md transition-all duration-200 hover:scale-105"
                >
                  <LogOut className="w-5 h-5 text-white" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
