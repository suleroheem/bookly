import Login from "./login/login";
import React from "react";
import Register from "./Register/Register";
import Home from "./shared-components/homepage";
import About from "./shared-components/about";
import Shop from "./shared-components/shop";
import Search from "./search/search";
import Contact from "./shared-components/contact"
import Order from "./shared-components/order";
import Cart from "./cart/cart"
import Checkout from "./checkout/checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/homepage" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
