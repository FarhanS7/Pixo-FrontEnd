import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const socialImages = [
  "https://i.imghippo.com/files/xRk8158bvM.jpg",
  " https://i.imghippo.com/files/OnyZ1595vgo.jpg",
  " https://i.imghippo.com/files/BsPI9817wU.jpg",

  "https://i.imghippo.com/files/Nch4365EI.jpg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % socialImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden py-16">
      {/* Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {socialImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Social media post ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
              ${currentImage === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
          Discover Your Digital Community
        </h2>
        <p className="text-xl text-gray-200 mb-10 animate-fade-in-up animate-delay-200">
          Join millions of creators, storytellers, and innovators on Pixo
        </p>
        <button
          className="bg-white text-indigo-600 px-8 py-4 rounded-full 
          flex items-center justify-center mx-auto space-x-2 
          hover:bg-gray-100 transition-all 
          animate-pulse-slow"
        >
          <span>Explore Us</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
