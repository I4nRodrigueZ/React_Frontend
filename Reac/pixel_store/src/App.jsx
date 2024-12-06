// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar Router, Routes y Route
import AOS from 'aos';
import 'aos/dist/aos.css'; // Estilos de AOS
import './assets/styles/style.css'; // Importa tus estilos personalizados

import Header from './components/Header';  // Importa Header
import Icons from './components/Icons';    // Importa Icons
import Scroll from './components/Scroll';  // Importa Scroll

import Home from './pages/index/Home';     // Importa la página Home
import Login from './pages/login/Login';   // Importa Login
import Register from './pages/registra/Register'; // Importa Register
import IndexAdmin from './pages/administrador/indexadmin'; // Importa IndexAdmin
import Usuario from './pages/administrador/usuarios/Usuario'; // Importa la vista de usuarios

function App() {
  useEffect(() => {
    AOS.init({ offset: 1 });
  }, []);

  return (
    <Router>
      <Header /> {/* Componente Header común para todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal con Hero, Carousel, y Cards */}
        <Route path="/login" element={<Login />} /> {/* Página Login */}
        <Route path="/register" element={<Register />} /> {/* Página Register */}
        <Route path="/administrador" element={<IndexAdmin />} /> {/* Página principal de administración */}
        <Route path="/administrador/usuarios" element={<Usuario />} /> {/* Vista de usuarios */}
      </Routes>
      <Icons /> {/* Íconos que aparecen en todas las páginas */}
      <Scroll /> {/* Scroll que aparece en todas las páginas */}
    </Router>
  );
}

export default App;
