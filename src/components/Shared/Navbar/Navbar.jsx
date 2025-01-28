import { FileText, HelpCircle, Info, LifeBuoy, Phone } from "lucide-react";
import { default as React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 shadow-2xl items-center transform transition-all duration-300 hover:scale-105">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Pixo Logo aligned to the left */}
          <div className="flex items-center h-10">
            <img
              className="h-40 w-auto object-contain hover:scale-110 transition-all duration-300"
              src="https://i.imghippo.com/files/PTs5563hpY.png"
              alt="logo"
            />
          </div>

          {/* NavItems centered in the middle */}
          <div className="flex space-x-8 bg-white/10 rounded-full px-6 py-2 backdrop-blur-md mx-auto">
            <NavItem
              icon={Info}
              name="About Us"
              active={activeTab === "about"}
              onClick={() => {
                navigate("/about");
                setActiveTab("about");
              }}
            />
            <NavItem
              icon={Phone}
              name="Contact"
              active={activeTab === "contact"}
              onClick={() => {
                navigate("/contact");
                setActiveTab("contact");
              }}
            />
            <NavItem
              icon={HelpCircle}
              name="FAQ"
              active={activeTab === "faq"}
              onClick={() => {
                navigate("/faq");
                setActiveTab("faq");
              }}
            />
            <NavItem
              icon={FileText}
              name="Blog"
              active={activeTab === "blog"}
              onClick={() => {
                navigate("/blog");
                setActiveTab("blog");
              }}
            />
            <NavItem
              icon={LifeBuoy}
              name="Support"
              active={activeTab === "support"}
              onClick={() => {
                navigate("/support");
                setActiveTab("support");
              }}
            />
          </div>

          {/* Right Section - Login, SignUp, About Us */}
          <div className="flex items-center space-x-6 relative group">
            {/* About Us Icon and Button */}
            <div className="relative group">
              <Info className="text-white cursor-pointer transition-all duration-300 hover:text-yellow-400" />
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-purple-500 rounded-md"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Login and SignUp Buttons */}
            <div className="space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-400 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-400 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
