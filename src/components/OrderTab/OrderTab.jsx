import FoodCard from "../FoodCard/FoodCard";
import PropTypes from "prop-types";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item) => (
        <FoodCard key={item._id} food={item} />
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
