import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: 'image1.jpg', text: 'Text for Image 1' },
    { src: 'image2.jpg', text: 'Text for Image 2' },
    { src: 'image3.jpg', text: 'Text for Image 3' },
    { src: 'image4.jpg', text: 'Text for Image 4' }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-card ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="front">
              <img src={image.src} alt={`Image ${index + 1}`} />
            </div>
            <div className="back">
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>Prev</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;
