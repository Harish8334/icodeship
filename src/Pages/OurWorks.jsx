import "./OurWorks.css";
import "./About.css";
import Banner from "../Components/Banner";
import Banner_Data from "../Data/Banner_Data";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";
import { Container, Button } from "react-bootstrap";
import WorkCard_1 from "../Components/WorkCard_1";
import WorkCard_2 from "../Components/WorkCard_2";
import "../App.css"


function OurWorks() {
  const { text, image } = Banner_Data.works;
  return (
    <>
      <Header />
      <Banner text={text} image={image} />
      <Brands />
      {/* works */}
      <section>
        <Container className="my_container">
        <WorkCard_1 />
        <WorkCard_2/>
        <WorkCard_1 />
        <WorkCard_2/>
        <WorkCard_1 />
        
        </Container>

      </section>
      <WorkTogther />
      <Footer />
    </>
  );
}

export default OurWorks;
