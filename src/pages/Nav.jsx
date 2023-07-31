import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          AboutUs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="products"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Products
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
