import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Contact from '../Components/Contact.jsx';
import Banner from "../Components/Banner.jsx";
import Banner_Data from "../Data/Banner_Data.jsx";
import "../Pages/About.css"
import Location_icon from "../assets/images/Contact/contact_loc_icon.png";
import Msg_icon from "../assets/images/Contact/contact_msg_icon.png";
import Call_icon from "../assets/images/Contact/contact_call_icon.png";
import Frequent_Ask from '../Components/Frequent_Ask.jsx';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Contact_icon1 from "../assets/images/Home/BB_icon.png"
import Contact_icon2 from "../assets/images/Home/insta_icon.png"
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png"
import Contact_icon4 from "../assets/images/Home/twitter_icon.png"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Enter a company name"),
  email: Yup.string().email("Invalid email").required("Enter a email"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Enter a mobile number"),
  subject: Yup.string().required("Required"),
  interests: Yup.array().min(1, "Select at least one interest"),
  about: Yup.string().required("Required"),
});


function Contact_page() {
  const interestsOptions = [
    "Web Development",
    "App Development",
    "CRM & Tools",
    "Digital Marketing",
    "UI / UX Design",
    "AMC",
    "Server & Hosting",
    "Other Services",
  ];
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      };

      // If page fully loaded, scroll immediately
      if (document.readyState === 'complete') {
        scrollToElement();
      } else {
        // Wait for full load (images/fonts)
        window.addEventListener('load', scrollToElement);
        // Cleanup listener
        return () => window.removeEventListener('load', scrollToElement);
      }
    }
  }, [location]);
    const { text, image } = Banner_Data.contact;
  return (
     <>
     <Header />
     <Banner text={text} image={image} />
   <section >
      <Container className="my_container" >
        <p className="font-size-62 font_weight_600">
          Have an innovative thought?
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            subject: "",
            interests: [],
            about: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Form Submitted", values)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <p className="p-0 font-size-46 font_weight_500" id="contactForm">
                    Tell us about it.
                  </p>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-5">
                  <div className="row">
                    <div className="col-6 mt-2 mt-lg-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Name & Company
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className="contact_input mt-4"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-2 mt-lg-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Email id
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className="contact_input mt-4"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Mobile Number
                        </label>
                        <Field
                          type="tel"
                          name="mobile"
                          className="contact_input mt-4"
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Subject
                        </label>
                        <Field
                          type="text"
                          name="subject"
                          className="contact_input mt-4"
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 font-size-20 font_weight_400 px-4 px-lg-0">
                    I’m Interested in
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex justify-content-evenly flex-wrap">
                        {interestsOptions.slice(0, 4).map((interest) => (
                          <button
                            type="button"
                            onClick={() => {
                              const selected = values.interests.includes(
                                interest
                              )
                                ? values.interests.filter((i) => i !== interest)
                                : [...values.interests, interest];
                              setFieldValue("interests", selected);
                            }}
                            className={`btn btn-outline-dark border border-3 py-2 mx-2 font-size-16 font_weight_400 rounded-pill contact_button my-4 ${
                              values.interests.includes(interest)
                                ? "active"
                                : ""
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="d-flex justify-content-evenly flex-wrap">
                        {interestsOptions.slice(4).map((interest) => (
                          <button
                            type="button"
                            onClick={() => {
                              const selected = values.interests.includes(
                                interest
                              )
                                ? values.interests.filter((i) => i !== interest)
                                : [...values.interests, interest];
                              setFieldValue("interests", selected);
                            }}
                            className={`btn btn-outline-dark border border-3 py-2 mx-2 font-size-16 font_weight_400 rounded-pill contact_button my-4 ${
                              values.interests.includes(interest)
                                ? "active"
                                : ""
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ErrorMessage
                    name="interests"
                    component="div"
                    className="text-danger px-4"
                  />

                  <p className="mt-5 font-size-20 font_weight_400 px-4 px-lg-0">
                    Tell us more about your project
                  </p>
                  <div className="px-4 px-lg-0">
                    <Field
                      type="text"
                      name="about"
                      className="contact_about_more"
                    />
                    <ErrorMessage
                      name="about"
                      component="div"
                      className="text-danger mt-3"
                    />
                  </div>

                  <div className="d-flex d-lg-none justify-content-start px-4 mt-5 mb-3">
                    <Button
                      type="submit"
                      className="px-5 py-2 font-size-25 font_weight_500 blue_gradient border-radius-25"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12 mt-5 mt-lg-0 mt-md-3">
                  <p className="font-size-37 font_weight_600 px-lg-0">
                    Follow us on :
                  </p>
                  <div className="d-flex gap-3 px-lg-0">
                    <a href="">
                      <img src={Contact_icon1} alt="" className="img-fluid" />
                    </a>
                    <a href="">
                      <img src={Contact_icon2} alt="" className="img-fluid" />
                    </a>
                    <a href="">
                      <img src={Contact_icon3} alt="" className="img-fluid" />
                    </a>
                    <a href="">
                      <img src={Contact_icon4} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-12 mt-5 px-4 px-lg-0 d-lg-inline d-none">
                  <Button
                    type="submit"
                    className="px-5 py-2 font-size-18 font_weight_500 blue_gradient border-radius-25"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
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