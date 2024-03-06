import React from "react";
import BeforeFooter from "../components/BeforeFooter";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import AboutUs2 from "../components/about2";
import Chungchi from "../components/chungchi";
import Device from "../components/device";
import Roadmap from "../components/roadmap";

const About = () => {
  return (
    <>
      <Content />
      {/* <Navbar /> */}
      <Gallery />
      <AboutUs2 />
      <Roadmap />
      <Chungchi />
      <Device />
      <Slider />
      <BeforeFooter />
    </>
  );
};

export default About;
