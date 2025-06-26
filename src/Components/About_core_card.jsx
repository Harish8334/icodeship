// About_core_card.jsx
import React, { useRef, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import cardData from "../Data/About_Core_Data";
import useLetsTalk from "../Components/Contact_page_link.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useCoreCardAnimations,
} from "../Animation/animation";
import "../Pages/About.css";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

function About_core_card() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const cardRefs = useRef([]);
 const letsTalk = useLetsTalk();
  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!section || !leftCol || !rightCol) return;

    ScrollTrigger.getAll().forEach((st) => st.kill());

    const updateLayout = () => {
      const height = rightCol.offsetHeight;
      section.style.height = `${height}px`;

      const pinSpacer = leftCol.parentNode.querySelector(".pin-spacer");
      if (pinSpacer) {
        pinSpacer.style.width = `${leftCol.offsetWidth}px`;
        pinSpacer.style.maxWidth = "100%";
      }
    };

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${rightCol.offsetHeight}`,
      pin: leftCol,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onRefresh: updateLayout,
    });

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      pinTrigger.kill();
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  useCoreCardAnimations(cardRefs);

  return (
    <section className="core-values-section px-0 pt-0 pb-md-5" ref={sectionRef}>
      <Container className="my_container px-0 mt-lg-5 mb-5">
        <div className="row services_row">
          <div
            ref={leftColRef}
            className="col-12 col-md-6 col-sm-12 col-lg-4 "
          >
            <p className="font-size-54 font_weight_600 mx-3 mx-lg-0 mx-xl-0 mt-5">
              Codeship core <br className="d-none d-lg-block" /> values that keep
              us <br className="d-none d-lg-block" /> so well together.
            </p>
            <p className="font-size-24 mx-3 mx-lg-0 mx-xl-0">
              We offer a comprehensive range of <br className="d-none d-xl-block" />
              software development services tailored <br className="d-none d-xl-block" />
              to meet the unique needs of your <br className="d-none d-xl-block" />
              business.
            </p>
             <Button
              className="px-5 py-2 mt-3 mb-3 font-size-25 font_weight_500 blue_gradient rounded-5 mx-2 mx-lg-0 mx-xl-0"
              onClick={letsTalk}
            >
              Let's Talk
            </Button>
          </div>

          <div
            ref={rightColRef}
            className="col-12 col-lg-8  col-md-6 col-sm-6 mt-md-5 mt-lg-5 d-none d-lg-flex flex-column "
          >
            <div className="row d-flex justify-content-end">
              {cardData.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className={`col-md-6 About_core_card_size ${
                    index === 1 ? "About_core_card " : ""
                  }`}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <div className="card pb-5 pb-lg-3 rounded-4 border_shadow">
                    <div className="d-flex justify-content-center pt-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="img-fluid about_core_icon"
                      />
                    </div>
                    <p className="pt-4 font-size-30 text-center font_weight_500 things_head font_color_light_blue">
                      {item.title}
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                      <p className="font-size-20 text-center px-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row ms-3 w-100 mb-5 d-flex justify-content-end">
              {cardData.slice(2).map((item, index) => (
                <div
                  key={index + 2}
                  className={`col-md-6 About_core_card_size ${
                    index === 1 ? "my-5 " : "About_core_card_down"
                  }`}
                  ref={(el) => (cardRefs.current[index + 2] = el)}
                >
                  <div className="card pb-5 pb-lg-3 rounded-4 border_shadow">
                    <div className="d-flex justify-content-center mt-2 pt-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="img-fluid about_core_icon"
                      />
                    </div>
                    <p className="pt-4 font-size-30 text-center font_weight_500 things_head font_color_light_blue">
                      {item.title}
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                      <p className="font-size-20 text-center px-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        .core-values-section .pin-spacer {
          width: auto !important;
          max-width: 100%;
        }
      `}</style>
    </section>
  );
}

export default About_core_card;
