import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="about">AboutUs</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard </Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>Our Footer</footer>
    </>
  );
};

export default App;
