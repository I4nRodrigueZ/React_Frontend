// src/pages/administrador/indexadmin.jsx
import React, { useState, useEffect } from 'react';
import './indexadmin.css';
import { Link } from 'react-router-dom';

const IndexAdmin = () => {
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState('Administrador'); // Aquí puedes poner el nombre real del usuario

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  const formatDate = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="indexadmin-container">
      <div className="header">
        <h1>Bienvenido, {userName}!</h1>
        <p className="current-date">{formatDate(time)}</p>
      </div>

      <div className="crud-buttons">
        <Link to="/administrador/usuarios" className="crud-btn">
          CRUD Usuarios
        </Link>
        <Link to="/administrador/categorias" className="crud-btn">
          CRUD Categorías
        </Link>
        <Link to="/administrador/juegos" className="crud-btn">
          CRUD Juegos
        </Link>
      </div>
    </div>
  );
};

export default IndexAdmin;
