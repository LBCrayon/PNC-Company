import React from "react";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import AboutUs2 from "../components/about2";
import Roadmap from "../components/roadmap";
import Chungchi from "../components/chungchi";
import Device from "../components/device";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Content />
      <Navbar />
      <Gallery />
      <AboutUs2 />
      <Roadmap />
      <Chungchi />
      <Device />
      <Slider />
    </>
  );
};

export default About;
