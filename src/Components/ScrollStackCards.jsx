import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Solution_Data from "../Data/Solution_Data";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const ScrollLockedCardStack = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Your existing useEffect - kept exactly as is
  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".solution_desk_radius");

    gsap.set(cards, {
      position: "absolute",
      width: "100%",
      top: "50%",
      left: 0,
      yPercent: 100,
      scale: 0.8,
      transformOrigin: "center",
      zIndex: (i) => cards.length - i + 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: `+=${cards.length * 100}%`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        i
      ).set(card, { zIndex: cards.length + i }, i);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // NEW useEffect to refresh ScrollTrigger after a slight delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // 100ms delay; tweak if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: `${Solution_Data.length * 100}vh`,
      }}
    >
      <p className="text-center font-size-50 font_weight_500 pb-3 mt-5 pt-md-5 px-2">
        Smart Solutions For Your Business
        <br className="d-none d-lg-block" /> By Codeship.
      </p>
      <Container
        ref={containerRef}
        className="my_container "
        style={{ position: "relative", height: "100vh" }}
      >
        <div>
          {Solution_Data.map((item, index) => (
            <div
              key={index}
              className="row solution_desk_radius pt-xl-4 pb-xl-5 px-lg-5 px-3 mx-2 mx-lg-0 mt-5"
              style={{
                backgroundColor: item.bgColor,
                position: "absolute",
                width: "100%",
                top: "0%",
                left: 0,
                transform: "translateY(-115%)",
              }}
            >
              <div className="col-lg-7  d-flex flex-column justify-content-around pb-lg-5 pb-5">
                <div className="d-flex flex-column gap-2 pb-4 mt-3 mt-md-5">
                  <p className="font-size-24 font_weight_300 pt-4 pt-lg-0">
                    {item.heading}
                  </p>
                  <p className="font-size-30 font_weight_600">{item.title}</p>
                </div>
                <div>
                  <p className="font-size-20 font_weight_300 line_height_30 text-justify solution_desk_text">
                    {item.description}
                  </p>
                  <div className=" d-none d-xl-flex gap-4   pt-3">
                    <Button className="px-lg-4 py-2 font-size-18 font_weight_600 blue_gradient rounded-pill">
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="px-lg-4 py-2 font-size-18 font_weight_600 rounded-pill"
                      onClick={() => navigate("/purchase-contact")}
                    >
                      Purchase Product
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pb-5 d-flex flex-column  justify-content-center align-items-center  ">
                <div className="  ">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="img-fluid ms-xl-5 mx-md-5 pt-lg-5 solution_lap px-3"
                  />
                  <div className="d-flex  d-lg-flex d-xl-none  justify-content-center gap-4 pt-5">
                    <Button className="px-lg-4 py-2  font-size-18 font_weight_600 blue_gradient rounded-pill">
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="px-lg-4 py-2 font-size-18 font_weight_600 rounded-pill"
                      onClick={() => navigate("/purchase-contact")}
                    >
                      Purchase Product
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScrollLockedCardStack;
