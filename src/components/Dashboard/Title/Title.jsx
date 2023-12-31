import PropTypes from "prop-types";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/4 mx-auto text-center italic mb-14">
      <p className="text-title md:text-lg lg:text-xl mb-4">{subHeading}</p>
      <h1 className="text-3xl md:text-4xl uppercase border-y-4 py-5">
        {heading}
      </h1>
    </div>
  );
};

Title.propTypes = {
  heading: PropTypes.node,
  subHeading: PropTypes.node,
};

export default Title;
