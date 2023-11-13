import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuCard from "../../MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"from our menu"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {menu?.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline lg:text-lg font-semibold border-0 border-b-2">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
