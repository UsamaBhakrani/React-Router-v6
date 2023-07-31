import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Nav from "./pages/Nav";

const App = () => {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <footer></footer>
    </>
  );
};

export default App;
