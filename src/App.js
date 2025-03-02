import React from "react";
//rotas
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutdetail" element={<AboutDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
