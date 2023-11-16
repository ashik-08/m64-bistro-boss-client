import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import quote from "../../../assets/home/quote-left.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center px-10 md:px-20 xl:px-32">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <figure className="w-20 mt-12 mb-10">
                <img src={quote} alt="" />
              </figure>
              <p className="md:text-lg">{review.details}</p>
              <p className="text-[#CD9003] text-2xl font-medium mt-2">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
