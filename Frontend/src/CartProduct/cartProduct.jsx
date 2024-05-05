import axios from "axios";
import "./cartProduct.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CartProduct({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [productUpdate, setProductUpdate] = useState(0); // Initialize productUpdate with 0

  useEffect(() => {
    async function showProduct() {
      let response = await axios.get(
        "http://localhost:3000/products/" + product.id
      );
      setProductDetail(response.data);
    }
    showProduct();
    setQuantity(product.quantity)
  }, [product.id]);

  async function remove(id) {
    let response = await axios.post("http://localhost:3000/removeProducts", {
      id: id,
      email: JSON.parse(localStorage.getItem("user")).email,
    });
    if (response.data.res === "ok") {
      console.log("Removing Product");
      window.location.reload();
    }
  }
  return (
    <div className="cartProduct">
      <div className="firstBox">
        <div className="imgBox">
          <img src={productDetail.image} alt={productDetail.title} />
        </div>

        <div className="description">
          <h3>{productDetail.title}</h3>
          <p>{productDetail.category}</p>
        </div>
      </div>

      <div className="secondBox">
        <div className="quantity">
          <button onClick={() =>{ if(quantity!=1) setQuantity(quantity - 1)}} className="values">
            -
          </button>
          <input min={1} type="text" name="" id="" value={quantity} readOnly />
          <button onClick={() => setQuantity(quantity + 1)} className="values">
            +
          </button>
        </div>

        <div className="price">
          <span>${productDetail.price * quantity}</span>
        </div>

        <div className="detail">
          <i className="bi bi-trash-fill" onClick={() => remove(product.id)}></i>
        </div>
      </div>
    </div>
  );
}
