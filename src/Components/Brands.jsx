import veev from "../assets/images/Home/veev.png";
import virtual_auditor from "../assets/images/Home/virtual_auditor.png";
import oi_tetra  from "../assets/images/Home/oi_tetra.png";
import xmile from "../assets/images/Home/xmile.png";
import firstmed from "../assets/images/Home/firstmed.png";
import legendary from "../assets/images/Home/legendary.png";
import fmb from "../assets/images/Home/fmb.png";
import ymca from "../assets/images/Home/ymca.png";
import meals_maven from "../assets/images/Home/meals_maven.png";
import ez_worldship from "../assets/images/Home/ez_worldship.png";
import aayraa from "../assets/images/Home/aayraa.png";
import edu_home  from "../assets/images/Home/edu_home.png";
import {animateCardsOnScroll} from "../Animation/animation"
import { ScrollTrigger } from "gsap/ScrollTrigger";
  
function Brands() {
  const brandLogos = [ veev,virtual_auditor ,oi_tetra , xmile ,firstmed , legendary , fmb ,ymca ,  meals_maven ,ez_worldship ,edu_home ,aayraa ];
   

  return (
    <div className=" overflow-hidden p-0 mt-5">
      <div className="brand-track-wrapper overflow-hidden  w-100 position-relative">
        <div className="brand-track d-flex gap-5">
          {[...Array(20)].map((_, index) => (
            <div className="brand-slide p-4" key={index}>
              <img
                src={brandLogos[index % brandLogos.length]}
                alt="Brand Logo"
                className="brand_swiper object-fit-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
