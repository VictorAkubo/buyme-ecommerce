import React, { useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { products } from "../config/db";
import { ShoppingBag } from "lucide-react";
const ProductDetails = () => {
  const params = useParams();
  const product= products.find((product)=>product.id === Number(params.id))
  const [count, setCount] = useState(5);
  const [rating, setRating] = useState(5); // default 5 stars
  const [dropDown,setDropDown] = useState(false)
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="product-details-container">
      <div className="productheroimage">
        <img src={"/"+product.img} alt="Mens classic top" />
      </div>

      <div className="product-info">
        <p className="productname">{product.name}</p>

        <div className="productdetailspriceandcount">
          <p className="price">₦{product.price}</p>

          <div className="productdetailscount">
            <span className="decrement" onClick={handleDecrement}> — </span>
            <p className="digit">{count}</p>
            <span className="increment" onClick={handleIncrement}> + </span>
          </div>
        </div>
      </div>

      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ cursor: "pointer", color: star <= rating ? "#ffc107" : "#ccc", fontSize: "1.5rem" }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="description">
        <div className="descriptiontitleanddropdown">
          <p>Description</p>
          <img style={dropDown ? { transform: "rotate(180deg)" } : {transform: "rotate(0deg)"}} src="/dropdown.png" alt="Dropdown icon" onClick={()=>setDropDown(!dropDown)}/>
        </div>
        </div>
        <p className="descriptiontext">{dropDown ? product.description : ""}</p>


      <div className="addtocartbutton">Add to Cart <ShoppingBag/> </div>
    </div>
  );
};

export default ProductDetails;