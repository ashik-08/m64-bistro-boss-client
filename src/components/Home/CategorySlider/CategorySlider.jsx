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

const CategorySlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12 md:mt-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-center text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold -mt-7 md:-mt-12 lg:-mt-14 xl:-mt-16 uppercase">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-center text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold -mt-7 md:-mt-12 lg:-mt-14 xl:-mt-16 uppercase">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-center text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold -mt-7 md:-mt-12 lg:-mt-14 xl:-mt-16 uppercase">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-center text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold -mt-7 md:-mt-12 lg:-mt-14 xl:-mt-16 uppercase">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-center text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold -mt-7 md:-mt-12 lg:-mt-14 xl:-mt-16 uppercase">
            Vegetables
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
