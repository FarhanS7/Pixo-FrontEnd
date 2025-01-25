import { Globe, PlusSquare, Users } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-50 animate-gradient-shift"></div>
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight text-indigo-800 animate-float">
          Connect, Create, Share Your World
        </h1>
        <p className="text-xl text-gray-600 mb-10 animate-float animate-delay-200">
          Pixo is your platform for creativity, connection, and endless
          possibilities.
        </p>
        <div className="flex justify-center space-x-6 mb-12 animate-float animate-delay-400">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition-all">
            Learn More
          </button>
        </div>
        <div className="flex justify-center space-x-12 text-center">
          <div className="flex flex-col items-center animate-bounce-slow">
            <PlusSquare className="mb-2 text-indigo-600" size={40} />
            <span className="text-gray-700">Create Content</span>
          </div>
          <div className="flex flex-col items-center animate-bounce-slow animate-delay-200">
            <Users className="mb-2 text-purple-600" size={40} />
            <span className="text-gray-700">Connect People</span>
          </div>
          <div className="flex flex-col items-center animate-bounce-slow animate-delay-400">
            <Globe className="mb-2 text-green-600" size={40} />
            <span className="text-gray-700">Explore World</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
