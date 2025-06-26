import { Container, Navbar } from "react-bootstrap";
import Logo from "../assets/images/Codeship_Ad/logo.png";
import { Phone, Mail, MessageCircle } from 'lucide-react';

const  Header = () => {
  return (
    <Navbar expand="lg" className="mt-3">
      <Container fluid className="px-lg-4">
        <div className="d-flex w-100 align-items-center justify-content-between gap-3 d-md-none">
          {/* Mobile/Tablet layout */}
          

          <div className="text-center">
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo" className="img-fluid"  />
            </Navbar.Brand>
          </div>

          <a href="/" className="btn orange-bg rounded-5 px-3 py-2 text-white">Explore</a>
         <a href="#contact-section" className="bg-blue-color border-0 p-2 rounded-circle"> <Phone size={24} stroke="#5552A1" fill="#FFFFFF" /></a>

        </div>

        <div className="d-none d-md-flex w-100 justify-content-between align-items-center px-5">
          {/* Desktop layout */}
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <div className="d-flex gap-4 gap-lg-2">
            <a href="#contact-section" className="btn blue-border rounded-5 px-4 py-2">Contact</a>
            <a href="/" className="btn orange-bg rounded-5 px-4 py-2 text-white">Explore</a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
