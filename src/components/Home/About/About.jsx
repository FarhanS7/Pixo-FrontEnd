import { Award, Globe, Rocket, Users } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4 animate-fade-in-up">
            About Pixo
          </h2>
          <p className="text-gray-600 text-xl animate-fade-in-up animate-delay-200">
            Empowering connections, creativity, and community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 animate-fade-in-left">
            <Rocket className="text-indigo-600 mb-4" size={50} />
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To create a platform that breaks barriers, connects people, and
              unleashes creativity across the globe.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 animate-fade-in-right animate-delay-200">
            <Globe className="text-purple-600 mb-4" size={50} />
            <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Bridging cultures and communities through seamless, innovative
              digital experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 animate-fade-in-left animate-delay-400">
            <Users className="text-green-600 mb-4" size={50} />
            <h3 className="text-2xl font-semibold mb-3">Community First</h3>
            <p className="text-gray-600">
              Designing features that prioritize user connection, interaction,
              and mutual growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 animate-fade-in-right animate-delay-600">
            <Award className="text-red-600 mb-4" size={50} />
            <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing boundaries and introducing groundbreaking
              social technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
