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
import "../Pages/Home.css";

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
          <div className="row">
            <WorkCard_1 index={0} />
            <WorkCard_1 index={1} />
            <WorkCard_2 index={0} />
            <WorkCard_1 index={2} />
            <WorkCard_1 index={3} />
            <WorkCard_2 index={1} />
            <WorkCard_1 index={4} />
            <WorkCard_1 index={5} />
            <WorkCard_2 index={2} />
            <WorkCard_1 index={6} />
            <WorkCard_1 index={7} />
            <WorkCard_2 index={3} />
            <WorkCard_1 index={8} />
            <WorkCard_1 index={9} />
            <WorkCard_2 index={4} />
            <WorkCard_1 index={10} />
            <WorkCard_1 index={11} />
            <WorkCard_2 index={5} />
            <WorkCard_1 index={12} />
            <WorkCard_1 index={13} />
            <WorkCard_2 index={6} />
          </div>
        </Container>
      </section>
      <WorkTogther />
      <Footer />
    </>
  );
}

export default OurWorks;
