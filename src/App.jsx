import React, { useEffect, useState, useRef } from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Utility.css";
import "swiper/css";


// Pages & Components
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
import PageNotFound from "./Components/PageNotFound";

import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Refund from "./Pages/Refund";
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';
import Footer from "./Components/Footer.jsx"
const isBrowser = typeof window !== "undefined";

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
  // SSR detection
  const isSSR = typeof window === "undefined";
  // Only show loader for client-side navigation, never on SSR
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Only show loader for client-side navigation, not on first mount
    if (!isSSR) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        const form = document.querySelector("#contactForm");

        if (location.state?.scrollToForm && form) {
          smootherRef.current?.scrollTo(form, true);
        } else {
          smootherRef.current?.scrollTo(0, true);
        }

        if (typeof window !== 'undefined' && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
        smootherRef.current?.refresh();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location, mounted, isSSR]);

  useEffect(() => {
    if (!mounted) return;

    let gsap, ScrollTrigger, ScrollSmoother;
    let killed = false;

    // Dynamically import GSAP and plugins
    import("gsap").then((mod) => {
      gsap = mod.gsap;
      return Promise.all([
        import("gsap/ScrollTrigger"),
        import("gsap/ScrollSmoother"),
      ]);
    }).then(([st, ss]) => {
      if (killed) return;
      ScrollTrigger = st.ScrollTrigger;
      ScrollSmoother = ss.ScrollSmoother;
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
    });

    return () => {
      killed = true;
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then((st) => {
          st.ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
        });
        import("gsap/ScrollSmoother").then((ss) => {
          ss.ScrollSmoother.get()?.kill();
        });
        smootherRef.current = null;
      }
    };
  }, [mounted]);

  return (
    <>
      <div id="smooth-wrapper" >
        <div id="smooth-content">
          {loading ? <Loader /> : children}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

function App() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  // useEffect(() => {
  //   if (isFirstLoad.current) {
  //     isFirstLoad.current = false;
  //   } else {
  //     window.location.reload();
  //   }
  // }, [location.pathname]);

  return (
    <>
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
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer/>

      </PageWrapper>
    </>
  );
}

export default App;
