import React, { useState, useEffect } from "react";

export default function DataTransfer(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Update the cart state when props.dataForTheCart changes
        if (props.dataForTheCart) {
            setCart(prevCart => [...prevCart, props.dataForTheCart]);
        }
    }, [props.dataForTheCart]);

    console.log(cart);

    return null; // or you can return some JSX if needed
}
