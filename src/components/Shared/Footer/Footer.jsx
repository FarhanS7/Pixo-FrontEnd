import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pixo</h3>
            <p className="text-gray-300">Connect, Share, Explore</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Create
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white/80">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white/80">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white/80">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-white/80">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Pixo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
