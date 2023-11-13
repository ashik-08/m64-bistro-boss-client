import Container from "../../components/Container/Container";
import Banner from "../../components/Home/Banner/Banner";
import CategorySlider from "../../components/Home/CategorySlider/CategorySlider";
import PopularMenu from "../../components/Home/PopularMenu/PopularMenu";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Container>
        <CategorySlider />
        <PopularMenu />
      </Container>
    </section>
  );
};

export default HomePage;
