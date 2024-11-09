import React from 'react';
import './Productcard.css'; // Add any styles you want

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Price: Rs. {product.price}</p>
      <div className="product-colors">
        {product.colors.map((color, index) => (
          <img
            key={index}
            src={color.link}
            alt={`Color ${index + 1}`}
            className="color-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
