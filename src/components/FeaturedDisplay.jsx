import React from "react";

const FeaturedDisplay = (props) => {
  return (
      <div className="product-card">
          <img src={require(`../images/products/${props.value.image}`)} alt="product"></img>
          <h2 className="product-card-title">{props.value.name}</h2>
          <h2 className="product-card-price">{`Rs. ${props.value.price}`}</h2>
          <h2 className="product-card-location">{props.value.location}</h2>
      </div>
  );
};

export default FeaturedDisplay;
{/* <img src={require(`../images/${props.value.image}`)} alt="product"></img>
          <h2 className="product-details-title">{props.value.name}</h2>
          <h2 className="product-details-price">{`$ ${props.value.price}`}</h2> */}