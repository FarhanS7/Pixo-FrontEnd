import React from "react";
import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Hero from "../../components/Home/Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="mt-30">
        <Hero />
        <About />
        <Banner />
      </div>
    </>
  );
};

export default Home;
