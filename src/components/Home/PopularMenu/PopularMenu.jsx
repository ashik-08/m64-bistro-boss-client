import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuCard from "../../MenuCard/MenuCard";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  // load data with custom hook
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  // load data with old method
  // const [menu, setMenu] = useState();

  //   useEffect(() => {
  //     fetch("menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const popularItems = data.filter((item) => item.category === "popular");
  //         setMenu(popularItems);
  //       });
  //   }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"from our menu"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {popularItems?.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/menu"
          className="btn btn-outline lg:text-lg font-semibold border-0 border-b-2"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
