import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import './Products.css'

export default function Products(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Products">

      <div className="Products">
        {data.splice(0,props.quantity).map((element) => (
          <ProductCard 
            key={element.id}
            id={element.id}
            image={element.image}
            title={element.title}
            description={element.description}
            price={element.price}
          />
        ))}
      </div>
    </div>
  );
}
