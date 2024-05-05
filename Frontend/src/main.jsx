import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./css/main.css";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NoPage from "./NoPage/NoPage";
import Cart from "./Cart";
import Login from "./GetInfo/Login";
import Signup from "./GetInfo/Signup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<ProductsPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="*" element={<NoPage />} />
  </Routes>
  <Footer />
</Router>,
);
