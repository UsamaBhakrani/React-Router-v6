import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">AboutUs</Link>
      </li>
      <li>
        <Link to="products">Products</Link>
      </li>
      <li>
        <Link to="dashboard">Dashboard </Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </ul>
  );
};

export default Nav;
