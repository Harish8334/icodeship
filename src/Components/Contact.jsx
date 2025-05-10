import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Contact_icon1 from "../assets/images/Home/BB_icon.png"
import Contact_icon2 from "../assets/images/Home/insta_icon.png"
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png"
import Contact_icon4 from "../assets/images/Home/twitter_icon.png"

function Contact() {
  return (
    <section>
      <Container className="my_container">
        <p className="font-size-62 font_weight_600">
          Have an innovative thought?
        </p>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <p className="p-0 font-size-46 font_weight_500">
              Tell us about it.
            </p>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-5 ">
            <form action="" className="" >
              <div className="row ">
                <div className="col-6 mt-2 mt-lg-5 ">
                  <div className="d-flex flex-column px-0 px-sm-4 px-md-4  px-lg-0">
                    <label htmlFor="" className="font-size-20 font_weight_400">
                      Name & Company
                    </label>
                    <input type="text" className="contact_input mt-4 " />
                  </div>
                </div>
                <div className="col-6 mt-2 mt-lg-5">
                  <div className="d-flex flex-column px-0 px-sm-4 px-md-4  px-lg-0">
                    <label htmlFor="" className="font-size-20 font_weight_400">
                      Email id
                    </label>
                    <input
                      type="email"
                      required
                      className="contact_input mt-4"
                    />
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="d-flex flex-column px-0 px-sm-4 px-md-4  px-lg-0">
                    <label htmlFor="" className="font-size-20 font_weight_400">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      required
                      className="contact_input mt-4"
                    />
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="d-flex flex-column px-0 px-sm-4 px-md-4  px-lg-0">
                    <label htmlFor="" className="font-size-20 font_weight_400">
                      Subject
                    </label>
                    <input type="text" className="contact_input mt-4" />
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-5 font-size-20 font_weight_400 px-4 px-lg-0">I’m Interested in</p>
            <div className="row">
                <div className="col-6   ">
               <div className="d-flex justify-content-evenly flex-wrap  ">
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">Web Development</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">App Development</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">CRM & Tools</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">Digital Marketing</Button>
               </div>
                </div>
                <div className="col-6">
                <div className="d-flex justify-content-evenly  flex-wrap ">
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">UI / UX Design</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">AMC</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">Server & Hosting</Button>
               <Button variant="border border-1 btn-outline-dark py-2 mx-2 font-size-16 font_weight_400  rounded-pill contact_button my-4 ">Other Services</Button>
               </div>
                </div>
            </div>
            <p className="mt-5 font-size-20 font_weight_400 px-4 px-lg-0">Tell us more about your project</p>
          <div className="px-4 px-lg-0">  <input type="text" className="contact_about_more " /></div>
         
          </div>
         <div className="d-flex d-lg-none justify-content-start px-4 mt-5 mb-3 " >
         <Button className="px-5 py-2 font-size-25 font_weight_500 blue_gradient border-radius-25">
                  Submit
                </Button>
         </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-12 mt-5 mt-lg-0  mt-md-3">
                <p className="font-size-37 font_weight_600  px-lg-0">Follow us on :</p>
                <div className="d-flex  gap-3 px-lg-0">
                    <a href=""><img src={Contact_icon1} alt="" className="img-fluid" /></a>
                    <a href=""><img src={Contact_icon2} alt="" className="img-fluid" /></a>
                    <a href=""><img src={Contact_icon3} alt="" className="img-fluid" /></a>
                    <a href=""><img src={Contact_icon4} alt="" className="img-fluid" /></a>
                </div>
            </div>
            <div className="col-lg-8 col-12 mt-5 px-4 px-lg-0 d-lg-inline d-none">
            <Button  className="px-5 py-2 font-size-18  font_weight_500 blue_gradient border-radius-25">Submit</Button>
            </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;