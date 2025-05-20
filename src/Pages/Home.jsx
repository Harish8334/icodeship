import React from "react";
import Things_Data from "../Data/Things_Data";
import Services from "../Data/Service_Data";
import Banner_Data from "../Data/Banner_Data";
import projects from "../Data/Project_Data";
import Animation from "../Animation/TechStackAnimation";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Contact from "../Components/Contact";
import Testimonial from "../Components/Testimonial";
// React Bootstrap
import { Container, Button, Card } from "react-bootstrap";
// Fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from 'lucide-react';
// Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// images
import Amazon from "../assets/images/Home/amazon.png";
import UBER from "../assets/images/Home/UBER.png";
import Vogue from "../assets/images/Home/vogue.png";
import map from "../assets/images/Home/map.png";

import Software1_icon from "../assets/images/Home/software1.png";
import Software2_icon from "../assets/images/Home/software2.png";
import Software3_icon from "../assets/images/Home/software3.png";
import Software_img from "../assets/images/Home/software.png";
import Swirl from "../assets/images/Home/swirl.png";
import AWS from "../assets/images/Home/aws.png";
import Nodejs from "../assets/images/Home/nodejs.png";
import React_img from "../assets/images/Home/react.png";
import Angular_img from "../assets/images/Home/angularJS.png";
import { useScrollAnimation } from "../Animation/animation";


function Home() {
  const brandLogos = [Amazon, UBER, Vogue];
  const topCards = Things_Data.slice(0, 2);
  const bottomCards = Things_Data.slice(2, 4);
  const images = { AWS, Nodejs, React_img, Angular_img };
  const softwareData = [
    { name: "ERP Software", icon: Software1_icon },
    { name: "CRM Software", icon: Software2_icon },
    { name: "HRMS Software", icon: Software3_icon },
  ];

  const { text, image } = Banner_Data.home;
  useScrollAnimation();


  return (
    <div className="d overflow-x-hidden">
      <Header />
      <Banner text={text} image={image} />
      <Brands />
      {/* Map section */}
      <section className="container-fluid pt-4 pt-lg-5  d-flex justify-content-center align-items-center">
        <img
          src={map}
          alt=""
          className="img-fluid position-relative pt-0 pt-lg-5 "
        />
        <div className="position-absolute d-flex justify-content-center align-items-center flex-column map_text ">
          <p className="font-size-40 font_weight_400 text-center mx-sm-3 mx-md-3 mx-lg-5 mx-3">
            Since our founding in 2020, Codeship has rapidly grown into a
            dynamic and thriving company.
          </p>
          <p className="font-size-40 font_weight_400 text-center  mx-sm-3 mx-md-3 mx-lg-3 mx-3 ">
            With a shared dedication to innovation and a customer-centric
            approach, our team brings a wealth of experience and skills to the
            table.
          </p>
        </div>
      </section>
      {/* Things can do section */}
      <section >
        <Container className="my_container pt-5">
          <div className="row ">
            <div className="col-12 col-sm-5 col-md-6">
              <p className="font-size-58 line_height_70 font_weight_600  px-sp-3 px-pd-3 px-lg-3 px-3">
                Some of the <br className="d-none d-lg-block" /> things we can
                do <br className="d-none d-lg-block" /> for you
              </p>
              <p className="font-size-24 font_weight_400 px-sm-3 px-md-3 px-lg-3 px-3 ">
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business.
              </p>
            </div>
            <div className="col-12 col-sm-7 col-md-6 mb-5">
              <div className="row  ">
                <div className="d-none  d-xl-flex flex-column gap-4    col-lg-6">
                  {/* Top two cards */}
                  {topCards.map((item, index) => (
                    <div
                      key={index}
                      className="card things_card rounded-4 border-0 mb-4  card-hover-rotate"
                    >
                      <div className="card-body border-0">
                        <div className="card-title ms-4">
                          <div className="d-flex">
                            <div className="position-relative things_icon_container pe-5">
                              <img
                                src={item.hoverIcon}
                                alt=""
                                className="pt-2 pb-3 things_head things_hover_icon position-absolute"
                              />
                              <img
                                src={item.icon}
                                alt=""
                                className="pt-2 pb-3 things_head things_icon position-absolute"
                              />
                            </div>
                            <p className="ps-3 pt-2 pb-3 font-size-28 font_weight_500 things_head">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center font-size-18 font_weight_400 line_height_24 pb-2">
                          {item.description.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br className="d-none d-xxl-block" />
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-none  d-xl-flex flex-column gap-4  col-lg-6">
                  {/* Bottom two cards */}
                  {bottomCards.map((item, index) => (
                    <div
                      key={index}
                      className="card things_card rounded-4 border-0 mb-4 card-hover-rotate"
                    >
                      <div className="card-body border-0">
                        <div className="card-title ms-4">
                          <div className="d-flex">
                            <div className="position-relative things_icon_container pe-5">
                              <img
                                src={item.hoverIcon}
                                alt=""
                                className="pt-2 pb-3 things_head things_hover_icon position-absolute"
                              />
                              <img
                                src={item.icon}
                                alt=""
                                className="pt-2 pb-3 things_head things_icon position-absolute"
                              />
                            </div>
                            <p className="ps-3 pt-2 pb-3 font-size-28 font_weight_500 things_head">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center font-size-18 font_weight_400 line_height_24 pb-2">
                          {item.description.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br className="d-none d-xxl-block" />
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-center align-items-center d-xl-none  px-sp-3 px-pd-3 px-lg-5 px-3 ">
                  <Swiper loop={true} slidesPerView={1} spaceBetween={20}>
                    {Things_Data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="card things_card rounded-4 border-0 mb-4">
                          <div className="card-body things_card">
                            <div className="card-title">
                              <div className="d-flex">
                                <div className="position-relative things_icon_container pe-5">
                                  <img
                                    src={item.hoverIcon}
                                    alt=""
                                    className="pt-2 pb-3 things_head things_hover_icon position-absolute"
                                  />
                                  <img
                                    src={item.icon}
                                    alt=""
                                    className="pt-2 pb-3 things_head things_icon position-absolute"
                                  />
                                </div>
                                <p className="ps-3 pt-2 pb-3 font-size-28 font_weight_500 things_head">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center font-size-18 font_weight_400 line_height_24 pb-2">
                              {item.description.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br className="d-none d-xxl-block" />
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section >
       {/* Service section */}
       <section className="scroll_container parallax_section"  >
          <Container className="my_container services_row pe-5 " >
           <div className="service_wrapper">
           <div className=" d-flex postion-relative  service_space_between ">
            <div className="text">
         <p className="font-size-20 font_weight_500 ">
                How we can help you
              </p>
              <p className="font-size-65 font_weight_600 line_height_70 mb-2">
                Services <br className="d-none  d-lg-block" /> We Offer
              </p>
              <br />
              <p className="service_text font-size-24 line_height_38 ">
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand <br className="d-none d-lg-block" />  touchpoints
              </p>
              <div className="d-flex justify-content-start   justify-content-lg-start justify-content-md-start">
                <Button className=" font-size-22 px-4 py-2  font_weight_500 blue_gradient border-radius-25">
                  All Services{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-3" />
                </Button>
              </div>
         </div>
         {Services.map((service, index) => (
        <div key={index} className="border_shadow border service_card rounded-5 mb-4 me-5 d-flex flex-column justify-content-evenly" >
          <div className="p-4 ms-4 pt-4 d-flex flex-column gap-3 justify-content-between">
            <div className="ms-0">
              <div className="d-flex flex-column">
                <div className="pe-5 ">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="pt-2 pb-3"
                  />
                </div>
                <p className="ps-0 pt-2 pb-3 font-size-58 font_weight_500 things_head">
                  {service.title}
                </p>
              </div>
            </div>
            <p className="font-size-24 font_weight_400 font_color_light_grey pb-2 text-start services_card_text">
              {service.description}
            </p>
            
          </div>
          <a href="" className=" text-decoration-none d-flex gap-0 font_color_light_blue ms-5    ">
           <p className="font-size-24  font_weight_500">
              Read More
            </p>
            <ChevronRight strokeWidth={2} size={34} className="pb-2 mt-lg-2 font-size-24" />      </a>       
        </div>
      ))}
      <div className="service_card d-none d-lg-block">d </div>
            </div>
           </div>
            </Container> 
        </section>
        {/* Sofware section */}
        <section className="mb-0 bg-black  parallax_section pt-5   " id="section1">
          <Container className="my_container  pt-5 ">
            <div className="d-flex align-items-center justify-content-center   bg-black position-relative">
              <div className="row z-2">
                <div className="col-xl-2  text-white   ">
                  {softwareData.map((item, index) => (
                    <div key={index} className="d-flex gap-5 z-2">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="icon_background p-2 z-2 rounded-circle"
                        />

                        <span className="icon_background_line p-1"></span>
                      </div>
                      <span className="font-size-18 pt-3">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="col-xl-10  pt-5  text-white  position-relative  ">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={Software_img}
                      alt=""
                      className="img-fluid pb-3 z-2 "
                    />
                    <p className="font-size-28  ">
                      Custom Made ERP Softwares for your Needs
                    </p>
                  </div>
                  <div className="text-center ">
                    <Button
                      href="/contact"
                      className="px-4 blue_gradient  rounded-pill  border-0 mt-3 font-size-18 me-3 "
                    >
                      View Live Demo
                    </Button>
                    <Button
                      href="/contact"
                      className="px-4  bg-transparent btn-outline-light text-white   rounded-pill  mt-3  font-size-18"
                    >
                      Purchase Product
                    </Button>
                  </div>
                </div>
              </div>
              <div className="background-color_blue_1 bg_circle_gradient position-absolute bottom-0 end-0"></div>
            </div>
          </Container>
        </section>
       <div className="parallax_section d-flex flex-column justify-content-center " id="section4">
         {/* Techstack section */}
         <section className="bg-black pt-5 pb-5 ">
        <Container className=" pt-5 pb-5  my_container ">
            {/* big screen */}
            {/* top layer */}
            <div className="tech_stack_container">
              <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center gap-3">
                ;
                <Animation
                  imgSrc={AWS}
                  animationDirection="topLeft"
                  altText="Image from Top Left"
                />
                <div className="tech_box background_color_grey rounded-4"></div>
                <div className="tech_box background_color_grey rounded-4"></div>
                <div className="tech_box background_color_grey rounded-4"></div>
                <div className="tech_box background_color_grey rounded-4"></div>
              </div>
              <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center mx-5 pt-3 gap-3">
                <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center pt-3 gap-3">
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <Animation
                    imgSrc={AWS}
                    animationDirection="topToBottom"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <Animation
                    imgSrc={Nodejs}
                    animationDirection="topRight"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box background_color_grey rounded-4"></div>
                </div>
              </div>
              {/* middle layer */}
              <div className="d-flex flex-row justify-content-center align-items-center pb-lg-3 px-3 ">
                <div className=" d-lg-flex tech_middle_layer   d-md-flex flex-nowrap  d-none  justify-content-evenly pt-3">
                  <div className="left">
                    <div className="d-flex py-2   gap-3 ">
                      <div className="tech_box background_color_grey rounded-4"></div>
                      <Animation
                        imgSrc={React_img}
                        animationDirection="topLeft"
                        altText="Image from Top Left"
                      />
                    </div>
                    <div className="d-flex pt-3 gap-3">
                      <Animation
                        imgSrc={Angular_img}
                        animationDirection="topLeft"
                        altText="Image from Top Left"
                      />
                      <div className="tech_box background_color_grey rounded-4"></div>
                    </div>
                  </div>
                  {/* middle text */}
                  <div className="d-lg-flex d-md-flex  d-none flex-column align-items-center py-2 gap-3 pt-3">
                    <p className="font-size-46 text-white text-center font_weight_600 p-0 px-lg-3 px-lg-5 px-md-5 ">
                      Amazing tech stack in our pocket
                    </p>
                    <p className="tech_text text-white font-size-18 font_weight_400 text-center d-xl-block d-lg-none d-md-none d-sm-none px-3">
                      Utilize our team’s specialized full-stack expertise in
                      software development to turn your product vision into
                      reality. We are committed to providing solutions that
                      adhere to the highest coding standards, ensuring
                      reliability, scalability, and security.
                    </p>
                  </div>
                  <div className="right">
                    <div className="d-flex py-2 gap-3 ">
                      <Animation
                        imgSrc={AWS}
                        animationDirection="topRight"
                        altText="Image from Top Left"
                      />
                      <div className="tech_box background_color_grey rounded-4"></div>
                    </div>
                    <div className="d-flex pt-3 gap-3">
                      <div className="tech_box background_color_grey rounded-4"></div>
                      <Animation
                        imgSrc={Nodejs}
                        animationDirection="topRight"
                        altText="Image from Top Left"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* bottom layer */}
              <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center pt-1 pt-xl-0 pt-lg-2 pt-md-4 pt-md-0 gap-3">
                <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center  gap-3">
                  <Animation
                    imgSrc={Angular_img}
                    animationDirection="bottomLeft"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <Animation
                    imgSrc={React_img}
                    animationDirection="bottomToTop"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box background_color_grey rounded-4"></div>
                  <div className="tech_box background_color_grey rounded-4"></div>
                </div>
              </div>

              <div className="d-lg-flex d-md-flex  d-none flex-row justify-content-center pt-3 gap-3">
                <div className="tech_box background_color_grey rounded-4"></div>
                <Animation
                  imgSrc={React_img}
                  animationDirection="bottomToTop"
                  altText="Image from Top Left"
                />
                <div className="tech_box background_color_grey rounded-4"></div>
                <div className="tech_box background_color_grey rounded-4"></div>
                <Animation
                  imgSrc={Angular_img}
                  animationDirection="bottomRight"
                  altText="Image from Top Left"
                />
              </div>
            </div>
            {/* small screen */}
            {/* top layer */}
            <div className="d-flex d-lg-none d-md-none   flex-row justify-content-center gap-2 ">
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img src={AWS} alt="" className="img-fluid tech_sm_img " />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
            </div>
            <div className="d-flex d-lg-none d-md-none  flex-row justify-content-center pt-2 gap-2 pb-2">
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img src={AWS} alt="" className="img-fluid tech_sm_img " />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img src={Nodejs} alt="" className="img-fluid tech_sm_img " />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
            </div>
            {/* middle layer */}
            <div className="d-flex flex-row tech_middle_layer justify-content-center align-items-center ">
              <div className=" d-flex d-lg-none d-md-none     justify-content-evenly">
                <div className="left">
                  <div className="d-flex py-1   gap-2 ">
                    <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
                    <div className="bg-white p-1    p-sm-2  rounded-2 ">
                      <img
                        src={React_img}
                        alt=""
                        className="img-fluid tech_sm_img "
                      />
                    </div>
                  </div>
                  <div className="d-flex py-1 gap-2 ">
                    <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                      <img
                        src={Angular_img}
                        alt=""
                        className="img-fluid tech_sm_img "
                      />
                    </div>
                    <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
                  </div>
                </div>
                {/* middle text */}
                <div className="d-flex d-lg-none d-md-none tech_small_text   flex-column justify-content-center align-items-center  gap-2 pt-3 ">
                  <p className="font-size-46 text-white text-center font_weight_600  px-2">
                    Amazing tech stack in <br />
                    our pocket
                  </p>
                  <p className="tech_text text-white font-size-18 font_weight_400 text-center d-none">
                    Utilize our team’s specialized full-stack expertise in
                    software development to turn your product vision into
                    reality. We are committed to providing solutions that adhere
                    to the highest coding standards, ensuring reliability,
                    scalability, and security.
                  </p>
                </div>
                <div className="right">
                  <div className="d-flex py-1  gap-2">
                    <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                      <img
                        src={React_img}
                        alt=""
                        className="img-fluid tech_sm_img "
                      />
                    </div>
                    <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
                  </div>
                  <div className="d-flex py-1 gap-2">
                    <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
                    <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                      <img
                        src={Nodejs}
                        alt=""
                        className="img-fluid tech_sm_img "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom layer */}
            <div className="d-flex d-lg-none d-md-none  flex-row justify-content-center pt-2 gap-2">
              <div className="bg-white p-1    p-sm-2  rounded-2 ">
                <img
                  src={Angular_img}
                  alt=""
                  className="img-fluid tech_sm_img "
                />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img
                  src={React_img}
                  alt=""
                  className="img-fluid tech_sm_img "
                />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
            </div>

            <div className="d-flex d-lg-none d-md-none   flex-row justify-content-center pt-2 gap-2">
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img
                  src={React_img}
                  alt=""
                  className="img-fluid tech_sm_img "
                />
              </div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className="p-3 p-sm-4 background_color_grey rounded-2"></div>
              <div className=" bg-white p-1    p-sm-2  rounded-2 ">
                <img
                  src={Angular_img}
                  alt=""
                  className="img-fluid tech_sm_img "
                />
              </div>
            </div>
          </Container>
        </section>
        {/* Projects */}
      <section className="bg-black mb-5">
        <Container fluid className="pt-xl-5  mb-5">
            <div className=" d-flex align-items-center justify-content-center py-4 mb-5">
              <p className=" font-size-65   font_weight_600 font_family  text-white ">
                Our Latest Projects
              </p>
              <img
                src={Swirl}
                alt=""
                className="img-fluid position-absolute end-0 d-xl-block d-lg-block d-none   "
              />
            </div>
            <Swiper
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 90,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 85,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 100,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 80,
                },
              }}
              className="project_swiper pb-5"
            >
              <div className="position-relative">
                {projects.map((project, index) => (
                  <SwiperSlide
                    key={index}
                    className="d-flex justify-content-center align-items-center "
                  >
                    <div className="rectangle bg_gradient_blue project_card rounded shadow">
                      <div className="position-absolute  project_text inside_text text-white">
                        <p className="font_weight_600 text-start font-size-46 ms-4 ms-lg-0">
                          {project.title}
                        </p>
                        <div className="d-flex gap-3 ms-4 ms-lg-0 flex-nowrap">
                          {project.tags.map((tag, tagIndex) => (
                            <button
                              key={tagIndex}
                              className="btn text-dark font-size-16 rounded-pill bg-light "
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="d-flex justify-content-center pt-5 pb-5 ">
              <Button className=" font-size-22 px-4 py-2 rounded-5  font_weight_500 blue_gradient border-0">
                View All{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ps-3" />
              </Button>
            </div>
          </Container>
          </section>
       </div>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
