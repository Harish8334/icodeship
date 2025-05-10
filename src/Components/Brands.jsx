import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Amazon from "../assets/images/Home/amazon.png"
function Brands() {
  const brandLogos = [Amazon];
  return (
   <section className='mb-5 mt-5'>
         <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 1000, 
        disableOnInteraction: false,
      }}

      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      speed={20000} 
      grabCursor={true}
    >
      {[...Array(50)].map((_, index) => (
    <SwiperSlide key={index} className="font-size-40">
      <img
        src={brandLogos[index % brandLogos.length]}
        alt="Brand Logo"
        className="brand_swiper "
      />
    </SwiperSlide>
  ))}
    </Swiper>
   </section>

  )
}

export default Brands