import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <section>
      <NavBar />
      <Outlet />
    </section>
  );
};

export default MainLayout;
