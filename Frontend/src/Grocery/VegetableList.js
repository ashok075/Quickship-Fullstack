// VegetableList.js
import React from 'react';
import ProductCard from '../Pages/ProductCard';
import './VegetableList.css';

const vegetables = [
  {
    name: 'Carrot',
    description: 'Crunchy and healthy carrots.',
    imageUrl: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
  },
  {
    name: 'Tomato',
    description: 'Ripe and juicy tomatoes.',
    imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=pexels-pixabay-533280.jpg&fm=jpg',
  },
  {
    name: 'Potato',
    description: '.',
    imageUrl: 'https://wallpapercave.com/wp/wp1885857.jpg',
  },
  // Add more vegetables as needed
];

const VegetableList = () => {
  return (
    <div className="vegetable-list">
      <h1 className="page-title"><center>Fresh Vegetables</center></h1>
      {vegetables.map((vegetable, index) => (
        <ProductCard 
          key={index}
          name={vegetable.name}
          description={vegetable.description}
          imageUrl={vegetable.imageUrl}
        />
      ))}
    </div>
  );
};

export default VegetableList;
