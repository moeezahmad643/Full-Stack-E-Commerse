import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import "./css/main.css";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
import NoPage from "./NoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<ProductsPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
  <Footer />
</Router>,
);
