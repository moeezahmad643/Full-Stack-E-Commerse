import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import Loader from "../Loader/Loader";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";

export default function ProductDetail(props) {
  const { pathname } = useLocation();
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/products/" + props.productId
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        setProduct(result);
        // Update the product state with the fetched data
        setColor(result.colors[0]);
        setSize(result.sizes[0]);
      } catch (error) {
        setProduct("Error");
      }
    };

    fetchData();
  }, [props.productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const BuyNow = () => {
    console.log("hello I am Buy Now");
  };
  const AddToCart = () => {
    props.setProductForCart({
      id: props.productId,
      color: color,
      size: size,
    });
  };

  if (product === "Error")
    return (
      <center style={{ margin: "140px", color: "#000000" }}>
        <h1>Product Not Found</h1>
      </center>
    );
  if (!product) return <Loader />;

  return (
    <>
      <section className="ProductDetail">
        <div className="ImgBox">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="DetailBox">
          <h1>{product.title}</h1>
          <h1 className="Price">${product.price}</h1>
          <p>
            Category: <i>{product.category}</i>
          </p>
          <span className="List">
            <h3>COLOR</h3>
            <ul>
              {product.colors.map((element) => (
                <li
                  style={
                    color == element
                      ? { background: "black", color: "white" }
                      : { color: "black" }
                  }
                  onClick={() => setColor(element)}
                  key={element}
                >
                  {element}
                </li>
              ))}
            </ul>
          </span>
          <hr />
          <span className="List">
            <h3>SIZE</h3>
            <ul>
              {product.sizes.map((element) => (
                <li
                  style={
                    size == element
                      ? { background: "black", color: "white" }
                      : { color: "black" }
                  }
                  onClick={() => setSize(element)}
                  key={element}
                >
                  {element}
                </li>
              ))}
            </ul>
          </span>
          <hr />
          <div className="Buttons">
            <button className="BuyNow" onClick={BuyNow}>
              <i className="bi bi-bag-check"></i>Buy Now
            </button>
            <button className="AddToCart" onClick={AddToCart}>
              <i className="bi bi-cart"></i>Add To Cart
            </button>
          </div>
        </div>
      </section>
      <section className="ProductDescription">
        <div>
          <h3>Rating</h3>
          <Rating name="read-only" value={product.rating.rate} readOnly />
          <p>Based On the Reviews of {product.rating.count} Peoples</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
}
