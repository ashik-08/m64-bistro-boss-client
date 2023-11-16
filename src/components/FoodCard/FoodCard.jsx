import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
  const { name, image, recipe, price } = food;

  return (
    <div>
      <div className="bg-[#F3F3F3] p-5 space-y-5 card-effect rounded-xl h-full relative">
        <figure className="border-4 border-blue-gray-200 rounded-lg">
          <img className="rounded-md w-full" src={image} alt="food-image" />
        </figure>
        <div className="space-y-2 px-3 xl:text-lg text-center">
          <p className="text-lg xl:text-xl font-medium">{name}</p>
          <p className="text-para xl:text-lg ">{recipe}</p>
          {price && (
            <p className="absolute top-6 right-8 px-3 py-2 text-white text-sm font-medium bg-[#111827] rounded-lg">
              ${price}
            </p>
          )}
          <button className="btn btn-outline xl:text-lg text-title font-semibold border-0 border-b-2 mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
