import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

const MainLayout = () => {
  return (
    <section>
      <NavBar />
      <div className="min-h-[calc(100vh-384px)]">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </section>
  );
};

export default MainLayout;
