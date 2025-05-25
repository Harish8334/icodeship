import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Testimonial_img from "../assets/images/Home/testimonial.png";
import Test_logo from "../assets/images/Home/testimonial_logo.png";
import Test from "../assets/images/Home/test.png";
import Larrow from "../assets/images/Home/left_arrow.png";
import Rarrow from "../assets/images/Home/right_arrow.png";

import "../Pages/Home.css";

const testimonials = [
  {
    text: `Working with Codeship Pvt Ltd to design and develop our eCommerce
           website has been an absolute game-changer for our business. The
           team was professional, responsive, and truly understood our
           vision. The website they delivered is not only visually stunning
           but also fast, secure, and easy to navigate. Sales have
           significantly increased thanks to the seamless user experience and
           mobile optimization. We couldn’t be happier with the results, and
           we highly recommend Codeship for anyone looking for a
           high-quality, custom-built eCommerce solution.`,
    name: "Suyash Sharma",
    title: "Founder, Factory Made",
    img: Testimonial_img,
    logo: Test_logo,
  },
  {
    text: `Working with Codeship Pvt Ltd to design and develop our eCommerce
           website has been an absolute game-changer for our business. The
           team was professional, responsive, and truly understood our
           vision. The website they delivered is not only visually stunning
           but also fast, secure, and easy to navigate. Sales have
           significantly increased thanks to the seamless user experience and
           mobile optimization. We couldn’t be happier with the results, and
           we highly recommend Codeship for anyone looking for a
           high-quality, custom-built eCommerce solution.`,
    name: "Suyash Sharma",
    title: "Founder, Factory Made",
    img: Testimonial_img,
    logo: Test_logo,
  },
  // add more if needed
];

function Testimonial() {
  const swiperRef = useRef(null);

  return (
    <section>
      <Container className="my_container">
        <p className="font-size-50 font_weight_600">
          Hear What Our <br /> Customers Are Saying!
        </p>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                  <p className="font-size-20 font_weight_400 font_color_light_grey text-justify text-lg-start line_height_30 Testimonial_text">
                    "{item.text}"
                  </p>

                  <div className="row">
                    <div className="d-flex gap-5 col-9 col-lg-7">
                      <div className="rounded-circle">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </div>
                      <p className="font-size-24 font_weight_600 mt-2">
                        {item.name} <br />
                        {item.title}
                      </p>
                    </div>
                    <div className="col-3">
                      <img src={item.logo} alt="logo" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-none d-lg-block d-md-block">
                  <img src={Test} alt="testimonial side" className="img-fluid" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex gap-3 mt-4 justify-content-start">
          <button
            className="bg-transparent border-0 p-0"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={Larrow} alt="previous" />
          </button>
          <button
            className="bg-transparent border-0 p-0"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={Rarrow} alt="next" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Testimonial;
