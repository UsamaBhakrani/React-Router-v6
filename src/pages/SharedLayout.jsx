import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
      </ul>
    </>
  );
};

export default SharedLayout;
