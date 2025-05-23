import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
import Capabilities from "./Pages/Capabilities_Navigation";
import Contact_page from "./Pages/Contact_page";
import Capabilities_service from "./Components/Capability_service";
import Capable_service_layout from "./Pages/Capable_service_layout";
import Loader from "./Components/Loader";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);

    const timeout = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 100); // adjust duration

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {showContent && children}
    </>
  );
};



function App() {
  return (
    <Router>
       <PageWrapper>
      
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourworks" element={<OurWorks />} />
        <Route path="/solutions" element={<Solution />} />
        <Route element={<Capable_service_layout />}>
          <Route path="/capable" element={<Capabilities />} />
      <Route path="/capable_service/:href" element={<Capabilities_service />} />
        </Route>
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
      </PageWrapper>
    </Router>
  );
}

export { App };
