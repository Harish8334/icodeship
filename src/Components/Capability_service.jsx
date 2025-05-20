import Testimonial from "../Components/Testimonial";
import WorkTogther from "./WorkTogther";
import { Container} from "react-bootstrap";
import Frequent_Ask from "./Frequent_Ask";
import Capable_service_web from "../assets/images/Capable_service/capable_service_web.png";
import Capable_service_path from "../assets/images/Capable_service/capable_service_path.png";
import Service_with_us from  "../assets/images/Capable_service/capable_service_with_us.png";
import "../Pages/Capabilities.css";
import cardData from "../Data/Capability_Service_Data"
import { Swiper, SwiperSlide } from "swiper/react";
import Web from "../Service_Data/Web_development"

const Capable_service = () => {
  const cardData = Web[0].cardData; 
  return (
    <div className="capable_services_container">
       {/* Why choose us */}
      <section>
       
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <p className="font-size-25  font_weight_300">What Choose Us ?</p>
              <p className="font-size-58 font_weight_600">
               <h1>{Web[0].banner.title}</h1>
              </p>
              <p className="font-size-30 font_weight_300 why_choose_us_text">
              {Web[0].banner.description}
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
            <div className="d-flex justify-content-center">  <img src={Web[0].banner.icon} alt="" className="img-fluid Capable_service_web" /></div>
            </div>
          </div>
        </Container>
      </section>
      {/* Software developement need */}
      <section className="d-none d-md-block d-lg-block d-xl-block pb-5 ">
  <Container className="my_container position-relative software_container">
    <p className="font-size-62 text-center font_weight_600">
      Your one stop to all your software <br className="d-none d-lg-block" />
      development needs
    </p>
    <div className="d-flex justify-content-center mt-5">
      <img
        src={Capable_service_path}
        alt=""
        className="img-fluid mt-5"
      />
      {cardData.map((item, index) => (
        <div key={index} className={`position-absolute ${item.className}`}>
          <div className="card d-flex flex-column rounded-4">
            <div className="ms-4 pt-4 pb-4">
              <div>
                <img
                  src={item.icon}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <p className="font-size-30 font_weight_700 font_color_light_blue pt-3">
                {item.title}
              </p>
              <p className="capable_service_dev_card_text font-size-20 line_height_30 font_weight_300">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>
       {/* Software developement need small screen */}
      <section className="d-lg-none d-md-none d-block ">
        <Container>
        <p className="font-size-62 text-center font_weight_600">
      Your one stop to all your software <br className="d-none d-lg-block" />
      development needs
    </p>
        {cardData.map((item) => (
    <div key={item.id} className={` ${item.className}`}>
      <div className="card d-flex flex-column rounded-4 mt-3">
        <div className="pt-3 pb-2">
          <div>
            <img
              src={item.icon}
              alt=""
              className="ms-3 img-fluid Capable_service_icon1"
            />
          </div>
          <p className="ms-3 font-size-30 font_weight_700 font_color_light_blue pt-3">
            {item.title}
          </p>
          <p className="ms-3 capable_service_dev_card_text font-size-20 line_height_30 font_weight_300">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
        </Container>
      </section>
       {/* Why choose us */}
      <section>
        <Container className="my_container why_choose_us pt-0  ">
          <div className="row mt-5 mb-5 mt-lg-0">
            <div className="col-lg-6 col-md-12 col-12">
              <p className="font-size-25  font_weight_300 mt-md-5 mt-lg-5 mt-xl-0 m-0">Benefits of</p>
              <p className="font-size-58 font_weight_600  ">
                Working<br className="d-none d-lg-block " /> With Us
              </p>
              <p className="font-size-30 font_weight_300 why_choose_us_text text-justify">
              Our dedicated professionals provide customized web solutions, ensuring timely delivery and ongoing support. We optimize websites for better visibility at competitive prices. With clear communication and regular updates, we offer innovative ideas and creative solutions to enhance your online presence.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="d-flex justify-content-center  mt-md-5 mt-lg-5 mt-xl-0"><img src={Service_with_us} alt="" className=" Capable_service_web img-fluid " /></div>
            </div>
          </div>
          <Swiper
           slidesPerView="auto"
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
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}>
            <SwiperSlide className="my-3">
              <div className="card py-3 rounded-5 border_shadow">
                <div className="d-flex justify-content-between px-5 "><p className="font-size-24 font_color_light_blue font_weight_600 pt-lg-4 pt-md-3">Time-saving</p> <p className=" font-size-62 font_color_light_blue font_weight_700">01</p></div>
                <p className="text-justify px-5 font-size-18 font_weight_300  ">With extensive experience in various website creation services, Codeship Pvt Ltd is your best choice for saving both time and money. Every moment you invest in our services is time well spent, allowing you to focus on growing your business. Our web development team will give you a competitive edge in the marketplace.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide className="my-3">
              <div className="card py-3 rounded-5 border_shadow">
                <div className="d-flex justify-content-between px-5 "><p className="font-size-24 font_color_light_blue font_weight_600 pt-lg-4 pt-md-3">Advanced <br className="d-none" /> Technology</p> <p className=" font-size-62 font_color_light_blue font_weight_700">02</p></div>
                <p className="text-justify px-5 font-size-18 font_weight_300  ">Our development team guarantees the functionality and security of your website for visitors through regular updates during business hours. Our website maintenance services cover all your needs. Whether you want to delete page content, add new graphics, or change a link, we’re always here to assist you!</p>
              </div>
            </SwiperSlide>
          <SwiperSlide className="my-3">
              <div className="card py-3 rounded-5 border_shadow">
                <div className="d-flex justify-content-between px-5 "><p className="font-size-24 font_color_light_blue font_weight_600 pt-lg-4 pt-md-3">More reliable</p> <p className=" font-size-62 font_color_light_blue font_weight_700">03</p></div>
                <p className="text-justify px-5 font-size-18 font_weight_300  ">Partnering with a trusted firm ensures a reliable website. Without a web development specialist, you may overlook potential issues. Achieving quality website development requires significant effort, time, and investment, along with a skilled team. Our experts are ready to design and deliver an outstanding website for you.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <Testimonial />
      <Frequent_Ask />
      <WorkTogther />
    </div>
  );
};

export default Capable_service;
