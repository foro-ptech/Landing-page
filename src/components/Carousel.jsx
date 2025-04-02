import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import vistaPrincipal from '/vista principal2.png'
import post from '/post.jpg'
import libro from '/libro.jpg'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    <div key="0" className="slide">
      <div className='half-l'>
        <p>Crea nuevas publicaciones al instante</p>  
      </div>
      <div className='half-r'>
        <img className='post' src={post} alt="Imagen no encontrada" />
      </div>
    </div>,
    <div key="1" className="slide">
      <img className='vista' src={vistaPrincipal} alt="Imagen no encontrada" />
    </div>,
    <div key="2" className="slide">
      <div className='info-img'>
        <img className='libro' src={libro} alt="Imagen no encontrada" />
      </div>
      <div className='info'>
        <p>Accede a información y herramientas validadas por expertos en salud.</p>
      </div>
    </div>
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])

  // useEffect(() => {
  //   const timer = setInterval(handleNext, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="carousel">
      <div 
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
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