import Container from "../../components/Container/Container";
import Banner from "../../components/Home/Banner/Banner";
import CategorySlider from "../../components/Home/CategorySlider/CategorySlider";
import Featured from "../../components/Home/Featured/Featured";
import PopularMenu from "../../components/Home/PopularMenu/PopularMenu";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Container>
        <CategorySlider />
        <PopularMenu />
      </Container>
      <Featured />
      <Container>
        <Testimonial />
      </Container>
    </section>
  );
};

export default HomePage;
