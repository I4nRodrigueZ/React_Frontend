import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/style.css'; // Asegúrate de importar tus estilos

// Importa las imágenes directamente
import fc25 from '../assets/images/juegos/fc25.jpg';
import goku from '../assets/images/juegos/Goku.jpg';
import resize from '../assets/images/juegos/resize.jpg';
import black6 from '../assets/images/juegos/black6.jpg';
import redDead from '../assets/images/juegos/red_dead.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [fc25, goku, resize, black6, redDead];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;