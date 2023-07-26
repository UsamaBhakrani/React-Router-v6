import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section">
      <h2>HomePage</h2>
      <Link to="about">AboutUs</Link>
      <Link to="dashboard">Dashboard </Link>
      <Link to="login">Login</Link>
      <Link to="products">Products</Link>
    </section>
  );
};
export default Home;
