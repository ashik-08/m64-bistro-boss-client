import { Helmet } from "react-helmet-async";
import banner from "../../assets/menu/banner-menu.jpg";
import Cover from "../../components/Cover/Cover";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import drinks from "../../assets/menu/drinks-bg.jpg";
import useMenu from "../../components/hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../components/MenuCategory/MenuCategory";

const MenuPage = () => {
  // load data with custom hook
  const [menu] = useMenu();
  const offeredItems = menu.filter((item) => item.category === "offered");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");
  const drinksItem = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <section>
        <Cover
          banner={banner}
          heading={"Our menu"}
          title={"Would you like to try a dish?"}
        />
        <SectionTitle
          subHeading={"---Don't miss---"}
          heading={"Today's offer"}
        />
        <MenuCategory items={offeredItems} />
        <MenuCategory
          items={dessertItems}
          img={dessert}
          title={"dessert"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <MenuCategory
          items={pizzaItems}
          img={pizza}
          title={"pizza"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <MenuCategory
          items={saladItems}
          img={salad}
          title={"salad"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <MenuCategory
          items={soupItems}
          img={soup}
          title={"soup"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <MenuCategory
          items={drinksItem}
          img={drinks}
          title={"drinks"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>
    </>
  );
};

export default MenuPage;
