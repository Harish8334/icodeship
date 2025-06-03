import React, { useEffect, useState, useRef } from "react";
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
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ClientOnlyHeader = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? (
    <div id="header-root" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <Header />
    </div>
  ) : null;
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const smootherRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Mount state
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  useEffect(() => {
  const handleResize = () => {
    ScrollTrigger.refresh();
    smootherRef.current?.refresh();
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  // Init ScrollSmoother
  useEffect(() => {
    if (!mounted) return;

    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!ScrollSmoother.get() && wrapper && content) {
      smootherRef.current = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      ScrollTrigger.refresh();
      smootherRef.current.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
        smootherRef.current = null;
      }
    };
  }, [mounted]);

  // Scroll to top or form after route change
  useEffect(() => {
    if (!mounted) return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      const form = document.querySelector("#contactForm");

      if (location.state?.scrollToForm && form) {
        smootherRef.current?.scrollTo(form, true);
      } else {
        if (smootherRef.current) {
          smootherRef.current.scrollTo(0, true);
        } else {
          window.scrollTo(0, 0);
        }
      }

      ScrollTrigger.refresh();
      smootherRef.current?.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location, mounted]);

  if (!mounted) return null;

  return (
    <>
      <div id="smooth-wrapper" style={{ overflow: "hidden" }}>
        <div id="smooth-content">
          {loading ? <Loader /> : children}
        </div>
      </div>
      <ScrollToTopButton />
    </>
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
            <Route path="/capable_service/:href" element={<Capabilities_service />} />
          </Route>
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/purchase-contact" element={<PurchaseContactForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export { App };
