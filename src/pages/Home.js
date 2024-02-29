import React from "react";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";
import GetStarted2 from "../components/GetStarted2";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <GetStarted />
      <GetStarted2 />
      <AboutUs />
      <Slider />
    </>
  );
};

export default Home;
