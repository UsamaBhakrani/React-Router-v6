import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/home/about">AboutUs</NavLink>
      </li>
      <li>
        <NavLink to="products">Products</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
