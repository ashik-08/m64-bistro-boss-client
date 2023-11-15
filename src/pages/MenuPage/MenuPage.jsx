import { Helmet } from "react-helmet-async";
import banner from "../../assets/menu/banner-menu.jpg";
import Cover from "../../components/Cover/Cover";
import SectionCover from "../../components/SectionCover/SectionCover";
import dessert from "../../assets/menu/dessert-bg.jpeg";

const MenuPage = () => {
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
        <SectionCover
          img={dessert}
          title={"Desserts"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>
    </>
  );
};

export default MenuPage;
