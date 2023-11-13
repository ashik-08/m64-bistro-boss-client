import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../CategorySlider/styles.css";
// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

const CategorySlider = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"order online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 lg:mt-16 font-cinzel text-center text-white text-xs md:text-2xl lg:text-3xl xl:text-4xl uppercase"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="absolute translate-x-1/2 right-1/2 bottom-1 md:bottom-2 lg:bottom-3.5 xl:bottom-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="absolute translate-x-1/2 right-1/2 bottom-1 md:bottom-2 lg:bottom-3.5 xl:bottom-5">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="absolute translate-x-1/2 right-1/2 bottom-1 md:bottom-2 lg:bottom-3.5 xl:bottom-5">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="absolute translate-x-1/2 right-1/2 bottom-1 md:bottom-2 lg:bottom-3.5 xl:bottom-5">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="absolute translate-x-1/2 right-1/2 bottom-1 md:bottom-2 lg:bottom-3.5 xl:bottom-5">
            Vegetables
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
