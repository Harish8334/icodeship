import veev from "../assets/images/Home/brands/veev.png";
import virtual_auditor from "../assets/images/Home/brands/visual_auditor.png";
import oi_tetra  from "../assets/images/Home/brands/oi_tetra.png";import firstmed from "../assets/images/Home/brands/firstmed.png";
import legendary from "../assets/images/Home/brands/legendary.png";
import fmb from "../assets/images/Home/brands/fmb.png";
import ymca from "../assets/images/Home/brands/ymca.png";
import xark from "../assets/images/Home/brands/xark.png";
import call_back from "../assets/images/Home/brands/call_back.png";
import xity from "../assets/images/Home/brands/xity.png";
import ultimasign from "../assets/images/Home/brands/ultimasign.png";
import svi from "../assets/images/Home/brands/svi.png";
import farmbrite from "../assets/images/Home/brands/farmbrite.png";
import policy_nation from "../assets/images/Home/brands/policy_nation.png";
import meals_maven from "../assets/images/Home/brands/meals_maven.png";
import ez_worldship from "../assets/images/Home/brands/ship_ez.png";
import aayraa from "../assets/images/Home/brands/aayraa.png";
import edu_home  from "../assets/images/Home/brands/edu_home.png";
import tattoo  from "../assets/images/Home/brands/tattoo.png";
import {highlightCenterLogo} from "../Animation/animation"
import { useEffect, useRef } from "react";
  
function Brands() {
  const brandLogos = [
    veev, virtual_auditor, oi_tetra, firstmed, legendary,
    fmb, ymca, meals_maven,policy_nation ,ultimasign,svi,farmbrite, ez_worldship,call_back, edu_home, aayraa,tattoo, xark , xity
  ];
  const trackRef = useRef(null);

  useEffect(() => {
    const cleanup = highlightCenterLogo(trackRef);
    return () => cleanup && cleanup();
  }, []);

  return (
    <div className="overflow-hidden p-0 mt-md-5">
      <div className="brand-track-wrapper overflow-hidden w-100 position-relative">
        <div ref={trackRef} className="brand-track  d-flex gap-5">
          {[...Array(30)].map((_, index) => (
            <div className="brand-slide p-4" key={index}>
              <img
                src={brandLogos[index % brandLogos.length]}
                alt="Brand Logo"
                className="brand_swiper object-fit-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;

