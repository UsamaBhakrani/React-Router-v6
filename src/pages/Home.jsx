import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <section className="section">
      <Nav />
      <h2>Home</h2>
      <Outlet />
    </section>
  );
};
export default Home;
