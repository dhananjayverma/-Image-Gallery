import React from 'react';
import "../styles/ImageCrad.css";

const generateRandomTitle = () => {
  const titles = ['Sunset', 'Mountain View', 'Beach Day', 'Forest Adventure', 'City Lights', 'Summer Breeze'];
  return titles[Math.floor(Math.random() * titles.length)];
};

const generateRandomPrice = () => {
  return '$' + (Math.floor(Math.random() * 50) + 10); 
};

const ImageCard = ({ imageUrl }) => {
  const title = generateRandomTitle();
  const price = generateRandomPrice();

  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
      <div className="image-details">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ImageCard;

