import { Link } from "react-router-dom";
import Container from "../Container/Container";
import MenuCard from "../MenuCard/MenuCard";
import SectionCover from "../SectionCover/SectionCover";
import PropTypes from "prop-types";

const MenuCategory = ({ items, img, title, details }) => {
  return (
    <section>
      {title && <SectionCover img={img} title={title} details={details} />}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items?.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={`/order/${title}`} className="btn btn-outline lg:text-lg font-semibold border-0 border-b-2">
            Order your favorite food
          </Link>
        </div>
      </Container>
    </section>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  img: PropTypes.node,
  title: PropTypes.node,
  details: PropTypes.node,
};

export default MenuCategory;
