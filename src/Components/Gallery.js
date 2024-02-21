// Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import '../styles/Gallery.css';

const Gallery = () => {
  // Dummy data for gallery
  const galleryData = [
    { id: 1, title: 'Image 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Image 2', price: '$15', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Image 3', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Image 4', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Image 5', price: '$15', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Image 6', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Image 7', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Image 8', price: '$15', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Image 9', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
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
