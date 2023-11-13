import Container from "../../components/Container/Container";
import Banner from "../../components/Home/Banner/Banner";
import CategorySlider from "../../components/Home/CategorySlider/CategorySlider";
import Featured from "../../components/Home/Featured/Featured";
import PopularMenu from "../../components/Home/PopularMenu/PopularMenu";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Container>
        <CategorySlider />
        <PopularMenu />
      </Container>
        <Featured />
    </section>
  );
};

export default HomePage;
