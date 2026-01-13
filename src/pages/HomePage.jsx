import React,{useContext, useEffect} from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
// import Cart from "./Cart.jsx"; // remove if not used
import {products} from "../config/db.js"
import { Search, ShoppingCart } from 'lucide-react';
import { CartContext } from "../context/AddtocartContextProvider.js";
const HomePage = () => {
  const navigate= useNavigate()
  const {cart,setCart} = useContext(CartContext)
  const addToCart = (id)=>{
    setCart((prevCart)=>{
      return [...prevCart,id]
    })
  }
  

  return (
    <div>  
      {/* Header */}
      <header className="topbar">
        <h1 className="title">Discover</h1>

        <div className="actions">
          <button className="icon-btn" aria-label="Search"><Search/></button>
          <button className="icon-btn cart" aria-label="Cart" onClick={()=>navigate("/cart")}>
            <ShoppingCart/> <span className="badge">{cart.length > 9 ? "9+" : cart.length}</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="hero">
        <img src="bg.jpg" alt="BuyME" className="hero-img" />
        <div className="hero-content">
          <h1>Find Amazing Deals at BuyME</h1>
          <p>Your one-stop shop for everything you love</p>
          <button className="hero-btn">Start Shopping</button>
        </div>
      </div>

      <marquee>Shop with BuyME now to get great deals at cheaper rates 🛒</marquee>

      {/* ================= MEN ================= */}
      <div className="subhero">
        <img src="menshero.jpg" alt="malehero" />
        <h1>Men's Wear</h1>
      </div>

      <div className="product-array">
        {products
          .filter(product => product.category === "men")
          .map(product => (
            <div className="product-card" key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
              <div className="card-image-div">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="priceandimage">
                <p className="product-price">${product.price}</p>
                <ShoppingCart onClick={(e)=>{e.stopPropagation(); addToCart(product.id)}}/>
              </div>
            </div>
          ))}
      </div>

      {/* ================= WOMEN ================= */}
      <div className="subhero">
        <img src="womenshero.jpg" alt="femalehero" />
        <h1>Women's Wear</h1>
      </div>

      <div className="product-array">
        {products
          .filter(product => product.category === "women")
          .map(product => (
            <div className="product-card" key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
              <div className="card-image-div">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="priceandimage">
                <p className="product-price">${product.price}</p>
                <ShoppingCart onClick={(e)=>{e.stopPropagation(); addToCart(product.id)}}/>
              </div>
            </div>
          ))}
      </div>

      {/* ================= CHILDREN ================= */}
      <div className="subhero">
        <img src="childrenshero.jpg" alt="childhero" />
        <h1>Children's Wear</h1>
      </div>

      <div className="product-array">
        {products
          .filter(product => product.category === "children")
          .map(product => (
            <div className="product-card" key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
              <div className="card-image-div">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="priceandimage">
                <p className="product-price">${product.price}</p>
                <ShoppingCart onClick={(e)=>{e.stopPropagation(); addToCart(product.id)}}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;