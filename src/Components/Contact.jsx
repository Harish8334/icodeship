import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Contact_icon1 from "../assets/images/Home/BB_icon.png";
import Contact_icon2 from "../assets/images/Home/insta_icon.png";
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png";
import Contact_icon4 from "../assets/images/Home/twitter_icon.png";
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

function Contact() {
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

  return (
    <section id="contactForm">
      <Container className="my_container pt-5">
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
                  <p className="p-0 font-size-46 font_weight_500">
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
                          className="contact_input   mt-4"
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
                            className={`btn btn-outline-dark border border-1 border-black text-nowrap  py-2 py-md-3 mx-2 font-size-16 font_weight_400 rounded-pill contact_button w-100 my-4 ${
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
                            className={`btn btn-outline-dark border border-1 py-2 py-md-3 mx-2 font-size-16 font_weight_400 rounded-pill contact_button w-100 border-black text-nowrap  my-4 ${
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
                      className="contact_about_more w-100 bg-transparent shadow-none"
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
  );
}

export default Contact;
