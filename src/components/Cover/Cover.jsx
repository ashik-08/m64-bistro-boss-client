import PropTypes from "prop-types";

const Cover = ({ banner, heading, title }) => {
  return (
    <section className="relative">
      <img className="w-screen object-cover" src={banner} alt="Menu" />
      <div className="bg-[#15151599] w-max absolute bottom-[15%] xl:bottom-1/4 lg:bottom-[20%] translate-x-1/2 right-1/2 p-5 md:px-24 md:py-16 lg:px-40 lg:py-20 xl:px-60 xl:py-28 2xl:px-72 2xl:py-32 flex flex-col justify-center items-center text-white font-cinzel uppercase">
        <h1 className="text-lg md:text-7xl xl:text-8xl font-bold">{heading}</h1>
        <p className="text-xs md:text-lg lg:text-xl font-semibold">{title}</p>
      </div>
    </section>
  );
};

Cover.propTypes = {
  banner: PropTypes.node,
  heading: PropTypes.node,
  title: PropTypes.node,
};

export default Cover;
