// src/pages/index/Home.jsx
import React from 'react';
import Carousel from '../../components/Carousel';   // Importa Carousel
import Card from '../../components/Card';           // Importa Card
import Header from '../../components/Header';       // Importa Header
import jue from '../../assets/images/stalker2.jpg';  // Imagen del Hero

// Importa imágenes para las tarjetas
import fc25 from '../../assets/images/juegos/fc25.jpg'; 
import goku from '../../assets/images/juegos/goku.jpg'; 
import resize from '../../assets/images/juegos/resize.jpg';  
import black6 from '../../assets/images/juegos/black6.jpg';  
import redDead from '../../assets/images/juegos/red_dead.jpg';

const Home = () => {
  const cardsData = [
    { id: 1, image: fc25 },
    { id: 2, image: goku },
    { id: 3, image: resize },
    { id: 4, image: black6 },
    { id: 5, image: redDead },
  ];

  return (
    <>
      <Header />  {/* Header se muestra en la parte superior */}

      <section className="hero">
        <div className="hero-text">
          <h5 data-aos="fade-right" data-aos-duration="1400">#Heart of Chornobyl</h5>
          <h1 data-aos="zoom-in-left" data-aos-duration="1400" data-aos-delay="200">- S.T.A.L.K.E.R 2</h1>
          <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="300">
            Experimenta una jugabilidad única, con elementos de un juego de disparos en primera persona, simulación inmersiva y terror. Juega un papel importante en una historia no lineal que se desarrolla en el entorno de una oscura ciencia ficción posapocalíptica local. Tu deber es decidir el destino de la Zona.
          </p>
          <div className="main-hero" data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">
            <a href="#" className="btn">Order now</a>
            <a href="#" className="price">$80.99 | <span>Regular Price</span></a>
          </div>
        </div>
        <div className="hero-img" data-aos="zoom-in" data-aos-duration="1400">
          <img src={jue} alt="stalker" />
        </div>
      </section>

      <Carousel /> {/* Carousel se muestra después del Hero */}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Renderiza las tarjetas dinámicamente */}
        {cardsData.map(card => (
          <Card key={card.id} image={card.image} />
        ))}
      </div>
    </>
  );
};

export default Home;
