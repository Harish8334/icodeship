// React and React-related imports
import React, { useRef, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Swiper-related imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// GSAP and ScrollTrigger
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//  Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";
import About_core_card from "../Components/About_core_card.jsx";
// Data imports
import Banner_Data from "../Data/Banner_Data";
import cardData from "../Data/About_Core_Data";
import Why_Us_Data from "../Data/Why_Us_Data";
import Team_Data from "../Data/Team_Data";
import Office_Data from "../Data/Office_data.jsx";

// Image imports
import Why_us from "../assets/images/About/about_why_us.png";

// CSS imports
import "../Pages/About.css";

// Custom Hooks and Animation Utilities
import useLetsTalk from "../Components/Contact_page_link.jsx";
import { countUpOnScroll, scrollPopup, useCoreCardAnimations } from "../Animation/animation";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const { text, image } = Banner_Data.about;

  const letsTalk = useLetsTalk();
  const countRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    countUpOnScroll(countRefs.current);
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    scrollPopup();
  }, []);

  useCoreCardAnimations(cardRefs);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className="pb-5">
      <Banner text={text} image={image} />
      <Brands />
      {/* Core value section */}
      <section className="my_container d-lg-none d-block">
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12 col-lg-4 col-xl-6">
            <p className="font-size-54 font_weight_600 mx-3 mx-lg-0 mx-xl-0 mt-5">
              Codeship core <br className="d-none d-lg-block" />
              values that keep us <br className="d-none d-lg-block" />
              so well together.
            </p>
            <p className="font-size-24 mx-3 mx-lg-0 mx-xl-0">
              We offer a comprehensive range of{" "}
              <br className="d-none d-xl-block" />
              software development services tailored{" "}
              <br className="d-none d-xl-block" />
              to meet the unique needs of your{" "}
              <br className="d-none d-xl-block" />
              business.
            </p>
             <Button
              className="px-5 py-2 mt-3 mb-3 font-size-25 font_weight_500 blue_gradient rounded-5 mx-2 mx-lg-0 mx-xl-0"
              onClick={letsTalk}
            >
              Let's Talk
            </Button>
          </div>
          <div className="col-12 col-md-6 d-lg-none mt-4">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom-pagination-dot"></span>`,
              }}
              className="custom-swiper pb-5 mb-5"
            >
              {cardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="card core_card pb-2 rounded-4 border_shadow mx-3"
                    ref={(el) => setCardRef(el, index + 4)}
                  >
                    <div className="d-flex justify-content-center pt-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="img-fluid"
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="mb-5 pb-5 d-none d-lg-block">
        <About_core_card />
      </section>
      {/* Why us ? */}
      <section>
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 col-12">
              <img src={Why_us} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-sm-12 col-12">
              <p className="font-size-18 font_weight_500">Why Choose Us?</p>
              <p className="font-size-62 font_weight_600">
                Why Working with <br />
                Codeship?
              </p>
              <p>
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand touchpoints.
              </p>
              <div className="row g-2">
                {Why_Us_Data.map((item, index) => (
                  <div className="col-12 col-sm-6 px-3 py-2" key={item.id}>
                    <div className="card p-0 border_shadow rounded-4">
                      <div className="d-flex gap-3  g-lg-5 g-md-5 g-sm-5">
                        <img
                          src={item.img}
                          alt=""
                          className=" "
                        />
                        <div className="d-flex flex-column justify-content-center">
                          <p
                            className="font-size-46 font_weight_700 pt-2 m-0"
                            data-count={item.count}
                            data-symbol={item.symbol || ""}
                            ref={(el) => {
                              if (el) countRefs.current[index] = el;
                            }}
                          >
                            0 {item.symbol}
                          </p>
                          <p className="font_weight_500 font-size-16 p-0">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Team members */}
      <section className="my-5">
        <Container fluid>
          <p className="font-size-58 text-center font_weight_600 mt-5">
            Simply, a legendary team
          </p>
          <div className="d-flex justify-content-center">
            <p className="font-size-28 text-center">
              Fueled by passion, expertise, and collaboration, our diverse team
              at Codeship is
              <br className="d-none d-lg-block" />
              dedicated to building successful products.
            </p>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            freeMode={true}
            className="mySwiper mt-5 mb-3 px-3 px-lg-0"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 30 },
              576: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 4, spaceBetween: 25 },
              1200: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {Team_Data.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="Team_img d-flex justify-content-center align-items-center rounded-4 member-card overflow-hidden position-relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="position-relative img-fluid w-auto"
                  />
                  <div className="position-absolute bottom-0 text-center member_info z-2 rounded-4 w-100 p-2">
                    <p className="text-white font-size-18 font_weight_700 m-0">
                      {member.name}
                    </p>
                    <p className="text-white font-size-16 font_weight_500 mt-1">
                      {member.position}
                    </p>
                    <div className="d-flex gap-3 justify-content-center mt-1 mb-2">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          color="white"
                        />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          color="white"
                        />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          color="white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination bullets */}
          <div
            className="custom-swiper-pagination d-flex justify-content-center my-5"
            id="office-section"
          />
        </Container>
      </section>
      {/* Office */}
      <section>
        <Container className="my_container">
          <p className="font-size-62 font_weight_600 text-center">
            Get a feeling at our office
          </p>
          <p className="font-size-30 text-center">
            Dynamic energy and collaborative spirit defines our workspace and
            its remarkable people.
          </p>

          <div className="row d-none d-lg-flex d-md-flex office-animation-wrapper">
            {Office_Data.map((item, index) => (
              <div
                className={`col-md-6 office-card animate-from-bottom  ${
                  index % 2 === 1 ? "About_office " : " "
                }`}
                key={index}
              >
                <div className="rounded-4">
                  <div className="d-flex justify-content-center  mt-lg-2 pt-lg-3">
                    <img
                      src={item.img}
                      alt={`img ${index + 1}`}
                      className="img-fluid  rounded-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swiper for mobile here */}
          <div className="d-md-none d-block">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              className="mySwiper"
            >
              {Office_Data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={`office-card animate-from-bottom`}>
                    <div className="rounded-4">
                      <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
                        <img
                          src={item.img}
                          alt={`img ${index + 1}`}
                          className="img-fluid pt-lg-5 rounded-5"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
      <WorkTogther />
      <Footer />
    </div>
  );
}

export default About;
