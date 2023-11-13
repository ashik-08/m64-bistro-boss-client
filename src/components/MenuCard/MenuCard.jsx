import PropTypes from "prop-types";

const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex">
      <img
        className="rounded-b-full rounded-tr-full w-16 h-16 md:w-28 md:h-24"
        src={image}
        alt=""
      />
      <div className="ml-4 md:ml-8">
        <h2 className="md:text-lg lg:text-xl font-cinzel font-medium uppercase">
          {name} ---------------
        </h2>
        <p className="text-para text-sm md:text-base mt-1 md:mt-2">{recipe}</p>
      </div>
      <span className="text-title md:text-lg lg:text-xl font-semibold">${price}</span>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuCard;
