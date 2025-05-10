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

export default function Header() {
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
                <img
                  src={logo}
                  alt="Logo"
                  className=" logo_img"
                />
              </Navbar.Brand>
            </div>

            {/* Let's Talk button / icon on right */}
            <Button className="text-nowrap font-size-20 d-none d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center gap-2 blue_gradient border-radius-25">
              <FontAwesomeIcon
                icon={faCircle}
                className="font-size-9 text-success"
              />{" "}
              Let's Talk
            </Button>
          </div>

          {/* Desktop Nav */}
          <Navbar.Brand href="#" className="d-none d-lg-flex  ms-xl-5 ms-lg-3">
            <img
              src={logo}
              alt="Logo"
              className=" logo_img"
              
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <Nav className="font-size-24 font_weight_300 gap-2 flex-nowrap">
              <Nav.Link
                as={Link}
                to="/"
                className={`px-xl-3 px-lg-2 ${
                  currentPath === "/" ? "active" : ""
                }`}
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

              <Nav.Link
                as={Link}
                to="/capable"
               className={`px-xl-3 px-lg-2 ${currentPath.startsWith("/capable") ? "active" : ""}`}

              >
                Capabilities
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/solutions"
                className={`px-xl-3 px-lg-2 ${
                  currentPath === "/solutions" ? "active" : ""
                }`}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ourworks"
                className={`px-xl-3 px-lg-2 ${
                  currentPath === "/ourworks" ? "active" : ""
                }`}
              >
                Our Works
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`px-xl-3 px-lg-2 ${
                  currentPath === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Nav.Link>
              <Button className="text-nowrap font-size-20 mx-xl-2 mx-lg-2 d-flex justify-content-center align-items-center gap-2 blue_gradient border-radius-25">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="font-size-9 text-success"
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
                  <Nav.Link as={Link} to="/capable">Capabilities</Nav.Link>
                  <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
                  <Nav.Link as={Link} to="/ourworks">
                    Our Works
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
