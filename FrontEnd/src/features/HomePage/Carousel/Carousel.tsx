import React, { useEffect, useState } from 'react';
import image1 from "../../../images/1.jpg";
import image2 from "../../../images/2.jpg";
import image3 from "../../../images/3.jpg";

import './Carousel.css'; // Import your custom CSS file

export default function Carousel() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const directions ={right: ">" ,left:"<"}

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return (
    <div className="carousel-container">
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            {index === currentIndex && (
              <div className="slide-message">
                <p className="message-text greycliffcf-bold">Welcome to Multilab</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="nav-button prev" onClick={prevSlide}>{directions.left}</button>
        <button className="nav-button next" onClick={nextSlide}>{directions.right}</button>
      </div>
    </div>
  );
}
