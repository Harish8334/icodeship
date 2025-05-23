import WorkTogther from "../Components/WorkTogther";
import { Container, Button } from "react-bootstrap";
import "../Pages/Capabilities.css";
import { ChevronRight } from "lucide-react";
import { Services_Data } from "../Data/Capable_Data";
import Shape_4 from "../assets/images/Capable/capable_shape4.png";
import { useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Banner_Data from "../Data/Banner_Data";

function Capabilities() {
  const { text, image } = Banner_Data.capable;
  const navigate = useNavigate();
  return (
    <div className="capable_services_container">
      <Banner text={text} image={image} />
      <Brands />
      <section className="position-relative">
        <Container className="my_container  ">
          {Services_Data.map((service, idx) => (
            <div
              key={idx}
              className={`row mb-5 capable_service_data ${
                idx % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-12 col-lg-6 col-md-6">
                <div className="position-relative">
                  <p className="f font-size-58 font_weight_600 mt-3">
                    {service.title}
                  </p>
                  <p className="f font-size-24 line_height_30 capable_p_text">
                    {service.description}
                  </p>
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
                        className="text-black d-flex gap-2 text-decoration-none"
                      >
                        <ChevronRight
                          strokeWidth={1}
                          size={40}
                          className="mt-1"
                        />
                        <p className="pt-2 pt-lg-0 font-size-30 font_weight_600 m-0">
                          {point.text}
                        </p>
                      </a>
                    ))}
                  </div>
                  {/* Display Shape_1 image for odd index */}
                  {idx % 2 !== 1 && (
                    <img
                      src={service.imageOdd} // This will use the image for odd index
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
                  className="img-fluid mt-5 mt-lg-0"
                />
              </div>
            </div>
          ))}
        </Container>
        <img
          src={Shape_4}
          alt=""
          className="img-fluid  position-absolute work_togehter_shape mt-5 "
        />
      </section>
      <div className="">
        <WorkTogther />
      </div>
    </div>
  );
}

export default Capabilities;
