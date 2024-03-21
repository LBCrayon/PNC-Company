import React from "react";
//rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
//componentes
import Footer from "./components/Footer/Footer";
import Business from "./pages/Business";
import Project from "./pages/Project";
import AboutDetail from "./pages/AboutDetail";
import News from "./pages/News";
import Recruit from "./pages/Recruit";
import Businesses1 from "./components/Business1";
import Business1 from "./components/Business1";
import Business4 from "./components/Business4";
import Business3 from "./components/Business3";
import Business2 from "./components/Business2";
import Projects1 from "./components/project1";
import Projects2 from "./components/project2";
import Projects3 from "./components/project3";
import Projects4 from "./components/project4";
import Projects5 from "./components/project5";
import Projects6 from "./components/project6";
import Projects7 from "./components/project7";
import Projects8 from "./components/project8";
import Projects9 from "./components/project9";
import Projects10 from "./components/project10";
import Projects1Details from "./components/project1Details";
import Projects2Details from "./components/project2Detail";
import Projects3Details from "./components/project3Detail";
import Projects4Details from "./components/project4Detail";
import Projects5Details from "./components/project5Detail";
import Projects6Details from "./components/project6Detail";
import Projects7Details from "./components/project7Detail";
import Projects8Details from "./components/project8Detail";
import Projects9Details from "./components/project9Detail";
import Projects10Details from "./components/project10Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project1" element={<Projects1 />} />
          <Route path="/project2" element={<Projects2 />} />
          <Route path="/project3" element={<Projects3 />} />
          <Route path="/project4" element={<Projects4 />} />
          <Route path="/project5" element={<Projects5 />} />
          <Route path="/project6" element={<Projects6 />} />
          <Route path="/project7" element={<Projects7 />} />
          <Route path="/project8" element={<Projects8 />} />
          <Route path="/project9" element={<Projects9 />} />
          <Route path="/project10" element={<Projects10 />} />
          <Route path="/project1detail" element={<Projects1Details />} />
          <Route path="/project2detail" element={<Projects2Details />} />
          <Route path="/project3detail" element={<Projects3Details />} />
          <Route path="/project4detail" element={<Projects4Details />} />
          <Route path="/project5detail" element={<Projects5Details />} />
          <Route path="/project6detail" element={<Projects6Details />} />
          <Route path="/project7detail" element={<Projects7Details />} />
          <Route path="/project8detail" element={<Projects8Details />} />
          <Route path="/project9detail" element={<Projects9Details />} />
          <Route path="/project10detail" element={<Projects10Details />} />
          <Route path="/aboutdetail" element={<AboutDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/business1" element={<Business1 />} />
          <Route path="/business2" element={<Business2 />} />
          <Route path="/business3" element={<Business3 />} />
          <Route path="/business4" element={<Business4 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
