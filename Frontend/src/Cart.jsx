import React, { useEffect, useState } from "react";
import "./css/cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartProduct from "./CartProduct/cartProduct";

export default function Cart(props) {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showData, setShowData] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [price, setPrice] = useState(null);
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else {
      let username = user.email.substring(0, user.email.indexOf("@"));
      username = username.replace(username[0], username[0].toUpperCase());
      setUserName(username);
    }
  }, [user, navigate]);

  useEffect(() => {
    async function getdata() {
      try {
        const response = await axios.get(
          "http://localhost:3000/cart?email=" + user.email
        );
        setCart(response.data); // Update cart state with fetched data
        setShowData(true); // Set showData state to true after data is fetched
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
    getdata();
  }, []); // Fetch cart data when user changes

  return (
    <section className="userProfile">
      <h1>Hi {userName}! Here is your Cart</h1>

      {showData ? (
        cart.map((product, index) => (
          <CartProduct key={index} product={product}  setPrice={setPrice}/>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <div className="totalbar">
        <div>Total Price</div>
        <div>
          <span>{price ? price : 300}</span>
          <span>$</span>
        </div>
      </div>
    </section>
  );
}
