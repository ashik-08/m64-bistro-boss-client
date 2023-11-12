import Container from "../../components/Container/Container";
import Banner from "../../components/Home/Banner/Banner";
import CategorySlider from "../../components/Home/CategorySlider/CategorySlider";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Container>
        <CategorySlider />
      </Container>
    </section>
  );
};

export default HomePage;
