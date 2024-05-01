import React, { useEffect, useState } from "react";;
import "./css/ProductsPage.css";
import HeroSection from "./HeroSection/HeroSection.jsx";
import Products from "./Products/products.jsx";
import Companies from "./Companies/Companies.jsx";

export default function ProductsPage() {
  return (
    <>
      <HeroSection />
      <h1>Featured Products</h1>
      <Products quantity={20} />
      <Companies />
    </>
  );
}
