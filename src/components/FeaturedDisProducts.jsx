import React from "react";
import data from "../data";
import FeaturedDisplay from "./FeaturedDisplay";

const FeaturedDisProducts = () => {
  const products = data.map((item) => {
    return <FeaturedDisplay key={item.id} value={item} />;
  });
  return <div className="ProductCard-conatiner">{products}</div>;
};

export default FeaturedDisProducts;
