import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Import your CSS file for styling


const ProductCard = ({ product }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price}</p>
          <p className="product-description">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
