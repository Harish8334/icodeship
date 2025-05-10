import Testimonial from "../Components/Testimonial";
import WorkTogther from "./WorkTogther";
import { Container, Accordion } from "react-bootstrap";
import Frequent_Ask from "./Frequent_Ask";
import Capable_service_web from "../assets/images/Capable_service/capable_service_web.png";
import Capable_service_path from "../assets/images/Capable_service/capable_service_path.png";
import Service_with_us from  "../assets/images/Capable_service/capable_service_with_us.png";
import "../Pages/Capabilities.css";
import cardData from "../Data/Capability_Service_Data"

const Capable_service = () => {
  return (
    <div className="capable_services_container">
      <section>
        {/* Why choose us */}
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <p className="font-size-25  font_weight_300">What Choose Us ?</p>
              <p className="font-size-58 font_weight_600">
                For Your Web <br className="d-none d-lg-block" /> Development
                Services.
              </p>
              <p className="font-size-30 font_weight_300 why_choose_us_text">
                We are a trusted web development company in Chennai, committed
                to delivering high-quality, SEO-friendly, and mobile-responsive
                websites. Our expert team ensures timely delivery without
                compromising on quality. Looking for a reliable partner? Contact
                us for affordable web solutions today!
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
            <div className="d-flex justify-content-center">  <img src={Capable_service_web} alt="" className="img-fluid Capable_service_web" /></div>
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
      <section>
        {/* Why choose us */}
        <Container className="my_container   ">
          <div className="row mt-5 mb-5 mt-lg-0">
            <div className="col-lg-6 col-md-12 col-12">
              <p className="font-size-25  font_weight_300 mt-5 mt-lg-0 m-0">Benefits of</p>
              <p className="font-size-58 font_weight_600  ">
                Working<br className="d-none d-lg-block " /> With Us
              </p>
              <p className="font-size-30 font_weight_300 why_choose_us_text text-justify">
              Our dedicated professionals provide customized web solutions, ensuring timely delivery and ongoing support. We optimize websites for better visibility at competitive prices. With clear communication and regular updates, we offer innovative ideas and creative solutions to enhance your online presence.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="d-flex justify-content-center"><img src={Service_with_us} alt="" className=" Capable_service_web img-fluid " /></div>
            </div>
          </div>
        </Container>
      </section>
      <Testimonial />
      <Frequent_Ask />
      <WorkTogther />
    </div>
  );
};

export default Capable_service;
