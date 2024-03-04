import React from "react";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";
import GetStarted2 from "../components/GetStarted2";
import Header from "../components/Header";
import Slider from "../components/Slider";
import BeforeFooter from "../components/BeforeFooter";

const Home = () => {
  return (
    <>
      <Header />
      <GetStarted />
      <GetStarted2 />
      <AboutUs />
      <Slider />
      <BeforeFooter />
    </>
  );
};

export default Home;
