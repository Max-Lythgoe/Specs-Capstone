import React from "react";
import phonePic from "./iphones-featured.png";
import "./MainProduct.css";

const MainProduct = () => {
  return (
    <div>
      <div className="main-container">
        <div className="main-pic">
          <img
            className="header-img"
            src={phonePic}
            alt="featured product"
          ></img>
        </div>
        <div className="featured-container">
          <h1>iPhone 13 Pro</h1>
          <h1 className="striked">
            <s>$999.99</s>
          </h1>
          <h1>$899.99</h1>
          <button className="view-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
