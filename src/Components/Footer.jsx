import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
    const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
  return (
    <Container className='my_container mt-5'>
      <p className='font-size-80 font_weight_600 mt-5 pt-md-5'>Let’s Talk</p>
      <div className='row'>
        <div className=' col-sm-6 col-12 justify-content-between d-flex flex-column '>
          <div className='row-6'>
            <a href="mailto:support@codeship.in" className='footer_support font-size-28 font_weight_400 text-black '>
              Techsupport@codeship.in
            </a>
          </div>
          <div className='row-6 mt-5 '>
            <p className="font-size-28 m-0">No 1, 1st Floor, Narasimhan St, Jothi <br /> Nagar, West Mambalam, Chennai,<br /> Tamil Nadu 600033</p>
          </div>
        </div>

        <div className=' col-sm-6 col-12'>
          <div className='flex-column flex-lg-row flex-md-row flex-sm-row d-flex justify-content-end '>
            <div className=' col-sm-6 col-6 mt-5'>
              <div className='d-flex flex-column gap-5 '>
                <div className="d-inline"><Link to="/" className='footer_links font-size-30 font_color_black font_weight_400 ' onClick={handleHomeClick}>Home</Link></div>
               <div className="d-inline"><Link to="/about" className='footer_links font-size-30 font_color_black font_weight_400 d-inline'>About</Link></div>
               <div className="d-inline">  <Link to="/capable" className='footer_links font-size-30 font_color_black font_weight_400 d-inline '>Capabilities</Link></div>
                
              
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-5'>
              <div className='d-flex flex-column gap-5 '>
                <div className="d-inline"> <Link to="/solutions" className='footer_links font-size-30 font_color_black font_weight_400 d-inline'>Solutions</Link></div>
                <div className="d-inline"> <Link to="/ourworks" className='footer_links font-size-30 font_color_black font_weight_400 d-inline'>Our Works</Link></div>
                <div className="d-inline"><Link to="/contact" className='footer_links font-size-30 font_color_black font_weight_400 d-inline'>Contact</Link></div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-lg-5 mb-4'>
        <div className='col-md-6   col-12 mt-5'>
          
          <div className='d-flex  justify-content-lg-start justify-content-md-start gap-3  gap-lg-5 mt-lg-5 mt-sm-5 mb-3 '>
            <div className="d-inline"> <Link to="/privacy" className='footer_links font-size-30 font_color_black font_weight_400'>Privacy</Link></div>
            <div className="d-inline"> <Link to="/terms" className='footer_links font-size-30 font_color_black font_weight_400'>Terms</Link></div>
            <div className="d-inline"> <Link to="/sitemap" className='footer_links font-size-30 font_color_black font_weight_400'>Sitemap</Link></div>
          </div>
        </div>
        <div className='col-md-6  col-12 d-flex justify-content-center mt-2 mt-md-5'>
          <p className='font-size-30 font_weight_400 font_color_black mt-5'>@ 2021 - 2024 Codeship pvt Ltd.</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
