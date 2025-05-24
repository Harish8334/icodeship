import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Banner_Data from "../Data/Banner_Data";
import cardData from "../Data/About_Core_Data";
import Why_Us_Data from "../Data/Why_Us_Data";
import Team_Data from "../Data/Team_Data";
import Office_Data from "../Data/Office_data.jsx";
import Brands from "../Components/Brands";
import { Container, Button } from "react-bootstrap";
import WorkTogther from "../Components/WorkTogther";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Why_us from "../assets/images/About/about_why_us.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "../Pages/About.css";
import useLetsTalk from "../Components/Contact_page_link.jsx";
import { animateCoreCards ,  animateOfficeCards } from "../Animation/animation";
import { useRef, useEffect } from "react";

function About() {
  const { text, image } = Banner_Data.about;

  const letsTalk = useLetsTalk();
 const cardRefs = useRef([]);
const cardsRef = useRef([]);

  useEffect(() => {
    animateCoreCards(cardRefs);
  }, []);
   useEffect(() => {
    animateOfficeCards(cardsRef);
  }, []);
  return (
    <>
      <Header />
      <Banner text={text} image={image} />
      <Brands />
      {/* Core value section */}
       <section className="pt-0 pb-5">
      <Container className="my_container mt-lg-5 mb-5">
        <div className="row services_row">
          <div className="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4">
            <p className="font-size-54 font_weight_600 mx-3 mx-lg-0 mx-xl-0 mt-5">
              Codeship core <br className="d-none d-lg-block" />
              values that keep us <br />
              so well together.
            </p>
            <p className="font-size-24 mx-3 mx-lg-0 mx-xl-0">
              We offer a comprehensive range of <br className="d-none d-xl-block" />
              software development services tailored <br className="d-none d-xl-block" />
              to meet the unique needs of your <br className="d-none d-xl-block" />
              business.
            </p>
            <Button
              className="px-5 py-2 mt-3 mb-3 font-size-25 font_weight_500 blue_gradient border-radius-25 mx-2 mx-lg-0 mx-xl-0"
              onClick={letsTalk}
            >
              Let's Talk
            </Button>
          </div>

          <div className="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-6 mt-md-5 mt-lg-5">
            <div className="d-none d-lg-flex flex-column align-items-end">
              <div className="row">
                {cardData.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className={`col-md-6 About_core_card_size ${
                      index === 1 ? "About_core_card" : ""
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

              <div className="row">
                {cardData.slice(2).map((item, index) => {
                  const overallIndex = index + 2;
                  return (
                    <div
                      key={index}
                      className={`col-md-6 About_core_card_size ${
                        index === 1 ? "mt-5" : "About_core_card_down"
                      }`}
                      ref={(el) => (cardRefs.current[overallIndex] = el)}
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
      {/* Why us ? */}
      <section className="">
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <img src={Why_us} alt="" className="img-fluid  " />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12">
              <p className="font-size-18 font_weight_500">Why Choose Us ?</p>
              <p className="font-size-62 font_weight_600">
                Why Working with <br />
                Codeship?
              </p>
              <p className="w-75">
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand touchpoints
              </p>
              <div className="row g-2">
                {Why_Us_Data.map((item, index) => (
                  <div className="col-6" key={item.id}>
                    <div className="card p-0  border_shadow rounded-4">
                      <div className="d-flex gap-1 g-lg-5 g-md-5 g-sm-5 ">
                        <img
                          src={item.img}
                          alt=""
                          className="img-fluid about_core_icon"
                        />
                        <div>
                          <p className="font-size-40 font_weight_700 pt-2 m-0">
                            {item.count}
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
      <section>
        <Container fluid>
          <p className="font-size-58 text-center font_weight_600 mt-5">
            Simply, a legendary team
          </p>
          <div className="d-flex justify-content-center">
            {" "}
            <p className="font-size-28 text-center   ">
              Fueled by passion, expertise, and collaboration, our diverse team
              at Codeship is <br className="d-none d-lg-block " />
              dedicated to building successful products.
            </p>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            freeMode={true}
            className="mySwiper mt-5 mb-5 px-3 px-lg-0"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              576: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {Team_Data.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="Team_img d-flex justify-content-center align-items-center rounded-4 member-card position-relative">
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
        </Container>
      </section>
      {/* Office */}
       <section>
      <Container className="my_container">
        <p className="font-size-62 font_weight_600 text-center">
          Get a feeling at our office
        </p>
        <p className="font-size-30 text-center ">
          Dynamic energy and collaborative spirit defines our workspace and its remarkable people.
        </p>

        <div className="row d-none d-lg-flex d-md-flex">
          {Office_Data.map((item, index) => (
            <div
              className={`col-md-6 office-card ${index % 2 === 1 ? "mt-lg-5 About_office" : ""}`}
              key={index}  ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="rounded-4">
                <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
                  <img
                    src={item.img}
                    alt={`img ${index + 1}`}
                    className="img-fluid pt-lg-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add your Swiper for mobile here */}
      </Container>
    </section>
      <WorkTogther />
      <Footer />
    </>
  );
}

export default About;
