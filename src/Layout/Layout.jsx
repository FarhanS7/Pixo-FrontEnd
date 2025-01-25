import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="mt-26">
        <Navbar />
      </div>
      <Outlet />
      <div className="mt-25">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
