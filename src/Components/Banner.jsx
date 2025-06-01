import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useLetsTalk from "./Contact_page_link";

const Banner = ({ text, image }) => {
  const letsTalk = useLetsTalk();
  return (
    <div className=" d-flex justify-content-center  mt-5 ">
      <Container className="my_container mt-5">
        <div className="row flex-column-reverse flex-lg-row mt-5">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center  align-items-center">
            <div>
              <p className="font-size-54 text-center text-lg-start text-md-center font_weight_500 pb-3 pt-3 ">
                {text}
              </p>
              <div className=" d-flex justify-content-center justify-content-lg-start">
                <Button
                  className="px-5 py-2  font-size-25 font_weight_500 blue_gradient rounded-5"
                  onClick={letsTalk}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex banner_height  ">
              {" "}
              <img
                src={image}
                alt="Banner Visual"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;