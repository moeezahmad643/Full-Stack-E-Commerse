import React from "react";
import './ProductCard.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function ProductCard(props) {
  const navigate = useNavigate(); // Initialize navigate function using useNavigate hook

  const handleProduct = () => {
    console.log("hello");
    // Navigate to another page
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="ProductsCard" onClick={handleProduct}>
      <div className="imageBox">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="textBox">
        <h5>{props.title}</h5>
        <small>${props.price}</small>
      </div>
    </div>
  );
}
