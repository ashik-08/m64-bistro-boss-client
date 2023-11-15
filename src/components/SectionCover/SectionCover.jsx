import PropTypes from "prop-types";
import "./SectionCover.css";

const SectionCover = ({ img, title, details }) => {
  return (
    <section
      style={{ backgroundImage: `url("${img}")` }}
      className="mt-24 md:mt-28 lg:mt-32 xl:mt-36 cover p-12 md:px-36 md:py-28 lg:px-48 lg:py-32 xl:px-60 xl:py-40 2xl:px-96 2xl:py-48"
    >
      <div className="bg-[#15151599] text-center text-white p-3 md:p-12 lg:px-16 xl:px-20">
        <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-cinzel font-semibold uppercase lg:mb-4">
          {title}
        </h1>
        <p className="text-xs md:text-base font-normal">{details}</p>
      </div>
    </section>
  );
};

SectionCover.propTypes = {
  img: PropTypes.node,
  title: PropTypes.node,
  details: PropTypes.node,
};

export default SectionCover;
