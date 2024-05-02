import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import Products from "./Products/products";

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <ProductDetail productId={productId} />
      <Products quantity={4} />
    </div>
  );
}