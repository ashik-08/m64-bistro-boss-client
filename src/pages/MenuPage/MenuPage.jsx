import { Helmet } from "react-helmet-async";
import banner from "../../assets/menu/banner-menu.jpg";
import Cover from "../../components/Cover/Cover";

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
      </section>
    </>
  );
};

export default MenuPage;
