import { Heart, Home, MessageCircle, PlusSquare, Search } from "lucide-react";
import { default as React, useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const NavItem = ({ icon: Icon, name, active }) => (
    <div
      className={`relative flex flex-col items-center cursor-pointer p-2 group transition-all duration-300 
          ${active ? "text-white" : "text-gray-300 hover:text-white"}`}
      onClick={() => setActiveTab(name.toLowerCase())}
    >
      <div
        className={`absolute -top-2 w-full h-1 rounded-full transition-all duration-300 
          ${
            active
              ? "bg-white opacity-100"
              : "bg-white opacity-0 group-hover:opacity-50"
          }`}
      ></div>
      <Icon strokeWidth={active ? 2.5 : 1.5} className="mb-1" />
      <span className="text-xs">{name}</span>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 shadow-2xl max-w-7xl mx-auto">
      <div className=" mx-auto px-6 ">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-white tracking-wider">
            Pixo
          </div>
          <div className="flex space-x-8 bg-white/10 rounded-full px-6 py-2 backdrop-blur-md">
            <NavItem icon={Home} name="Home" active={activeTab === "home"} />
            <NavItem
              icon={Search}
              name="Explore"
              active={activeTab === "explore"}
            />
            <NavItem
              icon={PlusSquare}
              name="Create"
              active={activeTab === "create"}
            />
            <NavItem
              icon={Heart}
              name="Activity"
              active={activeTab === "activity"}
            />
            <NavItem
              icon={MessageCircle}
              name="Messages"
              active={activeTab === "messages"}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white bg-white/20 hover:bg-white/30 rounded-full transition-all">
              Login
            </button>
            <button className="px-4 py-2 bg-white text-purple-700 rounded-full hover:scale-105 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
