import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import Products from "./Products/products";
import DataTransfer from "./DataTransfer";


export default function ProductPage() {
  const { productId } = useParams();
  const [sendData, SetSendData] = useState(false);
  const [data, setData] = useState();

  const DetailOfProducts = (dataOfCart) => {
    SetSendData(true);
    setData(dataOfCart)
  };

  return (
    <div>
      <ProductDetail
        productId={productId}
        setProductForCart={DetailOfProducts}
      />
      <Products quantity={4} />

      {sendData ? <DataTransfer dataForTheCart={data} /> : ""}

    </div>
  );
}
