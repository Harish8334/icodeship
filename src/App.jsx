import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTopPage from "./Components/ScrollToTopPage";
import "./App.css";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Utility.css";
import "./App.css";
import "swiper/css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWorks from "./Pages/OurWorks";
import Solution from "./Pages/Solution";
import Capabilities from "./Pages/Capabilities";
import Contact_page from "./Pages/Contact_page";
import Capabilities_service from "./Components/Capability_service";
import Capable_service_layout from "./Pages/Capable_service_layout";

function App() {
  return (
    <Router>
      <ScrollToTopPage />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourworks" element={<OurWorks />} />
        <Route path="/solutions" element={<Solution />} />
        <Route element={<Capable_service_layout />}>
          <Route path="/capable" element={<Capabilities />} />
          <Route path="/capable_service" element={<Capabilities_service />} />
        </Route>
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
    </Router>
  );
}

export { App };
