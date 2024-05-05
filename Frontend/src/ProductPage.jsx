import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import Products from "./Products/products";
// import DataTransfer from "./DataTransfer";
import axios from "axios";

export default function ProductPage() {
  const { productId } = useParams();
  // const [sendData, SetSendData] = useState(false);
  const [data, setData] = useState();

  const DetailOfProducts = async (dataOfCart) => {
    // SetSendData(true);
    setData(dataOfCart);
    console.log(data);
    console.log(typeof data);
    let responce = await axios.post("http://localhost:3000/cart",dataOfCart
);
    console.log(responce.data);
  };

  return (
    <div>
      <ProductDetail
        productId={productId}
        setProductForCart={DetailOfProducts}
      />
      <Products quantity={4} />

      {/* {sendData ? <DataTransfer dataForTheCart={data} /> : ""} */}
    </div>
  );
}
