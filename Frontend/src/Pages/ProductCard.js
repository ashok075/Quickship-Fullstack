import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ name, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name.toLowerCase()}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <div className="content">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
