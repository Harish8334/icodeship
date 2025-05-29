import { useState , useEffect , useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Contact from "../Components/Contact.jsx";
import Banner from "../Components/Banner.jsx";
import Banner_Data from "../Data/Banner_Data.jsx";
import "../Pages/About.css";
import Location_icon from "../assets/images/Contact/contact_loc_icon.png";
import Msg_icon from "../assets/images/Contact/contact_msg_icon.png";
import Call_icon from "../assets/images/Contact/contact_call_icon.png";
import Frequent_Ask from "../Components/Frequent_Ask.jsx";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Contact_icon1 from "../assets/images/Home/BB_icon.png";
import Contact_icon2 from "../assets/images/Home/insta_icon.png";
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png";
import Contact_icon4 from "../assets/images/Home/twitter_icon.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // ✨ EmailJS SDK
import {BallSplash} from "../Animation/animation"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Enter a company name"),
  email: Yup.string()
    .matches(
      /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter an email"),
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
          element.scrollIntoView({ behavior: "auto" });
        }
      };

      // If page fully loaded, scroll immediately
      if (document.readyState === "complete") {
        scrollToElement();
      } else {
        // Wait for full load (images/fonts)
        window.addEventListener("load", scrollToElement);
        // Cleanup listener
        return () => window.removeEventListener("load", scrollToElement);
      }
    }
  }, [location]);
    const containerRef = useRef(null);
    const [showSplash, setShowSplash] = useState(false);
  
    const [showToast, setShowToast] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
  setShowSplash(true); //  Trigger splash immediately

  toast.success("Form Submitted Successfully!", {
    className: "custom-toast",
    hideProgressBar: false,
    autoClose: 3000,
    position: "top-right",
    progressClassName: "Toastify__progress-bar",
  });

  const templateParams = {
    name: values.name,
    email: values.email,
    mobile: values.mobile,
    subject: values.subject,
    interests: values.interests.join(", "),
    about: values.about,
  };

  emailjs
    .send(
      "service_5f2o1je",
      "template_o4ke6j9",
      templateParams,
      "vpCDD5Np_dKJV4L4m"
    )
    .then(
      (result) => {
        resetForm();
        console.log(" Email sent:", result.text);
      },
      (error) => {
        console.error(" Email error:", error.text);
        toast.error("Something went wrong. Please try again.", {
          className: "custom-toast",
          autoClose: 2500,
          hideProgressBar: false,
         position: "bottom-right", 
        });
      }
    );
};
  const { text, image } = Banner_Data.contact;
  return (
    <>
      <Header />
      <Banner text={text} image={image} />
   <section  className="position-relative overflow-hidden"   ref={containerRef}>
      <Container className="my_container pt-5 px-lg-3 ">
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
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <p className="p-0 font-size-46 font_weight_500" id="contactForm">
                    Tell us about it.
                  </p>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-5 ">
                  <div className="row ">
                    <div className="col-md-6 col-12 mt-2 pe-lg-5 mt-lg-5">
                      <div className="d-flex  flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Name & Company
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className="contact_input  mt-4"
                          placeholder="Enter your full name and company name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mt-2 ps-lg-5 mt-lg-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400 pt-4 pt-md-0">
                          Email id
                        </label>
                        <Field
                          type="email"
                          name="email"
                           placeholder="Enter your email address "
                          className="contact_input  mt-4"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12 pe-lg-5 mt-5">
                      <div className="d-flex flex-column px-0 px-sm-4 px-md-4 px-lg-0">
                        <label className="font-size-20 font_weight_400">
                          Mobile Number
                        </label>
                        <Field
                         type="tel"
                        name="mobile"
                        maxLength="10"
                        inputMode="numeric"
                        pattern="\d*"
                        placeholder="Enter mobile number"
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10); // only digits, max 10
                        }}
                          className="contact_input mt-4"
                         
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger mt-3"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12 ps-lg-5 mt-5">
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
                            key={interest}
                            onClick={() => {
                              const selected = values.interests.includes(
                                interest
                              )
                                ? values.interests.filter((i) => i !== interest)
                                : [...values.interests, interest];
                              setFieldValue("interests", selected);
                            }}
                            className={`btn btn-outline-dark border-black text-nowrap py-2 py-md-3 mx-2 font-size-16 font_weight_400 rounded-pill contact_button w-100 my-4 ${
                              values.interests.includes(interest) ? "active" : ""
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
                            key={interest}
                            onClick={() => {
                              const selected = values.interests.includes(
                                interest
                              )
                                ? values.interests.filter((i) => i !== interest)
                                : [...values.interests, interest];
                              setFieldValue("interests", selected);
                            }}
                            className={`btn btn-outline-dark py-2 py-md-3 mx-2 font-size-16 font_weight_400 rounded-pill contact_button w-100 border-black text-nowrap my-4 ${
                              values.interests.includes(interest) ? "active" : ""
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

                  <p className="mt-5 font-size-20 font_weight_400   ">
                    Tell us more about your project
                  </p>
                  <div className="">
                    <Field
                      type="text"
                      name="about"
                      className="contact_about_more w-100 bg-transparent shadow-none"
                    />
                    <ErrorMessage
                      name="about"
                      component="div"
                      className="text-danger mt-3"
                    />
                  </div>

                  <div className="d-flex d-lg-none justify-content-start px-md-4 mt-5 mb-3">
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
                    <a href="#"><img src={Contact_icon1} alt="" className="img-fluid" /></a>
                    <a href="https://www.instagram.com/icodeship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={Contact_icon2} alt="" className="img-fluid" /></a>
                    <a href="#"><img src={Contact_icon3} alt="" className="img-fluid" /></a>
                    <a href="#"><img src={Contact_icon4} alt="" className="img-fluid" /></a>
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
         {showSplash && (
          <BallSplash
            onComplete={() => {
              setShowSplash(false);
            }}
          />
        )}
    <ToastContainer className="mt-5 pt-5" />

      </Container>
    </section>
      {/* Locate us */}
      <section className="pt-5">
        <Container className="my_container">
          <p className=" font-size-37 font_weight_600 ">Locate Us :</p>
          <div className="d-flex flex-sm-wrap flex-md-nowrap  gap-3 Contact_card_container justify-content-center">
            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Location_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Visit Us
                </p>
                <p className="font-size-24 font_weight_700">
                  Codeship Private Limited
                </p>
                <p className="About_core_card_size font-size-18 font_weight_300">
                  No 1, 1st Floor, Narasimhan St, near TNSC{" "}
                  <br className="d-xl-block d-none" /> Bank, West Mambalam,
                  Chennai, Tamil <br className="d-xl-block d-none" /> Nadu
                  600033
                </p>
              </div>
            </div>

            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Msg_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Chat Support
                </p>
                <p className="font-size-24 font_weight_700">
                  We are here to help
                </p>
                <p className="font-size-18 font_weight_300">
                  techsupport@codeship.in
                </p>
                <p className="font-size-18 font_weight_300">
                  support@codeship.in
                </p>
              </div>
            </div>

            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Call_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Speak with our friendly team
                </p>
                <p className="font-size-24 font_weight_700">
                  Mon to Fri from 10 AM to 7 PM{" "}
                </p>
                <p className="About_core_card_size font-size-18 font_weight_300">
                  +91 93424 88917
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Map */}
      <section>
        <Container fluid>
          <div className="map-container d-flex justify-content-center w-100 m-auto mt-5  m-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.890565645889!2d80.2255752!3d13.0391549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d3b70a90f51%3A0xb6155325437cc516!2sCodeShip%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745490585479!5m2!1sen!2sin"
              width="1620"
              height="467"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="rounded-5"
            ></iframe>
          </div>
        </Container>
      </section>
      <Frequent_Ask />
      <Footer />
    </>
  );
}

export default Contact_page;
