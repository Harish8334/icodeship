import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/images/Home/logo.png";
import { HiMenu } from "react-icons/hi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useLetsTalk from "../Components/Contact_page_link"
import { Services_Data } from "../Data/Capable_Data";

export default function Header() {

   const letsTalk = useLetsTalk();

  const uniqueServices = [];
  const seenTitles = new Set();

  
  for (const service of Services_Data) {
    if (!seenTitles.has(service.title)) {
      uniqueServices.push(service);
      seenTitles.add(service.title);
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="mb-5 pb-3 position-fixed top-0 w-100 z-3">
      <Navbar expand="lg" className="p-0 ">
        <Container fluid className="bg-white pt-3  pb-3  ">
          {/* Mobile View Header */}
          <div className="d-flex flex-row-reverse d-lg-none justify-content-between align-items-center w-100 px-0  ">
            {/* Offcanvas Toggle Button on Left */}
            <Button
              className="rounded-circle background_color_blue text-white p-2"
              onClick={handleShow}
            >
              <HiMenu size={28} color="white" />
            </Button>

            {/* Centered Logo */}
            <div className="d-flex ">
              <Navbar.Brand href="#">
                <img src={logo} alt="Logo" className=" logo_img" />
              </Navbar.Brand>
            </div>

            {/* Let's Talk button / icon on right */}
            <Button className="text-nowrap font-size-20 d-none d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center gap-2 blue_gradient border-radius-25">
              <FontAwesomeIcon
                icon={faCircle}
                className="font-size-9 text-success pe-2"
              />{" "}
              Let's Talk
            </Button>
          </div>

          {/* Desktop Nav */}
          <Navbar.Brand href="#" className="d-none d-lg-flex  ms-xl-5 ms-lg-3 ">
            <img src={logo} alt="Logo" className=" logo_img " />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex ">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <Nav className="font-size-24 font_weight_300 gap-xl-4 gap-lg-0  flex-nowrap">
              <Nav.Link
                as={Link}
                to="/"
                className={` ${currentPath === "/" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`px-xl-3 px-lg-3 ${
                  currentPath === "/about" ? "active" : ""
                }`}
              >
                About
              </Nav.Link>

              <Nav.Item className="position-relative dropdown-parent">
                <Nav.Link
                  as={Link}
                  to="/capable"
                  className={currentPath.startsWith("/capable") ? "active" : ""}
                >
                  Capabilities
                </Nav.Link>

                <div className="custom-dropdown position-absolute top-100  bg-white p-4 mt-2 rounded-4 shadow-lg">
                  <div className="container">
                    <div className="row">
                      {uniqueServices.map((service, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                          <h6 className=" font-size-20 font_color_light_blue font_weight_600 mb-2">
                            {service.title}
                          </h6>
                          {service.points.map((point, i) => (
                            <Nav.Link
                              as={Link}
                              to={`/capable_service/${point.href}`}
                              className=" font-size-18 font_weight_400 text-dark pb-3 pt-2 px-0"
                              key={i}
                            >
                              {point.text}
                            </Nav.Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Nav.Item>
              <Nav.Link
                as={Link}
                to="/solutions"
                className={` ${currentPath === "/solutions" ? "active" : ""}`}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ourworks"
                className={` ${currentPath === "/ourworks" ? "active" : ""}`}
              >
                Our Works
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={` ${currentPath === "/contact" ? "active" : ""}`}
              >
                Contact
              </Nav.Link>
              <Button className="text-nowrap font-size-20 mx-xl-2 mx-lg-2 d-flex justify-content-center align-items-center  blue_gradient border-radius-25" onClick={letsTalk}>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="font-size-9 text-success pe-2 "

                />{" "}
                Let's Talk
              </Button>
            </Nav>
          </Navbar.Collapse>

          {/* Offcanvas Component - Slide from Left */}
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <div>
              <Offcanvas.Header closeButton></Offcanvas.Header>
            </div>
            <div>
              <Offcanvas.Body>
                <Nav className="flex-column gap-3 font-size-20 text-center">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/capable">
                    Capabilities
                  </Nav.Link>
                  <Nav.Link as={Link} to="/solutions">
                    Solutions
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ourworks">
                    Our Works
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                  <Button
                    className=" px-4 d-block justify-content-center align-items-center gap-2 mt-3 blue_gradient border-radius-25"
                    onClick={handleClose}
                  >
                    <p className="text-nowrap font-size-20 py-1 m-0 d-none d-sm-block d-md-block">
                      {" "}
                      Let's Talk
                    </p>
                    <p className="text-nowrap font-size-20 py-1 m-0 d-block d-sm-none d-md-none">
                      {" "}
                      Close Menu
                    </p>
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </div>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
