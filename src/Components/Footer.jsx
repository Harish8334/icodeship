import { Container } from "react-bootstrap";

function Footer() {
  return (
        <Container className='my_container'>
        <p className='font-size-80 font_weight_600'>Let’s Talk</p>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 col-12 '>
                    <div className='row-6'>
                    
                    <a href="" className='footer_support font-size-28 font_weight_400 text-black '>support@codeship.in</a>
                    </div>
                    <div className='row-6 mt-5'>
                        <p className="">No 1, 1st Floor, Narasimhan St, Jothi <br /> Nagar, West Mambalam, Chennai,<br /> Tamil Nadu 600033</p>
                        </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='flex-column flex-lg-row flex-md-row flex-sm-row d-flex justify-content-end '>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-5'>
                            <div className='d-flex flex-column gap-5 '>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Home</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>About</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Capabilities</a>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-5'>
                        <div className='d-flex flex-column gap-5 '>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Solutions</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Our Works</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-lg-5 mb-4'>
            <div className='col-lg-6 col-md-6 col-sm-12  col-12 mt-5'>
            <div className='d-flex  justify-content-lg-start justify-content-md-start gap-3  gap-lg-5 mt-lg-5 mt-sm-5 mb-3 '>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Privacy</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Terms</a>
                            <a href="" className='footer_links   font-size-30 font_color_black font_weight_400 '>Sitemap</a>
                            </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-centerc mt-5'>
                <p  className='font-size-30 font_weight_400 font_color_black mt-5'>@ 2021 - 2024 Codeship pvt Ltd.</p>
            </div>
            </div>
        </Container>
  )
}

export default Footer;