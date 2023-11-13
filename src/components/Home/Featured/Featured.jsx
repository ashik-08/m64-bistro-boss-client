import SectionTitle from "../../SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import Container from "../../Container/Container";
import "../Featured/featured.css";

const Featured = () => {
  return (
    <section className="text-white featured mt-24 md:mt-28 lg:mt-32 xl:mt-36">
      <Container>
        <div className="pt-1 pb-24 md:pb-28 lg:pb-32 xl:pb-36">
          <SectionTitle
            subHeading={"---Check it out---"}
            heading={"from our menu"}
          />
          <div className="md:flex items-center space-y-8 md:space-y-0">
            <figure>
              <img src={featuredImg} alt="" />
            </figure>
            <div className="space-y-2 lg:space-y-3 ml-3 md:ml-8 xl:ml-12">
              <p className="lg:text-2xl">March 20, 2023</p>
              <p className="lg:text-2xl uppercase">WHERE CAN I GET SOME?</p>
              <p className="text-sm lg:text-lg pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptatum ratione laborum expedita corporis nulla illum, neque
                temporibus quas dolorem ipsa facere nostrum aperiam tempore
                eveniet autem consectetur.
              </p>
              <button className="btn btn-outline text-white lg:text-lg font-semibold border-0 border-b-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
