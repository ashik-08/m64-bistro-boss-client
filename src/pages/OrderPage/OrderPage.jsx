import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import banner from "../../assets/order/banner-order.jpg";
import Container from "../../components/Container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../components/hooks/useMenu";
import OrderTab from "../../components/OrderTab/OrderTab";
import "./OrderTab.css";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const categories = ["dessert", "pizza", "salad", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // load data with custom hook
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");
  const drinksItem = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <section>
        <Cover
          banner={banner}
          heading={"Order Now"}
          title={"Would you like to try a dish?"}
        />
        <Container>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="mt-24 md:mt-28 lg:mt-32 xl:mt-36"
          >
            <TabList className="mb-10 md:mb-14 lg:mb-16 xl:mb-20 uppercase flex flex-wrap justify-center gap-5 lg:text-lg xl:text-xl font-medium">
              <Tab>dessert</Tab>
              <Tab>pizza</Tab>
              <Tab>salad</Tab>
              <Tab>soup</Tab>
              <Tab>drinks</Tab>
            </TabList>
            <TabPanel>{<OrderTab items={dessertItems} />}</TabPanel>
            <TabPanel>{<OrderTab items={pizzaItems} />}</TabPanel>
            <TabPanel>{<OrderTab items={saladItems} />}</TabPanel>
            <TabPanel>{<OrderTab items={soupItems} />}</TabPanel>
            <TabPanel>{<OrderTab items={drinksItem} />}</TabPanel>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default OrderPage;
