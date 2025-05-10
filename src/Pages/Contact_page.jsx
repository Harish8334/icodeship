import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Contact from '../Components/Contact.jsx';
import Banner from "../Components/Banner.jsx";
import Banner_Data from "../Data/Banner_Data.jsx";
import { Container } from "react-bootstrap";
import "../Pages/About.css"
import Location_icon from "../assets/images/Contact/contact_loc_icon.png";
import Msg_icon from "../assets/images/Contact/contact_msg_icon.png";
import Call_icon from "../assets/images/Contact/contact_call_icon.png";
import Frequent_Ask from '../Components/Frequent_Ask.jsx';


function Contact_page() {
    const { text, image } = Banner_Data.contact;
  return (
     <>
     <Header />
     <Banner text={text} image={image} />
     <Contact />
     {/* Locate us */}
       <section>
           <Container fluid>
            <div className='ms-3'>            <p className=' font-size-37 font_weight_600 ms-5'>Locate Us :</p></div>
            <div className="d-flex  gap-3 Contact_card_container justify-content-center">
  <div className="card border_shadow p-3 Contact_card rounded-5">
    <div className='ms-2 mt-2'>
      <div className='mb-5'>
        <img src={Location_icon} alt="" className='about_core_icon' />
      </div>
      <p className="font-size-24 font_weight_700 font_color_light_blue">Visit Us</p>
      <p className="font-size-24 font_weight_700">Codeship Private Limited</p>
      <p className="About_core_card_size font-size-18 font_weight_300">
        No 1, 1st Floor, Narasimhan St, near TNSC <br className='d-xl-block d-none' /> Bank, West Mambalam, Chennai, Tamil <br className='d-xl-block d-none' /> Nadu 600033
      </p>
    </div>
  </div>

  <div className="card border_shadow p-3 Contact_card rounded-5">
    <div className='ms-2 mt-2'>
      <div className='mb-5'>
        <img src={Msg_icon} alt="" className='about_core_icon' />
      </div>
      <p className="font-size-24 font_weight_700 font_color_light_blue">Chat Support</p>
      <p className="font-size-24 font_weight_700">We are here to help</p>
      <p className='font-size-18 font_weight_300'>techsupport@codeship.in</p>
      <p className='font-size-18 font_weight_300'>support@codeship.in</p>
    </div>
  </div>

  <div className="card border_shadow p-3 Contact_card rounded-5">
    <div className='ms-2 mt-2'>
      <div className='mb-5'>
        <img src={Call_icon} alt="" className='about_core_icon' />
      </div>
      <p className="font-size-24 font_weight_700 font_color_light_blue">Speak with our friendly team</p>
      <p className="font-size-24 font_weight_700">Mon to Fri from 10 AM to 7 PM </p>
      <p className="About_core_card_size font-size-18 font_weight_300">+91 93424 88917</p>
    </div>
  </div>
</div>

           </Container>
       </section>
      {/* Map */}
       <section>
        <Container fluid>
        <div className="map-container d-flex justify-content-center w-100 m-auto m-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.890565645889!2d80.2255752!3d13.0391549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d3b70a90f51%3A0xb6155325437cc516!2sCodeShip%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745490585479!5m2!1sen!2sin" width="1620" height="467"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-5'></iframe>
</div>

        </Container>
       </section>
    <Frequent_Ask />
       <Footer />
       </>
  )
}

export default Contact_page