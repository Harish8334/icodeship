import React, { useRef, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import WorkTogther from "../Components/WorkTogther";
import Banner_Data from "../Data/Banner_Data";
import Solution_Data from "../Data/Solution_Data";
import Brands from "../Components/Brands";
import { Container, Button } from "react-bootstrap";
import what_we_do from "../assets/images/Solutions/solution_whatwedo.png";
import Map from "../assets/images/Solutions/solution_map.png";
import "../Pages/Solution.css";
import "../Pages/Home.css";
import Solution_workflow1 from "../assets/images/Solutions/solution_workflow1.png";
import Solution_workflow2 from "../assets/images/Solutions/solution_workflow2.png";
import Solution_workflow3 from "../assets/images/Solutions/solution_workflow3.png";
import Solution_workflow4 from "../assets/images/Solutions/solution_workflow4.png";
import Solution_workflow5 from "../assets/images/Solutions/solution_workflow5.png";
import Solution_workflow6 from "../assets/images/Solutions/solution_workflow6.png";
import Solution_workflow7 from "../assets/images/Solutions/solution_workflow7.png";
import {
  animateWorkCard,
  animateCardsOnScroll,
  initImageRevealAnimation,
} from "../Animation/animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Solution() {
  const { text, image } = Banner_Data.solutions;
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      animateWorkCard(imgRef.current);
    }
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animateCardsOnScroll(containerRef.current);

    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  const [showFormModal, setShowFormModal] = useState(false);
  const [modalBgColor, setModalBgColor] = useState("#fff");
  const [origin, setOrigin] = useState({ x: "50%", y: "100%" });

  const sectionRef = useRef(null);
  const greyImgRef = useRef(null);
  const colorImgRef = useRef(null);

  useEffect(() => {
    const cleanup = initImageRevealAnimation(
      greyImgRef,
      colorImgRef,
      sectionRef
    );
    return () => cleanup && cleanup();
  }, []);

  return (
    <>
      <Banner text={text} image={image} />
      <Brands />
      {/* What we can do */}
      <section
        className="d-flex justify-content-center align-items-center w-100 h-auto what_we_do_container rounded-top-5 py-4 "
        ref={imgRef}
      >
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="d-flex flex-column gap-3 gap-lg-5 ">
                <div className="">
                  <p className="font-size-25  font_weight_300 mt-md-5  m-0">
                    What We Do ?
                  </p>
                  <p className="font-size-58 font_weight_600 pt-3  ">
                    Accelerating <br className="d-none d-lg-block " />{" "}
                    Performance. <br className="d-none d-lg-block " />
                    Improving Effeciency.
                  </p>
                </div>
                <p className="font-size-30 font_weight_300 why_choose_us_text text-justify m-0 pb-5">
                  Codeship offers tailored software solutions designed to meet
                  your unique business needs. We create custom applications that
                  streamline operations, enhance efficiency, and support your
                  growth, ensuring your technology is as dynamic and adaptable
                  as your business.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="d-flex justify-content-center  mt-md-5 mt-lg-5 mt-xl-0">
                <img src={what_we_do} alt="" className=" img-fluid " />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Smart solution  */}
      <section>
        <Container ref={containerRef} className="my_container my-5 ">
          <p className="text-center font-size-50 font_weight_500 pb-3 mt-md-5 pt-md-5">
            Smart Solutions For Your Business
            <br className="d-none d-lg-block" /> By Codeship.
          </p>
          {Solution_Data.map((item) => (
            <div
              key={item.id}
              className="row solution_desk_radius  pt-lg-5 pb-lg-5 px-lg-5 px-3 mx-2 mx-lg-0 mt-5"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="col-lg-5 col-md-12 col-12 d-flex flex-column justify-content-around  pb-lg-5 pb-5">
                <div className="d-flex flex-column justify-content-between gap-5">
                  <p className="font-size-24 font_weight_300 pt-4 pt-lg-0">
                    {item.heading}
                  </p>
                  <p className="font-size-40 font_weight_600">
                    {item.title.split("<br>").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br className="d-none d-lg-block" />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div>
                  <p className="font-size-20 font_weight_300 line_height_30 text-justify solution_desk_text">
                    {item.description}
                  </p>
                  <div className="d-flex gap-2 gap-lg-5 pt-3">
                    <Button className="px-lg-4 py-2 font-size-18 font_weight_600 blue_gradient rounded-pill">
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="px-lg-4 py-2 font-size-18 font_weight_600 rounded-pill"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setOrigin({
                          x: `${rect.left + rect.width / 2}px`,
                          y: `${rect.top + rect.height / 2}px`,
                        });
                        setModalBgColor(item.bgColor);
                        setShowFormModal(true);
                      }}
                    >
                      Purchase Product
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 pb-5 pt-lg-5 pb-lg-5 ">
                <div className="d-flex justify-content-lg-start justify-content-center mt-md-5">
                  <img
                    src={item.image}
                    alt="solution"
                    className="img-fluid ms-xl-5 mx-md-5 px-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </Container>
        {showFormModal && (
          <div className="fullscreen-form-modal position-fixed top-0 left-0">
            <div
              className="modal-form-content"
              style={{
                backgroundColor: modalBgColor,
                transformOrigin: `${origin.x} ${origin.y}`,
              }}
            >
              <button
                className="close-btn  border-none bg-none cursor-pointer text-white font_size_19 "
                onClick={() => setShowFormModal(false)}
              >
                &times;
              </button>
              <h2 className="text-center font-size-30 font_weight_600 mb-4">
                Let’s Talk Business
              </h2>
              <form className="d-flex flex-column gap-4 px-4">
                <input className="form-control py-2" placeholder="Full Name" />
                <input
                  className="form-control py-2"
                  placeholder="Email Address"
                />
                <input
                  className="form-control py-2"
                  placeholder="Mobile Number"
                />
                <textarea
                  className="form-control py-2"
                  rows={4}
                  placeholder="Tell us what you need..."
                />
                <button
                  className="btn btn-dark rounded-pill px-4 py-2 font-size-18"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      {/* Map */}
      <section ref={sectionRef} className="py-lg-5">
        <Container className="my_container py-lg-5 pb-5 pb-md-0">
          <p className="text-center font-size-18">Global Scale</p>
          <p className="text-center font-size-46 font_weight_600">
            Trusted by companies around <br className="d-none d-lg-block" />
            the world
          </p>

          <div className="map-wrapper">
            <img src={Map} alt="layout placeholder" className="placeholder" />
            <img
              ref={greyImgRef}
              src={Map}
              alt="Map Grey"
              className="map-img grayscale"
            />
            <img
              ref={colorImgRef}
              src={Map}
              alt="Map Color"
              className="map-img colored"
            />
          </div>
        </Container>
      </section>
      {/* work */}
      <section className="">
        <Container fluid className="my_container mt-lg-5 ">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-12">
              <p className="text-md-center text-lg-start font-size-58 font_weight_600">
                Works well with your
                <br className="d-none d-lg-block" />
                existing workflow
              </p>
              <p className="text-md-center text-lg-start  font-size-24  ">
                Codeship integrates with tools you already use for{" "}
                <br className="d-none d-lg-block" /> customer service, project
                management, and more.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Button className="px-lg-4 py-2 mt-lg-5 mt-md-4 font-size-18 font_weight_600 blue_gradient rounded-pill">
                  See all integrations
                </Button>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6  col-12 mt-5  mt-lg-0">
              <div className="d-flex flex-wrap justify-content-evenly mb-5">
                <img
                  src={Solution_workflow1}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={Solution_workflow2}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={Solution_workflow3}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={Solution_workflow4}
                  alt=""
                  className="img-fluid workflow_icon"
                />
              </div>
              <div className="d-flex flex-wrap justify-content-evenly">
                <img
                  src={Solution_workflow5}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={Solution_workflow6}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={Solution_workflow7}
                  alt=""
                  className="img-fluid workflow_icon"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <WorkTogther />
      <Footer />
    </>
  );
}

export default Solution;