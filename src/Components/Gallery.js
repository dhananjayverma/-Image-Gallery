// Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import snakeImage from '../image/snake.jpg';
import '../styles/Gallery.css';

const Gallery = () => {
 
  const galleryData = [
    { id: 1, title: 'Image 1', price: '$10', imageUrl:snakeImage },
    { id: 2, title: 'Image 2', price: '$15', imageUrl: snakeImage},
    { id: 3, title: 'Image 3', price: '$20', imageUrl: snakeImage },
    { id: 4, title: 'Image 4', price: '$10', imageUrl: snakeImage },
    { id: 5, title: 'Image 5', price: '$15', imageUrl: snakeImage },
    { id: 6, title: 'Image 6', price: '$20', imageUrl: snakeImage},
    { id: 7, title: 'Image 7', price: '$10', imageUrl: snakeImage},
    { id: 8, title: 'Image 8', price: '$15', imageUrl: snakeImage },
    { id: 9, title: 'Image 9', price: '$20', imageUrl: snakeImage },
  ];

  return (
    <div className="gallery">
      {galleryData.map(item => (
        <ImageCard key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}

export default Gallery;
