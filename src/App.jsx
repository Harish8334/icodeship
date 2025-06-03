// App.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Utility.css";
import "swiper/css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWorks from "./Pages/OurWorks";
import Solution from "./Pages/Solution";
import Capabilities from "./Pages/Capabilities_Navigation";
import Contact_page from "./Pages/Contact_page";
import Capabilities_service from "./Components/Capability_service";
import Capable_service_layout from "./Pages/Capable_service_layout";
import PurchaseContactForm from "./Components/Purchase_form";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Refund from "./Pages/Refund";

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Client-only fixed header to avoid SSR hydration mismatch */
const ClientOnlyHeader = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted ? (
    <div
      id="header-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        pointerEvents: "auto",
      }}
    >
      <Header />
    </div>
  ) : null;
};

/**
 * PageWrapper manages global smooth scrolling and loading states.
 * Wraps routed content with GSAP ScrollSmoother.
 */
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const smootherRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (!ScrollSmoother.get()) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: false,
      });
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;

    const shouldScrollToForm = location.state?.scrollToForm;
    const hasHash = location.hash;

    if (!shouldScrollToForm && !hasHash && smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
    } else if (!shouldScrollToForm && !hasHash) {
      window.scrollTo(0, 0);
    }

    setLoading(true);
    setShowContent(false);

    const timeout = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
      ScrollTrigger.refresh();

      const form = document.querySelector("#contactForm");
      if (shouldScrollToForm && form) {
        if (smootherRef.current) {
          smootherRef.current.scrollTo(form, true);
        } else {
          form.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [location, hasMounted]);

  if (!hasMounted) return null;

  return (
    <div id="smooth-wrapper" style={{ overflow: "hidden" }}>
      <div id="smooth-content">
        {loading && <Loader />}
        {showContent && children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ClientOnlyHeader />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/solutions" element={<Solution />} />
          <Route element={<Capable_service_layout />}>
            <Route path="/capable" element={<Capabilities />} />
            <Route
              path="/capable_service/:href"
              element={<Capabilities_service />}
            />
          </Route>
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/purchase-contact" element={<PurchaseContactForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={< Refund />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export { App };
