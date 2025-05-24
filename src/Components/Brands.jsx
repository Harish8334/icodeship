import Amazon from "../assets/images/Home/amazon.png";

function Brands() {
  const brandLogos = [Amazon];

  return (
    <div className=" overflow-hidden p-0">
      <div className="brand-track-wrapper overflow-hidden  w-100 position-relative">
        <div className="brand-track d-flex">
          {[...Array(20)].map((_, index) => (
            <div className="brand-slide p-5" key={index}>
              <img
                src={brandLogos[index % brandLogos.length]}
                alt="Brand Logo"
                className="brand_swiper"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
