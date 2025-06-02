import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Container, Button } from "react-bootstrap";
import "./Privacy.css"
function Privacy() {
  return (
   <>
   <section className="mt-5">
     <Container className="my_container pt-5">
     <div className="mx-auto text-white" style={{
    }}>
      {/* Header */}
      <div className="blue_gradient text-white border_shadow mb-5 text-center p-5 rounded-5 ">
        <h1 className="font-size-46 font_weight_700 line_height_50 mb-4" >
          Privacy Policy & Terms
        </h1>
        <p className="font-size-20 font_weight_400 line_height_25 mb-3 opacity-95" >
          Codeship Private Limited
        </p>
        <p className="font-size-14 font_weight_300 line_height_18 opacity-80" >
          Last updated: June 2025
        </p>
      </div>

      {/* Privacy Policy Section */}
      <section className="mb-5">
        <div className="mb-4 ps-3" style={{
          borderLeft: '5px solid #504CA0',
        }}>
          <p className="font-size-40 font_weight_700 font_color_blue line_height_40 mb-2" >
            Privacy Policy
          </p>
        </div>
        
        <div className="mb-5" >
          <p className="font-size-24 font_weight_400 font_color_black mb-4 text-justify" >
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          
          <p className="font-size-24 font_weight_400 font_color_black  mb-4 text-justify  ">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5" >
            Interpretation and Definitions
          </h3>
          
          <div className="background_color_testimonial_light_blue border_radius_25 p-4 mb-5 " style={{
            border: '1px solid #e0e7ff'
          }}>
            <h4 className="font-size-24 font_weight_600 font_color_blue line_height_25 mb-3" >
              Key Definitions:
            </h4>
            <div className="row pt-3 g-3">
  <div className="col-md-6">
    <div className="mb-2">
      <p className="fw-bold font-size-20 text-black  ">Company:</p>
      <p className="d-block mt-1 font-size-16  text-dark pe-5">
        Codeship Private Limited, No 49/A, 3rd St, Elumalai Nagar, Annai Theresa Nagar, Madipakkam, Chennai, Tamil Nadu 600091
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="mb-2">
      <p className="fw-bold font-size-20 text-black mb-3">Service:</p>
      <p className="d-block mt-1  text-dark">
        Refers to the Website accessible from https://codeship.in/
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="mb-2">
      <p className="fw-bold font-size-20 text-black ">Personal Data:</p>
      <p className="d-block mt-1  text-dark">
        Any information that relates to an identified or identifiable individual
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="mb-2">
      <p className="fw-bold font-size-20 text-black ">Usage Data:</p>
      <p className="d-block mt-1  text-dark">
        Data collected automatically when using the Service
      </p>
    </div>
  </div>
</div>

          </div>

          <h3 className="font-size-25 font_weight_600 font_color_blue mb-4" style={{
            marginBottom: '20px'
          }}>
            Data Collection and Usage
          </h3>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 className="font-size-18 font_weight_600 font_color_dark_blue " style={{
              marginBottom: '15px'
            }}>
              Personal Data We Collect:
            </h4>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <ul className="font-size-16 font_weight_400 font_color_black " style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>Email address</li>
                <li style={{ marginBottom: '8px' }}>First name and last name</li>
                <li style={{ marginBottom: '8px' }}>Phone number</li>
                <li style={{ marginBottom: '8px' }}>Usage data (IP address, browser information, device data)</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 className="font-size-18 font_weight_600 font_color_dark_blue " style={{
              marginBottom: '15px'
            }}>
              How We Use Your Data:
            </h4>
            <div style={{
              backgroundColor: '#f0f9ff',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #0ea5e9'
            }}>
              <ul className="font-size-16 font_weight_400 font_color_black " style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>To provide and maintain our Service</li>
                <li style={{ marginBottom: '8px' }}>To manage Your Account and registration</li>
                <li style={{ marginBottom: '8px' }}>To contact You with updates and communications</li>
                <li style={{ marginBottom: '8px' }}>To provide news, special offers, and information about similar services</li>
                <li style={{ marginBottom: '8px' }}>To manage Your requests and support</li>
                <li style={{ marginBottom: '8px' }}>For business analysis and service improvement</li>
              </ul>
            </div>
          </div>
  <h3 className="fs-4 fw-semibold text-primary mb-3">
    Cookies and Tracking
  </h3>
  <p className="fs-6 fw-normal text-dark mb-4 p-3 rounded" style={{
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    textAlign: 'justify'
  }}>
    We use Cookies and similar tracking technologies including browser cookies, flash cookies, and web beacons to track activity and improve Our Service. You can control cookie preferences through your browser settings.
  </p>

  <h3 className="fs-4 fw-semibold text-primary mb-3">
    Data Security and Retention
  </h3>
  <p className="fs-6 fw-normal text-dark mb-4" style={{
    textAlign: 'justify'
  }}>
    We retain Your Personal Data only as long as necessary for the purposes outlined in this policy. While we strive to protect your data using commercially acceptable means, no method of transmission over the Internet is 100% secure.
  </p>

  <h3 className="fs-4 fw-semibold text-primary mb-3">
    Children's Privacy
  </h3>
  <p className="fs-6 fw-normal text-dark mb-4 p-3 rounded" style={{
    backgroundColor: '#fce7f3',
    border: '1px solid #ec4899',
    textAlign: 'justify'
  }}>
    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware of such data collection, we take steps to remove that information from our servers.
  </p>
        </div>
      </section>

      {/* Payment and Refund Policy Section */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{
          borderLeft: '5px solid #059669',
          paddingLeft: '20px',
          marginBottom: '30px'
        }}>
          <p className="font-size-37 font_weight_700 line_height_40" style={{
            marginBottom: '10px',
            color: '#059669'
          }}>
            Payment & Refund Policy
          </p>
        </div>
        
        <div>
          <h3 className="font-size-25 font_weight_600 font_color_blue mb-4" style={{
            marginBottom: '20px'
          }}>
            Payment Policy
          </h3>
          
          <div className="background_color_light_blue border_radius_25" style={{
            padding: '25px',
            marginBottom: '30px',
            color: 'white'
          }}>
            <h4 className="font-size-20 font_weight_600 line_height_25" style={{
              marginBottom: '15px',
              color: 'white'
            }}>
              Payment Terms:
            </h4>
            <ul className="font-size-14 font_weight_400 line_height_20" style={{
              listStyle: 'disc',
              paddingLeft: '20px',
              margin: '0',
              color: 'white'
            }}>
              <li style={{ marginBottom: '10px' }}>Only valid payment methods acceptable to Codeship Private Limited may be used</li>
              <li style={{ marginBottom: '10px' }}>All refunds will be credited back through the same payment method</li>
              <li style={{ marginBottom: '10px' }}>Credit card charges include taxes, shipping, handling, and agreed amounts</li>
              <li style={{ marginBottom: '10px' }}>Invalid or unverifiable payment methods may result in order suspension or cancellation</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 className="font-size-18 font_weight_600 font_color_dark_blue " style={{
              marginBottom: '15px'
            }}>
              Annual Maintenance and Licensing:
            </h4>
            <div style={{
              backgroundColor: '#f1f5f9',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1'
            }}>
              <ul className="font-size-16 font_weight_400 font_color_black " style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>Annual charges become due on the anniversary date of the End User License Agreement (EULA)</li>
                <li style={{ marginBottom: '8px' }}>Invoices sent 30 days before amounts are due</li>
                <li style={{ marginBottom: '8px' }}>Standard cancellation notice period is 60 days before renewal date</li>
                <li style={{ marginBottom: '8px' }}>Unpaid amounts after 30 days accrue interest at Bank of England base rate plus 8% per month</li>
              </ul>
            </div>
          </div>

          <h3 className="font-size-25 font_weight_600 font_color_blue mb-4" style={{
            marginBottom: '20px'
          }}>
            Refund Policy
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              backgroundColor: '#dcfce7',
              padding: '20px',
              borderRadius: '15px',
              border: '2px solid #16a34a'
            }}>
              <h4 className="font-size-18 font_weight_600 " style={{
                marginBottom: '15px',
                color: '#15803d'
              }}>
                Professional Services
              </h4>
              <p className="font-size-14 font_weight_400 line_height_20" style={{
                marginBottom: '10px',
                color: '#166534',
                textAlign: 'justify'
              }}>
                30-day warranty for Professional Services performed in a proper and professional manner consistent with industry standards.
              </p>
              <p className="font-size-14 font_weight_400 line_height_20" style={{
                color: '#166534',
                textAlign: 'justify'
              }}>
                Client-requested delays are not Codeship's responsibility unless agreed in writing.
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#fee2e2',
              padding: '20px',
              borderRadius: '15px',
              border: '2px solid #dc2626'
            }}>
              <h4 className="font-size-18 font_weight_600 " style={{
                marginBottom: '15px',
                color: '#dc2626'
              }}>
                Hardware & Software
              </h4>
              <p className="font-size-14 font_weight_400 line_height_20" style={{
                color: '#991b1b',
                textAlign: 'justify'
              }}>
                No refunds offered for hardware, software, maintenance and support services once agreed by the customer and past anniversary date.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fef3c7',
            padding: '25px',
            borderRadius: '15px',
            border: '2px solid #f59e0b',
            marginBottom: '30px'
          }}>
            <h4 className="font-size-18 font_weight_600 " style={{
              marginBottom: '15px',
              color: '#d97706'
            }}>
              Training & Services Refund Schedule:
            </h4>
            <div className="font-size-14 font_weight_500 line_height_20" style={{
              color: '#92400e'
            }}>
              <div style={{ marginBottom: '8px' }}>
                <span className="font_weight_700">28+ days before:</span> 100% refund
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="font_weight_700">14-30 days before:</span> 50% refund
              </div>
              <div>
                <span className="font_weight_700">Within 2 weeks:</span> No refund
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{
          borderLeft: '5px solid #7c3aed',
          paddingLeft: '20px',
          marginBottom: '30px'
        }}>
          <p className="font-size-37 font_weight_700 line_height_40" style={{
            marginBottom: '10px',
            color: '#7c3aed'
          }}>
            Why Choose Codeship?
          </p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '-3px 2px 16.4px 0px #0000001a'
        }} className="border_shadow">
          <p className="font-size-16 font_weight_400 " style={{
            color: 'white',
            textAlign: 'justify',
            margin: '0',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Website development gives out the impression of a new start for the business and the best developers in Chennai make sure you stand out from the competitors.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="background_color_grey border_radius_25" style={{
        padding: '30px',
        marginBottom: '40px'
      }}>
        <p className="font-size-25 font_weight_700 font_color_dark_blue mb-4" style={{
          marginBottom: '25px',
          textAlign: 'center'
        }}>
          Contact Us
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '25px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <span className="font-size-16 font_weight_700 font_color_dark_blue">Email:</span>
            <br />
            <a href="mailto:techsupport@codeship.in" className="font-size-14 font_weight_400 font_color_light_blue line_height_18" style={{
              textDecoration: 'none',
              display: 'block',
              marginTop: '8px'
            }}>
              techsupport@codeship.in
            </a>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <span className="font-size-16 font_weight_700 font_color_dark_blue">Website:</span>
            <br />
            <a href="https://codeship.in/contact/" className="font-size-14 font_weight_400 font_color_light_blue line_height_18" style={{
              textDecoration: 'none',
              display: 'block',
              marginTop: '8px'
            }}>
              codeship.in/contact
            </a>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <span className="font-size-16 font_weight_700 font_color_dark_blue">Phone:</span>
            <br />
            <span className="font-size-14 font_weight_400 font_color_black line_height_18" style={{
              display: 'block',
              marginTop: '8px'
            }}>
              +91 93424 88917
            </span>
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p className="font-size-12 font_weight_400 font_color_light_grey line_height_16" style={{
            margin: '0'
          }}>
            <span className="font_weight_600">Address:</span> Codeship Private Limited, No 49/A, 3rd St, Elumalai Nagar, Annai Theresa Nagar, Madipakkam, Chennai, Tamil Nadu 600091
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '2px solid #e5e7eb',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <p className="font-size-12 font_weight_400 font_color_light_grey line_height_16" style={{
          margin: '0'
        }}>
          We reserve the right to change these policy terms and conditions at any time. Any such changes will take effect when posted on the website.
        </p>
      </footer>
    </div>
     </Container>
   </section>
   <Footer />
   </>
  )
}

export default Privacy