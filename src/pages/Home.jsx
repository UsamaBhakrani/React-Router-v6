import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h2>Home</h2>
      <Outlet />
    </section>
  );
};
export default Home;
