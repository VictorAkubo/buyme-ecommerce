import React, { useState, useContext, useEffect } from "react";
import "./Cart.css";
import { CartContext } from "../context/AddtocartContextProvider";
import { products } from "../config/db.js";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Map cart IDs to products with default count = 1
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const mappedItems = cart
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean) // remove undefined
      .map((product) => ({ ...product, count: 1 })); // add count
    setCartItems(mappedItems);
  }, [cart]);

  // Increment / Decrement handlers
  const incrementCount = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
  };

  const decrementCount = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item));
  };

  return (
    <div className="cart-container">
      <div className="cartheader">
        <p>Cart ({cartItems.length})</p>
      </div>

      <div className="freetoken">
        <p className="free">✓ Free shipping for you</p>
        <p className="limited">Limited offer</p>
      </div>

      <div className="option">
        <p className="all">All</p>
        <p className="selected">Selected</p>
      </div>

      <div className="cartitems">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cartproductcard" key={item.id}>
              <div className="cartproductimage">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="cartproductdetails">
                <p className="title">{item.name}</p>
                <h3 className="previous">₦{item.oldPrice.toLocaleString()}</h3>
                <h3 className="current">₦{item.price.toLocaleString()}</h3>
                <p className="appliedpromo">
                  after applying promo <span>₦{(item.oldPrice - item.price).toLocaleString()}</span>
                </p>
              </div>

              <div className="cartproductcounter">
                <span className="decrement" onClick={() => decrementCount(item.id)}> — </span>
                <p className="count">{item.count}</p>
                <span className="increment" onClick={() => incrementCount(item.id)}> + </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;