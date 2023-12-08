import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img height={200} width={200} src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substr(0,20)}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default ProductCard;
