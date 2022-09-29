import "./app.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";

import Users from "./pages/user/Users";
import User from "./pages/user/User";
import NewUser from "./pages/user/NewUser";

import Products from "./pages/product/Products";
import NewProduct from "./pages/product/NewProduct";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/users" element={<Users />} />
            <Route exact path="/user/new" element={<NewUser />} />
            <Route path="/user/:id" element={<User />} />

            <Route exact path="/products" element={<Products />} />
            <Route exact path="/product/new" element={<NewProduct />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
