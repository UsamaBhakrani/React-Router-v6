import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <nav>Our Navbar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>Our Footer</footer>
    </BrowserRouter>
  );
};

export default App;
