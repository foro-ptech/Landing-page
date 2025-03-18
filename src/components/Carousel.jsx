import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    <div key="1" className="slide" style={{ backgroundColor: '#ff9999' }}>Slide 1</div>,
    <div key="2" className="slide" style={{ backgroundColor: '#99ff99' }}>Slide 2</div>,
    <div key="3" className="slide" style={{ backgroundColor: '#9999ff' }}>Slide 3</div>
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length-1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length-1 ? 0 : prev + 1));
    console.log(`active index: ${activeIndex}`)
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? 'active' 
              : index === (activeIndex + 1) % items.length ? 'next' 
              : 'prev'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      
      <button className="carousel-control prev" onClick={handlePrev}>&#10094;</button>
      <button className="carousel-control next" onClick={handleNext}>&#10095;</button>
      
      <div className="indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;