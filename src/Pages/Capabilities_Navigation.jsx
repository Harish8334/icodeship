// React and React-related imports
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

// Icons
import { ChevronRight } from "lucide-react";

// GSAP and Animation
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useImageSlideInAnimation } from "../Animation/animation";

// Components
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";

// Data
import Banner_Data from "../Data/Banner_Data";
import { Services_Data } from "../Data/Capable_Data";

// CSS
import "../Pages/Capabilities.css";

function Capabilities() {
  const { text, image } = Banner_Data.capable;
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Run GSAP animation hook
  useImageSlideInAnimation(containerRef);

  // Smooth scroll to section based on hash
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // prevent browser jump
    }
    window.scrollTo(0, 0); // ensure no initial jump

    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));

      const scrollToTarget = () => {
        const smoother = ScrollSmoother.get();

        if (smoother && target) {
          smoother.scrollTo(target, true, "top top");
        } else if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Delay to let ScrollSmoother + DOM finish mounting
      const timeout = setTimeout(scrollToTarget, 600);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="capable_services_container">
      <Banner text={text} image={image} />
      <Brands />

      <section className="position-relative pt-0 mb-5">
        <Container className="my_container" ref={containerRef}>
          {Services_Data.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className={`row mb-5 capable_service_data ${
                idx % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-12 col-lg-6 col-md-6">
                <div className="position-relative">
                  <p className="font-size-58 font_weight_600 mt-3">{service.title}</p>
                  <p className="font-size-24 line_height_30">{service.description}</p>
                  <div className="d-flex flex-column gap-3 mt-5">
                    {service.points.map((point, index) => (
                    <a
  key={index}
  href={`/capable_service/${point.href}`}
  onClick={(e) => {
    e.preventDefault();
    navigate(`/capable_service/${point.href}`, {
      state: { name: point.text },
    });
  }}
  className="text-black d-flex align-items-center gap-2 text-decoration-none"
>
  <ChevronRight strokeWidth={1} size={24} />
  <p className="font-size-30 font_weight_600 m-0">{point.text}</p>
</a>

                    ))}
                  </div>

                  {idx % 2 !== 1 && (
                    <img
                      src={service.imageOdd}
                      alt=""
                      className="img-fluid position-absolute top-25 start-50 capable_shape1"
                    />
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid mt-5 mt-lg-0 slide-img"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <WorkTogther />
    </div>
  );
}

export default Capabilities;
