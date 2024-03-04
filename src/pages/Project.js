import React from "react";
import ListProject from "../components/listProject";
import Projects from "../components/projects";
import BeforeFooter from "../components/BeforeFooter";

const Project = () => {
  return (
    <>
      <Projects />
      <ListProject />
      <BeforeFooter />
    </>
  );
};

export default Project;
