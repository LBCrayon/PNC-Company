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
          <Route path="/aboutdetail" element={<AboutDetail />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
